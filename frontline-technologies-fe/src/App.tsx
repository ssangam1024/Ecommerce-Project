import {Header} from './components/Header' 
import {Footer} from './components/Footers'
import { useEffect } from 'react';
import './App.css'
import { PageContent } from './PageContent';



function App() {
  const title = [{name: 'Frontline Technologies'}];

  useEffect(() => {
    document.title = title[0].name;
  });
 
  return ( 
    <div className='app'> 
      
      <Header />
      <PageContent />

      <Footer />
     
     
    </div>
    
  )
}

export default App