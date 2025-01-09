import Section from "./Section.jsx";
import TopPage from "./TopPage.jsx";
import './styles/Page.css';
import { DownloadPDFButton } from "./DownloadPDF.jsx";
import { 
  contactInfo,
  educationInfo, 
  experienceInfo, 
  projectsInfo, 
  technicalSkillsInfo
} from './data.js';

export default function Page() {
  return (
    <>
      <div className='left'>
        <div id="pdf-document" className="page">
          <TopPage 
            contactInfo={contactInfo}
          />
          <Section 
            sectionTitle='Education' 
            information={educationInfo} 
            isEducation={true} 
          />
          <Section 
            sectionTitle='Experience' 
            information={experienceInfo} 
          />
          <Section 
            sectionTitle='Projects' 
            information={projectsInfo} 
            isProjects={true} 
          />
          <Section 
            sectionTitle='Technical Skills' 
            information={technicalSkillsInfo} 
            isSkills={true} 
          />
        </div>
      </div>
      <div className='right'>
        <DownloadPDFButton />
      </div>
    </>
  );
}