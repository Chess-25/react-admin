import styled from 'styled-components';

export const NewTableWrapper = styled.div`
  .table{
    tr{
      width: 100%;
    }
    th{
      display: flex;
      align-items: center;
      justify-content: center;
    }
    width: 100%;
    height: 400px;
    overflow: scroll;
    display: flex;
    .table-body{
      width: 100%;
      align-items: center;
    }
    table{
      width: 100%;
    }
    .table-body{
      width: 100%;
    }
  }
  .th{
    position: relative;
    display: inline-block;
  }
  .tr{
    display: flex;
  }
  .table-data{
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
  }
  .image{
    width: 50px;
    height: 50px;
  }
  .image img{
    width: 48px;
    height: 48px;
  }
  /* operateBtns动态传来的className */
  .view{
        color: #1890ff;
        margin-right: 6px;
      }
      .view:hover{
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
`