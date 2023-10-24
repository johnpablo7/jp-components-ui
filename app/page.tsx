import { Footer } from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { BiDonateHeart } from "react-icons/bi";

export default function Home() {
  return (
    <>
      <div className="sm:py-44">
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-16">
          <div className="flex flex-col justify-center col-span-2">
            <div className="max-w-xs bg-gray-200 py-2 px-4 rounded-full flex items-center justify-center gap-x-2 font-medium">
              Versión de Tailwind CSS
              <span className="bg-teal-500 text-white py-2 px-4 rounded-full">
                V3.3.3
              </span>
            </div>
            <h1 className="text-5xl font-extrabold my-4">Componentes UI</h1>
            <h2 className="text-4xl font-extrabold text-teal-500 mb-6">
              React JS y Tailwind CSS
            </h2>

            <p className="text-xl mb-10">
              Componentes JP son componentes desarrollados principalmente con
              React JS y Tailwind CSS basados en Flexbox y CSS Grid, totalmente
              responsivos y bellamente diseñados que puedes copiar y pegar en
              tus aplicaciones. Accesible. Personalizable. Fuente abierta.
            </p>
            <div className="flex items-center gap-8">
              <Link
                href="/documentacion"
                className="bg-black-500 hover:bg-black-100 text-white py-2.5 w-full text-center rounded-lg transition-colors"
              >
                Buscar componentes
              </Link>
              <Link
                href="/documentacion"
                className="bg-teal-700 hover:bg-teal-800 text-white py-2.5 w-full rounded-lg transition-colors flex items-center justify-center gap-3"
              >
                <BiDonateHeart className="text-xl" />
                <p>Invitar un café</p>
              </Link>
            </div>
          </div>
          <div className="col-span-3">
            <Image
              src="/images/hero-tailwind.svg"
              alt="hero"
              width="0"
              height="0"
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
