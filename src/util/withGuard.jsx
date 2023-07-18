import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const withGuard = (Component) => {
  const Wrapper = (props) => {
    const naviagte = useNavigate();
    const { loggedIn } = useSelector((state) => state.auth);
    console.log(loggedIn);
    useEffect(() => {
      loggedIn || naviagte("/");
    }, [loggedIn, naviagte]);
    return loggedIn ? <Component {...props} /> : "";
  };
  return Wrapper;
};

export default withGuard;
