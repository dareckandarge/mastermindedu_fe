import {Navbar} from '../components/Navbar'
import { Footer } from '../components/Footer'
import {Profile} from '../components/Profile'
import { Link } from 'react-router-dom';
import { InfoCard } from '../components/InfoCard'
import '../App.css';
import '../styling/infoCard.css'
import '../styling/homePageButtons.css'
//import {profileImg} from '../profile_pic1.PNG'

export function Home() {
    return (
        <>
        <Navbar/>

        <section className="hero-section">
            <h2>Language Mentors Whenever You Need</h2>
            <p>Your go-to resource for linguistic support in classrooms.</p>
        </section>
        <biv style={{paddingTop: "100%"}}></biv>
        <section className="main-content">
            <p>
                MasterMinds, founded by an inner-city public school teacher, is dedicated to offering educators an easy way to book linguistically diverse mentors for classroom visits through an expedited process. Our mission is to alleviate the additional stress and workload on teachers, ensuring seamless support for booking subject experts from math to SEL.
            </p>
        </section>

        <section className="profiles-section">
            <h2>Our Mentors</h2>
            <div className="profiles-container">
                <Profile 
                    image="img goes here"
                    name="Amy Hensen"
                    title="Special Education Teacher"
                    organization="The Anderson School"
                    languages="English, Spanish"
                    location="New York City, NY"
                    availability="3 sessions available"
                />
            </div>
            <Link to="/mentors">
                <button className="home-page-button">Meet More Mentors</button>
            </Link>
        </section>

        <section className="howItWorks-section">
            <h2>How Does Mentorship Work?</h2>
            <div className="info-card-container">
                <InfoCard 
                    image="some icon"
                    description="1. Teachers go on MasterMinds to find a bilingual mentor who would resonate with their students"
                />
                <InfoCard 
                    image="some icon2"
                    description="2. Teachers book bilingual mentors based on their availability and subject matter"
                />
                <InfoCard 
                    image="some icon3"
                    description="3. Approved mentors visit classrooms virtually or in-person and connect with their students"
                />
            </div>
        </section>

        <section className="mentorship-sections">
            {/* Section 1: Image Left, Text Right */}
            <div className="mentorship-section">
                <img
                src="path/to/image1.jpg"
                alt="Child and mentor interaction"
                className="mentorship-image"
                />
                <div className="mentorship-text">
                <h2>Inspire students to explore new opportunities</h2>
                <p>
                    We're an evidence-based mentorship program designed to support teachers
                    in fostering inclusive learning environments that promote language
                    development and academic success for newcomer students.
                </p>
                </div>
            </div>

            {/* Section 2: Text Left, Image Right */}
            <div className="mentorship-section-reverse">
                <div className="mentorship-text">
                <h2>Connect with language mentors; enriching classroom experience</h2>
                <p>
                    MasterMinds connects teachers with linguistically diverse language mentors 
                    to enhance communication with English Learner students and improve daily interactions
                </p>
                </div>
                <img
                src="../../public/homeImgMain3.png"
                alt="Teacher working with students"
                className="mentorship-image"
                />
            </div>
        </section>

        <section className="main-content">
            <p>
                We are driven by the belief that every student deserves access to a high-quality education. We understand that seeing is believing.
            </p>
            <Link to="/signup">
                <button className="home-page-button">Sign Up TODAY</button>
            </Link>
        </section>
        <Footer/>
        </>
    )
}