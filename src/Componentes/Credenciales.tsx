import React, { ChangeEvent, useState } from "react";

interface CredencialesProps {
    enviar: Function;
    titulo: string;
    boton: string;
}

function Credenciales({ enviar, titulo, boton }: CredencialesProps) {
    const [form, setForm] = useState({
        usuario: "",
        clave: "",
    });

    const { usuario, clave } = form;

    const onChange = (event: ChangeEvent, prop: string) => {
        const value = (event.target as HTMLInputElement).value;
        setForm((estado) => ({ ...estado, [prop]: value }));
    };

    const enAcceder = async (
        evento: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    ) => {
        evento.preventDefault();
        enviar(form);
    };

    return (
        <section className="flex items-center justify-center min-h-screen px-5 py-5 bg-white">
            <div className="rounded-xl m-4 bg-gray-200 text-gray-700 text-xs nm-flat-white overflow-hidden w-full max-w-md">
                <h1 className="text-lg m-3 uppercase">{titulo}</h1>
                <form className="py-5 px-5">
                    <label className="block uppercase text-xs font-bold mb-6">
                        Usuario
                        <input
                            className="nm-inset-gray-100 w-full border rounded-xl p-2 focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Escribe tu email"
                            value={usuario}
                            onChange={(e) => onChange(e, "usuario")}
                        />
                    </label>
                    <label className="block uppercase text-xs font-bold mb-6">
                        Clave
                        <input
                            className="nm-inset-gray-100 w-full border rounded-xl p-2 focus:outline-none focus:bg-white focus:border-gray-500"
                            placeholder="Escribe tu clave"
                            value={clave}
                            onChange={(e) => onChange(e, "clave")}
                        />
                    </label>
                </form>
                <div className="bg-gradient-to-r from-gray-700 via-gray-400 to-gray-200 px-4 py-3 flex justify-center">
                    <button
                        className="text-sm font-bold py-2 px-6 rounded-full text-white nm-flat-gray-500 hover:bg-gray-800 transition duration-300"
                        onClick={(e) => enAcceder(e)}
                    >
                        Acceder {boton}
                    </button>
                </div>
            </div>
        </section>

    );
}

export default Credenciales;