import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTlmMTNkNi01NWIwLTRmMmUtOTYxZC1lYjkwNGFlYTRmYzYiLCJqdGkiOiJhMTdmNWRmMzNjMTZkNjI4MDAxNGQ0NGFkMjE4MzRjMTg5MWM4MDQyODRjYTVkNDA2ODQ3YmEyZmMzZmEzNTk0NmJjYjQzMWIzNmM0NjkzMiIsImlhdCI6MTY0NjA0MDkyNi41OTIwODMsIm5iZiI6MTY0NjA0MDkyNi41OTIwODcsImV4cCI6MTY0NjEyNzMyNi41ODM5NTksInN1YiI6IjEiLCJzY29wZXMiOltdfQ.hEoyB6NIXz0Z1DxE1mUPEmYnhixM1xDOvw3eLeeVp35a22DX9B3lNAAwwkQ0pkJkAliDl-qI0loG5NmAiy3Slr5ZHINMiSQKhTVBjfIvjzKyPCIBK31PN6WCy940tUPFy36HAUr_79MJ2X5wigdNw7NuSmyKbw8E7yJ7xzXMAtqFaC8NgsOJpZ0aA_Gap17CwNlT4uqas5EBA_0lMK1IUqRyC5iaK6Lr7CfmfXN-mnM07FKzF6lDmMpoXo5aIIIVDBrPTHaftsg4LgC1YmrcOr2XRdHB5wr43pyVIAlTDudNY_PzFvAnPVrZHFMRY097r7AjHEcmf1HiVHAcvKVTpst652hDbzJSy6JxhBoYJ4TOdZGeDx0hVxHc4Fwyp3AcMJ_CvcuJrcd1KgiY7bieHNlADOTrYD5BKhRmZ_l969oM0P2AdYJzSJefISoXZ9Nbn39mLo6bKX5KSN1RzWqrwDUjorAbxVQgQnCwd9uUwru_WIApoO5xEr0gRSPVoCLABLpJ71VpqP8vS-lAxbhDuHqltfhFZOioRDwnCFl4AikahFg5m-zR_P9l8RjOZIvaF7Yic_yRT82Xo-GALbeurJDanqnKUp4ENeBhTwOuSewBCRLVLtMTYhnhBu1HuGZAczD_zuCH_hWOLii7B837FBz006aAYXfuuEh6Y1wKCDU`,
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

export const DELETE_IMAGE = gql`
  mutation deleteImage($id: ID!) {
    deleteImage(id: $id) {
      id
      url
      created_at
    }
  }
`;
