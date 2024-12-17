
import { NavLink } from 'react-router-dom';
import Icons from './Icons';

const Footer = () => {
  return (
    <div className='footer bg-gray-350'>
      <div className="emplacement">
        <h2 className='font-semibold text-center -mx-3 text-[22px]'>Emplacement</h2>

        <ul className='flex mt-4'>
          <div className="ok">

          <li >
            <NavLink to="" className='text-gray-600'>6423</NavLink>
          </li>
          <li >
            <NavLink to="" className='text-gray-600'>Schwyz</NavLink>
          </li>
          </div>
        </ul>
      </div>
      <div className="hours">
        <h2 className='text-[19px] font-semibold'>Horaires d'ouverture</h2>
        
     <div className="horaires">

          <span className='un'>Du lundi au vendredi,</span> <br />
          <span className='un'>de 9h00 à 19h00</span>
        <br />
        <div className="troiss">

      <span className='deux'> jeudi, <br />
      9h00 - 20h00</span>
        </div>
         
        <span className='trois'>Samedi, <br /> 
        9h30 - 17h00</span>
     </div>
      
      </div>
      <div className="contact">
        <h2 className='text-[22px] font-semibold'>Contact</h2>
       <div className="infos">
         <h4 className='text-lg
         '><a className='text-black' href='mailto:mfokamkemgne@icloud.com' target='_blank' >mfokamkemgne@icloud.com</a></h4>
        <h3 className='underline  text-[19px] decoration-gray-500'>+41 6756776567</h3>
       <Icons/>
       </div>
      </div>
    </div>
  );
};

export default Footer;