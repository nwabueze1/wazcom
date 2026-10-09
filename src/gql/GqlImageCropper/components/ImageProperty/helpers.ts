export const formFields = [
  {
    name: "name",
    showToolTip: false,
    toolTipDescription: "",
    placeholder: "Type here",
  },
  {
    name: "description",
    showToolTip: false,
    toolTipDescription: "",
    placeholder: "Describe the image",
  },
  {
    name: "alternative text",
    showToolTip: true,
    toolTipDescription: "Provide an alternative text for the image",
    placeholder: "Type here",
    field: "alternative_text"
  },
  {
    name: "image caption",
    showToolTip: true,
    toolTipDescription: "Provide a caption to use for the image",
    placeholder: "Type here",
    field: "caption",
  },
];

export const capitalizeFirstCharacter = (word: string) => {
  const firstChar = word.charAt(0).toLocaleUpperCase();

  return firstChar.concat(word.slice(1));
};