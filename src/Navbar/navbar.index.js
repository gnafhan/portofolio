import {Navbar} from 'flowbite-react';
import {useState} from 'react'


const Navbars = () => {
  const [isOpen, setIsOpen] = useState("block absolute right-4");
  const Toggle = () =>{
    if(isOpen === "block absolute right-4"){
      setIsOpen("block absolute right-4 hamburger-active");
    }else{
      setIsOpen("block absolute right-4");
    }
  }

    return (
      <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <a href="#home" className="font-bold text-lg text-primary block py-6">ghifarinafhan</a>
            </div>
            <div className="flex items-center px-4">
              <button onClick={Toggle} className={isOpen} id="hamburger" name="hamburger" type="button">
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
                <span className="hamburger-line"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    )

    
}

export default Navbars;