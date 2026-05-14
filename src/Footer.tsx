export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Resources Section */}
        <div className="footer-column">
          <h4>RESOURCES</h4>
          <ul>
            <li>
              <a href="#">Application</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Systems</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Pricing Section */}
        <div className="footer-column">
          <h4>PRICING</h4>
          <ul>
            <li>
              <a href="#">Overview</a>
            </li>
            <li>
              <a href="#">Premium Plans</a>
            </li>
            <li>
              <a href="#">Affiliate Program</a>
            </li>
            <li>
              <a href="#">Promotions</a>
            </li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="footer-column">
          <h4>COMPANY</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Partnerships</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="footer-column">
          <h4>SOCIAL</h4>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Bottom Footer Area */}
      <div className="footer-bottom">
        <p>© 2026 My Awesome App. All rights reserved.</p>
      </div>
    </footer>
  );
}
