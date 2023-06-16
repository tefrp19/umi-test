import React, { useState, useEffect } from 'react';
import { Column } from '@ant-design/plots';
const mock = [
    {
        id: 1684982129811,
        value: 1,
        type: '工单数量'
    },
    {
        Date: 1684982129811,
        value: 100,
        type: '金额'
    },
];
for (let i = 1; i <= 65; i++) {
    mock.push({
        id: 1684982129811 + i,
        value: 1 + Math.floor(Math.random() * 10),
        type: '工单数量'
    })
    mock.push({
        id: 1684982129811 + i,
        value: 100 + Math.floor(Math.random() * 200),
        type: '金额'
    })
}
export default () => {

    const config = {
        data: mock,
        isStack: true,
        xField: 'id',
        yField: 'value',
        seriesField: 'type',
        label: {
            // 可手动配置 label 数据标签位置
            position: 'middle',
            // 'top', 'bottom', 'middle'
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
    return <Column {...config} />;
};