import { FC } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../';
import { HeaderProps } from './types';
import styles from './styles.module.scss';

const Header: FC<HeaderProps> = ({ onOpenDrawer }) => {
	return (
		<header className={styles.header}>
			<Button icon={faBars} iconStyle={styles.menuIcon} onClick={onOpenDrawer} />
			<h1 className={styles.heading}>Header</h1>
		</header>
	);
};

export { Header };
