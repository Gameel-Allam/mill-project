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
// import "../../styles/gateStyle/gate.css";
import GateEditModal from "./GateEditModel";
// import ScaleEditModal from '../scaleComponents/scaleEditModal';
import styles from "./GateTable.module.scss";
const GateTable = () => {
  const rows = [
    {
      name: "محمد عبد السلام",
      calories: "15647 / 35569",
      fat: "مشروع تخرج لطلاب هندسة منوف",
      carbs: "الشركة القابضة للصوامع",
      protein: 3000012345678965,
    },
    {
      name: "محمد عبد السلام",
      calories: "15647 / 35569",
      fat: "مشروع تخرج لطلاب هندسة منوف",
      carbs: "الشركة القابضة للصوامع",
      protein: 3000012345678965,
    },
    {
      name: "محمد عبد السلام",
      calories: "15647 / 35569",
      fat: "مشروع تخرج لطلاب هندسة منوف",
      carbs: "الشركة القابضة للصوامع",
      protein: 3000012345678965,
    },
    {
      name: "محمد عبد السلام",
      calories: "15647 / 35569",
      fat: "مشروع تخرج لطلاب هندسة منوف",
      carbs: "الشركة القابضة للصوامع",
      protein: 3000012345678965,
    },
  ];
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
                    <GateEditModal />
                  </TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.calories}</TableCell>
                  <TableCell align="center">{row.fat}</TableCell>
                  <TableCell align="center">{row.carbs}</TableCell>
                  <TableCell align="center">{row.protein}</TableCell>
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
