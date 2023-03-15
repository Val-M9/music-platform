import { FC } from 'react';
import { ButtonProps } from './types';
import styles from './styles.module.scss';

const Button: FC<ButtonProps> = ({
	IconLeft,
	IconRight,
	title,
	onClick = () => {},
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
			{IconLeft && <IconLeft className={styles.icon} />}
			{title && <p className={IconLeft || IconRight ? styles.withIcon : ''}>{title}</p>}
			{IconRight && <IconRight className={styles.icon} />}
		</button>
	);
};

export { Button };
