import * as actionTypes from "./constants";

const changeTokenAction = (token) => ({
  type:actionTypes.CHANGE_TOKEN,
  token:token,
});
export const tokenAction = (token) => {
  return (dispatch) => {
    // 1.根据id查找cartList中是否已经有了该商品
    dispatch(changeTokenAction(token))
  };
};
