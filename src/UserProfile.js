import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const ProfileContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  width: 80%;
  max-width: 800px;
`;

const ProfileImage = styled.img`
  border-radius: 20%;
  width: 200px;
  height: 250px;
  object-fit: cover;
  border: 3px solid #fff;
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`;

const Email = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const Place = styled.p`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const Bio = styled.p`
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const SkillsContainer = styled.div`
  margin-bottom: 2rem;
`;

const Skill = styled.span`
  background-color: #ff7f50;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  margin: 0.5rem;
  display: inline-block;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const IconLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: color 0.3s;

  &:hover {
    color: #ff7f50;
  }
`;


const LeetCodeIcon = () => (
  <svg 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-.25 14.83c-1.8 0-3.26-1.46-3.26-3.26 0-1.8 1.46-3.26 3.26-3.26 1.8 0 3.26 1.46 3.26 3.26 0 1.8-1.46 3.26-3.26 3.26z" 
      fill="#FFA116"
    />
  </svg>
);

const UserProfile = ({ name, email,place, bio, profileImage, skills, social }) => {
  return (
    <PageContainer>
      <ProfileContainer>
        <ProfileImage src={profileImage} alt={`${name}'s profile`} />
        <Name>{name}</Name>
        <Email>{email}</Email>
        <Place>{place}</Place>
        <Bio>{bio}</Bio>

        <SkillsContainer>
          {skills.map((skill, index) => (
            <Skill key={index}>{skill}</Skill>
          ))}
        </SkillsContainer>

        <SocialLinks>
          <IconLink href={social.github} target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </IconLink>
          <IconLink href={social.linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </IconLink>
          <IconLink href={social.leetcode} target="_blank" rel="noopener noreferrer">
            <LeetCodeIcon />
          </IconLink>
        </SocialLinks>
      </ProfileContainer>
    </PageContainer>
  );
};

export default UserProfile;
