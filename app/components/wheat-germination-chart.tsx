'use client';

import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const labels = [
  'Dilkash',
  'Sehar-06',
  'Galaxy-13',
  'Akbar-19',
  'Falak',
  'Sawara',
  'Nawab',
  'Inqlab-91',
  'Fsd-08',
  'Fsd-10',
  'Pasban-90',
  'Lasani-08',
  'MH-21',
  'Arooj-22',
  'AARI-11',
];

const data = {
  labels,
  datasets: [
    {
      label: 'Set 1 - R1',
      data: [14, 18, 14, 13, 14, 12, 15, 16, 13, 17, 12, 13, 18, 17, 18],
      backgroundColor: 'rgba(194, 65, 12, 0.88)',
    },
    {
      label: 'Set 1 - R2',
      data: [17, 14, 17, 17, 16, 15, 13, 14, 18, 13, 15, 17, 14, 13, 17],
      backgroundColor: 'rgba(245, 158, 11, 0.85)',
    },
    {
      label: 'Set 1 - R3',
      data: [13, 15, 15, 14, 11, 17, 18, 17, 14, 15, 16, 15, 17, 16, 13],
      backgroundColor: 'rgba(132, 204, 22, 0.86)',
    },
    {
      label: 'Set 2 - R1',
      data: [14, 14, 17, 12, 15, 14, 15, 13, 18, 15, 17, 18, 16, 13, 12],
      backgroundColor: 'rgba(5, 150, 105, 0.84)',
    },
    {
      label: 'Set 2 - R2',
      data: [16, 16, 14, 17, 18, 18, 14, 17, 13, 16, 14, 14, 15, 16, 15],
      backgroundColor: 'rgba(14, 116, 144, 0.84)',
    },
    {
      label: 'Set 2 - R3',
      data: [12, 15, 13, 18, 13, 12, 16, 14, 16, 14, 15, 11, 14, 12, 17],
      backgroundColor: 'rgba(37, 99, 235, 0.84)',
    },
    {
      label: 'Set 3 - R1',
      data: [15, 14, 16, 15, 18, 15, 18, 16, 17, 18, 15, 15, 16, 14, 16],
      backgroundColor: 'rgba(124, 58, 237, 0.84)',
    },
    {
      label: 'Set 3 - R2',
      data: [14, 18, 17, 14, 13, 12, 17, 14, 13, 16, 11, 14, 18, 17, 17],
      backgroundColor: 'rgba(219, 39, 119, 0.84)',
    },
    {
      label: 'Set 3 - R3',
      data: [11, 13, 12, 17, 18, 15, 13, 17, 18, 15, 14, 17, 13, 15, 13],
      backgroundColor: 'rgba(190, 24, 93, 0.84)',
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
  plugins: {
    legend: {
      position: 'bottom' as const,
      labels: {
        color: '#0f172a',
        boxWidth: 14,
        boxHeight: 14,
        padding: 12,
      },
    },
    tooltip: {
      backgroundColor: '#0f172a',
      titleColor: '#f8fafc',
      bodyColor: '#e2e8f0',
      padding: 10,
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#334155',
        maxRotation: 35,
        minRotation: 35,
      },
      grid: {
        color: 'rgba(148, 163, 184, 0.2)',
      },
    },
    y: {
      beginAtZero: true,
      suggestedMax: 20,
      ticks: {
        color: '#334155',
        stepSize: 2,
      },
      grid: {
        color: 'rgba(148, 163, 184, 0.25)',
      },
    },
  },
};

export default function WheatGerminationChart() {
  return (
    <div className="h-[560px] w-full md:h-[640px]">
      <Bar options={options} data={data} />
    </div>
  );
}
