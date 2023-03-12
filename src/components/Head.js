import React from 'react'
import HB from '../assets/images/dark-hb.png'
import Logo from '../assets/images/yt-logo.png'
import UserIcon from '../assets/images/user.png'


const Head = () => {
  return (
    <div className="flex justify-between p-1 m-1 shadow-sm">
        <div className="flex">
            <img className="h-10 mx-2" src={HB} alt="hamburger" />
            <img className="h-10" src={Logo} alt="logo" />
        </div>
        <div className="m-auto ">
            <input className="w-96 border border-gray-300 p-2 rounded-l-full" type="text" />
            <button className="border border-gray-300 p-2 rounded-r-full px-5 py-2 bg-gray-100">🔍</button>
        </div>
        <div className="">
            <img className="h-10" src={UserIcon} alt="user" />
        </div>
    </div>
  )
}

export default Head