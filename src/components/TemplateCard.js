import React, { useState } from 'react';
// Import icons from react-icons if not already
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';

const TemplateCard = ({ template }) => {
  const [expanded, setExpanded] = useState(false);

  // Toggle the expanded state of the card
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="container mb-8 p-4">
      <div className="text-2xl text-gray-200 font-bold mb-4 p-4 flex items-center justify-between shadow-xl cursor-pointer  bg-opacity-25 rounded-lg neon-zinc" onClick={toggleExpanded}>
        <h1>{template.day}</h1>
        {/* Toggle between up and down arrow based on the expanded state */}
        {expanded ? (
          <AiOutlineUp className="text-gray-200" size={24} />
        ) : (
          <AiOutlineDown className="text-gray-200" size={24} />
        )}
      </div>
      {expanded && (
        <div className="bg-gray-800 bg-opacity-40 rounded-md p-1">
          <h2 className='text-xl font-bold text-gray-300 p-4 mt-2'>Target Muscle: {template.targetMuscle}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-gray-200">
          {template.exercises.map((exercise, index) => {
              if (!exercise || !exercise.name || !exercise.gifPath || !exercise.youtubeLink) {
                console.error("Exercise data is missing or incomplete:", exercise);
                return (
                  <div key={index} className="exercise-card rounded-md shadow-md p-4 text-center bg-gray-800">
                    <p>Error: Exercise data missing or incomplete.</p>
                  </div>
                );
              }

              return (
                <div key={exercise.name} className="exercise-card rounded-md shadow-md p-2 text-center bg-gray-900 neon-zinc">
                  <h3 className="text-lg font-medium mb-2">{exercise.name}</h3>
                  <img src={exercise.gifPath} alt={exercise.name} className="w-full rounded-md mb-4" />
                  <input type="checkbox" id={`exercise-${index}-${template.day}`} className="mr-2 accent-gray-400" />
                  <label htmlFor={`exercise-${index}-${template.day}`} className="text-gray-200">Mark as complete</label> <br />
                  <button onClick={() => {window.open(exercise.youtubeLink)}} className="text-gray-900 bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-2">Watch on YouTube</button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default TemplateCard;
