import Link from "next/link";
import classes from './blogcontent.module.css'

export default function BlogContent({ blog }) {
  return (
    <div className={classes.content_container}>
      <div className={classes.contents}>
        {blog.map((blog, index) => (
          <li key={blog.id} className={classes.bloglist}>
            <Link href={`/blog/${blog.id}`}>{blog.title} <p>{blog.createdAt}</p></Link>
          </li>
        ))}
      </div>
    </div>
  );
}