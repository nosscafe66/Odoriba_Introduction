import Link from "next/link";
import classes from './blogcontent.module.css'

export default function BlogContent({ blog, totalCount }) {
  return (
    <div className={classes.content_container}>
      <div className={classes.contents}>
        {blog.map((blog, index) => (
          <li key={blog.id} className={classes.bloglist}>
            <Link href={`/blog/${blog.id}`}>タイトル：{blog.title} 投稿時間：{blog.createdAt}</Link>
          </li>
        ))}
      </div>
    </div>
  );
}