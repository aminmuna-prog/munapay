
// import './App.css';
import Navbar from './component/Navbar';
import Header from './component/Header';
import Howdoes from './component/Howdoes';
import Aboutus from './component/Aboutus';
import Servicepart from './component/Servicepart';
import Contactpart from './component/Contactpart';
import Footer from './component/Footer';


const Home = () =>{
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Howdoes></Howdoes>
      <Aboutus></Aboutus>
      <Servicepart></Servicepart>
      <Contactpart></Contactpart>
      <Footer></Footer>
     
    </>
  );
}

export default Home;
