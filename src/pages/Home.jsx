import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <div className="home-content">
        <h1 >
          Bienvenue
            <br />
         chez nous
        </h1>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;