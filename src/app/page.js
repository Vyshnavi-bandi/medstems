import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FeatureBar from "@/components/FeatureBar";
import ServicesSection from "@/components/ServicesSection";
import CenterExcellence from "@/components/CenterExcellence";
import CorePrinciples from "@/components/CorePrinciples";
import CTASection from "@/components/CTASection";
import AppointmentForm from "@/components/AppointmentForm";
import Disclaimer from "@/components/Disclaimer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeatureBar/>
      <ServicesSection/>
      <CenterExcellence/>
      <CorePrinciples/>
      <CTASection/>
      <AppointmentForm/>
      <Disclaimer/>
      <Footer />
    </>
  );
}