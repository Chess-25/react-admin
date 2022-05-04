import * as actionTypes from "./constants";

const changeMenuListAction = (menuList) => ({
  type:actionTypes.CHANGE_MENULIST,
  menuList:menuList,
});
const changeTagsListAction = (tagsList) => ({
  type:actionTypes.CHANGE_TAGSLIST,
  tagsList:tagsList,
});

export const menuListAction = (menuList) => {
  return (dispatch) => {
    dispatch(changeMenuListAction(menuList))
  };
};

export const tagsListAction = (tagsList) => {
  return (dispatch) => {
    dispatch(changeTagsListAction(tagsList))
  };
};
