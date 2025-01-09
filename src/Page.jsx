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

//! IMPORTANT 
// TODO: Add a help button at above layout choices with instructions on what to do.

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
        <div className="layout-choices">
        </div>
        <div className="download-button-container">
          <DownloadPDFButton />
        </div>
      </div>
    </>
  );
}