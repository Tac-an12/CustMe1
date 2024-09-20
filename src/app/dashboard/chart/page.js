import * as React from 'react';
import { ScatterChart, PieChart, LineChart, BarChart } from '@mui/x-charts';
import { Grid, Box } from '@mui/material';

export default function ChartExamples() {
  const scatterData = [
    { id: 0, x1: 1, y1: 10, y2: 15 },
    { id: 1, x1: 2, y1: 20, y2: 25 },
    { id: 2, x1: 3, y1: 30, y2: 35 },
    { id: 3, x1: 4, y1: 40, y2: 45 },
    { id: 4, x1: 5, y1: 50, y2: 55 },
  ];

  const pieData = [
    { id: 0, value: 40, label: 'Admin' },
    { id: 1, value: 30, label: 'Users' },
    { id: 2, value: 20, label: 'Graphic Designers' },
    { id: 3, value: 10, label: 'Printing Providers' },
  ];

  const lineData = [5, 15, 20, 30, 25, 35];
  const xAxisData = [1, 2, 3, 4, 5, 6];

  const barData = [
    { data: [25, 30, 15] },
    { data: [20, 25, 10] },
    { data: [30, 35, 20] },
  ];
  const xAxisBar = ['Freelance Designers', 'Small Printing Businesses', 'Clients'];

  // Professional color palette
  const colors = {
    primary: '#1976d2', // Blue
    secondary: '#ff9800', // Orange
    success: '#4caf50', // Green
    error: '#f44336', // Red
    warning: '#ffc107', // Yellow
    info: '#00acc1', // Cyan
    gray: '#6c757d', // Gray
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Box className="shadow-lg rounded-lg p-4 flex flex-col items-center w-full bg-gray-100">
          <h6 className="font-semibold mb-2 text-black text-lg">Scatter Chart</h6>
          <ScatterChart
            width={550}
            height={280}
            series={[
              {
                label: 'Registered Users',
                data: scatterData.map(v => ({ x: v.x1, y: v.y1, id: v.id })),
                color: colors.primary,
              },
              {
                label: 'Freelance Designers',
                data: scatterData.map(v => ({ x: v.x1, y: v.y2, id: v.id })),
                color: colors.secondary,
              },
            ]}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box className="shadow-lg rounded-lg p-4 flex flex-col items-center w-full bg-gray-100">
          <h6 className="font-semibold mb-2 text-black text-lg">Pie Chart</h6>
          <PieChart
            series={[
              {
                data: pieData.map((item) => ({
                  ...item,
                  color:
                    item.label === 'Admin'
                      ? colors.primary
                      : item.label === 'Users'
                      ? colors.secondary
                      : item.label === 'Graphic Designers'
                      ? colors.success
                      : colors.error,
                })),
              },
            ]}
            width={550}
            height={280}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box className="shadow-lg rounded-lg p-4 flex flex-col items-center w-full bg-gray-100">
          <h6 className="font-semibold mb-2 text-black text-lg">Line Chart</h6>
          <LineChart
            xAxis={[{ data: xAxisData }]}
            series={[
              { data: lineData, color: colors.info },
            ]}
            width={550}
            height={280}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box className="shadow-lg rounded-lg p-4 flex flex-col items-center w-full bg-gray-100">
          <h6 className="font-semibold mb-2 text-black text-lg">Bar Chart</h6>
          <BarChart
            xAxis={[{ scaleType: 'band', data: xAxisBar }]}
            series={barData.map((item, index) => ({
              ...item,
              color: index === 0 ? colors.success : index === 1 ? colors.warning : colors.primary,
            }))}
            width={550}
            height={280}
          />
        </Box>
      </Grid>
    </Grid>
  );
}
