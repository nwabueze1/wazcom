import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTlmMTNkNi01NWIwLTRmMmUtOTYxZC1lYjkwNGFlYTRmYzYiLCJqdGkiOiI5YWJiMjI5YjFkYjNiYjg0ZjNmZDc3MDEzMTBkNzNmYzViMGUxZmQ1NzRmNzZjMjMxYmMyYzc2ZGQyOTUyNTMwYzk3NjI2ZjA3ZjBiNWYyMCIsImlhdCI6MTY1MTA1ODE4Ni41MTY0OTksIm5iZiI6MTY1MTA1ODE4Ni41MTY1MDQsImV4cCI6MTY1MTE0NDU4Ni41MTA4NTEsInN1YiI6IjE0Iiwic2NvcGVzIjpbXX0.hAt_JE0vhuRURXt1P49VtTLznjoXwp1OEu3aiwHoeUcusGzwbE8xWbt4vIE5rR6rq-j9VEs3OKaZmQMkvH_jc4VOlyDfxt5l0za5ohG3dicd6F_2QSgifJyij5lHABx8q4vAQPq6MTKfvY84UXP0bnEkVAoGlxa8YYlhW1Qhc2WHpFhSCU4CIf6CImw9RRutnr4Q1lbGT3Jh-kdnjWWZMxe7nKMix8MVSJLh8VT4JD3p-iLh6bsYBw-fd9EWTRvENTXSrooaJcgQRaWnesAlGkfOE8rwrVWLEloDhWqLt1vjdUZjm8N7AoWdmuq1JRb30hN_5zpU5gzGz9EBmaYBCNR1Hj7Kh-bwRUNaoOIyrdfwzLf9ZredFJxjwV2iW7Th_243xo927yVBSA7lSxHyGMpUkG1V9y2YSQr3Cd--Ok141jXpwLD2-DrbfwfkZ7BO-wlGgvSwSqIuy0uPht7ovmSAMK683TWqlQQFZcwQN-uKnzJw8eNW7cnVLtNeZsRJJizdd5b1glirms99-uH95KQoeqnH7k56D0_41gTCLrLMLGDZPEv-Ic6Oj7agzwvjOK2yP5hfD-5sLc_4jNMZliWsztU4DIR1o40wkBA4pJozCbfIbQ_Tdo6shNw3YSMe9K3sTOLCPCvGs30AJIWH27uuGyHe1qEch3oNXrgX8NA`,
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
