import PropTypes from 'prop-types';
import './Section.css';
import './editables.css';
import { useState } from 'react';
import { useEditable } from './handleEditable';

Section.propTypes = {
  sectionTitle: PropTypes.string,
  information: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  isEducation: PropTypes.bool, 
  isProjects: PropTypes.bool,
  isSkills: PropTypes.bool, 
}

SectionHeader.propTypes = {
  title: PropTypes.string,
}

SectionInfo.propTypes = {
  information: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  setInfo: PropTypes.func,
  isEducation: PropTypes.bool,
  isProjects: PropTypes.bool,
  isSkills: PropTypes.bool,
}

SectionList.propTypes = {
  list: PropTypes.array,
  information: PropTypes.array,
  setInfo: PropTypes.func,
  id: PropTypes.string,
  isEducation: PropTypes.bool,
}

SectionSkills.propTypes = {
  information: PropTypes.object,
  setInfo: PropTypes.func,
}

ListItem.propTypes = {
  information: PropTypes.array, 
  setInfo: PropTypes.func, 
  content: PropTypes.string,
  parentId: PropTypes.string, 
  id: PropTypes.string,
}

ListItem2.propTypes = {
  information: PropTypes.object, 
  infoKey: PropTypes.string, 
  setInfo: PropTypes.func,  
}

// useEditable takes in a onBlurCallback and returns isClicked, divRef, handleBlur, handleClick,
function Divider() {
  return <div className='divider'></div>
}

function SectionHeader({ title }) {
  return (
    <div className='section-header'>
      <p className='section-title'>{title}</p>
      <Divider />
    </div>
  );
}

function ListItem({ information, setInfo, content, parentId, id }) {
  const handleBlurCallback = (e) => {
    setInfo(information.map(item => {
      if (item.id === parentId) {
        return {
          ...item,
          highlights: item.highlights
            .filter(h => h.id !== id || (e.target.innerHTML.trim() && e.target.innerHTML !== '<br>'))
            .map(h => {
              if (h.id === id) {
                return { ...h, point: e.target.innerHTML };
              }
              return h;
            })
        };
      }
      return item;
    }));
  };
  

  const { 
    isClicked, 
    divRef, 
    handleBlur, 
    handleClick 
  } = useEditable(handleBlurCallback);

  return (
      <li
      id={`li-${id}`}
      ref={divRef}
      className={`editable list-item ${isClicked ? 'clicked' : ''}`}
      suppressContentEditableWarning
      contentEditable
      onBlur={(e) => handleBlur(e)}
      onFocus={handleClick}
      onClick={handleClick}
    >
      {content}
    </li>
  );
}


function SectionList({ list, information, setInfo, id, isEducation }) {

  return (
    <ul>
      {list.map(l => {
        return (
          <div key={l.id} id={`outer-${l.id}`} className={`outer ${isEducation ? 'ed' : ''}`}> {/* remember that key goes on the parent */}
            <ListItem information={information} setInfo={setInfo} content={l.point} parentId={id} id={l.id} />
          </div>
      );})}
    </ul>
  );
}

function ListItem2({ information, infoKey, setInfo }) {
  const handleBlurCallback = (e) => {
    const k = e.target.classList[1];
    setInfo({...information, [k]: e.target.innerHTML});
  }

  const {
    isClicked, 
    divRef, 
    handleBlur, 
    handleClick,
  } = useEditable(handleBlurCallback);

  return (
    <li
      className={`editable ${infoKey} ${isClicked ? 'clicked' : ''}`}
      ref={divRef}
      suppressContentEditableWarning
      contentEditable
      onBlur={(e) => handleBlur(e)}
      onFocus={handleClick}
      onClick={handleClick}
    >
      {information[infoKey]}
    </li>
  );

}

function SectionSkills({ information, setInfo }) {
  return (
    <div className='parent section-info skills'>
      <div>
        <ListItem2 information={information} infoKey="languages" setInfo={setInfo} />
        <ListItem2 information={information} infoKey='technologies' setInfo={setInfo} />
      </div>
    </div>
  );
}

function SectionInfo({ information, setInfo, isEducation, isProjects, isSkills }) {
  if (isSkills) {
    return <SectionSkills information={information} setInfo={setInfo} />;
  }

  return (
    <div className='section-info'>
      {information.map(item => {
        return (
          <div key={item.id} className='sub-section'>
            <div className='sub-top'>
              <p className='sub-name'>
              {item.name}
              {isProjects && <span className='proj-line'> | </span>}
              {isProjects && <span className='proj'>{item.languages}</span>}
              </p>
              {!isProjects && <p className='date'>{item.date}</p>}
            </div>
            <div className='sub-mid'>
              <p className='sub-title'>{item.title}</p>
              <p className='sub-city-and-state'>{item.cityAndState}</p>
            </div>
            <div className='sub-bottom list'>
              <SectionList list={item.highlights} information={information} setInfo={setInfo} id={item.id} isEducation={isEducation} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

// info is a list of objects
function Section({ sectionTitle, information, isEducation=false, isProjects=false, isSkills=false }) {
  const [info, setInfo] = useState(information);

  return (
    <div className='section'>
      <SectionHeader title={sectionTitle}/>
      <SectionInfo information={info} setInfo={setInfo} isEducation={isEducation} isProjects={isProjects} isSkills={isSkills} />
    </div>
  );
}

export default Section;