import Head from 'next/head'
import { Main } from '@/components/Main'
import { Header } from '@/components/Header/header'
import { Footer } from '@/components/Footer/footer'
import { client } from "../pages/api/libs/client"
import BlogContent from '@/components/Blog/blogcontent';

export default function Blog({ blog }) {
    return (
        <div>
            <Head>
                <title>Contents Page</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Main page="Contents" blog={blog}/>
            {/* <BlogContent /> */}
            <Footer />
        </div>
    )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
    const data = await client.get({ endpoint: "blog" });

    return {
        props: {
            blog: data.contents,
        },
    };
};