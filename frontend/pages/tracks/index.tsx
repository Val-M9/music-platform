import { useRouter } from 'next/router';
import { FC } from 'react';
import { Routes } from '../../common/enums';
import { Track } from '../../common/types';
import { Layout, PageHeading, TrackList } from '../../components';
import styles from './styles.module.scss';

const tracks: Track[] = [
	{
		_id: '1',
		name: 'Track1',
		artist: 'Nick',
		text: 'Some text',
		picture: 'http://localhost:8000/image/5c755ec3-e789-46d2-9596-d08c8711f325.jpg',
		audio: '3e8e4764-9d32-4917-9553-8fb082d8e3f0.mp3',
		listens: 0,
		comments: [],
	},
	{
		_id: '2',
		name: 'Track1',
		artist: 'Nick',
		text: 'Some text',
		picture: 'http://localhost:8000/image/5c755ec3-e789-46d2-9596-d08c8711f325.jpg',
		audio: '3e8e4764-9d32-4917-9553-8fb082d8e3f0.mp3',
		listens: 0,
		comments: [],
	},
	{
		_id: '3',
		name: 'Track1 fdfdfdfdfdfdfd fsfsfsfsfsssfsfsfsfsfsffsf d,d,fd,fd,f;',
		artist: 'Nick',
		text: 'Some text',
		picture: 'http://localhost:8000/image/7919d18d-2a16-4363-9635-d9e580442669.jpg',
		audio: '3e8e4764-9d32-4917-9553-8fb082d8e3f0.mp3',
		listens: 0,
		comments: [],
	},
];

const Tracks: FC = () => {
	const router = useRouter();

	return (
		<Layout>
			<div className={styles.wrapper}>
				<PageHeading
					heading='List Of Tracks'
					title='Upload Track'
					onClick={() => router.push(Routes.CREATE_TRACK)}
					variant='filled'
				/>
				<div className={styles.listWrapper}>
					<TrackList tracks={tracks} />
				</div>
			</div>
		</Layout>
	);
};

export default Tracks;
