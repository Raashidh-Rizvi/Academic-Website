import React,{useRef} from 'react';
import './Home.css';

import HomeCard from '../../components/homeCard/HomeCard';
import TestimonialCard from '../../components/testimonialCard/TestimonialCard';
import homePic from '../../assets/homePic.jpg';
import DescCard from '../../components/descCard/DescCard';
import FaqCard from '../../components/faqCard/FaqCard';

import tPic1 from '../../assets/testimonial/pic1.jpg';

import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SchoolIcon from '@mui/icons-material/School';
import MasksIcon from '@mui/icons-material/Masks';
import FlagIcon from '@mui/icons-material/Flag';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';

import {useSelector} from 'react-redux';

const Home = ({features}) => {

  return (
    <div className='home-wrapper'>

      <div className="home-top" id='home' >
        <div className="home-top-left">
          <img src={homePic} alt="" />
        </div>
        <ul className="home-top-right">
          <li><h5>Welcome to Academia</h5></li>
          <li><h2>Where Young Minds Blossom and <span>Dreams Take Flight</span></h2></li>
          <li><p>Our kinder garden school provides a nurturing and stimulating environment,
            fostering a love for learning that lasts a lifetime.
            Join us as we embark on an exciting educational journey together!</p></li>
          <li>
            <div className='second-sec'>
              <div>
                <h2>+7000</h2>
                <p>Students Passed Out</p>
              </div>
              <div>
                <h2>+37</h2>
                <p>Awards and Recognitions</p>
              </div>
              <div>
                <h2>+15</h2>
                <p>Experiance Educators</p>
              </div>
            </div>
          </li>
        </ul>
      </div>


      {/*Home Benefits */}
      <div className="home-benefits" id='features' ref={features}>
        <DescCard props={{
        tag:'Children Deserve Bright Future',
        heading:'Our Benefits',
        desc:"With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future."
        }}/>

        <div className="cards">
          <HomeCard props={{
            title:"Holistic Learning Approach",
            para:"Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education"
          }}>
            <AutoStoriesIcon className='logo' />
          </HomeCard>

          <HomeCard props={{
            title:"Experienced Educators",
            para:"Our passionate and qualified teachers create a supportive and stimulating learning environment."
          }}>
            <SchoolIcon className='logo' />
          </HomeCard>

          <HomeCard props={{
            title:"Nurturing Environment",
            para:"We prioritize safety and provide a warm and caring atmosphere for every child."
          }}>
            <MasksIcon className='logo' />
          </HomeCard>

          <HomeCard props={{
            title:"Play-Based Learning",
            para:"We believe in the power of play to foster creativity, problem-solving skills, and imagination."
          }}>
            <FlagIcon className='logo' />
          </HomeCard>

          <HomeCard props={{
            title:"Individualized Attention",
            para:"Our small class sizes enable personalized attention, catering to each child's unique needs."
          }}>
            <SportsSoccerIcon className='logo' />
          </HomeCard>

          <HomeCard props={{
            title:"Parent Involvement",
            para:"We foster a strong parent-school partnership to ensure seamless communication and collaboration."
          }}>
            <SupervisorAccountIcon className='logo' />
          </HomeCard>

        </div>
      </div>

      {/* Testimonials */}
      <div className="home-testimonials" id='testimonial' >
        <DescCard props={{
        tag:'Their Happy Words',
        heading:'Our Testimonials',
        desc:"Our testimonials are heartfelt reflections of the nurturing environment we provide,where children flourish both academically and emotionally."
        }}/>

        <div className="testimonial-cards">
          <TestimonialCard props={{
          img:tPic1,
          name:"Jennifer B",
          desc:"Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
          }}
          />

          <TestimonialCard props={{
          img:tPic1,
          name:"Jennifer B",
          desc:"Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
          }}
          />

          <TestimonialCard props={{
          img:tPic1,
          name:"Jennifer B",
          desc:"Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
          }}
          />

          <TestimonialCard props={{
          img:tPic1,
          name:"Jennifer B",
          desc:"Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
          }}
          />

          <TestimonialCard props={{
          img:tPic1,
          name:"Jennifer B",
          desc:"Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
          }}
          />
        </div>
      </div>
      <div className="home-faq" id='FAQ' >
        <DescCard props={{
          tag:"Solutions For The Doubts",
          heading:"Frequently Asked Questions",
          desc:"Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and help you make informed decisions for your child's education."
        }}/>
        <div className="faq-cards">
          <FaqCard props={{
          question:"What are the school hours at Little Learners Academy?",
          answer:"Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer extended care options for parents who need early drop-off or late pick-up."
          }}/>
          <FaqCard props={{
          question:"Is there a uniform policy for students?",
          answer:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptas tenetur rerum saepe, adipisci dignissimos reiciendis odio ab itaque totam consequuntur cum molestias assumenda, accusantium nisi? Ea magnam ducimus provident?'
          }}/>
          <FaqCard props={{
          question:"What extracurricular activities are available for students?",
          answer:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptas tenetur rerum saepe, adipisci dignissimos reiciendis odio ab itaque totam consequuntur cum molestias assumenda, accusantium nisi? Ea magnam ducimus provident?"
          }}/>
          <FaqCard props={{
          question:"What extracurricular activities are available for students?",
          answer:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptas tenetur rerum saepe, adipisci dignissimos reiciendis odio ab itaque totam consequuntur cum molestias assumenda, accusantium nisi? Ea magnam ducimus provident?"
          }}/>
          <FaqCard props={{
          question:"How do you handle food allergies and dietary restrictions?",
          answer:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptas tenetur rerum saepe, adipisci dignissimos reiciendis odio ab itaque totam consequuntur cum molestias assumenda, accusantium nisi? Ea magnam ducimus provident?"
          }}/>
          <FaqCard props={{
          question:"What is the teacher-to-student ratio at Little Learners Academy?",
          answer:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptas tenetur rerum saepe, adipisci dignissimos reiciendis odio ab itaque totam consequuntur cum molestias assumenda, accusantium nisi? Ea magnam ducimus provident?"
          }}/>
          <FaqCard props={{
          question:"How do you handle discipline and behavior management?",
          answer:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptas tenetur rerum saepe, adipisci dignissimos reiciendis odio ab itaque totam consequuntur cum molestias assumenda, accusantium nisi? Ea magnam ducimus provident?"
          }}/>
          <FaqCard props={{
          question:"How do I apply for admission to Little Learners Academy?",
          answer:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla voluptas tenetur rerum saepe, adipisci dignissimos reiciendis odio ab itaque totam consequuntur cum molestias assumenda, accusantium nisi? Ea magnam ducimus provident?"
          }}/>
        </div>
      </div>

    </div>
  )
}

export default Home
