import React, {useState, useEffect} from 'react';

const DumbApp = () => {
  const [ctr, setCtr] = useState(0);
  useEffect(() => {
    setCtr(1);
  }, []);
  return ctr;
}

export default DumbApp;


