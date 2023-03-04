import { Card } from '@/components/Card/card';
import classes from './cardList.module.css';
import { useState } from "react";

export function CardList() {
  const [cards,setCards] = useState([
    {
      title: '技術',
      description: 'スタートアップの自社開発エンジニアがサポート',
    },
    {
      title: '継続方法',
      description: '挫折しない継続学習方法をサポート',
    },
    {
      title: '企業分析',
      description: 'カルチャーマッチなどの見方やエンジニアのレジュメの書き方をサポート',
    },
  ])
  return (
    <div className={classes.cardList}>
      {cards.map(card => (
        <Card key={card.title} title={card.title} description={card.description} />
      ))}
    </div>
  );
}