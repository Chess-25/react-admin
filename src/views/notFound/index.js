import React, { memo } from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = memo(() => {
  const history = useHistory()
  const back = ()=>{
    history.goBack()
  }
  return (
    <div>
      <div onClick={e=>back()}>404</div>
    </div>
  );
});

export default NotFound;