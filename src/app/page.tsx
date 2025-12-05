import Image from 'next/image';
import logo from '../assets/imgs/logo.svg';

export default function Header() {
  return (
    <header className="font-segoe shadow-xl fixed top-0 left-0 right-0 flex items-center justify-between w-full px-12 py-4 z-50 bg-green50">
      <div className="flex items-center gap-6">
        <Image src={logo} alt="AdaptWrite Logo" width={50} height={50} />
        <h1 className="text-3xl font-black text-green700">AdaptWrite</h1>
      </div>
      
      <nav>
        <ul className="flex items-center gap-8">
          <li>
            <a href="#video" className="text-green700 hover:text-green900 font-medium transition-colors">
              Vídeo
            </a>
          </li>
          <li>
            <a href="#sobre" className="text-green700 hover:text-green900 font-medium transition-colors">
              Sobre Nós
            </a>
          </li>
          <li>
            <a href="#design-sprint" className="text-green700 hover:text-green900 font-medium transition-colors">
              Design Sprint
            </a>
          </li>
          <li>
            <a href="#equipe" className="text-green700 hover:text-green900 font-medium transition-colors">
              Nossa Equipe
            </a>
          </li>
          <li>
            <a href="#prototipos" className="text-green700 hover:text-green900 font-medium transition-colors">
              Protótipos
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}