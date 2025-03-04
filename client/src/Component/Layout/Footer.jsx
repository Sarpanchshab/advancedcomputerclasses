function Footer() {
  return (
    <>
    <div>
    {/*  Start footer  */}
  <footer id="mu-footer">
    {/*  start footer top */}
    <div className="mu-footer-top">
      <div className="container">
        <div className="mu-footer-top-area">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="mu-footer-widget">
                <h4>Information</h4>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="">Features</a></li>
                  <li><a href="">Course</a></li>
                  <li><a href="">Event</a></li>
                  <li><a href="">Sitemap</a></li>
                  <li><a href="">Term Of Use</a></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="mu-footer-widget">
                <h4>Student Help</h4>
                <ul>
                  <li><a href="">Get Started</a></li>
                  <li><a href="#">My Questions</a></li>
                  <li><a href="">Download Files</a></li>
                  <li><a href="">Latest Course</a></li>
                  <li><a href="">Academic News</a></li>                  
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="mu-footer-widget">
                <h4>News letter</h4>
                <p>Get latest update, news & academic offers</p>
                <form className="mu-subscribe-form">
                  <input type="email" placeholder="Type your Email"/>
                  <button className="mu-subscribe-btn" type="submit">Subscribe!</button>
                </form>               
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3">
              <div className="mu-footer-widget">
                <h4>Contact</h4>
                <address>
                  <p>Infront of Dr. M.D. Gupta , Rajeshwari Road, Shankar Colony, Shivpuri, Madhya Pradesh , 4735551 </p>
                  <p>Phone: +91 7974249633 </p>
                  <p>Website: www.advancedcomputerclasses.in</p>
                  <p>Email: apusprajapati@gmail.com</p>
                </address>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*  end footer top  */}
    {/* start footer bottom */}
    <div className="mu-footer-bottom">
      <div className="container">
        <div className="mu-footer-bottom-area">
          <p>&copy; All Right Reserved. Designed by <a href="http://www.markups.io/" rel="nofollow">MarkUps.io</a></p>
        </div>
      </div>
    </div>
    {/*end footer bottom */}
  </footer>
  </div>
  {/* End footer */}
  
    
    </>
  )
}

export default Footer
