import Link from "next/link";
import classes from './tag.module.css'

export function Category({ category }) {
    return (
        <ul className={classes.category}>
            {category.map((category) => (
                <li className={classes.categorylist} key={category.id}>
                    <Link href={`/category/${category.id}`}><img src="https://img.icons8.com/fluency/30/null/tags.png" />{category.name}</Link>
                </li>
            ))}
        </ul>
    );
}