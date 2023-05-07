import { useState } from "react";
import styles from "./login-layout.module.scss";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { startTransition } from "react";

const LoginLayout = () => {
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
    // console.log(formData);
    if (formData.username == "gate")
      startTransition(() => {
        navigate("/gate");
      });
    else if (formData.username == "scale")
      startTransition(() => {
        navigate("/scale");
      });
    else if (formData.username == "reviewer")
      startTransition(() => {
        navigate("/reviewer");
      });
    else if (formData.username == "manager")
      startTransition(() => {
        navigate("/manager");
      });
    else
      startTransition(() => {
        navigate("/");
      });
  };

  return (
    <main className={styles.main}>
      <form className={styles.leftSection} onSubmit={handleSubmit}>
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
          <InputLabel htmlFor="standard-adornment-password">
            كلمة السر
          </InputLabel>
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
      </form>
      <section className={styles.rightSection}>
        <p>الشركة القابضة للصوامع صوامع منوف</p>
      </section>
    </main>
  );
};

export default LoginLayout;
