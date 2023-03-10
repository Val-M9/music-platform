import { ReactNode } from 'react';

export type InputProps = React.HTMLProps<HTMLInputElement>;
export type TextAreaProps = React.HTMLProps<HTMLTextAreaElement>;

export type FileInputProps = {
	setFile: (file: File) => void;
	accept: string;
	children: ReactNode;
};
