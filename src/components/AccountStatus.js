import React from 'react';
import { useSelector } from 'react-redux';

const Accountstatus = () => {
    const  type = useSelector(state=>state.isSavingsAccount)
  return <div>
      <h1>{type?"Savings Account":"Current Account"}</h1>
  </div>;
};

export default Accountstatus;
