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
    labels: ['Initial\nInvestment', 'Final\nValue', 'Gain/\nLoss'],
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
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 20,
        bottom: 20,
        left: 10,
        right: 10,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `ROI: ${roi >= 0 ? '+' : ''}${roi.toFixed(2)}%`,
        font: {
          size: 18,
          weight: 'bold' as const,
        },
        color: gain >= 0 ? 'rgba(34, 197, 94, 1)' : 'rgba(239, 68, 68, 1)',
        padding: {
          top: 10,
          bottom: 20,
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14,
        },
        bodyFont: {
          size: 13,
        },
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
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 11,
          },
          maxRotation: 0,
          minRotation: 0,
          autoSkip: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.05)',
        },
        ticks: {
          font: {
            size: 12,
          },
          callback: function(value: any) {
            if (value >= 1000) {
              return '$' + (value / 1000).toFixed(1) + 'k';
            }
            return '$' + value.toLocaleString();
          },
        },
      },
    },
  };

  return (
    <div className="w-full" style={{ height: '400px', minHeight: '350px' }}>
      <Bar data={data} options={options} />
    </div>
  );
}
