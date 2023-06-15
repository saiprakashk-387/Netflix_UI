import React, { useState, useEffect } from 'react';
import { Mix } from '@ant-design/plots';
import { each } from '@antv/util';
import { useDispatch, useSelector } from 'react-redux';
import { AnalyticsSelector, GetAnalyticsSelector } from '../../../Redux/Slice'
import { getAnalyticsAPI } from '../../../Actions/adminApi';
import { useLocation } from 'react-router-dom';

const MovieAnalytics = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { value } = location?.state
  console.log('value',value);
  // const { movieAnalytics } = useSelector(AnalyticsSelector);
  // const { analyticsData } = useSelector(GetAnalyticsSelector);
  // let data = movieAnalytics.map((val, i) => val.title);
    let data = value.map((val, i) => val.name);
  const newData = [...new Set(data)];
  useEffect(() => {
    dispatch(getAnalyticsAPI());
  }, [])
  

  const vall = newData.map((vl) =>
  ({
    name: vl,
    value: data.filter((vv) => vv === vl).length,
  })
  );
  console.log('vall',vall);
   const datas = [
    vall     
  ]
  const plots = [];
  const total = datas.length;
   each(datas, (data, idx) => {
     const startX = idx / total;
     plots.push({
      type: 'column',
      region: {
        start: {
          x: startX,
          y: 0,
        },
        end: {
          x: (idx + 1) / total,
          y: 1,
        },
      },
      options: {
        data,
        xField: 'name',
        yField: 'value',
        seriesField: 'name',
        isGroup: true,
        meta: {
          value: {
            sync: true,
          },
        },
        xAxis: {
          label: {
            autoRotate: true,
          },
        },
        yAxis:
          idx === 0
            ? {
              tickCount: 4,
            }
            : {
              label: {
                formatter: (v) => '',
              },
              tickCount: 10,
            },
        tooltip: {
          showMarkers: false,
          fields: ['SalesTerritoryRegion', 'SalesAmount', 'quarter'],
        },

        minColumnWidth: 30,
        appendPadding: [20, 0],
        annotations: [
          {
            type: 'text',
            content: data[0].type,
            position: ['50%', '0%'],
            offsetY: -15,
            style: {
              textAlign: 'center',
            },
          },
        ],
      },
    });
  });
  const config = {
    plots,
    syncViewPadding: true,
    tooltip: false,
    legend: {},
  };
  return <Mix {...config} />;
};
export default MovieAnalytics;