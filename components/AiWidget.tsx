import React, { useState } from 'react';
import { askWellnessAssistant } from '../services/geminiService';

export const AiWidget: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResponse(null);
    const answer = await askWellnessAssistant(input);
    setResponse(answer);
    setLoading(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-brand-primary/20">
      <div className="flex items-center gap-2 mb-4 border-b-2 border-brand-primary pb-2">
        <i className="fa-solid fa-robot text-brand-primary text-xl"></i>
        <h2 className="text-lg font-bold text-brand-primary uppercase">Ask Caba AI</h2>
      </div>
      
      <p className="text-sm text-gray-600 mb-4 italic">
        Your personal AI wellness assistant. Ask me about skincare, diet tips, or motivation!
      </p>

      <form onSubmit={handleAsk} className="flex flex-col gap-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="E.g., How to reduce puffy eyes?"
          className="w-full p-2 text-sm border border-gray-300 rounded focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-brand-primary text-white text-sm font-bold py-2 px-4 rounded hover:bg-brand-link transition-colors disabled:opacity-50"
        >
          {loading ? <i className="fas fa-spinner fa-spin"></i> : 'ASK CABA'}
        </button>
      </form>

      {response && (
        <div className="mt-4 p-3 bg-brand-bg rounded border-l-4 border-brand-primary text-sm text-gray-700 animate-fade-in">
            <strong className="block text-brand-primary mb-1">Caba says:</strong>
            {response}
        </div>
      )}
    </div>
  );
};