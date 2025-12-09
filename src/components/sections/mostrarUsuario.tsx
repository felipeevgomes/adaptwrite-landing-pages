interface MostrarUsuarioProps {
  id: string;
  title?: string;
  url?: string;
  titleDescricao?: string;
}

export const MostrarUsuario = ({
  id,
  title,
  url,
  titleDescricao,
}: MostrarUsuarioProps) => {
  return (
    <section
      id={id}
      className="min-h-screen px-6 md:px-12 py-20 bg-white flex flex-col items-center justify-center"
    >
      <h2 className="text-black text-3xl md:text-5xl font-bold italic text-center mb-12 md:mb-16">
        {title}
      </h2>
      <div className="relative w-full max-w-5xl mx-auto">
        <div className="relative w-full aspect-video rounded-4xl border-4 border-[#74BA63] overflow-hidden bg-black shadow-xl">
          <iframe
            src={url}
            className="w-full h-full"
            allowFullScreen
            title={titleDescricao}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          />
        </div>
      </div>
    </section>
  );
};
