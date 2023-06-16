import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/plots';

export default () => {
    const data = [
        {
            star: '1星',
            value: 35,
        },
        {
            star: '2星',
            value: 8,
        },
        {
            star: '3星',
            value: 24,
        },
        {
            star: '4星',
            value: 90,
        },
        {
            star: '5星',
            value: 190,
        },
    ];
    const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'star',
        radius: 0.8,
        label: {
            type: 'outer',
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };
    return <Pie {...config} />;
};

