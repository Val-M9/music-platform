import type { AppProps } from 'next/app';
import { config } from '@fortawesome/fontawesome-svg-core';
import '../public/css/global-styles.scss';

config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
