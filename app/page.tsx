"use client";
import Header from "./components/header/Header";
import Start from "./components/start/Start";
import Testimonials from "./components/testimonials/Testimonials";
import Treatments from "./components/treatments/Treatments";
import Clinic from "./components/clinic/Clinic";
import Maps from "./components/maps/Maps";
import Footer from "./components/footer/Footer";
import Whatsapp from "./components/whatsapp/Whatsapp";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('1809081562889574') // facebookPixelId
        ReactPixel.pageView()
      })
  }, [])

  return (
    <main>
      <Header />
      <Start />
      <Testimonials />
      <Treatments />
      <Clinic />
      <Maps />
      <Footer />
      {/* <Whatsapp /> */}
    </main>
  );
}
