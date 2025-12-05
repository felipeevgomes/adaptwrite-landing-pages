import logo from '@/assets/imgs/logo.svg';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="font-segoe shadow-xl flex items-center justify-center w-full px-12 py-4 bg-green50">
      <div className="flex items-center gap-6">
        <Image src={logo} alt="AdaptWrite Logo" width={50} height={50} />
        <h1 className="text-3xl font-black text-green700">AdaptWrite</h1>
      </div>
    </footer>
  );
}
