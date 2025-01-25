import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaLink,
} from "react-icons/fa";

const CreateProfile = () => {
  const [avatarPreview, setAvatarPreview] = useState(null);

  // Handle avatar file change
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result); // Set the image preview
      };
      reader.readAsDataURL(file);
    }
  };
//   bg-gradient-to-r from-gray-800 via-gray-900 to-black

  return (
    <div className="min-h-screen mt-4  text-gray-50 flex justify-center items-center">
      <div className="w-full max-w-4xl p-6 bg-gray-800 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center text-purple-500 mb-8">
          Create Your Profile
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Personal Details Section */}
          <div>
            <div className="flex flex-col gap-4 mb-6">
              <label className="font-semibold">Avatar</label>
              <div className="flex items-center gap-6">
                {/* Avatar Preview */}
                <div className="w-32 h-32 rounded-full flex justify-center items-center overflow-hidden border-4 border-purple-500 shadow-lg">
                  {avatarPreview ? (
                    <img
                      src={avatarPreview}
                      alt="Avatar Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex justify-center items-center bg-gray-700 text-gray-400">
                      No Avatar
                    </div>
                  )}
                </div>

                {/* Upload Button */}
                <label className="cursor-pointer bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full shadow-md transition duration-300">
                  Upload
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleAvatarChange}
                  />
                </label>
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Personal Details</h2>
            <div className="space-y-4">
              {/* Name */}
              <div className="flex items-center gap-4">
                <label className="w-32">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-gray-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                />
              </div>

              {/* Role */}
              <div className="flex items-center gap-4">
                <label className="w-32">Role</label>
                <input
                  type="text"
                  placeholder="Your current role (e.g., Developer)"
                  className="w-full bg-gray-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                />
              </div>

              {/* Experience */}
              <div className="flex items-center gap-4">
  <label className="w-32">Experience</label>
  <input
    type="text"  // We will keep this as text to manually control the input
    placeholder="Years of experience"
    onInput={(e) => {
      e.target.value = e.target.value.replace(/[^0-9]/g, '');  // Regex to remove non-numeric characters
    }}
    className="w-full bg-gray-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
  />
</div>

            </div>
          </div>

          {/* Social Links Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Social Links</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FaGithub className="text-purple-500 text-2xl" />
                <input
                  type="text"
                  placeholder="GitHub Profile URL"
                  className="w-full bg-gray-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
                />
              </div>

              <div className="flex items-center gap-4">
                <FaLinkedin className="text-blue-500 text-2xl" />
                <input
                  type="text"
                  placeholder="LinkedIn Profile URL"
                  className="w-full bg-gray-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                />
              </div>

              <div className="flex items-center gap-4">
                <FaInstagram className="text-pink-500 text-2xl" />
                <input
                  type="text"
                  placeholder="Instagram Profile URL"
                  className="w-full bg-gray-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 transition duration-300"
                />
              </div>

              <div className="flex items-center gap-4">
                <FaFacebook className="text-blue-600 text-2xl" />
                <input
                  type="text"
                  placeholder="Facebook Profile URL"
                  className="w-full bg-gray-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 transition duration-300"
                />
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-red-500 text-2xl" />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-gray-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
                />
              </div>

              <div className="flex items-center gap-4">
                <FaLink className="text-green-500 text-2xl" />
                <input
                  type="text"
                  placeholder="Portfolio URL"
                  className="w-full bg-gray-700 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
                />
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="col-span-2">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <textarea
              placeholder="List your skills (e.g., JavaScript, React, Node.js)"
              className="w-full bg-gray-700 p-4 rounded h-40 focus:outline-none focus:ring-2 focus:ring-purple-500 transition duration-300"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 text-center">
          <button className=" bg-purple-500  hover:bg-purple-600 text-white px-6 py-2 rounded-full shadow-lg transition duration-300">
            Save Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
