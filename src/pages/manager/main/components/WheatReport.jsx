import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import styles from './AllReport.module.scss';
import { Chart as ChartJS, Title, Tooltip, Legend } from 'chart.js';

const WheatReport = () => {
  ChartJS.register(Title, Tooltip, Legend);

  const data = {
    labels: ['فرنسي', 'الماني', 'ايريكا', 'شنجهاي', 'وادي الكرم', 'روسي'],
    datasets: [
      {
        label: 'كمية القمح',
        data: [60, 40, 20, 26, 50, 33],
        backgroundColor: [
          '#01796F', // Red
          '#D0F0C0', // Blue
          '	#4B5320', // Yellow
          '#A9BA9D', // Green
          '#043927', // Purple
          '#4F7942', // Orange
        ],
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: 'البواخر الحالية بالخلايا',
        font: {
          size: 18,
          weight: 'bold',
        },
      },
      legend: {
        display: true,
        position: 'right',
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className={`${styles.wheat__report} d-flex flex-row`}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default WheatReport;
