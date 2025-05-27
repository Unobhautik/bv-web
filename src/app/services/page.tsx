import Link from 'next/link';
import { Metadata } from 'next';
import TextReveal from '@/components/animation/TextReveal';
import MagneticButton from '@/components/animation/MagneticButton';

export const metadata: Metadata = {
  title: 'Services | BVYTE Solutions',
  description: 'Explore our comprehensive IT services including web development, mobile app development, AI solutions, and more.',
};

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    icon: '🌐',
    description: 'Crafting responsive, high-performing websites tailored to your brand and goals.',
    features: ['Custom Website Development', 'E-commerce Solutions', 'Progressive Web Apps', 'UI/UX Design'],
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    icon: '📱',
    description: 'Building cross-platform mobile apps that deliver seamless user experiences.',
    features: ['iOS & Android Development', 'Cross-platform Solutions', 'App Maintenance', 'Performance Optimization'],
  },
  {
    id: 'ai-ml',
    title: 'AI & Machine Learning',
    icon: '🧠',
    description: 'Harness the power of AI to automate, analyze, and scale smarter.',
    features: ['NLP Solutions', 'Predictive Analytics', 'Computer Vision', 'AI Integration'],
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    icon: '⚙️',
    description: 'From idea to execution — we develop software that solves real-world problems.',
    features: ['Business Process Automation', 'SaaS Products', 'Legacy System Modernization', 'Scalable Solutions'],
  },
  {
    id: 'backend-development',
    title: 'Backend Development',
    icon: '🧰',
    description: 'Robust, secure, and scalable backend architecture for every business size.',
    features: ['API Development', 'Database Design', 'Server Configuration', 'Security Implementation'],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    icon: '☁️',
    description: 'Ensure speed, security, and scalability with our cloud-based DevOps practices.',
    features: ['Cloud Migration', 'CI/CD Implementation', 'Infrastructure as Code', 'Monitoring & Logging'],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white text-black pt-32 pb-24">
      <div className="container mx-auto px-5 max-w-6xl">
        <TextReveal>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8">
            Our Services
          </h1>
        </TextReveal>

        <TextReveal delay={0.2}>
          <p className="text-lg md:text-xl max-w-2xl mb-20 opacity-80">
            We offer a comprehensive range of IT solutions designed to transform your business and drive growth.
          </p>
        </TextReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-6 border border-gray-100 rounded-sm transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-3xl md:text-4xl mb-5">{service.icon}</div>
              <h2 className="text-2xl md:text-3xl font-light mb-4">{service.title}</h2>
              <p className="opacity-80 mb-6 leading-relaxed">{service.description}</p>

              <ul className="mb-6 space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 opacity-70">
                    <span className="w-1 h-1 bg-black rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <MagneticButton>
                <Link
                  href={`/services/${service.id}`}
                  className="inline-block mt-4 text-lg px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300"
                >
                  Learn more
                </Link>
              </MagneticButton>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
