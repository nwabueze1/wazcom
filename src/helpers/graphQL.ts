import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTlmMTNkNi01NWIwLTRmMmUtOTYxZC1lYjkwNGFlYTRmYzYiLCJqdGkiOiIzOGZkOGMwOTU4MTkzYTlhYzZlZmM3NGM2YWQwNDA5ZWQ2YmRmODNjNTFhNWUwZmVmM2NjYWNmYTUyOWY4YmQzMmZmNDQ5YTg5OWI0MDA3YyIsImlhdCI6MTY1MTc1ODUzMC45MzY0OTYsIm5iZiI6MTY1MTc1ODUzMC45MzY1MDEsImV4cCI6MTY1MTg0NDkzMC45Mjg4NzksInN1YiI6IjkiLCJzY29wZXMiOltdfQ.Bouy-5j6AWufdOt07x4wUgUU6KJ0rw7leFS2B_OfMi5gJeKSpFMpGqyESj3euKa030Ro9iN-V_1dPbb-t_WxxdaREQV0GlpURO4hde-QSougzxmvpbFGH7ZNXVx_fTDB2TvW25NCLb6zkoy20vbBy1vTLQaB-XO9KFJqv4PZgjXmBkHrOML5Z8Y8Mpxn8220CvbMCZkTaJ3k0WuPno9cnvkplShms3HQmhXftepLwYtf0PhSRR52lMC0vdQWP0UJGpinluCqwL4niB2-nv8AC4sC2mbeqxJMU0i7BXw-8U6TLG6brvDKMnkYMuinfOdPep86aSnJ2PIavM4gvebAMgymh2f1vF6s-ez1yAWEPNz44oOarghh9F5W58hpWlRhJm13ArdiZigrjv2hStvQ-OyyK3yEozb10tcdI8i1c1t166dzcxBGq6GnTRY0PCAXAt6prZCnUURSvX5SogPoEa1-wtJP3lQKnpt636eYAH0v6h9EFRCZHVtISOUas7ZAx9GHY8p3kizM42t84eV7X69cRpiDIE4UwBb1A-bvR0_xAwzMGrgOlfMNTbiz5NoVZ4Xd7zLMK3Qy-EW0rokAlwq2WRfpPIlUXHRrNsIuDxr7beU_K0xoV4ohxkcTFy4BvCxeFdwdu1dUtAzeH1jR9s5flKtDAgOuHYaCeQtQZp8`,
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
