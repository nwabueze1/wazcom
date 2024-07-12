import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
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
  query GqlGetBlogCategories($blog_uuid: ID) {
    GETBLOGCATEGORIES(input: { blog_uuid: $blog_uuid, all: true }) {
      data {
        id
        name
      }
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

export const CORE_IMAGE_FIELDS = gql`
  fragment CoreImageFields on Image {
    title
    uuid
    url
    caption
    alternative_text
    created_at
    updated_at
  }
`;

export const GET_IMAGES = gql`
  ${CORE_IMAGE_FIELDS}
  query GqlGetImages($library_uuid: String!, $page: Int, $count: Int, $search: String) {
    getImagesByLibraryUuid(input: { library_uuid: $library_uuid, page: $page, count: $count, search: $search }) {
      images {
        ...CoreImageFields
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
  ${CORE_IMAGE_FIELDS}
  mutation uploadImage(
    $library_uuid: String!
    $image: Upload!
    $folder: String
    $title: String
    $caption: String
    $alternative_text: String
    $metadata: JSON
  ) {
    uploadImage(
      input: {
        library_uuid: $library_uuid
        image: $image
        folder: $folder
        title: $title
        caption: $caption
        alternative_text: $alternative_text
        metadata: $metadata
      }
    ) {
      ...CoreImageFields
    }
  }
`;

export const UPDATE_IMAGE = gql`
  ${CORE_IMAGE_FIELDS}
  mutation UpdateImage(
    $uuid: String!
    $title: String
    $caption: String
    $alternative_text: String
    $metadata: JSON
  ) {
    updateImage(
      input: {
        uuid: $uuid
        title: $title
        caption: $caption
        alternative_text: $alternative_text
        metadata: $metadata
      }
    ) {
      ...CoreImageFields
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

export const GET_BLOG_POSTS = gql`
  query GqlGetBlogPosts(
    $blog_uuid: ID
    $first: Int
    $page: Int
    $search: String
    $sort: [SortInput]
    $filter: [FilterInput]
  ) {
    getPostsByBlogUuid(
      input: {
        blog_uuid: $blog_uuid
        first: $first
        page: $page
        search: $search
        sort: $sort
        filter: $filter
      }
    ) {
      data {
        uuid
        title
        slug
        status
        categories {
          name
          uuid
        }
        author {
          name
        }
        published_at
        updated_at
      }
      paginatorInfo {
        currentPage
        lastPage
      }
    }
  }
`;

export const DOWNLOAD_IMAGE = gql`
  mutation downloadImage($platform: String!, $url: String!) {
    downloadImage(input: { platform: $platform, url: $url })
  }
`;

export const CONNECT_INSTAGRAM_ACCOUNT = gql`
  mutation connectInstagramAccount($library_uuid: String!) {
    connectInstagramAccount(library_uuid: $library_uuid) {
      redirect_url
    }
  }
`;

export const INTEGRATE_INSTAGRAM_ACCOUNT = gql`
  mutation integrateInstagramAccount($code: String!, $library_uuid: String!) {
    integrateInstagramAccount(input: { code: $code, library_uuid: $library_uuid })
  }
`;

export const GET_UNSPLASH_IMAGES = gql`
  query GqlGetUnsplashImages($search: String, $page: Int, $limit: Int) {
    getUnsplashImages(input: { search: $search, page: $page, limit: $limit }) {
      images {
        url
        photographer
        download_url
      }
    }
  }
`;

export const GET_INSTAGRAM_IMAGES = gql`
  query GqlGetInstagramImages($library_uuid: String!) {
    getInstagramImages(library_uuid: $library_uuid)
  }
`;

export const GET_PEXELS_IMAGES = gql`
  query GqlGetPexelsImages($search: String, $page: Int, $limit: Int) {
    getPexelsImages(input: { search: $search, page: $page, limit: $limit }) {
      images {
        url
        photographer
      }
    }
  }
`;

export const CORE_TAG_FIELDS = gql`
  fragment CoreTagFields on BlogTag {
    name
    uuid
  }
`;

export const GET_BLOG_TAGS = gql`
  ${CORE_TAG_FIELDS}
  query GqlGetTags(
    $blog_uuid: ID
    $first: Int
    $page: Int
    $search: String
    $sort: [SortInput]
    $filter: [FilterInput]
    $all: Boolean
  ) {
    getTagsByBlogUuid(
      input: {
        blog_uuid: $blog_uuid
        page: $page
        first: $first
        search: $search
        sort: $sort
        filter: $filter
        all: $all
      }
    ) {
      data {
        ...CoreTagFields
      }
      paginatorInfo {
        lastPage
        perPage
      }
    }
  }
`;
