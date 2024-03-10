import React, { createContext, useContext, useState, useEffect } from 'react';

import usersData from '../users.json';

const ExerciseContext = createContext();

// This is correctly provided. Ensure to use this hook in your components.
export const useExerciseContext = () => useContext(ExerciseContext);

export const ExerciseProvider = ({ children }) => {
  const [templates, setTemplates] = useState({});
  const [assignments, setAssignments] = useState({});
  const [users, setUsers] = useState(usersData); // Load users from users.json
  
  // An example function that updates `assignments`
  const updateAssignments = (userId, templateId) => {
    setAssignments((prevAssignments) => {
      const updatedAssignments = {
        ...prevAssignments,
        [userId]: [...(prevAssignments[userId] || []), templateId],
      };
      return updatedAssignments;
    });
  };

  // save
  const saveTemplate = (templateName, template) => {
    if (!template.day || !template.targetMuscle || !Array.isArray(template.exercises) || template.exercises.length === 0) {
        console.error(`Cannot save '${templateName}', missing required details.`);
        return;
    }
    const newTemplates = { ...templates, [templateName]: template };
    setTemplates(newTemplates);

    // Save to localStorage
    localStorage.setItem('templates', JSON.stringify(newTemplates));
    };
      useEffect(() => {
        const savedTemplates = localStorage.getItem('templates');
        if (savedTemplates) {
            setTemplates(JSON.parse(savedTemplates));
        }
    }, []); // Empty dependency array means this effect runs once on component mount


// delete
const deleteTemplate = (templateName) => {
  const updatedTemplates = { ...templates };
  delete updatedTemplates[templateName];
  setTemplates(updatedTemplates);

  // Update local storage after deletion
  localStorage.setItem('templates', JSON.stringify(updatedTemplates));
};

  
  const assignTemplate = (userId, templateName) => {
    if (userId && templateName) {
      console.log(`Assigning ${templateName} to userId: ${userId}`);
      // Retrieve current assignments from local storage
      const currentAssignments = JSON.parse(localStorage.getItem('userAssignments')) || {};
      // console.log(`assignTemplate called with userId: ${userId}, templateName: ${templateName}`);

      // If the user already has assignments, append to them, otherwise create a new array
      if (currentAssignments[userId]) {
        // Avoid duplicate assignments
        if (!currentAssignments[userId].includes(templateName)) {
          currentAssignments[userId].push(templateName);
        }
      } else {
        currentAssignments[userId] = [templateName];
      }
      
      // Save updated assignments back to local storage
      localStorage.setItem('userAssignments', JSON.stringify(currentAssignments));
    } else {
      console.error("Invalid userId or templateName for assignment", userId, templateName);
    }
  };


  return (
    <ExerciseContext.Provider value={{ users, templates, saveTemplate, deleteTemplate, assignTemplate, assignments, updateAssignments }}>
      {children}
    </ExerciseContext.Provider>
  );
};
