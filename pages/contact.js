import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/Layout/layout';


export default function Contact() {
    return (
        <Layout>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <main>
                <div className="">
                    <h1 className="text-6xl text-center lg:text-right lg;text-9xl">Let's talk</h1>
                </div>
                <div className="flex gap-40">
                    <div className="lg:text-2xl text-base">
                        <h4>Find me:</h4>
                    </div>
                    <div className="lg:text-6xl text-2xl underline">
                        <ul>
                            <li className="pb-2">Dribbble</li>
                            <li className="pb-2">Awwwwards</li>
                            <li className="pb-2">Twitter</li>
                            <li className="pb-2">Email</li>
                        </ul>
                    </div>
                </div>
            </main>
        </Layout>
    )
}