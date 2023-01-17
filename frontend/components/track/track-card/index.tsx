import { FC } from 'react';
import { useRouter } from 'next/router';
import { Play, Pause, Trash } from 'react-feather';
import { Routes } from '../../../common/enums';
import { Button } from '../..';
import { TrackCardProps } from './types';
import styles from './styles.module.scss';

const TrackCard: FC<TrackCardProps> = ({ track, active = false }) => {
	const router = useRouter();

	const onOpenTrackInfo = () => {
		router.push(`${Routes.TRACKS}/${track._id}`);
	};

	const onPlayPauseTrack = (e: MouseEvent) => {
		e.stopPropagation();
		console.log('Play clicked');
	};

	const onDeleteTrack = (e: MouseEvent) => {
		e.stopPropagation();
		console.log('Delete clicked');
	};

	return (
		<div className={styles.card} onClick={onOpenTrackInfo}>
			<div className={styles.content}>
				<Button
					onClick={(e) => onPlayPauseTrack(e)}
					variant='rounded'
					Icon={active ? Pause : Play}
				/>
				<img src={track.picture} alt='' />
				<div className={styles.trackInfo}>
					<h4>{track.name}</h4>
					<p>{track.artist}</p>
				</div>
				<div className={styles.additional}>
					<Button onClick={(e) => onDeleteTrack(e)} Icon={Trash} />
					<div className={styles.duration}>
						<span>02:55 / </span>
						<span>03:06</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export { TrackCard };
