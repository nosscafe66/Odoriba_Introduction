import { Card } from '@/components/Card/card';
import classes from './cardList.module.css';
import { useState } from "react";
import { PaymentButton } from '../PaymentButton/paymentbutton';

export function CardList() {
  const [cards, setCards] = useState([
    {
      title: 'PivotTech',
      description: '無料体験エンジニアスクールについて(未経験者向け、中高生向け)',
      label: ""
    },
    {
      title: 'PivotTech',
      description: '学習継続方法・企業の分析サポート',
      label: ""
    },
    {
      title: 'PivotTech',
      description: 'スタートアップの自社開発エンジニアが技術・\\n 学習継続方法・企業の分析サポート',
      label: ""
    },
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