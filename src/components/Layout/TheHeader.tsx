import React from 'react';
import logo from 'assets/logo.png';
import mail from 'assets/mail.svg';

export const TheHeader: React.FC = () => {
  return (
    <header className="bg-white">
      <div className="flex pt-8" style={{height:"80px"}}>
        <div>
          <img src={logo} alt="logo" className="w-48" />
        </div>
        <div className="ml-4">
          <h1 className="font-bold text-5xl leading-none">SCOREBOOK</h1>
          <span className="text-xl text-gray">大阪府テニス協会 osaka tennis association</span>
        </div>
        <div className="flex place-items-center -mt-8 ml-auto px-8 bg-primary">
          <div className="flex h-auto">
            <img src={mail} alt="mail" />
            <span className="text-white">お問い合わせ</span>
          </div>
        </div>
      </div>
    </header>
  )
}