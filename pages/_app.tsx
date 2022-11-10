import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/Nav/Navigation'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div className="h-screen w-screen overflow-auto">
            <Navigation />
            <Component {...pageProps} />
        </div>
    )
}
