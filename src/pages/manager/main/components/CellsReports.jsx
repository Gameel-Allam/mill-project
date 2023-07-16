import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  scales,
} from 'chart.js';
import styles from './AllReport.module.scss';

const CellsReports = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    scales
  );

  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '9', '10', '11', '12'],
    datasets: [
      {
        label: 'كمية القمح المحلي',
        data: [60, 40, 20, 26, 50, 33, 44, 20, 60, 30, 25, 10],
        fill: true,
        backgroundColor: '#0018006a',
        borderColor: '#0018006a',
        pointBackgroundColor: '#0018006a',
        pointBorderColor: '#0018006a',
        tension: 0.4,
      },
      {
        label: ' كمية القمح المستورد',
        data: [44, 20, 60, 30, 25, 10, 60, 40, 20, 26, 50, 33],
        fill: true,
        backgroundColor: '#0059007f',
        borderColor: '#0059007f',
        pointBackgroundColor: '#0059007f',
        pointBorderColor: '#0059007f',
        tension: 0.4,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'احصائيات الخلايا',
        color: 'black',
        font: {
          size: 18,
        }
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(0, 0, 0, 0.8)', // Set the background color of the tooltip
        titleColor: '#fff', // Set the color of the tooltip title
        bodyColor: '#fff', // Set the color of the tooltip body text
        titleFont: {
          size: 16, // Set the font size of the tooltip title
        },
        bodyFont: {
          size: 14, // Set the font size of the tooltip body text
        },
        callbacks: {
          label: function (context) {
            return context.parsed.y + 'K' + ': ' + context.dataset.label;
          }
        },
        cornerRadius: 5, // Set the corner radius of the tooltip
        displayColors: true, // Hide the color indicators in the tooltip
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        // Additional scale customization options
        ticks: {
          // Include a dollar sign in the ticks
          callback: function (value) {
            return value + 'K';
          },
          color: '#c4c4c4',
        },
      },
      x: {
        // title: {
        //   display: true,
        //   text: 'رقم الخلية',
        //   color: '#ffffff',
        //   font: {
        //     size: 14,
        //     weight: 'bold',
        //   },
        // },
        ticks: {
          color: '#c4c4c4',
        }
      }
    },

  };

  return (
    <div className={`${styles.all__report} d-flex flex-row col-12`}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default CellsReports;
