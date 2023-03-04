import classes from './card.module.css';

export function Card(props){
    return (
      <div className={classes.card}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    );
}