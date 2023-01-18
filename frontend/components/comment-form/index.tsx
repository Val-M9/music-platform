import { FC } from 'react';
import { Button, Input, TextArea } from '../';
import styles from './styles.module.scss';

const CommentForm: FC = () => {
	return (
		<div className={styles.wrapper}>
			<h3>Leave the comment</h3>
			<Input placeholder='Enter your name' />
			<TextArea placeholder='Enter your comment' />
			<Button
				onClick={() => console.log('clicked')}
				variant='filled'
				title='Submit & Send'
				style={styles.submitBtn}
			/>
		</div>
	);
};

export { CommentForm };
