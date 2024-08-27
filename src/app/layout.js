import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "swiper/css";
import "swiper/css/bundle";
import "react-modal-video/css/modal-video.css";
import "react-toastify/dist/ReactToastify.css";
import "react-photo-view/dist/react-photo-view.css";

import "@/assets/css/font-awesome6.min.css";
import "@/assets/css/flaticon-set.css";
import "@/assets/css/elegant-icons.css";
import "@/assets/css/helper.css";
import "@/assets/css/validnavs.css";
import "@/assets/css/unit-test.css";
import "@/assets/css/style.css";

import { Manrope } from "next/font/google";
import { ToastContainer } from "react-toastify";
import Dependency from "@/components/utilities/Dependency";
import imageUrl from "@/assets/img/favicon.png";
import canonicalUrl from "@/assets/img/favicon.png";


const manrope = Manrope({ subsets: ["latin"] });

export const metadata = (title, description, imageUrl, canonicalUrl) => ({
  title: title || "Chris Norton | Web Developer",
  description: description || "Web Developer | Data Analyst Portfolio",
  canonical: canonicalUrl,
  openGraph: {
    title: title || "Chris Norton | Web Developer",
    description: description || "Web Developer | Data Analyst Portfolio",
    images: [
      {
        url: imageUrl,
        width: 1200,
        height: 630,
        alt: `${title} - Image`,
      },
    ],
    type: 'website',
    locale: 'en_US',
    url: canonicalUrl,
    siteName: 'Chris Norton Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@CodemanChris',
    title: title || "Chris Norton | Web Developer",
    description: description || "Web Developer | Data Analyst Portfolio",
    images: [imageUrl],
  },
  // ... existing code ...
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script id="drift">
        {`
        " use strict ";
         !function() {
    var t = window.driftt = window.drift = window.driftt || [];
    if (!t.init) {
      if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
      t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
      t.factory = function(e) {
        return function() {
          var n = Array.prototype.slice.call(arguments);
          return n.unshift(e), t.push(n), t;
        };
      }, t.methods.forEach(function(e) {
        t[e] = t.factory(e);
      }), t.load = function(t) {
        var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
        o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
        var i = document.getElementsByTagName("script")[0];
        i.parentNode.insertBefore(o, i);
      };
    }
  }();
  drift.SNIPPET_VERSION = '0.3.1';
  drift.load('v73vucw6t3bd');
        
        `}
      </Script>
      <Script id="hotjar">
        {`
               (function (h, o, t, j, a, r) {
    h.hj =
      h.hj ||
      function () {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
    h._hjSettings = { hjid: 5082413, hjsv: 6 };
    a = o.getElementsByTagName("head")[0];
    r = o.createElement("script");
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
        `}
      </Script>
      <Script id="google">
        {`
          window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());

            gtag("config", "G-S5ZBPZ262W");
        `}
      </Script>

      <body className={`${manrope.className}`}>
        <ToastContainer />
        <Dependency />
        {children}
        <div id="modal-root-content" />
      </body>
    </html>
  );
}
