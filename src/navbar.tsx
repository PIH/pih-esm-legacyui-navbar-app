import React from 'react';
import styles from './navbar.css';
import { getLoggedInUser } from './navbar.resource';
import pic from './pic.png';

const NavBar = () => {
  const [loggedInUser, setLoggedInUser] = React.useState(Object());

  React.useEffect(() => {
    getLoggedInUser().then(setLoggedInUser);
  }, []);
  return (
    <div>
      <div id={styles['userBar']}>
        <span id={styles['userLoggedInAs']} className={styles.firstChild}>
          Currently logged in as {loggedInUser.display}
        </span>
        <span id={styles['userLogout']}>
          <a href="/openmrs/logout"> log out</a>
        </span>
        <span>
          <a href="/openmrs/options.form"> My Profile </a>
        </span>
        <span id={styles['userHelp']}>
          <a href="/openmrs/help.htm"> Help </a>
        </span>
      </div>
      <div id={styles['banner']}>
        <a href="/openmrs/index.htm">
          <div id={styles['logosmall']}>
            <img
              src="http://192.168.33.21:8080/openmrs/moduleResources/legacyui/images/openmrs_logo_text_small.png"
              alt="OpenMRS Logo"
            />
          </div>
        </a>
        <table id={styles['bannerbar']}>
          <tbody>
            <tr>
              <td id={styles['logocell']}>
                <img
                  src="http://192.168.33.21:8080/openmrs/images/openmrs_logo_white.gif"
                  alt=""
                  className={styles.logoreduced61}
                />
              </td>
              <td id={styles['barcell']}>
                <div className={styles.barsmall}>
                  <img src={pic} alt="" className={styles.barroundreduced50} />
                  <ul className={styles.navList}>
                    <li id={styles['homeNavLink']} className={styles.firstChild}>
                      <a href="/openmrs">Home</a>
                    </li>
                    <li id={styles['findPatientNavLink']}>
                      <a href="/openmrs/findPatient.htm"> Find/Create Patient</a>
                    </li>
                    <li id={styles['dictionaryNavLink']}>
                      <a href="/openmrs/dictionary">Dictionary</a>
                    </li>
                    <li>
                      <a href="/openmrs//cohortBuilder.list">Cohort Builder</a>
                    </li>
                    <li>
                      <a href="/openmrs/module/reporting/dashboard/index.form">Reporting</a>
                    </li>
                    <li id={styles['administrationNavLink']}>
                      <a href="/openmrs/admin">Administration</a>
                    </li>
                  </ul>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default NavBar;
