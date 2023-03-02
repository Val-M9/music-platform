import React, { FC } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'react-feather';
import { StepperProps } from './types';
import { Button } from '../button';
import styles from './styles.module.scss';

const Stepper: FC<StepperProps> = ({ steps, activeStep, onStepBack, onStepForward }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.stepper}>
				{steps.map((_, index) => (
					<div key={index} className={styles.step}>
						<div className={`${styles.circle} ${activeStep == index + 1 ? styles.active : ''}`}>
							{index + 1 < activeStep ? <Check color='lime' /> : index + 1}
						</div>
						<div className={styles.divider}></div>
					</div>
				))}
			</div>
			<div className={styles.btnBlock}>
				<Button onClick={onStepBack} Icon={ChevronLeft} isDisabled={activeStep == 1} />
				<Button onClick={onStepForward} Icon={ChevronRight} isDisabled={activeStep == 3} />
			</div>
		</div>
	);
};

export { Stepper };
