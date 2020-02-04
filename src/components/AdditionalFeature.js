import React from 'react';



const AdditionalFeature = props => {
  const handleAdd = () => {
    props.buyItem(props.feature);
  }
  return (
    <li>
      <button className="button" onClick={handleAdd}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

export default AdditionalFeature;



