import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex p-5 m-2">
        <div className="text-left">
          <img src="" alt="loading" />
          <p className="break-words">
            With Cruize, your assets remain safe from volatility{" "}
          </p>
          <p>
            risks while generating outsized returns in every market condition.
          </p>
        </div>
        <div className="flex  mx-10">
          <div className="justify-end">
            <h2 className="font-bold m-2 p-1">Resources</h2>
            <ul>
              <li>Docs</li>
              <li>Audit</li>
              <li>Help Center</li>
              <li>Tutorials</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold m-2 p-1">Company</h2>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Careers</li>
              <li>Terms</li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold m-2 p-1">Social</h2>
            <ul>
              <li>Discord</li>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Github</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex mx-4 p-2">
        <div>© 2023 Cruize Inc.</div>
        <div className="mx-96  flex">
          <ul className="flex m-2 p-7 h-1">
            <li>
              <img
                className="m-2 p-2"
                src="https://cdn-icons-png.flaticon.com/512/733/733635.png"
                alt="loading"
              />
            </li>
            <li>
              <img
                className="m-2 p-2"
                src="https://cdn-icons-png.flaticon.com/512/733/733635.png"
                alt="loading"
              />
            </li>
            <li>
              <img
                className="m-2 p-2"
                src="https://cdn-icons-png.flaticon.com/512/733/733635.png"
                alt="loading"
              />
            </li>
            <li>
              <img
                className="m-2 p-2"
                src="https://cdn-icons-png.flaticon.com/512/733/733635.png"
                alt="loading"
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
