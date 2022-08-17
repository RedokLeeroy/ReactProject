import PropTypes from 'prop-types';
import s from './TransactionItem.module.css';

export const TransactionItem = ({
  transactionData,
  tablePage,
  hendelDelete,
}) => {
  const { data, description, category, sum, _id } = transactionData;

  return (
    <ul className={s.Line} id={_id}>
      <li className={s.Date}>{data}</li>
      <li className={s.Description}>{description}</li>
      <li className={s.Category}>{category}</li>
      {tablePage === 'expenses' ? (
        <li className={s.ExpensesSum}>{`- ${sum} грн.`}</li>
      ) : (
        <li className={s.IncomeSum}>{`${sum} грн.`}</li>
      )}
      <li className={s.Delete}>
        <button
          type="button"
          onClick={() => hendelDelete(_id)}
          className={s.DelBTN}
        >
          del
        </button>
      </li>
    </ul>
  );
};

TransactionItem.propTypes = {
  tablePage: PropTypes.string,
  hendelDelete: PropTypes.func,
  transactionData: PropTypes.shape({
    data: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    sum: PropTypes.number,
    _id: PropTypes.string.isRequired,
  }),
};
