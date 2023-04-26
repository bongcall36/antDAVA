import React, { useState } from 'react';
import './App.css';
import { Tabs } from 'antd';
import { NTVWithChart } from './components/ntvWithChart'
import { InsightList } from './components/insightList'

const onChange = (key, callBack) => {
    console.log(key);
    callBack(key)
  };
  
export default function App() {
const [activeKey, SetActiveKey] = useState('1')

const items = [
    {
    key: '1',
    label: `Tab 1`,
    children: <NTVWithChart activeKey={activeKey} setTab={'1'} />,
    },
    {
    key: '2',
    label: `Tab 2`,
    children: <InsightList activeKey={activeKey} setTab={'2'} />,
    },
]; 

return(
    <Tabs defaultActiveKey="1" items={items} onChange={(e)=>onChange(e, SetActiveKey)} />
)
}
