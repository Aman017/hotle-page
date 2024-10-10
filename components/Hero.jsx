import Image from 'next/image';
import SearchBox from './SearchBox'; // Adjust path as necessary

export default function HeroSection() {
  return (
    <section className='relative pt-24 pb-12 xl:py-0 xl:h-auto flex justify-center items-center'>
      {/* Image as a background */}
      <Image 
        className='absolute inset-0 -z-20 object-cover'
        src='./hero/backgg.jpg' // Use correct path
        layout='fill' 
        alt='Hero background' 
      />
      
      <div className="container mx-auto flex items-center justify-center relative z-10">
        <SearchBox />
      </div>
    </section>
  );
}
