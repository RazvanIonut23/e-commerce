import React from "react";
import s from "./Footer.module.css";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <div className={s.footerRoot}>
      <div className={s.title}>Created by Guster Razvan</div>
      <div className={s.socials}>
        <a href="mailto:gusterrazvan@gmail.com">
          <EmailRoundedIcon className={s.socialIcon} />
        </a>
        <a
          href="https://www.linkedin.com/in/razvan-guster-786440215/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon className={s.socialIcon} />
        </a>
        <a
          href="https://github.com/RazvanIonut23"
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon className={s.socialIcon} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
