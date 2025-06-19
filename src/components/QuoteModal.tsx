import React, { useState, FormEvent } from 'react';
import { X, Send } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Declare fbq function for TypeScript
declare global {
  interface Window {
    fbq: (action: string, event: string, data?: any) => void;
  }
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    cidade: '',
    tipoPlano: 'Individual',
    quantidadePessoas: '1',
    idades: '',
    planoAtual: '',
    odontologico: 'Não',
    horarioContato: 'Manhã'
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Track Facebook Pixel Lead event
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'Lead', {
        content_name: 'Cotação Plano de Saúde',
        content_category: 'Seguros',
        value: 1,
        currency: 'BRL'
      });
    }
    
    // Send form data to Web3Forms
    const formDataToSend = new FormData();
    formDataToSend.append('access_key', '1e4169c4-b730-4f75-8c43-92bb0c19f370');
    formDataToSend.append('subject', 'Nova Cotação de Plano de Saúde - Eliete Seguros');
    formDataToSend.append('from_name', 'Eliete Seguros - Landing Page');
    formDataToSend.append('nome', formData.nome);
    formDataToSend.append('whatsapp', formData.whatsapp);
    formDataToSend.append('cidade', formData.cidade);
    formDataToSend.append('tipoPlano', formData.tipoPlano);
    formDataToSend.append('quantidadePessoas', formData.quantidadePessoas);
    formDataToSend.append('idades', formData.idades);
    formDataToSend.append('planoAtual', formData.planoAtual || 'Não possui');
    formDataToSend.append('odontologico', formData.odontologico);
    formDataToSend.append('horarioContato', formData.horarioContato);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      if (response.ok) {
        // Preparar mensagem para WhatsApp
        const mensagem = `Olá! Gostaria de solicitar uma cotação de plano de saúde:

📋 *Dados da Cotação:*
👤 Nome: ${formData.nome}
📱 WhatsApp: ${formData.whatsapp}
🏙️ Cidade: ${formData.cidade}
📋 Tipo de Plano: ${formData.tipoPlano}
👥 Quantidade de Pessoas: ${formData.quantidadePessoas}
🎂 Idades: ${formData.idades}
🏥 Plano Atual: ${formData.planoAtual || 'Não possui'}
🦷 Odontológico: ${formData.odontologico}
⏰ Melhor Horário: ${formData.horarioContato}

Aguardo retorno. Obrigado!`;

        // Redirecionar para WhatsApp
        const whatsappUrl = `https://wa.me/5511996547241?text=${encodeURIComponent(mensagem)}`;
        window.open(whatsappUrl, '_blank');
        
        onClose();
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      // Mesmo com erro no email, redireciona para WhatsApp
      const mensagem = `Olá! Gostaria de solicitar uma cotação de plano de saúde:

📋 *Dados da Cotação:*
👤 Nome: ${formData.nome}
📱 WhatsApp: ${formData.whatsapp}
🏙️ Cidade: ${formData.cidade}
📋 Tipo de Plano: ${formData.tipoPlano}
👥 Quantidade de Pessoas: ${formData.quantidadePessoas}
🎂 Idades: ${formData.idades}
🏥 Plano Atual: ${formData.planoAtual || 'Não possui'}
🦷 Odontológico: ${formData.odontologico}
⏰ Melhor Horário: ${formData.horarioContato}

Aguardo retorno. Obrigado!`;

      const whatsappUrl = `https://wa.me/5511996547241?text=${encodeURIComponent(mensagem)}`;
      window.open(whatsappUrl, '_blank');
      
      onClose();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-width-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold">🚀 Faça sua cotação agora</h2>
              <p className="text-blue-100 mt-1">Preencha em menos de 1 minuto e receba seu plano ideal pelo WhatsApp</p>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome completo *
              </label>
              <input
                type="text"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                WhatsApp com DDD *
              </label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="(11) 99999-9999"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Cidade *
              </label>
              <input
                type="text"
                name="cidade"
                value={formData.cidade}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Sua cidade"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tipo de plano *
              </label>
              <select
                name="tipoPlano"
                value={formData.tipoPlano}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="Individual">Individual</option>
                <option value="Familiar">Familiar</option>
                <option value="Empresarial">Empresarial</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Quantidade de pessoas no plano *
              </label>
              <select
                name="quantidadePessoas"
                value={formData.quantidadePessoas}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                {[1,2,3,4,5,6,7,8,9,10].map(num => (
                  <option key={num} value={num.toString()}>{num} pessoa{num > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Idades dos participantes *
              </label>
              <input
                type="text"
                name="idades"
                value={formData.idades}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Ex: 32, 29, 5, 3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Plano atual (se tiver)
              </label>
              <input
                type="text"
                name="planoAtual"
                value={formData.planoAtual}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Nome do plano atual"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Deseja incluir odontológico? *
              </label>
              <select
                name="odontologico"
                value={formData.odontologico}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Melhor horário para contato *
            </label>
            <select
              name="horarioContato"
              value={formData.horarioContato}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            >
              <option value="Manhã">Manhã</option>
              <option value="Tarde">Tarde</option>
              <option value="Noite">Noite</option>
              <option value="Qualquer horário">Qualquer horário</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3"
          >
            <Send className="w-5 h-5" />
            <span>✅ Receber minha cotação agora</span>
          </button>

          <p className="text-center text-sm text-gray-600">
            Ao enviar, você será redirecionado para o WhatsApp com suas informações
          </p>
        </form>
      </div>
    </div>
  );
}