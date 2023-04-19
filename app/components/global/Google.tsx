import Script from "next/script";

export default function Google() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GTM-M5H8WMX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GTM-M5H8WMX');
        `}
      </Script>
    </>
  );
}
