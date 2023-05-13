import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const handleExit = () => {
    navigate("/");
  };
  return (
    <nav className={styles.my_nav}>
      <img
        src="https://s3-alpha-sig.figma.com/img/b2f2/54a4/dd44cf9735b84c8043f9c601196d2142?Expires=1684713600&Signature=CtEBbAYeDT7AV-lA-MMFGT7yx0a8~AG7928JZOQOhmxz8ZUPFsiA7P82H9AjFHnRcibGeeZzePS2vvrDGBTK2ztfocxqqFMfmZaDN5SzKhce2DHtjW4UH~7QnQIlx~F0Npd4v40EPaQF3FJbkbhpuqCxJhlHwr-7TMfRTi34qgmG2Vm7rlwCdmoEeKymOZEGuWVmCKWqlsohoB9YyzUs-Iz74quFMp2omkaTjAqmS8oBGTrFHxOufv-k8LkukLgBeuhwT7RoVbr-nz9iux4oPZh9xaV0FwwSF-JzQhHY6EmEX2tXwusWObocGTvkyhvb~B-mG-MQ-Rtv~939JwU0Yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="user"
      />
      <p onClick={handleExit}>
        تسجيل الخروج
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#e8e8e8"
            viewBox="0 0 256 256"
          >
            <path d="M112,216a8,8,0,0,1-8,8H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h56a8,8,0,0,1,0,16H48V208h56A8,8,0,0,1,112,216Zm109.66-93.66-40-40A8,8,0,0,0,168,88v32H104a8,8,0,0,0,0,16h64v32a8,8,0,0,0,13.66,5.66l40-40A8,8,0,0,0,221.66,122.34Z"></path>
          </svg>
        </span>
      </p>
    </nav>
  );
};

export default Navbar;
