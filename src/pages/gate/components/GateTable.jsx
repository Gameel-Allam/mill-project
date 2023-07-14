import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Gatemodal from "./GateAddModel";
import GateEditModal from "./GateEditModel";
import styles from "./GateTable.module.scss";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getAllVisits } from "../../../features/gate/GateActions";
import { ArrowBack } from "@mui/icons-material";
import EnterVisit from "./EnterVisit";
import LeaveVisit from "./LeaveVisit";
import { PulseLoader } from "react-spinners";
// import { useMemo } from 'react';
const GateTable = () => {
  // ************ Redux Global State ************
  const dispatch = useDispatch();
  const { loading, error, visitAllData, currentPage, pageInfo } = useSelector(state => state.gate)
  // pass data to table
  const rows = visitAllData;
  useEffect(() => {
    dispatch(getAllVisits({ size: 10, pageNumber: pageInfo["current-page"] || 0 }))
    console.log(currentPage, "Current Page from table")
    // dispatch(getAllVisits({ size: 10, pageNumber: currentPage }))
  }, [dispatch])
  return (
    <>
      {
        loading ? <PulseLoader color="#3c44b1" loading={loading} size={15} className={styles.loading__spec} /> : error ? <h1>Error</h1> :
          <div className={`container my-4 ${styles.gate__table}`}>
            {/* <div className={styles.gate__table__overLay}></div> */}
            <Gatemodal />
            <TableContainer component={Paper} className={styles.Gate__Table}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                <TableHead>
                  <TableRow>
                    <TableCell align="center">طلب تعديل بيان</TableCell>
                    <TableCell align="center">الاسم</TableCell>
                    <TableCell align="center">رقم السيارة / نوعها</TableCell>
                    <TableCell align="center">سبب الزيارة</TableCell>
                    <TableCell align="center">الجهة التابع لها</TableCell>
                    <TableCell align="center">رقم البطاقة</TableCell>
                    <TableCell align="center">السجل</TableCell>
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
                        <GateEditModal SingelVisitDate={row.visitId} />
                      </TableCell>
                      <TableCell align="center">{row.visitors[0].visitorName}</TableCell>
                      <TableCell align="center">
                        {row.cars[0].plateNumbers.length === 0 || (row.cars[0].plateNumbers[0] === '' && row.cars[0].plateNumbers[1] === '')
                          ? row.cars[0].carName
                          : `${row.cars[0].plateNumbers[0]}/${row.cars[0].plateNumbers[1]}`
                        }
                      </TableCell>
                      <TableCell align="center">{row.visitReason}</TableCell>
                      <TableCell align="center">{row.entityName}</TableCell>
                      <TableCell align="center">{row.visitors[0].visitorCardId}</TableCell>
                      <TableCell align="center">{row.createdBy}<ArrowBack />{row.lastModifiedBy}</TableCell>
                      <TableCell align="center">
                        {/* <Button
                      variant="contained"
                      color="success"
                      endIcon={<CarRentalIcon />}
                    >
                      <span className="mx-2">دخول</span>
                    </Button> */}
                        <EnterVisit visitId={row.visitId} />
                        {/* <Button
                      variant="contained"
                      color="error"
                      className="mx-3 my-2"
                      endIcon={<LogoutIcon />}
                    >
                      <span className="mx-2">خروج</span>
                    </Button> */}
                        <LeaveVisit visitId={row.visitId} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
      }
    </>
  );
};
const MemoizedGateTable = React.memo(GateTable);
export default MemoizedGateTable;
