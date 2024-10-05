import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import symbol from '../assets/logo/symbol.jpg';

const AppQRCode = ({ url, size = 128 }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="p-2 rounded-xl bg-white">
        <QRCodeSVG
          value={ url }
          size={ size }
          bgColor="#ffffff"
          fgColor="#000000"
          level="L"
          imageSettings={{
            src: symbol,
            x: undefined,
            y: undefined,
            height: 30,
            width: 30,
            excavate: true,
          }}
          className="border-2 border-custom-back rounded-xl"
        >
          <img src={ symbol } alt="App Icon" className="mt-4 w-16 h-16" />
        </QRCodeSVG>
      </div>
    </div>
  );
};

export default AppQRCode;