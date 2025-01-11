import './styles/Layouts.css';
import PropTypes from 'prop-types';

MiniSection.propTypes = {
  title: PropTypes.string,
}

function MiniSection({ title }) {
  return (
    <div className='mini-header'>
      <div className='min-header-title'>{title}</div>
      <div className='mini-divider'></div>
      <div className='mini-content'>...</div>
    </div>
  );
}

function LayoutOne() {
  return (
    <div className="layout-one">
      <div className='layout-one-top'>
        <div>Name</div>
        <div>Links</div>
      </div>  
      <MiniSection title="Education"/>
      <MiniSection title="Experience" />
      <MiniSection title="Projects" />
      <MiniSection title="Technical Skills" />
    </div>
  );
}

export default function LayoutsSide() {

  return (
    <>
      <div id="hl1" className="heading-layout">
        <h4>Layouts</h4>
      </div>
      <div className="layout-choices">
        <div id="l01" className="layout curr-layout">
          <LayoutOne />
        </div>
        <div id="l02" className="layout">
          Coming Soon...
        </div>
        <div id="l03" className="layout">
          Coming Soon...
        </div>
        <div id="l04" className="layout">
          Coming Soon...
        </div>
        <div id="l05" className="layout">
          Coming Soon...
        </div>
        <div id="l06" className="layout">
          Coming Soon...
        </div>
        <div id="l07" className="layout">
          Coming Soon...
        </div>
      </div>
    </>
  );
}