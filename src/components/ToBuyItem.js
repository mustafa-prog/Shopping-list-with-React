import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ToBuyItem = (props) => {
  return (
    <li className="border border-secondary rounded list-unstyled d-flex justify-content-between align-items-center mb-2">
      <span className="pl-3">{props.value}</span>
      <div className="buttons-container p-2">
        <button
          className="btn btn-sm btn-outline-success mr-1"
          onClick={() => props.onToggle(props.id)}
        >
          <FontAwesomeIcon icon={faCheck} />
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

export default ToBuyItem;
