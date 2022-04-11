import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTlmMTNkNi01NWIwLTRmMmUtOTYxZC1lYjkwNGFlYTRmYzYiLCJqdGkiOiI4OGE2MjY2MWM0OTM1OTlkY2RhMWExZjVkMDk2ZjkzZGFhODkzNWIxOTk3MjgyMGRmMDI1M2QzYjk0ZmFlMDVlNGE4NzRjMzRhYjE1NzZkZCIsImlhdCI6MTY0OTY2NjAxNS4xNDc1NzIsIm5iZiI6MTY0OTY2NjAxNS4xNDc1NzYsImV4cCI6MTY0OTc1MjQxNS4xNDEzNjEsInN1YiI6IjkiLCJzY29wZXMiOltdfQ.uCcumdjyzol-MWqE4RDc5qzy0aL9kgNz2a8AYDTipm0CheFjIrWX_nQ2UzWN8p_LBLglzxN4oibq8k9tCTBwcLUeSu5kcO4KoWkqxwDH1kJhKvjWDNWTDjVzHQ0sh8-jng0OVysj13Xj_cdSG9h7yeWQmoPBhBvWeUdYnjA-l07jgtJYzvUJtDYnnpvtXonA9s4hyWMZ6iZz1qZws755xFKwr1iQbXCB3cHALWGi4ILnqlQwarGXL6vzFlHhnQBfvKqHdwaZ7SlhqzohqT9t1JBjZbNpLx7u0QMd9agaZqs9c-iMDnh2yUoyLCQ4gvRenia4CGgv5u133G7LkKZYDCTpZEVsz-6h0P0MlfMV1JJmaA7Bf5xx_wyWaVzIyI4fcjmwefbPeLgOGJl6ko_Kt4NI43bNh0p8dZKv3V8zCyomy-vrl2KLIznemqaWegVEfXMmptkt9dzT_Xi9Q1HrtpWKP44ebjOgSUyxJZpl7ABLMOlTBemS3gDwXCf_mMTxUx87YMIfOGrI11jhpjR-waf48tqMGR3nSAlb0xc6SXA_KJJvpU5eZ0drqKyRFcRBehNW7U7JgSZXnIrt9GmnRSYoy5rtJUm4TV97TgVzKTD0OVLGCqLd0KwDhuJdl0WkX4MMgEuZ13iCbCGoyV81nG3IWgBei6wn54QL6b_e21U`,
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
