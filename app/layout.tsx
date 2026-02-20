import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amritha Advanced Rehabilitation & Elder Care | Assisted Living & Rehabilitation Centre in Hyderabad",
  description: "Amritha Advanced Rehabilitation & Elder Care in Gachibowli, Hyderabad offers premium assisted living, elder care, and medical rehabilitation including neurological, orthopaedic and oncology rehabilitation. Compassionate, dignified and personalized elder care.",
  keywords: "Amritha Advanced Rehabilitation & Elder Care, Elder Care Hyderabad, assisted living Hyderabad, elder care Hyderabad, elder care home Gachibowli, rehabilitation centre Hyderabad, neurological rehabilitation, oncology rehabilitation, orthopaedic rehabilitation, Elder Care, elderly care Telangana",
  authors: [{ name: "Amritha Advanced Rehabilitation & Elder Care" }],
  robots: "index, follow",
  alternates: {
    canonical: "https://landing.amrithahappyaging.com/",
  },
  openGraph: {
    type: "website",
    title: "Amritha Advanced Rehabilitation & Elder Care | Happy Aging & Elegant Living",
    description: "A premium Advanced Rehabilitation & Elder Care and rehabilitation centre in Hyderabad offering assisted living, elder care, and specialized medical rehabilitation with dignity, comfort and compassion.",
    url: "https://www.amrithahappyaging.com/",
    siteName: "Amritha Advanced Rehabilitation & Elder Care",
    images: [
      {
        url: "https://www.amrithahappyaging.com/assets/images/og-amritha-senior-living.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amritha Advanced Rehabilitation & Elder Care | Assisted Living & Rehab in Hyderabad",
    description: "Premium Advanced Rehabilitation & Elder Care & rehabilitation centre in Gachibowli, Hyderabad. Assisted living, elder care, oncology, neurological & orthopaedic rehabilitation.",
    images: ["https://www.amrithahappyaging.com/assets/images/og-amritha-senior-living.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zxx">
      <head>
        <link rel="stylesheet" href="/assets/css/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/assets/css/tabler-icons.min.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <link rel="icon" type="image/png" href="/assets/images/favicon.png" />
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PCVQ4KRW');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Amritha Advanced Rehabilitation & Elder Care",
              "url": "https://www.amrithahappyaging.com/",
              "logo": "https://www.amrithahappyaging.com/assets/images/amritha-logo.png",
              "image": "https://www.amrithahappyaging.com/assets/images/og-amritha-senior-living.jpg",
              "description": "Amritha Advanced Rehabilitation & Elder Care offers assisted living, elder care, and advanced rehabilitation services in Hyderabad.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "NTR Crest Building, Door No. 2-56/17/GF, Adj to STAR Hypermarket, Gachibowli",
                "addressLocality": "Hyderabad",
                "addressRegion": "Telangana",
                "postalCode": "500032",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9247518681",
                "contactType": "customer service"
              }
            })
          }}
        />
        <style dangerouslySetInnerHTML={{ __html: `
          .floating-contact { position: fixed; right: 20px; top: 50%; transform: translateY(-50%); z-index: 9999; font-family: inherit; }
          .floating-toggle { background: #990000; color: #ffffff; border: none; border-radius: 30px; padding: 12px 18px; font-weight: 600; display: flex; align-items: center; gap: 10px; cursor: pointer; box-shadow: 0 10px 30px rgba(0,0,0,0.15); }
          .floating-form { position: absolute; right: 110%; top: 50%; transform: translateY(-50%); width: 320px; background: #ffffff; padding: 22px; border-radius: 16px; box-shadow: 0 20px 50px rgba(0,0,0,0.18); display: none; }
          .floating-form h4 { margin-bottom: 5px; font-size: 18px; }
          .floating-form p { font-size: 14px; margin-bottom: 15px; color: #666; }
          .floating-close { position: absolute; top: 12px; right: 12px; background: transparent; border: none; font-size: 20px; cursor: pointer; color: #444; }
          @media (max-width: 768px) {
              .floating-contact { right: 16px; bottom: 16px; top: auto; transform: none; }
              .floating-form { position: fixed; right: 0; left: 0; bottom: -100%; top: auto; transform: none; width: 100%; max-height: 85vh; border-radius: 20px 20px 0 0; overflow-y: auto; padding-bottom: 90px; transition: bottom 0.35s ease; z-index: 10000; }
              .floating-form.active { bottom: 0; }
          }
          h1, h2, h3, h4, h5, h6, .ft-heading-default { font-family: 'Nunito', sans-serif; font-weight: 700 !important; }
          .footer-social-icons a.social-btn { width: 45px; height: 45px; border-radius: 50%; background: #990000; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 20px; transition: 0.3s ease; text-decoration: none; }
          .footer-social-icons a.social-btn:hover { background: #7a0000; transform: translateY(-4px); }
          .footer-logo-badge { background: #ffffff; display: inline-flex; align-items: center; padding: 18px 30px; border-radius: 0 0 20px 20px; margin-top: -24px; margin-bottom: 16px; position: relative; z-index: 10; }
          .footer-logo-badge img { max-width: 180px; height: auto; }
          .footer-area { background-color: #1C2539; position: relative; overflow: visible; padding-top: 0; }
          .default-btn[disabled] { opacity: 0.8; cursor: not-allowed; }
          .btn-loader, .btn-loader2 { display: flex; align-items: center; justify-content: center; gap: 10px; font-weight: 600; }
          .spinner { width: 18px; height: 18px; border: 3px solid rgba(255,255,255,0.4); border-top-color: #fff; border-radius: 50%; animation: spin 0.8s linear infinite; }
          @keyframes spin { to { transform: rotate(360deg); } }
          .header-area { background-color: #1c2539; color: #ffffff; font-size: 14px; }
          .header-area i { color: #ffffff; font-size: 17px; }
          .header-phone a { color: #ffffff; text-decoration: none; font-weight: 600; letter-spacing: 0.3px; }
          .social-link a { color: #ffffff; font-size: 18px; margin-left: 14px; transition: 0.3s ease; }
          .gallery-item { position: relative; overflow: hidden; border-radius: 18px; box-shadow: 0 10px 30px rgba(0,0,0,0.08); cursor: pointer; }
          .gallery-item img { width: 100%; height: 260px; object-fit: cover; transition: transform 0.5s ease; }
          .gallery-item:hover img { transform: scale(1.08); }
          @media (max-width: 768px) { .gallery-item img { height: 220px; } }
          .gallery-lightbox { position: fixed; inset: 0; background: rgba(0,0,0,0.85); display: flex; align-items: center; justify-content: center; opacity: 0; visibility: hidden; transition: 0.3s ease; z-index: 99999; }
          .gallery-lightbox.active { opacity: 1; visibility: visible; }
          .gallery-lightbox img { max-width: 90%; max-height: 85vh; border-radius: 16px; box-shadow: 0 20px 60px rgba(0,0,0,0.4); animation: zoomIn 0.35s ease; }
          .lightbox-close { position: absolute; top: 25px; right: 30px; font-size: 38px; color: #fff; cursor: pointer; font-weight: 300; }
          @keyframes zoomIn { from { transform: scale(0.85); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        ` }} />
      </head>
      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PCVQ4KRW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
        
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/swiper-bundle.min.js" strategy="beforeInteractive" />
        <Script src="/assets/js/fslightbox.js" strategy="afterInteractive" />
        <Script src="/assets/js/ukiyo.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/lenis.js" strategy="afterInteractive" />
        <Script src="/assets/js/custom.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
