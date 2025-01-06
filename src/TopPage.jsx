import PropTypes from 'prop-types';
import './TopPage.css';
import './editables.css'
import { 
  PhoneIcon, 
  EmailIcon, 
  LinkedInIcon, 
  GitHubIcon 
} from './icons.jsx';
import { useEffect, useRef, useState } from 'react';

Link.propTypes = {
  className: PropTypes.string,
  info: PropTypes.object,
  setInfo: PropTypes.func,
  infoKey: PropTypes.string,
  svg: PropTypes.element,
}

TopPage.propTypes = {
  contactInfo: PropTypes.object,
}

Name.propTypes = {
  info: PropTypes.object,
  setInfo: PropTypes.func,
}

function Link({className, info, setInfo, infoKey, svg}) {
  const [isClicked, setIsClicked] = useState(false);
  const divRef = useRef();

  const handleBlur = (e) => {
    setInfo({...info, [infoKey]: e.target.innerHTML});
  }

  const handleClick = () => {
    setIsClicked(true);
  }

  const handleOutsideClick = (e) => {
    if (divRef.current && !divRef.current.contains(e.target)) {
      setIsClicked(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
    if (e.key === 'Tab') {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    if (isClicked) {
      document.addEventListener('click', handleOutsideClick);
      document.addEventListener('keydown', handleKey);
    }
    return() => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleKey);
    }
  }, [isClicked]);

  return (
    <div className={`parent link ${className}`}>
      {svg}
      <div 
        className={`editable ${isClicked ? 'clicked' : ''}`}
        ref={divRef}
        suppressContentEditableWarning
        contentEditable
        onBlur={(e) => handleBlur(e)}
        onFocus={handleClick}
        onClick={handleClick}
      >
        {info[infoKey]}
      </div>
    </div>
  );
}

// info is an object
function Name({ info, setInfo }) {
  const [isClicked, setIsClicked] = useState(false)
  const divRef = useRef();

  const handleBlur = (e) => {
    setInfo({...info, name: e.target.innerHTML})
  };

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleOutsideClick = (e) => {
    if (divRef.current && !divRef.current.contains(e.target)) {
      setIsClicked(false);
    }
  };

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    } 
    if (e.key === 'Tab') {
      setIsClicked(false);
    }
  };

  useEffect(() => {
    if (isClicked) {
      document.addEventListener('click', handleOutsideClick);
      document.addEventListener('keydown', handleEnterKey);
    }
    return() => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleEnterKey);
    }
  }, [isClicked]);

  return (
      <div 
        className={`parent name-header editable ${isClicked ? 'clicked' : ''}`}
        ref={divRef}
        suppressContentEditableWarning
        contentEditable
        onBlur={(e) => handleBlur(e)}
        onFocus={handleClick}
        onClick={handleClick}
      >
        {info.name}
      </div>
  );
}

function TopPage({ contactInfo }) {
  const [info, setInfo] = useState(contactInfo)

  return (
    <div className="top-page">
      <Name info={info} setInfo={setInfo}/>
      <div className="media-links">
        <Link className='phone' info={info} setInfo={setInfo} infoKey='phone' svg={PhoneIcon} />
        <Link className="email" info={info} setInfo={setInfo} infoKey='email' svg={EmailIcon} />
        <Link className="linked-in" info={info} setInfo={setInfo} infoKey='linkedin' svg={LinkedInIcon} />
        <Link className="github" info={info} setInfo={setInfo} infoKey='github' svg={GitHubIcon} />
      </div>
    </div>
  );
}

export default TopPage