import React, { useState } from 'react';
import './Academics.css';

import DescCard from '../../components/descCard/DescCard';
import HomeCard from '../../components/homeCard/HomeCard';
import LearnCard from '../../components/learnCard/LearnCard';
import GalleryCard from '../../components/galleryCard/GalleryCard';

import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import ExtensionIcon from '@mui/icons-material/Extension';
import BrushIcon from '@mui/icons-material/Brush';
import LightModeIcon from '@mui/icons-material/LightMode';
import StarIcon from '@mui/icons-material/Star';

import pic1 from '../../assets/learning/pic1 (1).jpg';
import pic2 from '../../assets/learning/pic1 (2).jpg';
import pic3 from '../../assets/learning/pic1 (3).jpg';
import pic4 from '../../assets/learning/pic1 (4).jpg';
import pic5 from '../../assets/learning/pic1 (5).jpg';
import pic6 from '../../assets/learning/pic1 (6).jpg';

import cl1 from '../../assets/gallery/classroom/pic1.jpg';
import cl2 from '../../assets/gallery/classroom/pic2.jpg';
import cl3 from '../../assets/gallery/classroom/pic3.jpg';
import cl4 from '../../assets/gallery/classroom/pic4.jpg';

import lb1 from '../../assets/gallery/library/pic1.jpg';
import lb2 from '../../assets/gallery/library/pic2.jpg';
import lb3 from '../../assets/gallery/library/pic3.jpg';
import lb4 from '../../assets/gallery/library/pic4.jpg';

import sl1 from '../../assets/gallery/scienceLab/pic1.jpg';
import sl2 from '../../assets/gallery/scienceLab/pic2.jpg';
import sl3 from '../../assets/gallery/scienceLab/pic3.jpg';
import sl4 from '../../assets/gallery/scienceLab/pic4.jpg';

import cp1 from '../../assets/gallery/computerLab/pic1.jpg';
import cp2 from '../../assets/gallery/computerLab/pic2.jpg';
import cp3 from '../../assets/gallery/computerLab/pic3.jpg';
import cp4 from '../../assets/gallery/computerLab/pic4.jpg';

import nr1 from '../../assets/gallery/Nature/pic1.jpg';
import nr2 from '../../assets/gallery/Nature/pic2.jpg';
import nr3 from '../../assets/gallery/Nature/pic3.jpg';
import nr4 from '../../assets/gallery/Nature/pic4.jpg';

const Academics = () => {

    const [state,setState] = useState({
        classroom:true,
        sciencelab:true,
        computerlab:true,
        library:true,
        nature:true
    })


    const handleClick = (value,key,key1,key2,key3,key4) => {
        if(value){
            setState(state => ({
                ...state,
                [key]: true,
                [key1]:true,
                [key2]:true,
                [key3]:true,
                [key4]:true
            }));
        }else{
            setState(state => ({
                ...state,
                [key]: true,
                [key1]:false,
                [key2]:false,
                [key3]:false,
                [key4]:false
            }));
        }
    };

  return (
    <div className='academics-wrapper'>
        <div className="academics-top">
            <div className="academics-top-left">
                <p>Academics</p>
                <h2>Nurturing Young Minds for Success</h2>
            </div>
            <div className="academics-top-right">
                <p>
                    Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child.
                    Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation
                    of essential skills and knowledge. From language arts and mathematics to science and social studies,
                    our curriculum is carefully crafted to spark curiosity and encourage active exploration.
                </p>
            </div>
        </div>

        {/* academics features */}
        <div className="academics-features" id='academics-sf'>
            <DescCard props={{
                tag:"Our Features",
                heading:"Our Special Features",
                desc:"Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!"
            }} />

            <div className="feature-cards">
                <HomeCard props={{
                    title:"Thematic Learning",
                    para:"Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant."
                }}>
                    <AutoStoriesIcon />
                </HomeCard>
                <HomeCard props={{
                    title:"STEAM Education",
                    para:"We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills."
                }}>
                    <SignalCellularAltIcon />
                </HomeCard>
                <HomeCard props={{
                    title:"Language Immersion",
                    para:"Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness."
                }}>
                    <ExtensionIcon />
                </HomeCard>
                <HomeCard props={{
                    title:"Art and Creativity",
                    para:"Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms."
                }}>
                    <BrushIcon />
                </HomeCard>
                <HomeCard props={{
                    title:"Outdoor Education",
                    para:"Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment."
                }}>
                    <LightModeIcon />
                </HomeCard>
                <HomeCard props={{
                    title:"Play-Based Learning",
                    para:"Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking."
                }}>
                    <StarIcon />
                </HomeCard>

            </div>

        </div>

        <div className="academics-learn">
            <DescCard props={{
                tag:"Our Features",
                heading:"What Students Learn",
                desc:"At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include"
            }} />

            <div className="learn-cards">
                <LearnCard props={{
                    img:pic1,
                    title:"Language Arts",
                    desc:"Reading, writing, storytelling, and communication skills."
                }} />
                <LearnCard props={{
                    img:pic2,
                    title:"Mathematics",
                    desc:"Number sense, basic operations, problem-solving, and logic."
                }} />
                <LearnCard props={{
                    img:pic3,
                    title:"Science",
                    desc:"Exploring the natural world through hands-on experiments and investigations."
                }} />
                <LearnCard props={{
                    img:pic4,
                    title:"Social Studies",
                    desc:"Cultivating an understanding of diverse cultures and communities."
                }} />
                <LearnCard props={{
                    img:pic5,
                    title:"Arts and Crafts",
                    desc:"Encouraging creativity through various art forms and crafts."
                }} />
                <LearnCard props={{
                    img:pic6,
                    title:"Physical Education",
                    desc:"Promoting physical fitness, coordination, and teamwork."
                }} />
            </div>
        </div>


        {/* academics gallery */}

        <div className="academics-gallery" id='academics-gallery' >
            <DescCard props={{
                tag:"Our Gallery",
                heading:"Our Rooms Gallery",
                desc:"Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school."
            }} />

            <div className="gallery-menu">
                <ul>
                    <li
                     onClick={()=>{handleClick(true,"classroom","library","sciencelab","computerlab","nature")}}>All</li>
                    <li className={state["classroom"]?"selected":""}
                        onClick={()=>{handleClick(false,"classroom","library","sciencelab","computerlab","nature")}}>Classrooms</li>
                    <li className={state["library"]?"selected":""}
                        onClick={()=>{handleClick(false,"library","classroom","sciencelab","computerlab","nature")}}>Library</li>
                    <li className={state["sciencelab"]?"selected":""}
                        onClick={()=>{handleClick(false,"sciencelab","library","classroom","computerlab","nature")}}>Science Lab</li>
                    <li className={state["computerlab"]?"selected":""}
                        onClick={()=>{handleClick(false,"computerlab","library","classroom","sciencelab","nature")}}>Computer Lab</li>
                    <li className={state["nature"]?"selected":""}
                        onClick={()=>{handleClick(false,"nature","libray","classroom","sciencelab","computerlab")}}>Garden And Nature Area</li>
                </ul>
            </div>

            <div className="gallery-cards">
                <div className={state["classroom"]?"show-gallery":"hide-gallery"}>
                    <GalleryCard props={{
                    img1:cl1,
                    img2:cl2,
                    img3:cl3,
                    img4:cl4,
                    title:"Classrooms",
                    desc:"Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement."
                    }} />
                </div>
                <div className={state["library"]?"show-gallery":"hide-gallery"}>
                    <GalleryCard props={{
                    img1:lb1,
                    img2:lb2,
                    img3:lb3,
                    img4:lb4,
                    title:"Library",
                    desc:"Our expansive library is a treasure trove of books, fostering a love for reading and supporting students' literacy development."
                    }} />
                </div>
                <div className={state["sciencelab"]?"show-gallery":"hide-gallery"}>
                    <GalleryCard props={{
                    img1:sl1,
                    img2:sl2,
                    img3:sl3,
                    img4:sl4,
                    title:"Science Lab",
                    desc:"Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way."
                    }} />
                </div>
                <div className={state["computerlab"]?"show-gallery":"hide-gallery"}>
                    <GalleryCard props={{
                    img1:cp1,
                    img2:cp2,
                    img3:cp3,
                    img4:cp4,
                    title:"Computer Lab",
                    desc:"Equipped with age-appropriate technology, the computer lab enhances students' digital literacy and computational skills"
                    }} />
                </div>
                <div className={state["nature"]?"show-gallery":"hide-gallery"}>
                    <GalleryCard props={{
                    img1:nr1,
                    img2:nr2,
                    img3:nr3,
                    img4:nr4,
                    title:"Garden and Nature Area",
                    desc:"Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment."
                    }} />
                </div>
            </div>

        </div>

    </div>
  )
}

export default Academics
