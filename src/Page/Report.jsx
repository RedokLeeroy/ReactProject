import { BalanceLap } from 'components/BalanceLap/BalanceLap';
import { ReportSummery } from 'components/ReportSummary/ReportSummary';
import { ReporCategory } from 'components/ReportCategory/ReportCategory';
import { BackgroundLap } from 'components/Background/BackgroundLap';
const Report = () => {
  return (
    <>
      <BackgroundLap>
        <BalanceLap />
        <ReportSummery />
        <ReporCategory />
      </BackgroundLap>
    </>
  );
};

export default Report;
