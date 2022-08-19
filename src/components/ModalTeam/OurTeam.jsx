import { Link } from 'react-router-dom';
import data from './data';
import styles from './Ourteam.module.css';
import team from './data';
export default function OurTeam() {
  return (
    <div className={styles.content}>
      <Link to="/" alt="homepage" className={styles.teamButtonClose} />

      {team.map((team, idx) => (
        <figure key={idx} className={styles.team}>
          <img src={team.photo} alt="" className={styles.background} />
          <img
            src={team.photo}
            alt={data.fullName}
            className={styles.profile}
          />
          <figcaption>
            <h3>
              {team.fullName}
              <span>{team.position}</span>
            </h3>
            <div className={styles.icons}>
              <a href={team.linkedIn} target="_blank" rel="noreferrer">
                <i className="ion-social-linkedin-outline"></i>
              </a>
              <a href={team.gitHub} target="_blank" rel="noreferrer">
                <i className="ion-social-github-outline"></i>
              </a>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
