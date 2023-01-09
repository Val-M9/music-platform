import { FC } from 'react';
import { ButtonProps } from './types';
import styles from './styles.module.scss';

const Button: FC<ButtonProps> = ({ icon, title, onClick }) => {
	return (
		<button title={title} onClick={onClick} className={styles.btn}>
			{icon && icon}
			{title && <p>{title}</p>}
		</button>
	);
};

export { Button };
