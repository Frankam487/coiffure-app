import Header from "../components/Header";

const Service1 = () => {
  return (
    <div className='service1 bg-gray-400'>
      <Header/>
      <div className="card-container py-10 mx-9 mt-20">
       <div className="cards bg-blue-50 flex justify-center items-center shadow-md w-full p-7" >
        <div className="text">
         <h6>Medium/Large Box-Braids</h6>
        <em>3h à 100 FA</em>
       </div>
       <button className="w-full h-[45px] sm:w-auto bg-black text-white -py-6 shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition-all duration-300 transform hover:scale-105">Sélectionner</button>
       </div>
       <div className="cards bg-blue-50 flex justify-center items-center shadow-md   w-full p-7" >
        <div className="text">
         <h6>Médium Box-Braids</h6>
         
        <em>3h à 100 FA</em>
       </div>
       <button className="w-full sm:w-auto h-[45px] bg-black text-white py-2 shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition-all duration-300 transform hover:scale-105">Sélectionner</button>
       </div>
       <div className="cards bg-blue-50 shadow-md  flex justify-center items-center w-full p-7" >
        <div className="text ">
         <h6>Medium/Large Box-Braids</h6>
        <em>3h à 100 FA</em>
       </div>
       <button className="w-full sm:w-auto h-[45px] bg-black text-white py-2 shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition-all duration-300 transform hover:scale-105">Sélectionner</button>
       </div>
       <div className="cards shadow-md bg-blue-50 flex justify-center items-center  w-full p-7" >
        <div className="text">
         <h6>Medium/Large Box-Braids</h6>
        <em>3h à 100 FA</em>
        
       </div>
       <button className="w-full sm:w-auto h-[35px] bg-black text-white py-2 shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 transition-all duration-300 transform hover:scale-105">Sélectionner</button>
       </div>
       
      </div>
    
    </div>
  );
};

export default Service1;