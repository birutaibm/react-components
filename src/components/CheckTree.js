import React, { useState } from 'react';

import './style.css';

export default function CheckTree({ node, notifyChange }) {
  node.setForParent = setTreeValues;
  const [value, setValue] = useState(node.value);

  function handleClick(e) {
    setTreeValues(!value);
  }
  
  function onChildChange(childValue) {
    const firstUnselectedMember = node.children.find(child => !child.value);
    const newValue = (firstUnselectedMember === undefined)
    if (value !== newValue) {
      setAndNotify(!value);
    }
  }

  function setTreeValues(newValue) {
    if (node.children && node.children.length>0) {
      node.children.forEach(child => child.setForParent(newValue));
    } else {
      setAndNotify(newValue);
    }
  }

  function setAndNotify(newValue) {
    if (value !== newValue) {
      node.value = newValue;
      setValue(newValue);
      if (notifyChange) {
        notifyChange(newValue);
      }
    }
  }

  function renderChildren() {
    if (node.children && node.children.length>0) {
      const comps = node.children.map(child => {
        child.setForParent = function(value) {
          throw Error('This function is not connected in child');
        }
        return (
          <CheckTree 
            key={child.name}
            node={child}
            notifyChange={onChildChange}
          />
        );
      });
      return (
        <fieldset>
          {comps}
        </fieldset>
      );
    }
  }

  return (
    <div className="CheckTree-container">
      <input 
        type="checkbox" 
        name={node.name}
        id={node.name}
        checked={value}
        onChange={handleClick}
      />
      <label htmlFor={node.name}>{node.text}</label>
      {renderChildren()}
    </div>
  );
}