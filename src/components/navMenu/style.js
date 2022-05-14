import styled from 'styled-components';

export const MenuWrapper = styled.div`
  /* margin-top: 48px; */
  height: 100%;
  -moz-osx-font-smoothing: grayscale;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  .logo {
    position: sticky;
    top: 0;
    z-index: 999;
    height: 48px;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    padding-left:24px;
    font-size: 16px;
    color: #fff;
    font-weight: 700;
    background-color: #001529;
    span{
      margin-left: 10px;
    }
  }
  .logo.active{
    width: 80px;
    padding: 0;
    justify-content: center;
  }
  .logo img{
    width: 32px;
    height: 32px;
  }
  .menu{
    overflow: scroll;
    height: 100%;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */
  }
  .menu::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  .sub-menu.active{
    color: #1890ff;
  }

`