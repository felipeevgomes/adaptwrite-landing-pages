import Header from "@/components/header/header";
import HomePage from "@/components/home/homePage";
import VideoConceitual from "@/components/sections/videoConceitual";


export default function Home() {
  return (
   <div className="scroll-smooth">
    <Header/>
    <HomePage/>
    <VideoConceitual/>
   </div>
  );
}