import Script from "next/script";

export default function Google() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=GTM-55J59XF3"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'GTM-55J59XF3');
        `}
      </Script>
    </>
  );
}
