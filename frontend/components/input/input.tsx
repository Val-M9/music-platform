import { FC } from 'react';
import { InputProps } from './types';
import styles from './styles.module.scss';

const Input: FC<InputProps> = ({ placeholder }) => {
	return <input className={styles.input} placeholder={placeholder} />;
};

export { Input };
