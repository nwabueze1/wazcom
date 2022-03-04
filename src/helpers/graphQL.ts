import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTlmMTNkNi01NWIwLTRmMmUtOTYxZC1lYjkwNGFlYTRmYzYiLCJqdGkiOiI4NmIyNjA5YmU4YzlkZTRkNzBiNWZkMTI3M2RlNWIwYmVhNjU0YTZmM2M5Njg2NzQ0ZTIxMzcwMTYwZjkyZTc3MWZhYTBiYzhmZThjNDY2YiIsImlhdCI6MTY0NjM4ODEwMC42MTQ4NTcsIm5iZiI6MTY0NjM4ODEwMC42MTQ4NjEsImV4cCI6MTY0NjQ3NDUwMC42MDg2NTksInN1YiI6IjEiLCJzY29wZXMiOltdfQ.JGzcM8366l1EZq7ikEj3TNC4fda24NgAQYkw1ixRjKa4WV5E8ZjPCpOImDNiDjwQJX5IDC64NTgPVmz5TjfI7xtZHfV4YdQGxdXJl-RN5pjCpkyq9gpqFvpUimcIWe5pJ0Dh0_ftxk9OviWafy7lomi4eiCR4fqRT6qHVjGJpDS6TjQigtkSppvdXcgrbCruWWBq65sPGf1U04PSaNcil7XbMfZWAhi2zzdaPeXLQvBq2Wq6NYMCKAGTZTz9ppNjQ-ogWXkUXCvPm-hZAwu-1eFvhLqLvXtps0FWzymc3TLK5SOTp221icOJL0mrUp6UHakUwS92SkamFTn5MsCXtU6dfqis1gWIYReg03WY2mbDt0A6OcYVh_ooHFJe3FHSJH9laSTj6kgiQASD8XOEU6XvHFMKpjmwf3XOwA4XpTfOaOScmioKoPtKJmi3qAqC4z8Uk-6Ih0Vu4I_DQ-azbohjoB6WD_MOHaNyAxugmPEnDeSczwXbRmrrYbWNafDIYXzlS1dgIlU_VgKkTsm3ZZd2I3mnergXtKeGN8pH9CPuCqu3wfkSxHdx7I_mU6WKaVbVIgSmrKkQfDzdL7btEcrS4Qr9XoxP--SUOJFgUpWV3PkglP3vbTKsf4_DO4MeoElzdjJ20kkowb2q7BzFlHbbNMUU1ie3fOxpNRsGLH0`,
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
