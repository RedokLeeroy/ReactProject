import Chart from 'components/Chart/Chart';
import { objectEntriesCompareDesc } from './compare';
const ChartController = ({ categoryObject }) => {
  const arr = Object.entries(categoryObject);
  // arr.shift();
  console.log(arr);
  const newArr = arr.filter(el => el[0] !== 'total');
  console.log(newArr);
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
