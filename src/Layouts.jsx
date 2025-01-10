import './styles/Layouts.css';
import { 
  contactInfo,
  educationInfo, 
  experienceInfo, 
  projectsInfo, 
  technicalSkillsInfo
} from './data.js';
import Section from "./Section.jsx";
import TopPage from "./TopPage.jsx";
import layoutOne from './assets/imgs/layout-1.png'

// eslint-disable-next-line 
function LayoutOne() {
  return (
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
  );
}

export default function LayoutsSide() {

  const handleClick = (e) => {
    e.target.classList.add('curr-layout');
  }

  return (
    <>
      <div id="hl1" className="heading-layout">
        <h4>Layouts</h4>
        <div className="vertical-heading-layout">
          <div className="letter">L</div>
          <div className="letter">a</div>
          <div className="letter">y</div>
          <div className="letter">o</div>
          <div className="letter">u</div>
          <div className="letter">t</div>
          <div className="letter">s</div>
        </div>
      </div>
      <div className="layout-choices">
        <div id="l01" className="layout one">
          <img 
            id='l01-img' 
            //! REMOVE THIS
            className='curr-layout'
            src={layoutOne}
            onClick={handleClick}
            ></img>
        </div>
        <div id="l02" className="layout two">
          Coming Soon...
        </div>
        <div id="l03" className="layout three">
          Coming Soon...
        </div>
        <div id="l04" className="layout four">
          Coming Soon...
        </div>
        <div id="l05" className="layout five">
          Coming Soon...
        </div>
        <div id="l06" className="layout six">
          Coming Soon...
        </div>
        <div id="l07" className="layout seven">
          Coming Soon...
        </div>
      </div>
    </>
  );
}