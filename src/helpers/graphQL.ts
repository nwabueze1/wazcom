import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTVhYmNkZS03ODcwLTQ4ZGMtOTdiMC03NzNlYzk5ODYxZTUiLCJqdGkiOiI5MjNkNGNiNjJiYWJmNDE3YzhlZWRiY2NiN2JiN2U3ZjZhZTAzZmQ1YzdiN2I4N2RhOTAzNzI5YWIyZGU5MmI4NjRiOTk0MjRlMzExNjJlNiIsImlhdCI6MTY0MzcwNTQ5Ni4zNDQwOTYsIm5iZiI6MTY0MzcwNTQ5Ni4zNDQxMDEsImV4cCI6MTY0Mzc5MTg5Ni4zMzcwNTgsInN1YiI6IjgiLCJzY29wZXMiOltdfQ.5nVGV50dIaP0_vQGBA5ovsmT0e4fzSD4fqQ13z73PiMTGUzwd8A1n8DmY1l3ByEngzdJ2fH7raJ7RTwzmugLDsbkt1ck1u3pq02IuaGlNsyP5Usg-630od7HsPdBZCrczrWpR86WIzEWbLAf5eLRhrfiAxTp7khjuwFzknH0Ju2-MEYzxkBV6fBBpXwO3dDMCrbTLlJsJHZh-G6Sjq083ctPKYGvN3cD-waACllcSbQdOhlwVP1lJPUserZSfO_8NJFDZz1xyBUbbh_eUt4eEewLP57EJ3_70jKy8ufOxCxxmhNC2uW8-TFNTez5VMs0wq7VQY0phEjV_kzBtsoL_RmZChhu7lTpPbZqUljSeFEsBCgoI4fDFHloqlCzlBaldLK70v-sfk2B3zBZ9l1OET-QBxecHrWZ0EqFxX-bDllwhRG6HmjyShuBSaAYvNngKOl1WdWdomUQsrzMdkPZOsXyt40LEw42FPcLV1L6s4ACqUS5H4g2Ezbnky21-UbIx-jT94uQvrj_Eeet4mTIJPwTec6byc12qIL-JQwAOd8TuZXuf4h8mspnl8V1RlAAlODrXjINLFDHfAhzOq9ZKyn3Mg8NT1VHWpanNHYUFI9P9EPACWJaYX4vUrslfxyco05_QChzZdMjJU9uNfVdJjCIjepxX05rHgOQFEafw50`,
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
  query GetImages($count: Int, $page: Int) {
    images(count: $count, page: $page) {
      data {
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
