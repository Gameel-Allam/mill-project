import Table from "@mui/material/Table";
import styles from "./scale.module.scss";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ScaleAddModal from "./ScaleAddModal";
import ScaleEditModal from "./ScaleEditModal";
import LeaveVisit from "./LeaveVisit";
import EnterVisit from "./EnterVisit";
import { Button } from "@mui/material";
import { ArrowRightAltSharp, SafetyCheckOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAllVisits } from "../../../../features/scale/ScaleActions";
import { BeatLoader } from "react-spinners";
const Scaletable = () => {
  const dispatch = useDispatch();
  const { loading, error, visitAllData, pageInfo } = useSelector(state => state.scale);
  console.log(visitAllData, "loading from table")
  useEffect(() => {
    dispatch(getAllVisits({ size: 10, pageNumber: pageInfo["current-page"] || 0 }))
    console.log(getAllVisits, "Cdasd")
    // dispatch(getAllVisits({ size: 10, pageNumber: currentPage }))
  }, [dispatch])
  const rows = visitAllData;
  const navigate = useNavigate();
  const handelEntites = () => {
    navigate("/scale/mills")
  }
  const updatePage = () => {
    dispatch(getAllVisits({ size: 10, pageNumber: pageInfo["current-page"] || 0 }))
  }
  return (
    <div className="col-12">
      {
        loading ? <BeatLoader color="#3c44b1" loading={loading} size={30} className={styles.loading__spec} /> : error ? <img src="https://img.freepik.com/free-vector/500-internal-server-error-concept-illustration_114360-1924.jpg?w=2000" alt="internal-server-error" className={styles.server__error} /> :
          <div className={`container my-4 ${styles.gate__table}`}>
            <Button variant="outlined" color="success" className="my-2" startIcon={<ArrowRightAltSharp />} onClick={handelEntites}><span className="mx-2">عرض رصيد الجهات </span></Button>
            <Button variant="contained" color="error" className="my-2 mx-5" endIcon={<SafetyCheckOutlined />} onClick={updatePage}><span className="mx-2">تحديث البيانات</span></Button>
            <TableContainer component={Paper} className={styles.Gate__Table}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">اضافة بيان</TableCell>
                    <TableCell align="center">اسم المورد / المندوب</TableCell>
                    <TableCell align="center">الرقم القومي</TableCell>
                    <TableCell align="center">رقم السيارة / نوعها</TableCell>
                    <TableCell align="center">الوزن الصافي </TableCell>
                    <TableCell align="center">نوع الجهة</TableCell>
                    <TableCell align="center">الجهة / التاجر</TableCell>
                    <TableCell align="center">وزن بوليصة الشحن</TableCell>
                    <TableCell align="center">مقبول/مرفوض </TableCell>
                    <TableCell align="center">العمليات </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.visitId}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center" className={styles.special__field}>
                        <ScaleAddModal gateWheatVisit={row} />
                        <ScaleEditModal visitDate={row} />
                      </TableCell>
                      <TableCell align="center">{row.visitors[0]?.visitorName}</TableCell>
                      <TableCell align="center">{row.visitors[0]?.visitorCardId}</TableCell>
                      <TableCell align="center">
                        {row.cars[0]?.plateNumbers.length === 0 || (row.cars[0]?.plateNumbers[0] === '' && row.cars[0]?.plateNumbers[1] === '')
                          ? row.cars[0]?.carName
                          : `${row.cars[0]?.plateNumbers[0]}/${row.cars[0]?.plateNumbers[1]}`
                        }
                      </TableCell>

                      <TableCell align="center">{row.actualWeight}</TableCell>
                      <TableCell align="center">{row.entityType}</TableCell>
                      <TableCell align="center">{row.entityName}</TableCell>
                      <TableCell align="center">{row.shippedWeight}</TableCell>
                      <TableCell align="center">{row.acceptedOrRejected}</TableCell>
                      <TableCell align="center">
                        <EnterVisit visitId={row.visitId} />
                        <LeaveVisit visitId={row.visitId} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
      }
    </div>
  );
};

export default Scaletable;
