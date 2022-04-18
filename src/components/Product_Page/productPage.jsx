import React from "react";
import "./productPage.css";

//Images
import headphone1_img from "../../assets/images/headphone1_img.jpg";
import coinbuild_img from "../../assets/images/coinbuild_img.png";
import white_solo_2_wireless_img from "../../assets/images/white_solo_2_wireless_img.png";

//Icons
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";

const productPage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="active-product-image col-md-4">
            <img src={headphone1_img} alt="Active-Product" />
          </div>
          <div className="col-md-8">
            <div className="row">
              <a href="#">Headphones</a>
              <h1>Ultra Wireless S50 Headphones S50 with Bluetooth</h1>
            </div>
            <div
              className="review-stars row"
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginRight: "-15px",
                marginLeft: "-15px",
              }}
            >
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <a href="#">(3 customer reviews)</a>
            </div>
            <div className="row">
              <div className="brand">
                <img
                  src={coinbuild_img}
                  alt="Apple"
                  style={{ width: "140px" }}
                />
              </div>
              <div className="availability">
                Availability:
                <span style={{ color: "green", fontWeight: "bold" }}>
                  {" "}
                  23 in stock{" "}
                </span>
              </div>
            </div>
            <hr className="single-product-title-divider" />
            <div className="row">
              <div className="wishlist-button">
                <a href="#">
                  <i className="fa fa-heart-o"></i>
                  <span>Wishlist</span>
                </a>
              </div>

              <div className="compare-button">
                <a href="#">
                  <MdCompareArrows />
                  <span>Compare</span>
                </a>
              </div>
            </div>
            <div className="row">
              <ul className="single-product-features">
                <li>4.5 inch HD Touch Screen (1280 x 720)</li>
                <li>Android 4.4 KitKat OS</li>
                <li>1.4 GHz Quad Core™ Processor</li>
                <li>20 MP front and 28 megapixel CMOS rear camera</li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p>
                <strong>SKU:</strong> FW511948218
              </p>
            </div>
            <div className="row">
              <p className="price">$1,215.00</p>
            </div>
            <hr className="single-product-title-divider" />
            <form action="submit">
              <table className="variations" cellSpacing="0">
                <tbody>
                  <tr>
                    <td className="label">
                      <label htmlFor="color">
                        <strong>Color</strong>
                      </label>
                    </td>
                    <td className="value">
                      <select
                        name="item-color"
                        id="item-color"
                        className="item-select"
                      >
                        <option defaultValue="default">Choose an option</option>
                        <option defaultValue="black with white">
                          Black with White
                        </option>
                        <option defaultValue="white with gold">
                          White with Gold
                        </option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>

              <hr />
              <div className="single-variation-wrap row">
                <div className="quantity">
                  <label htmlFor="quantity"></label>
                  <input
                    type="number"
                    min="1"
                    max="100"
                    name="quantity"
                    defaultValue="1"
                    inputMode="numeric"
                    className="input-quantity"
                  />
                </div>
                <button
                  type="submit"
                  className="single-product-add-to-cart-button"
                >
                  <span className="button-icon">
                    <i className="fa fa-cart-arrow-down"></i>
                  </span>
                  <span>
                    <p>Add to cart</p>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="product-page-tablist col-12">
            <ul role="tablist" className="single-product-page-tablist">
              <li role="tab" className="reviews-tab">
                <a href="#"> Reviews </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="review-tab">
          <div className="advanced-reviews">
            <div className="advanced-review row">
              <div className="col-xs-12 col-md-6">
                <h2 className="based-title">Based on 3 reviews</h2>
                <div className="avg-rating">
                  <span className="avg-rating-number">4.3</span>
                  <p>overall</p>
                </div>
                <div className="rating-histogram">
                  <div className="rating-bar">
                    <div className="star-rating" title="Rated 5 out of 5">
                      <span style={{ width: "100%" }}>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </span>
                    </div>
                    <div className="rating-percentage-bar">
                      <span
                        style={{ width: "33%" }}
                        className="rating-percentage"
                      ></span>
                    </div>
                    <div className="rating-count">1</div>
                  </div>
                  <div className="rating-bar">
                    <div className="star-rating" title="Rated 4 out of 5">
                      <span style={{ width: "100%" }}>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </span>
                    </div>
                    <div className="rating-percentage-bar">
                      <span
                        style={{ width: "67%" }}
                        className="rating-percentage"
                      ></span>
                    </div>
                    <div className="rating-count">2</div>
                  </div>
                  <div className="rating-bar">
                    <div className="star-rating" title="Rated 3 out of 5">
                      <span style={{ width: "100%" }}>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </span>
                    </div>
                    <div className="rating-percentage-bar">
                      <span
                        style={{ width: "0%" }}
                        className="rating-percentage"
                      ></span>
                    </div>
                    <div className="rating-count">0</div>
                  </div>
                  <div className="rating-bar">
                    <div className="star-rating" title="Rated 2 out of 5">
                      <span style={{ width: "100%" }}>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </span>
                    </div>
                    <div className="rating-percentage-bar">
                      <span
                        style={{ width: "0%" }}
                        className="rating-percentage"
                      ></span>
                    </div>
                    <div className="rating-count">0</div>
                  </div>
                  <div className="rating-bar">
                    <div className="star-rating" title="Rated 1 out of 5">
                      <span style={{ width: "100%" }}>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </span>
                    </div>
                    <div className="rating-percentage-bar">
                      <span
                        style={{ width: "0%" }}
                        className="rating-percentage"
                      ></span>
                    </div>
                    <div className="rating-count">0</div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-6">
                <div className="review-form-wrapper">
                  <div id="review-form">
                    <div id="respond" className="comment-respond">
                      <h3 className="comment-reply-title">Add a review</h3>
                      <form action="submit" className="comment-form">
                        <p className="comment-form-rating">
                          <label htmlFor="rating">Your Rating</label>
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                        </p>
                        <p className="comment-form-comment">
                          <label htmlFor="rating">Your Review</label>
                          <textarea
                            name="comment"
                            id="comment"
                            cols="45"
                            rows="8"
                            aria-required="true"
                          ></textarea>
                        </p>
                        <p className="comment-form-author">
                          <label htmlFor="rating">Name *</label>
                          <input
                            id="author"
                            name="author"
                            type="text"
                            size="30"
                            aria-required="true"
                            style={{ width: "100% !important" }}
                          />
                        </p>
                        <p className="comment-form-email">
                          <label htmlFor="rating">Email *</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            size="30"
                            aria-required="true"
                            style={{ width: "100% !important" }}
                          />
                        </p>
                        <p className="comment-form-cookies-consent">
                          <input className="consent-checkbox" type="checkbox" />
                          <label
                            htmlFor="cookies consent"
                            className="consent details"
                          >
                            Save my name, email, and website in this browser for
                            the next time I commsdadsasent.
                          </label>
                        </p>
                        <p className="form-submit">
                          <input
                            type="submit"
                            name="submit"
                            defaultValue="Add Review"
                            className="single-product-add-to-cart-button"
                          />
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="comments">
              <ol className="commentlist">
                <li className="comment">
                  <div className="comment-container">
                    <div className="comment-text">
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 4 out of 5"
                        style={{ paddingBottom: "1em" }}
                      >
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </div>
                      <div className="description">
                        <p>
                          Fusce vitae nibh mi. Integer posuere, libero et
                          ullamcorper facilisis, enim eros tincidunt orci, eget
                          vestibulum sapien nisi ut leo. Cras finibus vel est ut
                          mollis. Donec luctus condimentum ante et euismod.
                        </p>
                      </div>
                      <p className="meta">
                        <strong>John Doe</strong>–<time>March 3,2016</time>
                      </p>
                    </div>
                  </div>
                </li>
                <li className="comment">
                  <div className="comment-container">
                    <div className="comment-text">
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 4 out of 5"
                        style={{ paddingBottom: "1em" }}
                      >
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                      <div className="description">
                        <p>
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis egestas.
                          Suspendisse eget facilisis odio. Duis sodales augue eu
                          tincidunt faucibus. Etiam justo ligula, placerat ac
                          augue id, volutpat porta dui.
                        </p>
                      </div>
                      <p className="meta">
                        <strong>Anna Kowalsky</strong>–
                        <time>March 16,2016</time>
                      </p>
                    </div>
                  </div>
                </li>
                <li className="comment" style={{ borderBottom: "0" }}>
                  <div className="comment-container">
                    <div className="comment-text">
                      <div
                        className="star-rating"
                        role="img"
                        aria-label="Rated 4 out of 5"
                        style={{ paddingBottom: "1em" }}
                      >
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-regular fa-star"></i>
                      </div>
                      <div className="description">
                        <p>
                          Sed id tincidunt sapien. Pellentesque cursus accumsan
                          tellus, nec ultricies nulla sollicitudin eget. Donec
                          feugiat orci vestibulum porttitor sagittis.
                        </p>
                      </div>
                      <p className="meta">
                        <strong>Peter Wargner</strong>–
                        <time>March 27,2016</time>
                      </p>
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <section className="related-products">
          <h2>Related Products</h2>
          <hr />
          <div className="row sec-content" style={{ width: "100%" }}>
            <div className="col-lg-3 col-md-2 product-card">
              <span className="product-categories-span">
                <a href="#" className="category-title">
                  Headphones
                </a>
              </span>
              <a href="#" style={{ textDecoration: "none" }}>
                <div className="product-title">Purple Solo 2 Wireless</div>
              </a>
              <div className="product-img-wrapper d-flex justify-content-center align-items-center">
                <a href="#">
                  <img src={headphone1_img} alt="" />
                </a>
              </div>
              <div className="product-card-footer">
                <div className="product-price">$248.00</div>
                <div className="add-to-cart-icon">
                  <span title="Add to cart">
                    <i className="fa fa-cart-arrow-down"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-2 product-card">
              <span className="product-categories-span">
                <a href="#" className="category-title">
                  Headphones
                </a>
              </span>
              <a href="#" style={{ textDecoration: "none" }}>
                <div className="product-title" style={{ marginTop: "7px" }}>
                  White Solo 2 Wireless
                </div>
              </a>
              <div className="product-img-wrapper d-flex justify-content-center align-items-center">
                <a href="#">
                  <img src={white_solo_2_wireless_img} alt="" />
                </a>
              </div>
              <div className="product-card-footer">
                <div className="product-price">$248.00</div>
                <div className="add-to-cart-icon">
                  <span title="Add to cart">
                    <i className="fa fa-cart-arrow-down"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-2 product-card">
              <span className="product-categories-span">
                <a href="#" className="category-title">
                  Headphones
                </a>
              </span>
              <a href="#" style={{ textDecoration: "none" }}>
                <div className="product-title">
                  Ultra Wireless S50 Headphones S50 with Bluetooth
                </div>
              </a>
              <div className="product-img-wrapper d-flex justify-content-center align-items-center">
                <a href="#">
                  <img src={headphone1_img} alt="" />
                </a>
              </div>
              <div className="product-card-footer">
                <div className="product-price">$350.00</div>
                <div className="add-to-cart-icon">
                  <span title="Add to cart">
                    <i className="fa fa-cart-arrow-down"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default productPage;
