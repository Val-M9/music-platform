import { FC } from 'react';
import { ArrowRight } from 'react-feather';
import { Button } from '../../../button';
import { Input, TextArea } from '../../../input';
import { UploadTrackInfoProps } from './types';
import styles from '../styles.module.scss';

const UploadTrackInfo: FC<UploadTrackInfoProps> = ({ onClickNext }) => {
	return (
		<div className={styles.wrapper}>
			<h2>Track information</h2>
			<Input placeholder="Enter track's title" />
			<Input placeholder='Enter the author' />
			<TextArea placeholder="Enter song's lyrics" />
			<Button title='Next' variant='filled' IconRight={ArrowRight} onClick={onClickNext} />
		</div>
	);
};

export { UploadTrackInfo };
