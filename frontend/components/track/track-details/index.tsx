import { FC } from 'react';
import { TrackDetailsProps } from './types';
import styles from './styles.module.scss';

const TrackDetails: FC<TrackDetailsProps> = ({ track }) => {
	return (
		<div className={styles.infoWrapper}>
			<img className={styles.picture} src={track.picture} />
			<div className={styles.infoContent}>
				<h3>{track.name}</h3>
				<p>
					<span>Artist: </span>
					{track.artist}
				</p>
				<p>
					<span>Listens: </span>
					{track.listens}
				</p>
			</div>
			<div className={styles.lyrics}>
				<h3>Lyrics</h3>
				<pre>{track.text}</pre>
			</div>
		</div>
	);
};

export { TrackDetails };
