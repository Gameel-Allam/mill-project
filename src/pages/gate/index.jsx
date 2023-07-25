import { useState } from "react";
import MemoizedGateTable from "./components/GateTable";
// import GateTable from "./components/GateTable";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './components/GateTable.module.scss';

const Gateindex = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleChange = (date) => {
    console.log(date)
    setSelectedDate(date);
  };
  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        placeholderText={new Date().toLocaleDateString('en-GB', { year: 'numeric', month: 'numeric', day: 'numeric' })}
        aria-label="data picker"
        dateFormat={"dd/MM/yyyy"}
        className={`${styles.datePicker} my-2 mx-3`}
        maxDate={new Date()}
        showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={15}


      />
      <MemoizedGateTable />
    </div>
  );
};

export default Gateindex;
