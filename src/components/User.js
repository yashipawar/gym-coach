import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useExerciseContext } from './ExerciseContext';
import TemplateCard from './TemplateCard';
import backgroundImage from '../images/background.jpg';

const User = () => {
  const { userId } = useParams();
  const { templates, users } = useExerciseContext();
  const [userTemplates, setUserTemplates] = useState([]);
  const user = users.find((user) => user.id === userId);

  useEffect(() => {
    if (typeof templates !== 'object' || templates === null || Array.isArray(templates)) {
      console.error('Expected templates to be an object, but received:', templates);
      return;
    }

    const assignedTemplateNames = fetchAssignedTemplates(userId);
    const assignedTemplates = assignedTemplateNames.map(name => templates[name]).filter(template => template);
    setUserTemplates(assignedTemplates);
  }, [userId, templates]);

  const fetchAssignedTemplates = (userId) => {
    const assignments = JSON.parse(localStorage.getItem('userAssignments')) || {};
    return assignments[userId] || [];
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-black" 
    // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="container mb-8 bg-white bg-opacity-10 p-6 rounded-lg">
        <div className="font-bold mb-4 flex flex-wrap items-center justify-between text-white shadow-xl">
          <h1 className='text-2xl'>See your today's Exercises.</h1> 
          <h2 className='text-lg text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600'>Your ID: {userId}</h2>
        </div>
        <p className="text-lg text-white text-center mb-2 font-semibold">This is your weekly Exercise Templates from Gym Coach.</p>
        <p className="text-center text-gray-400 mb-4 font-normal">All the best!</p>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif mb-4 p-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Assigned Templates</h1>
        {userTemplates.length > 0 ? (
          userTemplates.map((template, index) => (
            <TemplateCard key={index} template={template} />
          ))
        ) : (
          <p className="text-white">No templates assigned.</p>
        )}
      </div>
    </div>
  );
};

export default User;
