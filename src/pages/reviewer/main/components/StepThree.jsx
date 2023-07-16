import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { Form, Formik, useFormik } from 'formik';
import PropTypes from 'prop-types';


const rows = [
  {
    cellNumber: 1,
    cellName: 'ايريكا',
    quantity: 100,
  },
  {
    cellNumber: 2,
    cellName: 'ايريكا',
    quantity: 100,
  },
];

const initvalues={
    cellData:{
        cellNumber: 1,
        cellName: 'ايريكا',
        quantity: 100,
    }
  }
export default function StepThree({handleSubmit}) {
    // const onSubmit=()=>{
    //     console.log(formik.values)
    //   };
    const formik=useFormik({
        initialValues:initvalues,
        onSubmit:handleSubmit,
        isSubmitting:false,
      })
  return (
    <Formik
    initialValues={formik.initialValues }
    onSubmit={handleSubmit}
  >
    <Form>
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">رقم الخلية</TableCell>
            <TableCell align="right">نوع القمح</TableCell>
            <TableCell align="right">الكمية المتاحة</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="cellData.cellNumber"
            key={row.name}
            >
            <TableRow
              sx={{
                '&:last-child td, &:last-child th': { border: 0 },
                borderTop: index === 0 ? '1px solid rgba(224, 224, 224, 1)' : 'none',
              }}
            >
              <TableCell align="right">
              <FormControlLabel value= {row.cellNumber} control={<Radio />} label= {row.cellNumber} />
                </TableCell>
              <TableCell align="right">{row.cellName}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
            </TableRow>
            </RadioGroup>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Form>
    </Formik>
  );
}
StepThree.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    };
