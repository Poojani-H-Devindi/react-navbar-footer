import { Navbar } from './Navbar';
import { Footer } from './Footer';
import './App.css';

/**
 * Main App component to display the combined Navbar, Content, and Footer.
 */
function App() {
  return (
    <div className="App" style={{ backgroundColor: '#1a1f2b', minHeight: '100vh' }}>
      {/* 1. The Navigation Bar */}
      <Navbar />

      {/* 2. Main content area of your page */}
      <main style={{ 
        padding: '100px 20px', 
        textAlign: 'center', 
        color: 'white' 
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>
          Welcome to My Custom App
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#adb5bd', maxWidth: '600px', margin: '0 auto' }}>
          Your high-quality Navbar and Footer are successfully integrated and ready to go!
        </p>
      </main>

      {/* 3. The Footer */}
      <Footer />
    </div>
  );
}

export default App;