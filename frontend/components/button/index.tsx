import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonProps } from './types';
import styles from './styles.module.scss';

const Button: FC<ButtonProps> = ({ icon, title, onClick, iconStyle }) => {
	return (
		<button title={title} onClick={onClick} className={styles.btn}>
			{icon && <FontAwesomeIcon icon={icon} className={iconStyle} />}
			{title && <p>{title}</p>}
		</button>
	);
};

export default Button;
