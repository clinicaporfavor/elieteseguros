import React from 'react';
import { Heart, Shield, Users, Building2, FileText, ArrowRight } from 'lucide-react';

interface BeneifitsProps {
  onOpenModal: () => void;
}

export default function Benefits({ onOpenModal }: BeneifitsProps) {
  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Atendimento humanizado e rápido",
      description: "Suporte personalizado com foco nas suas necessidades"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Acesso aos principais convênios do Brasil",
      description: "Parcerias com as melhores operadoras do mercado"
    },
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Condições exclusivas para MEI e empresas",
      description: "Planos empresariais a partir de 1 pessoa"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Opções com abrangência local e nacional",
      description: "Escolha a cobertura ideal para seu perfil"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Sem burocracia",
      description: "Você só preenche e a gente cuida do resto!"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            💡 Por que contratar com a <span className="text-blue-700">Eliete Seguros</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de duas décadas oferecendo as melhores soluções em planos de saúde
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-100">
              <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                ✅ {benefit.title}
              </h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onOpenModal}
            className="bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-3 mx-auto group"
          >
            <span>🔎 Quero conhecer as opções!</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}