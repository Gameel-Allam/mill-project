import Table from '@mui/material/Table';
import styles from '../main/scale.module.scss';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import CarRentalIcon from '@mui/icons-material/CarRental';
import LogoutIcon from '@mui/icons-material/Logout';
import ScaleAddModal from './components/ScaleAddModal';
import ScaleEditModal from './components/ScaleEditModal';
import "../../../styles/global.css"
const Scaletable = () => {      
      const rows = [
        {
            visitorName: "ربيع محممود ",
            carNumber: "15647 / 35569",
            resoneOfvisit: "   توريد ",
            sourcePlace: "مطاحن منوف",
            identityCard: 3000012348978965,
            driverName:"",
            carType:"تروسيكل",
            visitType:'قمح',
            weightSerialNumber:12356,
            carWeightEmpty:100,
            carWeightWithLoad:300,
            typeOfOperation:"صادر محلي",
            wheatType:"روسي",
            lossInWheat:'9 كيلو',
            weightUnit:'الكيلو'
          }
      ];
  return (
    <>
    <div className={`container my-4 ${styles.gate__table}`}>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
                <TableRow>
                <TableCell align="center">اضافة بيان</TableCell>
                <TableCell align="center">اسم المورد / المندوب</TableCell>
                <TableCell align="center">رقم السيارة / نوعها</TableCell>
                <TableCell align="center">نوع القمح </TableCell>
                <TableCell align="center"> الوزن الصافى</TableCell>
                <TableCell align="center">العجز </TableCell>
                <TableCell align="center">الحالة </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row,index) => (
                    <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell align="center"  className={styles.special__field}>
                     <ScaleAddModal/>
                    </TableCell>
                    <TableCell align="center">{row.visitorName}</TableCell>
                    <TableCell align="center">{row.carNumber}</TableCell>
                    <TableCell align="center">{row.wheatType}</TableCell>
                    <TableCell align="center">{row.loadRealWeight}</TableCell>
                    <TableCell align="center">{row.lossInWheat}</TableCell>
                    <TableCell align="center">
                    <Button variant="contained"color="success" endIcon={<CarRentalIcon/>}>
                        <span className='mx-2'>دخول</span>
                    </Button>
                        <ScaleEditModal visitDate={row}/>
                    <Button variant="contained" color='error' endIcon={<LogoutIcon/>}>
                        <span className='mx-2'>خروج</span>
                    </Button>
                    </TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
    </TableContainer>
          </div>
    </>
  )
}

export default Scaletable