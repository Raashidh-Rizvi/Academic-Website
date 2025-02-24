import React, { useRef } from 'react';
import './About.css';

import DescCard from '../../components/descCard/DescCard.jsx';
import AchCard from '../../components/achCard/AchCard.jsx';
import HistCard from '../../components/histCard/HistCard.jsx';
import MemberCard from '../../components/memberCard/MemberCard.jsx';

import PieChartIcon from '@mui/icons-material/PieChart';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import BoltIcon from '@mui/icons-material/Bolt';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import pic1 from '../../assets/members/pic1.jpg';
import pic2 from '../../assets/members/pic2.jpg';
import pic3 from '../../assets/members/pic3.jpg';
import pic4 from '../../assets/members/pic4.jpg';
import pic5 from '../../assets/members/pic5.jpg';
import pic6 from '../../assets/members/pic6.jpg';
import pic7 from '../../assets/members/pic7.jpg';
import pic8 from '../../assets/members/pic8.jpg';

const About = () => {

    const scrollByRef= useRef();

    const scrollLeft= ()=>{
        const containerWidth = scrollByRef.current.offsetWidth;
        scrollByRef.current.scrollBy({
            top:0,
            left: -containerWidth * 1,
            behavior: "smooth"
        });
    }

    const scrollRight = () => {
        const containerWidth = scrollByRef.current.offsetWidth;
        scrollByRef.current.scrollBy({
          top: 0,
          left: containerWidth * 1,
          behavior: "smooth",
        });
    };

  return (
    <div className='about-wrapper' id='about-home'>
        <div className="about-top">
            <div className="about-top-left">
                <p>Overview</p>
                <h2>Welcome to Academia</h2>
            </div>
            <div className="about-top-right">
                <p>
                    A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners.
                    With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for
                    a lifelong love of learning. Our holistic approach fosters
                    intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential.
                </p>
            </div>
        </div>
        <div className="about-mv"  id='about-mv'>
            <DescCard props={{
            tag:'Mission & Visions',
            heading:'Our Mission & Visions',
            desc:"We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth."
            }}/>
            <ul>
                <li>
                    <h3>Mission </h3>
                    <p>At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident,
                        compassionate, and creative individuals. We strive to create a safe and inclusive space where children
                        thrive academically, socially, and emotionally, setting the stage for a successful educational journey.</p>
                </li>

                <li>
                    <h3>Vision</h3>
                    <p>Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover,
                        and express their unique talents. We aim to foster a
                        generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.</p>
                </li>
            </ul>
        </div>

        {/* achievements */}
        <div className="about-ach"  id='about-ach'>
            <DescCard props={{
                tag:'Our Achievements',
                heading:'Our Awards and Recognitions',
                desc:"Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."
            }}/>
            <div className="ach-cards" ref={scrollByRef}>
                <AchCard props={{
                    title:'Outstanding Early Childhood Education Awar',
                    para:"Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment."
                }}>
                    <PieChartIcon />
                </AchCard>

                <AchCard props={{
                    title:'Innovative STEAM Education Award',
                    para:"Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners."
                }}>
                    <SignalCellularAltIcon />
                </AchCard>

                <AchCard props={{
                    title:'Environmental Stewardship Award',
                    para:"Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students."
                }}>
                    <BoltIcon />
                </AchCard>

                <AchCard props={{
                    title:'Outstanding Early Childhood Education Awar',
                    para:"Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment."
                }}>
                    <PieChartIcon />
                </AchCard>

                <AchCard props={{
                    title:'Innovative STEAM Education Award',
                    para:"Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners."
                }}>
                    <SignalCellularAltIcon />
                </AchCard>

                <AchCard props={{
                    title:'Environmental Stewardship Award',
                    para:"Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students."
                }}>
                    <BoltIcon />
                </AchCard>

            </div>
            <div className="about-bottom-info" >
                <h5>8 More Awards</h5>
                <div className="about-btn">
                    <ChevronLeftIcon className='about-btn-left' onClick={()=>{scrollLeft()}}/>
                    <ChevronRightIcon className='about-btn-right' onClick={()=>{scrollRight()}}/>
                </div>
            </div>
        </div>

        {/* History */}
        <div className="about-history"  id='about-history'>
            <DescCard props={{
                tag:"Our Progressive Journey",
                heading:"Our History",
                desc:"Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment"
            }}/>

            <div className="hist-cards">
                <HistCard props={{
                year: 2023,
                title:"Resilience and Future Horizons",
                para:"Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow."
                }} />

                <HistCard props={{
                year: 2017,
                title:"Innovation and Technology",
                para:"Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students."
                }} />

                <HistCard props={{
                year: 2012,
                title:"Expansion and Recognition",
                para:"These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies."
                }} />

                <HistCard props={{
                year: 2005,
                title:"Inception and Growth",
                para:"Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth."
                }} />

            </div>
        </div>

        <div className="about-members"  id='about-members'>
            <DescCard props={{
                tag:"Our Teachers With Experties",
                title:"Our Team Members",
                desc:"At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning."
            }}/>

            <div className="member-cards">
                <MemberCard props={{
                img:pic1,
                name:"Ms. Sarah Anderson",
                title:"Qualification:Bachelor's Degree in Early Childhood Education",
                para:"Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn."
                }} />

                <MemberCard props={{
                img:pic2,
                name:"Mr. David Roberts",
                title:"Qualification: Master's Degree in Elementary Education",
                para:"With a strong background in elementary education, Mr. David brings a creative and interactive teaching style to his classroom. His enthusiasm for learning inspires students to ask questions and think critically."
                }} />

                <MemberCard props={{
                img:pic2,
                name:"Ms. Emily Hernandez",
                title:"Qualification: Diploma in Child Psychology",
                para:"Ms. Emily's expertise in child psychology enables her to understand each child's unique needs and provide individualized support. Her caring nature fosters a strong sense of belonging and confidence in her students."
                }} />
                <MemberCard props={{
                img:pic2,
                name:"Mr. Michael Turner",
                title:"Qualification: Bachelor's Degree in Physical Education",
                para:"Mr. Michael's passion for physical fitness and sports shines through in his energetic classes. He encourages students to stay active, promoting teamwork and a healthy lifestyle."
                }} />
                <MemberCard props={{
                img:pic2,
                name:"Ms. Jessica Lee",
                title:"Qualification: Master's Degree in Special Education",
                para:"Ms. Jessica's specialization in special education allows her to create an inclusive and supportive learning environment for all students. She is dedicated to helping every child reach their full potential."
                }} />
                <MemberCard props={{
                img:pic2,
                name:"Mr. William Parker",
                title:"Qualification: Bachelor's Degree in Fine Arts",
                para:"Mr. William's background in fine arts brings creativity and imagination to his classroom. Through art projects and activities, he nurtures the artistic expression and self-confidence of his students."
                }} />


            </div>
        </div>

    </div>
  )
}

export default About
