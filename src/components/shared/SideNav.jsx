import React, { useContext } from 'react';
import {
  faHome,
  faCalendar,
  faGraduationCap,
  faBook,
  faArchive,
  faSignOutAlt,
  faUserCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { Link } from '@reach/router';
import LanguageContext from '../LanguageContext.jsx';

const SideNav = (props) => {
  const [lang] = useContext(LanguageContext);
  return (
    <SideNavContainer>
      <SideProfile>
        <SideProfilePicture
          src={props.profile.img}
          alt="profile"
          className="profilePicture"
        />
        <div className="briefProfile">
          <ProfileName>{props.profile.name}</ProfileName>
          <ProfileEmail>{props.profile.email}</ProfileEmail>
        </div>
      </SideProfile>
      <SideNavItems>
        <Link to="/">
          <SideNavItem>
            <FontAwesomeIcon icon={faHome} />
            <NavLink>{lang.SideMenu[0]}</NavLink>
          </SideNavItem>
        </Link>
        <Link to="/calendar">
          <SideNavItem>
            <FontAwesomeIcon icon={faCalendar} />
            <NavLink>{lang.SideMenu[1]}</NavLink>
          </SideNavItem>
        </Link>
        <Link to="/classes">
          <SideNavItem>
            <FontAwesomeIcon icon={faGraduationCap} />
            <NavLink>{lang.SideMenu[2]}</NavLink>
          </SideNavItem>
        </Link>
        <Link to="/courses">
          <SideNavItem>
            <FontAwesomeIcon icon={faBook} />
            <NavLink>{lang.SideMenu[3]}</NavLink>
          </SideNavItem>
        </Link>
        <Link to="/calendrier">
          <SideNavItem>
            <FontAwesomeIcon icon={faArchive} />
            <NavLink>{lang.SideMenu[4]}</NavLink>
          </SideNavItem>
        </Link>
        <Link to="/profile">
          <SideNavItem>
            <FontAwesomeIcon icon={faUserCircle} />
            <NavLink>{lang.SideMenu[5]}</NavLink>
          </SideNavItem>
        </Link>
        <Link to="/calendrier">
          <SideNavItem>
            <FontAwesomeIcon icon={faSignOutAlt} />
            <NavLink>{lang.SideMenu[6]}</NavLink>
          </SideNavItem>
        </Link>
      </SideNavItems>
    </SideNavContainer>
  );
};

const SideNavContainer = styled.div`
  color: #333;
  display: flex;
  flex-direction: column;
  min-width: 300px;
  background: #f7f7f7;
  box-shadow: 11px 0px 16px -11px #ddd;
  height: 85vh;
  align-items: stretch;
  overflow: hidden;
  @media (max-width: 900px) {
    min-width: 70px;
    max-width: 70px;
  }
`;
const SideNavItems = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  @media (max-width: 900px) {
    padding: 10px;
  }
`;

const SideNavItem = styled.li`
  padding: 10px;
  margin: 5px;
  transition: background 0.5s;
  border-radius: 3px;
  transition: background 1s;
  &:hover {
    background: #edd;
  }
`;
const NavLink = styled.h4`
  padding: 5px 10px;
  margin-left: 10px;
  display: inline-block;
  @media (max-width: 900px) {
    display: none;
  }
`;

const SideProfile = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px 15px 11px -9px rgba(171, 171, 171, 0.14);
  padding: 10px 20px;
  margin-bottom: 20px;
`;
const SideProfilePicture = styled.img`
  max-height: 75px;
  border-radius: 50%;
  padding: 5px;
  margin: 5px;
  @media (max-width: 900px) {
    max-height: 50px;
  }
`;
const ProfileEmail = styled.h4`
  color: #999;
  font-size: 14px;
  @media (max-width: 900px) {
    display: none;
  }
`;

const ProfileName = styled.h3`
  font-weight: 100;
  font-size: 16px;
  @media (max-width: 900px) {
    display: none;
  }
`;

export default SideNav;
