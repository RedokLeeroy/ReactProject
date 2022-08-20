import { useSelector } from 'react-redux';

import s from './ReportSummary.module.css';

export const ReportSummery = () => {
  const grtExpenseTotal = useSelector(
    state => state.currentPeriod.expensesTotal
  );
  const grtIncomesTotal = useSelector(
    state => state.currentPeriod.incomesTotal
  );
  return (
    <div className={s.section}>
      <div className={s.line}>
        <div className={s.summaryExp}>
          <p className={s.sumName}>Expenses:</p>
          <p className={s.sumRed}>{`- ${grtExpenseTotal.toFixed(2)} грн.`}</p>
        </div>
      </div>
      <div className={s.summaryInc}>
        <p className={s.sumName}>Income:</p>
        <p className={s.sumGreen}>{`+ ${grtIncomesTotal.toFixed(2)} грн.`}</p>
      </div>
    </div>
  );
};
