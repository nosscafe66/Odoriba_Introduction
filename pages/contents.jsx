import Head from 'next/head'
import { Main } from '@/components/Main'
import { Header } from '@/components/Header/header'
import { Footer } from '@/components/Footer/footer'
import { client } from "./api/libs/client"
import { Pagination } from '@/components/Pagenation/pagenation'

export default function Blog({ blog, totalCount }) {
    return (
        <div>
            <Head>
                <title>Contents Page</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Main page="Contents" blog={blog} totalCount={totalCount} comp={<Pagination totalCount={totalCount} blogid={blog} />} />
            <Footer />
        </div>
    )
}

export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "blog", queries: { offset: 0, limit: 5 } });

    return {
        props: {
            blog: data.contents,
            totalCount: data.totalCount
        },
    };
};