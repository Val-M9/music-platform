import React from 'react';
import { DrawerProps } from './types';
import styles from './styles.module.scss';

const DrawerMenu = React.forwardRef<HTMLDivElement, DrawerProps>((props, ref) => (
	<div
		className={`${styles.drawer} ${
			props.isDrawerOpen ? styles.drawerVisible : styles.drawerHidden
		}`}
		ref={ref}
	>
		<p>DrawerMenu</p>
	</div>
));

export { DrawerMenu };
