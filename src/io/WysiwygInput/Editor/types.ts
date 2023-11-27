export type EditorProps = {
  content: string;
  handleChange: (content: string) => void;
  embed?: { type: string; value: string };
};

export type TOrientation = 'portrait' | 'landscape';

export type TScreen = 'desktop' | 'tablet' | 'mobile';

export type TCoordinates = Record<TScreen, any>;

export type MediaValue = {
  name?: string;
  description?: string;
  alternative_text?: string;
  caption?: string;
  src: string;
  orientation?: TOrientation;
  coordinates?: TCoordinates;
};