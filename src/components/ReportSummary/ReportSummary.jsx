import s from './ReportSummary.module.css';
export const ReportSummery = () => {
  return (
    <div className={s.section}>
      <div className={s.summaryExp}>
        <p className={s.sumName}>Expenses:</p>
        <p className={s.sumRed}>- 18 000.00 грн.</p>
      </div>
      <div className={s.summaryInc}>
        <p className={s.sumName}>Income:</p>
        <p className={s.sumGreen}>+ 45 000.00 грн.</p>
      </div>
    </div>
  );
};
