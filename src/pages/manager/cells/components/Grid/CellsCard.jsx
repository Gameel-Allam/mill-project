import { Button, Card, CardContent, CircularProgress, Typography } from '@mui/material';
import styles from './Cells.module.scss';
import SendIcon from '@mui/icons-material/Send';
const CellsCard = () => {
  const cellsData = [
    {
      id: 1,
      name: 'معلومات الخلية 1',
      type: 'ايريكا',
      capacity: '2000 طن',
      progress: 45,
    },
    {
      id: 2,
      name: 'معلومات الخلية 2',
      type: 'ايريكا',
      capacity: '2000 طن',
      progress: 60,
    },
    {
      id: 3,
      name: 'معلومات الخلية 3',
      type: 'ايريكا',
      capacity: '2000 طن',
      progress: 25,
    },
    {
      id: 4,
      name: 'معلومات الخلية 4',
      type: 'ايريكا',
      capacity: '2000 طن',
      progress: 80,
    },
    {
      id: 5,
      name: 'معلومات الخلية 5',
      type: 'ايريكا',
      capacity: '2000 طن',
      progress: 60,
    },
    {
      id: 6,
      name: 'معلومات الخلية 6',
      type: 'ايريكا',
      capacity: '2000 طن',
      progress: 70,
    },
    {
      id: 7,
      name: 'معلومات الخلية 1',
      type: 'ايريكا',
      capacity: '2000 طن',
      progress: 33,
    },
    {
      id: 8,
      name: 'معلومات الخلية 2',
      type: 'ايريكا',
      capacity: '2000 طن',
      progress: 45,
    },
    {
      id: 9,
      name: 'معلومات الخلية 3',
      type: 'ايريكا',
      capacity: '2000 طن',
      progress: 10,
    },
    {
      id: 10,
      name: 'معلومات الخلية 4',
      type: 'ايريكا',
      capacity: '2000 طن',
      progress: 13,
    },
    {
      id: 11,
      name: 'معلومات الخلية 5',
      type: 'ايريكا',
      capacity: '2000 طن',
      progress: 50,
    },
    {
      id: 12,
      name: 'معلومات الخلية 6',
      type: 'ايريكا',
      capacity: '2000 طن',
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
          <Card className={`${styles.card}`}>
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
                    <div
                    className={styles.progress__bar}
                    >
                    <CircularProgress
                        variant="determinate"
                        value={cell.progress}
                        size={50} // Set the desired size of the circular progress bar
                        sx={{ color: getProgressColor(cell) }}
                        />
                    <Typography variant="h6" component="div" sx={{ position: 'absolute' }} className={styles.small__fonts}>
                        {`${cell.progress}%`}
                    </Typography>
                    </div>
                  </div>
                    <Button variant="outlined" color="warning" className='mt-3' endIcon={<SendIcon />} >تفاصيل الخلية</Button>
            </CardContent>
          </Card>
        </div>
         ))}
        
      </>
  )
}

export default CellsCard
