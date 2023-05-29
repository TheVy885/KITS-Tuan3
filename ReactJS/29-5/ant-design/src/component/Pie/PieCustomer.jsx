import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Pie } from '@ant-design/plots';

export const PieCustomer = () => {
  const data = [
    {
      type: 'Hồ Chí Minh',
      value: 27,
    },
    {
      type: 'Hà Nội',
      value: 15,
    },
    {
      type: 'Đà Nẵng',
      value: 18,
    },
    {
      type: 'Biên Hòa',
      value: 12,
    },
    {
      type: 'Bình Dương',
      value: 13,
    },
    {
      type: 'Còn Lại',
      value: 15,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: 'inner',
      offset: '-50%',
      content: '{value}',
      style: {
        textAlign: 'center',
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: 'pre-wrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
        },
        content: 'Tỉ lệ',
      },
    },
  };
  return <Pie {...config} />;
};

// ReactDOM.render(<PieCustomer />, document.getElementById('container'));
