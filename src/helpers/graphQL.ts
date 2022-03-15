import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTlmMTNkNi01NWIwLTRmMmUtOTYxZC1lYjkwNGFlYTRmYzYiLCJqdGkiOiIzNWIyMzg1YTIzYjUwZjQ2YjFjZjZiNTg2NjFkYjc1YjhhNjEyYjA1ODdiOGY3ZTY5Zjk1OTRkOGE3YmYyYzk3NzNkYWFlMTczZTFmMGE2YSIsImlhdCI6MTY0NzMzMzI1My4yNTc2NTYsIm5iZiI6MTY0NzMzMzI1My4yNTc2NiwiZXhwIjoxNjQ3NDE5NjUzLjI1MjEwMywic3ViIjoiMSIsInNjb3BlcyI6W119.IPtW3pmx_5NrbCjkM3NSWpbfxV6FfzRC25Eq2W8A0EEqE4871zfov7pIw-Y7U_ekcO9Q3rQBaSg9UgEXvyxZCH2wLaVEPIibyriBfwNN6789l3rGqn4V10m5pWEdKMMEaygiWKDdFUp3dpW1eS5h6V3BKz0Y8T_TQUEnyk0PraRwrS_oeT-eUQ2QJiPyuq_0kEcfmYNNcxM_bK87akBEZJ7k_rDdieQUpgxkQSJA-3QWL28YJKrejOEanasGUUs9HT47kw9UghbGOOeyr6y6Y5Oc9aCEgYDYCngt1gzcttzQViojCDl-wlcygSVqcf60wyvibxUQiD2LUzmvliUcvfrdFjnq9qrVNxNBcENQJBIcu-kwVdWwOskev6pr1oK0Osx8GxjmDssaNgI6u9Fu1r-jQ0wqYLeiFY9rgzqmCNZR2aVwe6Pr4w-PnxhUKWoP3Cqs0sZK00g4Uq79iNOnbBgh1owzLx6ueXJARmLIvLD2hV0SI6fIhrQf1OUeWj53WAdpRCwyTtpU3aFFirNNkvUMAm5C1LSQuNQYVXrUSmfns76ARwC5XwrNvY93hg0FBYDeNUDWgERxV1edRaiFJRKzZw2rrBDLr-Bpx_udLIJliqd4rfqvdCunOMLWfWqdiCQJRyCARIFL6P54c8O6uBcmLI6Uvd_g4MwxD-R5phU`,
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
