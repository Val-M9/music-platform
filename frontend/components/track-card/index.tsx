import { FC } from 'react';
import { Play } from 'react-feather';
import { Button } from '../';
import styles from './styles.module.scss';

// export type TrackCardProps = {
//   title: string;
//   picture: string;

// }

const TrackCard: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.card}>
				<div className={styles.content}>
					<Button onClick={() => console.log('clicked')} variant='rounded' Icon={Play} />
					<img className={styles.picture} alt='' />
					<div className={styles.trackInfo}>
						<h4>Title</h4>
						<p>Author</p>
					</div>
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
