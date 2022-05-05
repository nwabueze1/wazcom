import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTlmMTNkNi01NWIwLTRmMmUtOTYxZC1lYjkwNGFlYTRmYzYiLCJqdGkiOiI1NzVkMGIwNjAwZjc1MjRhYmQ3OTc4Zjg1MTZlODRjNTFiZDZlYTY3ODJjMGU5MjA1OGUwYmI4YTY4YTYyOGYwYmM0NmMzMWJhNDA5YTJlOCIsImlhdCI6MTY1MTY2NjY2My42MDMxNjQsIm5iZiI6MTY1MTY2NjY2My42MDMxNzEsImV4cCI6MTY1MTc1MzA2My41OTUwMDQsInN1YiI6IjkiLCJzY29wZXMiOltdfQ.rkcKL3uqb4sY-rgydrptt2XVvIuIf_lzcvUJk_kw8c4fCGyQRH37INQ648BsjutObPSIR4vGFhetxFN1hri5ExUdLJ-_8E6gv49jrxiW_lAACw2z5qGfDR-6ephuu6CCadEV-rkyoM00o8BdMrz4dU-q45u9QcNjicM5CbRJALAbqKG_7gVLCuc2_qkwJAXjC_-emLKNRWECrd1QlT9RQkEaGyNammQsNxyyw5x_IAr47Sy-g5ZDcfY-mCAqX7EmV3Whhpo_Ry9BmUIU_xUGwie49R4lKvZM0PbvrO4DFwO5nvAJ1DhPFN8I1-k-HDhyZnBWjOD3VfE_oLbiE_jlbG6aSm7iTIJS_IVYTqbQlxr2G-qsEQRBZj61CAaZRaDnxEmFpW3h4KRlbGhu2bO3Ly5NRYzW4e1rTPVeCTRAeAFNkPaqDH90vj8ZTk4a5yuZMMUDu8PBY-7BuZzRQlc5spAC5x6aDiBBEhwmYvfnUdaaZYl-IEOENM_5dl5hllRsnayVzN4C7dm5unj_xeCX47fm-V0Aeqoy2aDmBStlF58X2B2qoru9kxLCSFSxuKEtuDjUguaFsUXcIpCvm5gwd2OYevehvHx47cgIUQjcL_q65__DzIXxsrFAPbUoRv4QpyuIGnbq2bmZxaKbolq_mItEid91OeCpuDvQbM-0Rn8`,
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
