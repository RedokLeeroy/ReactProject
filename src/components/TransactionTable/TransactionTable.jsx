import { TransactionItem } from './TransactionItem';
import s from './TransactionTable.module.css';

const transactionItem = [
  {
    data: '05.09.2019',
    description: 'bananas',
    category: 'Prodact',
    sum: '10',
  },
  {
    data: '05.09.2019',
    description: 'bananas',
    category: 'Prodact',
    sum: '20',
  },
  {
    data: '05.09.2019',
    description: 'Bananas',
    category: 'Prodact',
    sum: '30',
  },
  {
    data: '05.09.2019',
    description: 'Bananas',
    category: 'Prodact',
    sum: '30',
  },
  {
    data: '05.09.2019',
    description: 'Bananas',
    category: 'Prodact',
    sum: '30',
  },
  {
    data: '05.09.2019',
    description: 'Bananas',
    category: 'Prodact',
    sum: '30',
  },
  {
    data: '05.09.2019',
    description: 'Bananas',
    category: 'Prodact',
    sum: '30',
  },
  {
    data: '05.09.2019',
    description: 'Bananas',
    category: 'Prodact',
    sum: '30',
  },
  {
    data: '05.09.2019',
    description: 'Bananas',
    category: 'Prodact',
    sum: '30',
  },
  {
    data: '05.09.2019',
    description: 'Bananas',
    category: 'Prodact',
    sum: '30',
  },
  {
    data: '05.09.2019',
    description: 'Bananas',
    category: 'Prodact',
    sum: '30',
  },
];

// console.log(transactionItem);

export const TransactionTable = () => {
  return (
    <ul className={s.Table}>
      <li>
        <ul className={s.Thead}>
          <li>Date</li>
          <li>Description</li>
          <li>category</li>
          <li>Sum</li>
          <li></li>
        </ul>
      </li>
      <li className={s.Tbody}>
        {transactionItem.map(elem => {
          // console.log(elem);
          return <TransactionItem key={elem.sum} data={elem} />;
        })}
      </li>
    </ul>
  );
};
