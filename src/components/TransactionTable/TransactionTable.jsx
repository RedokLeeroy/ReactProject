// import { useParams } from 'react-router-dom';
import { TransactionItem } from './TransactionItem/TransactionItem';
import s from './TransactionTable.module.css';

const transactionItem = [
  {
    data: '05.09.2019',
    description: 'bananas',
    category: 'Prodact',
    sum: 112.5,
    _id: '507f1f77bcf86cd799439011',
  },
  {
    data: '05.09.2019',
    description: 'bananas',
    category: 'Prodact',
    sum: 20,
    _id: '507f1f77bcsf86cd799439011',
  },
  // {
  //   data: '05.09.2019',
  //   description: 'Bananas',
  //   category: 'Prodact',
  //   sum: 30,
  //   _id: '507f1fa77bcf86cd799439011',
  // },
  // {
  //   data: '05.09.2019',
  //   description: 'Bananas',
  //   category: 'Prodact',
  //   sum: 30,
  //   _id: '507f1fa77bcf86cd799439011',
  // },
  // {
  //   data: '05.09.2019',
  //   description: 'Bananas',
  //   category: 'Prodact',
  //   sum: 30,
  //   _id: '507f1fa77bcf86cd799439011',
  // },
  // {
  //   data: '05.09.2019',
  //   description: 'Bananas',
  //   category: 'Prodact',
  //   sum: 30,
  //   _id: '507f1fa77bcf86cd799439011',
  // },
  // {
  //   data: '05.09.2019',
  //   description: 'Bananas',
  //   category: 'Prodact',
  //   sum: 30,
  //   _id: '507f1fa77bcf86cd799439011',
  // },
  // {
  //   data: '05.09.2019',
  //   description: 'Bananas',
  //   category: 'Prodact',
  //   sum: 30,
  //   _id: '507f1fa77bcf86cd799439011',
  // },
  // {
  //   data: '05.09.2019',
  //   description: 'Bananas',
  //   category: 'Prodact',
  //   sum: 30,
  //   _id: '507f1fa77bcf86cd799439011',
  // },
  // {
  //   data: '05.09.2019',
  //   description: 'Bananas',
  //   category: 'Prodact',
  //   sum: 30,
  //   _id: '507f1fa77bcf86cd799439011',
  // },
  // {
  //   data: '05.09.2019',
  //   description: 'Bananas',
  //   category: 'Prodact',
  //   sum: 30,
  //   _id: '507f1fa77bcf86cd799439011',
  // },
  // {
  //   data: '05.09.2019',
  //   description: 'Bananas',
  //   category: 'Prodact',
  //   sum: 30,
  //   _id: '507f1fa77bcf86cd799439011',
  // },
  // {
  //   data: '05.09.2019',
  //   description: 'Bananas',
  //   category: 'Prodact',
  //   sum: 30,
  //   _id: '507f1fa77bcf86cd799439011',
  // },
];

export const TransactionTable = () => {
  const tablePage = 'expenses';
  // const tablePage = 'income';

  // const income = useParams();
  // console.log(income);

  const hendelDelete = id => console.log(id);

  return (
    <ul className={s.Table}>
      <li>
        <ul className={s.Thead}>
          <li className={s.Date}>Date</li>
          <li className={s.Description}>Description</li>
          <li className={s.Category}>Category</li>
          <li className={s.Sum}>Sum</li>
          <li className={s.Delete}></li>
        </ul>
      </li>
      <li className={s.Tbody}>
        {transactionItem.map(elem => {
          return (
            <TransactionItem
              key={elem._id}
              transactionData={elem}
              tablePage={tablePage}
              hendelDelete={hendelDelete}
            />
          );
        })}
      </li>
    </ul>
  );
};
