import Image from 'next/image';
import SearchBox from './ui/SearchBox';

const YourComponent = () => {
  return (
    <section className='pt-24 pb-12 xl:py-0 bg-[#2A6599] xl:h-[1000px] flex justify-center items-center'>
      <div className="container mx-auto flex items-center justify-between">
        {/* Image Wrapper */}
        <div className='relative flex-shrink-0'>
          <Image 
            src='./hero/hero.jpg' // Ensure this path is correct
            width={800} // Default width
            height={800} // Set height equal to width
            alt='Profile Image' 
            className='rounded-full object-cover w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96' 
          />
        </div>
        {/* Search Box */}
        <div className="flex-grow flex justify-end">
          <SearchBox />
        </div>
      </div>
    </section>
  );
};

export default YourComponent;
