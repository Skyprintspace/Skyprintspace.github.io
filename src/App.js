import logo from './logo.svg';
import './App.css';
import ParticlesComponent from './components/particles';

function App() {
  return (
    <div className="App">
      <ParticlesComponent id = "particles" />
      <h1 class='words'>A new approach to space sustainability products.</h1>
      <h1 class='words2'>SkyPrint</h1>
      <a href="https://www.linkedin.com/company/skyprintspace/" target="_blank" class='social-icons'>
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn"style={{
            width: '64px',
            height: '64px',
          }} />
        </a>
      <a href="https://www.instagram.com/skyprintspace/" target="_blank" class='social-icons'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" style={{
            width: '64px',
            height: '64px',
          }} />
        </a>
        <h3 class='words4'>by Jainesh Kothari & Aryan Verma</h3>
        <h3 class='words5'>Website created by Jainesh Kothari</h3>
    </div>
  );
}

export default App;
