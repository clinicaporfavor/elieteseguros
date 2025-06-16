import React, { useState } from 'react';
import { ChevronDown, ChevronLeft as ChevrotLeft } from 'lucide-react';

export default function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs = [
    {
      question: "❓ Tenho MEI, posso contratar?",
      answer: "✅ Sim! Temos planos empresariais com CNPJ a partir de 1 pessoa. As condições são especiais para microempreendedores, com preços competitivos e processo simplificado."
    },
    {
      question: "❓ Os planos têm cobertura nacional?",
      answer: "✅ Temos opções locais e nacionais. Vamos sugerir conforme sua necessidade e localização. Nossa rede credenciada abrange todo o território nacional com as principais operadoras."
    },
    {
      question: "❓ Quanto tempo leva para ativar?",
      answer: "✅ Após aprovação, em até 72h úteis você já pode usar seu plano. Em casos urgentes, temos processos de liberação mais rápidos."
    },
    {
      question: "❓ Posso incluir dependentes depois?",
      answer: "✅ Sim, é possível incluir dependentes respeitando as regras da operadora. Orientamos sobre os prazos e documentação necessária."
    },
    {
      question: "❓ Qual a diferença entre os planos individuais e empresariais?",
      answer: "✅ Planos empresariais têm preços mais baixos e condições especiais, mas exigem CNPJ. Planos individuais têm mais flexibilidade na contratação."
    },
    {
      question: "❓ Vocês atendem em outras cidades?",
      answer: "✅ Atendemos São Paulo, Piripiri, Teresina e todo o Nordeste. Para outras regiões, consulte nossa disponibilidade."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Perguntas <span className="text-blue-700">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas sobre nossos planos de saúde
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => setOpenItem(openItem === index ? null : index)}
                className="w-full bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 text-left flex items-center justify-between group"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-blue-600 transition-transform duration-300 ${
                    openItem === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {openItem === index && (
                <div className="bg-white rounded-b-lg shadow-md border-t border-gray-100 p-6 -mt-2">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-blue-800 font-medium mb-2">
              Não encontrou sua pergunta?
            </p>
            <p className="text-blue-700">
              Entre em contato conosco pelo WhatsApp <strong>(11) 99654-7241</strong> ou email <strong>eliete.seguros@gmail.com</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}