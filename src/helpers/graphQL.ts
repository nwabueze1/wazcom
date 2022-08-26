import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NjU4NWQwMi0yYmFlLTQyNWEtYjk3Mi04OGYyYzZiMjQwNTciLCJqdGkiOiIzZDI1MjJmZGQ0M2VmNmRhMmYwYjJkNmZhNWNmOTgyYTFiYjBjZTM5NjJkOTQ1ODBjOTJiMWE0ZDc0ZmZkZjlkMjFkZDA0M2M2N2E4OWExNyIsImlhdCI6MTY2MTQzMjQ0NS44MzkxOTksIm5iZiI6MTY2MTQzMjQ0NS44MzkyMDQsImV4cCI6MTY2MTUxODg0NS44MzE5MzMsInN1YiI6IjY1Iiwic2NvcGVzIjpbXX0.ZL2RXQ_bYXz7whpY-m9uax8hqajkOmH-6IFWs9LHoyiDqExrHqnFz5E-WA5JjC2jBfZduT9wXpJwb-XLuh2bcs-1G-BCtahcMI6L6Q6ZaJxI7Ib3nXg9zaM7kfjjQlp-wTXjtvY8y22a4PfNF-w6QsanAO0fRDN_PxTsJ0FfKwEcrYjE3VTQOQRPnEyCRNkG8E8EGUL1-S-Q7d3Q4EHSE5ADJLHbSDB9VipxYRH6x52eVJhIBePLkqBjzvwC4mngCslHa8uQm-R8qNOtMkvrJxD24aDB9kFDT-eAl4dGITUa43Mh5yUqp1z7eQWCby58mCjOcxgrsGmvHTydxK6aXrhlb6mBxNqrl7JSUxRifqfbZnINwb9f6VnDSx8CuUmlxdaJAjLT47tFQt0EStZZC9-JzW8CFq0jzVZAmcNidU8SBq8dQG2xmYmlt89Ine5wcgvXMyXynzJrftQnhINFFxVOb3wm5oyYYD_p-uk9rsC0H7Y99dyPieIoY2C41ZUQPWEKghWFGPWRmI_ssgX2hw1XBaMGKc6Fd7YtlhPYrj0G8AgDKLL6dfaeX0XDW26Aruprxq_q0RIU2lJ6JC3CV-rn38HNvXAUc9_6gpUbhYF-X6RtXT_vhOMgxSe1EK4Q_BOynrYeYyvwLFkWz3Go_Fx0He7SYzDwX6N1SoZD570`,
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
