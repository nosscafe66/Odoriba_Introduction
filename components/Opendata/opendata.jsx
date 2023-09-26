import Head from "next/head";

export async function getStaticProps() {
    const res = await fetch("https://eventapp.city.kawasaki.jp/data/api/v1/events?format=JSON&place=4&type=2");
    const opendata = await res.json();
    console.log(`オープンデータ：${opendata}`)
    return {
        props: opendata,
    };
}

export function CommentsPage({ opendata }) {
    return (
        <>
            <Head>
                <title>Create Next App</title>
            </Head>
            <main>
                <h1>名前一覧</h1>
                    <ul>
                        {opendata.map((data) => (
                            <li key={data.id}>{data.event_data}</li>
                        ))}
                    </ul>
            </main>
        </>
    );
}