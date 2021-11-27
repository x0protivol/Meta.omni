import React, { FC, ReactElement } from 'react';

import { Header } from 'components/page';
import { Footer } from 'components/page';

import { Sponsor } from 'types/sponsor';

type Props = {
	sponsors: Sponsor[];
};

const Layout: FC<Props> = ({ children, sponsors }): ReactElement => (
	<>
		<Header />
		{children}
		<Footer sponsors={sponsors} />
	</>
);

export { Layout };
