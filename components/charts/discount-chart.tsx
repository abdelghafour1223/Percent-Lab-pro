'use client';

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface DiscountChartProps {
  originalPrice: number;
  discountPercent: number;
  finalPrice: number;
}

export function DiscountChart({ originalPrice, discountPercent, finalPrice }: DiscountChartProps) {
  const discountAmount = originalPrice - finalPrice;
  const savingsPercent = discountPercent;

  const data = {
    labels: ['Original Price', 'You Save', 'Final Price'],
    datasets: [
      {
        label: 'Amount ($)',
        data: [originalPrice, discountAmount, finalPrice],
        backgroundColor: [
          'rgba(148, 163, 184, 0.8)', // slate for original
          'rgba(34, 197, 94, 0.8)',   // green for savings
          'rgba(59, 130, 246, 0.8)',  // blue for final price
        ],
        borderColor: [
          'rgba(148, 163, 184, 1)',
          'rgba(34, 197, 94, 1)',
          'rgba(59, 130, 246, 1)',
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
        text: `You Save ${savingsPercent}% (${new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
        }).format(discountAmount)})`,
        font: {
          size: 16,
          weight: 'bold' as const,
        },
        color: 'rgba(34, 197, 94, 1)',
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
            if (context.dataIndex === 1) {
              label += ` (${savingsPercent}% off)`;
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
