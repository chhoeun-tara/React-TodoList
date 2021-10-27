import React, { useState } from 'react';

export default function Element({ element, onEdit, onRemove }) {
  const [shouldShowAction, setShowAction] = useState(false);
  const onMouseEvent = (isHover) => {
    setShowAction(isHover);
  };

  return (
    <div
      className='padding'
      onMouseEnter={() => onMouseEvent(true)}
      onMouseLeave={() => onMouseEvent(false)}
    >
      <span>{element.index + 1 + '. ' + element.text}</span>
      <span className={shouldShowAction ? 'show' : 'hide'}>
        <button onClick={() => onEdit(element)}>Edit</button>
        <button onClick={() => onRemove(element)}>Remove</button>
      </span>
    </div>
  );
}
