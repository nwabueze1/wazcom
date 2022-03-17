import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTlmMTNkNi01NWIwLTRmMmUtOTYxZC1lYjkwNGFlYTRmYzYiLCJqdGkiOiI0MThmYzlhMWMwM2NiZGYzNGVmYTRkOTFlNTczMWExMzgxOWZhZTlhMGRhYTI1ZDM0ODRlZjdkMzFiMTQ2ODdmYzExMjIzZjUzZjkwYjk4NCIsImlhdCI6MTY0NzQyMjM3My45MTQwNzIsIm5iZiI6MTY0NzQyMjM3My45MTQwNzYsImV4cCI6MTY0NzUwODc3My45MDgxNzUsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.ZVynEaO_8jrGhqsInY5awv8RVC5u_nbl7DCReKCVWy9k5lqUWb5V0uF36a0MoT65JILhNSrCbV17vJJhH85G7dmU3MYBRwVQeibJBOW-7HNdiflEpM9dhaQweQ3rl1_NjubrBqlXkHUzro7V2izhx4ICsTRlii8euvHyUXMSbpsNLYgI4yvGkwcMfzFW8S3O7TPkvDXxq3zX1nqftiK5SbXPrAE2M5GU4r1PUGEzwfpjryTMLYVYYb1T_1RKP1XlIWKmqvBmKyvBrm-yzdUQVH_cTgx2vHVtzoC24Wj-9ciEfmgZHDGRLbf8Tlnqjubr8UOdaR7UKkaXCyxd3hWCiW7EUKmQLduZGKSz_87eoLEiNheYnogZ-q8RDmmMEOMZ3w6gk7ckeCn_5VHZPFoS4pZsbYwIl7N5OG3lBAAPriOwR5sSwoeLd0anNVFVsA4pVHhMpR3OFPS2i12buOwGj4Paghw1xQMgFf-yKlI_Cqv4KljdHNXGaZ8PabG0fxaBw4C3xlRTH5OnIM_20OD6SpHIOOABhutjWAX94PnUiZo9B6EPSxxGnrdnuhkXLOsX5bkgu7Dv8R8qWSKoMBJgjwkoPphXpQGvjXkw0yNyKC0FD889ndI7wBjuTd2IOroKOybQJqavqwtIUenhAHsfywc_dA5sX_jEknGSpRQsSkw`,
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
