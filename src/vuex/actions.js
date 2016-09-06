/**
 * Created by wwm on 2016/9/2.
 */

export const selectedRegionName=({dispatch},name)=>{
  dispatch('GET_DISTRICT_ROAD',name)
};

export const updateRegionRoads=({dispatch},roads)=>{
  dispatch('UPDATE_REGION_ROADS',roads)
};

export const setBottomWrap=({dispatch},bool)=>{
  dispatch('SHOW_BOTTOM_WRAP',bool)
};

export const addNote=({ dispatch})=>{
  dispatch('ADD_NOTE')
};


export const editNote=({dispatch},e)=>{
  dispatch('EDIT_NOTE',e.target.value)
};
export const deleteNote=({despatch})=>{
  dispatch('DELETE_NOTE')
};
export const updateActiveNote=({dispatch},note)=>{
  dispatch('SET_ACTIVE_NOTE',note)
};
export const toggleFavorite=({dispatch})=>{
  dispatch('TOGGLE_FAVORITE')
};
