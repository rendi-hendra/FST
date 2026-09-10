import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Bot, Send, RotateCcw, ChevronRight, 
  Sparkles, CheckCircle2, User, CornerDownLeft 
} from 'lucide-react';
import { quickPrompts, findAnswer } from '../data/chatbotKnowledge';

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      id: 'msg-1',
      sender: 'bot',
      text: `Halo! 👋 Saya **HIMSI Assistant AI 24/7**.\n\nSaya siap membantu memberikan informasi seputar:\n- 🎓 Panduan SIMAK & Pengisian KRS\n- ⏸️ Prosedur Stop Out / Cuti Kuliah di Fasilkom\n- 👨‍🏫 Informasi Dosen Jurusan Sistem Informasi\n- 💰 Info Beasiswa & Keringanan UKT Unsri\n- 👥 Kepengurusan & Program Kerja HIMSI\n\nSilakan ketik pertanyaan Anda atau klik salah satu topik cepat di bawah!`,
      time: 'Baru saja'
    }
  ]);

  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Realistic simulated delay
    setTimeout(() => {
      const botResponse = findAnswer(query);
      const botMessage = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: botResponse,
        time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 600);
  };

  const handleReset = () => {
    setMessages([
      {
        id: `msg-${Date.now()}`,
        sender: 'bot',
        text: 'Obrolan telah direset. Silakan tanyakan hal lain seputar perkuliahan Sistem Informasi atau organisasi HIMSI!',
        time: 'Baru saja'
      }
    ]);
  };

  return (
    <div>
      {/* Breadcrumb Header */}
      <section className="section-pad-sm" style={{ borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
            <Link to="/">Beranda</Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--himsi-blue-light)', fontWeight: 600 }}>HIMSI Chatbot AI</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800 }}>HIMSI Virtual Assistant AI 24/7</h1>
          <p style={{ maxWidth: '680px', color: 'var(--text-secondary)' }}>
            Asisten cerdas interaktif siap menjawab pertanyaan seputar perkuliahan, SIMAK, KRS, prosedur Stop Out, direktori dosen, dan kepengurusan HIMSI kapan saja.
          </p>
        </div>
      </section>

      {/* Chat Container Section */}
      <section className="section-pad">
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="glass-card" style={{ padding: 0, overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
            {/* Chat Header */}
            <div style={{ padding: '1.25rem 1.75rem', background: 'rgba(255, 255, 255, 0.02)', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '46px', height: '46px', borderRadius: '14px', background: 'linear-gradient(135deg, #1e40af, #ef4444)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <Bot size={24} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)', margin: 0 }}>
                    HIMSI Assistant AI
                  </h3>
                  <p style={{ fontSize: '0.78rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.4rem', margin: '2px 0 0' }}>
                    <span style={{ width: '7px', height: '7px', background: '#10b981', borderRadius: '50%', display: 'inline-block' }}></span>
                    Online 24/7 | Respons Cepat
                  </p>
                </div>
              </div>

              <button 
                onClick={handleReset} 
                className="btn-glass"
                style={{ fontSize: '0.8rem', padding: '6px 14px' }}
                title="Bersihkan riwayat percakapan"
              >
                <RotateCcw size={14} /> Reset Chat
              </button>
            </div>

            {/* Chat Messages List */}
            <div style={{ height: '480px', overflowY: 'auto', padding: '1.75rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {messages.map((msg) => {
                const isBot = msg.sender === 'bot';
                return (
                  <div 
                    key={msg.id}
                    style={{
                      display: 'flex',
                      gap: '0.85rem',
                      alignItems: 'flex-start',
                      justifyContent: isBot ? 'flex-start' : 'flex-end',
                      width: '100%'
                    }}
                  >
                    {isBot && (
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #1e40af, #ef4444)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0, marginTop: '2px' }}>
                        <Bot size={18} />
                      </div>
                    )}

                    <div 
                      style={{
                        maxWidth: '82%',
                        background: isBot ? 'var(--input-bg)' : 'linear-gradient(135deg, #1e40af, #2563eb)',
                        border: isBot ? '1px solid var(--glass-border)' : 'none',
                        color: isBot ? 'var(--text-primary)' : '#ffffff',
                        padding: '1rem 1.25rem',
                        borderRadius: isBot ? '18px 18px 18px 4px' : '18px 18px 4px 18px',
                        boxShadow: 'var(--shadow-sm)'
                      }}
                    >
                      <div style={{ whiteSpace: 'pre-line', lineHeight: 1.65, fontSize: '0.92rem' }}>
                        {msg.text}
                      </div>
                      <div style={{ textAlign: isBot ? 'left' : 'right', fontSize: '0.72rem', opacity: 0.65, marginTop: '0.5rem' }}>
                        {msg.time}
                      </div>
                    </div>

                    {!isBot && (
                      <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--himsi-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0, marginTop: '2px' }}>
                        <User size={18} />
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Typing Indicator */}
              {isTyping && (
                <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'center' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #1e40af, #ef4444)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
                    <Bot size={18} />
                  </div>
                  <div style={{ background: 'var(--input-bg)', border: '1px solid var(--glass-border)', padding: '0.75rem 1.2rem', borderRadius: '18px', display: 'flex', gap: '6px', alignItems: 'center' }}>
                    <span style={{ width: '6px', height: '6px', background: 'var(--himsi-blue-light)', borderRadius: '50%', display: 'inline-block', animation: 'pulse 1s infinite' }}></span>
                    <span style={{ width: '6px', height: '6px', background: 'var(--himsi-blue-light)', borderRadius: '50%', display: 'inline-block', animation: 'pulse 1s infinite 0.2s' }}></span>
                    <span style={{ width: '6px', height: '6px', background: 'var(--himsi-blue-light)', borderRadius: '50%', display: 'inline-block', animation: 'pulse 1s infinite 0.4s' }}></span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Pills */}
            <div style={{ padding: '0.75rem 1.75rem', background: 'rgba(255, 255, 255, 0.01)', borderTop: '1px solid var(--glass-border)', display: 'flex', gap: '0.6rem', overflowX: 'auto', scrollbarWidth: 'none' }}>
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(prompt)}
                  className="btn-glass"
                  style={{ fontSize: '0.8rem', padding: '6px 14px', flexShrink: 0 }}
                >
                  <Sparkles size={13} color="var(--himsi-gold)" />
                  <span>{prompt}</span>
                </button>
              ))}
            </div>

            {/* Chat Input Form */}
            <div style={{ padding: '1.25rem 1.75rem', background: 'rgba(255, 255, 255, 0.02)', borderTop: '1px solid var(--glass-border)' }}>
              <form 
                onSubmit={(e) => { e.preventDefault(); handleSend(); }} 
                style={{ display: 'flex', gap: '0.75rem' }}
              >
                <input 
                  type="text"
                  placeholder="Tanyakan sesuatu seputar Unsri, SIMAK, Stop Out, atau HIMSI..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  style={{
                    flex: 1,
                    padding: '14px 22px',
                    borderRadius: 'var(--radius-pill)',
                    background: 'var(--input-bg)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                    fontSize: '0.95rem'
                  }}
                />
                <button type="submit" className="btn-explore" style={{ padding: '12px 24px' }}>
                  <Send size={16} />
                  <span>Kirim</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
