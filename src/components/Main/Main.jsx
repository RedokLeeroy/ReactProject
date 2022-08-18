import Button from 'components/common/button/button';
import { SummaryTable } from 'components/SummaryTable/SummaryTable';
import { TransactionTable } from 'components/TransactionTable/TransactionTable';
import { useState } from 'react';
import s from './Main.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { expenseCategories } from 'redux/transaction/transaction-operations';

export const Main = () => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [sum, setSum] = useState('');
  // eslint-disable-next-line no-unused-vars
  const [date, setDate] = useState(Date.now());
  const [list, setList] = useState(false);
  const [products, setProducts] = useState([]);
  // const products = useSelector(state => state.expenses);
  const isLogin = useSelector(state => state.auth.isLogin);
  const dispatch = useDispatch();

  const prods = () => {
    return new Promise(resolve => {
      resolve(dispatch(expenseCategories()));
    });
  };

  useEffect(() => {
    if (isLogin) {
      prods()
        .then(resp => resp.payload)
        .then(setProducts);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isLogin]);

  // useEffect(() => {
  //   if (isLogin) {
  //     dispatch(expenseCategories());
  //   }
  // }, [dispatch, isLogin]);

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
      // case 'date':
      //   setDate(Date.now());
      //   break;
      default:
        return;
    }
  };

  const handleResetForm = () => {
    setDescription('');
    setCategory('');
    setSum('');
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();
    console.log('submit:', date, description, category, sum);
    handleResetForm();
  };
  const handleIsListTogle = () => {
    setList(!list);
  };

  return (
    <div className={s.container}>
      <button className={s.btnAccent}>EXPENSES</button>
      <button className={s.btn}>INCOME</button>
      <div className={s.contentContainer}>
        <div className={s.formContainer}>
          <form className={s.form} onSubmit={handleSubmitForm}>
            <input
              className={s.inputDate}
              type="text"
              placeholder="Wait for date"
              // value={date}
              onChange={handleChangeForm}
            />
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
              </button>
              {list && (
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
            <Button
              // className={s.buttonContainer}
              text={'INPUT'}
              type={'submit'}
              onClick={handleSubmitForm}
            />
            <Button
              // className={s.buttonContainer}
              text={'CLEAR'}
              onClick={handleResetForm}
            />
          </div>
        </div>

        <div className={s.tableContainer}>
          <div className={s.prods}>
            <TransactionTable
            // transactionData={transactionItem}
            // tablePage={'expenses'}
            />
          </div>
          <div className={s.sumary}>
            <SummaryTable />
          </div>
        </div>
      </div>
    </div>
  );
};
