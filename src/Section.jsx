import PropTypes from 'prop-types';
import './Section.css';

Section.propTypes = {
  sectionTitle: PropTypes.string,
  information: PropTypes.array,
  isEducation: PropTypes.bool, 
  isProjects: PropTypes.bool,
  isSkills: PropTypes.bool, 
}

SectionHeader.propTypes = {
  title: PropTypes.string,
}

SectionInfo.propTypes = {
  information: PropTypes.array,
  isEducation: PropTypes.bool,
  isProjects: PropTypes.bool,
  isSkills: PropTypes.bool,
}

SectionList.propTypes = {
  list: PropTypes.array,
  isEducation: PropTypes.bool,
}

SectionSkills.propTypes = {
  information: PropTypes.array
}


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

function SectionList({ list, isEducation }) {
  return (
    <ul>
      {list.map(l => {
        return (
          <div key={l.id} id={`outer-${l.id}`} className={`outer ${isEducation ? 'ed' : ''}`}> {/* remember that key goes on the parent */}
            <li
              id={`li-${l.id}`}
            >
              {l.point}
            </li>
          </div>
      );})}
    </ul>
  );

}

function SectionSkills({ information }) {
  return (
    <div className='section-info skills'>
      <div className='languages'>
        <strong>Languages: </strong>
        {information[0].languages}
      </div>
      <div className='techs'>
        <strong>Technologies: </strong>
        {information[0].technologies}
      </div>
    </div>
  );
}

function SectionInfo({ information, isEducation, isProjects, isSkills }) {
  if (isSkills) {
    return <SectionSkills information={information} />;
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
              <SectionList list={item.highlights} isEducation={isEducation} />
            </div>
          </div>
        );
      })}
    </div>
  );
}


function Section({ sectionTitle, information, isEducation=false, isProjects=false, isSkills=false }) {
  return (
    <div className='section'>
      <SectionHeader title={sectionTitle}/>
      <SectionInfo information={information} isEducation={isEducation} isProjects={isProjects} isSkills={isSkills} />
    </div>
  );
}

export default Section;