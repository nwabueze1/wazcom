import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTlmMTNkNi01NWIwLTRmMmUtOTYxZC1lYjkwNGFlYTRmYzYiLCJqdGkiOiI3NmE2OWMzOGY2YmFlNTEzZjVjN2Y0ZGU3YWM2MWYxY2FjZWJkYjk0ZTBjMWYwOGIzYzFhOTBiODg5ZmZiZmFlZWRkM2Q4ZmE0ODM4MjdiOSIsImlhdCI6MTY0OTg0MjMzOS43Nzk5NDEsIm5iZiI6MTY0OTg0MjMzOS43Nzk5NDgsImV4cCI6MTY0OTkyODczOS43NjkwOCwic3ViIjoiOSIsInNjb3BlcyI6W119.YDyleHmUGiXiMD029k5otXfUt84g6ARx0AYuFQuMrsxvxCYaSu6yD59MZz7DUkETsX0KCl_3Ctd91o1QBV2lKU5O_lOGjbV82V92MgtqpUGoadqjqhc310oASo8g0viI2kjCBPx7V55U0H-7poaT0FpizzvmZKfNj8vCjS0_vNzCoE87-66uzV0QgKxxPVj1bDe2UMEzQopD7jacHO7hNo6MP3owffH3R0JRX6PYIVLYZCujJTKEG-03ye5AAF-riDrjZJAwX0X4OKwC3vyudj06NOAnVorU8uLXOR72GZJisaa-YKbrIO7A82rDAB8OJNcxLXed7a83U_6DWAhPVmAi1XL4kXukNOSIhC74ztlM7viASAgHeQu4HxybbG3t5JpFUoTe5woQFOhgFXjmJ8v0O1eqJHmOHzm1D5LVJH9LhU4Ap9IC72V5wOx83fe94kPuOt8KWXS4ufaLsUNFtldXWdGXB3zaEankpQlTRsiZJcJa79lwm6Zb4r6GmSr2Zwg41Kt3Rq6KJWa1yHPr6Txr92Ubz7BdPkGAyw7CvSNst-9ADMf_os8T19GXaUFjS7IN3DV57udzqQ4Zq6AxI8LmDcnV-xmjXavwO9FfWRI6Fw1iIARrdvTFNxQJ5OKE5zK2Q50zJY0FFCzdKjaX5X0rf-cMeO1pUXQdAlgRVLw`,
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
