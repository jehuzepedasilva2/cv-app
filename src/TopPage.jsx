import PropTypes from 'prop-types';
import './TopPage.css';
import { useEditable } from './handleEditable.jsx';
import './editables.css'
import { 
  PhoneIcon, 
  EmailIcon, 
  LinkedInIcon, 
  GitHubIcon 
} from './icons.jsx';
import { useState } from 'react';
import { sanitizeInput } from './untils.js';

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

function Link({ className, info, setInfo, infoKey, svg }) {
  const handleBlurCallback = (e) => {
    setInfo({ ...info, [infoKey]: sanitizeInput(e.target.innerHTML) });
  };

  const { 
    isClicked, 
    divRef, 
    handleBlur, 
    handleClick } = useEditable(handleBlurCallback);


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
  const handleBlurCallback = (e) => {
    setInfo({ ...info, name: sanitizeInput(e.target.innerHTML) });
  };

  const { isClicked, divRef, handleBlur, handleClick } = useEditable(handleBlurCallback);

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