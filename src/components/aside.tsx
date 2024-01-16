import { HTMLAttributes } from "react";

export default function Aside() {
  return (
    <div className="w-full flex text-start flex-col justify-between h-4/5 py-5">
      <div>
        <h1 className="text-5xl font-bold text-blue-100">Keiner Peñaranda</h1>
        <h3 className="text-2xl font-semibold my-4">Ingeniero de sistema</h3>
        <p className="w-9/12 text-gray-400 font-[500]">
          Creo paginas accesibles y responsive, perfectos para la web y más
          allá.
        </p>
      </div>

      <ul className="mb-12">
        <li className="flex items-center gap-4">
          <a className="group flex items-center py-3" href="#experience">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              ACERCA DE MI
            </span>
          </a>
        </li>

        <li className="flex items-center gap-4">
          <a className="group flex items-center py-3" href="#experience">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              EXPERIENCIA
            </span>
          </a>
        </li>

        <li className="flex items-center gap-4">
          <a className="group flex items-center py-3" href="#experience">
            <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
            <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
              PROYECTOS
            </span>
          </a>
        </li>
      </ul>

      <div className="flex gap-6 text-2xl text-gray-400">
        <a href="http://">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="http://">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="http://">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
        <a href="http://">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}
