export interface ValidationProps {
  status: boolean;
  errorText?: string;
}
export interface ValidationArgs {
  name?: string;
  value: string;
  password?: string;
}

export const passwordIsValid = ({ value }: ValidationArgs): ValidationProps => {
  const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
  return {
    status: re.test(value),
    errorText: "Password is not strong",
  };
};

export const passwordIsRepeated = (): ValidationProps => ({ status: true });


export const isRequired = ({
  name,
  value,
}: ValidationArgs): ValidationProps => ({
  status: !!value,
  errorText: `The ${name} field is required!!`,
});
