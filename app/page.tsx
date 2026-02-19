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
          <h2 className="main-title">Specialized Rehabilitation & Elder Care Services</h2>
        </div>
      </div>
      <div className="row g-4 mt-4">
        <div className="col-lg-4">
          <div className="work-content">
            <h3 style={{ color: '#990000' }}>
              Comprehensive medical rehabilitation and elder care services designed to restore dignity, independence and quality of life.
            </h3>
            <div className="text-center mt-4">
              <img src="/assets/images/works22.webp" alt="services" style={{ height: '400px' }} />
            </div>
          </div>
        </div>
        <div className="col-lg-8">
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
);

const Gallery = ({ openLightbox }: { openLightbox: (src: string) => void }) => (
  <div className="gallery-area ptb-120" style={{ backgroundColor: '#ffffff' }}>
    <div className="container mw-1685">
      <h2 className="main-title mb-5" style={{ color: '#990000' }}>A Glimpse Into Life at Amritha</h2>
      <div className="gallery-desktop d-none d-md-block">
        <div className="row g-4">
          {[1, 2, 3, 4, 5, 7, 8].map((num) => (
            <div className={num <= 3 ? "col-lg-4 col-md-6" : "col-lg-3 col-md-6"} key={num}>
              <div className="gallery-item" onClick={() => openLightbox(`/assets/images/gallery/image${num}.webp`)}>
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
                  <div className="gallery-item" onClick={() => openLightbox(`/assets/images/gallery/image${num}.webp`)}>
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
            <p>Families trust Amritha for its compassionate approach, clinical excellence and dignified care.</p>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="swiper testimonial-slide">
            <div className="swiper-wrapper">
              <div className="swiper-slide w-100">
                <div className="d-lg-flex align-items-center testimonial-single-item">
                  <div className="flex-grow-1">
                    <div className="d-flex flex-wrap align-items-center star-title gap-2">
                      <div className="d-flex gap-1 text-warning">
                        {[1, 2, 3, 4, 5].map((s) => <i key={s} className="ti ti-star-filled"></i>)}
                      </div>
                      <h3 className="mb-0">Care That Feels Like Family</h3>
                    </div>
                    <p className="mt-3">"From start to finish, everything was handled with the utmost professionalism at Amrutha senior living in hyderabad. Great facilities, very helpful and cooperative staff."</p>
                    <div className="d-flex align-items-center info mt-4">
                      <img src="/assets/images/user11.jpg" className="rounded-circle" style={{ width: '50px', height: '50px' }} alt="user" />
                      <div className="ms-3">
                        <h4 className="mb-0">Nageswar Rao</h4>
                        <span>Assisted Living Resident</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-pagination-testimonial mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FAQ = () => (
  <div className="faq-area-four pb-120" id="faq">
    <div className="container mw-1685">
      <div className="text-center mb-5">
        <span className="top-title">Frequently Asked Questions</span>
        <h2 className="main-title mt-3" style={{ color: '#990000' }}>Have Questions About Amritha? Find Your Answers</h2>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                  What is Amritha Advanced Rehab & Elder Care?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  Amritha is a premium center providing therapy and assisted living under one roof.
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
  <div className="contact-us-area ptb-120" id="contact" style={{ backgroundColor: '#f5f5f5' }}>
    <div className="container mw-1685">
      <div className="row mb-5">
        <div className="col-lg-4"><span className="top-title">CONTACT US</span></div>
        <div className="col-lg-8">
          <h2 className="main-title" style={{ color: '#990000' }}>Connect With Us to Begin a Journey of Happy Recovery</h2>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-lg-8">
          <form className="contact-us-form">
            <div className="row g-4">
              <div className="col-lg-6"><input type="text" className="form-control" placeholder="Your Name" required /></div>
              <div className="col-lg-6"><input type="email" className="form-control" placeholder="Your Email" required /></div>
              <div className="col-lg-6"><input type="number" className="form-control" placeholder="Contact Number" required /></div>
              <div className="col-lg-6">
                <select className="form-control" required>
                  <option value="">Care Requirement</option>
                  <option>Assisted Living</option>
                  <option>Rehabilitation Care</option>
                </select>
              </div>
              <div className="col-lg-12"><textarea rows={7} className="form-control" placeholder="Tell us about your care needs"></textarea></div>
              <div className="col-lg-12">
                <button type="submit" className="default-btn w-100">
                  <span>Let’s talk about your recovery</span>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-4">
          <img src="/assets/images/contact-us3.jpg" className="w-100 h-100 object-fit-cover rounded-4" alt="contact" />
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
            <ul className="info-list list-unstyled mt-4">
              <li><i className="ti ti-map-pin-filled"></i> Gachibowli, Hyderabad, Telangana 500032</li>
              <li><i className="ti ti-mail-filled"></i> adminasl@amrithahappyaging.com</li>
              <li><i className="ti ti-phone-filled"></i> +91 9247518680</li>
            </ul>
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
        </select>
        <button type="submit" className="default-btn w-100">Request Call Back</button>
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
    const timer = setTimeout(() => {
      setIsFloatingFormVisible(true);
    }, 600);
    return () => clearTimeout(timer);
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
