import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { NavLink } from 'react-router-dom';

const Reservations = () => {
  const [map, setMap] = useState(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const navigate = useNavigate(); // Hook de navigation

  const cardsData = [ 
    {
      id: 1, // Ajoute un identifiant unique pour chaque carte
      message: "Boxbraids/Twist Men/Large/Medium/small",
      image: "../../public/men1.jpg",
      description: "1 Stunde 15 Minuten @ 90,00 - 130 CHF",
      coordinates: [5.9631, 10.1591],
    },
    {
      id: 2,
      message: "Boxbraids/Twist Men/Large/Medium/small",
      image: "../../public/ff.jpg",
      description: "1 Stunde 40 Minuten - 7 Stunde 30 Minuten @ 160,00 - 400 CHF",
      coordinates: [5.9641, 10.1601],
    },
    // ... Ajoute un ID à toutes tes cartes
  ];

  const mapRef = useRef(null);

  useEffect(() => {
    const mapInstance = L.map(mapRef.current).setView([5.9631, 10.1591], 13);
    setMap(mapInstance);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapInstance);

    return () => {
      mapInstance.remove();
    };
  }, []);

  const handleClick = (id) => {
    // Enregistre l'élément sélectionné
    const selected = cardsData.find(card => card.id === id);
    setSelectedCard(selected);
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
    setSelectedCard(null);
  };

  const handleSelect = (id) => {
   
    navigate(`/service/${id}`); 
  };

  return (
    <>
      <div className="reservations">
        <Header />
        <div className="container mx-auto bg-gray-100 md:flex flex-col lg:flex-row p-6 space-y-8 md:space-y-0">
          {/* Section principale */}
          <div className="first text-center space-y-8 p-6 sm:p-8 w-full max-w-4xl bg-white shadow-lg">
            <h2 className="text-3xl font-semibold text-gray-800">RESERVATIONS</h2>
            <h5 className="text-lg text-gray-500">Sécurisez votre rendez-vous.</h5>
            
            {/* Contact Section */}
            <div className="contact-section mt-8">
              <h2 className="text-2xl font-semibold text-gray-800">Contact</h2>
              <h3 className="text-xl text-gray-700 mt-2">Nous joindre ici</h3>
              <ul className="list-none space-y-2 mt-4">
                <li>
                  <a
                    href="mailto:mfokamkemgne@icloud.com"
                    className="mx-2 hover:underline text-black"
                  >
                    mfokamkemgne@icloud.com
                  </a>
                </li>
                <li className="text-gray-600">Seidenweg 5, 3012 Berne</li>
              </ul>
            </div>

            {/* Map Section */}
            <div className="map-container mt-8 w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px] shadow-lg overflow-hidden">
              <h1 className="text-2xl font-semibold text-gray-800 mb-4 font-serif" >Localisation</h1>
              <div id="map" ref={mapRef} className=" h-full w-full"></div>
            </div>
          </div>

          <div className="second -m-10 gap-8 p-6 w-full bg-slate-400 max-w-7xl mx-auto">
            {cardsData.map((card) => (
              <div key={card.id} className="relative  bg-gray-800 mt-1 text-gray-200 p-6 shadow-lg transition-transform duration-300 ease-in-out transform hover:bg-cyan-900 hover:shadow-2xl">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-xl font-semibold text-cyan-300">{card.message}</div>
                  <button
                    onClick={() => handleClick(card.id)}
                    className="px-3 bg-cyan-600 text-white shadow-md hover:bg-cyan-500 focus:outline-none transition-colors"
                  >
                    Auswählen
                  </button>
                </div>
                <div className="text-sm text-gray-400">{card.description}</div>
              </div>
            ))}
          </div>
        </div>

        {isPopupVisible && selectedCard && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-500 ease-in-out opacity-100">
            <div className="bg-gray-400 z-auto p-6 rounded-lg shadow-lg max-w-md w-full transform scale-95 transition-all duration-300 ease-out animate__animated animate__fadeIn animate__faster">
              {/* Close button */}
              <button
                onClick={closePopup}
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl font-semibold focus:outline-none transition-all duration-300 ease-in-out transform hover:scale-125"
              >
                &times;
              </button>
              <h3 className="text-2xl font-semibold text-gray-800">{selectedCard.message}</h3>
              <p className="text-sm text-gray-600 mt-2">{selectedCard.description}</p>
              <img
                src={selectedCard.image}
                alt={selectedCard.description}
                className="w-full max-w-xs mx-auto rounded shadow-md mt-4 transition-transform duration-300 ease-in-out transform hover:scale-105 bg-gray-200"
              />
              <button
                onClick={() => handleSelect(selectedCard.id)} // Appel de la fonction pour rediriger
                className="selection bg-gray-800 text-white p-2 mt-4"
              >
                Sélectionner
              </button>
            </div>
          </div>
        )}

        <Footer />
      </div>
    </>
  );
};

export default Reservations;
