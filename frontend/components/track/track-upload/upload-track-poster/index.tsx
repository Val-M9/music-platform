import { FC } from 'react';
import { ArrowRight, Camera } from 'react-feather';
import { Button, FileInput } from '../../..';
import { UploadTrackPosterProps } from './types';
import styles from '../styles.module.scss';

const UploadTrackPoster: FC<UploadTrackPosterProps> = ({ onSetPoster, poster, onClickNext }) => {
	return (
		<div className={styles.wrapper}>
			<h2>Upload Poster</h2>
			<div className={styles.content}>
				<FileInput accept='image/*' setFile={onSetPoster}>
					<Button title='Upload Poster' IconRight={Camera} variant='filled' />
				</FileInput>
				{poster && <p className={styles.fileTitle}>{poster.name}</p>}
			</div>
			<Button title='Next' variant='filled' IconRight={ArrowRight} onClick={onClickNext} />
		</div>
	);
};

export { UploadTrackPoster };
