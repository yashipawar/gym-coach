import React, { useState, useEffect } from 'react';
import { useExerciseContext } from './ExerciseContext';

const AssignTemplate = () => {
  const { assignTemplate, templates, assignments } = useExerciseContext(); 
  const [userId, setUserId] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [statusMessageType, setStatusMessageType] = useState('info');

  useEffect(() => {
    // This effect could be used for real-time feedback or other purposes.
  }, [assignments]);

  const handleAssignTemplate = () => {
    if (userId.trim() && selectedTemplate) {
      assignTemplate(userId.trim(), selectedTemplate);
      console.log(`Assigning template to userId: ${userId}`);
      console.log("Assignments after assigning template:", assignments);
      setStatusMessageType('success');
      setStatusMessage(`Template "${selectedTemplate}" successfully assigned to user ID ${userId}.`);
      setUserId('');
      setSelectedTemplate('');
    } else {
      setStatusMessageType('error');
      setStatusMessage('Please select a user and a template to assign.');
    }
  };

  useEffect(() => {
    setStatusMessage('');
  }, [userId, selectedTemplate]);

  return (
      <div className="p-4 shadow-lg rounded-lg bg-slate-200 mt-4 text-black">
          <h2 className="text-lg md:text-xl font-bold mb-4 text-green-500">Assign Template to User</h2>
          {statusMessage && <div className={`mb-4 text-center ${statusMessageType === 'error' ? 'text-red-500' : 'text-green-500'}`}>{statusMessage}</div>}
          <div>
              <label htmlFor="userId" className="block mb-2 text-sm md:text-base">User ID</label>
              <input
                  id="userId"
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="border border-gray-300 focus:ring-opacity-50 bg-transparent rounded-lg p-2 w-full mb-4 text-sm md:text-base"
              />
              <label htmlFor="templateSelect" className="block mb-2 text-sm md:text-base">Select Template</label>
              <select
                  id="templateSelect"
                  value={selectedTemplate}
                  onChange={(e) => setSelectedTemplate(e.target.value)}
                  className="border border-gray-300 bg-transparent focus:ring-opacity-50 rounded-lg p-2 w-full mb-4 text-sm md:text-base text-gray-400"
              >
                  <option value="">Select a template...</option>
                  {Object.keys(templates).map((templateName) => (
                      <option key={templateName} value={templateName}>
                          {templateName}
                      </option>
                  ))}
              </select>
              <button
                  onClick={handleAssignTemplate}
                  className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-sm md:text-base"
              >
                  Assign Template
              </button>
          </div>
      </div>
  );
};

export default AssignTemplate;
