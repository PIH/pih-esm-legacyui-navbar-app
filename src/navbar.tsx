import React from 'react';
import styles from './navbar.css';
import { getLoggedInUser } from './navbar.resource';
import openmrslogotextsmall from './images/openmrs_logo_text_small.png';
import openmrslogowhite from './images/openmrs_logo_white.gif';
import openmrsgreenbar from './images/openmrs_green_bar.gif';
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
            <img src={openmrslogotextsmall} alt="OpenMRS Logo" />
          </div>
        </a>
        <table id={styles['bannerbar']}>
          <tbody>
            <tr>
              <td id={styles['logocell']}>
                <img src={openmrslogowhite} alt="" className={styles.logoreduced61} />
              </td>
              <td id={styles['barcell']}>
                <div className={styles.barsmall}>
                  <img src={openmrsgreenbar} alt="" className={styles.barroundreduced50} />
                  <ul className={styles.navList}>
                    <li id={styles['homeNavLink']} className={styles.firstChild}>
                      <a href="/openmrs">Home</a>
                    </li>
                    <li id={styles['findPatientNavLink']}>
                      <a href="/openmrs/findPatient.htm"> Find/Create Patient</a>
                    </li>
                    <li id={styles['dictionaryNavLink']}>
                      <a href="/openmrs/dictionary/index.htm">Dictionary</a>
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
