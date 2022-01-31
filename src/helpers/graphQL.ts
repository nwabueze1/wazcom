import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import { setContext } from "@apollo/client/link/context";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NTVhYmNkZS03ODcwLTQ4ZGMtOTdiMC03NzNlYzk5ODYxZTUiLCJqdGkiOiJlNmYzNmQzMDc4MjRlNTc2NWFhMGQ4ODZmNTdiZmE5MzMzYTJiMjQwMjBkYmFlMzFjYmQzNzY5ZDEyODhmYmIzZjRhZDIxMTQ5NThmODQyMSIsImlhdCI6MTY0MzYxNzg4Ni41Njg0OTcsIm5iZiI6MTY0MzYxNzg4Ni41Njg1MDMsImV4cCI6MTY0MzcwNDI4Ni41NjEyMzQsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.ThJn_mOBUpvIHLzltMjz_mywaHCsr3GDvde3oH5-dv7XLj9shJR_RD0h2KgRavQv3C-YC09WSR9b_zGZPgqL9vsPJpU1n53vlfoyq3454pU0gf7hs4JjQGoyKxp_yIBbIsLaKiJACzfY8svYhdYsmrc6uMDFxHcoa7DUrEIluTB0fxulvQZpE-U-plePHImzIZwQhYjHRFmt4kanlyel4vmGQFwgrlRgaVspV-EmpJpRP5ImqGfudlBMDUtm-qAAn8575fc-dyXjUccDUlnfGnL6XrtTn8J13EgAR4ttWk4DkZ_aj2RgRrLrEiVZPUqHJBesBPIkjzRtpUt4px-Sb-HLtWrhOCeZSj874ioQuq7iVTJKmn4gsO1kDVVVu0qK8Yu_HrmsmYPZGtG0U8vrCAD3OzyX4q3C98tYpZ4JiY1RJ9aeM69eX3qYXvrXAsjDklfp6Fz-H3khqDjtQHBQdzHVDrmre3_D0KR_qYxobCOYztYPewytBS_zrQjcz-ECiKwBhP-CUsho256UXwvkR0dbYH7zRN69Ifcr5Mc-4q_0XepsU5cU-MaCXLivQSMIwiblfPqpoXXojYrHWxFxJRIENZYZp7DD9vquVM7B0__WC6O9CBbqBsS9ZcImliUBUyiY2uMYk04HrteiY_a2XEOoyFdpk0pbvyldRqYDxbw`,
      },
    };
  });

  return new ApolloClient({
    link: from([authLink, httpLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true,
  });

  // return new ApolloClient({
  //   link: from([httpLink]),
  //   cache: new InMemoryCache(),
  //   connectToDevTools: true,
  // });
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
