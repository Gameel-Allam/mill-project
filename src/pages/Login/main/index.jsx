import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "/src/features/login/authActions";
import { useDispatch, useSelector } from "react-redux";
// Componets
import { BarLoader } from "react-spinners";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, loggedIn } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (e) => e.preventDefault();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    dispatch(checkAuth(formData));
  };

  useEffect(() => {
    if (loggedIn) navigate("/gate");
    else navigate("/");
  }, [loggedIn, navigate]);

  return (
    <form className={styles.leftSection} onSubmit={handleSubmit}>
      <p>تسجيل الدخول </p>
      <FormControl sx={{ mb: 5, width: "50ch" }} variant="standard">
        <TextField
          id="standard-basic"
          label="اسم المستخدم"
          variant="standard"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </FormControl>
      <FormControl sx={{ mb: 7, width: "50ch" }} variant="standard">
        <InputLabel htmlFor="standard-adornment-password">كلمة السر</InputLabel>
        <Input
          id="standard-adornment-password"
          value={formData.password}
          onChange={handleChange}
          name="password"
          type={showPassword ? "text" : "password"}
          required
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
        {loading ? <BarLoader color="#f5f5f5" /> : "تسجيل الدخول "}
      </button>
      <a href="check-code">استعادة كلمة السر</a>
    </form>
  );
};

export default LoginForm;
