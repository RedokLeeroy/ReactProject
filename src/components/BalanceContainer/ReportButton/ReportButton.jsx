import { NavLink } from 'react-router-dom';
import { ReactComponent as ReportIcon } from '../../../images/reports.svg';
import s from './ReportButton.module.css'

const ReportButton = () => {
  return (
      <NavLink to="/report">
          <div className={s.containerReports}>
          <p className={s.textReports}>Reports</p>
          <ReportIcon/>
      </div>
      </NavLink>
  )
}



export default ReportButton