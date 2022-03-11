import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTlmMTNkNi01NWIwLTRmMmUtOTYxZC1lYjkwNGFlYTRmYzYiLCJqdGkiOiI5N2RhNTlhNTRlODkyNjQ2OTdjNWJhMTliNDU5NDQ5ZDc5OWRkYjI5NmIyZjk4ODEwZjkwMmFhMzQzYWFhY2I0MTk2NDY3OWNiZmRhOTAyZiIsImlhdCI6MTY0NjkyNDk2MS43MjcwODksIm5iZiI6MTY0NjkyNDk2MS43MjcwOTMsImV4cCI6MTY0NzAxMTM2MS43MjA5NDEsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.QmJm_AZTfgzf1fO1p3cncvLLLtZf05o7z3_ON-yXiwm_3rT8s7WFrj4irFCMa3wUE18YUqsWE3p0q_SWbZi-OYAzcLLp5S6U_FjwoeCFOk2A-7uxEnwracCO0r3_m_HaPqtcNXV7ursWxm_SNkT7dP0dMVwDelGoqbRV57uLQP30q8tgUYjFYy7bUfHB6pvyfgZ6gha4oH3vccZ1TcIM0wRHEL8-JP1nqMtDVk1rZQySurVNKOhji38RUjjsQrXTvqatdGtCt9FG6IfN2oMi03VggLmSH2vtl8KleXd78-oyw9AkWFRZK-aZimMR-Pwm3ShVAx4elsjx7PBa2sW5yueOcxn01lI1gxqKgZpsSRsUAtBMbytMFQbZ9V3fxEm0c9yRiP6Je5yvCfX7m-zToyUIEwuIrMipGlaV1IU_kzc4IJErFvt3OjCnxOed8sH15FDIDcWBOm1YETEyWYtcdSqWTAHWV_Od656xQD8nl9_TcooA6ePi2tO9gcumi05DCkbg1POFW9yvejWDWe4uG_BFjK4MsqG98KJjlrnYZFkAcD3IGG4Iyk9xh4qgFnsC0pLvCiVSQ83ksSx6wZ_001Efpb4mqXp6RLrBEaYyhkPPP_2dNyn8aetcsqJdm8RkDfFMqPAspN7mEDxjehduC_6yOPCY7EExvVDYtK7h6XM`,
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
