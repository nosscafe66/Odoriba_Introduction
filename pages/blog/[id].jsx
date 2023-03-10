import { client } from "../api/libs/client";
import classes from "../blog/id.module.css"

export default function BlogId({ data }) {
    return (
        <div>
            <h1 className={classes.title}>{data.title}</h1>
            <p className={classes.publishedtime}>{data.publishedAt}</p>
            <div className={classes.content_container}
                dangerouslySetInnerHTML={{
                    __html: `${data.content}`,
                }}
            />
        </div>
    );
}

export const getStaticPaths = async () => {
    const data = await client.get({ endpoint: "blog" });

    const paths = data.contents.map((content) => `/blog/${content.id}`);

    return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
    const id = context.params.id
    const data = await client.get({ endpoint: "blog", contentId: id });

    return {
        props: {
            data,
        },
    };
};