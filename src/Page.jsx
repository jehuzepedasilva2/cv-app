import Section from "./Section.jsx";
import TopPage from "./TopPage.jsx";
import './Page.css';
import { DownloadPDFButton } from "./DownloadPDF.jsx";
import { 
  contactInfo,
  educationInfo, 
  experienceInfo, 
  projectsInfo, 
  technicalSkillsInfo
} from './data.js';
import {
  useRef, 
  useEffect,
} from 'react';

export default function Page() {
  const pageRef = useRef();
  // do something here if height is larger than a sheet of paper
  useEffect(() => { 
    if (pageRef.current) { 
      const pixels = pageRef.current.offsetHeight;
      const ppi = 96;
      console.log(pixels, pixels / ppi); 
    }
  }, [])
  return (
    <>
      <div className='left'>
        <div id="pdf-document" ref={pageRef} className="page">
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