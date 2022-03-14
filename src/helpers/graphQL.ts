import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTlmMTNkNi01NWIwLTRmMmUtOTYxZC1lYjkwNGFlYTRmYzYiLCJqdGkiOiIyYWU3YTU4NTE3MjM2YWRkYWRiZjA0YjEyMzhhNDQyYjIzMGI3ODJlZWFiOWI0ODY3NTIxZDU0YjBlZDdjMGMwODFiNjUzYmRkZDEwMzM5OSIsImlhdCI6MTY0NzE5MjA4NS42NDk1MTIsIm5iZiI6MTY0NzE5MjA4NS42NDk1MTYsImV4cCI6MTY0NzI3ODQ4NS42NDMzODcsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.MEkH0AFCThuxIHeWuSjslNsIU3envcmnLw9JVD80Q9H9DJblTpfqakXkZ_34seYbd1vVwzShXJcHM5MvEBh7TdyiAXtlIyZGvJSOvC-sQF5LIpWnt8cSjAa4Q71zAErg6qQQ7U8i4gb2WKWcM_2xWXgu4kppf-hknN6z4qmJPJOZeGBmcfC03I9DJF0qvhER1gBxflqC0YfYoJ5x5OVvDYuWDgtL0zs_-5p_U18ojqX2TW0bXqozf1iI6lIRuGNJbn6U7V68B3wmJkoY2M_xDv0t-6wC26rAlIUdGdue7gshE9cFYiABoNE99JUOVlDb8_ivk2qcGvm8oLpvHrCQIpSSSY_ItOw-vM2O0IzNXf2y5yPbH715x3wIjIbmHSS4BklAhc_2KsgFmyjUtqrw763fpLbDp61-LOrjwGhojXY-qZNbGVzd67r5V-92WmFNphRGAXed5t-iDune0awVRBVMasjFLHL52dZBhQWXHlk1ecORGZlmPv1Pu7ZnJlkqbEFKQg38aCAuXJlooVU7IYaJv10eFYpQJi5UreWtqJEigi45_zCasYEYqaxhj_q7PqXVCGitjXfEvbCNyCUa8HijaI47vbQ-ihNwH9gpLZRQijoNPPPh7HfyZZRDuGdQBlg6NVz-alWNjIIIRrn2Gq2TGOtX2cCx0-UFxnU8cbI`,
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
