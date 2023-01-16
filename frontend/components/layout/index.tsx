import React, { useState, useRef, useEffect, FC } from 'react';
import { DrawerMenu, Header } from '../';
import { LayoutProps } from './types';
import styles from './styles.module.scss';

const Layout: FC<LayoutProps> = ({ children }) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const outsideDrawerClick = (e: MouseEvent) => {
			if (isDrawerOpen && ref.current && !ref.current.contains(e.target as HTMLDivElement)) {
				setIsDrawerOpen(false);
			}
		};
		document.addEventListener('mousedown', outsideDrawerClick);

		return () => {
			document.removeEventListener('mousedown', outsideDrawerClick);
		};
	}, [ref, isDrawerOpen]);

	const handleOpenDrawer = () => {
		setIsDrawerOpen(true);
	};

	return (
		<main>
			<section className={`${styles.mainWrapper} `}>
				<DrawerMenu isDrawerOpen={isDrawerOpen} ref={ref} />
				<Header onOpenDrawer={handleOpenDrawer} />
				<div className={`${isDrawerOpen ? styles.drawerVisible : styles.drawerHidden}`}>
					{children}
				</div>
			</section>
		</main>
	);
};

export { Layout };
