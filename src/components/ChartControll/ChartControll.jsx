import { useSelector } from 'react-redux';

import Chart from 'components/Chart/Chart';
import { objectEntriesCompareDesc } from './compare';

const ChartController = () => {
  const getCurrentBtn = useSelector(state => state.reportCurrentBtn);

  const arr = Object.entries(getCurrentBtn[1]);
  // arr.shift();
  const newArr = arr.filter(el => el[0] !== 'total');
  const sortArr = newArr.sort(objectEntriesCompareDesc);

  const labels = sortArr.map(el => el[0]);
  const data = sortArr.map(el => el[1]);
  const maxData = Math.max(...data) * 1.2;

  return (
    <>
      {sortArr.length !== 0 ? (
        <Chart data={data} labels={labels} maxData={maxData} />
      ) : null}
    </>
  );
};
export default ChartController;
