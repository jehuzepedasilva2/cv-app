import Section from "./Section.jsx";
import TopPage from "./TopPage.jsx";
import './Page.css';
import { 
  contactInfo,
  educationInfo, 
  experienceInfo, 
  projectsInfo 
} from './data.js';

function Page() {
  return (
    <div className='page'>
      <TopPage contactInfo={contactInfo}/>
      <Section sectionTitle='Education' information={educationInfo} isEducation={true} />
      <Section sectionTitle='Experience' information={experienceInfo} />
      <Section sectionTitle='Projects' information={projectsInfo} isProjects={true} />
    </div>
  );
}

export default Page;