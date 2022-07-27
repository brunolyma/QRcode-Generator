import { useState } from "react";
import QRCode from "qrcode";

function App() {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(url, {width: 800, margin: 1}, (err, url) => {
      if (err) return console.error(err);

      console.log(url);
      setQrcode(url);
    });
  };

  return (
    <div className="px-4 py-8 mb-8 h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl mb-4 font-bold">QR Code Generator</h1>
      <input
        className="w-full max-w-[300px] appearance-none outline-none border-none bg-slate-300 px-4 mx-auto rounded-lg text-gray-800"
        type="text"
        placeholder="e.g. https://google.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button
        className="appearance-none border-none outline-none cursor-pointer mt-8 text-green-400 text- leading-4 no-underline"
        onClick={GenerateQRCode}
      >
        Generate
      </button>
      {qrcode && (
        <>
          <img
            className="block w-full max-w-md my-8 mx-auto"
            src={qrcode}
            alt="QR Code"
          />
          <a
            className="appearance-none border-none outline-none cursor-pointer mb-8 text-green-400 text- leading-4 no-underline"
            href={qrcode}
            download="qrcode.png"
          >
            Download
          </a>
        </>
      )}
    </div>
  );
}

export default App;
