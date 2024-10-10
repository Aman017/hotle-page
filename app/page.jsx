import Header from "@/components/Header";
import Image from "next/image";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Featured from "@/components/ui/Featured";
import Recommendation from "@/components/ui/Recommendation";
import Find from "@/components/ui/Find";
import Testimonials from "@/components/ui/Testimonials";

export default function Home() {
  return (
 <main className='max-w-[1440px] mx-auto bg-white overflow-hidden'>
<Header/>
<Hero/>
<Featured/>
<About/>
<Recommendation/>
<Find/>
<Testimonials/>
<Footer/>
{/* <div className='h-[4000px]'></div> */}
 </main>
  );
}
