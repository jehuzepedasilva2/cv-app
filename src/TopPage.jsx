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

function Link({className, information, svg}) {
  return (
    <div className={`link ${className}`}>
      {svg}
      {information}
    </div>
  );
}

function TopPage({ contactInfo }) {
  return (
    <div className="top-page">
      <div className="name">
        <h1>{contactInfo.name}</h1>
      </div>
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