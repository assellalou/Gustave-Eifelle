import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';

const DropDown = ({ DropdownItems }) => {
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    isShown ? setIsShown(false) : setIsShown(true);
  };
  return (
    <ul style={{ position: 'relative' }}>
      <Dropdown>
        <DropDownLink href={DropdownItems[0].uri} onClick={handleClick}>
          {DropdownItems[0].text}
          <FontAwesomeIcon
            icon={faSortDown}
            style={{ marginLeft: 5, paddingBottom: 5 }}
          />
        </DropDownLink>
        <DropdownMenu style={isShown ? show : hide}>
          {DropdownItems.map((item) => (
            <li key={item.key} style={{ padding: 0 }}>
              <DropDownLink
                href={item.uri}
                onClick={() => item.click(item.key)}
              >
                {item.text}
              </DropDownLink>
            </li>
          ))}
        </DropdownMenu>
      </Dropdown>
    </ul>
  );
};
const show = {
  transformOrigin: '50% 0%',
  display: 'block',
  maxHeight: '9999px',
  transform: 'scaleY(1)',
  top: '100px',
};
const hide = {
  transformOrigin: '50% 0%',
  maxHeight: 0,
  transform: 'scaleY(0)',
};
const Dropdown = styled.li`
  display: block;
  position: absolute;
  top: -15px;
  left: -10px;
  padding: 0;
  margin: 0;
  font-size: 1em;
  text-decoration: none;
  cursor: pointer;
`;
const DropdownMenu = styled.ul`
  max-height: 0;
  overflow: hidden;
  list-style: none;
  padding: 10px;
  background: #fff;
  margin: 5px 0;
  border-radius: 3px;
`;
const DropDownLink = styled.a`
  display: block;
  padding: 5px 10px;
`;
export default DropDown;
