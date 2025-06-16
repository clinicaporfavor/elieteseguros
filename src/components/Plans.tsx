import React from 'react';
import { Home, Building, Briefcase, ArrowRight } from 'lucide-react';

interface PlansProps {
  onOpenModal: () => void;
}

export default function Plans({ onOpenModal }: PlansProps) {
  const plans = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Individual/Familiar",
      subtitle: "🏠 Proteja quem você ama",
      description: "Planos sob medida para você e sua família com as melhores condições do mercado",
      features: ["Cobertura completa", "Rede credenciada ampla", "Telemedicina inclusa"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Empresarial",
      subtitle: "🏢 Benefício para sua equipe",
      description: "Custo reduzido e benefícios diferenciados para colaboradores",
      features: ["A partir de 2 vidas", "Desconto por adesão", "Gestão simplificada"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "MEI e PME",
      subtitle: "🧾 Para empreendedores",
      description: "Condições especiais para microempreendedores e pequenas empresas",
      features: ["CNPJ a partir de 1 pessoa", "Preços competitivos", "Processo simplificado"],
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Planos para <span className="text-blue-700">todos os perfis</span>
          </h2>
          <p className="text-xl text-gray-600">
            Encontre a solução ideal para sua necessidade
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className={`bg-gradient-to-r ${plan.color} p-6 text-white`}>
                <div className="flex items-center space-x-3 mb-3">
                  {plan.icon}
                  <h3 className="text-xl font-bold">{plan.title}</h3>
                </div>
                <p className="text-lg font-medium opacity-90">{plan.subtitle}</p>
              </div>
              
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">{plan.description}</p>
                
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={onOpenModal}
                  className={`w-full bg-gradient-to-r ${plan.color} text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  Ver condições
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={onOpenModal}
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-3 mx-auto group"
          >
            <span>📄 Ver condições e simular agora</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}