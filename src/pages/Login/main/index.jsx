import styles from "./index.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.username == "gate") navigate("/gate");
    else if (formData.username == "scale") navigate("/scale");
    else if (formData.username == "reviewer") navigate("/reviewer");
    else if (formData.username == "manager") navigate("/manager");
    else navigate("/");
  };

  return (
    <form className={styles.leftSection} onSubmit={handleSubmit}>
      <img src="/src/assets/compony-logo.png" alt="Componey logo" />
      <p>تسجيل الدخول </p>
      <FormControl sx={{ mb: 5, width: "50ch" }} variant="standard">
        <TextField
          id="standard-basic"
          label="اسم المستخدم"
          variant="standard"
          name="username"
          value={formData.username}
          onChange={handleChange}
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
      <button type="submit">تسجيل الدخول </button>
      <a href="check-code">استعادة كلمة السر</a>
    </form>
  );
};

export default LoginForm;
