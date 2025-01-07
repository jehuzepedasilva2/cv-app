import PropTypes from 'prop-types';
import './Buttons.css';
import { useState } from 'react';

AddButton.propTypes = {
  information: PropTypes.array, 
  setInfo: PropTypes.func,
  isProject: PropTypes.bool, 
  isEducation: PropTypes.bool,
}

SubtractButton.propTypes = {
  parentSection: PropTypes.string,
}

export function AddButton({ information, setInfo, isEducation, isProject }) {
  const [currId, setCurrId] = useState(1000);

  const handleClick = () => {
    let obj;
    const thisId = currId;
    if (isEducation) {
      obj = {
        id: `uni-${thisId}`,
        name: 'University Name', 
        date: 'Month Year - Month Year', 
        title: 'Degree and Major', 
        cityAndState: 'City, State', 
        highlights: [
          {
            id: `uni-${thisId}-hi-0`,
            point: 'Relevant coursework (e.g., Algorithms, Machine Learning, Software Engineering)'
          }
        ]
      };
    } else if (isProject) {
      obj = {
        id: `proj-${thisId}`, 
        name: 'Project Name', 
        title: 'Technologies Used', 
        highlights: [
          {
            id: `proj-${thisId}-hi-0`, 
            point: 'Description of project achievement or functionality (e.g., Developed a task management app with real-time notifications).'
          }, 
          {
            id: `proj-${thisId}-hi-1`, 
            point: 'Additional highlight about project impact or technical details (e.g., Optimized database queries for better performance).'
          }
        ]
      };
    } else {
      obj = {
        id: `exp-${thisId}`, 
        name: 'Company Name', 
        date: 'Month Year - Month Year', 
        title: 'Job Title', 
        cityAndState: 'City, State', 
        highlights: [
          {
            id: `exp-${thisId}-hi-0`, 
            point: 'Achievement or responsibility (e.g., Developed REST APIs to support front-end functionality).'
          },
          {
            id: `exp-${thisId}-hi-1`, 
            point: 'Another achievement or responsibility (e.g., Improved application performance by refactoring legacy code).'
          }, 
          {
            id: `exp-${thisId}-hi-2`, 
            point: 'Teamwork or leadership experience (e.g., Collaborated with a team to launch a new feature).'
          }
        ]
      };
    }
    setInfo([...information, obj]);
    setCurrId(currId + 1);
  } 

  return (
    <button 
      className="add-button"
      onClick={(e) => handleClick(e)}
    >
      +
    </button>
  )
}

// Set up individual delete buttons for sections!
export function SubtractButton({ parentSection }) {

  const handleClick = () => {
    const parentDiv = document.querySelectorAll(`.section.${parentSection} .sub-section`);
    console.log(parentDiv);
  }

  return (
    <button
      className={`sub-button`}
      onClick={(e) => handleClick(e)}
    >
      -
    </button>
  );
}