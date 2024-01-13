import classes from "./content.module.css"

export function Content({ category_cmp, blog_cmp }) {
    return (
        <div id="contents" className={classes.maincontent}>
            <div className={classes.categorybar}>
                {category_cmp}
            </div>
            <div className={classes.blogcontent}>
                {blog_cmp}
            </div>
        </div>
    )
}
