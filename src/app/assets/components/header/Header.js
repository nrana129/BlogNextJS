import React from 'react'

// import blogLogo from "../../assets/images/blog-logo_white.png"

const Header = () => {
  return (

    <header className="header_wrap dark_skin hover_menu_style3">
      <div className="top-header bg_black4 light_skin border-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <ul className="list_none header_list list_menu justify-content-center justify-content-md-start">
                <li>
                  <span id="current_time">Mon, April 22, 2024</span>
                </li>
                <li>
                  <a href="#" data-toggle="modal" data-target="#SignUp">
                    Sign Up
                  </a>
                </li>
                <li>
                  <a href="#" data-toggle="modal" data-target="#Login">
                    Login
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <ul className="list_none social_icons text-center hover_style2 social_white text-md-right mt-2 mt-md-0">
                <li>
                  <a href="#">
                    <i className="ion-social-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ion-social-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ion-social-googleplus"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ion-social-youtube-outline"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ion-social-instagram-outline"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="middle-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-3">
              <a
                className="navbar-brand m-auto m-md-0 d-table"
                href="index-19.html"
              >
                <img
                  className="logo_light"
                  // src={blogLogo}
                  alt="logo"
                />
                <img
                  className="logo_dark"
                  src="demo-blog/images/blog-logo_dark.png"
                  alt="logo"
                />
                <img
                  className="logo_default"
                  src="demo-blog/images/blog-logo_dark.png"
                  alt="logo"
                />
              </a>
            </div>
            <div className="col-md-9">
              <div className="ads_banner text-center text-md-right">
                <a href="#">
                  <img src="demo-blog/images/ads730X90.gif" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <button
              className="navbar-toggler float-none"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {" "}
              <span className="ion-android-menu"></span>{" "}
            </button>
            <div
              className="collapse navbar-collapse justify-content-between"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="dropdown dropdown-mega-menu">
                  <a
                    data-toggle="dropdown"
                    className="nav-link dropdown-toggle active"
                    href="#"
                  >
                    Home
                  </a>
                  <div className="dropdown-menu">
                    <ul className="mega-menu d-lg-flex">
                      <li className="mega-menu-col col-lg-3">
                        <ul>
                          <li>
                            <a
                              className="dropdown-item menu-link dropdown-toggler"
                              href="#"
                            >
                              Home - Creative
                            </a>
                            <div className="dropdown-menu">
                              <ul>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="index.html"
                                  >
                                    Creative Layout 1
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="index-2.html"
                                  >
                                    Creative Layout 2
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="index-3.html"
                                  >
                                    Creative Layout 3
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <a
                              className="dropdown-item menu-link dropdown-toggler"
                              href="#"
                            >
                              Home - Landing page
                            </a>
                            <div className="dropdown-menu">
                              <ul>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="index-14.html"
                                  >
                                    Software Landing page
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="index-15.html"
                                  >
                                    App Landing page
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item nav-link nav_item"
                                    href="index-24.html"
                                  >
                                    ICO Landing page
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="index-4.html"
                            >
                              Home - Business
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="index-5.html"
                            >
                              Home - One Page
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="index-6.html"
                            >
                              Home - Portfolio
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="index-7.html"
                            >
                              Home - Restaurant
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="mega-menu-col col-lg-3">
                        <ul>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="index-8.html"
                            >
                              Home - Construction
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="index-9.html"
                            >
                              Home - Medical
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="index-10.html"
                            >
                              Home - Gym
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="index-11.html"
                            >
                              Home - Consultancy
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="index-12.html"
                            >
                              Home - Shop
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="index-13.html"
                            >
                              Home - Digital Agency
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="mega-menu-col col-lg-3">
                        <ul>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="index-16.html"
                            >
                              Home - SEO Marketing
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="index-17.html"
                            >
                              Home - Web Agency
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="index-18.html"
                            >
                              Home - Agriculture
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item active"
                              href="index-19.html"
                            >
                              Home - Blog
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="index-20.html"
                            >
                              Home - Wedding
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="index-21.html"
                            >
                              Home - Travel
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="mega-menu-col col-lg-3">
                        <ul>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="index-22.html"
                            >
                              Home - Yoga
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="index-23.html"
                            >
                              Home - Education
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="index-25.html"
                            >
                              Home - Hosting
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="index-26.html"
                            >
                              Home - Event
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="index-27.html"
                            >
                              Home - Hotel Booking
                            </a>
                          </li>
                          <li>
                            <a
                              className="dropdown-item nav-link nav_item"
                              href="index-28.html"
                            >
                              Home - Beauty Spa
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="dropdown">
                  <a
                    data-toggle="dropdown"
                    className="nav-link dropdown-toggle"
                    href="#"
                  >
                    Pages
                  </a>
                  <div className="dropdown-menu">
                    <ul>
                      <li>
                        <a
                          className="dropdown-item nav-link nav_item"
                          href="demo-blog/about.html"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          className="dropdown-item menu-link dropdown-toggler"
                          href="#"
                        >
                          News
                        </a>
                        <div className="dropdown-menu">
                          <ul>
                            <li>
                              <a
                                className="dropdown-item nav-link nav_item"
                                href="demo-blog/blog.html"
                              >
                                News
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item nav-link nav_item"
                                href="demo-blog/blog-detail.html"
                              >
                                News Single
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a
                          className="dropdown-item menu-link dropdown-toggler"
                          href="#"
                        >
                          Author
                        </a>
                        <div className="dropdown-menu">
                          <ul>
                            <li>
                              <a
                                className="dropdown-item nav-link nav_item"
                                href="demo-blog/author.html"
                              >
                                Author
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item nav-link nav_item"
                                href="demo-blog/author-post.html"
                              >
                                Author Post
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a
                          className="dropdown-item nav-link nav_item"
                          href="demo-blog/contact.html"
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="dropdown dropdown-mega-menu">
                  <a
                    className="dropdown-toggle nav-link"
                    href="#"
                    data-toggle="dropdown"
                  >
                    World
                  </a>
                  <div className="dropdown-menu">
                    <ul
                      className="p-3 carousel_slide4 owl-carousel owl-theme owl-loaded owl-drag"
                      data-loop="true"
                      data-autoplay="true"
                      data-margin="15"
                      data-dots="false"
                    >
                      <div
                        className="owl-stage-outer owl-height"
                        // style="height: 0px;"
                      >
                        <div
                          className="owl-stage"
                          // style="transform: translate3d(0px, 0px, 0px); transition: all 0s ease 0s;"
                        >
                          <div className="owl-item">
                            <li className="mega-menu-col">
                              <div className="blog_postcontent_wrap">
                                <div className="sp_post">
                                  <a href="#">
                                    <div className="post_thumb">
                                      <img
                                        src="demo-blog/images/letest_post5.jpg"
                                        alt="letest_post5"
                                      />
                                    </div>
                                  </a>
                                  <div className="blog_postcontent">
                                    <div className="blog_tags">
                                      <a
                                        className="blog_tags_cat blog_bg_danger"
                                        href="#"
                                      >
                                        photography
                                      </a>
                                      <a
                                        className="blog_tags_cat blog_bg_success"
                                        href="#"
                                      >
                                        travel
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="post_info">
                                  <div className="blog_heading">
                                    <h6>
                                      <a href="#">
                                        Lorem ipsum dolor sit sed do
                                      </a>
                                    </h6>
                                  </div>
                                  <ul className="blog_postmeta">
                                    <li>
                                      <a href="#">
                                        <i className="ti-calendar"></i>
                                        <span>April 14, 2018</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="ti-comments"></i>
                                        <span>40</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                          </div>
                          <div className="owl-item">
                            <li className="mega-menu-col">
                              <div className="blog_postcontent_wrap">
                                <div className="sp_post">
                                  <a href="#">
                                    <div className="post_thumb">
                                      <img
                                        src="demo-blog/images/letest_post6.jpg"
                                        alt="letest_post6"
                                      />
                                    </div>
                                  </a>
                                  <div className="blog_postcontent">
                                    <div className="blog_tags">
                                      <a
                                        className="blog_tags_cat blog_bg_lightblue"
                                        href="#"
                                      >
                                        photography
                                      </a>
                                      <a
                                        className="blog_tags_cat blog_bg_warning"
                                        href="#"
                                      >
                                        travel
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="post_info">
                                  <div className="blog_heading">
                                    <h6>
                                      <a href="#">
                                        Lorem ipsum dolor sit sed do
                                      </a>
                                    </h6>
                                  </div>
                                  <ul className="blog_postmeta">
                                    <li>
                                      <a href="#">
                                        <i className="ti-calendar"></i>
                                        <span>April 14, 2018</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="ti-comments"></i>
                                        <span>40</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                          </div>
                          <div className="owl-item">
                            <li className="mega-menu-col">
                              <div className="blog_postcontent_wrap">
                                <div className="sp_post">
                                  <a href="#">
                                    <div className="post_thumb">
                                      <img
                                        src="demo-blog/images/letest_post7.jpg"
                                        alt="letest_post7"
                                      />
                                    </div>
                                  </a>
                                  <div className="blog_postcontent">
                                    <div className="blog_tags">
                                      <a
                                        className="blog_tags_cat blog_bg_orange"
                                        href="#"
                                      >
                                        photography
                                      </a>
                                      <a
                                        className="blog_tags_cat blog_bg_purple"
                                        href="#"
                                      >
                                        travel
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="post_info">
                                  <div className="blog_heading">
                                    <h6>
                                      <a href="#">
                                        Lorem ipsum dolor sit sed do
                                      </a>
                                    </h6>
                                  </div>
                                  <ul className="blog_postmeta">
                                    <li>
                                      <a href="#">
                                        <i className="ti-calendar"></i>
                                        <span>April 14, 2018</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="ti-comments"></i>
                                        <span>40</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                          </div>
                          <div className="owl-item">
                            <li className="mega-menu-col">
                              <div className="blog_postcontent_wrap">
                                <div className="sp_post">
                                  <a href="#">
                                    <div className="post_thumb">
                                      <img
                                        src="demo-blog/images/letest_post8.jpg"
                                        alt="letest_post8"
                                      />
                                    </div>
                                  </a>
                                  <div className="blog_postcontent">
                                    <div className="blog_tags">
                                      <a
                                        className="blog_tags_cat blog_bg_success"
                                        href="#"
                                      >
                                        photography
                                      </a>
                                      <a
                                        className="blog_tags_cat blog_bg_warning"
                                        href="#"
                                      >
                                        travel
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="post_info">
                                  <div className="blog_heading">
                                    <h6>
                                      <a href="#">
                                        Lorem ipsum dolor sit sed do
                                      </a>
                                    </h6>
                                  </div>
                                  <ul className="blog_postmeta">
                                    <li>
                                      <a href="#">
                                        <i className="ti-calendar"></i>
                                        <span>April 14, 2018</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="ti-comments"></i>
                                        <span>40</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                          </div>
                          <div className="owl-item">
                            <li className="mega-menu-col">
                              <div className="blog_postcontent_wrap">
                                <div className="sp_post">
                                  <a href="#">
                                    <div className="post_thumb">
                                      <img
                                        src="demo-blog/images/letest_post12.jpg"
                                        alt="letest_post12"
                                      />
                                    </div>
                                  </a>
                                  <div className="blog_postcontent">
                                    <div className="blog_tags">
                                      <a
                                        className="blog_tags_cat blog_bg_orange"
                                        href="#"
                                      >
                                        photography
                                      </a>
                                      <a
                                        className="blog_tags_cat blog_bg_purple"
                                        href="#"
                                      >
                                        travel
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div className="post_info">
                                  <div className="blog_heading">
                                    <h6>
                                      <a href="#">
                                        Lorem ipsum dolor sit sed do
                                      </a>
                                    </h6>
                                  </div>
                                  <ul className="blog_postmeta">
                                    <li>
                                      <a href="#">
                                        <i className="ti-calendar"></i>
                                        <span>April 14, 2018</span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="#">
                                        <i className="ti-comments"></i>
                                        <span>40</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </li>
                          </div>
                        </div>
                      </div>
                      <div className="owl-nav disabled">
                        <div className="owl-prev">
                          <i className="ion-ios-arrow-back"></i>
                        </div>
                        <div className="owl-next">
                          <i className="ion-ios-arrow-forward"></i>
                        </div>
                      </div>
                      <div className="owl-dots disabled"></div>
                    </ul>
                  </div>
                </li>
                <li className="dropdown dropdown-mega-menu">
                  <a
                    className="dropdown-toggle nav-link"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Travel
                  </a>
                  <div className="dropdown-menu">
                    <ul className="mega-menu d-md-flex">
                      <li className="mega-menu-col col-lg-3 col-md-6">
                        <div className="blog_postcontent_wrap">
                          <div className="sp_post">
                            <a href="#">
                              <div className="post_thumb">
                                <img
                                  src="demo-blog/images/letest_post9.jpg"
                                  alt="letest_post9"
                                />
                              </div>
                            </a>
                            <div className="blog_postcontent postcontent_light">
                              <div className="blog_tags">
                                <a
                                  className="blog_tags_cat blog_bg_orange"
                                  href="#"
                                >
                                  photography
                                </a>
                                <a
                                  className="blog_tags_cat blog_bg_purple"
                                  href="#"
                                >
                                  travel
                                </a>
                              </div>
                              <div className="post_info">
                                <div className="blog_heading">
                                  <h6>
                                    <a href="#">Lorem ipsum dolor sit sed do</a>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="mega-menu-col col-lg-3 col-md-6">
                        <div className="blog_postcontent_wrap">
                          <div className="sp_post">
                            <a href="#">
                              <div className="post_thumb">
                                <img
                                  src="demo-blog/images/letest_post10.jpg"
                                  alt="letest_post10"
                                />
                              </div>
                            </a>
                            <div className="blog_postcontent postcontent_light">
                              <div className="blog_tags">
                                <a
                                  className="blog_tags_cat blog_bg_danger"
                                  href="#"
                                >
                                  photography
                                </a>
                                <a
                                  className="blog_tags_cat blog_bg_lightblue"
                                  href="#"
                                >
                                  travel
                                </a>
                              </div>
                              <div className="post_info">
                                <div className="blog_heading">
                                  <h6>
                                    <a href="#">Lorem ipsum dolor sit sed do</a>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="mega-menu-col col-lg-3 col-md-6">
                        <div className="blog_postcontent_wrap">
                          <div className="sp_post">
                            <a href="#">
                              <div className="post_thumb">
                                <img
                                  src="demo-blog/images/letest_post11.jpg"
                                  alt="letest_post11"
                                />
                              </div>
                            </a>
                            <div className="blog_postcontent postcontent_light">
                              <div className="blog_tags">
                                <a
                                  className="blog_tags_cat blog_bg_success"
                                  href="#"
                                >
                                  photography
                                </a>
                                <a
                                  className="blog_tags_cat blog_bg_warning"
                                  href="#"
                                >
                                  travel
                                </a>
                              </div>
                              <div className="post_info">
                                <div className="blog_heading">
                                  <h6>
                                    <a href="#">Lorem ipsum dolor sit sed do</a>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="mega-menu-col col-lg-3 col-md-6">
                        <div className="blog_postcontent_wrap">
                          <div className="sp_post">
                            <a href="#">
                              <div className="post_thumb">
                                <img
                                  src="demo-blog/images/letest_post5.jpg"
                                  alt="letest_post5"
                                />
                              </div>
                            </a>
                            <div className="blog_postcontent postcontent_light">
                              <div className="blog_tags">
                                <a
                                  className="blog_tags_cat blog_bg_orange"
                                  href="#"
                                >
                                  photography
                                </a>
                                <a
                                  className="blog_tags_cat blog_bg_success"
                                  href="#"
                                >
                                  travel
                                </a>
                              </div>
                              <div className="post_info">
                                <div className="blog_heading">
                                  <h6>
                                    <a href="#">Lorem ipsum dolor sit sed do</a>
                                  </h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="dropdown dropdown-mega-menu">
                  <a
                    className="dropdown-toggle nav-link"
                    href="#"
                    data-toggle="dropdown"
                  >
                    Video
                  </a>
                  <div className="dropdown-menu">
                    <ul className="mega-menu d-md-flex">
                      <li className="mega-menu-col col-lg-3 col-md-6">
                        <div className="blog_postcontent_wrap">
                          <div className="sp_post">
                            <a href="#">
                              <div className="post_thumb">
                                <img
                                  src="demo-blog/images/recent_news_img5.jpg"
                                  alt="recent_news_img9"
                                />
                              </div>
                              <div className="post_video_icon">
                                <i className="fas fa-play"></i>
                              </div>
                            </a>
                          </div>
                          <div className="post_info">
                            <div className="blog_heading">
                              <h6>
                                <a href="#">
                                  Lorem ipsum dolor sit sed do eiusmod
                                </a>
                              </h6>
                            </div>
                            <ul className="blog_postmeta">
                              <li>
                                <a href="#">
                                  <i className="ti-calendar"></i>
                                  <span>April 14, 2018</span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="ti-comments"></i>
                                  <span>40</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="mega-menu-col col-lg-3 col-md-6">
                        <div className="blog_postcontent_wrap">
                          <div className="sp_post">
                            <a href="#">
                              <div className="post_thumb">
                                <img
                                  src="demo-blog/images/recent_news_img2.jpg"
                                  alt="recent_news_img2"
                                />
                              </div>
                              <div className="post_video_icon">
                                <i className="fas fa-play"></i>
                              </div>
                            </a>
                          </div>
                          <div className="post_info">
                            <div className="blog_heading">
                              <h6>
                                <a href="#">
                                  Lorem ipsum dolor sit sed do eiusmod
                                </a>
                              </h6>
                            </div>
                            <ul className="blog_postmeta">
                              <li>
                                <a href="#">
                                  <i className="ti-calendar"></i>
                                  <span>April 14, 2018</span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="ti-comments"></i>
                                  <span>40</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="mega-menu-col col-lg-3 col-md-6">
                        <div className="blog_postcontent_wrap">
                          <div className="sp_post">
                            <a href="#">
                              <div className="post_thumb">
                                <img
                                  src="demo-blog/images/recent_news_img6.jpg"
                                  alt="recent_news_img6"
                                />
                              </div>
                              <div className="post_video_icon">
                                <i className="fas fa-play"></i>
                              </div>
                            </a>
                          </div>
                          <div className="post_info">
                            <div className="blog_heading">
                              <h6>
                                <a href="#">
                                  Lorem ipsum dolor sit sed do eiusmod
                                </a>
                              </h6>
                            </div>
                            <ul className="blog_postmeta">
                              <li>
                                <a href="#">
                                  <i className="ti-calendar"></i>
                                  <span>April 14, 2018</span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="ti-comments"></i>
                                  <span>40</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="mega-menu-col col-lg-3 col-md-6">
                        <div className="blog_postcontent_wrap">
                          <div className="sp_post">
                            <a href="#">
                              <div className="post_thumb">
                                <img
                                  src="demo-blog/images/recent_news_img7.jpg"
                                  alt="recent_news_img7"
                                />
                              </div>
                              <div className="post_video_icon">
                                <i className="fas fa-play"></i>
                              </div>
                            </a>
                          </div>
                          <div className="post_info">
                            <div className="blog_heading">
                              <h6>
                                <a href="#">
                                  Lorem ipsum dolor sit sed do eiusmod
                                </a>
                              </h6>
                            </div>
                            <ul className="blog_postmeta">
                              <li>
                                <a href="#">
                                  <i className="ti-calendar"></i>
                                  <span>April 14, 2018</span>
                                </a>
                              </li>
                              <li>
                                <a href="#">
                                  <i className="ti-comments"></i>
                                  <span>40</span>
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    Fashion
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    Sport
                  </a>
                </li>
                <li>
                  <a className="nav-link" href="#">
                    Health
                  </a>
                </li>
              </ul>
            </div>
            <div className="search_box">
              <form>
                <div className="radius_input">
                  <input
                    type="text"
                    className="form-control"
                    required=""
                    placeholder="Search..."
                  />
                </div>
                <button type="submit" name="submit" value="Submit">
                  <i className="ion-ios-search-strong"></i>
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header