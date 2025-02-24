import React from 'react';
import './StudentLife.css';
import DescCard from '../../components/descCard/DescCard';
import HomeCard from '../../components/homeCard/HomeCard';
import EventCard from '../../components/eventCard/EventCard';

import BoltIcon from '@mui/icons-material/Bolt';
import BrushIcon from '@mui/icons-material/Brush';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import ExtensionIcon from '@mui/icons-material/Extension';
import ScienceIcon from '@mui/icons-material/Science';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

import pic1 from '../../assets/events/pic (1).jpg';
import pic2 from '../../assets/events/pic (2).jpg';
import pic3 from '../../assets/events/pic (3).jpg';
import pic4 from '../../assets/events/pic (4).jpg';
import pic5 from '../../assets/events/pic (5).jpg';
import pic6 from '../../assets/events/pic (6).jpg';

import LightbulbIcon from '@mui/icons-material/Lightbulb';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupsIcon from '@mui/icons-material/Groups';

const StudentLife = () => {
  return (
    <div className='students-life-wrapper'>
      <div className="students-life-top">
            <div className="students-life-top-left">
                <p>Enriching Student Life</p>
                <h2>Embracing Learning with Discovery and Joy</h2>
            </div>
            <div className="students-life-top-right">
                <p>
                Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and
                adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks,
                and we strive to create a holistic and
                engaging environment that nurtures every aspect of a child's development.
                </p>
            </div>
        </div>


        {/* students-activities */}
        <div className="std-activity">
          <DescCard props={{
            tag:"Our Features",
            heading:"Extracurricular Activities",
            desc:"At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore their interests and passions. We offer a wide array of extracurricular activities, including"
          }} />

          <div className="activity-cards">
            <HomeCard props={{
              title:"Sports and Athletics",
              para:"Students can participate in various sports, from soccer and basketball to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline."
            }} >
              <BoltIcon />
            </HomeCard>
            <HomeCard props={{
              title:"Art and Creativity",
              para:"Our art classes and creative workshops provide a platform for students to express their creativity through painting, drawing, and other artistic forms."
            }} >
              <BrushIcon />
            </HomeCard>
            <HomeCard props={{
              title:"Music and Performing Arts",
              para:"Students can discover their musical talents through singing, playing musical instruments, and participating in drama and theater performances."
            }} >
              <MusicNoteIcon />
            </HomeCard>
            <HomeCard props={{
              title:"Language Clubs",
              para:"Language clubs offer an opportunity for students to immerse themselves in different languages and cultures, fostering global awareness."
            }} >
              <ExtensionIcon />
            </HomeCard>
            <HomeCard props={{
              title:"Science Club",
              para:"The science club allows young scientists to explore the wonders of science through fun experiments and hands-on learning."
            }} >
              <ScienceIcon />
            </HomeCard>
            <HomeCard props={{
              title:"Cooking and Culinary Arts",
              para:"Cooking classes introduce students to the joys of preparing and tasting delicious and healthy meals."
            }} >
              <AutoAwesomeIcon />
            </HomeCard>

          </div>
        </div>

        {/* students-events */}
        <div className="std-events">
          <DescCard props={{
            tag:"Our Features",
            heading:"Events & Celebrations",
            desc:"At Little Learners Academy, we celebrate every milestone and create cherished memories for our students. Throughout the year, we host a variety of events and celebrations that bring the entire school community together. Some of our memorable events include"
          }} />

          <div className="event-cards">
            <EventCard props={{
              img:pic2,
              title:"Annual Sports Day",
              desc:"A day filled with friendly competition, team spirit, and sportsmanship."
            }} />
            <EventCard props={{
              img:pic3,
              title:"Cultural Festivals",
              desc:"Celebrations of diverse cultural festivals, promoting cultural exchange and appreciation."
            }} />
            <EventCard props={{
              img:pic4,
              title:"Art Exhibitions",
              desc:"Showcasing our students' artistic talents through exhibitions and displays."
            }} />
            <EventCard props={{
              img:pic6,
              title:"Science Fair",
              desc:"A platform for budding scientists to present their innovative projects and experiments."
            }} />
            <EventCard props={{
              img:pic5,
              title:"International Day",
              desc:"A vibrant celebration of our diverse community, embracing cultures from around the world."
            }} />
            <EventCard props={{
              img:pic1,
              title:"Graduation Ceremony",
              desc:"A significant milestone as our Kindergarten students prepare to embark on their academic journey."
            }} />
          </div>
        </div>

        {/* student support */}
        <div className="std-support">
          <DescCard props={{
            tag:"Our Features",
            heading:"Student Support",
            desc:"At Little Learners Academy, we are committed to providing a supportive and nurturing environment that meets the unique needs of each student. Our student support services include"
          }} />

          <div className="support-cards">
            <HomeCard props={{
              title:"Counseling",
              para:"Professional counselors offer guidance and support to students, addressing their emotional and social well-being."
            }} >
              <LightbulbIcon />
            </HomeCard>
            <HomeCard props={{
              title:"Learning Support",
              para:"Our educators provide additional assistance to students who may require extra support in their academic journey."
            }} >
              <MenuBookIcon />
            </HomeCard>
            <HomeCard props={{
              title:"Parent-Teacher Collaboration",
              para:"We foster a strong partnership with parents to ensure seamless communication and mutual support in a child's development."
            }} >
              <GroupsIcon />
            </HomeCard>
          </div>
        </div>

    </div>
  )
}

export default StudentLife

