import React, { useContext } from 'react';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import Flag from 'react-world-flags';
import DropDown from './DropDown.jsx';
import watermark from '../../resources/watermark.png';
import LanguageContext from '../LanguageContext.jsx';
import content from './../../Languages';

const TopNav = () => {
  const supportedLanguages = [
    {
      key: 'FRA',
      name: 'Francais',
    },
    {
      key: 'USA',
      name: 'English',
    },
    {
      key: 'MAR',
      name: 'العربية',
    },
  ];
  const [Lang, setLang] = useContext(LanguageContext);
  const handleClick = (code) => {
    setLang(content[code]);
  };

  const dropDownArray = supportedLanguages.map((item) => ({
    text: <Flag code={item.key} width="18" fallback={item.name} />,
    uri: '#',
    key: item.key,
    click: handleClick,
  }));
  return (
    <Nav>
      <Brand>
        <img src={watermark} alt="logo" style={{ maxWidth: 300 }} />
      </Brand>
      <TopNavRightSide>
        <li>
          <NoStyleButton>
            <FontAwesomeIcon icon={faBell} style={{ color: '#ce3d3d' }} />
          </NoStyleButton>
        </li>
        <li>
          <DropDown DropdownItems={dropDownArray} />
        </li>
      </TopNavRightSide>
    </Nav>
  );
};
const TopNavRightSide = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  list-style: none;
  padding: 20px;
  width: 150px;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  height: 75px;
`;
const Brand = styled.div`
  font-size: 2em;
  font-weight: bold;
  display: inline-block;
`;
const NoStyleButton = styled.button`
  all: unset;
  color: #333;
  cursor: pointer;
`;
export default TopNav;
