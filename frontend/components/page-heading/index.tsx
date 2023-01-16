import { FC } from 'react';
import { Button } from '../button';
import { PageHeadingProps } from './types';
import styles from './styles.module.scss';

const PageHeading: FC<PageHeadingProps> = ({ onClick, heading, title, variant, Icon }) => {
	return (
		<div className={`${styles.heading} ${onClick ? styles.withBtn : ''}`}>
			<h2>{heading}</h2>
			{onClick && <Button onClick={onClick} title={title} variant={variant} Icon={Icon} />}
		</div>
	);
};

export { PageHeading };
