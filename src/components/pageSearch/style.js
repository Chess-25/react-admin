import styled from 'styled-components';

export const PageSearchWrapper = styled.div`
  background-color: #fff;
  padding:20px 20px 1px 20px;
  .form-button{
    display: flex;
    flex-wrap: wrap;
    Button{
      font-size: 12px;
      color: #fff;
      border: none;
      margin:0 20px 2px 0;
    }
    /* operateBtns动态传来的className */
    .common{
      color: #fff;
      background-color: #1890ff;
    }
    .common:hover{
      background-color: #71b6f6;
    }
    .downLoad{
      color: #fff;
      background-color: #13ce66;
    }
    .downLoad:hover{
      color: #fff;
      background-color: #78cc9c;
    }
    .reset{
      color: #fff;
      background-color: #ffba00;
    }
    .reset:hover{
      color: #fff;
      background-color: #fdd66d;
    }
    .delete{
      color: #fff;
      background-color: #ff4d4f;
    }
    .delete:hover{
      color: #fff;
      background-color: #fd8b8d;
    }
  }
`