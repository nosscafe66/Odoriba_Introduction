import { Pagination } from '@/components/Pagenation/pagenation';
import Link from 'next/link';
import { client } from "../../api/libs/client";
import classes from "./blogid.module.css"

const PER_PAGE = 1;

export default function BlogPageId({ blog, totalCount }) {
    return (
        <div className={classes.content_container}>
            <ul>
                {blog.map(blog => (
                    <li key={blog.id}>
                        <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
            <Pagination totalCount={totalCount} />
        </div>
    );
}

export const getStaticPaths = async () => {
    const repos = await client.get({ endpoint: "blog" });

    const range = (start, end) => [...Array(end - start + 1)].map((_, i) => start + i);

    const paths = range(1, Math.ceil(repos.totalCount / PER_PAGE)).map((repo) => `/blog/page/${repo}`);
    // const paths = data.contents.map((content) => `/blog/${content.id}`);

    return { paths, fallback: false };
};

// データを取得
export const getStaticProps = async (context) => {
    const id = context.params.id;

    const data = await client.get({ endpoint: "blog", queries: { offset: (id - 1) * 5, limit: 5 } });

    return {
        props: {
            blog: data.contents,
            totalCount: data.totalCount,
        },
    };
};