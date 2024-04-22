export interface ImagePropertyProps {
    form: TForm;
    handleChange: (field: string, result: string) => void;
}
type TForm = {
    name: string;
    description: string;
    alternative_text: string;
    caption: string;
};
export {};
