import React from "react";

const Footer = () => {
  return (
    <>
      <div className="justify-around w-full  bottom-0  z-40">
        <div className="flex p-5 m-2  ">
          <div className="text-left">
            <img
              src="https://lh3.googleusercontent.com/gt9F2OBc-IXc2VywGSLUYjzQDvc7snS5mycu99Ixg_12RSEshA0sn5UPB5qtnCQW2gbeCaEw-CwsXcJ_qaYxSuPg7hMs1U_LE25cftK9"
              alt="loading"
            />
            <p className="break-words">
              With Cruize, your assets remain safe from volatility{" "}
            </p>
            <p>
              risks while generating outsized returns in every market condition.
            </p>
          </div>
          <div className="flex justify-between ml-96 ">
            <div className="justify-end">
              <h2 className="font-bold m-3 p-1">Resources</h2>
              <ul className="ml-20">
                <li>Docs</li>
                <li>Audit</li>
                <li>Help Center</li>
                <li>Tutorials</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold m-3 p-1">Company</h2>
              <ul className="ml-20">
                <li>Home</li>
                <li>About</li>
                <li>Careers</li>
                <li>Terms</li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold m-3 p-1">Social</h2>
              <ul className="ml-20">
                <li>Discord</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>Github</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex mx-4 p-2 justify-between">
          <div>© 2023 Cruize Inc.</div>
          <div className="mx-96 ml-72  flex ">
            <ul className="flex h-1">
              <li>
                <img
                  className="m-2 p-2 h-8"
                  src="https://cdn-icons-png.flaticon.com/512/733/733635.png"
                  alt="loading"
                />
              </li>
              <li>
                <img
                  className="m-2 p-2 h-8"
                  src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
                  alt="loading"
                />
              </li>
              <li>
                <img
                  className="m-2 p-2 h-8"
                  src="https://cdn-icons-png.flaticon.com/512/4701/4701482.png"
                  alt="loading"
                />
              </li>
              <li>
                <img
                  className="m-2 p-2 h-8"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNdCzJYio5QkKGM2KozFtEE7I9GwjyCgZzlh6KlI28&s"
                  alt="loading"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
