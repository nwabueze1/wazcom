import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTVhYmNkZS03ODcwLTQ4ZGMtOTdiMC03NzNlYzk5ODYxZTUiLCJqdGkiOiI0ZmViOWMyZmZhMWU0NzFkYWJlNWMyYWM1NmRkNDQ3MzQ0NDk1MmE3YWEzNGE4ZGI3YWJmZTM5OThmYmFiOTA1MTBjMTYyYWE4OTljYWNmNCIsImlhdCI6MTY0Mzg5ODY0MC45MTEwNiwibmJmIjoxNjQzODk4NjQwLjkxMTA2NCwiZXhwIjoxNjQzOTg1MDQwLjkwNDgzMywic3ViIjoiMSIsInNjb3BlcyI6W119.I_AoUUpj9_9NudSlCw1a_c6R8tdb64_YO0b4oO-RMx4kbmYHZpdP2y6iMO3Z9zhjr5K2r034FHPCBULsb8lCgppr5XhzuEi7Cw24ncJqgtDlK4PgIWTxIH50c8ooePlU-FZCBWKKq9nQ9EPzptpcYE2X9Z6NwxEZ-gzMpUsp6h4CnSPpA6F0kpD8kcJ82O2z_Ux6oHdx9trDm_T7oN8H5SF_mcRwOzN0_jxQb6K-6W5f5CYkLBWqXBuETVb7hU-b7IBT_CtquovFGXbMopEy2yLoqS7jlurmkIZfDZ8vQxOMFpGV8b_YOZsHbCPb_ZqV-ACB10nt7GKIESQSyrPdDDielWHZT5PxsXkgaFlq5f0cFDj0mDhfuvaAfYvIsK2ybt9tk3zjlYuWuLT8S_9V7K0qnnoE2uKQlW8ceBXVOhDV6uHD98PpOcIrtvnIfT1cMcWCN7-p872DZdbQA0wUZR0qouu3-SdMbhH82g5Qe3w0jrYa9_KS62xd25ZOqBsMEKDw0c3wXyskx9Zd06dx0IfQc23v01uoHJ64AnaZB9dWS8vI98hZ7G275MVfjvZv7hYavuqhqupGOYsUL7ZJF4SlVvHqq81A4qjTSBBe0ZIvGmvpOLJoQeWnZ7-lEZJig7UCgjQ0HMlduReUM8_JfUhBcWTs5UCqlHZ8gxW5vl8`,
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
