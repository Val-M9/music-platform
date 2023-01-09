import type { AppProps } from 'next/app';
import '../public/css/global-styles.scss';

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
