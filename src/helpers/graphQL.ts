import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTlmMTNkNi01NWIwLTRmMmUtOTYxZC1lYjkwNGFlYTRmYzYiLCJqdGkiOiJlMGRiOTdkNDViMGJkOTkwMmI2YzY2MGEyYmMxNTE0ZjJiNTFhNmZlNjBjZDg2YjJjYTdlMWYwMTA1YmNjMWE0MWU1N2JhYmJiZGQwNTQxZCIsImlhdCI6MTY0NzUwOTczNi4xMzM3NzYsIm5iZiI6MTY0NzUwOTczNi4xMzM3ODIsImV4cCI6MTY0NzU5NjEzNi4xMjY3NTgsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.j8T_npQvo66Tw6Gad25JiPNfLpvZDDLw17hEMQTO8rk39i7uDlEauTB6NH4tnKJIWo_47D-7h22Wmo6jAhcjHZ_QydShMC_xm36u2s5OfZXmqb8A98KzYHWIEFzaZ5xi-en8HD8dZhARzQC2qaVVTIcDsSV0Chut8meJG6kd8KsKv0cWqsFilTAbNfvUsNSpFFAcqLUwstg6xQ9L86oK66gqVnRPlF--OJWOWjtWXYxb9CI-_dJDBPZ3CvxzdBEGldhAxG39qvKAD0Jf1rz7xql-AEQzGAPXbiV9cWP41sSaNknarmSfG0AVYoKiFUeGZ5G8lBjVYO8hG0kFVFuU_ki5L0NnQ9RZ9arHAzfnIHydd-ieaWsCS5ErotGwH_AKOWfGmZmokXp7aXQ-XM45WEcRDDQr22z5_FZ-JJhgpounetlV0s47VN31ORW4Pk8LdFRLxgP0rPqP6n9DNZHGwAmOcTZ86kEwKlsFX_RjSSz94-IIif870QcHdFcuSWNUEO8Ylz1_Qj3BiMDOOuh0OzNxQ-XHCJ8UosUXltdgoomddVShoTN4Uij6T7kmWBm8qrkvU8X0shyEbpoBvYZM5qZtI98MEpwqDA30WJFzZN-tQ8q6Z7toHNMGMN8iASDUUgEUn34wa3ABGvnJY9SSKZcdoj3PHC0T7Q8xsgKHDZA`,
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
