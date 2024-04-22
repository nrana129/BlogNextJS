import React from "react";

const Footer = () => {
  return (
    <footer className="footer_dark">
      <div className="top_footer small_pt small_pb">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-sm-8 mb-4 mb-lg-0">
              <div className="footer_logo">
                <a className="page-scroll" href="index-19.html">
                  <img alt="logo" src="demo-blog/images/blog-logo_white.png" />
                </a>
              </div>
              <p>
                Phasellus blandit massa enim. elit id varius nunc. Lorem ipsum
                dolor sit amet, consectetur industry.
              </p>
              <ul className="contact_info contact_info_light list_none">
                <li>
                  <span className="ti-location-pin" />
                  <address>
                    123 Street, Old Trafford, New South London , UK
                  </address>
                </li>
                <li>
                  <span className="ti-email" />
                  <a href="mailto:info@sitename.com">info@sitename.com</a>
                </li>
                <li>
                  <span className="ti-mobile" />
                  <p>+ 457 789 789 65</p>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-sm-4 mb-4 mb-lg-0">
              <h6 className="widget_title text-uppercase">Useful Links</h6>
              <ul className="list_none widget_links_style2">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Feedback</a>
                </li>
                <li>
                  <a href="#">Support center</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Life Style</a>
                </li>
                <li>
                  <a href="#">Business</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
              <h6 className="widget_title text-uppercase">Recent Posts</h6>
              <ul className="recent_post border_bottom_solid list_none">
                <li>
                  <div className="post_footer">
                    <div className="post_img">
                      <a href="#">
                        <img
                          src="assets/images/letest_post1.jpg"
                          alt="letest_post1"
                        />
                      </a>
                    </div>
                    <div className="post_content">
                      <h6>
                        <a href="#">
                          Lorem ipsum dolor sit amet massa enim consectetur
                        </a>
                      </h6>
                      <p className="small m-0">April 14, 2018</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="post_footer">
                    <div className="post_img">
                      <a href="#">
                        <img
                          src="assets/images/letest_post2.jpg"
                          alt="letest_post2"
                        />
                      </a>
                    </div>
                    <div className="post_content">
                      <h6>
                        <a href="#">
                          Lorem ipsum dolor sit amet massa enim consectetur
                        </a>
                      </h6>
                      <p className="small m-0">April 14, 2018</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="post_footer">
                    <div className="post_img">
                      <a href="#">
                        <img
                          src="assets/images/letest_post3.jpg"
                          alt="letest_post3"
                        />
                      </a>
                    </div>
                    <div className="post_content">
                      <h6>
                        <a href="#">
                          Lorem ipsum dolor sit amet massa enim consectetur
                        </a>
                      </h6>
                      <p className="small m-0">April 14, 2018</p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6">
              <h6 className="widget_title text-uppercase">Populer Tags</h6>
              <div className="tags mb-4">
                <a href="#">General</a>
                <a href="#">Design</a>
                <a href="#">jQuery</a>
                <a href="#">Branding</a>
                <a href="#">Modern</a>
                <a href="#">Blog</a>
                <a href="#">Quotes</a>
                <a href="#">Advertisement</a>
              </div>
              <h6 className="widget_title text-uppercase">Follow us on</h6>
              <ul className="list_none social_icons radius_social">
                <li>
                  <a href="#" className="sc_facebook">
                    <i className="ion-social-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" className="sc_twitter">
                    <i className="ion-social-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" className="sc_gplus">
                    <i className="ion-social-googleplus" />
                  </a>
                </li>
                <li>
                  <a href="#" className="sc_youtube">
                    <i className="ion-social-youtube-outline" />
                  </a>
                </li>
                <li>
                  <a href="#" className="sc_instagram">
                    <i className="ion-social-instagram-outline" />
                  </a>
                </li>
                <li>
                  <a href="#" className="sc_linkedin">
                    <i className="ion-social-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom_footer bg-dark">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="copyright m-md-0 text-center text-md-left">
                © 2018 All Rights Reserved by Anger.
              </p>
            </div>
            <div className="col-md-6">
              <ul className="list_none footer_link text-center text-md-right">
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
