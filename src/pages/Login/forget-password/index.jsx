import styles from "./index.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import withGuard from "/src/util/withGuard";
import { createPassword } from "/src/features/login/authActions";
import { useDispatch, useSelector } from "react-redux";

// Componets
import { BarLoader } from "react-spinners";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const LoginForgetPassword = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    console.log([...Object.values(formData)])
    dispatch(createPassword([...Object.values(formData)])).then(() => navigate("/"));
  };

  return (
    <form className={styles.leftSection} onSubmit={handleSubmit}>
      <p>انشاء كلمة سر</p>
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
      <FormControl sx={{ mb: 7, width: "50ch" }} variant="standard">
        <InputLabel htmlFor="standard-adornment-password">
          تاكيد كلمة السر
        </InputLabel>
        <Input
          id="standard-adornment-password123"
          value={formData.confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
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
        {loading ? <BarLoader color="#f5f5f5" /> : "تاكيد"}
      </button>
    </form>
  );
};

export default withGuard(LoginForgetPassword);
