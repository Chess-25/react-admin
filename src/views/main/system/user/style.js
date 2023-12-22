import styled from 'styled-components';

export const UserWrapper = styled.div`
  width: 100%;
  padding:0 20px;
  background-color: #fff;
  .search {
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0;
    .date-picker{
      margin-bottom: 2px;
    }
  }
  .table-btn {
    display: flex;
    justify-content: center;
    padding: 0 2px;
    span{
      cursor: pointer;
    }
    /* operateBtns动态传来的className */
    .detail{
      color: #1890ff;
      margin-right: 6px;
    }
    .detail:hover{
      color: #71b6f6;
    }
    .edit{
      color: #ffba00;
      margin-right: 6px;
    }
    .edit:hover{
      color: #fdd66d;
    }
    .delete{
      color: #ff4d4f;
    }
    .delete:hover{
      color: #fd8b8d;
    }
  }
  .image{
    width: 48px;
    height: 48px;
  }
`