import React from 'react';
import { useExerciseContext } from './ExerciseContext'; // Adjust the import path as needed

const SavedTemplates = () => {
  const { templates, deleteTemplate } = useExerciseContext();

  return (
    <div className="p-4 shadow-lg rounded-lg bg-slate-100 text-black mt-4">
      <h2 className="text-lg md:text-xl font-bold mb-4 text-green-500">Saved Templates</h2>
      {Object.entries(templates).map(([templateName, template]) => (
        <div key={templateName} className="mb-4 p-2 border-b-2">
          <h3 className="font-semibold text-black display-flex text-base md:text-lg bg-blend-hue">{templateName}</h3>
          {/* Display template details */}
          <p className="text-sm text-orange-500">Day: {template.day}</p>
          <p className="text-sm">Target Muscle: {template.targetMuscle}</p>
          <div>
            <h4 className="font-semibold mt-2 text-sm md:text-base">Exercises:</h4>
            <ul className="list-disc pl-5">
              {template.exercises && template.exercises.map((exercise, index) => (
                <li key={index} className="flex items-center justify-between mt-1">
                  <span className="text-sm md:text-base">{exercise.name}</span>
                  {exercise.gif && <img src={exercise.gif} alt={exercise.name} className="ml-2 w-12 h-12 md:w-16 md:h-16 rounded" loading="lazy" />}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={() => deleteTemplate(templateName)}
            className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs md:text-sm"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default SavedTemplates;
