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
      <li>{data}</li>
      <li className={s.Description}>{description}</li>
      <li>{category}</li>
      {tablePage === 'expenses' ? (
        <li className={s.ExpensesSum}>{`- ${sum} грн.`}</li>
      ) : (
        <li className={s.Income}>{`${sum} грн.`}</li>
      )}
      <li>
        <button type="button" onClick={() => hendelDelete(_id)}>
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
