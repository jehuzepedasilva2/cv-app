// import PropTypes from 'prop-types';
// import './Section.css';
// import './editables.css';
// import { useState } from 'react';
// import { useEditable } from './handleEditable';

// Section.propTypes = {
//   sectionTitle: PropTypes.string,
//   information: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
//   isEducation: PropTypes.bool, 
//   isProjects: PropTypes.bool,
//   isSkills: PropTypes.bool, 
// }

// SectionHeader.propTypes = {
//   title: PropTypes.string,
// }

// SectionInfo.propTypes = {
//   information: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
//   setInfo: PropTypes.func,
//   isEducation: PropTypes.bool,
//   isProjects: PropTypes.bool,
//   isSkills: PropTypes.bool,
// }

// SectionList.propTypes = {
//   list: PropTypes.array,
//   information: PropTypes.array,
//   setInfo: PropTypes.func,
//   id: PropTypes.string,
//   isEducation: PropTypes.bool,
// }

// SectionSkills.propTypes = {
//   information: PropTypes.object,
//   setInfo: PropTypes.func,
// }

// ListItem.propTypes = {
//   information: PropTypes.array, 
//   setInfo: PropTypes.func, 
//   content: PropTypes.string,
//   parentId: PropTypes.string, 
//   id: PropTypes.string,
// }

// ListItem2.propTypes = {
//   information: PropTypes.object, 
//   infoKey: PropTypes.string, 
//   setInfo: PropTypes.func,  
// }

// SubSectionTop.propTypes = {
//   information: PropTypes.array, 
//   item: PropTypes.object,
//   isProjects: PropTypes.bool,
//   setInfo: PropTypes.func
// }

// SubSectionMiddle.propTypes = {
//   information: PropTypes.array, 
//   item: PropTypes.object,
//   setInfo: PropTypes.func,
//   isProjects: PropTypes.bool,
// }

// SubSectionTopName.propTypes = {
//   information: PropTypes.array, 
//   item: PropTypes.object, 
//   setInfo: PropTypes.func
// }

// SubSectionTopDate.propTypes = {
//   information: PropTypes.array, 
//   item: PropTypes.object, 
//   setInfo: PropTypes.func
// }

// SubSectionMiddleTitle.propTypes = {
//   information: PropTypes.array, 
//   item: PropTypes.object, 
//   setInfo: PropTypes.func
// }

// SubSectionMiddleCityState.propTypes = {
//   information: PropTypes.array, 
//   item: PropTypes.object, 
//   setInfo: PropTypes.func,
// }

// // useEditable takes in a onBlurCallback and returns isClicked, divRef, handleBlur, handleClick,
// function Divider() {
//   return <div className='divider'></div>
// }

// function SectionHeader({ title }) {
//   return (
//     <div className='section-header'>
//       <p className='section-title'>{title}</p>
//       <Divider />
//     </div>
//   );
// }

// function ListItem({ information, setInfo, content, parentId, id }) {
//   const handleBlurCallback = (e) => {
//     setInfo(information.map(item => {
//       if (item.id === parentId) {
//         return {
//           ...item,
//           highlights: item.highlights
//             .filter(h => h.id !== id || (e.target.innerHTML.trim() && e.target.innerHTML !== '<br>'))
//             .map(h => {
//               if (h.id === id) {
//                 return { ...h, point: e.target.innerHTML };
//               }
//               return h;
//             })
//         };
//       }
//       return item;
//     }));
//   };
  

//   const { 
//     isClicked, 
//     divRef, 
//     handleBlur, 
//     handleClick 
//   } = useEditable(handleBlurCallback);

//   return (
//       <li
//       id={`li-${id}`}
//       ref={divRef}
//       className={`editable list-item ${isClicked ? 'clicked' : ''}`}
//       suppressContentEditableWarning
//       contentEditable
//       onBlur={(e) => handleBlur(e)}
//       onFocus={handleClick}
//       onClick={handleClick}
//     >
//       {content}
//     </li>
//   );
// }


// function SectionList({ list, information, setInfo, id, isEducation }) {

//   return (
//     <ul>
//       {list.map(l => {
//         return (
//           <div key={l.id} id={`outer-${l.id}`} className={`outer ${isEducation ? 'ed' : ''}`}> {/* remember that key goes on the parent */}
//             <ListItem information={information} setInfo={setInfo} content={l.point} parentId={id} id={l.id} />
//           </div>
//       );})}
//     </ul>
//   );
// }

// function ListItem2({ information, infoKey, setInfo }) {
//   const handleBlurCallback = (e) => {
//     const k = e.target.classList[1];
//     setInfo({...information, [k]: e.target.innerHTML});
//   }

//   const {
//     isClicked, 
//     divRef, 
//     handleBlur, 
//     handleClick,
//   } = useEditable(handleBlurCallback);

//   return (
//     <li
//       className={`editable ${infoKey} ${isClicked ? 'clicked' : ''}`}
//       ref={divRef}
//       suppressContentEditableWarning
//       contentEditable
//       onBlur={(e) => handleBlur(e)}
//       onFocus={handleClick}
//       onClick={handleClick}
//     >
//       {information[infoKey]}
//     </li>
//   );

// }

// function SectionSkills({ information, setInfo }) {
//   return (
//     <div className='parent section-info skills'>
//       <div>
//         <ListItem2 information={information} infoKey="languages" setInfo={setInfo} />
//         <ListItem2 information={information} infoKey='technologies' setInfo={setInfo} />
//       </div>
//     </div>
//   );
// }

// function SubSectionTopName({ information, item, setInfo}) {
//   const handleBlurCallback = (e) => {
//     setInfo(information.map(prevItem => {
//       if (prevItem.id === item.id) {
//         return { ...prevItem, name: e.target.innerHTML };
//       }
//       return prevItem;
//     }));
//   };

//   const {
//     isClicked, 
//     divRef, 
//     handleBlur, 
//     handleClick,
//   } = useEditable(handleBlurCallback);

//   return (
//     <div 
//       className={`editable ${isClicked ? 'clicked' : ''}`}
//       ref={divRef}
//       suppressContentEditableWarning
//       contentEditable
//       onBlur={(e) => handleBlur(e)}
//       onFocus={handleClick}
//       onClick={handleClick}
//     >
//       {item.name}
//     </div>
//   );
// }

// function SubSectionTopDate({ information, item, setInfo }) {
//   const handleBlurCallback = (e) => {
//     setInfo(information.map(prevItem => {
//       if (prevItem.id === item.id) {
//         return { ...prevItem, date: e.target.innerHTML };
//       }
//       return prevItem;
//     }));
//   };

//   const {
//     isClicked, 
//     divRef, 
//     handleBlur, 
//     handleClick,
//   } = useEditable(handleBlurCallback);

//   return (
//     <p 
//       className={`date editable ${isClicked ? 'clicked' : ''}`}
//       ref={divRef}
//       suppressContentEditableWarning
//       contentEditable
//       onBlur={(e) => handleBlur(e)}
//       onFocus={handleClick}
//       onClick={handleClick}
//     >
//       {item.date}
//     </p>
//   );
// }

// function SubSectionTop({ information, item, isProjects, setInfo }) {
//   return (
//     <div className='sub-top'>
//       <div className='sub-name'>
//         <SubSectionTopName information={information} item={item} setInfo={setInfo} />
//       </div>
//       {!isProjects && <SubSectionTopDate information={information} item={item} setInfo={setInfo}  />}
//     </div>
//   );
// }

// function SubSectionMiddleTitle({ information, item, setInfo }) {
//   const handleBlurCallback = (e) => {
//     setInfo(information.map(prevItem => {
//       if (prevItem.id === item.id) {
//         return { ...prevItem, title: e.target.innerHTML };
//       }
//       return prevItem;
//     }));
//   };

//   const {
//     isClicked, 
//     divRef, 
//     handleBlur, 
//     handleClick,
//   } = useEditable(handleBlurCallback);

//   return (
//     <p 
//       className={`sub-title editable ${isClicked ? 'clicked' : ''}`}
//       ref={divRef}
//       suppressContentEditableWarning
//       contentEditable
//       onBlur={(e) => handleBlur(e)}
//       onFocus={handleClick}
//       onClick={handleClick}
//     >
//       {item.title}
//     </p>
//   );
// }

// function SubSectionMiddleCityState({ information, item, setInfo }) {
//   const handleBlurCallback = (e) => {
//     setInfo(information.map(prevItem => {
//       if (prevItem.id === item.id) {
//         return { ...prevItem, cityAndState: e.target.innerHTML };
//       }
//       return prevItem;
//     }));
//   };

//   const {
//     isClicked, 
//     divRef, 
//     handleBlur, 
//     handleClick,
//   } = useEditable(handleBlurCallback);

//   return (
//     <p 
//       className={`sub-city-and-state editable ${isClicked ? 'clicked' : ''}`}
//       ref={divRef}
//       suppressContentEditableWarning
//       contentEditable
//       onBlur={(e) => handleBlur(e)}
//       onFocus={handleClick}
//       onClick={handleClick}
//     >
//       {item.cityAndState}
//     </p>
//   );
// }

// function SubSectionMiddle({ information, item, setInfo, isProjects }) {
//   return (
//     <div className='sub-mid'>
//       <SubSectionMiddleTitle information={information} item={item} setInfo={setInfo} />
//       {!isProjects && <SubSectionMiddleCityState information={information} item={item} setInfo={setInfo} />}
//     </div>
//   );
// }

// function SectionInfo({ information, setInfo, isEducation, isProjects, isSkills }) {
//   if (isSkills) {
//     return <SectionSkills information={information} setInfo={setInfo} />;
//   }

//   return (
//     <div className='section-info'>
//       {information.map(item => {
//         return (
//           <div key={item.id} className='sub-section'>
//             <SubSectionTop information={information} item={item} isProjects={isProjects} setInfo={setInfo} />
//             <SubSectionMiddle information={information} item={item} setInfo={setInfo} isProjects={isProjects}/>
//             <div className='sub-bottom list'>
//               <SectionList list={item.highlights} information={information} setInfo={setInfo} id={item.id} isEducation={isEducation} />
//             </div>          
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// // info is a list of objects
// function Section({ sectionTitle, information, isEducation=false, isProjects=false, isSkills=false }) {
//   const [info, setInfo] = useState(information);

//   return (
//     <div className='section'>
//       <SectionHeader title={sectionTitle}/>
//       <SectionInfo information={info} setInfo={setInfo} isEducation={isEducation} isProjects={isProjects} isSkills={isSkills} />
//     </div>
//   );
// }

// export default Section;

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

function Editable({ className, value, onChange}) {
  const { isClicked, divRef, handleBlur, handleClick } = useEditable(onChange);

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

function ListItem({ information, setInfo, content, parentId, id }) {
  const handleBlurCallback = (e) => {
    setInfo(information.map(item =>
      item.id === parentId
        ? {
            ...item,
            highlights: item.highlights.map(h =>
              h.id === id ? { ...h, point: e.target.innerHTML } : h
            ),
          }
        : item
    ));
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

function SectionList({ list, information, setInfo, id, isEducation }) {
  return (
    <ul>
      {list.map((l) => (
        <div key={l.id} id={`outer-${l.id}`} className={`outer ${isEducation ? 'ed' : ''}`}>
          <ListItem information={information} setInfo={setInfo} content={l.point} parentId={id} id={l.id} />
        </div>
      ))}
    </ul>
  );
}

function SubSection({ information, item, setInfo, isProjects, isEducation }) {
  const updateField = (field) => (e) => {
    setInfo(information.map(prevItem =>
      prevItem.id === item.id ? { ...prevItem, [field]: e.target.innerHTML } : prevItem
    ));
  };

  return (
    <div className='sub-section'>
      <div className='sub-top'>
        <Editable className='sub-name' value={item.name} onChange={updateField('name')} />
        {!isProjects && <Editable className='sub-date' value={item.date} onChange={updateField('date')} />}
      </div>
      <div className='sub-mid'>
        <Editable className='sub-title' value={item.title} onChange={updateField('title')} />
        {!isProjects && <Editable className='sub-city-and-state' value={item.cityAndState} onChange={updateField('cityAndState')} />}
      </div>
      <div className='sub-bottom list'>
        <SectionList list={item.highlights} information={information} setInfo={setInfo} id={item.id} isEducation={isEducation} />
      </div>
    </div>
  );
}

function SectionInfo({ information, setInfo, isProjects, isSkills, isEducation }) {
  if (isSkills) {
    return (
      <div className='parent section-info skills'>
        {['languages', 'technologies'].map((key) => (
          <Editable
            key={key}
            className={`skills-${key}`}
            value={information[key]}
            onChange={(e) => setInfo({ ...information, [key]: e.target.innerHTML })}
          />
        ))}
      </div>
    );
  }

  return (
    <div className='section-info'>
      {information.map((item) => (
        <SubSection
          key={item.id}
          information={information}
          item={item}
          setInfo={setInfo}
          isProjects={isProjects}
          isEducation={isEducation}
        />
      ))}
    </div>
  );
}

function Section({ sectionTitle, information, isEducation = false, isProjects = false, isSkills = false }) {
  const [info, setInfo] = useState(information);
  console.log(info);
  return (
    <div className='section'>
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
