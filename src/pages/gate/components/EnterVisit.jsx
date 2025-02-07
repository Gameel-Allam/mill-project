import { Button } from "@mui/material";
import CarRentalIcon from "@mui/icons-material/CarRental";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { enterVisit } from "../../../features/gate/GateActions";
const EnterVisit = ({ visitId }) => {
  const dispatch = useDispatch();
  const generateTimeNow = () => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`)
    return `${hours}:${minutes}:${seconds}`;

    // try {
    //     const response = await fetch('http://worldtimeapi.org/api/ip');
    //     const data = await response.json();
    //     const { datetime } = data;
    //     const time = new Date(datetime);
    //     const hours = String(time.getHours()).padStart(2, '0');
    //     const minutes = String(time.getMinutes()).padStart(2, '0');
    //     const seconds = String(time.getSeconds()).padStart(2, '0');
    //     console.log(`${hours}:${minutes}:${seconds}`); // or do whatever you want with the current time
    //     const timeNow= `${hours}:${minutes}:${seconds}`;
    //     return timeNow;
    //   } catch (error) {
    //     console.log('Error fetching time:', error);
    //   }
  };
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = `${today.getMonth() + 1}`.padStart(2, '0');
    const day = `${today.getDate()}`.padStart(2, '0');
    const currentDate = `${year}-${month}-${day}`;
    return currentDate;
  }
  const handleEnter = () => {
    const timeInfo = generateTimeNow();
    dispatch(enterVisit({ timeInfo, visitId }));
    const dateToday = getCurrentDate();
    console.log(dateToday, "date today")
  }
  return (
    <>
      <Button
        variant="outlined"
        color="success"
        endIcon={<CarRentalIcon />}
        onClick={handleEnter}
      >
        <span className="mx-2">دخول</span>
      </Button>
    </>
  )
}

export default EnterVisit

EnterVisit.propTypes = {
  visitId: PropTypes.number.isRequired,
}