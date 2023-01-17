import { FC } from 'react';
import { useRouter } from 'next/router';
import { LinkProps } from './types';
import styles from './styles.module.scss';

const NavLink: FC<LinkProps> = ({ Icon, title, onClick, href }) => {
	const router = useRouter();
	const isActive = router.pathname === href;

	return (
		<div onClick={onClick} className={`${styles.link} ${isActive ? styles.linkActive : ''}`}>
			<p>
				{Icon && <Icon className={styles.icon} />}
				<span>{title}</span>
			</p>
		</div>
	);
};

export { NavLink };
