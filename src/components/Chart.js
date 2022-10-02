import React,{useState,useEffect,useContext} from 'react'
import { AreaChart,Area,Tooltip,XAxis,YAxis } from 'recharts';
import styled from 'styled-components';
import {
  convertUnixToDate,
  convertDateToUnix,
  createDate,
} from '../helpers/date-helper';
import { chartConfig } from './../constants/chartConfig';
import ChartFilter from './ChartFilter';

import {fetchHistoricalData} from '../api/asset-api'


const Chart = (props) => {
  const [data,setData]=useState([]);
  const [filter, setFilter] = useState('1Y');  
  const assetSymbol=props.symbol;
  
  const formatData = data => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixToDate(data.t[index]),
      };
    });
  };

  useEffect(() => {
    const getDateRange = () => {
      const { days, weeks, months, years } = chartConfig[filter];

      const endDate = new Date();
      const startDate = createDate(endDate, -days, -weeks, -months, -years);

      const startUnix = convertDateToUnix(startDate);
      const endUnix = convertDateToUnix(endDate);

      return {
        startUnix,
        endUnix,
      };
    };

    const updateChartData = async () => {
      try {
        const { startUnix, endUnix } = getDateRange();
        const resolution = chartConfig[filter].resolution;

        const result = await fetchHistoricalData(
          assetSymbol,
          resolution,
          startUnix,
          endUnix,
        );
        setData(formatData(result));
        console.log(data);
      } catch (error) {
        setData([]);
        console.log(error);
      }
    };

    updateChartData();
  }, [assetSymbol, filter]);

  return (
    <>
    <Container>
      <ul className='flex absolute top-2 right-2 z-40'>
        {Object.keys(chartConfig).map(item => (
          <li key={item}>
            <ChartFilter
              text={item}
              active={filter === item}
              onClick={() => setFilter(item)}
              ></ChartFilter>
          </li>
        ))}
      </ul>
        <AreaChart data={data}>
          <defs>
            <linearGradient id='chartColour' x1='0' y1='0' x2='0' y2='1'>
              <stop
                offset='5%'
                stopColor={`rgb(199 210 254)`}
                stopOpacity={0.8}
                />
              <stop
                offset='95%'
                stopColor={'rgb(199 210 254)'}
                stopOpacity={0}
                />
            </linearGradient>
          </defs>
          <Area
            type='monotone'
            dataKey='value'
            stroke='#312e81'
            fillOpacity={1}
            strokeWidth={0.5}
            fill='url(#chartColour)'
            />
          <Tooltip
            contentStyle={{backgroundColor: '#111827' }}
            itemStyle={{color: '#818cf8'}}
            />
          <XAxis dataKey={'date'} />
          <YAxis domain={['dataMin', 'dataMax']} />
        </AreaChart>
    </Container>
    </>
  )
}

const Container=styled.div`
  height: 550px;
  width: 900px;
  border: 1px solid #3c3c3c;
  border-radius: 1%;
  position: absolute;
  top: 150px;
  left: 40px;
`

export default Chart