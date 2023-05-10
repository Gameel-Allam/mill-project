import { NavLink, useNavigate } from "react-router-dom";
import styles from "./sidbar.module.scss";

const Sidbar = () => {
  const navigate = useNavigate();
  const handleExit = () => {
    navigate("/");
  };
  return (
    <nav className={styles.mySidebar}>
      <section>
        <p>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending || isActive ? styles.active : ""
            }
            to=""
            end
          >
            المراحعة الرئيسية
          </NavLink>
        </p>
      </section>
      <section>
        <p>اضافة برنامج</p>
        <ul>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending || isActive ? styles.active : ""
              }
              to="program/sessions"
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/3751/ca4e/ff3f8af20d331c08c9940ae68ac98cb7?Expires=1684713600&Signature=pssDT5de8dr4NJXhcaTThU7AXhstyCnwldPKBPcp3qJeQtQ8NgEAN3xKxlBrXtQ8tQOCf-o2E0v5-UAaEBjY1qRsUIQfXFpyBr~IcllUx0Spkgb1AaAPvZW3VmnGvM8llBn6oV4no-pLNsLFQPlAO8XnhyrruhvJkmiG6akoO4m-PKJFzaiJGW7t0ODVLccqf3UkTupBTBM54TB8uIpArAVs~-1y6O8Ao3kXnSWpBUj95vxzfNkTD2560vtJLNCjg7SU14rqnG-Xbp3krfe5TtdF~6jFs3gi3mJRZOzUkAKLNVIltO4yozommcK4PPT3aTMM9WNMYlBqtRqQ5cnTig__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="session img"
              />
              جلسات
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending || isActive ? styles.active : ""
              }
              to="program/mills"
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/0756/3467/15ecaea2b1c7e96d173477fedd9fdef6?Expires=1684713600&Signature=EtaST77SKLd7H0vwB5wJMYSyetXnvJ2p3rXh6FtKZpgFBl8HVb7y4o7fHdr-zP5gkGnUzDMiJmdZ1WJ-0tCla5qiznukdXVv8LdtYJcC5Cw3wqwiQJ-jEz4VhuXUX9fxTjNavbvmBTTagCTylyymI~Iqb9fSzMmFUfR8Nvwau6orJIdOIS39DsxliLbO3Sc00O4bVcFpZ~JJ3y23qlb-qn4jKJYGcuIwrzc4K-2djmTNLzAXBQ7iIB1i6rkHhc7rBPDBkKOgd0--1rMphIebALi6RmNrfQ~EgrJTHeDMzLXJQ8vjQDxxpsbyLCFDONnmtXd7IFqEieUZMX8uG2~8pQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="mills img"
              />
              مطاحن
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending || isActive ? styles.active : ""
              }
              to="program/wheat"
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/5b4d/5825/83f78e48f575f37dcaefc82202b6a2ca?Expires=1684713600&Signature=XG7PJXa4gOfITaIOki9gDioIu45mkePtXy0GZ63yeatrwQEWcH5OYIvmDH252Vrfh1kmCXAMRjd3gag0puqqK61hLpxyrbDSMltikDzhE0MGpPvQJk6oGFobK10twRILYntkGj0aKLGdYDdFwXjROK-IK5EpOKD-bGIwiyERTdclYNN2GOYnJPYuoTthc4ZXxiw5bTzHc-v4kww0ImoJzswMaO3UsBKiyH16qQNouiJ-78NJSAkxGfx9n~cBxWqXcqXXungDZ~ea6Ohn4szP7tTYU8DJiA1xT2hTHAxcTLCrDuv-6URjYYk70o1PB1VO4tVoQ89aZoRPax-DpOdsNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="wheat img"
              />
              القمح المحلى
            </NavLink>
          </li>
        </ul>
      </section>
      <section>
        <p>معلومات</p>
        <ul>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending || isActive ? styles.active : ""
              }
              to="info/wheat"
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/5b4d/5825/83f78e48f575f37dcaefc82202b6a2ca?Expires=1684713600&Signature=XG7PJXa4gOfITaIOki9gDioIu45mkePtXy0GZ63yeatrwQEWcH5OYIvmDH252Vrfh1kmCXAMRjd3gag0puqqK61hLpxyrbDSMltikDzhE0MGpPvQJk6oGFobK10twRILYntkGj0aKLGdYDdFwXjROK-IK5EpOKD-bGIwiyERTdclYNN2GOYnJPYuoTthc4ZXxiw5bTzHc-v4kww0ImoJzswMaO3UsBKiyH16qQNouiJ-78NJSAkxGfx9n~cBxWqXcqXXungDZ~ea6Ohn4szP7tTYU8DJiA1xT2hTHAxcTLCrDuv-6URjYYk70o1PB1VO4tVoQ89aZoRPax-DpOdsNA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="wheat img"
              />
              قمح
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending || isActive ? styles.active : ""
              }
              to="info/mills"
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/0756/3467/15ecaea2b1c7e96d173477fedd9fdef6?Expires=1684713600&Signature=EtaST77SKLd7H0vwB5wJMYSyetXnvJ2p3rXh6FtKZpgFBl8HVb7y4o7fHdr-zP5gkGnUzDMiJmdZ1WJ-0tCla5qiznukdXVv8LdtYJcC5Cw3wqwiQJ-jEz4VhuXUX9fxTjNavbvmBTTagCTylyymI~Iqb9fSzMmFUfR8Nvwau6orJIdOIS39DsxliLbO3Sc00O4bVcFpZ~JJ3y23qlb-qn4jKJYGcuIwrzc4K-2djmTNLzAXBQ7iIB1i6rkHhc7rBPDBkKOgd0--1rMphIebALi6RmNrfQ~EgrJTHeDMzLXJQ8vjQDxxpsbyLCFDONnmtXd7IFqEieUZMX8uG2~8pQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="mills img"
              />
              مطاحن
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending || isActive ? styles.active : ""
              }
              to="info/cells"
            >
              <img
                src="https://s3-alpha-sig.figma.com/img/7613/febb/041f5172f5ea6e9ff4f10f7d0ca907b6?Expires=1684713600&Signature=CO1TXoAEeDc5OWwHJl0ElR0zzeCp-pzkS8Y8yBcfEmbJGjQK9p33FHFg53M1oXPRL7KjbW2OVgMxy2OYw7En3uK89TeBN0Gx7MLcnjbNQolTIOoZNnyikBM5nJ39lC2KAMewaSitpEPq-PuoUjWd3ONFNGd6oEUjGr8B2Et6ZqFSnm3iJofec-mYhTD0WGt2gVIDP7nM6Q5xORpgbX07nEFPUwsJTgHvTYfNSIRJ~mYfnR0v230QKmaeEGG~-58YIe4~D1RUhPuHvHvWK5toJWEmUwU-77GBLhNzIk2uoTn8zfEu5SglGQaE-Pz2mdYrkVeMRvuFCsmEcvmnIOoKBw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                alt="cells img"
              />
              خلايا
            </NavLink>
          </li>
        </ul>
      </section>
      <section className={styles.userInfo}>
        <img
          src="https://s3-alpha-sig.figma.com/img/b2f2/54a4/dd44cf9735b84c8043f9c601196d2142?Expires=1684713600&Signature=CtEBbAYeDT7AV-lA-MMFGT7yx0a8~AG7928JZOQOhmxz8ZUPFsiA7P82H9AjFHnRcibGeeZzePS2vvrDGBTK2ztfocxqqFMfmZaDN5SzKhce2DHtjW4UH~7QnQIlx~F0Npd4v40EPaQF3FJbkbhpuqCxJhlHwr-7TMfRTi34qgmG2Vm7rlwCdmoEeKymOZEGuWVmCKWqlsohoB9YyzUs-Iz74quFMp2omkaTjAqmS8oBGTrFHxOufv-k8LkukLgBeuhwT7RoVbr-nz9iux4oPZh9xaV0FwwSF-JzQhHY6EmEX2tXwusWObocGTvkyhvb~B-mG-MQ-Rtv~939JwU0Yg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
          alt="user"
        />
        <p>
          احمد طه
          <br />
          ahmed5545
        </p>
        <p onClick={handleExit}>
          تسجيل الخروج
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#000"
              viewBox="0 0 256 256"
            >
              <path d="M112,216a8,8,0,0,1-8,8H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h56a8,8,0,0,1,0,16H48V208h56A8,8,0,0,1,112,216Zm109.66-93.66-40-40A8,8,0,0,0,168,88v32H104a8,8,0,0,0,0,16h64v32a8,8,0,0,0,13.66,5.66l40-40A8,8,0,0,0,221.66,122.34Z"></path>
            </svg>
          </span>
        </p>
      </section>
    </nav>
  );
};

export default Sidbar;
