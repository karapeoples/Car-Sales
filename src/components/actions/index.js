export const ADD_FEATURE = 'ADD_FEATURE';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export const buyItem = feature => {
  return {
    type: ADD_FEATURE,
    payload:feature
    } 
};
  
export const removeFeature = feature => {
  return {
    type: REMOVE_ITEM,
    payload:feature
    } 
  };