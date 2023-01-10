import { FC } from 'react';
import { ButtonProps } from './types';
import styles from './styles.module.scss';

const Button: FC<ButtonProps> = ({ Icon, title, onClick, variant = 'basic' }) => {
	return (
		<button title={title} onClick={onClick} className={styles.btn} data-variant={variant}>
			{Icon && <Icon className={styles.icon} />}
			{title && <p>{title}</p>}
		</button>
	);
};

export { Button };
