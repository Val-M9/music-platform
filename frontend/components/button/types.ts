import { Icon } from 'react-feather';

export type ButtonProps = {
	IconLeft?: Icon;
	IconRight?: Icon;
	title?: string;
	variant?: 'rounded' | 'basic' | 'filled';
	onClick?: (props?: any) => void;
	style?: string;
	isDisabled?: boolean;
};
