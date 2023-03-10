import React, { FC, useRef } from 'react';
import { FileInputProps } from './types';
import styles from './styles.module.scss';

const FileInput: FC<FileInputProps> = ({ setFile, accept, children }) => {
	const ref = useRef<HTMLInputElement>(null);

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event?.target?.files;
		file && setFile(file[0]);
	};

	return (
		<div onClick={() => ref.current?.click()}>
			<input
				className={styles.fileInput}
				accept={accept}
				ref={ref}
				type='file'
				onChange={onChange}
			/>
			{children}
		</div>
	);
};

export { FileInput };
