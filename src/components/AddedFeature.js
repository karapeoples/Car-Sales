import React from 'react';


const AddedFeature = props => {

  const handleRemove = () => {
    props.removeFeature(props.feature);
  }
  return (
    <li>
      <button className="button"onClick={handleRemove}>X</button>
      {props.feature.name}
    </li>
  );
};


export default AddedFeature;
