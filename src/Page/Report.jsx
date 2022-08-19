import { BalanceLap } from 'components/BalanceLap/BalanceLap';
import { ReportSummery } from 'components/ReportSummary/ReportSummary';
import { ReporCategory } from 'components/ReportCategory/ReportCategory';
import { BackgroundLap } from 'components/Background/BackgroundLap';
import ChartController from '../components/ChartControll/ChartControll';
const Report = () => {
  return (
    <>
      <BackgroundLap>
        <BalanceLap />
        <ReportSummery />
        <ReporCategory />
        <ChartController />
      </BackgroundLap>
    </>
  );
};

export default Report;
