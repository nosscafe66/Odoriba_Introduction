import Link from "next/link";
import classes from './blogcontent.module.css'

export default function BlogContent({ blog }) {
    return (
      <div className={classes.content_container}>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id} className={classes.id_list}>
              <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }