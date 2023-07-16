import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkCode } from "/src/features/login/authActions";
import { reset } from "../../../features/login/authSlice";

// Componets
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { BarLoader } from "react-spinners";

const LoginCodeCheck = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loggedIn, loading } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [formData, setFormData] = useState({
    username: "",
    code: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    dispatch(checkCode(formData))
      .unwrap()
      .then(() => {
        console.log("done");
        navigate("make-password");
      })
      .catch((data) => console.log(data));
  };
  useEffect(() => {
    if (loggedIn) navigate("make-password");
    return () => {
      dispatch(reset);
    };
  }, [loggedIn, navigate, dispatch]);

  return (
    <form className={styles.leftSection} onSubmit={handleSubmit}>
      <p>تاكيد المستخدم</p>
      <FormControl sx={{ mb: 5, width: "50ch" }} variant="standard">
        <TextField
          id="standard-basic"
          label="اسم المستخدم"
          variant="standard"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </FormControl>
      <FormControl sx={{ mb: 7, width: "50ch" }} variant="standard">
        <InputLabel htmlFor="standard-adornment-password">
          كود التغير
        </InputLabel>
        <Input
          required
          id="standard-adornment-password"
          value={formData.code}
          onChange={handleChange}
          name="code"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <button type="submit">
        {loading ? <BarLoader color="#f5f5f5" /> : "التالى"}
      </button>
    </form>
  );
};

export default LoginCodeCheck;
