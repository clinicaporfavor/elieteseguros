import React from 'react';
import { ArrowRight, Shield, Users, Clock } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-100/30 to-transparent"></div>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                🎯 <span className="text-blue-700">Seu Plano de Saúde Ideal</span> Está Aqui –{' '}
                <span className="text-green-600">Rápido, Seguro e Sem Burocracia!</span>
              </h1>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                Atendemos <strong>São Paulo, Piripiri, Teresina</strong> e todo o <strong>Nordeste</strong> com planos para você, sua família ou empresa.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 py-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <Shield className="w-5 h-5 text-blue-600" />
                <span className="font-medium">27 anos de experiência</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Users className="w-5 h-5 text-green-600" />
                <span className="font-medium">Atendimento humanizado</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Clock className="w-5 h-5 text-orange-600" />
                <span className="font-medium">Cotação em minutos</span>
              </div>
            </div>

            <button
              onClick={onOpenModal}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-3 group"
            >
              <span>👉 Fazer Cotação Sem Compromisso</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 shadow-2xl">
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">E</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">Eliete Seguros</h3>
                    <p className="text-gray-600 text-sm">Especialista em Planos de Saúde</p>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-green-800 font-medium">✅ Cotação rápida comigo</p>
                  <p className="text-green-700 text-sm mt-1">Planos disponíveis para ativação imediata</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-blue-50 rounded-lg p-3">
                    <p className="text-2xl font-bold text-blue-700">27</p>
                    <p className="text-blue-600 text-sm">Anos no mercado</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-2xl font-bold text-green-700">💬</p>
                    <p className="text-green-600 text-sm">Atendimento humano pelo WhatsApp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}