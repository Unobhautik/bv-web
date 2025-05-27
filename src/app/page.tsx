import HeroSection from '@/components/common/HeroSection'
import AboutSection from '@/components/common/AboutSection'
import ServicesSection from '@/components/common/ServicesSection'
import ProjectsSection from '@/components/common/ProjectsSection'
import TestimonialsSection from '@/components/common/TestimonialsSection'
import TechStackSection from '@/components/common/TechStackSection'
import ContactSection from '@/components/common/ContactSection'

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <TechStackSection />
      <ContactSection />
    </div>
  )
}
