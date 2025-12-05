import Header from '@/components/header/header';
import HomePage from '@/components/home/homePage';
import SobreNos from '@/components/sections/sobreNos';
import { MostrarUsuario } from '@/components/sections/mostrarUsuario';

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Header />
      <HomePage />
      <MostrarUsuario
        id="video"
        title="Vídeo conceitual"
        url="https://www.youtube.com/embed/hhMGXOW1Mbg?si=e8gTGpNgFU0W67MQ"
        titleDescricao="Vídeo Conceitual"
      />
      <SobreNos />
      <MostrarUsuario
        id="design"
        title="Design Sprint"
        url="https://www.youtube.com/embed/BOQWzvhgUz4?si=W3gpd5nVv7i3tR5f"
        titleDescricao="Design Sprint"
      />
    </div>
  );
}
