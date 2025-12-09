import fundo from '../../assets/imgs/fundo.jpg';

export default function HomePage() {
  return (
    <div>
      <section
        className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed bg-white flex items-center justify-center flex-col text-center px-16 py-4 pt-32"
        style={{ backgroundImage: `url(${fundo.src})` }}
      >
        <div>
          <h1 className="pb-12 text-5xl font-extrabold text-center max-w-5xl">
            Plataforma para gestão da
            <br />
            produção e correção de redações
          </h1>

          <p className="pb-12 text-2xl font-light text-center">
            Desenvolvida para ajudar alunos de ensino
            <br />
            médio a se organizarem e escreverem boas redações.
          </p>
        </div>
      </section>
    </div>
  );
}
