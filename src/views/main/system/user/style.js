import styled from 'styled-components';

export const UserWrapper = styled.div`
  .content-box {
    height: 100%;
    background: #ffffff;
    //margin: 7.5px 0;
    padding: 20px;
    border: 1px solid #e7e7e7;
    border-radius: 3px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }
    .content-bar {
    line-height: 50px;
    //background: #ececec;
    background: linear-gradient(to right,#ddd, #fff);
    margin-bottom: 20px;
    box-sizing: border-box;
  }
  .content-title {
    text-shadow: 2px 2px #ccc;
    display: inline-block;
    padding: 0 20px;
    color: rgb(48, 65, 86);
    font-weight: bold;
    border-left: 14px solid rgb(48, 65, 86);
    letter-spacing: 0.06em;
    font-size: 15px;
  }
  
`