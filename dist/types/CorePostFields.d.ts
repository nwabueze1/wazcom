export interface CorePostFields_category {
    id: string;
    uuid: string;
    name: string | null;
    slug: string | null;
    created_at: any | null;
    updated_at: any | null;
}
export interface CorePostFields_tags {
    id: string | null;
    name: string | null;
}
export interface CorePostFields {
    __typename: any;
    id: string;
    uuid: string;
    slug: string;
    content: any;
    status: number;
    featured_image: string;
    related_posts?: CorePostFields[] | null;
    title: string;
    author_uuid: string | null;
    language_attr: string | null;
    category_name: string | null;
    created_at: any;
    updated_at: any;
    category: CorePostFields_category | null;
    tags: (CorePostFields_tags | null)[] | null;
}
