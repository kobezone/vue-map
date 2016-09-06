/**
 * Created by wwm on 2016/9/2.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
  roadTypes: [],
  selectedRegionName: "",
  regionRoads: {},
  showBottomWrap: false,
  clearLayers:false,
  notes: [],
  activeNote: {}
};
const mutations = {
  GET_DISTRICT_ROAD(state, name){
    state.selectedRegionName = name;
  },
  UPDATE_REGION_ROADS(state, roads){
    state.regionRoads = roads;
  },
  SHOW_BOTTOM_WRAP(state, bool){
    state.showBottomWrap = bool;
  },
  TOGGLE_BOTTOM_WRAP(state){
    let timer = 0;
    if (state.showBottomWrap) timer = 200;
    state.showBottomWrap = false;
    setTimeout(() => {
      state.showBottomWrap = true;
    }, timer)
  },
  ADD_NOTE(state){
    const newNote = {
      text: "New Note",
      favorite: false
    };
    state.notes.push(newNote);
    state.activeNote = newNote
  },
  EDIT_NOTE(state, text){
    state.activeNote.text = text
  },
  DELETE_NOTE(state){
    state.notes.$remove(state.activeNote);
    state.activeNote = state.notes[0]
  },
  TOGGLE_FAVORITE(state){
    state.activeNote.favorite = !state.activeNote.favorite
  },
  SET_ACTIVE_NOTE(state, note){
    state.activeNote = note
  }
};
export default new Vuex.Store({
  state,
  mutations,
  // strict: process.env.NODE_ENV !== 'production' //严格模式 不能在mutation修改store
})
