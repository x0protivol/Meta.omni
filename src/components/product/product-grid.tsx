import React, { FC, PropsWithChildren, ReactElement } from 'react';
import cn from 'classnames';

import styles from './product-grid.module.scss';

type Props = PropsWithChildren<{ className?: string }>;

export const ProductGrid: FC<Props> = ({ children, className = '' }: Props): ReactElement => (
	<ul className={cn(className, styles.container)}>{children}</ul>
);
