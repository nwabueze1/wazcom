import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTlmMTNkNi01NWIwLTRmMmUtOTYxZC1lYjkwNGFlYTRmYzYiLCJqdGkiOiI1NWQ2NTM5ZTcwNzY5YTY0NTJkMTI1M2JhMmViYTA5ZmI0MWU4ZDY1ZTFlYjRhZTQ0OTJiM2RiM2FiM2YzNTUxNjk0OTg1OGNjMWJkZGYzYiIsImlhdCI6MTY1MjY4NjQ3MC4yODMwNzIsIm5iZiI6MTY1MjY4NjQ3MC4yODMwNzYsImV4cCI6MTY1Mjc3Mjg3MC4yNjg0MjIsInN1YiI6IjkiLCJzY29wZXMiOltdfQ.cDDSstIOOZmPJSsi-j5F2oUZV1H5Vp7TyNj8vY3EZLOhPbpfKETa0WlR55hOmX97M4Cy60w8JxhCE2tnA3KEKBm-rLxZDa-BS3sLpLjsogztQv3lWE_kuPZOSVUwJWCx-k_t98-ufx5XBwNqxuPGH67KuVEqHTKl5_AJAPMbMnBjlCgAFqbPLxrVmCo1ZIKyKyd2PCtlnmBTETbSnwpxREOnnmluoLLncB7HGii8udJLzCI2z5fFvdtG0UikZhT8VZxlHBut52mAGlnfZXQTqWsQa-cUt824LjhhGzNcGlB79gvovjl88BvYrYzUPBkJYz6XfSagyWcc_VBwGb6QBzBRDx-2NG4b43FiIocODHI8BGB4uoWTkO4tMCnGm2pMiqCvpkMpCyF269qv_CUSkDO-XuEeHEwTOTOSU-TerlkXyngT82xySDymjWVwLiPZVw6qkYOsIfKWggJ7nxtyxVDofhXjzlUAg94cI_6x2eJDFUsKPsuLtsFfxmtPrgZkLEUd3woSKECS8TSl4UqzmFIre0z6khrGGdWxETkZrp2zwQKNeCFm_badjeYj7YHGaVrE_yQADXlf04Y1WxjbKIchoFya2hbMjAvoMC_QVURX791APPRgxYRARUXtGoOMVo3zCiTZWtbwaIOsWaimbtKWu51swsltB6NHAIuOs9I`,
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
