import s from './TransactionTable.module.css';

export const TransactionItem = prop => {
  const { data, description, category, sum } = prop.data;
  return (
    <ul className={s.Line}>
      <li>{data}</li>
      <li>{description}</li>
      <li>{category}</li>
      <li>{sum}</li>
      <li>del</li>
    </ul>
  );
};
