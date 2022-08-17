import Button from 'components/common/button/button';
import { useState } from 'react';
import s from './Main.module.css';

export const Main = () => {
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [sum, setSum] = useState('');

  const products = [
    'Продукты',
    'Алкоголь',
    'Развлечения',
    'Здоровье',
    'Транспорт',
    'Всё для дома',
    'Техника',
    'Коммуналка и связь',
    'Спорт и хобби',
    'Образование',
    'Прочее',
  ];

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
  };

  const handleSubmitForm = evt => {
    evt.preventDefault();
    console.log('submit:', description, category, sum);
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
              type="data"
              placeholder="Wait for date"
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
              <select
                className={s.inputCategory}
                name="category"
                defaultValue={category}
                onChange={handleChangeForm}
              >
                <option value="" disabled hidden>
                  Product category
                </option>
                {products.map((el, ind) => (
                  <option value={el} key={ind} className={s.option}>
                    {el}
                  </option>
                ))}
              </select>
            </div>

            <input
              className={s.inputSumm}
              placeholder="0,00"
              type="number"
              name="sum"
              value={sum}
              onChange={handleChangeForm}
            />
            <Button
              className={s.buttonContainer}
              text={'INPUT'}
              type={'submit'}
              onClick={handleSubmitForm}
            />
            <Button
              className={s.buttonContainer}
              text={'CLEAR'}
              onClick={handleResetForm}
            />
          </form>
        </div>
        <div className={s.tableContainer}>
          <div className={s.prods}></div>
          <div className={s.sumary}></div>
        </div>
      </div>
    </div>
  );
};
