import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { TinyLine } from '@ant-design/plots';

const DemoTinyLine = () => {
  const data = [
    513, 546, 983, 340, 539,,
  ];
  const config = {
    height: 60,
    autoFit: false,
    data,
    smooth: true,
  };
  return <TinyLine {...config} />;
};
export default DemoTinyLine;
// ReactDOM.render(<DemoTinyLine />, document.getElementById('container'));