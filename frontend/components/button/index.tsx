import { FC } from 'react';
import { ButtonProps } from './types';
import styles from './styles.module.scss';

const Button: FC<ButtonProps> = ({
	Icon,
	title,
	onClick,
	variant = 'basic',
	style,
	isDisabled,
}) => {
	return (
		<button
			title={title}
			onClick={onClick}
			className={`${styles.btn} ${style}`}
			data-variant={variant}
			disabled={isDisabled}
		>
			{Icon && <Icon className={styles.icon} />}
			{title && <p className={Icon ? styles.withIcon : ''}>{title}</p>}
		</button>
	);
};

export { Button };
