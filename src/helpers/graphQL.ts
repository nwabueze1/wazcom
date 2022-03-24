import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTlmMTNkNi01NWIwLTRmMmUtOTYxZC1lYjkwNGFlYTRmYzYiLCJqdGkiOiI5N2E5YWNjZWQxOTE3Nzg2ODYzN2VmZDVmMTJhZDNkZDg3YjAyOGRmYzBiZTAyMTFlN2M4MDNlMTIwNjVhNmIzNjRlODFkMjIwZGZiYzY4YSIsImlhdCI6MTY0NzUxMDM3Ni44MDAzNjcsIm5iZiI6MTY0NzUxMDM3Ni44MDAzNzEsImV4cCI6MTY0NzU5Njc3Ni43OTM3ODcsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.aWpnom57lTK_Gt6oU1MMnK5SWZ-THrQHpggj85Pl-rZtx6tIcRW3uFj2ZdcSNboVBU4espatj7xpVb_rRCfg0Ssxyf_8ZA9iv4W-cj4KFYkHF7eD_IXC9erzSLTJJGSDy3yHmb9T_gyJpFXksISY3_DqVyoh9aQ0n3a5-tzP7q2wwN2D-dSLGbO2RSTloV1J1qpzgl75CMWOOINHhRY1pLUIUngxTS0ZGf3us0izomPrmYpWLgutHVa1vaRu23Li-jjNY8idUipKSwZV6YOigv8MJUENOQHjzsMvwhiP4alaapYKKIYKmHd6OdXWydjZI9c_osGgnK8-roZpcxXxOhAnqdXNjr0yFWFVLxckT1RBQsPdcvEDdVFWuDnoXfdhqhPOboWPXIo1FfNgLJRULaIfOGMtrXx_sy_-zhJSW90CTiiCrasnbyOpG-tbS3hMcpf6Nf_CGVDpcdPfoyZRApnqBoHw9fY4qFkWVlG_bKc_oT2hXSBCAEVGQWTaPi4nnnkOxzbUmHn9qxCpExt2VIB_-y2_Tc4-XoEAg8uJJORhWhLdJO7idlT5n22YR6h1JBUC4z1errqRCCm69hjzdQaZCzGeL8c6WtcqDbqP2ivQuZWQg5h6RGAN0xK8zUNnmEKUizGmtccraFwHHuJA3K1J6UUrW8nZWeVLXaGoW_M`,
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
