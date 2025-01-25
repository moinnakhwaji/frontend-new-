import React, { useState, useEffect } from "react";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin, FaGlobe } from "react-icons/fa"; // Import icons

const Profile = () => {
  // Dummy data to simulate API response
  const [profileData, setProfileData] = useState({
    name: "John Doe",
    role: "Full Stack Developer",
    location: "Bay Area, San Francisco, CA",
    avatar: "https://bootdey.com/img/Content/avatar/avatar7.png",
    email: "john.doe@example.com",
    website: "https://johnsportfolio.com",
    facebook: "https://facebook.com/johndoe",
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    instagram: "https://instagram.com/johndoe",
    experience: "5+ years of experience in web development",
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
  });

  useEffect(() => {
    // You can replace this with an actual API call in the future
    // Example: fetchProfileData();
  }, []);

  return (
    <div className="container mx-auto p-8 bg-gradient-to-b from-gray-900 via-purple-900 to-black min-h-screen">
      {/* Breadcrumb */}
      <nav className="text-sm mb-6">
        <ol className="flex space-x-3 text-gray-300">
          <li>
            <a href="/" className="text-blue-400 hover:underline">
              Home
            </a>
          </li>
          <li>/</li>
          <li>
            <a href="#" className="text-blue-400 hover:underline">
              User
            </a>
          </li>
          <li>/</li>
          <li className="text-gray-100">User Profile</li>
        </ol>
      </nav>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="col-span-1">
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6">
            <div className="flex flex-col items-center text-center">
              <img
                src={profileData.avatar}
                alt="User Avatar"
                className="rounded-full w-48 border-4 border-purple-500 mb-4"
              />
              <div>
                <h4 className="text-2xl font-semibold text-white">{profileData.name}</h4>
                <p className="text-gray-400 text-lg">{profileData.role}</p>
                <p className="text-gray-500 text-sm">{profileData.location}</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gray-800 rounded-2xl shadow-lg mt-6 p-6">
            <ul className="space-y-4">
              <li className="flex items-center text-gray-200">
                <FaGlobe className="mr-3 text-blue-400 text-xl" />
                <span className="text-gray-400">{profileData.website}</span>
              </li>
              <li className="flex items-center text-gray-200">
                <FaGithub className="mr-3 text-blue-500 text-xl" />
                <span className="text-gray-400">{profileData.github}</span>
              </li>
              <li className="flex items-center text-gray-200">
                <FaFacebook className="mr-3 text-blue-600 text-xl" />
                <span className="text-gray-400">{profileData.facebook}</span>
              </li>
              <li className="flex items-center text-gray-200">
                <FaInstagram className="mr-3 text-pink-400 text-xl" />
                <span className="text-gray-400">{profileData.instagram}</span>
              </li>
              <li className="flex items-center text-gray-200">
                <FaLinkedin className="mr-3 text-blue-700 text-xl" />
                <span className="text-gray-400">{profileData.linkedin}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Profile Details */}
        <div className="col-span-2">
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6">
            <div className="space-y-6">
              <div className="flex justify-between">
                <h6 className="text-gray-200 text-lg font-medium">Full Name</h6>
                <p className="text-gray-400">{profileData.name}</p>
              </div>
              <div className="flex justify-between">
                <h6 className="text-gray-200 text-lg font-medium">Email</h6>
                <p className="text-gray-400">{profileData.email}</p>
              </div>
              <div className="flex justify-between">
                <h6 className="text-gray-200 text-lg font-medium">Experience</h6>
                <p className="text-gray-400">{profileData.experience}</p>
              </div>
              <div className="flex justify-between">
                <h6 className="text-gray-200 text-lg font-medium">Skills</h6>
                <p className="text-gray-400">{profileData.skills.join(", ")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
