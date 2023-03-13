import Link from "next/link";
import classes from './pagenation.module.css'
import { useCallback } from "react";
import { useState } from "react";

export const Pagination = ({ totalCount, blogid }) => {
  const [isPageCountShow, setisPageCountShow] = useState(true)

  const isPagecount = useCallback((e) => {
    if (pagecount > 4) {
      setisPageCountShow((preisPageCountShow) => {
        return !isPageCountShow
      })
    }
  })

  return (
    <div className={classes.page_container}>{
      <ul>
        {blogid.map((blogid, pagecount) => (
          <li key={blogid.id} className={classes.pagelist}>
            <Link href={`/blog/${blogid.id}`}>{isPagecount ? pagecount + 1 : pagecount}</Link>
          </li>
        ))}
      </ul>
    }
    </div>
  );
};