import { FC, useState } from 'react';
import { useRouter } from 'next/router';
import { ArrowLeft } from 'react-feather';
import { uploadTrackSteps } from '../../common/constants';
import {
	Button,
	Layout,
	PageHeading,
	Stepper,
	UploadTrackPoster,
	UploadTrackAudio,
	UploadTrackInfo,
} from '../../components';
import styles from './styles.module.scss';

const Create: FC = () => {
	const [activeStep, setActiveStep] = useState(1);
	const [poster, setPoster] = useState(null);
	const [audio, setAudio] = useState(null);
	const router = useRouter();

	console.log('poster', poster);

	const onGoBack = () => {
		router.back();
	};

	const handleStepBack = () => {
		setActiveStep((prev) => prev - 1);
	};

	const handleStepForward = () => {
		setActiveStep((prev) => prev + 1);
	};

	return (
		<Layout>
			<div className={styles.wrapper}>
				<Button
					variant='filled'
					title='Back'
					IconLeft={ArrowLeft}
					onClick={onGoBack}
					style={styles.backBtn}
				/>
				<PageHeading heading='Upload Your Track' />
				<Stepper
					steps={uploadTrackSteps}
					activeStep={activeStep}
					onStepBack={handleStepBack}
					onStepForward={handleStepForward}
				/>
				{activeStep == 1 ? (
					<UploadTrackInfo onClickNext={handleStepForward} />
				) : activeStep == 2 ? (
					<UploadTrackPoster
						onSetPoster={setPoster}
						poster={poster}
						onClickNext={handleStepForward}
					/>
				) : (
					<UploadTrackAudio onSetAudio={setAudio} audio={audio} onClickNext={handleStepForward} />
				)}
			</div>
		</Layout>
	);
};

export default Create;
