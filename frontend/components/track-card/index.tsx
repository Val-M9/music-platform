import { FC } from 'react';
import { Play, Pause, Trash } from 'react-feather';
import { Button } from '../';
import { TrackCardProps } from './types';
import styles from './styles.module.scss';

const TrackCard: FC<TrackCardProps> = ({ track, active = false }) => {
	return (
		<div className={styles.card}>
			<div className={styles.content}>
				<Button
					onClick={() => console.log('clicked')}
					variant='rounded'
					Icon={active ? Pause : Play}
				/>
				<img className={styles.picture} src={track.picture} alt='' />
				<div className={styles.trackInfo}>
					<h4>{track.name}</h4>
					<p>{track.artist}</p>
				</div>
				<div className={styles.additional}>
					<Button onClick={() => console.log('clicked')} Icon={Trash} />
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
