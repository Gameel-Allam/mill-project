import { Card, CardContent, Typography } from '@mui/material';
import styles from './Cells.module.scss';
// import SendIcon from '@mui/icons-material/Send';
import GaugeChart from 'react-gauge-chart';
import { useNavigate } from 'react-router-dom';
const CellsCard = () => {
  const navigate=useNavigate();
  const navigateToSingleCell = (id) => {
    navigate(`/manager/info/cells/${id}`);
  }
  const cellsData = [
    {
      id: 1,
      name: 'معلومات الخلية 1',
      type: 'ايريكا',
      capacity: '4000 طن',
      progress: 45,
    },
    {
      id: 2,
      name: 'معلومات الخلية 2',
      type: 'ايريكا',
      capacity: '6000 طن',
      progress: 60,
    },
    {
      id: 3,
      name: 'معلومات الخلية 3',
      type: 'ايريكا',
      capacity: '2500 طن',
      progress: 25,
    },
    {
      id: 4,
      name: 'معلومات الخلية 4',
      type: 'ايريكا',
      capacity: '7000 طن',
      progress: 80,
    },
    {
      id: 5,
      name: 'معلومات الخلية 5',
      type: 'ايريكا',
      capacity: '6000 طن',
      progress: 60,
    },
    {
      id: 6,
      name: 'معلومات الخلية 6',
      type: 'ايريكا',
      capacity: '6500 طن',
      progress: 70,
    },
    {
      id: 7,
      name: 'معلومات الخلية 7',
      type: 'ايريكا',
      capacity: '2800 طن',
      progress: 33,
    },
    {
      id: 8,
      name: 'معلومات الخلية 8',
      type: 'ايريكا',
      capacity: '2000 طن',
      progress: 45,
    },
    {
      id: 9,
      name: 'معلومات الخلية 9',
      type: 'ايريكا',
      capacity: '1000 طن',
      progress: 10,
    },
    {
      id: 10,
      name: 'معلومات الخلية 10',
      type: 'ايريكا',
      capacity: '1300 طن',
      progress: 13,
    },
    {
      id: 11,
      name: 'معلومات الخلية 11',
      type: 'ايريكا',
      capacity: '5000 طن',
      progress: 50,
    },
    {
      id: 12,
      name: 'معلومات الخلية 12',
      type: 'ايريكا',
      capacity: '6500 طن',
      progress: 67,
    },
  ];

  
    const getProgressColor = (cell) => {
      if (cell.progress >= 60) {
        return '#00c853'
      }else if(cell.progress > 40 &&cell.progress<60)
      return '#f9a825';
      else
      return '#bf2215'
    };
    return (
      <> 
      {cellsData.map((cell,index) => (
        <div className='col-3 my-2' key={index}>
          <Card className={`${styles.card}`} onClick={()=>navigateToSingleCell(cell.id)}>
            <CardContent className={`${styles.card__content}`}>
              <Typography variant="h5" component="div" gutterBottom textAlign={'center'}>
                    {cell.name}
              </Typography>
              <Typography variant="p" component="div" gutterBottom textAlign={'center'}>
                    {cell.type}
              </Typography>
              <Typography variant="p" component="div" gutterBottom textAlign={'center'}>
                    {cell.capacity}
              </Typography>
              <div className={styles.silo__icon}>
                    {/* <div
                    className={styles.progress__bar}
                    > */}
                      <GaugeChart
                      id="gauge-chart"
                      nrOfLevels={20}
                      percent={cell.progress / 100}
                      arcPadding={0.02}
                      cornerRadius={3}
                      colors={[ '#ff0000','#ffa500','#00ff00']}
                      needleColor={getProgressColor(cell)}
                      textColor="#ffffff"
                      fontSize='12px'
                    />
                    {/* <CircularProgress
                        variant="determinate"
                        value={cell.progress}
                        size={50} // Set the desired size of the circular progress bar
                        sx={{ color: getProgressColor(cell) }}
                        />
                    <Typography variant="h6" component="div" sx={{ position: 'absolute' }} className={styles.small__fonts}>
                        {`${cell.progress}%`}
                    </Typography> */}
                    {/* </div> */}
                  </div>
                    {/* <Button variant="outlined" color="warning" className='mt-3' endIcon={<SendIcon />} >تفاصيل الخلية</Button> */}
            </CardContent>
          </Card>
        </div>
         ))}
        
      </>
  )
}

export default CellsCard
