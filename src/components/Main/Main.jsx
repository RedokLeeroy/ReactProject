import Button from 'components/common/button/button';
import { SummaryTable } from 'components/SummaryTable/SummaryTable';
import { TransactionTable } from 'components/TransactionTable/TransactionTable';
import { useState } from 'react';
import s from './Main.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { expensePost } from 'redux/expense/expense-operations';
import { NavLink, useLocation } from 'react-router-dom';
import { incomePost } from 'redux/income/income-operations';
import { Calendar } from 'components/Calendar/Calendar';
export const Main = () => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [sum, setSum] = useState('');
  const dateNow = new Date();
  const [datePicker, setDatePicker] = useState(dateNow.toISOString());
  const [list, setList] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const prodExp = useSelector(({ expense }) => expense.categories);
  const prodInc = useSelector(({ income }) => income.categories);
  const expensesTransactionData = useSelector(
    ({ expense }) => expense.expenses
  );
  const incomesTransactionData = useSelector(({ income }) => income.incomes);
  const expensesSummaryData = useSelector(({ expense }) => expense.monthsStats);
  const incomesSummaryData = useSelector(({ income }) => income.monthsStats);
  const dispatch = useDispatch();
  const pageLocation = useLocation().pathname;

  let products;
  let transactionData;
  let summaryData;

  if (pageLocation === '/expenses') {
    products = prodExp;
    transactionData = expensesTransactionData;
    summaryData = expensesSummaryData;
  }
  if (pageLocation === '/income') {
    products = prodInc;
    transactionData = incomesTransactionData;
    summaryData = incomesSummaryData;
  }

  const handleChangeForm = evt => {
    const { value, name } = evt.target;
    switch (name) {
      case 'description':
        setDescription(value);
        break;
      case 'category':
        setCategory(value);
        break;
      case 'sum':
        setSum(value);
        break;
      default:
        return;
    }
  };

  const handleResetForm = () => {
    setDescription('');
    setCategory('');
    setSum('');
    setStartDate(new Date());
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();
    const items = {
      description: description,
      amount: Number(sum),
      date: datePicker.slice(0, 10),
      category: category,
    };

    if (pageLocation === '/expenses') {
      dispatch(expensePost(items));
    }
    if (pageLocation === '/income') {
      dispatch(incomePost(items));
    }

    handleResetForm();
  };

  const handleIsListTogle = () => {
    setList(!list);
  };

  const handleCloseByDrope = evt => {
    if (evt.target === evt.currentTarget) {
      setList(!list);
    }
  };

  return (
    <div className={s.container}>
      <nav>
        <NavLink
          to="/expenses"
          className={({ isActive }) =>
            s.btn + (isActive ? ' ' + s.btnAccent : '')
          }
        >
          EXPENSES
        </NavLink>
        <NavLink
          to="/income"
          className={({ isActive }) =>
            s.btn + (isActive ? ' ' + s.btnAccent : '')
          }
        >
          INCOME
        </NavLink>
      </nav>
      <div className={s.contentContainer}>
        <div className={s.formContainer}>
          <div className={s.calendar}>
            <Calendar
              setDate={setDatePicker}
              startDate={startDate}
              setStartDate={setStartDate}
            />
          </div>
          <form className={s.form} onSubmit={handleSubmitForm}>
            <input
              className={s.inputDescription}
              placeholder="Product description"
              type="text"
              name="description"
              value={description}
              onChange={handleChangeForm}
            />
            <div className={s.inputCategoryContainer}>
              <button
                className={s.inputCategory}
                onClick={handleIsListTogle}
                type="button"
              >
                {category ? (
                  <p style={{ color: '#52555F' }}>{category}</p>
                ) : (
                  <p style={{ color: '#c7ccdc' }}>Product category</p>
                )}
                <span className={s.role}>&#129171;</span>
              </button>
              {list && (
                <>
                  <div className={s.overlay} onClick={handleCloseByDrope}></div>
                  <ul className={s.listCategory}>
                    {products.map((el, ind) => (
                      <li
                        value={el}
                        key={ind}
                        className={s.itemCategory}
                        onClick={() => {
                          setCategory(el);
                          handleIsListTogle();
                        }}
                      >
                        {el}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <input
              className={s.inputSumm}
              placeholder="0,00"
              type="number"
              name="sum"
              value={sum}
              onChange={handleChangeForm}
            />
          </form>
          <div className={s.buttonContainer}>
            <Button text={'INPUT'} type={'submit'} onClick={handleSubmitForm} />
            <Button text={'CLEAR'} onClick={handleResetForm} />
          </div>
        </div>

        <div className={s.tableContainer}>
          <div className={s.prods}>
            <TransactionTable
              transactionData={transactionData}
              tablePage={pageLocation}
            />
          </div>
          <div className={s.sumary}>
            <SummaryTable summaryData={summaryData} />
          </div>
        </div>
      </div>
    </div>
  );
};
