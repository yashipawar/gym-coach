import React, { useContext } from 'react';
import CreateTemplate from './CreateTemplate';
import SavedTemplates from './SavedTemplates';
import AssignTemplates from './AssignTemplates';
import { useExerciseContext } from './ExerciseContext';
import backgroundImage from '../images/background.jpg';

const Admin = () => {
  const { templates } = useExerciseContext();
  const { saveTemplate } = useExerciseContext();

  const handleSave = (newTemplate) => {
    // Extract day and targetMuscle from the newTemplate object
    const { day, targetMuscle } = newTemplate;
  
    // Use day and targetMuscle to form the templateName
    const templateName = `${day}_${targetMuscle}`;
  
    // Use newTemplate directly as the data
    saveTemplate(templateName, newTemplate);
  };
  
  return (
    // <div className="min-h-screen flex items-center justify-center bg-cover bg-gray-100" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className="p-4 bg-white">
      
      <h1 className="text-4xl font-serif mb-8 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">Admin Dashboard</h1>
      <CreateTemplate onSave={handleSave}/>
      <SavedTemplates templates={templates} />
      <AssignTemplates />
    </div>
    // </div>
  );
};

export default Admin;
