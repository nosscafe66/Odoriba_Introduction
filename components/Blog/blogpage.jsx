import Link from "next/link";

export function BlogPage({ blog }) {
    return (
        <div>
            {blog.map((blog, number) => (
                <li key={number} className={classes.pagelist}>
                    <Link href={`/blog/${blog.id}`}>{isPagecount ? number : number}</Link>
                </li>
            ))}
        </div>
    );
}