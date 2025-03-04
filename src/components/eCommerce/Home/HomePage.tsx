import styles from "./styles.module.scss";
import lumeiIMG from "@assets/imgs/home/text.png";
import women1 from "@assets/imgs/home/women1.jpg";
import women2 from "@assets/imgs/home/women2.jpg";
import Nike from "@assets/SVG/clothesBrands/Nike.svg?react";
import Chanel from "@assets/SVG/clothesBrands/Chanel.svg?react";
import Gucci from "@assets/SVG/clothesBrands/Gucci.svg?react";
import Reebok from "@assets/SVG/clothesBrands/Reebok.svg?react";
import Under_Armour from "@assets/SVG/clothesBrands/Under_Armour.svg?react";
import Balenciaga from "@assets/SVG/clothesBrands/Balenciaga.svg?react";
import fashionWomen from "@assets/imgs/home/images.jpg";
import womenBag from "@assets/imgs/home/womenbag.jpg";
import fashonwomen2 from "@assets/imgs/home/images2.jpg";

const Home = () => {
  const {
    HSec1,
    HomeSecTitle,
    HSec2,
    HSec2Wrapper,
    HSec2Title,
    WeekDeals,
    weekDeals_title,
    weekDeals_numbers,
    Deal,
    DealTitle,
    DealNum,
    Partners,
    Brands,
    BrandLogo,
    partnersSecHeader,
    bigSalesSec,
    bigSalesContainer,
    bigSalesContainer3Edit,
    bigSalesContainer3Title,
  } = styles;
  return (
    <>
      <section className={HSec1}>
        <div className={HomeSecTitle}>
          <img src={lumeiIMG} alt="lumei" loading="lazy" />
          <p>Fashion Store Made By M.Ashraf</p>
        </div>
      </section>

      <section className={HSec2}>
        <div className={HSec2Wrapper}>
          <img src={women1} alt="img" width="100%" />
          <img src={women2} alt="img" width="100%" />
        </div>

        <div className={HSec2Title}>
          <p>Shopping around the city</p>
          <p>Trends From Around The World !</p>
          <a href="#">Explore Now</a>
        </div>
      </section>

      <section className={WeekDeals}>
        <div className={weekDeals_title}>
          <h5>Deals Of The Week</h5>
          <p>Elevate every look with these execlusive deals</p>
          <a href="#">See More</a>
        </div>
        <div className={weekDeals_numbers}>
          <div className={Deal}>
            <span className={DealNum}>340</span>
            <span className={DealTitle}>Days</span>
          </div>
          <div className={Deal}>
            <span className={DealNum}>23</span>
            <span className={DealTitle}>Hours</span>
          </div>
          <div className={Deal}>
            <span className={DealNum}>3</span>
            <span className={DealTitle}>Minutes</span>
          </div>
          <div className={Deal}>
            <span className={DealNum}>45</span>
            <span className={DealTitle}>Seconds</span>
          </div>
        </div>
      </section>

      <section className={Partners}>
        <h2 className={partnersSecHeader}>Our Partners</h2>
        <div className={Brands}>
          <div className={BrandLogo}>
            <Nike width="100%" height="100%" />
          </div>
          <div className={BrandLogo}>
            <Balenciaga width="100%" height="100%" />
          </div>
          <div className={BrandLogo}>
            <Under_Armour width="100%" height="100%" />
          </div>
          <div className={BrandLogo}>
            <Reebok width="100%" height="100%" />
          </div>
          <div className={BrandLogo}>
            <Gucci width="100%" height="100%" />
          </div>
          <div className={BrandLogo}>
            <Chanel width="100%" height="100%" />
          </div>
        </div>
      </section>

      <section className={bigSalesSec}>
        <div className={bigSalesContainer}>
          <img src={fashionWomen} alt="fashonwomen" />
        </div>
        <div className={bigSalesContainer}>
          <img src={womenBag} alt="fashonwomen" />
        </div>
        <div className={`${bigSalesContainer} ${bigSalesContainer3Edit}`}>
          <div className={bigSalesContainer3Title}>
            <span>strolling around</span>
            <p>BIG SALES</p>
            <span>Elevate every look with these execlusive wear</span>
            <a href="#">See More</a>
          </div>
          <img src={fashonwomen2} alt="fashonwomen" />
        </div>
      </section>
    </>
  );
};

export default Home;
