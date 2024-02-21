import React from 'react'
import './Footer.css'
import '../assets/css/main.css'

const Footer = () => {
  return (
    <>
      <footer className="container-fluid d-print-none">
        <div className="pt-5 pb-4">
          <section className="row mx-auto w-75">
            <div className="col-sm-12 col-lg-6 col-xl-4 list-unstyled pb-3">
              <h2 className="ft-title">Store Hours</h2>
              <dl className="location-hours twocol-list list-unstyled">
                <div className="twocol-list-item">
                  <dt className="location-hours-icon">Monday</dt>
                  <dd>12:00pm - 7:00pm</dd>
                </div>
                <div className="twocol-list-item">
                  <dt className="location-hours-none">Tuesday</dt>
                  <dd>12:00pm - 7:00pm</dd>
                </div>
                <div className="twocol-list-item">
                  <dt className="location-hours-none">Wednesday</dt>
                  <dd>12:00pm - 7:00pm</dd>
                </div>
                <div className="twocol-list-item">
                  <dt className="location-hours-none">Thursday</dt>
                  <dd>12:00pm - 7:00pm</dd>
                </div>
                <div className="twocol-list-item">
                  <dt className="location-hours-none">Friday</dt>
                  <dd>12:00pm - 7:00pm</dd>
                </div>
                <div className="twocol-list-item">
                  <dt className="location-hours-none">Saturday</dt>
                  <dd>12:00pm - 7:00pm</dd>
                </div>
                <div className="twocol-list-item">
                  <dt className="location-hours-none">Sunday</dt>
                  <dd>11:00am - 4:00pm</dd>
                </div>
              </dl>
              <ul className="location-hours-exception list-unstyled">
                <li>Closed on all statutory holidays</li>
              </ul>
            </div>
            <div className="col-sm-12 col-lg-6 col-xl-4 pb-3">
              <h2 className="ft-title">Our Location</h2>
              <ul className="location-map list-unstyled">
                <address>
                  <a
                    href="https://www.openstreetmap.org/way/552425552"
                    title="View our location"
                  >
                    <li>Steep Hill Food Co-op</li>
                    <li>730 Broadway Avenue</li>
                    <li>Saskatoon, SK, Canada</li>
                    <li>S7N 1B4</li>
                  </a>
                </address>
              </ul>
              <ul className="list-unstyled">
                <li className="payment-cash">Cash</li>
                <li className="payment-interac">Interac Debit</li>
                <li className="payment-mastercard">Mastercard</li>
                <li className="payment-visa">Visa</li>
              </ul>
            </div>
            <div className="col-sm-12 col-lg-6 col-xl-4 pb-3">
              <h2 className="ft-title">Contact</h2>
              <ul className="list-unstyled">
                <li className="contact-phone">
                  <a href="tel:306-664-4455" title="Call us">
                    306-664-4455
                  </a>
                </li>
                <li className="contact-email">
                  <a href="mailto:hello@steephillfood.ca" title="Email us">
                    hello@steephillfood.ca
                  </a>
                </li>
              </ul>
              <h2 className="ft-title">Social</h2>
              <ul className="list-unstyled">
                <li className="social-facebook">
                  <a
                    href="https://www.facebook.com/steephillfoodcoop"
                    title="Follow us on Facebook"
                  >
                    steephillfoodcoop
                  </a>
                </li>
                <li className="social-instagram">
                  <a
                    href="https://www.instagram.com/steephillfoodcoopyxe/"
                    title="Follow us on Instagram"
                  >
                    steephillfoodcoopyxe
                  </a>
                </li>
                <li className="social-twitter">
                  <a
                    href="https://twitter.com/steephillyxe"
                    title="Follow us on Twitter"
                  >
                    steephillyxe
                  </a>
                </li>
                <li className="social-tiktok">
                  <a
                    href="https://www.tiktok.com/@steephillfoodcoopyxe"
                    title="Follow us on TikTok"
                  >
                    steephillfoodcoopyxe
                  </a>
                </li>
                <li className="social-yelp">
                  <a
                    href="https://www.yelp.com/biz/steep-hill-food-co-operative-saskatoon"
                    title="Review us on Yelp"
                  >
                    Steep Hill Food Co-op
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-lg-6 col-xl-4">
              <h2 className="ft-title">Be Informed</h2>
              <p>Subscribe to our newsletter to get our latest news.</p>
              <form
                action="https://sasklife.us7.list-manage.com/subscribe/post?u=adea2ce322acaa9ac54e974a9&id=b94e7b55cd"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                className="validate"
                target="_blank"
                noValidate=""
              >
                <div className="form-group">
                  <input
                    type="email"
                    name="EMAIL"
                    id="mce-EMAIL"
                    placeholder="Enter email address"
                    className="form-control"
                  />
                  <div
                    style={{ position: "absolute", left: "-5000px" }}
                    aria-hidden="true"
                  >
                    <input
                      type="text"
                      name="b_adea2ce322acaa9ac54e974a9_b94e7b55cd"
                      tabIndex={-1}
                      defaultValue=""
                    />
                  </div>
                  <input
                    type="submit"
                    defaultValue="Subscribe"
                    id="mc-embedded-subscribe"
                    className="form-control btn btn-success mt-2"
                  />
                </div>
              </form>
            </div>
          </section>
        </div>
        <section className="ft-legal row px-3">
          <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9 pt-3">
            <ul className="list-group list-group-horizontal">
              <li className="list-group-item bg-transparent border-0 pl-0 pr-1">
                <a href="https://steephillfood.ca/privacy/">Privacy</a>
              </li>
              <li className="list-group-item bg-transparent border-0 pr-1">
                <a href="https://steephillfood.ca/terms/">Terms</a>
              </li>
              <li className="list-group-item bg-transparent border-0 pr-1">
                <a href="https://steephillfood.ca/attribution/">Attribution</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 col-xl-3 pt-3">
            <ul className="list-group list-group-horizontal justify-content-end">
              <li className="list-group-item bg-transparent border-0 pl-0 pr-1">
                <a href="https://steephillfood.ca/copyright/">
                  © 2018 - 2023 Steep Hill Food Co-operative Ltd.
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <ul className="list-group list-group-horizontal">
              <li className="list-group-item bg-transparent border-0 pl-0 pr-1">
                <a href="https://www.adamsdesk.com/" className="text-muted">
                  adamsdesk design
                </a>
              </li>
            </ul>
          </div>
        </section>
      </footer>
    </>
  )
}

export default Footer