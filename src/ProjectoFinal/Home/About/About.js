import foto1 from "./foto/about1.png";
import "./About.css";



function About() {
  return (
    <div className="about_container">
      <h2 className="textcenter marginbottomfull">About</h2>
      <div className="gridrow">
        <div className="col-12 col-t-6">
          <img src={foto1} alt="" />
        </div>
        <div className="col-12 col-t-6 about">
          <p className="margintopnone">
            The partnership between renowned Japanese fashion designer, Yohji
            Yamamoto and authentic sports brand, Adidas, has revolutionized the
            industry. Adidas represents sport, Yohji Yamamoto represents design,
            and both symbolize true craftsmanship. Together they have developed
            the future in sportswear.
          </p>
          <p>
            <span className="fancytext">Adidas and Yamamoto together since</span>
            October 2002
          </p>
          <p className="marginbottomnone">
            <span className="fancytext">The symbols</span>
            The "Y" stands for Yohji Yamamoto
            <br />
            The "3" represents the signature Adidas three stripe logo
            <br />
            the "-" signifies the link between the two
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default About;
