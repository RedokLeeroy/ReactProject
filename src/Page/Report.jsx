import { ReportSummery } from 'components/ReportSummary/ReportSummary';
import { ReporCategory } from 'components/ReportCategory/ReportCategory';

import ChartController from 'components/ChartControll/ChartControll';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selector';

const Report = () => {
  const token = useSelector(getIsLoggedIn);
  return (
    <>
      {token && (
        <>
          <ReportSummery />
          <ReporCategory />

          <ChartController />
        </>
      )}
    </>
  );
};

export default Report;
