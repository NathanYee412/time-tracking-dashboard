import './App.css';
import Footer from './components/Footer';
import UserCard from './components/UserCard';

function App() {
  return (
    <div className="App">
      <UserCard name="Nathan Yee" imgSrc='https://media-exp1.licdn.com/dms/image/C5603AQH-p0aateI48g/profile-displayphoto-shrink_200_200/0/1634922628611?e=1649894400&v=beta&t=XUS2tvofYm5dKnhq6ESRAHDcpRnxSFzrZneXDZnbSTw'/>
      <Footer />
    </div>
  );
}

export default App;
