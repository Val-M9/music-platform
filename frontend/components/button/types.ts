import { IconProp } from '@fortawesome/fontawesome-svg-core';

export type ButtonProps = {
	icon?: IconProp;
	title?: string;
	iconStyle?: string;
	onClick: () => void;
};
