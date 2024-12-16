import React, { useState } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { DropdownFilter } from "../components/DropdownFilter";
import { Profile } from "../components/Profile";
import '../App.css'

const mentors = [
  { name: "Amy Henson", language: "English", location: "New York, NY", experience: "1-3 years", img: "\\AmyLi.png" },
    { name: "Ahmed Raza", language: "Spanish", location: "San Francisco, CA", experience: "4-6 years", img: "\\AhmedRaza.png" },
    { name: "Ayesha Khan", language: "French", location: "Austin, TX", experience: "7+ years", img: "\\AyeshaKhan.png" },
    { name: "Isabella Cruz", language: "English", location: "New York, NY", experience: "1-3 years", img: "\\IsabellaCruz.png" },
    { name: "Kevin Wong", language: "Spanish", location: "San Francisco, CA", experience: "4-6 years", img: "\\KevinWong.png" },
    { name: "Mei-Lin Chan", language: "French", location: "Austin, TX", experience: "7+ years", img: "\\Mei-LinChan.png" },
    { name: "Alejandro Morales", language: "English", location: "New York, NY", experience: "1-3 years", img: "\\AlejandroMorales.png" },
    { name: "Sofia Reyes", language: "Spanish", location: "San Francisco, CA", experience: "4-6 years", img: "\\SofiaReyes.png" },
];

export function Mentors() {
  const [filteredMentors, setFilteredMentors] = useState(mentors);

  const filterConfig = [
    { key: "language", label: "Language", options: ["English", "Spanish", "French", "German"] },
    { key: "location", label: "Location", options: ["New York, NY", "San Francisco, CA", "Austin, TX"] },
    { key: "experience", label: "Work Experience", options: ["1-3 years", "4-6 years", "7+ years"] },
  ];

  const handleFilterChange = (filters) => {
    const { language, location, experience } = filters; // should we filter by experience
    const filtered = mentors.filter((mentor) => {
      return (
        (!language || mentor.language === language) &&
        (!location || mentor.location === location) &&
        (!experience || mentor.experience === experience)
      );
    });
    setFilteredMentors(filtered);
  };

  return (
    <div>
      <Navbar/>
      <DropdownFilter filters={filterConfig} onFilterChange={handleFilterChange} />
      <div className="mentor-list">
        {filteredMentors.length > 0 ? (
          filteredMentors.map((mentor, index) => (
            <div key={index} className="mentor-card">
                <Profile 
                    image={mentor.img}
                    name={mentor.name}
                    title="Special Education Teacher"
                    organization="The Anderson School"
                    languages={mentor.language}
                    location={mentor.location}
                    availability="3 sessions available"
                />
            </div>
          ))
        ) : (
          <p>No mentors match the selected criteria.</p>
        )}
      </div>
      <Footer/>
    </div>
  );
}