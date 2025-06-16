import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Eliete Seguros</h3>
                <p className="text-gray-400 text-sm">Há 27 anos no mercado</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Especialistas em planos de saúde com atendimento humanizado e soluções personalizadas para cada necessidade.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/5511996547241" 
                className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>(11) 99654-7241</span>
              </a>
              <a 
                href="mailto:eliete.seguros@gmail.com" 
                className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>eliete.seguros@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Regiões Atendidas</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>São Paulo - SP</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Piripiri - PI</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Teresina - PI</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span>Todo o Nordeste</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Horário de Atendimento</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="w-4 h-4 text-green-400" />
                <span>Segunda a Sexta: 8h às 18h</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="w-4 h-4 text-green-400" />
                <span>Sábado: 8h às 12h</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="w-4 h-4 text-orange-400" />
                <span>WhatsApp: 24h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 Eliete Seguros. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}