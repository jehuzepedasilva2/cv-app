import './styles/HelpModal.css';
import { CloseModalButton } from './Buttons.jsx';
import { ResumeIcon } from './assets/icons.jsx';

export default function HelpModal() {
  return (
    <div className="help-modal">
      <div className="help-modal-content">
        <CloseModalButton />
        <div className="content">
          <div className='icon'>
            {ResumeIcon}
          </div>
          Welcome to the Resume Builder App! To begin, simply click on one of the
          available resume layouts to select a format that fits your style. You
          can then edit your resume directly by clicking on any field within the
          editor—whether it’s your name, work experience, education, or skills.
          This intuitive interface allows you to customize your resume quickly
          and easily, with all changes appearing in real-time. Once you’re
          satisfied with your resume, you can save or export it as needed.
          Enjoy creating your personalized resume!
        </div>
      </div>
    </div>
  );
}