import Section from "./Section.jsx";
import TopPage from "./TopPage.jsx";
import LayoutsSide from "./Layouts.jsx";
import { AdjustableIcon } from "./assets/icons.jsx";
import './styles/Page.css';
import { 
  DownloadPDFButton, 
  HelpButton 
} from "./Buttons.jsx";
import { 
  contactInfo,
  educationInfo, 
  experienceInfo, 
  projectsInfo, 
  technicalSkillsInfo, 
  fonts
} from './data.js';
import {
  useState, 
  useRef, 
} from 'react';
import PropTypes from "prop-types";

RightSide.propTypes = {
  containerRef: PropTypes.object,
  setOtherWidth: PropTypes.func, 
  otherWidth: PropTypes.number,
  setSlideableWidth: PropTypes.func,
}

LeftSide.propTypes = {
  slideableWidth: PropTypes.number,
}

function PhoneMode() {
  return (
    <div className="phone-mode">
      <h3>To ensure the best user experience, open this in a full-sized window.</h3>
    </div>
  );
}

function RightSide({ containerRef, setOtherWidth, otherWidth, setSlideableWidth }) {

  const [selectedFont, setSelectedFont] = useState('Georgia');
  let startX;

  const handleMouseDown = (e) => {
    startX = e.clientX;

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const containerWidth = containerRef.current.offsetWidth;
    const deltaX = e.clientX - startX;

    const newOtherWidth = Math.max(0, otherWidth - deltaX);
    const newSlideableWidth = containerWidth - newOtherWidth;

    if (newOtherWidth >= 0 && newSlideableWidth >= 0) {
      setOtherWidth(newOtherWidth);
      setSlideableWidth(newSlideableWidth);
    }
  };

  const handleMouseUp = () => {
    window.removeEventListener('mousemove', handleMouseMove);
    window.removeEventListener('mouseup', handleMouseUp);
  };

  const handleChange = (e) => {
    const selected = e.target.value;
    document.documentElement.style.setProperty('--resume-font', fonts[selected]);
    setSelectedFont(fonts[selected]);
  }

  return (
    <div 
      className='right'
      style={{
          width: `${otherWidth}px`,
        }}
      onMouseDown={handleMouseDown}
    >
      <div className="side-dragger">{AdjustableIcon}</div>
      <div className="right-content">
        <div className="fonts">
          <h4>Fonts</h4>
          <div className="drop-down-box">
            <select 
              id="font-select"
              style={{ fontFamily: selectedFont }}
              onChange={handleChange}
            >
              <option value="1">Georgia</option>
              <option value="2">Tahoma</option>
              <option value="3">Arial</option>
              <option value="4">Helvetica</option>
              <option value="5">Calibri</option>
              <option value="6">Cambria</option>
              <option value="7">Times New Roman</option>
            </select>
          </div>
        </div>
        <LayoutsSide />
        <div className="help-button-container">
          <HelpButton />
        </div>
        <div className="download-button-container">
          <DownloadPDFButton />
        </div>
      </div>
    </div>
);
}

function LeftSide({ slideableWidth }) {

  return (
    <div 
      className='left'
      style={{ 
        width: `${slideableWidth}px` 
      }}
    >
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
  );
}

import { useEffect } from 'react';

export default function Page() {
  const widthOfPrinterPaperPx = 900; // Real size is ~816px; 900px for aesthetics
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [otherWidth, setOtherWidth] = useState(windowWidth - widthOfPrinterPaperPx);
  const [slideableWidth, setSlideableWidth] = useState(widthOfPrinterPaperPx);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);
      setOtherWidth(Math.max(0, newWindowWidth - widthOfPrinterPaperPx));
      setSlideableWidth(widthOfPrinterPaperPx);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <PhoneMode />
      <div className="all-content" ref={containerRef}>
        <LeftSide slideableWidth={slideableWidth} />
        <RightSide
          containerRef={containerRef}
          setOtherWidth={setOtherWidth}
          otherWidth={otherWidth}
          setSlideableWidth={setSlideableWidth}
        />
      </div>
    </>
  );
}