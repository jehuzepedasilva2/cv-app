import Section from "./Section.jsx";
import TopPage from "./TopPage.jsx";
import './Page.css';
import { 
  contactInfo,
  educationInfo, 
  experienceInfo, 
  projectsInfo, 
  technicalSkillsInfo
} from './data.js';

function Page() {
  return (
    <div className="page">
      {/* <div className='left page'> */}
        <TopPage contactInfo={contactInfo}/>
        <Section sectionTitle='Education' information={educationInfo} isEducation={true} />
        <Section sectionTitle='Experience' information={experienceInfo} />
        <Section sectionTitle='Projects' information={projectsInfo} isProjects={true} />
        <Section sectionTitle='Technical Skills' information={technicalSkillsInfo} isSkills={true} />
      {/* </div>
      <div className="right"></div> */}
    </div>
  );
}

export default Page;