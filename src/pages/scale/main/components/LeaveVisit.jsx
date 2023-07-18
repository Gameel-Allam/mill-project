import { Button } from "@mui/material"
import LogoutIcon from "@mui/icons-material/Logout";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { exitVisit } from "../../../../features/scale/ScaleActions";
const LeaveVisit = ({visitId}) => {
    const dispatch = useDispatch();
    const generateTimeNow = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return `${hours}:${minutes}:${seconds}`;
    };
    const handleExit = () => {
        const timeNow=generateTimeNow();
        dispatch(exitVisit({timeNow,visitId}));
    }
  return (
    <>
        <Button
        variant="outlined"
        color="error"
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
    visitId: PropTypes.string.isRequired,
}
