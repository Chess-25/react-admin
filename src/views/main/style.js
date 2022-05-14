import styled from 'styled-components';

export const MainWrapper = styled.div`
  min-height: 100%;
  display: flex;
  .sider{
    overflow: auto;
    height: 100vh;
  }
  .header{
    height: 48px;
    align-items: center;
    display: flex;
    padding: 0 20px;
    background-color: #fff;
  }
  .content{
    padding:0 20px;
    overflow: scroll;
    height: 50vh;
  }
`