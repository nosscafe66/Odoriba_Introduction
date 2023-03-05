import { PaymentButton } from '../PaymentButton/paymentbutton';
import classes from './card.module.css';
import Image from 'next/image'

export function Card(props) {
  return (
    <div className={classes.card}>
      <h2 className={classes.title}>{props.title}</h2>
      <p className={classes.description}>{props.description}</p>
      <Image src="/img/pivottech.png" width={400} height={200} className={classes.img} />
      <button>{props.button}</button>
      <PaymentButton />
    </div>
  );
}