import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth-operations';
// ------------------------------------------//

export const Logining = () => {
  const [email, setMail] = useState('');
  const [pass, setPass] = useState('');
  const dispatch = useDispatch();

  const handlerInput = event => {
    const { name, value } = event.target;
    if (name === 'email') {
      setMail(value);
    } else if (name === 'password') {
      setPass(value);
    }
  };

  const handlerSubmit = event => {
    event.preventDefault();
    const credentials = { email: email, password: pass };
    dispatch(logIn(credentials));
    setMail('');
    setPass('');
  };

  return (
    <form onSubmit={handlerSubmit}>
      <label>
        Email<input name="email" value={email} onChange={handlerInput}></input>
      </label>
      <label>
        Password
        <input name="password" value={pass} onChange={handlerInput}></input>
      </label>
      <button>Submit</button>
    </form>
  );
};
