import PropTypes from 'prop-types';
import './TopPage.css';
import { PhoneIcon, EmailIcon, LinkedInIcon, GitHubIcon } from './icons.jsx';

Link.propTypes = {
  className: PropTypes.string,
  information: PropTypes.string,
  svg: PropTypes.element,
}

TopPage.propTypes = {
  contactInfo: PropTypes.object,
}

Name.propTypes = {
  information: PropTypes.object
}

function Link({className, information, svg}) {
  return (
    <div className={`link ${className}`}>
      {svg}
      <div className='editable'>
        {information}
      </div>
    </div>
  );
}

function Name({ information }) {
  return (
      <div className='name-header editable'>
        {information.name}
      </div>
  );
}

function TopPage({ contactInfo }) {
  return (
    <div className="top-page">
      <Name information={contactInfo} />
      <div className="media-links">
        <Link className='phone' information={contactInfo.phone} svg={PhoneIcon} />
        <Link className="email" information={contactInfo.email} svg={EmailIcon} />
        <Link className="linked-in" information={contactInfo.linkedin} svg={LinkedInIcon} />
        <Link className="github" information={contactInfo.github} svg={GitHubIcon} />
      </div>
    </div>
  );
}

export default TopPage