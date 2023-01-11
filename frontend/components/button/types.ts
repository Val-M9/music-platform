import { Icon } from 'react-feather';

export type ButtonProps = {
	Icon?: Icon;
	title?: string;
	variant?: 'rounded' | 'basic' | 'outlined';
	onClick: () => void;
};
