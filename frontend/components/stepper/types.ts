import { uploadTrackSteps } from './../../common/constants/upload-track-steps';

export type StepperProps = {
	steps: typeof uploadTrackSteps;
	activeStep: number;
	onStepBack: () => void;
	onStepForward: () => void;
};
