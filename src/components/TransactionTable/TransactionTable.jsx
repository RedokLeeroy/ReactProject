import { useDispatch } from 'react-redux';
import { TransactionItem } from './TransactionItem/TransactionItem';
import s from './TransactionTable.module.css';
import { expenseDelete } from 'redux/expense/expense-operations';
import { incomeDelete } from 'redux/income/income-operations';
import { PropTypes } from 'prop-types';

export const TransactionTable = ({ tablePage, transactionData }) => {
  const dispatch = useDispatch();

  const hendelDelete = id => {
    if (tablePage === '/expenses') {
      dispatch(expenseDelete(id));
    }
    if (tablePage === '/income') {
      dispatch(incomeDelete(id));
    }
  };

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
        {transactionData?.map(elem => {
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

TransactionTable.propTypes = {
  tablePage: PropTypes.string,
  transactionData: PropTypes.arrayOf(PropTypes.object),
};
