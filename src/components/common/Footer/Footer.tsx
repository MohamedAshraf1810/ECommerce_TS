import styles from "./styles.module.scss";

const { footerContainer } = styles;

const Footer = () => {
  return (
    <>
      <div className={footerContainer}>
        &copy; 2024 Our eCom. All rights reserved.
      </div>
    </>
  );
};

export default Footer;
