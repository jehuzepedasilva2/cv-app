import PropTypes from 'prop-types';
import { CloseIcon } from './assets/icons';
import { useState } from 'react';
import './styles/Buttons.css';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

AddButton.propTypes = {
  classes: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  information: PropTypes.array, 
  setInfo: PropTypes.func,
  isProject: PropTypes.bool, 
  isEducation: PropTypes.bool,
  id: PropTypes.string,
}

SubtractButton.propTypes = {
  parentSection: PropTypes.string,
  defaultText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  alternateText: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  additionalActions: PropTypes.func,
  targetElement: PropTypes.string,
  isListDel: PropTypes.bool,
}

SubSectionDeleteButton.propTypes = {
  information: PropTypes.array, 
  setInfo: PropTypes.func, 
  id: PropTypes.string,
  setIsDeleting: PropTypes.func,
}

ListItemDeleteButton.propTypes = {
  information: PropTypes.array,
  setInfo: PropTypes.func, 
  id: PropTypes.string,
}

function mainSectionAdds(thisId, isEducation, isProject) {
  let obj;
  if (isEducation) {
    obj = {
      id: `uni-${thisId}`,
      name: 'University Name', 
      date: 'Month Year', 
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
  return obj;
}

export function AddButton({ 
  classes, 
  information, 
  setInfo, 
  isEducation, 
  isProject,
  text='Add',
  id=null, 
}) {
  const [currId, setCurrId] = useState(1000);

  const handleClick = () => {
    const thisId = currId;
    let obj;
    if (id === null) {
      obj = mainSectionAdds(thisId, isEducation, isProject);
      setInfo([...information, obj]);
    } else {
      setInfo(information.map(item => {
        if (item.id === id) {
          return {...item, highlights: [...item.highlights, {id: `${id}-hi-${currId}`, point: `Additional highlight about project impact or technical details (e.g., Optimized database queries for better performance).`}]}
        }
        return item;
      }));
    }

    setCurrId(currId + 1);
  }; 

  return (
    <button 
      className={`add-button ${classes} ${id === null ? '' : `${id}`} `}
      onClick={(e) => handleClick(e)}
    >
      {text}
    </button>
  );
}


function indDelVisibility(parentSection, targetElement, isListItem=false) {
  const indDelButtons = document.querySelectorAll(`.section.${parentSection} .${targetElement} ${!isListItem ? '.ind-del' : '.ind-del-list'}`);
  indDelButtons.forEach(b => b.classList.toggle('vis'));
}

function enableDisableListButtons(parentSection) {
  const subButtons =  document.querySelectorAll(`button.sub-button.${parentSection}.sub-bottom`);
  const addButtons = document.querySelectorAll(`.${parentSection} .sub-section button.add-button.sub-top-add`)
  subButtons.forEach(b => {
    b.classList.toggle('no-hover');
    b.disabled = !b.disabled;
  });
  addButtons.forEach(b => {
    b.classList.toggle('no-hover');
    b.disabled = !b.disabled
  })
}

function addWiggles(parentSection, targetElement, text, setText, toggleTexts) {
  const subSections = document.querySelectorAll(`.section.${parentSection} .${targetElement}`); // make this take in the section
  const [defaultText, alternateText] = toggleTexts;
  if (subSections.length === 0) {
    setText(text === alternateText ? defaultText : alternateText);
    return;
  }
  subSections.forEach(sb => {
    if (sb.classList.contains('wiggle')) {
      sb.classList.remove('wiggle');
      setText(defaultText);
    } else {
      sb.classList.add('wiggle');
      setText(alternateText);
    }
  });
}

function enableDisableEdits(parentSection, targetElement) {
  const sectionsEditables = document.querySelectorAll(`.section.${parentSection} .${targetElement} .editable`);
  sectionsEditables.forEach(edits => {
    edits.contentEditable = edits.contentEditable !== 'true';
  });
}

function enableDisableMainAddSubButtons(classes) {
  const addButton = document.querySelector(`button.add-button.${classes}`);
  const subButton = document.querySelector(`button.sub-button.${classes}`);
  addButton.classList.toggle('no-hover');
  subButton.classList.toggle('no-hover');
  addButton.disabled = !addButton.disabled;
  subButton.disabled = !subButton.disabled;
}

function enableDisableAddButton(parentSection, isListItem=false, id='') {
  const sectionsAddButton = document.querySelector(`.section.${parentSection} .add-button${!isListItem ? '' : `.sub-top-add.${id}`}`);
  if (sectionsAddButton) {
    sectionsAddButton.classList.toggle('no-hover');
    sectionsAddButton.disabled = !sectionsAddButton.disabled;
  }
}

export function SubtractButton({
  parentSection,
  defaultText = 'Delete',
  alternateText = 'Edit',
  additionalActions = () => {},
  targetElement='sub-section',
  isListDel=false, 
}) {

  const [buttonText, setButtonText] = useState(defaultText);
  const toggleTexts = [defaultText, alternateText];

  const handleClickList = () => {
    const [mainSection, section] = parentSection.split(' ');
    addWiggles(mainSection, section, buttonText, setButtonText, toggleTexts);
    indDelVisibility(mainSection, section, true);
    // button.add-button.sub-top-add.exp-0 "
    enableDisableAddButton(mainSection, true, section); 
    enableDisableEdits(mainSection, `outer.${section}`);
    enableDisableMainAddSubButtons(mainSection);
  }


  const handleClick = () => {
    addWiggles(parentSection, targetElement, buttonText, setButtonText, toggleTexts);
    enableDisableListButtons(parentSection, targetElement);
    enableDisableEdits(parentSection, targetElement);
    indDelVisibility(parentSection, targetElement);
    enableDisableAddButton(parentSection);
    additionalActions();
  };

  return (
    <button
      className={`sub-button ${parentSection} ${targetElement}`}
      onClick={!isListDel ? handleClick : handleClickList}
    >
      {buttonText}
    </button>
  );
}

export function ListItemDeleteButton({
  information, 
  setInfo, 
  id,
}) {

  const handleClick = () => {
    const [aName, aId] = id.split('-').slice(0, 2);
    const parentId = `${aName}-${aId}`;
    const parentDiv = document.querySelector(`#outer-${id}`);
    parentDiv.classList.remove('wiggle');
    parentDiv.classList.add('shrink');
    setTimeout(() => setInfo(information.map(item => {
      if (item.id === parentId) {
        return {
          ...item, 
          highlights: item.highlights.filter(hi => hi.id !== id)
        }
      }
      return item;
    })), 500);
  }

  return (
    <button
      id={id}
      className={`ind-del-list list-${id}`}
      onClick={handleClick}
    >
      -
    </button>
  );
}

export function SubSectionDeleteButton({ 
  information, 
  setInfo, 
  id 
}) {
  const handleClick = () => {
    const parentSub = document.querySelector(`.sub-section:has(#${id})`)
    parentSub.classList.remove('wiggle');
    parentSub.classList.add('shrink');
    setTimeout(() => setInfo(information.filter(item => item.id !== id)), 500);
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

export function DownloadPDFButton() {
  const handleDownload = () => {
    const buttons = document.querySelectorAll('button:not(.ind-del):not(.ind-del-list)');
    const editables = document.querySelectorAll('.editable');
    buttons.forEach(button => button.style.visibility = 'hidden');
    editables.forEach(edit => {
      if (edit.classList.contains('clicked')) {
        edit.classList.remove('clicked');
        edit.classList.remove('caret-on');
      }
    });
  
    const input = document.getElementById('pdf-document');
    html2canvas(input, { scrollY: -window.scrollY }).then((canvas) => {
      const pdfWidth = 595.28;
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
  
      const scale = pdfWidth / canvasWidth;
      const pdfHeight = canvasHeight * scale;
  
      const pdf = new jsPDF('p', 'pt', [pdfWidth, pdfHeight]);
  
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  
      pdf.save('new-resume.pdf');
    }).finally(() => {
      buttons.forEach(button => button.style.visibility = 'visible');
    }).catch((error) => {
      console.error("Error generating PDF:", error);
    });
  };  

  return (
    <button
      className="download-button"
      onClick={handleDownload}
    >
      Download PDF
    </button>
  );
}

export function HelpButton() {
  const handleClick = () => {
    const helpModal = document.querySelector('.help-modal');
    const helpModalContent = document.querySelector('.help-modal-content');
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');

    setTimeout(() => helpModalContent.classList.add('vis'), 0);
    helpModal.classList.add('vis')
    left.classList.add('modal-mode');
    right.classList.add('modal-mode');
  };

  return (
    <button className="help-button" onClick={handleClick}>
      Help
    </button>
  );
}

export function CloseModalButton() {
  const handleClick = () => {
    const helpModal = document.querySelector('.help-modal');
    const helpModalContent = document.querySelector('.help-modal-content');
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');

    setTimeout(() => helpModal.classList.remove('vis'), 400);
    helpModalContent.classList.remove('vis')
    
    left.classList.remove('modal-mode');
    right.classList.remove('modal-mode');
  };

  return (
    <button onClick={handleClick}>
      {CloseIcon}
    </button>
  );
}

