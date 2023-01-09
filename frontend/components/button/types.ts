import { ReactElement } from 'react';

export type ButtonProps = {
	icon?: ReactElement;
	title?: string;
	onClick: () => void;
};
