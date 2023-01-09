import { Icon } from 'react-feather';
import { ReactElement } from 'react';

export type LinkProps = {
	icon?: ReactElement;
	title: string;
	onClick: () => void;
	href: string;
};
