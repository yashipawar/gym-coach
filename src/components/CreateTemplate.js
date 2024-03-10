import React, { useState } from 'react';
import exercises from './ExerciseAPI'; 

const CreateTemplate = ({ onSave }) => {
  const [day, setDay] = useState('');
  const [targetMuscle, setTargetMuscle] = useState('');
  const [selectedExercises, setSelectedExercises] = useState(new Set());

  const targetMuscles = ['Chest', 'Biceps', 'Shoulder', 'Triceps', 'Legs', 'Back'];

  function handleDayChange(e) {
    setDay(e.target.value);
  }

  const handleExerciseChange = (exerciseName) => {
    // Assuming `exercises` is an array of objects where each object has `name`, `gifPath`, and `youtubeLink`.
    const fullExerciseObject = exercises.find(exercise => exercise.name === exerciseName);
  
    if (!fullExerciseObject) {
      console.error(`Exercise named "${exerciseName}" not found.`);
      return;
    }
  
    // Since selectedExercises is a Set, and we need to check for object presence, we convert it to an array and back.
    const updatedExercises = new Set([...selectedExercises]);
  
    // Check if the exercise (based on name) already exists in the selected exercises.
    const isExerciseSelected = [...updatedExercises].some(ex => ex.name === exerciseName);
  
    if (isExerciseSelected) {
      // If it exists, remove it based on matching name.
      updatedExercises.delete([...updatedExercises].find(ex => ex.name === exerciseName));
    } else {
      // Add the full exercise object if it doesn't exist.
      updatedExercises.add(fullExerciseObject);
    }
  
    setSelectedExercises(updatedExercises);
  };
  

  const handleSubmit = () => {
    const exercisesArray = Array.from(selectedExercises);
    if (day && targetMuscle && selectedExercises.size > 0) { // Ensure userId is not empty
      const template = {
        day,
        targetMuscle,
        exercises: exercisesArray,
      };
      onSave(template);
      // assignTemplate(userId, templateName); // Ensure this matches your template naming logic
      resetFormFields();
    } else {
      alert('Please fill all the fields, select at least one exercise, and ensure a user is selected.');
    }
  };
  
  const resetFormFields = () => {
    setDay('');
    setTargetMuscle('');
    setSelectedExercises(new Set());
  };

  return (
    <div className='p-4 shadow-lg rounded-lg bg-white text-black'>
    <h2 className="text-lg md:text-xl text-blue-600 font-bold mb-4">Create Workout Template</h2>
    <div className='mb-5'>
      <label className="block text-sm font-semibold mr-4">
        Day:  
        <select 
          className="mt-1 block w-40 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-slate-300"
          value={day} 
          onChange={handleDayChange}
        >
          <option value="">Select Day</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
          <option value="Saturday">Saturday</option>
        </select>
      </label>
    </div>
    <div className="mb-5">
      <label className="block text-sm font-semibold">Target Muscle:</label>
        <div className="mt-2">
          {targetMuscles.map((muscle, index) => (
              <div key={index} className="flex items-center mb-2">
                  <input
                      type="radio"
                      id={muscle}
                      name="targetMuscle"
                      value={muscle}
                      className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300"
                      checked={targetMuscle === muscle}
                      onChange={(e) => setTargetMuscle(e.target.value)}
                  />
                  <label htmlFor={muscle} className="ml-3 block text-sm font-medium ">
                      {muscle}
                  </label>
                </div>
                  ))}
              </div>
        </div>
        <fieldset className="mb-2">
              <legend className="text-sm font-semibold">Choose Exercises:</legend>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-2">
                  {exercises.map((exercise) => (
                      <div key={exercise.name} className="flex flex-col items-center text-center">
                          <label>
                              <input
                                  type="checkbox"
                                  className="focus:ring-green-500 h-4 w-4 text-green-600 border-gray-300 mb-4 mr-2 rounded"
                                  checked={Array.from(selectedExercises).some(ex => ex.name === exercise.name)}
                                  onChange={() => handleExerciseChange(exercise.name)}
                              />
                              {exercise.name}
                          </label>
                          <img src={exercise.gifPath} alt={exercise.name} className="w-24 h-24 md:w-32 md:h-32 mb-4 rounded" loading="lazy" />
                      </div>
                  ))}
              </div>
          </fieldset>
          <button onClick={handleSubmit}
            className="mt-4 hover:bg-green-700 text-blue-600 font-bold py-2 px-4 rounded-lg neon-blue">
              Save Template
          </button>
    </div>
  );
}

export default CreateTemplate;
