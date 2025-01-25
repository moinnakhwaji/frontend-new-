import React from "react";

const Profile = () => {
  return (
    <div className="container mx-auto p-4 bg-gray-900">
      {/* Breadcrumb */}
      <nav className="text-sm mb-4">
        <ol className="flex space-x-2 text-gray-400">
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

      <div className="grid md:grid-cols-3 gap-4">
        {/* Profile Card */}
        <div className="col-span-1">
          <div className="bg-gray-800 rounded-lg shadow-md p-4">
            <div className="flex flex-col items-center text-center">
              <img
                src="https://bootdey.com/img/Content/avatar/avatar7.png"
                alt="Admin"
                className="rounded-full w-36"
              />
              <div className="mt-3">
                <h4 className="text-xl font-semibold text-white">John Doe</h4>
                <p className="text-gray-400">Full Stack Developer</p>
                <p className="text-gray-500 text-sm">Bay Area, San Francisco, CA</p>
               
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gray-800 rounded-lg shadow-md mt-4 p-4">
            <ul className="divide-y divide-gray-700">
              <li className="flex justify-between py-2">
                <span className="text-gray-200 font-medium">Website</span>
                <span className="text-gray-400">https://bootdey.com</span>
              </li>
              <li className="flex justify-between py-2">
                <span className="text-gray-200 font-medium">Github</span>
                <span className="text-gray-400">bootdey</span>
              </li>
              <li className="flex justify-between py-2">
                <span className="text-gray-200 font-medium">Twitter</span>
                <span className="text-gray-400">@bootdey</span>
              </li>
              <li className="flex justify-between py-2">
                <span className="text-gray-200 font-medium">Instagram</span>
                <span className="text-gray-400">bootdey</span>
              </li>
              <li className="flex justify-between py-2">
                <span className="text-gray-200 font-medium">Facebook</span>
                <span className="text-gray-400">bootdey</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Profile Details */}
        <div className="col-span-2">
          <div className="bg-gray-800 rounded-lg shadow-md p-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h6 className="font-medium text-gray-200">Full Name</h6>
              </div>
              <div className="col-span-2 text-gray-400">Kenneth Valdez</div>
            </div>
            <hr className="my-3 border-gray-700" />
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h6 className="font-medium text-gray-200">Email</h6>
              </div>
              <div className="col-span-2 text-gray-400">kenneth@example.com</div>
            </div>
            {/* Add additional rows as needed */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="card h-full border rounded-2xl shadow-lg p-4 bg-gray-700">
                <div className="card-body">
                  <h6 className="flex items-center mb-3 text-lg font-semibold text-gray-200">
                    <i className="material-icons text-blue-400 mr-2">assignment</i>
                    Project Status
                  </h6>
                  <div>
                    <div className="mb-3">
                      <small className="block text-gray-400">Web Design</small>
                      <div className="relative w-full bg-gray-600 rounded-full h-2">
                        <div
                          className="absolute h-2 bg-blue-500 rounded-full"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <small className="block text-gray-400">Website Markup</small>
                      <div className="relative w-full bg-gray-600 rounded-full h-2">
                        <div
                          className="absolute h-2 bg-blue-500 rounded-full"
                          style={{ width: "72%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <small className="block text-gray-400">One Page</small>
                      <div className="relative w-full bg-gray-600 rounded-full h-2">
                        <div
                          className="absolute h-2 bg-blue-500 rounded-full"
                          style={{ width: "89%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <small className="block text-gray-400">Mobile Template</small>
                      <div className="relative w-full bg-gray-600 rounded-full h-2">
                        <div
                          className="absolute h-2 bg-blue-500 rounded-full"
                          style={{ width: "55%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <small className="block text-gray-400">Backend API</small>
                      <div className="relative w-full bg-gray-600 rounded-full h-2">
                        <div
                          className="absolute h-2 bg-blue-500 rounded-full"
                          style={{ width: "66%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card h-full border rounded-2xl shadow-lg p-4 bg-gray-700">
                <div className="card-body">
                  <h6 className="flex items-center mb-3 text-lg font-semibold text-gray-200">
                    <i className="material-icons text-blue-400 mr-2">assignment</i>
                    Project Status
                  </h6>
                  <div>
                    <div className="mb-3">
                      <small className="block text-gray-400">Web Design</small>
                      <div className="relative w-full bg-gray-600 rounded-full h-2">
                        <div
                          className="absolute h-2 bg-blue-500 rounded-full"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <small className="block text-gray-400">Website Markup</small>
                      <div className="relative w-full bg-gray-600 rounded-full h-2">
                        <div
                          className="absolute h-2 bg-blue-500 rounded-full"
                          style={{ width: "72%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <small className="block text-gray-400">One Page</small>
                      <div className="relative w-full bg-gray-600 rounded-full h-2">
                        <div
                          className="absolute h-2 bg-blue-500 rounded-full"
                          style={{ width: "89%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="mb-3">
                      <small className="block text-gray-400">Mobile Template</small>
                      <div className="relative w-full bg-gray-600 rounded-full h-2">
                        <div
                          className="absolute h-2 bg-blue-500 rounded-full"
                          style={{ width: "55%" }}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <small className="block text-gray-400">Backend API</small>
                      <div className="relative w-full bg-gray-600 rounded-full h-2">
                        <div
                          className="absolute h-2 bg-blue-500 rounded-full"
                          style={{ width: "66%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
