import { useState, useRef, useEffect } from 'react';
import './Editables.css';
import PropTypes from 'prop-types';

EditableDiv.propTypes = {
  divId: PropTypes.string,
  inputId: PropTypes.string,
  inputValue: PropTypes.string,
  styles: PropTypes.object,
  children: PropTypes.element,
}

EditableListItem.propTypes = {
  divId: PropTypes.string,
  inputId: PropTypes.string,
  inputValue: PropTypes.string,
  styles: PropTypes.object,
  children: PropTypes.element,
  isCourse: PropTypes.bool
}

EditableField.propTypes = {
  type: PropTypes.oneOf(['div', 'list']).isRequired,
  idPrefix: PropTypes.string.isRequired,
  inputValue: PropTypes.string.isRequired,
  styles: PropTypes.object,
  children: PropTypes.node,
};

function EditableListItem({ divId, inputId, inputValue, styles, isCourse=false}) {
  const [listContent, setListContent] = useState(inputValue);
  const [isEditable, setIsEditable] = useState(false);
  const liRef = useRef(null);

  const handleChange = (e) => {
    setListContent(e.target.value);
  }

  const handleOnClick = () => {
    setIsEditable(true);
  }

  const handleClickOutside = (e) => {
    if (liRef.current && !liRef.current.contains(e.target)) {
      setIsEditable(false);
    }
  }

  const handleEnterKey = (e) => {
    if (liRef.current && e.key === 'Enter') {
      setIsEditable(false);
    }
  }

  useEffect(() => {
    if (isEditable) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleEnterKey);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEnterKey);
    }
  }, [isEditable])

  return (
    <div id={divId} className="editable">
      <ul>
        <li
          id={inputId}
          ref={liRef}
          className={`textarea ${isCourse ? "courses" : ""} ${isEditable ? "" : "off"}`}
          contentEditable={isEditable}
          suppressContentEditableWarning
          onChange={handleChange}
          onClick={handleOnClick}
          style={{ ...styles }}
        >
          {listContent}
        </li>
      </ul>
    </div>
  );
}

function EditableDiv({ divId, inputId, inputValue, styles, children }) {
  const [input, setInput] = useState(inputValue);
  const [isEditable, setIsEditable] = useState(false);
  const divRef = useRef(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  }
  
  const handleOnClick = () => {
    setIsEditable(true);
  }

  const handleClickOutside = (e) => {
    if (divRef.current && !divRef.current.contains(e.target)) {
      setIsEditable(false);
    }
  }

  const handleEnterKey = (e) => {
    if (divRef.current && e.key === 'Enter') {
      setIsEditable(false);
    }
  }

  useEffect(() => {
    if (isEditable) {
      document.addEventListener('click', handleClickOutside);
      document.addEventListener('keydown', handleEnterKey);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEnterKey);
    }
  }, [isEditable])

  return (
    <div id={divId} className="editable">
      {children}
      <div
        id={inputId}
        ref={divRef}
        className={`textarea ${isEditable ? "" : "off"}`}
        contentEditable={isEditable}
        suppressContentEditableWarning
        style={{ ...styles, width: "max-content" }}
        onChange={handleChange}
        onClick={handleOnClick}
      >
        {input}
      </div>
    </div>
  );
}

function EditableField({ type, idPrefix, inputValue, styles, children }) {
  const Component = type === 'list' ? EditableListItem : EditableDiv;
  return (
    <Component
      divId={`${idPrefix}`}
      inputId={`${idPrefix}`}
      inputValue={inputValue}
      styles={styles}
    >
      {children}
    </Component>
  );
}


export default EditableField;