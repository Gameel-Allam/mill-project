import { Button } from "@mui/material"
import LogoutIcon from "@mui/icons-material/Logout";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { exitVisit } from "../../../features/gate/GateActions";
const LeaveVisit = ({ visitId }) => {
  const dispatch = useDispatch();
  const generateTimeNow = () => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`)
    return `${hours}:${minutes}:${seconds}`;
  };
  const handleExit = () => {
    const timeInfo = generateTimeNow();
    dispatch(exitVisit({ timeInfo, visitId }));
  }
  return (
    <>
      <Button
        variant="outlined"
        color="error"
        className="mx-3 my-2"
        endIcon={<LogoutIcon />}
        onClick={handleExit}
      >
        <span className="mx-2">خروج</span>
      </Button>
    </>
  )
}

export default LeaveVisit

LeaveVisit.propTypes = {
  visitId: PropTypes.number.isRequired,
}