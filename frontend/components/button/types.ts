import { Icon } from 'react-feather';

export type ButtonProps = {
	Icon?: Icon;
	title?: string;
	variant?: 'rounded' | 'basic' | 'filled';
	onClick: (props?: any) => void;
	style?: string;
};
