import Section from "./Section";
import './Page.css';
import { 
  educationInfo, 
  experienceInfo, 
  projectsInfo 
} from './data.js';

function Page() {
  return (
    <div className='page'>
      <Section sectionTitle='Education' information={educationInfo} isEducation={true} />
      <Section sectionTitle='Experience' information={experienceInfo} />
      <Section sectionTitle='Projects' information={projectsInfo} isProjects={true} />
    </div>
  );
}

export default Page;