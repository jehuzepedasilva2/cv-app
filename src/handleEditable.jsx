import {
  useState, 
  useEffect, 
  useRef, 
} from 'react';

export function useEditable(onBlurCallback=() => {}) {
  const [isClicked, setIsClicked] = useState(false);
  const divRef = useRef();

  const handleBlur = (e, lId=null) => {
    if (lId) {
      onBlurCallback(e, lId);
    } else {
      onBlurCallback(e);
    }
  };

  const handleClick = () => {
    setIsClicked(true);
    divRef.current.classList.add('caret-on');
  };

  const handleOutsideClick = (e) => {
    if (divRef.current && !divRef.current.contains(e.target)) {
      setIsClicked(false);
      divRef.current.classList.remove('caret-on');
    }
  };

  const handleKey = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
    if (e.key === 'Tab') {
      setIsClicked(false);
      divRef.current.classList.remove('caret-on');
    }
  };

  useEffect(() => {
    if (isClicked) {
      document.addEventListener('click', handleOutsideClick);
      document.addEventListener('keydown', handleKey);
    }
    return () => {
      document.removeEventListener('click', handleOutsideClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [isClicked]);

  return {
    isClicked,
    divRef,
    handleBlur,
    handleClick,
  };
}

