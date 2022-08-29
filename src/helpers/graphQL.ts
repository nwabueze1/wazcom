import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eeXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NjU4NWQwMi0yYmFlLTQyNWEtYjk3Mi04OGYyYzZiMjQwNTciLCJqdGkiOiI4MjJkZjdiYzk0YmNlNmZjNzNkOGY1YjFiMTUyYjdhODQyM2E3N2M2YjhkZTQ2MzQ2NWQ2ZjgxMDMxZTc2M2I0Zjk2MTRhMzRiYzkyZTczMyIsImlhdCI6MTY2MTc2NDMyNC44MTU0NDIsIm5iZiI6MTY2MTc2NDMyNC44MTU0NDUsImV4cCI6MTY2MTg1MDcyNC44MDc3MjYsInN1YiI6IjY1Iiwic2NvcGVzIjpbXX0.N8uFyfWkyTiIMjK50m5MSpjxIMW_YSoItztWbHF_Uy9iKyVxIAiC5jhCsxQPTL35c9t5Ar1TTu0NB6BGe5WbdN_fD8Prbuahny7myvB-FQrM1Fq12TWYiBjH5k2EhPG15kol3wKVum5rnKu4KT3_19atXmvhWS7Mw28hA4J0QKRpr5uXU4L-khW2rnPRDiFK3_1dEXIZ2o1bPAmK70fOR3icOnKKa29tm23nJiUhtUJqtdA-0y5MJi9Ldo-gVFvr3ryWmr7W1d176s59C9Fjv1bUynubyMLkpxj0CCjX5QpeWOCsxxWNWwbMrGdPAICl7NfZ3mTZfEDxjX20uBTrossvDkynMibG245riygMn9hxn56CCcsy6Zr4bsdacOjoRhVCocqDq3nmk9PfckZVRJcJKvZwgsVlTBxZ6rUCsLYwsnuVtS3NV5Re1FspUuni1fWcDtQsEeveoGwpcBXmzlP-V-4qMA9BsUf8BPo17_5KbK_UXvv8NUSbtV3Ay4VSdJ83_xEohfIipYsuX3p0nrKJ1IpWnMHJ2FhjhBTUy3fqnQXN7OjbEmijaPg2pDZ8cltTYrxXaNQOdZteBkJSztPtCReoZyzveJnRmR9I2H3SKAGibgAKgFI8Ly1In86kF8iFHHMVPV5MKRkKBXPW6mwFKVuF_advTRgZnRbXRgg`,
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
        title
        alternative_text
        caption
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
      title
      alternative_text
      caption
      url
      created_at
    }
  }
`;

export const UPDATE_IMAGE = gql`
  mutation UpdateImage(
    $id: ID!
    $title: String
    $caption: String
    $alternative_text: String
    $url: String
  ) {
    updateImage(
      id: $id
      title: $title
      caption: $caption
      alternative_text: $alternative_text
      url: $url
    ) {
      id
      title
      alternative_text
      caption
      url
      created_at
    }
  }
`;

export const DELETE_IMAGE = gql`
  mutation deleteImage($id: ID!) {
    deleteImage(id: $id) {
      id
      url
      created_at
    }
  }
`;
