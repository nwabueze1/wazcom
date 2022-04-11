import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTlmMTNkNi01NWIwLTRmMmUtOTYxZC1lYjkwNGFlYTRmYzYiLCJqdGkiOiI2OTk0NTE3NzJlZDk5MmYyMjM5MjZhY2Y2ZGM3NzQ2NzAwNjI1MjI0MjI1Y2RmZjNkNGU2NzIyMDJlOTE5MDQ5M2YzZWM4MDIyN2JiY2NjZSIsImlhdCI6MTY0OTMyOTk1Mi40MzM3OTksIm5iZiI6MTY0OTMyOTk1Mi40MzM4MDMsImV4cCI6MTY0OTQxNjM1Mi40MjczMTYsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.i928HLJd9nUOlk-C3Uch0w4JbOBjYLpwdKOd4w42D395cgL28ofsC3M4s6RXyPTa_EmtsgqVJ9HACi9w9ERDUBolAglrGlbNz42HiDp6kN6gwU8x8c5_4a3LvFOJpbOStyVtEIM7brZIjTg2TWgBRiLydS2X3Q0qrS7PeeD5vAwU9G5dA85pz-hxsEJdRKxlPXrWslpRVSzQF6ELxpe6HtnR2UC0YnG5jwh0e4J9i4l5xxFGt7XtPsW_AtuJaRnluiRopHDejQV0ql3R5h6_LkUJmOj7OHJt6pgPSsnu2D35KtGFytt62NGMfrpAqagFsQtRnOVqAtnD8YTmdcLVTAZr_c1jS-lW446SVqKpkEANYM2nlo_7rZGAqLlwoSwoCHnCxoY_pO_Dz3TEyKf7tPBWjn9vnq5jBPUfJT9DPOwuj3GKFJVCpcEm25oISLkx6FQaHmgjtNyT3q-8_YFG9hdLe-RG0K4siddG70Tfm1AKmG_frkiUUbi9FLfLsZlFTPr7_JfFEoy8VU6HRLgqIG1RdcHuc7nmhZPBiLO_idazwESjuqFTIaWlC1zKEKb-GaZGyBWbtgUD-h_OI385HQhcsTIWBn-KFoyyX2esSmPxXbke7Shxg2v7uU07m35rNyZqjTNr00CwhOD_dQb0_YWfgY-FgzNgMMLeW8hxD2w`,
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
