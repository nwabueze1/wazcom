import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTlmMTNkNi01NWIwLTRmMmUtOTYxZC1lYjkwNGFlYTRmYzYiLCJqdGkiOiIyYTNhNTY3OTU3YmM4YzFkZjU5ZjlmMGIxZjA3M2I3Zjc2ZjZiNzU4NTg3NjUwOGY5N2U3Y2M0MDRmYTY1NjdiMjMzYThkODFlMTBlOTllMiIsImlhdCI6MTY1MjMxMjc4NS4xNTMxNTEsIm5iZiI6MTY1MjMxMjc4NS4xNTMxNTUsImV4cCI6MTY1MjM5OTE4NS4xNDU2LCJzdWIiOiI5Iiwic2NvcGVzIjpbXX0.PElFOkJeoX8YRL6eCuLEEBjNglna3nUsQTjVKWuJ0vtseXw_RWtnBSIRn_K1sb5ZbbXQoTz3JBeLkK21WSTbyvf5SqJsMWvSyJtgmn-eEUyE4QlVjyKulQL-5EvmCZ-c50V5qcPlkCkw-m3xTG-ZQTMGwfSDRG-6dkCgcNpbjPRyAc2SkmpfzlOmw8H2ADrTRdACuyDbOzz57Rs91guEuxMLO_TWlEKuPGKVOaPkEdtemuNdhFJTtcZwN6D7fy48xetv--QJavpzG9t1NjL_74GmdtIvzBdWHxP13xcDoKglhlFYrXzo35u2T6FKC91DVLz3riJMo0A6dVKNmQ8XpgPzGMgHku4yFAIp8y0RSMZoImVTkwQMmcDK7AhoYEDs3fROvVO0X4eHVdfY1vpyAOrgENIIcxV5hBefkSiqJ49RWcSJqsrs_jvfrxxidAPPAOPvYufDQKcLmQsELQzFZc2kNT-FlFkh8O-Zm2EJzVbMVR3UtampiaV_oxZ0DvBZPyzqqJHeQhixx3w2rO1QYNDc5qJ7Iii4oQNT6-RZVuyGEKNJDLHG9z2nUnjgSNRBMH_6GxrGUmMcOZWQ6gLXQIPZUEnoGYZ6tKo1Qu86uH4OO3DE_VBFIHSl152CIZ3f2MNrfcltwXByOw1xZVEceQS335n9wLgdjaEbuSEYkLQ`,
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
