import Chart from 'components/Chart/Chart';
import { objectEntriesCompareDesc } from './compare';
import styles from './ChartController.module.css';
const ChartController = ({ categoryObject }) => {
  const arr = Object.entries(categoryObject);
  arr.shift();
  const sortArr = arr.sort(objectEntriesCompareDesc);
  const labels = sortArr.map(el => el[0]);
  const data = sortArr.map(el => el[1]);
  const maxData = Math.max(...data) * 1.2;

  return (
    <div className={styles.module}>
      {sortArr.length !== 0 ? (
        <Chart data={data} labels={labels} maxData={maxData} />
      ) : null}
    </div>
  );
};
export default ChartController;
