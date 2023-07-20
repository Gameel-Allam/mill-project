import { Button } from "@mui/material"
import LogoutIcon from "@mui/icons-material/Logout";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { exitVisit } from "../../../../features/scale/ScaleActions";
const LeaveVisit = ({ visitId }) => {
    const dispatch = useDispatch();
    const generateTimeNow = () => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return `${hours}:${minutes}:${seconds}`;
    };
    const handleExit = () => {
        const timeNow = generateTimeNow();
        dispatch(exitVisit({ timeNow, visitId }));
    }
    return (
        <>
            <Button
                variant="text"
                color="error"
                endIcon={<LogoutIcon />}
                onClick={handleExit}
            >
            </Button>
        </>
    )
}

export default LeaveVisit

LeaveVisit.propTypes = {
    visitId: PropTypes.number.isRequired,
}
