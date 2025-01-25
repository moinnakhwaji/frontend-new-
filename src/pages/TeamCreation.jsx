import { useState } from 'react';

const TeamForm = () => {
  const [teamType, setTeamType] = useState('public');
  const [roomName, setRoomName] = useState('');
  const [projectIdea, setProjectIdea] = useState('');
  const [vacancies, setVacancies] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
    console.log({ teamType, roomName, projectIdea, vacancies });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#1f1e24]">
      <div className="w-full max-w-lg bg-[#1f1e24] shadow-xl rounded-2xl">
        <div className="p-6">
          <h2 className="text-2xl font-semibold text-gray-50 mb-4">Create a Team</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Team Type Dropdown */}
            <div>
              <label className="block text-gray-50 text-sm font-medium mb-2">Team Type</label>
              <select
                value={teamType}
                onChange={(e) => setTeamType(e.target.value)}
                className="w-full px-3 py-2 bg-[#1f1e24] text-gray-50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#6556cd] focus:outline-none"
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
              </select>
            </div>

            {/* Room Name Input */}
            <div>
              <label className="block text-gray-50 text-sm font-medium mb-2">Room Name</label>
              <input
                type="text"
                value={roomName}
                onChange={(e) => setRoomName(e.target.value)}
                placeholder="Enter room name"
                className="w-full px-3 py-2 bg-[#1f1e24] text-gray-50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#6556cd] focus:outline-none"
              />
            </div>

            {/* Project Idea Textarea */}
            <div>
              <label className="block text-gray-50 text-sm font-medium mb-2">Project Idea</label>
              <textarea
                value={projectIdea}
                onChange={(e) => setProjectIdea(e.target.value)}
                placeholder="Why are you creating this team?"
                className="w-full px-3 py-2 bg-[#1f1e24] text-gray-50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#6556cd] focus:outline-none"
              />
            </div>

            {/* Vacancies Input */}
            <div>
              <label className="block text-gray-50 text-sm font-medium mb-2">Vacancies</label>
              <input
                type="number"
                value={vacancies}
                onChange={(e) => setVacancies(e.target.value)}
                placeholder="Number of members needed"
                className="w-full px-3 py-2 bg-[#1f1e24] text-gray-50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#6556cd] focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#6556cd] text-gray-50 hover:bg-purple-600 rounded-lg py-2 font-medium shadow-lg focus:ring-2 focus:ring-purple-700"
            >
              Create Team
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeamForm;
