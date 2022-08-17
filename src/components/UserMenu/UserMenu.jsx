import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(state => state.auth?.user?.name);

  return (
    <>
      <div>
        <p>{userName}</p>
      </div>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </>
  );
};

export default UserMenu;
