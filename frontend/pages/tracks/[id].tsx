import { useRouter } from 'next/router';
import { FC } from 'react';
import { ArrowLeft } from 'react-feather';
import { Track } from '../../common/types';
import { Button, CommentForm, Layout, TrackDetails } from '../../components';
import styles from './styles.module.scss';

const TrackPage: FC = () => {
	const track: Track = {
		_id: '1',
		name: 'Track1 trtdmfmldlskd skdnskd',
		artist: 'Nick',
		text: `Lorem ipsum dolor sit amet,\nonsectetur adipiscing elit,\nsed do eiusmod tempor incididunt\nut labore et dolore magna aliqua.\nUt enim ad minim veniam,\nquis nostrud exercitation\nullamco laboris nisi ut\naliquip ex ea commodo consequat.\nDuis aute irure dolor in\nreprehenderit in voluptate\nvelit esse cillum dolore\neu fugiat nulla pariatur.\nExcepteur sint occaecat\ncupidatat non proident,\nsunt in culpa qui\nofficia deserunt mollit\nanim id est laborum\nullamco laboris nisi ut\naliquip ex ea commodo consequat.\nDuis aute irure dolor in\nreprehenderit in voluptate\nvelit esse cillum dolore\neu fugiat nulla pariatur.\nExcepteur sint occaecat\ncupidatat non proident,\nsunt in culpa qui\nofficia deserunt mollit\nanim id est laborum`,
		picture: 'http://localhost:8000/image/7919d18d-2a16-4363-9635-d9e580442669.jpg',
		audio: '3e8e4764-9d32-4917-9553-8fb082d8e3f0.mp3',
		listens: 0,
		comments: [],
	};
	const router = useRouter();

	const onGoBack = () => {
		router.back();
	};

	return (
		<Layout>
			<div className={styles.wrapper}>
				<Button
					variant='filled'
					title='Back'
					Icon={ArrowLeft}
					onClick={onGoBack}
					style={styles.backBtn}
				/>
				<TrackDetails track={track} />
				<CommentForm />
			</div>
		</Layout>
	);
};

export default TrackPage;
