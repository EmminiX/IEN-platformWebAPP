import { Hero } from '@/components/Hero';
import { ResearchForm } from '@/components/ResearchForm';
import { AIArchitectureInfo } from '@/components/AIArchitectureInfo';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-ien-off-white via-white to-ien-mint/10">
      {/* Header Navigation */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center py-1">
            <nav className="flex gap-4">
              <a 
                href="https://geai.ie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary group relative overflow-hidden min-w-[130px] text-base font-medium"
              >
                <span className="relative z-10 flex items-center justify-center">
                  GEAI.IE
                </span>
                <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
              <a 
                href="https://ien.ie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary group relative overflow-hidden min-w-[130px] text-base font-medium"
              >
                <span className="relative z-10 flex items-center justify-center">
                  IEN.IE
                </span>
                <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
              <a 
                href="https://emmi.zone" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary group relative overflow-hidden min-w-[130px] text-base font-medium"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Emmi.Zone
                </span>
                <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            </nav>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <Hero />
      
      {/* Research Form Section */}
      <section id="research-form" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <ResearchForm />
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-ien-navy text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-ien-teal">
              IEN Research Intelligence Platform
            </h3>
            <p className="text-white/90">
              Empowering environmental decision-making across Ireland 🇮🇪
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 text-sm text-white/80 mb-6">
            <span>© 2025 Irish Environmental Network</span>
            <span className="hidden sm:inline">•</span>
            <span>Good Energies Alliance Ireland</span>
            <span className="hidden sm:inline">•</span>
            <span>
              Designed and engineered with ❤️ by{' '}
              <a 
                href="https://emmi.zone" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-ien-teal hover:text-ien-mint transition-colors font-medium"
              >
                Emmi C.
              </a>
            </span>
          </div>
          
          <div className="flex justify-center items-center gap-6 text-sm text-white/70 border-t border-white/20 pt-6">
            <Link 
              href="/privacy" 
              className="hover:text-ien-teal transition-colors"
            >
              Privacy Policy
            </Link>
            <span>•</span>
            <Link 
              href="/terms" 
              className="hover:text-ien-teal transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </footer>

      {/* Floating AI Architecture Info */}
      <AIArchitectureInfo />
    </main>
  );
}
