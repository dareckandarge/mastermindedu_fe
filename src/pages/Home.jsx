import {Navbar} from '../components/Navbar'
import { Footer } from '../components/Footer'
import {Profile} from '../components/Profile'
//import {profileImg} from '../profile_pic1.PNG'

export function Home() {
    return (
        <>
        <Navbar/>
        <section className="hero-section">
            <h2>Language Mentors Whenever You Need</h2>
            <p>Your go-to resource for linguistic support in classrooms.</p>
        </section>

        <section className="main-content">
            <p>
                MasterMinds, founded by an inner-city public school teacher, is dedicated to offering educators an easy way to book linguistically diverse mentors for classroom visits through an expedited process. Our mission is to alleviate the additional stress and workload on teachers, ensuring seamless support for booking subject experts from math to SEL.
            </p>
        </section>

        <section className="profiles-section">
            <h2>Meet Our Mentors</h2>
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
        </section>
        <Footer/>
        </>
    )
}