import logo from './logo.svg';
import './App.css';
import {
  Features2x2 
 } from './ui-components';
 import {
  MarketingFooter 
 } from './ui-components';
 
 import {
  HeroLayout 
 } from './ui-components';
 import {
  CTASection 
 } from './ui-components';
 import {
  MarketingPricing 
 } from './ui-components';
 
 
 import {
  NavBarHeader2 
 } from './ui-components';
 

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBarHeader2 />
      <HeroLayout />
      <CTASection />
      <MarketingPricing />
        <Features2x2 />
        
        <MarketingFooter />
        
      </header>
    </div>
  );
}

export default App;
