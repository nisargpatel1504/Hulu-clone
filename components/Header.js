import Image from "next/image"
import logo from '../Image/Hulu-Logo.wine.svg'
import HeaderItem from "./HeaderItem";
import {HomeIcon,LightningBoltIcon,BadgeCheckIcon,CollectionIcon,SearchIcon,UserIcon} from "@heroicons/react/outline"


function Header() {
    return(
   <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
       <div className="flex flex-grow justify-evenly max-w-2xl" >
       <HeaderItem title="HOME" Icon={HomeIcon}/>
       <HeaderItem title="Light" Icon={LightningBoltIcon}/>
       <HeaderItem title="Badge" Icon={BadgeCheckIcon}/>
       <HeaderItem title="Collection" Icon={CollectionIcon}/>
       <HeaderItem title="Search" Icon={SearchIcon}/>
       <HeaderItem title="User" Icon={UserIcon}/>
   </div>
  <Image className="object-contain" src={logo} width={200} height={100}/>
  </header>)
}

export default Header;
