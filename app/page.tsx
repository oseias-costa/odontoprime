import Header from "./components/header/Header";
import Start from "./components/start/Start";
import Testimonials from "./components/testimonials/Testimonials";
import Treatments from "./components/treatments/Treatments";
import Clinic from "./components/clinic/Clinic";
import Maps from "./components/maps/Maps";

export default function Home() {
  return (
    <main>
      <Header />
      <Start />
      <Testimonials />
      <Treatments />
      <Clinic />
      <Maps />
    </main>
  );
}
