import { FC } from 'react';
import { LinkProps } from './types';
import styles from './styles.module.scss';
import { useRouter } from 'next/router';

const NavLink: FC<LinkProps> = ({ icon, title, onClick, href }) => {
	const router = useRouter();
	const isActive = router.pathname === href;

	return (
		<div onClick={onClick} className={isActive ? styles.active : styles.link}>
			{icon && icon}
			<p>{title}</p>
		</div>
	);
};

export { NavLink };
