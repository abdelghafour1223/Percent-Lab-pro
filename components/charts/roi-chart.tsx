'use client';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface ROIChartProps {
  initialInvestment: number;
  finalValue: number;
  roi: number;
}

export function ROIChart({ initialInvestment, finalValue, roi }: ROIChartProps) {
  const gain = finalValue - initialInvestment;

  const data = {
    labels: ['Initial Investment', 'Final Value', 'Gain/Loss'],
    datasets: [
      {
        label: 'Amount ($)',
        data: [initialInvestment, finalValue, Math.abs(gain)],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)', // blue for initial
          gain >= 0 ? 'rgba(34, 197, 94, 0.8)' : 'rgba(239, 68, 68, 0.8)', // green for profit, red for loss
          gain >= 0 ? 'rgba(34, 197, 94, 0.6)' : 'rgba(239, 68, 68, 0.6)', // lighter shade for gain/loss
        ],
        borderColor: [
          'rgba(59, 130, 246, 1)',
          gain >= 0 ? 'rgba(34, 197, 94, 1)' : 'rgba(239, 68, 68, 1)',
          gain >= 0 ? 'rgba(34, 197, 94, 1)' : 'rgba(239, 68, 68, 1)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `ROI: ${roi >= 0 ? '+' : ''}${roi.toFixed(2)}%`,
        font: {
          size: 16,
          weight: 'bold' as const,
        },
        color: gain >= 0 ? 'rgba(34, 197, 94, 1)' : 'rgba(239, 68, 68, 1)',
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function(value: any) {
            return '$' + value.toLocaleString();
          },
        },
      },
    },
  };

  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center p-4">
      <Bar data={data} options={options} />
    </div>
  );
}
