import { FC } from 'react';
import { ArrowRight, Music } from 'react-feather';
import { Button, FileInput } from '../../..';
import { UploadTrackAudioProps } from './types';
import styles from '../styles.module.scss';

const UploadTrackAudio: FC<UploadTrackAudioProps> = ({ onSetAudio, audio, onClickNext }) => {
	return (
		<div className={styles.wrapper}>
			<h2>Upload Audio File</h2>
			<div className={styles.content}>
				<FileInput accept='audio/*' setFile={onSetAudio}>
					<Button title='Upload Audio' IconRight={Music} variant='filled' />
				</FileInput>
				{audio && <p className={styles.fileTitle}>{audio.name}</p>}
			</div>
			<Button title='Next' variant='filled' IconRight={ArrowRight} onClick={onClickNext} />
		</div>
	);
};

export { UploadTrackAudio };
