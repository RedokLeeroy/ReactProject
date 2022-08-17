import BalanceContainer from './BalanceContainer/BalanceContainer';
import { Login } from './Login';
import { Logining } from './Logining';
export const App = () => {
  return (
    <div>
      <Login></Login>
     
      <Logining></Logining>
      <BalanceContainer/>
    </div>
  );
};
