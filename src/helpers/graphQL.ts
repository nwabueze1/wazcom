import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTlmMTNkNi01NWIwLTRmMmUtOTYxZC1lYjkwNGFlYTRmYzYiLCJqdGkiOiIyN2U3ZmI0YjQ0NjMwOGNhZjg2ZTU3MzdmNzc2YjdjMTBhZWQ3ZWQzNDRhYTI4ZjM2MTI3MzU4MzgwZGNhZjVjMzg0MjlhMjg4MDdhMWY3ZiIsImlhdCI6MTY0NjczNDEzNi42MDMxMzMsIm5iZiI6MTY0NjczNDEzNi42MDMxMzcsImV4cCI6MTY0NjgyMDUzNi41OTY5NTQsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.PHsb4yUk_Fen2e3HcqknEDRd3hxWQKADCXMTsVX7BgZRxkKLvVokFkVCQPyN-Sp9aGwVrzD0Y0iBmcIf2D3Yajr05Z3hI2OglXoVe4SjzhtmdYhz_szi0NKuhISgxupbj-FIY6Cd8OVkZa5w08H_pJyNnD8Dx9Mshr7oWGYv2bFnXO7yggD9nA6HjAoIviCL40yxglsGLHc8Iawj5W81wO9BbLNwSrEQIYx3gH-6rxu0NQqa2hbgQ4xZeCmI1OmB2iyD3MvpTUCtpNl1Ov2L4qQRdAM90APgzmklaSFgVXOMfKVXPaci3B2Py6wAIpTK2ePsuI_7N4qGnMOpTbI9Bob1lbP5GV_VyforvFO4Utb0d6htmzpCdRXH63Ybs9xXh-Ck52C-oN5R7ELHyeUH36JzidWNrlsNuhf2wBfGxTwHt8xIWyyTMPUeC_WCr-6Gkc1HMOemSW_Arb2BkNXHL_piXQY-m0S7AS-BhqqWvkxd_daz9XhRAxu5g_ZgjRt7kW3JM6ek92wvBr3hOHe8aroN1H6lU-7E0OoEJ6Ih8Ht3vgqRmjMXNjBFr5d_p4jTCAA700HB9jXnbFdry2iOPsOthwgZqYMh1bjL5DrjQWQ0asG7fcwbfA-JpYTFU79KHLFsjSaTpluR7Q2kgCJuWuTgbib92iCiy7UXrs4SWDk`,
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
