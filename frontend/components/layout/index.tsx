import { FC } from 'react';
import { Header } from '../header';
import { LayoutProps } from './types';

const Layout: FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
};

export { Layout };
