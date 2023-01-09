import React from 'react';
import { useRouter } from 'next/router';
import { menuItems } from '../../common/constants';
import { NavLink } from '../';
import { DrawerProps } from './types';
import styles from './styles.module.scss';

const DrawerMenu = React.forwardRef<HTMLDivElement, DrawerProps>((props, ref) => {
	const router = useRouter();

	return (
		<div
			className={`${styles.drawer} ${
				props.isDrawerOpen ? styles.drawerVisible : styles.drawerHidden
			}`}
			ref={ref}
		>
			{menuItems.map((item) => (
				<NavLink
					key={item.anchor}
					onClick={() => {
						router.push(item.anchor);
					}}
					title={item.title}
					icon={<item.icon />}
					href={item.anchor}
				/>
			))}
		</div>
	);
});

export { DrawerMenu };
