import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTlmMTNkNi01NWIwLTRmMmUtOTYxZC1lYjkwNGFlYTRmYzYiLCJqdGkiOiIwYjg4MDcyYTQzYjg5YjVmZGI4YjBmNGU3ZjM4NjRhZDdmOGU0MjNiN2RhODcyZWNlYjYzNzE3NzYzNjdkMGYyNTY1NmEwNjk5MDY0MjQyOCIsImlhdCI6MTY1MTg0NjE3My4wMzg1MjMsIm5iZiI6MTY1MTg0NjE3My4wMzg1MjcsImV4cCI6MTY1MTkzMjU3My4wMzE3MDksInN1YiI6IjkiLCJzY29wZXMiOltdfQ.iNrejteEZYgGix6rUq14CkmKsKGihFr5jQuwJnylPEY9M7_bAE-ABUmxKFbkWCyyM2sor5y-3oGFvmYNWdTPp3ZjPwFaxLgdPiPtLcdi1oaGecHwVH8NUkjh7roWOSnNK4HZeaQvHVctW0ixCxgJmBDhnejR6L2KCoE729H6WL2X39PFjHON6EmRNlWjk2UYYkyWJqioD2XgHqEHyVKt8hDGYwZ97wbzIyNVGFGEfWJEGaUmdA2xHsiHyZMP2FoK2Nvxa9t3bOnREAmkhozIQ32DOhOe4CGHmM46PN2RewtpfA_G4MXd5x-gMWnjvaRNDruDv47mXBgwihxetxLCM1bbNyJxA-21NfIrzejdepnilWF_TilTtEqfecCU3Y4nwj-gbJNCCVZxAurKKeaAB36_2NGHp5puF8EdwR2H4EbmBO4mIVNofvKBjeokWJMJXOBOf5Q0bklWps0pizLSdLuv0Yes_qGl0bLLnIuEfF2ryfrPTUmEpabf9vJORZ03LCUrwutKkSoSYKA1Ds0lqrSfced7-NFSJXSZFxPQoFjXHo-RWz5jzM_BHUj8PZvifFOfb1kzIUA-Im6KNwxA-o9X1J-BuBzkx-mo-BpMXeiPObFtHz5Fc_19DFwdj4XEcxy0_ru5FMnp6wTElyI3jWUTMRNyltbQH6XPkskb5vg`,
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
