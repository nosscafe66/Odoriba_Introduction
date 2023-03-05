import { Card } from '@/components/Card/card';
import classes from './cardList.module.css';
import { useState } from "react";
import { PaymentButton } from '../PaymentButton/paymentbutton';

export function CardList() {
  const [cards, setCards] = useState([
    {
      title: 'PivotTech',
      description: 'スタートアップの自社開発エンジニアが技術・\\n 学習継続方法・企業の分析サポート',
      label: ""
    }
  ])
  return (
    <div className={classes.cardList}>
      {cards.map(card => (
        <Card key={card.title} title={card.title} description={card.description} />
      ))}
    </div>
  );
}