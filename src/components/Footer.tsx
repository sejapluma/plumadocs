'use client';

export default function Footer() {
  return (
    <footer className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <h3 className="text-xl font-medium text-gray-900">
            DÚVIDAS?
          </h3>
          
          <a 
            href="mailto:suporteorganizapsi@gmail.com"
            className="block text-[#C4A484] hover:text-[#A68B6C] transition-colors"
          >
            suporteorganizapsi@gmail.com
          </a>

          <div className="pt-8 text-sm text-gray-500">
            <p>Todos os direitos reservados</p>
            <p>© 2025 - Francielle Santiago | Psicologia</p>
          </div>
        </div>
      </div>
    </footer>
  );
} 