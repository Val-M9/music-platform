import { FC } from 'react';
import { Menu } from 'react-feather';
import { Button } from '../';
import { HeaderProps } from './types';
import styles from './styles.module.scss';

const Header: FC<HeaderProps> = ({ onOpenDrawer }) => {
	return (
		<header className={styles.header}>
			<Button icon={<Menu />} onClick={onOpenDrawer} />
			<h1 className={styles.heading}>MusicPlatform</h1>
		</header>
	);
};

export { Header };
