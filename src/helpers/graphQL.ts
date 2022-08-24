import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyytuJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NjU4NWQwMi0yYmFlLTQyNWEtYjk3Mi04OGYyYzZiMjQwNTciLCJqdGkiOiI5ZTdlY2I0MDEyMjA4NWIxZDYxZjA4YjhjOTExNmZjZTc0NzE2Y2E1Y2MyNmVmMTQyYTAwMjgwODc3MzVkYmVjNTgzMGRhNzk1ODAzNjcyMiIsImlhdCI6MTY2MTM0NTc4Ni4wNDAxNDEsIm5iZiI6MTY2MTM0NTc4Ni4wNDAxNDUsImV4cCI6MTY2MTQzMjE4Ni4wMzMyMDMsInN1YiI6IjY1Iiwic2NvcGVzIjpbXX0.KVVqHV98BvdPJytt-_lI9olLwIzrng36trcDGvM9RqGMwS7m-dpZfz-xw4IWGukA7qxORZU5q5AudhFccSi6pg3_QJ4QUD7WVzfU0MJppfUMs_pAtXg4c0jwx-F1r5Yo9CM8RaiPK3JPAO20zMpYD1OICgyS9QINh9TWgQ4XvXmxT0Qj2V4hRoJDKzPfYasSGwgwFI5_gH2WTeQc1OXc49CJ6OdyVtVXxnXxfz0IZx8V0XuCCAvYyqAYnDH_An93JU8bwKZfWhPm3kb7ah26vEtq7c_mEIP16dWbM4YEU82eOsqaVndJ8g5pSu2NJLkwT5iemNQBUZBsPs8x0xArWhQa2QmBmfpxQCM3X_6SJJVwkfNpcRnzJY4KKF9gQqVjBWdqLZzwtiygFCXaZXpoKZyFi4JGhNdTDB2WgvkMIWX-fXASjb3-BiL_nH6qnac7gRwS0lv7RSNyYeku51B7pL_HBiOBG1OVBtEf1OUwgvoUiZNZH4wR4AS3ZSgkFRrxelpo8IvEC-_CTegoy5GahYqTxCOyiQIA6yFNu4F0htJXgRAkBklwnu0VWUS9amopD7HJWefRxHvevfwxv5pyWW5Pj8N3aXqHorG0oKBVmbG8GeSqRg35jdiEAjANgX5_pjhB_otVWrYrQ6Ve6Hu9QCknWDorumq0o5dEdxPSmy0`,
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
