import Image from 'next/image';
import felipe from '@/assets/imgs/felipe.png';
import isa from '@/assets/imgs/isa.png';
import beatriz from '@/assets/imgs/beatriz.png';
import ana from '@/assets/imgs/ana.png';
import paulo from '@/assets/imgs/paulo.png';


export default function Equipe() {
  return (
    <section
      id="equipe"
      className="min-h-screen bg-[#E3EDD5] flex flex-col items-center py-20 px-4"
    >
      <h2 className="text-black text-4xl md:text-5xl font-bold italic text-center mb-16">
        Nossa equipe
      </h2>

      <div className="max-w-6xl mx-auto w-full flex flex-col gap-12 items-center">
        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-transparent hover:border-[#74BA63] transition-all duration-300 shadow-lg">
              <Image
                src={ana}
                alt="Foto de Ana Luiza Macowski"
                fill
                className="object-cover"
              />
            </div>
            <a
              href="https://github.com/macowwwski"
              target="_blank"
              className="text-black font-bold text-lg md:text-xl hover:text-green700 hover:underline transition-colors text-center"
            >
              Ana Luiza Macowski
            </a>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-transparent hover:border-[#74BA63] transition-all duration-300 shadow-lg">
              <Image
                src={beatriz}
                alt="Foto de Beatriz Moggio"
                fill
                className="object-cover"
              />
            </div>
            <a
              href="https://github.com/beatrizmoggio"
              target="_blank"
              className="text-black font-bold text-lg md:text-xl hover:text-green700 hover:underline transition-colors text-center"
            >
              Beatriz Moggio
            </a>
          </div>


          <div className="flex flex-col items-center gap-4">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-transparent hover:border-[#74BA63] transition-all duration-300 shadow-lg">
              <Image
                src={felipe}
                alt="Foto de Felipe Evangelista"
                fill
                className="object-cover"
              />
            </div>
            <a
              href="https://github.com/felipeevgomes"
              target="_blank"
              className="text-black font-bold text-lg md:text-xl hover:text-green700 hover:underline transition-colors text-center"
            >
              Felipe Evangelista
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-12 md:gap-24">
          <div className="flex flex-col items-center gap-4">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-transparent hover:border-[#74BA63] transition-all duration-300 shadow-lg">
              <Image
                src={isa}
                alt="Foto de Isabela Barotto"
                fill
                className="object-cover"
              />
            </div>
            <a
              href="https://github.com/Isattj"
              target="_blank"
              className="text-black font-bold text-lg md:text-xl hover:text-green700 hover:underline transition-colors text-center"
            >
              Isabela Barotto
            </a>
          </div>


          <div className="flex flex-col items-center gap-4">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-transparent hover:border-[#74BA63] transition-all duration-300 shadow-lg">
              <Image
                src={paulo}
                alt="Foto de Paulo Salvadori"
                fill
                className="object-cover"
              />
            </div>
            <a
              href="https://github.com/PauloSalvadori"
              target="_blank"
              className="text-black font-bold text-lg md:text-xl hover:text-green700 hover:underline transition-colors text-center"
            >
              Paulo Salvadori
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
