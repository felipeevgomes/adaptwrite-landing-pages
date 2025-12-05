import Image from "next/image";
import pc from "@/assets/imgs/pc-adapt.png"


export default function SobreNos() {
  return (
    <section
      id="sobre"
      className="min-h-screen bg-[#E3EDD5] flex items-center flex-col px-12 py-20 "
    >
      <h2 className=" text-black text-5xl font-bold italic text-center mb-16 ">
        Sobre Nós
      </h2>
      <div className="relative max-w-5xl mx-auto">
        <div className="flex flex-row">
          <p>
            O projeto AdaptWrite consiste em um módulo complementar de correção
            de redações 
            integrado ao sistema AdaptLearn, uma plataforma de apoio
            personalizada, para ensino de matemática e língua
            portuguesa/leitura. O objetivo do AdaptWrite é otimizar o processo
            de produção e correção textual, fornecendo interfaces específicas
            para professores e alunos.
          </p>
         <Image src={pc } alt="PC Logo" width={417} height={262} />

        </div>  
      </div>
    </section>
  );
}
