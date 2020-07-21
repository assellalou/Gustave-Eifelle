import React, { useContext } from 'react';
import LanguageContext from './LanguageContext.jsx';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import profilePic from './../resources/carry.jpeg';
import styled from 'styled-components';
const Profile = () => {
  const [lang] = useContext(LanguageContext);
  //   console.log(lang.Profile.buttons.change);
  return (
    <Tabs
      style={{
        maxWidth: '900px',
        margin: 'auto',
        border: 'none',
        height: '100%',
        marginTop: '20px',
        padding: '20px 0',
      }}
    >
      <TabList>
        <Tab>Preview</Tab>
        <Tab>General</Tab>
        <Tab>Security</Tab>
      </TabList>
      <TabPanel>
        <ProfileCard>
          <ProfileImageContainer>
            <ProfileImage src={profilePic} alt="Profile" />
          </ProfileImageContainer>
          <ProfileCardContainer>
            <ProfileName>Carrie Mathison</ProfileName>
            <ProfileEmail>mathison@contact.gov</ProfileEmail>
            <ProfileAdresse>
              2608 84th Street Ct S Lakewood, Washington(WA), 98499
            </ProfileAdresse>
            <ProfileButtonsContainer>
              <ProfileLink href="#">{lang.Profile.buttons.load}</ProfileLink>
              <ProfileLink
                href="#"
                style={{ background: '#b83b5e', color: '#eee' }}
              >
                {lang.Profile.buttons.delete}
              </ProfileLink>
            </ProfileButtonsContainer>
          </ProfileCardContainer>
        </ProfileCard>
      </TabPanel>
      <TabPanel>
        <InputCard>
          <h3>Profile Settings</h3>
          <InputContainer>
            <TextEntery type="text" placeholder="Name" data-type />
            <TextEntery type="email" placeholder="Email" />
            <TextEntery type="text" placeholder="Adresse" />
            <TextEntery type="tel" placeholder="Phone" />
            <SelectEntry>
              <option>Meknes</option>
            </SelectEntry>
          </InputContainer>
          <ProfileButtonsContainer>
            <ProfileLink href="#">Save</ProfileLink>
          </ProfileButtonsContainer>
        </InputCard>
      </TabPanel>
      <TabPanel>
        <InputCard>
          <h3>Security Settings</h3>
          <InputContainer>
            <TextEntery
              type="password"
              placeholder="current password"
              data-type
            />
            <TextEntery type="password" placeholder="new password" />
            <TextEntery type="password" placeholder="new password" />
          </InputContainer>
          <ProfileButtonsContainer>
            <ProfileLink href="#">Change my password</ProfileLink>
          </ProfileButtonsContainer>
        </InputCard>
      </TabPanel>
    </Tabs>
  );
};
const SelectEntry = styled.select`
  font-size: 16px;
  color: #aaa;
  width: 90%;
  max-width: 265px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin: 10px 20px;
  background: linear-gradient(145deg, #d5d5d5, #fefefe);
  box-shadow: 5px 5px 9px #dfdfdf, -5px -5px 9px #fbfbfb;
`;

const TextEntery = styled.input`
  color: #333;
  font-size: 16px;
  padding: 10px 20px;
  background: #eee;
  border: none;
  border-radius: 5px;
  box-shadow: inset 5px 5px 10px #dcdcdc, inset -5px -5px 10px #fefefe;
  margin: 10px;
  ::placeholder {
    color: #aaa;
    opacity: 0.7;
  }
`;
const InputContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 50px 0 10px 0;
  padding: 0 20px;
  @media (max-width: 900px) {
    flex-wrap: nowrap;
    flex-direction: column;
    overflow: hidden;
  }
`;
const InputCard = styled.div`
  width: 80%;
  height: fit-content;
  margin-top: 100px;
  border-radius: 12px;
  box-shadow: 5px 5px 10px #dfdfdf, -5px -5px 10px #fbfbfb;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  padding: 50px 0;
  @media (max-width: 900px) {
    width: 90%;
    padding: 25px 0;
  }
`;
const ProfileCard = styled.div`
  width: 100%;
  min-height: 200px;
  margin: auto;
  margin-top: 100px;
  box-shadow: 5px 5px 10px #dfdfdf, -5px -5px 10px #fbfbfb;
  border-radius: 12px;
  max-width: 500px;
  position: relative;
  background: #ededed;
`;
const ProfileImageContainer = styled.div`
  width: 150px;
  height: 150px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 4;
  background: linear-gradient(145deg, #fefefe, #d5d5d5);
  box-shadow: 8px 8px 16px #d3d3d3, -8px -8px 16px #ffffff;
  /* box-shadow: 5px 5px 10px #dfdfdf, -5px -5px 10px #fbfbfb; */
`;
const ProfileButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin: auto;
  text-align: center;
  padding: 20px 20px 0 20px;
  padding-bottom: 40px;
  transition: all 0.3s;
  @media (max-width: 900px) {
    flex-direction: column;
    width: 90%;
  }
`;
const ProfileImage = styled.img`
  display: block;
  width: 90%;
  height: 90%;
  margin: auto;
  object-fit: cover;
  border-radius: 50%;
`;
const ProfileName = styled.h3`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 15px;
`;
const ProfileAdresse = styled.p`
  max-width: 200px;
  text-align: center;
  color: #999;
  margin-bottom: 15px;
`;
const ProfileEmail = styled.h4`
  font-size: 18px;
  font-weight: 500;
  color: #999;
  margin-bottom: 15px;
`;
const ProfileCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 20px;
  padding-bottom: 40px;
  transition: all 0.3s;
`;
const ProfileLink = styled.a`
  background: #ededed;
  box-shadow: 5px 5px 10px #dfdfdf, -5px -5px 10px #fbfbfb;
  border-radius: 50px;
  text-decoration: none;
  color: #333;
  font-size: 16px;
  padding: 12px 25px;
  bottom: 30px;
  letter-spacing: 1px;
  transition: all 0.5s;
  @media (max-width: 900px) {
    width: 90%;
    margin-bottom: 10px;
    text-align: center;
  }
`;

export default Profile;
