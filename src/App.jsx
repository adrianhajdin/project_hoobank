import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import uparrowimg from "./assets/uparrow.png";
import { useEffect, useState } from "react";

const App = () => {

  const [showTopButton, setshowTopButton] = useState(false)

  const handleScrollToTopEvent=()=>{
    window.scrollTo({top:0 , behavior:'smooth'});
  }

  useEffect(() => {
    const handleTopEvent=()=>{
      window.pageYOffset>300 ? setshowTopButton(true) :setshowTopButton(false);
    }

    window.addEventListener('scroll',handleTopEvent);

  
    return () => {
      window.removeEventListener('scroll',handleTopEvent);
    }
  }, []);

  return(
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>

    {showTopButton && (
        <div>
          <button className=' bg-blue-gradient rounded-full fixed bottom-8 right-8 z-50 cursor-pointer p-2.5' onClick={handleScrollToTopEvent}>
            <img className='w-[30px] h-[30px]' src={uparrowimg} alt='up'/>
          </button>
        </div>
      )}
  </div>
  );
};

export default App;
