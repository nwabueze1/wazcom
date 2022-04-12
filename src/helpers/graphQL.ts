import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTlmMTNkNi01NWIwLTRmMmUtOTYxZC1lYjkwNGFlYTRmYzYiLCJqdGkiOiIwZTA2NTQwYjQzMDM4MTU1ZjNmN2MzYmRkN2FiN2VlMzEzMjkwNjJkN2Q1OThkOTdjNDUxZDA5Yjg2YjQyNmI4NTU2Y2Y1ZGI3YWJjNTQyNCIsImlhdCI6MTY0OTc1ODkwMi4xOTM2OSwibmJmIjoxNjQ5NzU4OTAyLjE5MzY5NCwiZXhwIjoxNjQ5ODQ1MzAyLjE4NjAzMywic3ViIjoiOSIsInNjb3BlcyI6W119.X-s6O3RTWznOnYsn9y5Q8QLiYPtCJB6JiElJnFtakbsrcLsrv6HVJoEOWQc9VWj_lKy69maoznzftTq47axlQG1VPz8RbIuWk-ZXkW55lxXR17Xj-yQ4X8F5jXcOmCM63e7TC-81Bp6xaXxpY5bmce3uw2hRuNQW2g0mrh9uye7bYx2i4rd-JKTb2i5I4SB_lGDRxsMNIB9-0hatpRKdj2J4Pg5iXtQW2sN_376pHiUaaxsqRhj9DO6VA_eo1_Ui3IJYBPRPlsQKTLE4E8k6Lsi-07Jav3hTcorqENYb-02_qEt89jmzl8HB1Ab6ck6Bl_sot7j4KWQUnGPkJJ7J4oZyh189n6MV3FYGctXJsK9NJHGzyYiP30dj4ODYeUQgouNb4f-OExksWYVaBh5_0uC_EbZoqfKeVMU3IcZBBZZfWhk7HZ4vDjjSwQ7VaoqQ5PnJVRGwnSiTN1OoH_dhfO6PhZsp4YczV8vqeaD-ZNfwEpuNKywfbBXncBEatoaqPgKWmBKXpMFTpKgjgeknIcCHUmG-zVZrBgmrUziu0GVC6gjpcOxQ7xeOSF1jrfM9flARjfLFGo33Skp4c7sQJJtRNfi4OdDlYMf2fLvKoub4LNcrfh1sXNjuJ_fcDxr8RR8Mh5MuvzI0cBfSSJ9MNH1nDmSC2ZmXDWyUHBEt76g`,
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
