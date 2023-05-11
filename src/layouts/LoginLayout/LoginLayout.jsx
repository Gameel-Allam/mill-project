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
    if (formData.username == "gate") navigate("/gate");
    else if (formData.username == "scale") navigate("/scale");
    else if (formData.username == "reviewer") navigate("/reviewer");
    else if (formData.username == "manager") navigate("/manager");
    else navigate("/");
  };

  return (
    <main className={styles.main}>
      <form className={styles.leftSection} onSubmit={handleSubmit}>
        <img
          src="https://s3-alpha-sig.figma.com/img/b413/3252/c75652133039f98d592a8087ce509468?Expires=1684713600&Signature=h60ogY3xQCUMk53mgEaA0scSlSVBksbFC6EgZRDrixTLA0Kp86i1jF3aVldgPyDwDU879Xbe6ygo0oe7Cg0xeFR03UuNTWyUEfLDDG6bxP9xSijgtBeOsjxqv7yE8xAJlyLzKNfeUrx41UhWV3HGECNrvTfS9vnfmHkat4CcHYgxebBIfj54jHZ4-~rmSH49f3gLfcxR~UiK4i8WIBm1rae0ZMkmrsYcV6qPUcHVzGTA4ky0H54SRr2v0gOs2WEtWWuf4WgiTbtQwU0LiM79TOy03Fd6m0OOJAI6KJZg4~thz5Mxac7OYKa~iE66yYE8rAnX62HIvTO7z3yoqqt2-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="Componey logo"
        />
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
        <img
          src="https://s3-alpha-sig.figma.com/img/4e68/8d50/2fc7faf47c4bbd71c62c3a9b79f34710?Expires=1684713600&Signature=iXQGmwWdm7q~9w-EsjEZnCF5xKunP6QXp2Jsm9qVD0lVg5IFL8G0yEYpqyc~MUayfIq468ESPtVF9LBz9yZsmldQqlnyPYayXd220d7P3ijCxjsFeOcrPclgoejNLzKf6cqAzU42eSRDCLfqTYyGzWzPV5kMIBbWdd-YZ5Y0pu-tG95k1e-zbhYlrl1wCmJnIQH10MxRtcrGD4VUwo8DZK~BMDfESGd8h4MRgqNg-JpZznd2v5L3TwiY1Gzx~e65nEZH1SW~EkPja~f0LeRCJ04UpTmXQwWHuViBqFQhdrI5NtsEhIfh2QocKIgh-bQ7GjFpOVY1R3XO7W9B9pKRHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="government logo"
        ></img>
        <p>
          الشركة القابضة للصوامع
          <br />
          صوامع منو
          <span>ف</span>
        </p>
      </section>
    </main>
  );
};

export default LoginLayout;
