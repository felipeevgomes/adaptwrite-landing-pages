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
        url="https://www.youtube.com/embed/N1oVT3vC8sE?si=aAW2n_qOdxrfGr2Z"
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
        url="https://embed.figma.com/proto/DyIkkF8AFI0GSbM89Lh4p8/AdaptWrite-IHC?node-id=25-813&p=f&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=25%3A813&embed-host=share"
        titleDescricao="Protótipo no Figma"
      />
      <Footer/>
    </div>
  );
}
