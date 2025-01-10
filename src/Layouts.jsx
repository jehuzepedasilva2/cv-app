import './styles/Layouts.css';
import layoutOne from './assets/imgs/layout-1.png';
import layoutTwo from './assets/imgs/layout-2.png';
import layoutThree from './assets/imgs/layout-3.png';
import layoutFour from './assets/imgs/layout-4.png';
import { layouts } from './data.js';

export default function LayoutsSide() {

  const handleClick = (e) => {
    const currLayout = document.querySelector('.curr-layout');
    currLayout.classList.remove('curr-layout');
    e.target.classList.add('curr-layout');
    const layoutNumber = e.target.id.substring(2, 3);
    const rootElement = document.documentElement;
    rootElement.style.setProperty('--resume-font', layouts[layoutNumber]);
  }

  return (
    <>
      <div id="hl1" className="heading-layout">
        {/* <h4>Layouts</h4> */}
        <h4>Fonts</h4>
        <div className="vertical-heading-layout">
          <div className="letter">F</div>
          <div className="letter">o</div>
          <div className="letter">n</div>
          <div className="letter">t</div>
          <div className="letter">s</div>
          {/* no layouts for now just font changes */}
          {/* <div className="letter">L</div>
          <div className="letter">a</div>
          <div className="letter">y</div>
          <div className="letter">o</div>
          <div className="letter">u</div>
          <div className="letter">t</div>
          <div className="letter">s</div> */}
        </div>
      </div>
      <div className="layout-choices">
        <div id="l01" className="layout one">
          <img 
            id='l01-img' 
            className='curr-layout' //! DEFAULT FONT
            src={layoutOne}
            onClick={handleClick}
          ></img>
          <div className='font-name'>Georgia</div>
        </div>
        <div id="l02" className="layout two">
          <img 
              id='l02-img' 
              src={layoutTwo}
              onClick={handleClick}
            ></img>
          <div className='font-name'>Tahoma</div>
        </div>
        <div id="l03" className="layout three">
          <img 
            id='l03-img' 
            src={layoutThree}
            onClick={handleClick}
          ></img>
          <div className='font-name'>Arial</div>
        </div>
        <div id="l04" className="layout four">
          <img 
              id='l04-img' 
              src={layoutFour}
              onClick={handleClick}
            ></img>
            <div className='font-name'>Helvetica</div>
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