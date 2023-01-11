import { FC } from 'react';
import { Track } from '../../common/types';
import { Layout, TrackList } from '../../components';

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
		picture: 'http://localhost:8000/image/5c755ec3-e789-46d2-9596-d08c8711f325.jpg',
		audio: '3e8e4764-9d32-4917-9553-8fb082d8e3f0.mp3',
		listens: 0,
		comments: [],
	},
];

const Tracks: FC = () => {
	return (
		<Layout>
			<TrackList tracks={tracks} />
		</Layout>
	);
};

export default Tracks;
