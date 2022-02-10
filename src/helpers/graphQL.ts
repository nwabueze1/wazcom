import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTVhYmNkZS03ODcwLTQ4ZGMtOTdiMC03NzNlYzk5ODYxZTUiLCJqdGkiOiJjMTAwNDYxYThjZTVjYTkwZGZiODNlZmM0NzcwYWEzZTI2YzY2YTJhOTFkYzM0ZGJkYmE2YjhkNGJkYzk5ZWFjZGY2ZDk0ZGZiNzdlMzZiYyIsImlhdCI6MTY0NDQ0NzU0NC41MDYzNzUsIm5iZiI6MTY0NDQ0NzU0NC41MDYzODEsImV4cCI6MTY0NDUzMzk0NC41MDA0NTQsInN1YiI6IjgiLCJzY29wZXMiOltdfQ.GO6Z3I1qR0RSytgTMHlkHZUeGKTKDo4WVzHkfw_AMzBhVKJQ9ugDmsRom2lzGVvgfgRfgP4FzbTzQ8TjgYpktP6RdKPN2FnVE_APh4LjdrGyIlb40JOeiNb2X78YBFnwIJXKd7JVi1PJTtGAIJaQ0-dYdA5ggOX5NYK7X7jYtJw4u6TUikipsqhAUWZScKODcOzXSxWpwWbl8Hr9d7bvn0H5vluyBYyE9rNHx3ATcK1VBrKIjbL36E6QKCMoOE-cBmPf7TJAaMA4r-hgue16oEylwRyxRghTMWDcykFZ3VJbtZDuD-FRgyES6VpQcjf2zF3YzHtXqBq1tCrvbJDP9g0neq9dSuGs1OifjUHERh1XxzH0u3R7BcbEQEa8pqlqBUbFriZARJcmaJZC4NWmJm2MO2m0A2Joyd7R8x6kEhTy3HJ1JK4dy0J_e2TUvQLZBdSshiQPGcPOZLOGXcbubq95tSKc-scgDH1t1B6TEAv_0EkXXR2S7H4J8K_rRm_ggdlVAwLdcqInPFakPfCcYtsn7970ZUII5UkMUXzUaqEXHOqN2w-oEntfWkuR_zUNcGpK5ONUpjXBm5H2jAYZvoJoRI4pOFjR92ek67-iUaGf_2cL_yZO9suzHDvDiJPYsw9pK2VN6H2ubMlsjGYwjxZ5hwVjlsTVuPgDQTJqKdo`,
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
