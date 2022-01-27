import { ApolloClient, InMemoryCache, gql, from } from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";

export const createApolloClient = (uri: string) => {
  const httpLink: any = createUploadLink({ uri });
  return new ApolloClient({
    link: from([httpLink]),
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
    const client = createApolloClient('https://muse.sytbuilder.com/graphql');
    const response = await client.mutate({ mutation: CREATENEWCATEGORY, variables: { name:category, blog_id: 34, slug: category.toLowerCase().replace(/ /g, '-') } })
    const { id, name } = response.data.createCategory;
    return { label: name, value: id, status: true };
}
