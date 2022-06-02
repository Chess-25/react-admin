import styled from 'styled-components';

export const MyTableWrapper = styled.div`
  width: 100%;
  padding:0 20px;
  background-color: #fff;
  .search{
    display: flex;
    flex-wrap: wrap;
    padding: 20px 0;
    .date-picker{
      margin-bottom: 2px;
    }
    /* height: 44px; */
  }
  .ant-table-body{
    height: 410px;
  }
  .ant-table-tbody > tr > td{
    height: 36px;
    line-height: 36px;
    padding:5px;
    font-size: 13px;
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
  }
  .ant-table-thead > tr > th{
    padding:5px;
    /* background-color: #fff; */
  }
  .table-title{
    
  }
  .handler{
    cursor: pointer;
  }
  .image{
    width: 48px;
    height: 48px;
  }
`