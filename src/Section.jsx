import PropTypes from 'prop-types';
import './styles/Section.css';
import './styles/editables.css';
import { 
  AddButton, 
  SubtractButton,
  SubSectionDeleteButton, 
  ListItemDeleteButton,
} from './Buttons';
import { 
  useState, 
} from 'react';
import { useEditable } from './handleEditable';
import {
  DeleteIcon, 
  EditIcon, 
  AddIcon,
} from './assets/icons.jsx';
import { sanitizeInput } from './untils.js';

Section.propTypes = {
  sectionTitle: PropTypes.string,
  information: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  isEducation: PropTypes.bool, 
  isProjects: PropTypes.bool,
  isSkills: PropTypes.bool, 
};

SectionHeader.propTypes = {
  title: PropTypes.string,
};

SectionInfo.propTypes = {
  information: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  setInfo: PropTypes.func,
  isEducation: PropTypes.bool,
  isProjects: PropTypes.bool,
  isSkills: PropTypes.bool,
};

SectionList.propTypes = {
  list: PropTypes.array,
  information: PropTypes.array,
  setInfo: PropTypes.func,
  id: PropTypes.string,
  isEducation: PropTypes.bool,
};

SubSection.propTypes = {
  information: PropTypes.array, 
  infoId: PropTypes.string,
  item: PropTypes.object, 
  setInfo: PropTypes.func, 
  isProjects: PropTypes.bool, 
  isEducation: PropTypes.bool,
}

ListItem.propTypes = {
  information: PropTypes.array, 
  setInfo: PropTypes.func, 
  content: PropTypes.string,
  parentId: PropTypes.string, 
  id: PropTypes.string,
};

Editable.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

function Divider() {
  return <div className='divider'></div>;
}

function SectionHeader({ title }) {
  return (
    <div className='section-header'>
      <p className='section-title'>{title}</p>
      <Divider />
    </div>
  );
}

function Editable({ 
  className, 
  value, 
  onChange
}) {
  const { 
    isClicked,
     divRef, 
     handleBlur, 
     handleClick 
  } = useEditable(onChange);

  return (
    <div
      className={`editable ${className} ${isClicked ? 'clicked' : ''}`}
      ref={divRef}
      suppressContentEditableWarning
      contentEditable
      onBlur={handleBlur}
      onFocus={handleClick}
      onClick={handleClick}
    >
      {value}
    </div>
  );
}

function ListItem({ 
  information, 
  setInfo, 
  content, 
  parentId, 
  id 
}) {

  const handleBlurCallback = (e) => {
        setInfo(information.map(item => {
          if (item.id === parentId) {
            return {
              ...item,
              highlights: item.highlights
                .filter(h => h.id !== id || (e.target.innerHTML.trim() && e.target.innerHTML !== '<br>'))
                .map(h => {
                  if (h.id === id) {
                    const text = sanitizeInput(e.target.innerHTML);
                    return { ...h, point: text };
                  }
                  return h;
                })
            };
          }
          return item;
        }));
      };

  return (
    <li className='list-item'>
      <Editable
        className="list-item-content"
        value={content}
        onChange={handleBlurCallback}
      />
    </li>
  );
}

function SectionList({ 
  list, 
  information, 
  setInfo, 
  id, 
  isEducation 
}) {

  return (
    <ul>
      {list.map((l) => (
        <div key={l.id} id={`outer-${l.id}`} className={`outer${isEducation ? ' ed' : ''} ${id}`}>
          <ListItemDeleteButton 
            information={information} 
            setInfo={setInfo} 
            id={l.id} 
          />
          <ListItem 
            information={information} 
            setInfo={setInfo} 
            content={l.point} 
            parentId={id} 
            id={l.id} 
          />
        </div>
      ))}
    </ul>
  );
}

function SubSection({ 
  information, 
  infoId, 
  item, 
  setInfo, 
  isProjects, 
  isEducation 
}) {

  const updateField = (field) => (e) => {
    setInfo(information.map(prevItem => {
      if (prevItem.id === item.id) {
        const text = sanitizeInput(e.target.innerHTML);
        return { ...prevItem, [field]: text };
      }
      return prevItem
    }));
  };

  return (
    <div className='sub-section'>
      <SubSectionDeleteButton 
        information={information} 
        setInfo={setInfo} 
        id={infoId} 
      />
      <div className='sub-top'>
        <div className='for-name'>
          <Editable className='sub-name' value={item.name} onChange={updateField('name')} />
          {!isEducation && <AddButton 
            classes='sub-top-add' 
            information={information} 
            setInfo={setInfo} 
            isEducation={isEducation} 
            isProject={isProjects} 
            text={AddIcon} 
            id={infoId} />}
          {!isEducation && <SubtractButton 
            parentSection={`${isProjects ? 'projects' : isEducation ? 'education' : 'experience'} ${infoId}`} 
            defaultText={DeleteIcon}
            alternateText={EditIcon} 
            targetElement='sub-bottom'  
            isListDel={true}
          />}
        </div>
        {!isProjects && <Editable 
          className='sub-date' 
          value={item.date} 
          onChange={updateField('date')} 
          />
        }
      </div>
      <div className='sub-mid'>
        <Editable 
          className='sub-title' 
          value={item.title} 
          onChange={updateField('title')} 
        />
        {!isProjects && <Editable 
          className='sub-city-and-state' 
          value={item.cityAndState} 
          onChange={updateField('cityAndState')} 
          />
        }
      </div>
      <div className='sub-bottom list'>
        <SectionList 
          list={item.highlights} 
          information={information} 
          setInfo={setInfo} 
          id={item.id} 
          isEducation={isEducation} 
        />
      </div>
    </div>
  );
}

function SectionInfo({ 
  information, 
  setInfo, 
  isProjects, 
  isSkills, 
  isEducation 
}) {

  if (isSkills) {
    return (
      <div className='parent section-info skills'>
        {['languages', 'technologies'].map((key) => (
          <Editable
            key={key}
            className={`skills-${key}`}
            value={information[key]}
            onChange={(e) => {
              const text = sanitizeInput(e.target.innerHTML)
              setInfo({ ...information, [key]: text});
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div 
      className='section-info'
    >
      {information.map((item) => (
        <SubSection
          key={item.id}
          information={information}
          infoId={item.id}
          item={item}
          setInfo={setInfo}
          isProjects={isProjects}
          isEducation={isEducation}
        />
      ))}
    </div>
  );
}

function Section({ 
  sectionTitle, 
  information, 
  isEducation=false, 
  isProjects=false, 
  isSkills=false 
}) {

  const [info, setInfo] = useState(information);

  return (
    <div 
      className={`section ${sectionTitle.toLowerCase()}`}
    >
      {!isSkills && <SubtractButton 
        parentSection={`${sectionTitle.toLowerCase()}`} 
        />}
      {!isSkills && <AddButton 
        classes={`${sectionTitle.toLowerCase()}`} 
        information={info} 
        setInfo={setInfo} 
        isEducation={isEducation} 
        isProject={isProjects} 
        />
      }
      <SectionHeader title={sectionTitle} />
      <SectionInfo
        information={info}
        setInfo={setInfo}
        isEducation={isEducation}
        isProjects={isProjects}
        isSkills={isSkills}
      />
    </div>
  );
}

export default Section;
