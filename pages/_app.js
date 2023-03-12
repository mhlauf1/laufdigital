import '../styles/globals.css';
import Navbar from '../components/Navbar/navbar';
import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Rubik:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
            </Head>
            <div className='pageContainer'>
                <Navbar />
                <Component {...pageProps} />
            </div>
        </>

    )
}