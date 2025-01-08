import PropTypes from 'prop-types';
import { useState } from 'react';
import './Buttons.css';

AddButton.propTypes = {
  classes: PropTypes.string,
  information: PropTypes.array, 
  setInfo: PropTypes.func,
  isProject: PropTypes.bool, 
  isEducation: PropTypes.bool,
}

SubtractButton.propTypes = {
  parentSection: PropTypes.string,
}

SubSectionDeleteButton.propTypes = {
  information: PropTypes.array, 
  setInfo: PropTypes.func, 
  id: PropTypes.string,
  setIsDeleting: PropTypes.func,
}

export function AddButton({ classes, information, setInfo, isEducation, isProject }) {
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
  }; 

  return (
    <button 
      className={`add-button ${classes}`}
      onClick={(e) => handleClick(e)}
    >
      Add
    </button>
  );
}

function addWiggles(parentSection, text, setText) {
  const subSections = document.querySelectorAll(`.section.${parentSection} .sub-section`);
  if (subSections.length === 0) {
    if (text === 'Delete') {
      setText('Edit');
    } else {
      setText('Delete');
    }
  }
  subSections.forEach(sb => {
    if (sb.classList.contains('wiggle')) {
      sb.classList.remove('wiggle');
      setText('Delete');
    } else {
      sb.classList.add('wiggle');
      setText('Edit');
    }
  });
}

function enableDisableEdits(parentSection) {
  const sectionsEditables = document.querySelectorAll(`.section.${parentSection} .sub-section .editable`);
  sectionsEditables.forEach(edits => {
    if (edits.contentEditable === 'true') {
      edits.contentEditable = false;
    } else {
      edits.contentEditable = true;
    }
  });
}

function indDelVisibility(parentSection) {
  const indDelButtons = document.querySelectorAll(`.section.${parentSection} .sub-section .ind-del`);
  indDelButtons.forEach(b => {
    if (b.classList.contains('vis')) {
      b.classList.remove('vis');
    } else {
      b.classList.add('vis');
    }
  });
}

function enableDisableAddButton(parentSection) {
  const sectionsAddButton = document.querySelector(`.section.${parentSection} .add-button`);
  if (sectionsAddButton.classList.contains('no-hover')) {
    sectionsAddButton.classList.remove('no-hover');
    sectionsAddButton.disabled = false
  } else {
    sectionsAddButton.classList.add('no-hover');
    sectionsAddButton.disabled = true;
  }
}

// Set up individual delete buttons for sections!
export function SubtractButton({ parentSection }) {
  const [text, setText] = useState('Delete');

  const handleClick = () => {
    addWiggles(parentSection, text, setText);
    enableDisableEdits(parentSection);
    indDelVisibility(parentSection)
    enableDisableAddButton(parentSection);
  }


  return (
    <button
      className={`sub-button ${parentSection}`}
      onClick={(e) => handleClick(e)}
    >
      {text}
    </button>
  );
}

export function SubSectionDeleteButton({ information, setInfo, id }) {
  const handleClick = () => {
    const parentSub = document.querySelector(`.sub-section:has(#${id})`)
    parentSub.classList.remove('wiggle');
    parentSub.classList.add('shrink');
    setTimeout(() => setInfo(information.filter(item => item.id !== id)), 200);
  }

  return (
    <button
      id={id}
      className='ind-del'
      onClick={handleClick}
    >
      -
    </button>
  );
}
