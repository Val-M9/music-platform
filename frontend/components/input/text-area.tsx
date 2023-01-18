import { FC } from 'react';
import { TextAreaProps } from './types';
import styles from './styles.module.scss';

const TextArea: FC<TextAreaProps> = ({ placeholder }) => {
	return (
		<textarea className={`${styles.input} ${styles.inputTextArea}`} placeholder={placeholder} />
	);
};

export { TextArea };
