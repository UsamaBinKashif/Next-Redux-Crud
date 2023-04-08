import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['USER DATA'],
  datasets: [
    {
      label: 'TASKS',
      data: [10,100],
      backgroundColor: [
        '#07bc0c',
        '#FFFFFF',
      ],
      borderColor: [
        '#FFFFFF',
        '#FFFFFF',
        
      ],
      borderWidth: 1,
    },
  ],
};

export function Chart() {
  return (
    <div className='w-[400px] self-center'>
        <h1 className='sm:text-2xl text-xl font-medium text-center  text-white mb-4'>CHART</h1>
        <Doughnut data={data} />
    </div>
  );
}
