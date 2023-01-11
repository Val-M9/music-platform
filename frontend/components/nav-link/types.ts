import { Icon } from 'react-feather';

export type LinkProps = {
	Icon?: Icon;
	title: string;
	onClick: () => void;
	href: string;
};
