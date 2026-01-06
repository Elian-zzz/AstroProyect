import { Hero } from "../components/Hero";
import { FeaturedCourses } from "../components/FeaturedCourses";
import { Schedule } from "../components/Schedule";
import { AboutVivi } from "../components/AboutVivi";
import { Testimonials } from "../components/Testimonials";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#F0DAD5]">
      <Hero />
      <FeaturedCourses />
      <Schedule />
      <AboutVivi />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
