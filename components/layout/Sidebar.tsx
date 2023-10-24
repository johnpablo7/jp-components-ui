import Link from "next/link";

export const Sidebar = () => {
  return (
    <>
      <div className="bg-gray-200 flex flex-col h-full">
        <aside>
          <div className="p-8">
            <div className="pb-4">
              <h4 className="mb-1 py-1 px-2 font-semibold">Empezando</h4>
              <div className="grid grid-flow-row auto-rows-max">
                <Link href="/" className="py-1 px-2 hover:underline text-sm">
                  Inicio
                </Link>
                <Link
                  href="/documentacion"
                  className="py-1 px-2 hover:underline text-sm"
                >
                  Introducción
                </Link>
              </div>
            </div>

            <div className="pb-4">
              <h4 className="mb-1 py-1 px-2 font-semibold">Componentes</h4>
              <div className="grid grid-flow-row auto-rows-max text-sm">
                <Link
                  href="/documentacion/componentes/navegacion"
                  className="py-1 px-2 hover:underline"
                >
                  Navegación
                </Link>
              </div>
              <div className="grid grid-flow-row auto-rows-max text-sm">
                <Link
                  href="/documentacion/componentes/pie-de-pagina"
                  className="py-1 px-2 hover:underline"
                >
                  Pie de página
                </Link>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};
