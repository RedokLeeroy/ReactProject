import { BalanceLap } from 'components/BalanceLap/BalanceLap';
import { ReportSummery } from 'components/ReportSummary/ReportSummary';
import { ReporCategory } from 'components/ReportCategory/ReportCategory';
import { BackgroundLap } from 'components/Background/BackgroundLap';

import ChartController from 'components/ChartControll/ChartControll';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selector';

const Report = () => {
  const token = useSelector(getIsLoggedIn);
  return (
    <>
      {token && (
        <BackgroundLap>
          <BalanceLap />
          <ReportSummery />
          <ReporCategory />

          <ChartController />
        </BackgroundLap>
      )}
    </>
  );
};

export default Report;
