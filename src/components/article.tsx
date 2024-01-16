import Experience from "./experience";
import Proyect from "./proyect";

export default function Article() {
  return (
    <div className="text-gray-500 font-medium mt-24 text-[1.05rem]">
      <div className="mb-32">
        <p className="mb-4">
          En 2012, decidí intentar crear temas personalizados para Tumblr y caí
          de cabeza en la madriguera de la codificación y el desarrollo web. Si
          avanzamos <span className="text-gray-200">hasta el día de hoy</span>,
          he tenido el privilegio de
        </p>
        <p className="mb-4">
          crear software para una agencia de publicidad,
          <span className="text-gray-200">una nueva empresa</span>, un estudio
          de diseño dirigido por estudiantes y una gran corporación. Mi enfoque
          principal en estos días es crear productos y liderar proyectos para
          nuestros clientes en Upstatement. En mi tiempo libre{" "}
          <span className="text-gray-200"> también publiqué un curso</span> en
          video en línea que cubre todo lo que necesitas saber para crear una
          normalmente estoy escalando
        </p>
        <p className="mb-4">
          aplicación web con la API de Spotify. Cuando no estoy frente a la{" "}
          <span className="text-gray-200">
            computadora, rocas, saliendo con mi esposa y mis
          </span>{" "}
          Hyrule en dos gatos, o corriendo por
          <span className="text-gray-200">busca de semillas de Korok</span>.
        </p>
      </div>

      <div className="mb-32">
        <Experience />
        <Experience />
      </div>

      <div className="mb-4 w-full">
        <Proyect />
        <Proyect />
      </div>
    </div>
  );
}
