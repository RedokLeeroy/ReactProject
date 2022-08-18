import { BalanceLap } from 'components/BalanceLap/BalanceLap';
import { ReportSummery } from 'components/ReportSummary/ReportSummary';
import { ReporCategory } from 'components/ReportCategory/ReportCategory';
const Report = () => {
  return (
    <>
      <BalanceLap />
      <ReportSummery />
      <ReporCategory />
    </>
  );
};

export default Report;
