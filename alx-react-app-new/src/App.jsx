import { useState } from 'react';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';

        
        function App() {
          return (
            <div>
              <Header />
              <MainContent />
        
              <UserProfile
                name="Alice"
                age="25"
                bio="Loves hiking and photography"
              />
        
              <UserProfile
                name="John"
                age="30"
                bio="Enjoys coding and traveling"
              />
        
              <Footer />
            </div>
          );
        };
        
        export default App;
        

      