import { FC } from 'react';
import { TrackCard } from '../track-card';
import { TrackListProps } from './types';

const TrackList: FC<TrackListProps> = ({ tracks }) => {
	return (
		<>
			{tracks.map((track) => (
				<TrackCard key={track._id} track={track} />
			))}
		</>
	);
};

export { TrackList };
