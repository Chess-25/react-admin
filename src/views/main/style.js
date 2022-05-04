import styled from 'styled-components';

export const MainWrapper = styled.div`
  min-height: 100%;
  display: flex;
  .sider{
    width: 210px;
  }
  .logo {
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 16px;
    font-size: 16px;
    color: #fff;
    font-weight: 700;
    /* background: rgba(255, 255, 255, 0.3); */
  }
  .logo img{
    width: 32px;
    height: 32px;
  }
  .header{
    padding: 0 20px;
    background-color: #fff;
  }
  .content{
    padding: 20px;
    background-color: #fff;
  }
`