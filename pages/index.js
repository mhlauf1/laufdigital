import Head from 'next/head';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../utils/posts';
import { Hero, Layout, IntroVideo, Accomplishments, Statistics, Projects, Services, CTA, Testimonials, Footer } from '../components';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>LaufDigital</title>
      </Head>
      <main>
        <Hero />
        {/* <IntroVideo /> */}
        <Accomplishments />
        <Statistics />
        <Projects />
        <Services />
        <CTA />
        <Testimonials />
        <Footer />
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
};