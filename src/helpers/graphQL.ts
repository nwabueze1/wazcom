import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTlmMTNkNi01NWIwLTRmMmUtOTYxZC1lYjkwNGFlYTRmYzYiLCJqdGkiOiIyOTNhNzg3NjUzZjc4ZjA0NzBhYmFiMDJmN2ZkZjZiNjFjMWY5YjU2ZDM5MjQyMWNkNTFkOTlhOWI3ZTE5M2JhYTVjYWVlMWQ0ZmFlOTIxOCIsImlhdCI6MTY1MDM3ODIwMC44MzcxNDMsIm5iZiI6MTY1MDM3ODIwMC44MzcxNSwiZXhwIjoxNjUwNDY0NjAwLjgyODgzOSwic3ViIjoiOSIsInNjb3BlcyI6W119.D6uPV89hTPso1JOAzBNtIfLYV8xWiahTYN0vx5aaT--N_hQT5rda75pN5QPdjrn7nLGQ72DP9xb-KzwMm3hRPwsnpRch4Gk7qXT5rxvesQAoJ3riZC4t5ZHBeyxphjs69h2prc3emGy_v_kABRmr_UQSaB4FhEB7kLJa6hlIcNATNnFrad_-SvZgFjw3Ag7qsjb2hPk9-x_j0lGQFKNJG0VhHcq39QZKIMsWJ1bzM3BGf-eI9NrsWHvoH_OquOo873Ek2B3xrDHHz0h55Hl9UUINFAGYnqXl3MHICs_o50LtD4jSa0EocDRLRn0-tF9G2_toQEjyBV0KjAsAjoUIg6SMfHfYrdARivRaLDhn_STFgvP-jri79l0ghmb6DliuoxXTBeGsuy1Na38YzHz5EE93BJUUeA_ql3PdRHelrGh4VDKxNZWSlCnac9i2AiPH5aB8PCqt2P7eQICZaqRiWx1S3yP1XgdqVIkzWehqtdVxPFizgW59p6cmBCrlBjdgMn928NYefnsRBwfItLbdZ520uoRTaoGJdJsx-vwan8Eo4kVXf3b3TmbrNFiHVGZ5NJ7ytiruUZ3YTXaMROBsfwISNNb3YgYSoMH4ynlDqXqdvuEHQN2uaa_GPKwYVZIQ0uXfQwHZ4LbkXhR6_tPMNg4L2eTfzNyaIV0ljnLcOTE`,
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
