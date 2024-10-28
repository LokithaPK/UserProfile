import React from 'react';
import UserProfile from './UserProfile'; 

function App() {
  const user = {
    name: 'Lokitha PK',
    email: 'lokitha181@example.com',
    place:'Perundurai,Erode',
    bio: 'A passionate developer who specializes in full-stack web development, with a keen interest in creating user-friendly and visually appealing applications.',
    profileImage: `${process.env.PUBLIC_URL}/us.png`, 
    skills: ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML'],
    social: {
      github: 'https://github.com/LokithaPK',
      linkedin: 'https://www.linkedin.com/in/lokitha-kandasamy-136568259/',
      leetcode: 'https://leetcode.com/u/LOKITHA_PK/',  
    },
  };

  return (
    <div>
      <UserProfile 
        name={user.name}
        email={user.email}
        place={user.place}
        bio={user.bio}
        profileImage={user.profileImage}
        skills={user.skills}
        social={user.social}
      />
    </div>
  );
}

export default App;
