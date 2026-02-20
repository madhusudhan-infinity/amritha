'use client';

import { useEffect, useState } from 'react';

// --- Sub-components ---

const Header = () => (
  <div className="fixed-top">
    <div className="header-area bg-eef2da">
      <div className="container mw-1685">
        <div className="row align-items-center gy-2">
          <div className="col-lg-8 d-none d-sm-inline-block">
            <ul className="d-flex flex-wrap justify-content-center justify-content-lg-start flex-md-nowrap align-items-center p-0 m-0 list-unstyled header-info">
              <li className="d-flex align-items-center gap-10">
                <i className="ti ti-map-pin"></i>
                <span>Location: Gachibowli, Hyderabad</span>
              </li>
              <li className="d-flex align-items-center gap-10">
                <i className="ti ti-clock-hour-4"></i>
                <span>Working Hours: 24/7</span>
              </li>
              <li className="d-flex align-items-center gap-10 header-phone">
                <i className="ti ti-phone-call"></i>
                <span>
                  <a href="tel:+919247518680">+91 9247518680</a> | <a href="tel:+919247518681">9247518681</a>
                </span>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <div className="d-flex link-social-wrap align-items-center justify-content-center justify-content-lg-end">
              <div className="social-link d-flex align-items-center">
                <a href="https://www.facebook.com/" target="_blank"><i className="ti ti-brand-facebook"></i></a>
                <a href="https://www.twitter.com/" target="_blank"><i className="ti ti-brand-x"></i></a>
                <a href="https://www.instagram.com/" target="_blank"><i className="ti ti-brand-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav className="navbar navbar-expand-lg" id="navbar" style={{ backgroundColor: 'white' }}>
      <div className="container mw-1685">
        <div className="d-flex align-items-center">
          <a className="navbar-brand" href="/">
            <img src="/assets/images/AMRITHALOGO2.png" className="main-logo" alt="logo" style={{ width: '270px' }} />
            <img src="/assets/images/AMRITHALOGO2.png" className="white-logo" alt="white-logo" style={{ width: '270px' }} />
          </a>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            <li className="nav-item"><a className="nav-link active" href="#home">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Our Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#faq">FAQs</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="others-options d-flex align-items-center">
          <a href="#contact" className="default-btn active">
            <div className="d-flex align-items-center gap-10">
              <span className="d-none d-sm-inline-block">Schedule a Visit</span>
              <img src="/assets/images/right.svg" alt="right-white" style={{ filter: 'invert(1)' }} />
            </div>
          </a>
          <a className="navbar-toggler" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button">
            <span className="burger-menu">
              <span className="top-bar"></span>
              <span className="middle-bar"></span>
              <span className="bottom-bar"></span>
            </span>
          </a>
        </div>
      </div>
    </nav>
  </div>
);

const MobileNavbar = () => (
  <div className="mobile-navbar offcanvas offcanvas-end border-0" tabIndex={-1} id="offcanvasExample">
    <div className="offcanvas-header">
      <a href="/" className="logo d-inline-block">
        <img src="/assets/images/AMRITHALOGO2.png" alt="logo" />
      </a>
      <button type="button" className="btn-close opacity-1" data-bs-dismiss="offcanvas">
        <i className="ti ti-x"></i>
      </button>
    </div>
    <div className="offcanvas-body">
      <ul className="mobile-menu">
        <li className="mobile-menu-list"><a href="#home">Home</a></li>
        <li className="mobile-menu-list"><a href="#services">Our Services</a></li>
        <li className="mobile-menu-list"><a href="#faq">FAQs</a></li>
        <li className="mobile-menu-list"><a href="#contact">Contact Us</a></li>
      </ul>
    </div>
  </div>
);

const Banner = () => (
  <div className="banner-area bg-img" id="home" style={{ backgroundColor: '#f5f5f5' }}>
    <div className="container mw-1685">
      <div className="row align-items-end">
        <div className="col-xl-6">
          <div className="banner-content">
            <span className="top-title">Welcome to Amritha</span>
            <h1 style={{ color: '#990000' }}>Trusted Rehabilitation & Elder Care in Hyderabad</h1>
            <p>Timely, compassionate care that families can trust when it matters most.</p>
            <div className="d-flex align-items-center flex-wrap banner-btn">
              <a href="#contact" className="default-btn">
                <div className="d-flex gap-10 align-content-center">
                  <span>Let’s talk about your recovery</span>
                  <img src="/assets/images/right-white.svg" alt="right-white" />
                </div>
              </a>
              <div className="d-flex align-items-center gap-20 call-us">
                <i className="ti ti-phone-call"></i>
                <div>
                  <span className="d-block fw-bold">Talk to Our Care Team</span>
                  <span className="d-block number fw-bold">
                    <a href="tel:+919247518680" style={{ textDecoration: 'none' }}>+91 9247518680</a> | 
                    <a href="tel:+919247518681" style={{ textDecoration: 'none' }}> +91 9247518681</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          <div className="banner-img">
            <img src="/assets/images/amritha-image.webp" alt="banner-img" style={{ borderRadius: '21px' }} />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => (
  <div className="work-area pt-120" id="services">
    <div className="container mw-1685">
      <div className="row gy-2">
        <div className="col-lg-4">
          <span className="top-title" style={{ fontSize: '30px' }}>Our Services</span>
        </div>
        <div className="col-lg-8">
          <h2 className="main-title" style={{ color: '#990000' }}>Specialized Rehabilitation & Elder Care Services</h2>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-lg-4">
          <div className="work-content">
            <h3 style={{ color: '#990000' }}>
              Comprehensive medical rehabilitation and elder care services designed to restore dignity, independence and quality of life.
            </h3>
            <div className="text-center">
              <img src="/assets/images/works22.webp" alt="services" />
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="work-content-wrap">
            <div className="row g-4">
              {[
                { icon: 'fa-brain', title: 'Neurological Rehabilitation' },
                { icon: 'fa-bone', title: 'Orthopaedic Rehabilitation' },
                { icon: 'fa-ribbon', title: 'Oncology Rehabilitation' },
                { icon: 'fa-heart-pulse', title: 'Stroke Rehabilitation' },
                { icon: 'fa-wheelchair', title: 'Paralysis Care' },
                { icon: 'fa-user-clock', title: 'Dementia Care' },
                { icon: 'fa-brain', title: 'Alzheimer’s Care' },
                { icon: 'fa-person-walking', title: 'Parkinson’s Care' },
                { icon: 'fa-hand-holding-heart', title: 'Palliative Care' },
              ].map((service, index) => (
                <div className="col-md-6" key={index}>
                  <div className="work-single-item amenity-card">
                    <span className="amenity-icon"><i className={`fa-solid ${service.icon}`}></i></span>
                    <h3>{service.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Gallery = ({ openLightbox }: { openLightbox: (src: string) => void }) => (
  <div className="gallery-area ptb-120" style={{ backgroundColor: '#ffffff' }}>
    <div className="container mw-1685">
      <div className="row gy-2 mb-70">
        <div className="col-lg-12">
          <h2 className="main-title mt-2" style={{ color: '#990000' }}>A Glimpse Into Life at Amritha</h2>
        </div>
      </div>
      <div className="gallery-desktop d-none d-md-block">
        <div className="row g-4">
          {[1, 2, 3, 4, 5, 7, 8].map((num) => (
            <div className={num <= 3 ? "col-lg-4 col-md-6" : "col-lg-3 col-md-6"} key={num}>
              <div className="gallery-item" data-full={`/assets/images/gallery/image${num}.webp`} onClick={() => openLightbox(`/assets/images/gallery/image${num}.webp`)}>
                <img src={`/assets/images/gallery/image${num}.webp`} alt={`Gallery ${num}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="gallery-mobile d-block d-md-none">
        <div className="swiper gallerySwiper">
          <div className="swiper-wrapper">
            {[1, 2, 3, 4, 5, 7, 8].map((num) => (
              <div className="swiper-slide" key={num}>
                <div className="gallery-item" data-full={`/assets/images/gallery/image${num}.webp`} onClick={() => openLightbox(`/assets/images/gallery/image${num}.webp`)}>
                  <img src={`/assets/images/gallery/image${num}.webp`} alt="" />
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => (
  <div className="testimonial-area ptb-120" style={{ backgroundColor: '#f5f5f5' }}>
    <div className="container mw-1685">
      <div className="row g-4">
        <div className="col-xl-4">
          <div className="testimonial-content">
            <span className="top-title mb-3">Care Stories</span>
            <h2 className="main-title mb-3" style={{ color: '#990000' }}>They Say “Trust Amritha” — Here’s Why</h2>
            <p>Families trust Amritha for its compassionate approach, clinical excellence and dignified care. Our commitment to happy aging and personalized support creates lasting peace of mind for both elders and their loved ones.</p>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="testimonial-item-wrap position-relative">
            <div className="swiper testimonial-slide">
              <div className="swiper-wrapper">
                <div className="swiper-slide w-100">
                  <div className="d-lg-flex align-items-center testimonial-single-item">
                    <div className="flex-grow-1">
                      <div className="d-flex flex-wrap align-items-center star-title gap-2">
                        <div className="d-flex gap-1 text-warning star-icons">
                          <i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i>
                        </div>
                        <h3 className="mb-0">Care That Feels Like Family</h3>
                      </div>
                      <p className="mt-3">"I rarely write reviews, but my satisfaction with this service compelled me to share my experience. From start to finish, everything was handled with the utmost professionalism at Amrutha senior living in hyderabad. Great facilities, very helpful and cooperative staff, they are reliable, honest and work with integrity. Price is affordable with all the great services they provide."</p>
                      <div className="d-flex align-items-center info mt-4">
                        <div className="flex-shrink-0">
                          <img src="/assets/images/user11.jpg" className="rounded-circle" style={{ width: '50px', height: '50px' }} alt="user" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h4 className="mb-0">Nageswar Rao</h4>
                          <span>Assisted Living Resident</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide w-100">
                  <div className="d-lg-flex align-items-center testimonial-single-item">
                    <div className="flex-grow-1">
                      <div className="d-flex flex-wrap align-items-center star-title gap-2">
                        <div className="d-flex gap-1 text-warning star-icons">
                          <i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i><i className="ti ti-star-filled"></i>
                        </div>
                        <h3 className="mb-0">Professional Care With Compassion</h3>
                      </div>
                      <p className="mt-3">"Amritha Senior Living has such a peaceful and well-kept environment. The staff truly go out of their way to be supportive, attentive, and respectful. The place feels safe, comfortable, and genuinely homely. It’s a wonderful choice for seniors to live with dignity and real happiness.."</p>
                      <div className="d-flex align-items-center info mt-4">
                        <div className="flex-shrink-0">
                          <img src="/assets/images/user10.jpg" className="rounded-circle" style={{ width: '50px', height: '50px' }} alt="user" />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h4 className="mb-0">Bala Sai Akanksha Nittala</h4>
                          <span>Rehabilitation Care</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="testimonial-pagination">
                <div className="swiper-pagination-testimonial justify-content-center d-flex mt-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FAQ = () => (
  <div className="faq-area-four pb-120" id="faq">
    <div className="container mw-1685">
      <div className="mb-70 mt-0 text-center">
        <span className="top-title mb-3">Frequently Asked Questions</span>
        <h2 className="main-title mw-975 mx-auto" style={{ color: '#990000' }}>Have Questions About Amritha? Find Your Answers</h2>
      </div>
      <div className="row g-4">
        <div className="col-lg-6">
          <div className="accordion faq-wrapper style-two" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                  What is Amritha Advanced Rehab & Elder Care?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>Amritha is a premium Advanced Rehabilitation & Elder Care center providing therapy and assisted living under one roof with a focus on recovery, dignity and quality of life.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                  Who can benefit from your services?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>Our services are ideal for post-hospitalization patients, stroke survivors, elders, post-surgery patients and individuals requiring neurological, orthopaedic or long-term Elder Care.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                  What rehabilitation services do you offer?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>We provide stroke rehabilitation, orthopaedic rehab, neurological rehab, post-surgical recovery, geriatric rehabilitation, pain management, balance training and mobility training.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                  Are therapy plans personalized?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>Yes. Every resident receives a personalized care and rehabilitation plan based on medical evaluation, recovery goals and doctor recommendations.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive">
                  What therapies are available?
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  <p>We offer physiotherapy, occupational therapy, speech & swallowing therapy, cognitive rehabilitation and functional mobility training.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="accordion faq-wrapper style-two" id="accordionExample2">
             <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix">
                  Is medical care available 24/7?
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse show" data-bs-parent="#accordionExample2">
                <div className="accordion-body">
                  <p>Yes. We provide round-the-clock nursing care with on-call doctors and regular medical supervision.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven">
                  Are rooms safe and elder-friendly?
                </button>
              </h2>
              <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                <div className="accordion-body">
                  <p>Yes. All rooms include grab bars, anti-skid flooring, emergency call systems, wheelchair access and elder-safe bathrooms.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight">
                  What food and diet plans are provided?
                </button>
              </h2>
              <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                <div className="accordion-body">
                  <p>We provide nutritious, hygienic meals including diabetic, cardiac, renal and soft diets as per doctor and dietician recommendations.</p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine">
                  How are families kept informed?
                </button>
              </h2>
              <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                <div className="accordion-body">
                  <p>Families receive regular updates through calls, WhatsApp, reports and our Nuvertos care-management system.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <div className="contact-us-area bg-img ptb-120" id="contact" style={{ backgroundColor: '#f5f5f5' }}>
    <div className="container mw-1685">
      <div className="row gy-2 mb-70">
        <div className="col-lg-4"><span className="top-title">CONTACT US</span></div>
        <div className="col-lg-8">
          <h2 className="main-title ms-auto mw-975" style={{ color: '#990000' }}>Connect With Us to Begin a Journey of Happy Recovery</h2>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-lg-8">
          <div className="contact-us-form">
            <form className="contact-us-form">
              <div className="row g-4">
                <div className="col-lg-6"><input type="text" className="form-control" placeholder="Your Name" required /></div>
                <div className="col-lg-6"><input type="email" className="form-control" placeholder="Your Email" required /></div>
                <div className="col-lg-6"><input type="number" className="form-control" placeholder="Contact Number" required /></div>
                <div className="col-lg-6">
                  <select className="form-control mb-3" required>
                    <option value="">Care Requirement</option>
                    <option>Assisted Living</option>
                    <option>Rehabilitation Care</option>
                    <option>Elder Care</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div className="col-lg-12"><textarea rows={7} className="form-control" placeholder="Tell us about your care needs or questions"></textarea></div>
                <div className="col-lg-12">
                  <button type="submit" className="default-btn w-100">
                    <span className="btn-text d-flex align-items-center justify-content-center gap-10">
                      <span>Let’s talk about your recovery</span>
                      <img src="/assets/images/right-white.svg" alt="" />
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="contact-us-img h-100">
            <img src="/assets/images/contact-us3.jpg" className="h-100 object-fit-cover ukiyo rounded-4" alt="contact-us" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="footer-area pb-120">
    <div className="container mw-1685">
      <div className="row g-4">
        <div className="col-lg-3 col-sm-6">
          <div className="footer-single-widget">
            <div className="footer-logo-badge">
              <img src="/assets/images/AMRITHALOGO2.png" alt="Amritha Logo" />
            </div>
            <ul className="p-0 m-0 list-unstyled info-list mt-4">
              <li className="d-flex">
                <div className="flex-shrink-0"><i className="ti ti-map-pin-filled"></i></div>
                <div className="flex-grow-1 ms-2">
                  <h6>Location</h6>
                  <p>Ground Floor, NTR CREST Building, Door No. 2, 56/17, adj. to STAR Hypermarket, Gachibowli, Serilingampalle (M), Hyderabad, Telangana 500032</p>
                </div>
              </li>
              <li className="d-flex">
                <div className="flex-shrink-0"><i className="ti ti-mail-filled"></i></div>
                <div className="flex-grow-1 ms-2">
                  <h6>Email</h6>
                  <a href="mailto:adminasl@amrithahappyaging.com">adminasl@amrithahappyaging.com</a>
                </div>
              </li>
              <li className="d-flex">
                <div className="flex-shrink-0"><i className="ti ti-phone-filled"></i></div>
                <div className="flex-grow-1 ms-2">
                  <h6>Phone</h6>
                  <a>+91 9247518680 / +91 9247518681</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="footer-single-widget">
            <h3>Quick Links</h3>
            <ul className="import-link p-0 m-0 list-unstyled">
              <li><a href="https://amrithahappyaging.com/about-us/">About Amritha</a></li>
              <li><a href="#services">Our Care Approach</a></li>
              <li><a href="#services">Rehabilitation Services</a></li>
              <li><a href="#services">Elder Care Programs</a></li>
              <li><a href="#home">Care Stories & Updates</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="footer-single-widget">
            <h3>Our Services</h3>
            <ul className="import-link p-0 m-0 list-unstyled">
              <li><a href="https://amrithahappyaging.com/service/recovery-rehabilitation/">Rehabilitation</a></li>
              <li><a href="https://amrithahappyaging.com/service/orthopaedic-rehab/">Orthopaedic Rehabilitation</a></li>
              <li><a href="https://amrithahappyaging.com/service/neurology-rehab/">Neurological Rehabilitation</a></li>
              <li><a href="https://amrithahappyaging.com/service/oncology-rehab/">Oncology & Rehabilitation</a></li>
              <li><a href="https://amrithahappyaging.com/service/assisted-living-elder-care/">Assisted Living Elder Care</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6">
          <div className="footer-single-widget">
            <h3>Follow Us</h3>
            <p style={{ color: 'aliceblue' }}>Stay connected with Amritha for wellness tips, community stories and updates.</p>
            <div className="footer-social-icons d-flex gap-15 mt-4">
              <a href="https://www.facebook.com/" target="_blank" className="social-btn facebook"><i className="ti ti-brand-facebook"></i></a>
              <a href="https://www.instagram.com/" target="_blank" className="social-btn instagram"><i className="ti ti-brand-instagram"></i></a>
              <a href="https://www.linkedin.com/" target="_blank" className="social-btn linkedin"><i className="ti ti-brand-linkedin"></i></a>
              <a href="https://www.youtube.com/" target="_blank" className="social-btn youtube"><i className="ti ti-brand-youtube"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const FloatingContact = ({ 
  isVisible, 
  onOpen, 
  onClose 
}: { 
  isVisible: boolean; 
  onOpen: (e: React.MouseEvent) => void; 
  onClose: () => void 
}) => (
  <div className="floating-contact">
    {!isVisible && (
      <button className="floating-toggle" onClick={onOpen}>
        <i className="ti ti-phone-call"></i>
        <span>Request a Call</span>
      </button>
    )}

    <div className="floating-form" style={{ display: isVisible ? 'block' : 'none' }}>
      <button type="button" className="floating-close" onClick={onClose}><i className="ti ti-x"></i></button>
      <h4>Talk to Our Care Team</h4>
      <p>Get guidance on assisted living & rehabilitation</p>
      <form id="floatingForm">
        <input type="text" name="name" className="form-control mb-3" placeholder="Your Name" required />
        <input type="tel" name="phone" className="form-control mb-3" placeholder="Phone Number" required />
        <select className="form-control mb-3" name="requires" required>
          <option value="">Care Requirement</option>
          <option>Assisted Living</option>
          <option>Rehabilitation Care</option>
          <option>Elder Care</option>
          <option>General Enquiry</option>
        </select>
        <button type="submit" className="default-btn w-100">
           <span className="btn-text d-flex gap-10 align-items-center justify-content-center">
            <span>Request Call Back</span>
            <img src="/assets/images/right-white.svg" alt="" />
          </span>
        </button>
      </form>
    </div>
  </div>
);

// --- Main Page Component ---

export default function Home() {
  const [isFloatingFormVisible, setIsFloatingFormVisible] = useState(false);
  const [lightboxActive, setLightboxActive] = useState(false);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  useEffect(() => {
    // Initializing Swipers if they exist in the window
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && (window as any).Swiper) {
        new (window as any).Swiper(".testimonial-slide", {
          slidesPerView: 1,
          spaceBetween: 0,
          centeredSlides: false,
          preventClicks: true,
          loop: false,
          autoHeight: true,
          autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
          pagination: {
            el: ".swiper-pagination-testimonial",
            clickable: true,
          },
        });

        new (window as any).Swiper(".gallerySwiper", {
          slidesPerView: 1,
          spaceBetween: 10,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
          },
        });
      }
    }, 100);

    const formTimer = setTimeout(() => {
      setIsFloatingFormVisible(true);
    }, 600);
    return () => {
      clearTimeout(timer);
      clearTimeout(formTimer);
    };
  }, []);

  const openForm = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFloatingFormVisible(true);
  };

  const closeForm = () => {
    setIsFloatingFormVisible(false);
  };

  const openLightbox = (imgSrc: string) => {
    setLightboxImg(imgSrc);
    setLightboxActive(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxActive(false);
    setLightboxImg(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="main-wrapper">
      <Header />
      <MobileNavbar />
      
      <main>
        <Banner />
        <Services />
        <Gallery openLightbox={openLightbox} />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <div className="copy-right-area">
        <div className="container mw-1685">
          <div className="d-flex flex-wrap gap-10 justify-content-center justify-content-lg-between align-items-center">
            <p className="mb-0">
              © <span>Amritha Advanced Rehabilitation & Elder Care.</span> All Rights Reserved.| Powered by <strong><a href="https://infinityspark.com" target="_blank">InfinitySpark</a></strong>
            </p>
          </div>
        </div>
      </div>

      <button type="button" id="backtotop"><i className="ti ti-arrow-narrow-up"></i></button>

      <FloatingContact 
        isVisible={isFloatingFormVisible} 
        onOpen={openForm} 
        onClose={closeForm} 
      />

      <div className={`gallery-lightbox ${lightboxActive ? 'active' : ''}`} id="galleryLightbox" onClick={closeLightbox}>
        <span className="lightbox-close" onClick={closeLightbox}>&times;</span>
        {lightboxImg && <img id="lightboxImage" src={lightboxImg} alt="Gallery Preview" />}
      </div>
    </div>
  );
}
