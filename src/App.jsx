import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Users, ArrowLeft, CalendarDays, MessageSquare } from 'lucide-react';

const consultants = [
  { name: 'Lucas', imgSrc: 'https://i.imgur.com/PyQ4HJV.png', link: 'https://calendly.com/grupolft2' },
  { name: 'Vanessa', imgSrc: 'https://i.imgur.com/vlrRYUF.png', link: 'https://calendly.com/grupolft2' },
  { name: 'Eduardo', imgSrc: 'https://i.imgur.com/cmKafzo.png', link: 'https://calendly.com/grupolft2' },
  { name: 'Maria Rangel', imgSrc: 'https://i.imgur.com/6qqpYjP.jpeg', link: 'https://calendly.com/grupolft2' },
];

const supportTeam = [
  { name: 'Karina', imgSrc: 'https://i.imgur.com/ySM0ZkS.png', link: 'https://api.whatsapp.com/send/?phone=553298211234&text&type=phone_number&app_absent=0' },
  { name: 'Natalia', imgSrc: 'https://i.imgur.com/gaBO2PX.png', link: 'https://api.whatsapp.com/send/?phone=553298211234&text&type=phone_number&app_absent=0' },
];

const PageContainer = ({ children, hasFooterSpace = true, isHome = false }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
    className={`min-h-screen w-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 ${hasFooterSpace ? (isHome ? 'pb-28 sm:pb-20' : 'pb-20') : ''} box-border`}
  >
    {children}
  </motion.div>
);

const Card = ({ item, type }) => (
  <motion.a
    href={item.link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-slate-800 rounded-xl shadow-2xl p-4 sm:p-6 flex flex-col items-center text-center hover:bg-blue-700/50 transition-all duration-300 transform hover:scale-105 group w-full max-w-xs"
    whileHover={{ y: -5 }}
  >
    <img src={item.imgSrc} alt={item.name} className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mb-4 border-4 border-blue-500 group-hover:border-white transition-colors duration-300" />
    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">{item.name}</h3>
    <div className="flex items-center text-blue-300 group-hover:text-white transition-colors duration-300">
      {type === 'consultant' ? <CalendarDays size={16} sm:size={18} className="mr-2" /> : <MessageSquare size={16} sm:size={18} className="mr-2" />}
      <span className="text-xs sm:text-sm">{type === 'consultant' ? 'Agendar Reunião' : 'Iniciar Conversa'}</span>
    </div>
  </motion.a>
);

function App() {
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'commercial', 'support'

  const renderPage = () => {
    switch (currentPage) {
      case 'commercial':
        return (
          <PageContainer key="commercial">
            <motion.button
              onClick={() => setCurrentPage('home')}
              className="fixed top-4 left-4 sm:absolute sm:top-6 sm:left-6 text-white bg-blue-600 hover:bg-blue-700 p-3 rounded-full shadow-lg transition-colors duration-300 z-20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Voltar"
            >
              <ArrowLeft size={20} sm:size={24} />
            </motion.button>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 mt-16 sm:mt-0 text-center">Área Comercial</h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 text-center max-w-2xl">Selecione um dos nossos consultores para agendar sua reunião:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full max-w-6xl px-2">
              {consultants.map(consultant => (
                <Card key={consultant.name} item={consultant} type="consultant" />
              ))}
            </div>
          </PageContainer>
        );
      case 'support':
        return (
          <PageContainer key="support">
            <motion.button
              onClick={() => setCurrentPage('home')}
              className="fixed top-4 left-4 sm:absolute sm:top-6 sm:left-6 text-white bg-blue-600 hover:bg-blue-700 p-3 rounded-full shadow-lg transition-colors duration-300 z-20"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Voltar"
            >
              <ArrowLeft size={20} sm:size={24} />
            </motion.button>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 mt-16 sm:mt-0 text-center">Suporte</h1>
            <p className="text-lg sm:text-xl text-slate-300 mb-8 sm:mb-12 text-center max-w-2xl">Precisa de ajuda? Entre em contato com nossa equipe de suporte:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full max-w-3xl px-2">
              {supportTeam.map(member => (
                <Card key={member.name} item={member} type="support" />
              ))}
            </div>
          </PageContainer>
        );
      default: // home
        return (
          <PageContainer key="home" isHome={true}>
            <div className="text-center w-full px-2">
              <motion.div 
                className="mb-8 sm:mb-12"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
              >
                <img src="https://i.imgur.com/8L91v1L.png" alt="LFT Logo" className="w-auto h-16 sm:h-20 md:h-24 mx-auto mb-4 sm:mb-6" />
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-2 sm:mb-3">Bem-vindo à LFT!</h1>
                <p className="text-xl sm:text-2xl text-slate-300">Gestão de Risco e Planejamento Financeiro</p>
              </motion.div>
              
              <p className="text-lg sm:text-xl text-slate-200 mb-8 sm:mb-10">Por favor, selecione uma das opções abaixo:</p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 w-full">
                <motion.button
                  onClick={() => setCurrentPage('commercial')}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:py-4 sm:px-10 rounded-lg shadow-xl text-base sm:text-lg flex items-center justify-center w-full max-w-xs sm:w-auto transition-all duration-300 transform hover:scale-105"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Briefcase size={20} sm:size={22} className="mr-2 sm:mr-3" />
                  Área Comercial
                </motion.button>
                <motion.button
                  onClick={() => setCurrentPage('support')}
                  className="bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-6 sm:py-4 sm:px-10 rounded-lg shadow-xl text-base sm:text-lg flex items-center justify-center w-full max-w-xs sm:w-auto transition-all duration-300 transform hover:scale-105"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Users size={20} sm:size={22} className="mr-2 sm:mr-3" />
                  Suporte
                </motion.button>
              </div>
            </div>
          </PageContainer>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white flex flex-col items-center justify-center overflow-x-hidden relative">
      <AnimatePresence mode="wait">
        {renderPage()}
      </AnimatePresence>
      <footer className="fixed bottom-0 left-0 w-full py-3 sm:py-4 bg-slate-900/80 backdrop-blur-sm text-center z-10">
        <p className="text-slate-400 text-xs sm:text-sm">&copy; {new Date().getFullYear()} LFT Gestão. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
