import { Card, CardContent, Typography } from '@mui/material';
import styles from './Cells.module.scss';
// import SendIcon from '@mui/icons-material/Send';
import GaugeChart from 'react-gauge-chart';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { getAllCells } from '../../../../../features/manager/ManagerActions';
const CellsCard = () => {

  const dispatch = useDispatch();
  const navigate=useNavigate();
  const navigateToSingleCell = (id) => {
    navigate(`/manager/info/cells/${id}`);
  }
  useEffect(()=>{
    dispatch(getAllCells())
  },[dispatch])
  const {loading,error,CellsAllData}=useSelector(state=>state.manager)

  console.log(error,loading)
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
      {CellsAllData.map((cell,index) => (
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
