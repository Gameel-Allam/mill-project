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
    labels: ['1', '2', '3', '4', '5', '6', '7', '9', '10', '11','12'],
    datasets: [
      // {
      //   label: 'احصائيات الصادر',
      //   data: [60, 40, 20, 26, 50, 33, 44, 20, 60, 30, 25, 10],
      //   fill: true,
      //   backgroundColor: '#0018006a',
      //   borderColor: '#0018006a',
      //   pointBackgroundColor: '#0018006a',
      //   pointBorderColor: '#0018006a',
      //   tension: 0.4,
      // },
      {
        label: ' كمية القمح',
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
        color: '#ffffff',
        font: {
          size: 18,
        }
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

          // font: {
          //   size: 16, // Set the font size of the title
          //   weight: 'bold', // Set the font weight of the title
          //   family: 'Arial', // Set the font family of the title
          // },
        },
      },
      x: {
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
