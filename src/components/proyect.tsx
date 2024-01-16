export default function Proyect() {
  return (
    <div className="flex gap-2 mb-8 hover:bg-gray-600 hover:bg-opacity-25 p-1 rounded-lg cursor-pointer">
      <figure className="p-2">
        <img
          className="rounded-lg"
          src="https://img.freepik.com/foto-gratis/retrato-analogico-mujer-hermosa-posando-artisticamente-interiores_23-2149630182.jpg?w=740&t=st=1705445281~exp=1705445881~hmac=e6531c94e75a54e364aaf279e75adbcb1021b0cb1aa66e30045322b39bb49a89"
          alt=""
        />
      </figure>
      <div>
        <h1 className="text-lg text-gray-100 mb-2">
          Build a Spotify Connected App
        </h1>
        <p className="mb-2">
          Video course that teaches how to build a web app with the Spotify Web
          API. Topics covered include the principles of REST APIs, user auth
          flows, Node, Express, React, Styled Components, and more.
        </p>
        <p className="mb-2">
          <i className=" text-yellow-500 fa-solid fa-star"></i>
          <i className=" text-yellow-500 fa-solid fa-star"></i>
          <i className=" text-yellow-500 fa-solid fa-star"></i>
          <i className=" text-yellow-500 fa-regular fa-star"></i>
        </p>
        <p className="float-left gap-2 text-nowrap">
          <span className="float-left bg-green-300 bg-opacity-20 text-green-500 mr-2 my-1 px-1.5 rounded-xl">
            React
          </span>
          <span className="float-left bg-green-300 bg-opacity-20 text-green-500 mr-2 my-1 px-1.5 rounded-xl">
            React Native
          </span>
          <span className="float-left bg-green-300 bg-opacity-20 text-green-500 mr-2 my-1 px-1.5 rounded-xl">
            SCSS
          </span>
          <span className="float-left bg-green-300 bg-opacity-20 text-green-500 mr-2 my-1 px-1.5 rounded-xl">
            JavaScript
          </span>
          <span className="float-left bg-green-300 bg-opacity-20 text-green-500 mr-2 my-1 px-1.5 rounded-xl">
            TypeScript
          </span>
          <span className="float-left bg-green-300 bg-opacity-20 text-green-500 mr-2 my-1 px-1.5 rounded-xl">
            PHP
          </span>
        </p>
      </div>
    </div>
  );
}
