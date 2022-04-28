import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTVhZWE1Zi1jYjM4LTQ2YzgtODExNy0zMDQwYzc1MTk0N2YiLCJqdGkiOiI0MzNlNjU2NmJjNGUzY2Y0ZmE0MjFiYjFmN2UyNDBhOGVmMjVmMjQyYmYzOTM2OWViMzE5ZmVmZjVjNzhiY2E5OTExOGFjNDhmNGJjMTMyYiIsImlhdCI6MTY1MDY0NDIzOC45ODQ2OTUsIm5iZiI6MTY1MDY0NDIzOC45ODQ3MDEsImV4cCI6MTY1MDczMDYzOC45NzQwNjUsInN1YiI6IjIzIiwic2NvcGVzIjpbXX0.Frc_HKbVWWzv-FmHWhjsANWbV8U9bnZbfsCntxUyE_98XyRa0txp32eQjhcc5o_10SkfWNdpvGFxL7tjrN-HnPQX6t-taX1jyTt37RcbSg8iLOFnOR0rfQkLBuWmVHXGm5nAC0F2xX-8MHIrtagQU97pg60MjVs3G7ffoMbGSLIZ_Swx3ZKgLUjGWFvgRKAi1Y-NKbwj7PkRqhA_ZVxZkSPv7cSgHFVSQFBjJeqPURw_Kpgkq8JNPqYAjeC4G4bM9HmY2f6XnRjqwbjFS_H8osknWvyKfoSZ2dW5c5wx3yOt0HJYYxOVBB6rXVhdVxQzoS3lIzwiy_6ZbAYSYLOof_c8cnWtJheOpchTNFo5de70Q34uxGKdp51Om0N5gp-CWDVlBNk64Fwjq2MUjuXPioij_VUUgR806BJZRg278V48ZqpO2mUKUSszD3ft2M-GL-thZeXolcVYCnrX4q8egg5_QdthdU9CaI1u4ZkYR2ljCgtpA4QZNI0jORj5hQow6iia_B8-OypILhnQ-EGb-L4mfWUtLdyZpq5GuEF15u95sxXqJEKONmGALyFwS7tewbE9b0bDVVruQWcuYKMRO_Fe-FX-ZLSvLusggy-UfbGAqO6SYbdXvEtNxxilimW4TY7GnD2YGoNSanAJiOisOD0kKa40KltxHke5XPYI34Q`,
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
