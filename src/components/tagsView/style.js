import styled from 'styled-components';

export const TagsViewWrapper = styled.div`
  padding: 10px 20px;
  height: 40px;
  display: flex;
  align-items: center;
  .activeTag{
    height: 30px;
    background-color: #42b983;
    color: #fff;
    display: flex;
    align-items: center;
    cursor: pointer;
    .anticon svg {
      color: #fff;
    }
  }
  .tag{
    height: 30px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`