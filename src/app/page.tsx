import Header from '@/components/header/header';
import HomePage from '@/components/home/homePage';
import SobreNos from '@/components/sections/sobreNos';
import { MostrarUsuario } from '@/components/sections/mostrarUsuario';
import Equipe from '@/components/sections/equipe';
import Footer from '@/components/foother/footer';

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
        url="https://miro.com/app/board/uXjVJ25PGLk=/?share_link_id=487497004668"
        titleDescricao="Design Sprint"
      />
      <Equipe/>
      <MostrarUsuario
        id="prototipos"
        title="Protótipo no Figma"
        url="https://embed.figma.com/design/kOZqWzTAEjBYwb37lt6KjE/Adapt-Write-Telas?node-id=0-1&m=dev&embed-host=share"
        titleDescricao="Protótipo no Figma"
      />
      <Footer/>
    </div>
  );
}
