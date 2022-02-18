import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTVhYmNkZS03ODcwLTQ4ZGMtOTdiMC03NzNlYzk5ODYxZTUiLCJqdGkiOiJkYmIwZTIwZDAyMmFjYTBiNWM1YThiYWMwZTllNDYwZDYyMjM1MTVhMTQwYWQ5NzA0NjEwMzIxODdlMWEzYTQ0MjZhOWI2ZWFjZWVlODlkNCIsImlhdCI6MTY0NDQ4MzUwNC41MDI5NjEsIm5iZiI6MTY0NDQ4MzUwNC41MDI5NjUsImV4cCI6MTY0NDU2OTkwNC40OTYyNzQsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.0i2OV5RJnN-YzXs4e9Z3ofHjETS6UF_JLQuXWpgpV5Ummqgvhs8A-9jlWFiiruVAzIVgVRr22sc4P64P4IMR2OXLq247rKkxYl_uhzsRB5FlXUNNWqs86XDwFU3pquqNC3aNWVSBFx6fH2bZVYkpZhUIeqCtsX9Ka7eGzIhA-1cqsierQv8q0EJUKwOqAfbgz2PsteubDqPA3d7SNmgEguFc-Xf3ML6_DTPyRWfiZowilpWmXJtsUeJZ1EaiE824G4lrO3PD1LXCdgIm929xL4R-ADbMnfaoT9g-pE8w_uu9OmRFlWbwI4WXi4htPMJn-9_hnrPV3VPAMCk7gE7p3yMrEfwkXUn2oACvRQWGgiLSIcjuXMl057grCNsl4dIPySq_22u2yQgAERzC3sxPVRZr84iaNSciDRqhzypaKew3aKcMDj3gp4a3O83qoAIJ9NQ1RlmpYmkqweh3hiJcZSgrBJb_bZ5Ur2-jNBc14CTGU8SMgHuUmJObR5uRRQ1qHSh8gBd2VELAjAvc2Bvn5NJ-4d2vxQs9ZKr_iZUyrZDhzSly9mcxokppSKWrL3sp86pP3DiRl1d0bPrMVVr7GYQHM6xFwHL9QJBOuNDVu8h1SP08b6-f_bMaOEYJibCatHGCtYXM3mPa331C5Y9KYRK2KflkOuO9n9owSg1qnGY`,
      },
    };
  });

  return new ApolloClient({
    link: from([authLink, httpLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });
};

export const GETBLOGCATEGORIES = gql`
  query GqlGetBlogCategories($blog_id: ID!) {
    categoriesByBlogID(blog_id: $blog_id) {
      id
      name
    }
  }
`;

export const CREATENEWCATEGORY = gql`
  mutation CreateCategory($name: String!, $blog_id: ID!, $slug: String!) {
    createCategory(name: $name, blog_id: $blog_id, slug: $slug) {
      id
      name
    }
  }
`;

export const createNewCategory = async (category: string) => {
  const client = createApolloClient("https://muse.sytbuilder.com/graphql");
  const response = await client.mutate({
    mutation: CREATENEWCATEGORY,
    variables: {
      name: category,
      blog_id: 34,
      slug: category.toLowerCase().replace(/ /g, "-"),
    },
  });
  const { id, name } = response.data.createCategory;
  return { label: name, value: id, status: true };
};

export const GET_IMAGES = gql`
  query GetImages($count: Int!, $page: Int!) {
    images(count: $count, page: $page) {
      images {
        id
        url
        created_at
      }
      paginatorInfo {
        currentPage
        lastPage
      }
    }
  }
`;

export const GET_S3_IMAGES = gql`
  query getS3Images($count: Int, $startAfter: String) {
    getS3Images(count: $count, startAfter: $startAfter) {
      id
      title
      url
    }
  }
`;

export const UPLOAD_IMAGE = gql`
  mutation uploadImage($input: ImageUploadInput!) {
    uploadImage(input: $input) {
      id
      url
      created_at
    }
  }
`;
