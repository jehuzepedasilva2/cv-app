import './styles/HelpModal.css';
import { CloseModalButton } from './Buttons';

export default function HelpModal() {
  return (
    <div className="help-modal">
      <div className='help-modal-content'>
        <CloseModalButton />
      </div>
    </div>
  );
}