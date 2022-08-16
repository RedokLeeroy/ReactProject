export const Navigation = () => {
  return (
    <div className="header__container">
      <div className="logo">
        <a className="logo__link" href="/">
          <svg className="logo__icon" width="90" height="31">
            <use href="src/images/icon.svg#icon-logo"></use>
          </svg>
        </a>
      </div>
    </div>
  );
};
