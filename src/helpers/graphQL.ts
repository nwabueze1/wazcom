import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
    const httpLink: any = createUploadLink({ uri });

    const authLink = setContext((_, { headers }) => {
        const token =
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5Njk0MzQwMS05NTNlLTRhYTYtODk2Zi1lOTk0NDdkMDA5ZTAiLCJqdGkiOiJhODU2M2E0MTc0ZmQxYWZhYzM5NTAyNjU0NDU0OGFjMjNkZDgzNzRkMzU5Y2EzMjEzM2Y1MzI3MzNmZGQ4Mjk5N2I5ODc3ODE3MzliNjJlNCIsImlhdCI6MTY2OTgyODI5NS42NTQ4NDksIm5iZiI6MTY2OTgyODI5NS42NTQ4NSwiZXhwIjoxNzAxMzY0Mjk1LjY1MDM0Nywic3ViIjoiMTA2Iiwic2NvcGVzIjpbXX0.B6SvM3ZbFGwq5UcJR460cgsUDxPggjE95DBrNJzNx8IpCCvn8rpXVuO-izJJRVvHtKfg22DgR4bQPoSTTNTcAB3cGWPJeHQ4I65WULQAjnnELNoNMU5C54FNbuXVcOP8_vOLkpXdsjA_IN5IHOz5JhGefhzDt3BkpUCErB1IT8OdHtLXfvhg2tKTG3geS8IWmbp1yxqodOC9ou6qzxmpBmCvtFsmpcF9OZYbPPYVpr-TdOic48qw45w_q6Nla5-hoZcc4GYXZ2brddOldn10MU1O7czlLF1U4uIm_if6twgVOZwzWTAqoD03KRWkl0829L6zOtt2Z0ZR0kbVhiTQImQcmvk5rdBENivz8m_W_Our_Uwh-T4VPz_-9EzrttawqCJ9ps7N0XsgyGyWeUairCOnskOREURw3E48L2SejWC0etPcjVMpoDCuPZFNCy_HyJXRBea9cD9klKhI4LEo9WQu2ASczOi5BZHeD_j5sTX6RMLt0phtz5kM6m6zlPE-ICuYoOP8TxGko2ve-STWA7ZiHIth4F8qWIQTVSCpFCqPdcJEePbLFNUGcbWEjcZiNNUhxHoJR-aiSW5JY4gU5L0CY5_IBwntcxQ-lwrN0C6sLJODIWP-2ElB_wtX8CWDxv1w1Hmd72tDxBmJJ1s7w38UtRMR9D9Fme2hG4wj5Z0";
        return {
            headers: {
                ...headers,
                authorization: `Bearer ${token ?? ""}`,
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
