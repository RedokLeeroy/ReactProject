import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { transactionIncomePost } from 'redux/transaction/transaction-operations';

// ------------------------------------------//

export const Login = () => {
  const [email, setMail] = useState('');
  const [pass, setPass] = useState('');
  const [date, setDate] = useState('');
  const [category, setCat] = useState('');
  const dispatch = useDispatch();

  const handlerInput = event => {
    const { name, value } = event.target;
    if (name === 'email') {
      setMail(value);
    } else if (name === 'password') {
      setPass(value);
    } else if (name === 'date') {
      setDate(value);
    } else if (name === 'category') {
      setCat(value);
    }
  };

  const handlerSubmit = event => {
    event.preventDefault();
    const credentials = {
      description: email,
      amount: Number(pass),
      date: date,
      category: category,
    };
    dispatch(transactionIncomePost(credentials));
  };

  return (
    <form onSubmit={handlerSubmit}>
      <label>
        desription
        <input name="email" value={email} onChange={handlerInput}></input>
      </label>
      <label>
        value
        <input name="password" value={pass} onChange={handlerInput}></input>
      </label>
      <label>
        date
        <input name="date" value={date} onChange={handlerInput}></input>
      </label>
      <label>
        category
        <input name="category" value={category} onChange={handlerInput}></input>
      </label>
      <button>Submit</button>
    </form>
  );
};
