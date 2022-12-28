import "./Footer.css";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_group">
        <h3>Categories</h3>
        <p>About Us</p>
        <p>Testimonials</p>
        <p>Contact</p>
        <p>Journal</p>
        <p>Privacy Policy</p>
      </div>

      <div className="footer_group">
        <h3>Partners</h3>
        <p>Support</p>
        <p>Shipping & Retirns</p>
        <p>Size Guide</p>
        <p>Product Care</p>
      </div>

      <div className="footer_group">
        <h3>Contact us</h3>
        <p>Adi-Dassler-Strasse 1 91074 Herzogenaurach Germany</p>
        <p>+49 (0) 9132 84-0</p>
      </div>

      <div className="footer_newsletter">
        <h3>Subscrine to newsletter</h3>
        <div className="footer_btn">
        <button>Enter your email</button>
        <button>SUBSCRIBE</button>
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
