export interface CoreSiteFields_user {
    id: string;
    uuid: string;
    firstname: string;
    lastname: string;
    email: string;
    email_verified_at: any | null;
    phone_number: string | null;
    avatar: string | null;
    created_at: any;
    updated_at: any;
    deleted_at: any | null;
}
export interface CoreSiteFields {
    id: string;
    uuid: string;
    name: string;
    display_name: string | null;
    description: string | null;
    domain: string | null;
    cover_image: string | null;
    currency: string | null;
    user_id: string;
    updated_at: any;
    created_at: any;
}
