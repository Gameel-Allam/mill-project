import { Line } from 'react-chartjs-2';
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
    plugins
    } from 'chart.js';
import styles from './AllReport.module.scss'
const AllReport = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        scales,
        plugins

    )
    const data = {
        labels: ['يناير', 'فبراير', 'مارس', 'ابريل', 'مايو', 'يونيو'],
        datasets: [
            {
                label: 'احصائيات الصادر',
                data: [60, 40, 20, 26, 50, 33],
                fill: true,
                backgroundColor: '#0018006a',
                borderColor: '#0018006a',
                tension: 0.3
            },
            {
                label: 'احصائيات الوارد',
                data: [44, 20, 60, 30, 25, 10],
                fill: true,
                backgroundColor: '#164b6085',
                borderColor: '#164b6085',
                tension: 0.4
                
            },
        ]
    }
    const options = {
      plugins: {
        title: {
          display: true,
          text: 'احصائيات الصادر والوارد',
          color: '#ffffff',
          font: {
            size: 18,

          }
        },
        tooltip: {
          enabled: true,
          // backgroundColor: 'red',
          titleColor: 'white',
          bodyColor: 'white',
          bodySpacing: 6,
          xPadding: 50,
          yPadding: 50,
          cornerRadius: 10,

          displayColors: true,
          callbacks: {
            label: function (context) {
              return   context.parsed.y + 'K'+ ': '+context.dataset.label ;
            },
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function (value) {
              return value + 'K';
            },
            color: '#c4c4c4',
          },
        },
        x:{
          ticks: {
            color: '#c4c4c4',
          }
        }
      },
      elements: {
        line: {
          tension: 0.8,
        },
        point: {
          backgroundColor: 'white',
          borderColor: 'white',
          borderWidth: 2,
          radius: 5,
          pointStyle: 'cross',
        },
      },
      interaction: {
        intersect: false,
      },
      legend: {
        labels: {
          color: '#ffffff', // Set the legend text color here
        },
      },
    };
    
  return (
    <>

     <div className={`d-flex flex-row ${styles.line__chart}`}>
       <Line  data={data} options={options} id="myLineChart"/> 
     </div>
    </>
  )
}

export default AllReport