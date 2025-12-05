import Image from 'next/image';
import pc from '@/assets/imgs/pc-adapt.png';

export default function SobreNos() {
  return (
    <section
      id="sobre"
      className="min-h-screen bg-[#E3EDD5] flex flex-col items-center justify-center px-6 md:px-12 py-20"
    >
      <h2 className="text-4xl md:text-5xl font-bold italic text-black mb-12 md:mb-24 text-center">
        Sobre nós
      </h2>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        <div className="text-black text-lg md:text-xl leading-relaxed text-center font-medium">
          <p>
            O projeto AdaptWrite consiste em um módulo complementar de correção
            de redações integrado ao sistema AdaptLearn, uma plataforma de apoio
            personalizada, para ensino de matemática e língua
            portuguesa/leitura. O objetivo do AdaptWrite é otimizar o processo
            de produção e correção textual, fornecendo interfaces específicas
            para professores e alunos.
          </p>
        </div>

        <div className="flex justify-center md:justify-start">
          <Image
            src={pc}
            alt="Laptop exibindo AdaptWrite"
            width={600}
            height={400}
            className="w-full max-w-xl object-contain drop-shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
