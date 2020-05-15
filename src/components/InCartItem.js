import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUndo } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const InCartItem = (props) => {
  return (
    <li className="border border-secondary rounded list-unstyled d-flex justify-content-between align-items-center mb-2">
      <span className="pl-3">
        <del>{props.value}</del>
      </span>
      <div className="buttons-container p-2">
        <button
          className="btn btn-sm btn-outline-secondary mr-1"
          onClick={() => props.onToggle(props.id)}
        >
          <FontAwesomeIcon icon={faUndo} />
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => props.onDelete(props.id)}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
      </div>
    </li>
  );
};

export default InCartItem;
