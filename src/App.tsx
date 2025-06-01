import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import CommandExplorer from './components/CommandExplorer';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import Statistics from './components/Statistics';
import Footer from './components/Footer';
import Changelog from './components/Changelog';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import HowToUse from './components/HowToUse';
import Invite from './components/Invite';
import BirthdayCountdown from './components/BirthdayCountdown';
import Anniversary from './components/Anniversary';
import Magic8Ball from './components/games/Magic8Ball';
import CoinFlip from './components/games/CoinFlip';
import QuickPicker from './components/games/QuickPicker';

function Home() {
  return (
    <>
      <Hero />
      <BirthdayCountdown />
      <Features />
      <CommandExplorer />
      <FAQ />
      <CallToAction />
      <Statistics />
    </>
  );
}

function App() {
  useEffect(() => {
    document.title = "Algorhythm - O Bot Definitivo para Discord";
    
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (link) {
      link.href = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23EC4899' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 8V4H8'%3E%3C/path%3E%3Crect width='16' height='12' x='4' y='8' rx='2'%3E%3C/rect%3E%3Cpath d='M2 14h2'%3E%3C/path%3E%3Cpath d='M20 14h2'%3E%3C/path%3E%3Cpath d='M15 13v2'%3E%3C/path%3E%3Cpath d='M9 13v2'%3E%3C/path%3E%3C/svg%3E";
    }
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
        <Header />
        <div className="pt-[104px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/changelog" element={<><BirthdayCountdown /><Changelog /></>} />
            <Route path="/privacy" element={<><BirthdayCountdown /><PrivacyPolicy /></>} />
            <Route path="/terms" element={<><BirthdayCountdown /><TermsOfService /></>} />
            <Route path="/how-to-use" element={<><BirthdayCountdown /><HowToUse /></>} />
            <Route path="/invite" element={<><BirthdayCountdown /><Invite /></>} />
            <Route path="/anniversary" element={<Anniversary />} />
            <Route path="/bola8" element={<Magic8Ball />} />
            <Route path="/coinflip" element={<CoinFlip />} />
            <Route path="/escolhedor" element={<QuickPicker />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;