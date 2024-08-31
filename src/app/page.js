import ComponentCarrousel from "@/components/home/contentCarrousel/Content";
import CourseSearchSection from "@/components/home/CourseSearch/CourseSearch";
import CourseSection from "@/components/home/CourseSection/CourseSection";
import Footer from "@/components/home/Footer/Footer";
import Header from "@/components/home/Header/Header";
import ProfesorCardSection from "@/components/home/TeachersSection/TeachersSection";

export default function Home() {
  return (
    <>
      <Header />
      <CourseSearchSection />

      <CourseSection />

      <ComponentCarrousel />

      <ProfesorCardSection />
      
      <Footer />
    </>
  );
}
