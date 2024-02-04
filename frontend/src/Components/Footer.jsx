import React from 'react';
import { Linkedin, Instagram, Mail } from 'react-feather';
import img from "../assets/cont.png"
import './footer.css';
import chain from "../assets/chain.png"
import vector from "../assets/vector.png"
import board from "../assets/Board.png"
function Footer() {

    return (
        <footer style={{ 
            backgroundImage: `url(${img})`, 
            backgroundSize: "cover", 
            backgroundPosition: 'center', 
            backgroundRepeat: 'no-repeat', 
            height: 'auto', 
            width: '100vw', 
            objectFit: 'cover',
            
        }}>
            <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                objectFit: 'cover',
            }}>
                
                <div style={{display:"flex", position:'relative'}}>
                    <img src={chain} alt="chain" style={{paddingRight:'80px', height:'80px'}} />
                    
                    <img src={chain} alt="chain" style={{paddingLeft:'80px', height: '80px'}} />
                </div>
                <div style={{position:'absolute', top:'30px'}}>
                <h2  className='title' style={{ fontFamily: 'p', color: "black", paddingLeft: '60px', paddingTop:'10px'}}>CONTACT US</h2>
                </div>
                <div style={{ paddingTop: '150px'}}>
                </div>
            <div className='bg' style={{ backgroundImage: `url(${vector})`,}} >
                <div style={{ paddingTop: '20xpx' }}>
                    <h2 style={{ fontFamily: 'p', color: "black", paddingLeft: '300px', fontSize:30 }}>Reach Out To Us</h2>
                    <div style={{ color: "black", paddingLeft: '0px', fontSize: 20 }}>
                        <ul style={{ listStyle: 'none', display:'flex' }}>
                            <li>
                                <p style={{paddingLeft:'40px'}}>Gagan S:<a href="tel:">+91 9008243280 </a></p>
                            </li>

                            <li>
                                <p style={{paddingLeft:'50px'}}>Tarana Shetty: <a href="tel:">+91 7483408791</a></p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div style={{ paddingTop: '5px' }}>
                    <h2 style={{ fontFamily: 'p', color: "black", paddingLeft: '300px' }}>Connect with Us On</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', paddingTop: '10px', paddingRight: '0px' }}>
                        <div style={{ margin: '0 10px' }}>
                            <a style={{ color: 'black' }} href="https://www.instagram.com/wearehackman/" rel='noreferrer noopener' target="_blank"><Instagram size={50} /></a>
                        </div>
                        <div style={{ margin: '0 10px' }}>
                            <a style={{ color: 'black' }} href="https://www.linkedin.com/company/wearehackman/" rel='noreferrer noopener' target="_blank"><Linkedin size={50} /></a>
                        </div>
                        <div style={{ margin: '0 10px' }}>
                            <a style={{ color: 'black' }} href="mailto:genesis.hackman@gmail.com" rel='noreferrer noopener' target="_blank"><Mail size={50} /></a>
                        </div>
                    </div>
                </div>
                <div style={{ paddingTop: '30px', color: "black"}}>
                    <p style={{ paddingRight: '200px', paddingLeft:'700px' }}></p>
                    <p>© 2024 Hackman. All rights Reserved</p>
                    <p style={{paddingLeft:'330px'}}>Made by team <a href="https://www.instagram.com/genesis.ise/" rel='noreferrer noopener' target="_blank">Genesis</a></p>
                </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;



// import { Linkedin, Instagram, Mail } from 'react-feather'
// import '../index.css';
// // import termsconditions from "../assets/documents/T&C - HACKMAN.pdf";
// // import codeofconduct from "../assets/documents/COC - HACKMAN.pdf";
// // import instructions from "../assets/documents/Instructions- HACKMAN.pdf";

// function Footer() {
//     return (
        
//              <div className="font-pixeloid-sans">
//             <div class="container px-3 pt-5 sm:pt-8 mx-auto">
//                 <div class="flex flex-wrap md:text-center text-center order-first">
//                     <div class="lg:w-1/3 md:w-1/2 w-full px-4 py-0">
//                         <h2 class="font-pixeloid-sans text-blue lg:text-3xl md:text-xl text-xl tracking-wider font-bold mb-1 sm:mb-2">Reach Out To Us</h2>
//                         <div class="list-none mb-4 sm:mb-10">
//                             <li>
//                                 <p class="text-white text-xs lg:text-lg md:text-md hover:text-[#22C3FF]">Gagan S <a href="tel:">+91 9008243280</a></p>
//                             </li>
//                             <li>
//                                 <p class="text-white text-xs lg:text-lg md:text-md hover:text-[#22C3FF]">Tarana Shetty: <a href="tel:">+91 7483408791</a></p>
//                             </li>
//                         </div>
//                     </div>
//                     <div class="lg:w-1/3 md:w-1/2 w-full px-4 py-0">
//                         <h2 class="font-poppins text-white lg:text-3xl md:text-xl text-xl tracking-wider font-bold mb-1 sm:mb-2">Connect with Us On</h2>
//                         <div className="flex justify-center text-white text-xs sm:text-xl ">
//                             <div className="">
//                                 <a href="https://www.instagram.com/wearehackman/" rel='noreferrer noopener' target="_blank"><Instagram size= {30} className='hover:text-[#22C3FF] lg:hover:scale-125 md:text-5xl md:hover:scale-125 text-3xl' /></a>
//                             </div>
//                             <div className="ml-8 insta">
//                                 <a href="https://www.linkedin.com/company/wearehackman/" rel='noreferrer noopener' target="_blank"><Linkedin size= {30} className='hover:text-[#22C3FF] lg:text-5xl lg:hover:scale-125 md:text-5xl md:hover:scale-125 text-3xl'/></a>
//                             </div>
//                             <div className="ml-8 mb-4 sm:mb-10">
//                                 <a href="mailto:genesis.hackman@gmail.com" rel='noreferrer noopener' target="_blank"><Mail size= {30} className='hover:text-[#22C3FF] lg:text-5xl lg:hover:scale-125 md:text-5xl md:hover:scale-125 text-3xl'/></a>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="lg:w-1/3 md:w-1/1 w-full px-4 py-0">
//                         <p class="font-poppins text-[#22C3FF] tracking-widest cursor-pointer lg:text-sm md:text-sm text-xs mt-0.5 sm:mt-2 mb-1 sm:mb-2"></p>
//                         <p class="font-poppins text-[#22C3FF] tracking-widest cursor-pointer lg:text-sm md:text-sm text-xs mt-0.5 sm:mt-2 mb-1 sm:mb-2"></p>
//                         <p class="font-poppins text-white tracking-widest lg:text-smF md:text-sm text-xs mb-4">© 2024 Hackman. All rights Reserved</p>
//                     </div>



//                 </div>
//             </div>
//             <div className='bg-[#24263B] pt-0.5 pb-0.5'>
//                 <p className='font-poppins text-center text-white text-xs sm:text-base tarcking-widest mb-0.5 sm:mb-2 mt-1 sm:mt-2 '>Made by team <a href="https://www.instagram.com/genesis.ise/" rel='noreferrer noopener' target="_blank" className='text-[#22C3FF]'>Genesis</a></p>
//             </div>
//             </div>
        
//     );
// }

// export default Footer;
// import { Linkedin, Instagram, Mail } from 'react-feather';
// import './footer.css';

// function Footer() {
//     return (
//         <footer className="bg-[#23354E]">
//             <div className="container px-3 pt-5 sm:pt-8 mx-auto">
//                 <div className="flex flex-wrap md:text-center text-center order-first">
//                     <div className="lg:w-1/3 md:w-1/2 w-full px-4 py-0">
//                         <h2 className="font-pixeloid-sans text-white lg:text-3xl md:text-xl text-xl tracking-wider font-bold mb-1 sm:mb-2">Reach Out To Us</h2>
//                         <div className="list-none mb-4 sm:mb-10">
//                             <li>
//                                 <p className="text-white text-xs lg:text-lg md:text-md hover:text-[#22C3FF]">Gagan S <a href="tel:">+91 9008243280</a></p>
//                             </li>
//                             <li>
//                                 <p className="text-white text-xs lg:text-lg md:text-md hover:text-[#22C3FF]">Tarana Shetty: <a href="tel:">+91 7483408791</a></p>
//                             </li>
//                         </div>
//                     </div>
//                     <div className="lg:w-1/3 md:w-1/2 w-full px-4 py-0">
//                         <h2 className="font-pixeloid-sans text-white lg:text-3xl md:text-xl text-xl tracking-wider font-bold mb-1 sm:mb-2">Connect with Us On</h2>
//                         <div className="flex justify-center text-white text-xs sm:text-xl ">
//                             <div className="">
//                                 <a href="https://www.instagram.com/wearehackman/" rel='noreferrer noopener' target="_blank"><Instagram size={30} className='hover:text-[#22C3FF] lg:hover:scale-125 md:text-5xl md:hover:scale-125 text-3xl' /></a>
//                             </div>
//                             <div className="ml-8 insta">
//                                 <a href="https://www.linkedin.com/company/wearehackman/" rel='noreferrer noopener' target="_blank"><Linkedin size={30} className='hover:text-[#22C3FF] lg:text-5xl lg:hover:scale-125 md:text-5xl md:hover:scale-125 text-3xl' /></a>
//                             </div>
//                             <div className="ml-8 mb-4 sm:mb-10">
//                                 <a href="mailto:genesis.hackman@gmail.com" rel='noreferrer noopener' target="_blank"><Mail size={30} className='hover:text-[#22C3FF] lg:text-5xl lg:hover:scale-125 md:text-5xl md:hover:scale-125 text-3xl' /></a>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="lg:w-1/3 md:w-1/1 w-full px-4 py-0">
//                         <p className="font-pixeloid-sans text-[#22C3FF] tracking-widest cursor-pointer lg:text-sm md:text-sm text-xs mt-0.5 sm:mt-2 mb-1 sm:mb-2"></p>
//                         <p className="font-pixeloid-sans text-[#22C3FF] tracking-widest cursor-pointer lg:text-sm md:text-sm text-xs mt-0.5 sm:mt-2 mb-1 sm:mb-2"></p>
//                         <p className="font-pixeloid-sans text-white tracking-widest lg:text-smF md:text-sm text-xs mb-4">© 2024 Hackman. All rights Reserved</p>
//                     </div>
//                 </div>
//             </div>
//             <div className='bg-[#24263B] pt-0.5 pb-0.5'>
//                 <p className='font-pixeloid-sans text-center text-white text-xs sm:text-base tracking-widest mb-0.5 sm:mb-2 mt-1 sm:mt-2 '>Made by team <a href="https://www.instagram.com/genesis.ise/" rel='noreferrer noopener' target="_blank" className='text-[#22C3FF]'>Genesis</a></p>
//             </div>
//         </footer>
//     );
// }

// export default Footer;
