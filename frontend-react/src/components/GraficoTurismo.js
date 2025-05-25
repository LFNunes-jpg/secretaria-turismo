import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Grafico() {
  const data = {
    labels: ['Parques', 'Cultura', 'Feiras'],
    datasets: [
      {
        label: 'Eventos por categoria',
        data: [5, 8, 3],
        backgroundColor: ['#0d6efd', '#198754', '#ffc107'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Análise de Eventos</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default Grafico;
