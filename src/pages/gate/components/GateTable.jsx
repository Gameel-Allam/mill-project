import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Gatemodal from "./GateAddModel";
import { Button } from "@mui/material";
import CarRentalIcon from "@mui/icons-material/CarRental";
import LogoutIcon from "@mui/icons-material/Logout";
import GateEditModal from "./GateEditModel";
import styles from "./GateTable.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllVisits } from "../../../features/gate/GateActions";
const GateTable = () => {
  const rows = [
   {
      visitId:7,
      visitReason:'مشروع تخرج', //ok
      visitType:'زيارة عادية', //ok

    visitor:{
      cardId:'30000000000000', //identityCard ==>visitor.cardId
      name:'محمد عفيفي'   //visitorName ==> visitor.name
    },
    entity:{
      name:'مطاحن بنها',  // new fieldAdd sourcePlace  هل دروب داون ولا انبت عادي
      entityType:'مطاحن' //types is known in srs sourcePlace ==> entity.entityType
    },
    car:{
      type:'سيارة قمح',  //from srs new field
      condition:'جيدة', //radio field
      name:'هوندا', //carType =>car.name
      firstPlateNumber:'4444',
      driverName:'جميل علام', //ok
      secondPlateNumber:'3333' //secind num
    }
   }
  ]
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getAllVisits())
  },[dispatch])
  let data=useSelector(state=>state.gate.visitData)
  console.log(data)
  return (
    <>
      <div className={`container my-4 ${styles.gate__table}`}>
        <Gatemodal />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">طلب تعديل بيان</TableCell>
                <TableCell align="center">الاسم</TableCell>
                <TableCell align="center">رقم السيارة / نوعها</TableCell>
                <TableCell align="center">سبب الزيارة</TableCell>
                <TableCell align="center">الجهة التابع لها</TableCell>
                <TableCell align="center">رقم البطاقة</TableCell>
                <TableCell align="center">المهام</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center" className={styles.special__field}>
                    <GateEditModal visitDate={row}/>
                  </TableCell>
                  <TableCell align="center">{row.visitor.name}</TableCell>
                  <TableCell align="center">{row.car.firstPlateNumber}/{row.car.secondPlateNumber}</TableCell>
                  <TableCell align="center">{row.visitReason}</TableCell>
                  <TableCell align="center">{row.entity.name}</TableCell>
                  <TableCell align="center">{row.visitor.cardId}</TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="success"
                      endIcon={<CarRentalIcon />}
                    >
                      <span className="mx-2">دخول</span>
                    </Button>
                    <Button
                      variant="contained"
                      color="error"
                      className="mx-3 my-2"
                      endIcon={<LogoutIcon />}
                    >
                      <span className="mx-2">خروج</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
};

export default GateTable;
