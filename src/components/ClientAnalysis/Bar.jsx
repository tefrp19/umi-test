import React, { useState, useEffect } from 'react';
import { Bar } from '@ant-design/plots';
const mock = [
    {
        star: '1星',
        number: 5,
        type: '总体满意度'
    },
    {
        star: '2星',
        number: 3,
        type: '总体满意度'
    },
    {
        star: '3星',
        number: 2,
        type: '总体满意度'
    },
    {
        star: '4星',
        number: 30,
        type: '总体满意度'
    },
    {
        star: '5星',
        number: 50,
        type: '总体满意度'
    },
    {
        star: '1星',
        number: 15,
        type: '服务态度'
    },
    {
        star: '2星',
        number: 3,
        type: '服务态度'
    },
    {
        star: '3星',
        number: 2,
        type: '服务态度'
    },
    {
        star: '4星',
        number: 20,
        type: '服务态度'
    },
    {
        star: '5星',
        number: 40,
        type: '服务态度'
    },
    {
        star: '1星',
        number: 0,
        type: '处理及时度'
    },
    {
        star: '2星',
        number: 1,
        type: '处理及时度'
    },
    {
        star: '3星',
        number: 20,
        type: '处理及时度'
    },
    {
        star: '4星',
        number: 30,
        type: '处理及时度'
    },
    {
        star: '5星',
        number: 40,
        type: '处理及时度'
    },
    {
        star: '1星',
        number: 15,
        type: '收费满意度'
    },
    {
        star: '2星',
        number: 1,
        type: '收费满意度'
    },
    {
        star: '3星',
        number: 0,
        type: '收费满意度'
    },
    {
        star: '4星',
        number: 10,
        type: '收费满意度'
    },
    {
        star: '5星',
        number: 60,
        type: '收费满意度'
    },
];

export default () => {

    const config = {
        data: mock,
        isStack: true,
        xField: 'number',
        yField: 'star',
        seriesField: 'type',
        label: {
            // 可手动配置 label 数据标签位置
            position: 'middle',
            // 'left', 'middle', 'right'
            // 可配置附加的布局方法
            layout: [
                // 柱形图数据标签位置自动调整
                {
                    type: 'interval-adjust-position',
                }, // 数据标签防遮挡
                {
                    type: 'interval-hide-overlap',
                }, // 数据标签文颜色自动调整
                {
                    type: 'adjust-color',
                },
            ],
        },
    };
    return <Bar {...config} />;
};