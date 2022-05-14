import styled from 'styled-components';

export const BreadcrumbWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .bread-left{
    display: flex;
    align-items: center;
    font-size: 30px;
    .trigger{
      cursor: pointer;
      margin-right: 10px;
      font-size: 26px;
      font-weight: 700;
    }
  }
  .bread-right{
    display: flex;
    height: 48px;
    line-height: 48px;
    align-items: center;
    margin-right: 20px;
    span{
      margin-left: 10px;
    }
  }
`