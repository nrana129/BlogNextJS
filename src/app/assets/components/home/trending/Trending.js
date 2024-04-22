import React from "react";

const Trending = () => {
  return (
    <section className="small_pt small_pb">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <div className="section_trending">
              <nav className="navbar navbar-expand-md align-items-start filter_nav">
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarToggler1"
                  aria-controls="navbarToggler1"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  Filter
                </button>
                <div
                  className="navbar-collapse justify-content-end collapse"
                  id="navbarToggler1"
                >
                  <ul className="nav navbar-nav filter_tab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="fashion-tab"
                        data-toggle="tab"
                        href="#fashion"
                        role="tab"
                        aria-selected="true"
                      >
                        Fashion
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="food-tab"
                        data-toggle="tab"
                        href="#food"
                        role="tab"
                        aria-selected="false"
                      >
                        Food
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="sports-tab"
                        data-toggle="tab"
                        href="#sports"
                        role="tab"
                        aria-selected="false"
                      >
                        Sports
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="travel-tab"
                        data-toggle="tab"
                        href="#travel"
                        role="tab"
                        aria-selected="false"
                      >
                        Travel
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="heading_s5">
                <h5>What's Trending</h5>
              </div>
              <div className="tab-content tab_content_slider">
                <div
                  className="tab-pane fade active show"
                  id="fashion"
                  role="tabpanel"
                  aria-labelledby="fashion-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div
                        className="post_single_slider carousel_slide1 owl-carousel owl-theme owl-loaded owl-drag"
                        data-loop="true"
                        data-autoplay="true"
                        data-nav="true"
                        data-margin={15}
                        data-dots="false"
                        data-autoheight="true"
                      >
                        <div
                          className="owl-stage-outer owl-height"
                          style={{ height: 540 }}
                        >
                          <div
                            className="owl-stage"
                            style={{
                              transform: "translate3d(-1239px, 0px, 0px)",
                              transition: "all 0.25s ease 0s",
                              width: 2891,
                            }}
                          >
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img2.jpg"
                                          alt="trend_img2"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_success"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_orange"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img3.jpg"
                                          alt="trend_img3"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_purple"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_lightblue"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img1.jpg"
                                          alt="trend_img1"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_danger"
                                          href="#"
                                        >
                                          fashion
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item active"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img2.jpg"
                                          alt="trend_img2"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_success"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_orange"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img3.jpg"
                                          alt="trend_img3"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_purple"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_lightblue"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img1.jpg"
                                          alt="trend_img1"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_danger"
                                          href="#"
                                        >
                                          fashion
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img2.jpg"
                                          alt="trend_img2"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_success"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_orange"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="owl-nav">
                          <div className="owl-prev">
                            <i className="ion-ios-arrow-back" />
                          </div>
                          <div className="owl-next">
                            <i className="ion-ios-arrow-forward" />
                          </div>
                        </div>
                        <div className="owl-dots disabled" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <ul className="blog_small_post blog_list border_bottom_solid list_none">
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small1.jpg"
                                    alt="trend_img_small1"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_orange"
                                    href="#"
                                  >
                                    fashion
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small2.jpg"
                                    alt="trend_img_small2"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_warning"
                                    href="#"
                                  >
                                    fashion
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small3.jpg"
                                    alt="trend_img_small3"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_lightblue"
                                    href="#"
                                  >
                                    fashion
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small4.jpg"
                                    alt="trend_img_small4"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_orange"
                                    href="#"
                                  >
                                    fashion
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="border-top border-bottom py-2 mt-4 text-center">
                        <a href="#">View All</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="food"
                  role="tabpanel"
                  aria-labelledby="food-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div
                        className="post_single_slider carousel_slide1 owl-carousel owl-theme owl-loaded owl-drag"
                        data-loop="true"
                        data-autoplay="true"
                        data-nav="true"
                        data-margin={15}
                        data-dots="false"
                        data-autoheight="true"
                      >
                        <div
                          className="owl-stage-outer owl-height"
                          style={{ height: 540 }}
                        >
                          <div
                            className="owl-stage"
                            style={{
                              transform: "translate3d(-1239px, 0px, 0px)",
                              transition: "all 0.25s ease 0s",
                              width: 2891,
                            }}
                          >
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img5.jpg"
                                          alt="trend_img5"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_danger"
                                          href="#"
                                        >
                                          fashion
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img6.jpg"
                                          alt="trend_img6"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_purple"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_orange"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img4.jpg"
                                          alt="trend_img4"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_lightblue"
                                          href="#"
                                        >
                                          fashion
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item active"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img5.jpg"
                                          alt="trend_img5"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_danger"
                                          href="#"
                                        >
                                          fashion
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img6.jpg"
                                          alt="trend_img6"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_purple"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_orange"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img4.jpg"
                                          alt="trend_img4"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_lightblue"
                                          href="#"
                                        >
                                          fashion
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img5.jpg"
                                          alt="trend_img5"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_danger"
                                          href="#"
                                        >
                                          fashion
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="owl-nav">
                          <div className="owl-prev">
                            <i className="ion-ios-arrow-back" />
                          </div>
                          <div className="owl-next">
                            <i className="ion-ios-arrow-forward" />
                          </div>
                        </div>
                        <div className="owl-dots disabled" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <ul className="blog_small_post blog_list border_bottom_solid list_none">
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small5.jpg"
                                    alt="trend_img_small5"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_success"
                                    href="#"
                                  >
                                    fashion
                                  </a>
                                  <a
                                    className="blog_tags_cat blog_bg_lightblue"
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small6.jpg"
                                    alt="trend_img_small6"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_danger"
                                    href="#"
                                  >
                                    fashion
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small7.jpg"
                                    alt="trend_img_small7"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_orange"
                                    href="#"
                                  >
                                    fashion
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small8.jpg"
                                    alt="trend_img_small8"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_lightblue"
                                    href="#"
                                  >
                                    fashion
                                  </a>
                                  <a
                                    className="blog_tags_cat blog_bg_danger"
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="border-top border-bottom py-2 mt-4 text-center">
                        <a href="#">View All</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="sports"
                  role="tabpanel"
                  aria-labelledby="sports-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div
                        className="post_single_slider carousel_slide1 owl-carousel owl-theme owl-loaded owl-drag"
                        data-loop="true"
                        data-autoplay="true"
                        data-nav="true"
                        data-margin={15}
                        data-dots="false"
                        data-autoheight="true"
                      >
                        <div
                          className="owl-stage-outer owl-height"
                          style={{ height: 540 }}
                        >
                          <div
                            className="owl-stage"
                            style={{
                              transform: "translate3d(-1239px, 0px, 0px)",
                              transition: "all 0.25s ease 0s",
                              width: 2891,
                            }}
                          >
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img8.jpg"
                                          alt="trend_img8"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_success"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_orange"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img9.jpg"
                                          alt="trend_img9"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_purple"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_danger"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img7.jpg"
                                          alt="trend_img7"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_danger"
                                          href="#"
                                        >
                                          fashion
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item active"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img8.jpg"
                                          alt="trend_img8"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_success"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_orange"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img9.jpg"
                                          alt="trend_img9"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_purple"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_danger"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img7.jpg"
                                          alt="trend_img7"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_danger"
                                          href="#"
                                        >
                                          fashion
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img8.jpg"
                                          alt="trend_img8"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_success"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_orange"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="owl-nav">
                          <div className="owl-prev">
                            <i className="ion-ios-arrow-back" />
                          </div>
                          <div className="owl-next">
                            <i className="ion-ios-arrow-forward" />
                          </div>
                        </div>
                        <div className="owl-dots disabled" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <ul className="blog_small_post blog_list border_bottom_solid list_none">
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small9.jpg"
                                    alt="trend_img_small9"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_lightblue"
                                    href="#"
                                  >
                                    fashion
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small10.jpg"
                                    alt="trend_img_small10"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_danger"
                                    href="#"
                                  >
                                    fashion
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small11.jpg"
                                    alt="trend_img_small11"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_purple"
                                    href="#"
                                  >
                                    fashion
                                  </a>
                                  <a
                                    className="blog_tags_cat blog_bg_orange"
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small12.jpg"
                                    alt="trend_img_small12"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_danger"
                                    href="#"
                                  >
                                    fashion
                                  </a>
                                  <a
                                    className="blog_tags_cat blog_bg_lightblue"
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="border-top border-bottom py-2 mt-4 text-center">
                        <a href="#">View All</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="travel"
                  role="tabpanel"
                  aria-labelledby="travel-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div
                        className="post_single_slider carousel_slide1 owl-carousel owl-theme owl-loaded owl-drag"
                        data-loop="true"
                        data-autoplay="true"
                        data-nav="true"
                        data-margin={15}
                        data-dots="false"
                        data-autoheight="true"
                      >
                        <div
                          className="owl-stage-outer owl-height"
                          style={{ height: 540 }}
                        >
                          <div
                            className="owl-stage"
                            style={{
                              transform: "translate3d(-1239px, 0px, 0px)",
                              transition: "all 0.25s ease 0s",
                              width: 2891,
                            }}
                          >
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img11.jpg"
                                          alt="trend_img11"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_lightblue"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_danger"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img12.jpg"
                                          alt="trend_img12"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_warning"
                                          href="#"
                                        >
                                          fashion
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img10.jpg"
                                          alt="trend_img10"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_purple"
                                          href="#"
                                        >
                                          fashion
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item active"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img11.jpg"
                                          alt="trend_img11"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_lightblue"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_danger"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img12.jpg"
                                          alt="trend_img12"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_warning"
                                          href="#"
                                        >
                                          fashion
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img10.jpg"
                                          alt="trend_img10"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_purple"
                                          href="#"
                                        >
                                          fashion
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img11.jpg"
                                          alt="trend_img11"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_lightblue"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_danger"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="owl-nav">
                          <div className="owl-prev">
                            <i className="ion-ios-arrow-back" />
                          </div>
                          <div className="owl-next">
                            <i className="ion-ios-arrow-forward" />
                          </div>
                        </div>
                        <div className="owl-dots disabled" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <ul className="blog_small_post blog_list border_bottom_solid list_none">
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small13.jpg"
                                    alt="trend_img_small13"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_danger"
                                    href="#"
                                  >
                                    fashion
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small14.jpg"
                                    alt="trend_img_small14"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_purple"
                                    href="#"
                                  >
                                    fashion
                                  </a>
                                  <a
                                    className="blog_tags_cat blog_bg_lightblue"
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small15.jpg"
                                    alt="trend_img_small15"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_danger"
                                    href="#"
                                  >
                                    fashion
                                  </a>
                                  <a
                                    className="blog_tags_cat blog_bg_orange"
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small16.jpg"
                                    alt="trend_img_small16"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_success"
                                    href="#"
                                  >
                                    fashion
                                  </a>
                                  <a
                                    className="blog_tags_cat blog_bg_lightblue"
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="border-top border-bottom py-2 mt-4 text-center">
                        <a href="#">View All</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-5 text-center">
              <div className="ads_banner">
                <a href="#">
                  <img src="demo-blog/images/ads730X90.gif" alt="" />
                </a>
              </div>
            </div>
            <div className="section_featured">
              <nav className="navbar navbar-expand-md align-items-start filter_nav">
                <button
                  className="navbar-toggler collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarToggler1"
                  aria-controls="navbarToggler1"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  Filter
                </button>
                <div
                  className="navbar-collapse justify-content-end collapse"
                  id="navbarToggler1"
                >
                  <ul className="nav navbar-nav filter_tab" role="tablist">
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="politics-tab"
                        data-toggle="tab"
                        href="#politics"
                        role="tab"
                        aria-selected="true"
                      >
                        Politics
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="music-tab"
                        data-toggle="tab"
                        href="#music"
                        role="tab"
                        aria-selected="false"
                      >
                        Music
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="tech-tab"
                        data-toggle="tab"
                        href="#tech"
                        role="tab"
                        aria-selected="false"
                      >
                        Tech
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="lifestyle-tab"
                        data-toggle="tab"
                        href="#lifestyle"
                        role="tab"
                        aria-selected="false"
                      >
                        lifestyle
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="heading_s5">
                <h5>Featured News</h5>
              </div>
              <div className="tab-content tab_content_slider">
                <div
                  className="tab-pane fade active show"
                  id="politics"
                  role="tabpanel"
                  aria-labelledby="politics-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div
                        className="post_single_slider carousel_slide1 owl-carousel owl-theme owl-loaded owl-drag"
                        data-loop="true"
                        data-autoplay="true"
                        data-nav="true"
                        data-margin={15}
                        data-dots="false"
                        data-autoheight="true"
                      >
                        <div
                          className="owl-stage-outer owl-height"
                          style={{ height: 540 }}
                        >
                          <div
                            className="owl-stage"
                            style={{
                              transform: "translate3d(-1239px, 0px, 0px)",
                              transition: "all 0.25s ease 0s",
                              width: 2891,
                            }}
                          >
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img2.jpg"
                                          alt="trend_img2"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_success"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_orange"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img3.jpg"
                                          alt="trend_img3"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_purple"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_lightblue"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img1.jpg"
                                          alt="trend_img1"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_danger"
                                          href="#"
                                        >
                                          fashion
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item active"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img2.jpg"
                                          alt="trend_img2"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_success"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_orange"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img3.jpg"
                                          alt="trend_img3"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_purple"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_lightblue"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img1.jpg"
                                          alt="trend_img1"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_danger"
                                          href="#"
                                        >
                                          fashion
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img2.jpg"
                                          alt="trend_img2"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_success"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_orange"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="owl-nav">
                          <div className="owl-prev">
                            <i className="ion-ios-arrow-back" />
                          </div>
                          <div className="owl-next">
                            <i className="ion-ios-arrow-forward" />
                          </div>
                        </div>
                        <div className="owl-dots disabled" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <ul className="blog_small_post blog_grid list_none">
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small1.jpg"
                                    alt="trend_img_small1"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_orange"
                                    href="#"
                                  >
                                    fashion
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small2.jpg"
                                    alt="trend_img_small2"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_warning"
                                    href="#"
                                  >
                                    fashion
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small3.jpg"
                                    alt="trend_img_small3"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_lightblue"
                                    href="#"
                                  >
                                    fashion
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small4.jpg"
                                    alt="trend_img_small4"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_orange"
                                    href="#"
                                  >
                                    fashion
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="border-top border-bottom py-2 mt-4 text-center">
                        <a href="#">View All</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="music"
                  role="tabpanel"
                  aria-labelledby="music-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div
                        className="post_single_slider carousel_slide1 owl-carousel owl-theme owl-loaded owl-drag"
                        data-loop="true"
                        data-autoplay="true"
                        data-nav="true"
                        data-margin={15}
                        data-dots="false"
                        data-autoheight="true"
                      >
                        <div
                          className="owl-stage-outer owl-height"
                          style={{ height: 540 }}
                        >
                          <div
                            className="owl-stage"
                            style={{
                              transform: "translate3d(-1239px, 0px, 0px)",
                              transition: "all 0.25s ease 0s",
                              width: 2891,
                            }}
                          >
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img5.jpg"
                                          alt="trend_img5"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_danger"
                                          href="#"
                                        >
                                          fashion
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img6.jpg"
                                          alt="trend_img6"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_purple"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_orange"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img4.jpg"
                                          alt="trend_img4"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_lightblue"
                                          href="#"
                                        >
                                          fashion
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item active"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img5.jpg"
                                          alt="trend_img5"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_danger"
                                          href="#"
                                        >
                                          fashion
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img6.jpg"
                                          alt="trend_img6"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_purple"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_orange"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img4.jpg"
                                          alt="trend_img4"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_lightblue"
                                          href="#"
                                        >
                                          fashion
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img5.jpg"
                                          alt="trend_img5"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_danger"
                                          href="#"
                                        >
                                          fashion
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="owl-nav">
                          <div className="owl-prev">
                            <i className="ion-ios-arrow-back" />
                          </div>
                          <div className="owl-next">
                            <i className="ion-ios-arrow-forward" />
                          </div>
                        </div>
                        <div className="owl-dots disabled" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <ul className="blog_small_post blog_grid list_none">
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small5.jpg"
                                    alt="trend_img_small5"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_success"
                                    href="#"
                                  >
                                    fashion
                                  </a>
                                  <a
                                    className="blog_tags_cat blog_bg_lightblue"
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small6.jpg"
                                    alt="trend_img_small6"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_danger"
                                    href="#"
                                  >
                                    fashion
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small7.jpg"
                                    alt="trend_img_small7"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_orange"
                                    href="#"
                                  >
                                    fashion
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small8.jpg"
                                    alt="trend_img_small8"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_lightblue"
                                    href="#"
                                  >
                                    fashion
                                  </a>
                                  <a
                                    className="blog_tags_cat blog_bg_danger"
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="border-top border-bottom py-2 mt-4 text-center">
                        <a href="#">View All</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tech"
                  role="tabpanel"
                  aria-labelledby="tech-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div
                        className="post_single_slider carousel_slide1 owl-carousel owl-theme owl-loaded owl-drag"
                        data-loop="true"
                        data-autoplay="true"
                        data-nav="true"
                        data-margin={15}
                        data-dots="false"
                        data-autoheight="true"
                      >
                        <div
                          className="owl-stage-outer owl-height"
                          style={{ height: 540 }}
                        >
                          <div
                            className="owl-stage"
                            style={{
                              transform: "translate3d(-1239px, 0px, 0px)",
                              transition: "all 0.25s ease 0s",
                              width: 2891,
                            }}
                          >
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img8.jpg"
                                          alt="trend_img8"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_success"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_orange"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img9.jpg"
                                          alt="trend_img9"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_purple"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_danger"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img7.jpg"
                                          alt="trend_img7"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_danger"
                                          href="#"
                                        >
                                          fashion
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item active"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img8.jpg"
                                          alt="trend_img8"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_success"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_orange"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img9.jpg"
                                          alt="trend_img9"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_purple"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_danger"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img7.jpg"
                                          alt="trend_img7"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_danger"
                                          href="#"
                                        >
                                          fashion
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img8.jpg"
                                          alt="trend_img8"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_success"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_orange"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="owl-nav">
                          <div className="owl-prev">
                            <i className="ion-ios-arrow-back" />
                          </div>
                          <div className="owl-next">
                            <i className="ion-ios-arrow-forward" />
                          </div>
                        </div>
                        <div className="owl-dots disabled" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <ul className="blog_small_post blog_grid list_none">
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small9.jpg"
                                    alt="trend_img_small9"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_lightblue"
                                    href="#"
                                  >
                                    fashion
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small10.jpg"
                                    alt="trend_img_small10"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_danger"
                                    href="#"
                                  >
                                    fashion
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small11.jpg"
                                    alt="trend_img_small11"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_purple"
                                    href="#"
                                  >
                                    fashion
                                  </a>
                                  <a
                                    className="blog_tags_cat blog_bg_orange"
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small12.jpg"
                                    alt="trend_img_small12"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_danger"
                                    href="#"
                                  >
                                    fashion
                                  </a>
                                  <a
                                    className="blog_tags_cat blog_bg_lightblue"
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="border-top border-bottom py-2 mt-4 text-center">
                        <a href="#">View All</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="lifestyle"
                  role="tabpanel"
                  aria-labelledby="lifestyle-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div
                        className="post_single_slider carousel_slide1 owl-carousel owl-theme owl-loaded owl-drag"
                        data-loop="true"
                        data-autoplay="true"
                        data-nav="true"
                        data-margin={15}
                        data-dots="false"
                        data-autoheight="true"
                      >
                        <div
                          className="owl-stage-outer owl-height"
                          style={{ height: 540 }}
                        >
                          <div
                            className="owl-stage"
                            style={{
                              transform: "translate3d(-1239px, 0px, 0px)",
                              transition: "all 0.25s ease 0s",
                              width: 2891,
                            }}
                          >
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img11.jpg"
                                          alt="trend_img11"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_lightblue"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_danger"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img12.jpg"
                                          alt="trend_img12"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_warning"
                                          href="#"
                                        >
                                          fashion
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img10.jpg"
                                          alt="trend_img10"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_purple"
                                          href="#"
                                        >
                                          fashion
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item active"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img11.jpg"
                                          alt="trend_img11"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_lightblue"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_danger"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img12.jpg"
                                          alt="trend_img12"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_warning"
                                          href="#"
                                        >
                                          fashion
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img10.jpg"
                                          alt="trend_img10"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_purple"
                                          href="#"
                                        >
                                          fashion
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="owl-item cloned"
                              style={{ width: 398, marginRight: 15 }}
                            >
                              <div className="item">
                                <div className="blog_postcontent_wrap">
                                  <div className="sp_post">
                                    <a href="#">
                                      <div className="post_thumb">
                                        <img
                                          src="demo-blog/images/trend_img11.jpg"
                                          alt="trend_img11"
                                        />
                                      </div>
                                    </a>
                                    <div className="blog_postcontent">
                                      <div className="blog_tags">
                                        <a
                                          className="blog_tags_cat blog_bg_lightblue"
                                          href="#"
                                        >
                                          fashion
                                        </a>
                                        <a
                                          className="blog_tags_cat blog_bg_danger"
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
                                          Lorem ipsum dolor sit sed do eiusmod
                                        </a>
                                      </h6>
                                    </div>
                                    <ul className="blog_postmeta mb-3">
                                      <li>
                                        <a href="#">
                                          <i className="ti-calendar" />
                                          <span>April 14, 2018</span>
                                        </a>
                                      </li>
                                      <li>
                                        <a href="#">
                                          <i className="ti-comments" />
                                          <span>40</span>
                                        </a>
                                      </li>
                                    </ul>
                                    <p>
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipisicing elit, sed do eiusmod
                                      incididunt ut labore et dolore magna Ut
                                      enim ad minim veniam aliqua.
                                    </p>
                                    <a
                                      href="#"
                                      className="text-capitalize btn btn-default btn-sm"
                                    >
                                      Read More
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="owl-nav">
                          <div className="owl-prev">
                            <i className="ion-ios-arrow-back" />
                          </div>
                          <div className="owl-next">
                            <i className="ion-ios-arrow-forward" />
                          </div>
                        </div>
                        <div className="owl-dots disabled" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <ul className="blog_small_post blog_grid list_none">
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small13.jpg"
                                    alt="trend_img_small13"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_danger"
                                    href="#"
                                  >
                                    fashion
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small14.jpg"
                                    alt="trend_img_small14"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_purple"
                                    href="#"
                                  >
                                    fashion
                                  </a>
                                  <a
                                    className="blog_tags_cat blog_bg_lightblue"
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small15.jpg"
                                    alt="trend_img_small15"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_danger"
                                    href="#"
                                  >
                                    fashion
                                  </a>
                                  <a
                                    className="blog_tags_cat blog_bg_orange"
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="blog_postcontent_wrap">
                            <div className="sp_post">
                              <a href="#">
                                <div className="post_thumb">
                                  <img
                                    src="demo-blog/images/trend_img_small16.jpg"
                                    alt="trend_img_small16"
                                  />
                                </div>
                              </a>
                              <div className="blog_postcontent">
                                <div className="blog_tags">
                                  <a
                                    className="blog_tags_cat blog_bg_success"
                                    href="#"
                                  >
                                    fashion
                                  </a>
                                  <a
                                    className="blog_tags_cat blog_bg_lightblue"
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
                                    Lorem ipsum dolor sit sed do eiusmod
                                  </a>
                                </h6>
                              </div>
                              <ul className="blog_postmeta mb-2">
                                <li>
                                  <a href="#">
                                    <i className="ti-calendar" />
                                    <span>April 14, 2018</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <i className="ti-comments" />
                                    <span>40</span>
                                  </a>
                                </li>
                              </ul>
                              <a href="#" className="text-capitalize">
                                Read More
                              </a>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="border-top border-bottom py-2 mt-4 text-center">
                        <a href="#">View All</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 mt-lg-0 mt-4 pt-3 pt-lg-0">
            <div className="sidebar">
              <div className="widget">
                <h5 className="widget_title3">About Me</h5>
                <div className="about_img">
                  <img src="demo-blog/images/about_img.jpg" alt="about_img" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet elit adipiscing elit. Praesent id
                  dolor dui dapibus gravida elit. Donec sit amet laoreet
                  sagittis.{" "}
                </p>
                <img src="demo-blog/images/signature.png" alt="signature" />
              </div>
              <div className="widget">
                <h5 className="widget_title3">Social Feed</h5>
                <ul className="list_none widget_social_counter social_icons border_social rounded_social">
                  <li>
                    <a href="#" className="sc_facebook">
                      <i className="ion-social-facebook" />
                    </a>
                    <div className="data">
                      <div className="counter_text">
                        <span className="counter">6455</span>
                      </div>
                      <div className="text">Likes</div>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="sc_twitter">
                      <i className="ion-social-twitter" />
                    </a>
                    <div className="data">
                      <div className="counter_text">
                        <span className="counter">3251</span>
                      </div>
                      <div className="text">Followers</div>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="sc_gplus">
                      <i className="ion-social-googleplus" />
                    </a>
                    <div className="data">
                      <div className="counter_text">
                        <span className="counter">3551</span>
                      </div>
                      <div className="text">Followers</div>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="sc_youtube">
                      <i className="ion-social-youtube-outline" />
                    </a>
                    <div className="data">
                      <div className="counter_text">
                        <span className="counter">6284</span>
                      </div>
                      <div className="text">Followers</div>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="sc_instagram">
                      <i className="ion-social-instagram-outline" />
                    </a>
                    <div className="data">
                      <div className="counter_text">
                        <span className="counter">3245</span>
                      </div>
                      <div className="text">Followers</div>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="sc_pinterest">
                      <i className="ion-social-pinterest-outline" />
                    </a>
                    <div className="data">
                      <div className="counter_text">
                        <span className="counter">9521</span>
                      </div>
                      <div className="text">Followers</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="widget">
                <h5 className="widget_title3">Newsletter</h5>
                <div className="newsletter_form">
                  <form>
                    <div className="outline_input-black">
                      <input
                        required=""
                        placeholder="Enter Email Address"
                        type="text"
                      />
                    </div>
                    <button
                      type="submit"
                      title="Subscribe"
                      className="btn btn-submit border-0"
                      name="submit"
                      value="Submit"
                    >
                      <span className="ti-email" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="widget">
                <h5 className="widget_title3">Recent Posts</h5>
                <ul className="recent_post border_bottom_dash list_none">
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
                            Lorem ipsum dolor sit amet, consectetur
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
                            Lorem ipsum dolor sit amet, consectetur
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
                            Lorem ipsum dolor sit amet, consectetur
                          </a>
                        </h6>
                        <p className="small m-0">April 14, 2018</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
