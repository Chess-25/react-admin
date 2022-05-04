import styled from 'styled-components';
import loginBg from "@/assets/img/login-bg.svg";

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: url(${loginBg});
`
export const LoginPanelWrapper = styled.div`
  width: 320px;
  text-align: center;
  .title{
    text-align: center;
  }
  h1{
    font-weight: 700;
  }
  .login-form{
    padding:10px 15px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    .title{
      margin-bottom: 10px;
      font-size: 20px;
      font-weight: 700;
      color: #409eff;
    }
    .code{
      display: flex;
    }
  }
  .checkbox{
    width: 100%;
    display: flex;
    justify-content: space-between;
    span{
      color: #409eff;
      cursor: pointer;
    }
  }
`