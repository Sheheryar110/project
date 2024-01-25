import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo-the gem.png";
<link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>

export default function Home() {
  return (
    <>
      <div className="flex justify-between mt-5 px-10 ">
        <Link href="/">
          <Image className=" border ml-5" src={logo} width={200} height={100} />
        </Link>

        <div className=" mt-4 flex gap-10  font-bold ">
          <Link
            href="features"
            className=" text-sm text-gray-600 hover:text-sky-400 transition delay-100  ">
            <abbr title="DEMOS" className="no-underline">
              DEMOS
            </abbr>
          </Link>

          <Link href="about" className="text-sm text-gray-600 hover:text-sky-400 transition delay-100 ">
            <abbr title="FEATURES" className="no-underline">
              FEATURES
            </abbr>
          </Link>

          <Link href="/" className="text-sm text-gray-600 hover:text-sky-400 transition delay-100">
            <abbr title="ELEMENTS" className="no-underline">
              ELEMENTS
            </abbr>
          </Link>

          <Link href="/" className="text-sm text-gray-600 hover:text-sky-400 transition delay-100 ">
            <abbr title="PAGES" className="no-underline">
              PAGES
            </abbr>
          </Link>

          <Link href="/" className="text-sm text-gray-600 hover:text-sky-400 transition delay-100 ">
            <abbr title="SHOP" className="no-underline">
              SHOP
            </abbr>
          </Link>

          <Link href="/" className="text-sm text-gray-600 hover:text-sky-400 transition delay-100">
            <abbr title="BLOG" className="no-underline">
              BLOG
            </abbr>
          </Link>

          <Link href="/" className="text-sm text-gray-600 hover:text-sky-400 transition delay-100 ">
            <abbr title="PORTFOLIO" className="no-underline">
              PORTFOLIO
            </abbr>
          </Link>
        </div>
      </div>


      <div className="border mt-36 flex justify-center ">
        <Link href="/" className="">
          <img className="border h-80 " src="/Title-Desktop.svg"  />
        </Link>
      </div>




      <div className="text-center mt-32 ">
        <h1 className="text-4xl uppercase text-slate-800 font-sans font-light tracking-widest ">Design faster. Convert    better.
        </h1>
             <p className="  mt-7 text-2xl  text-slate-700 font-sans font-light" >Аn ultimate tool for building webpages  in a speed of light for Elementor and WPBakery.</p>  
       </div>

    <div className=" pt-32">
    <iframe className='max-w-full m-auto rounded-xl ' width="960" height="540" src="https://www.youtube.com/embed/-9wJVTNATJo?si=22TChuQy-qqxiObz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div className="pt-28  text-center">
<h1 className="  text-2xl  text-slate-700 font-sans font-light">
TheGem Blocks plugin includes a huge collection of creative pre-designed section templates – blocks – <br></br>enabling new innovative way to build unique looking pages fast & effectively. All blocks are designed to <br></br>bring the maximal visual values, optimal loading speed and faster conversion of your website visitors.<br></br> All blocks are available for Elementor and WPBakery. Get amazing results in minutes.
</h1>

<button className="mt-24 bg-zinc-900 text-white rounded-full  px-16 py-3 font-semibold text-base
 hover:bg-blue-800 transition duration-200">
WATCH VIDEO
</button>

<button className="mt-6 mb-12 ml-10 bg-yellow-400 text-black rounded-full px-9 py-3 font-semibold text-base
 hover:bg-blue-800 hover:text-white  transition duration-200">
PURCHASE THEGEM 
</button>
  </div>

<div className="pt-32 -z-30 ">
 <div class=" w-auto h-auto  bg-auto bg-center bg-[url('/back2.jpg')]">
   <p className="text-center  pt-96   text-2xl font-bold text-yellow-300">BUNCH OF
    </p>
      
      <h1 className="text-center text-5xl pt-5 text-white font-bold ">
       PRE-DESIGNED
      </h1>

    <h1 className="text-center text-white text-8xl pt-5 font-bold pb-8">SECTIONS</h1>
     <p className="text-white text-2xl leading-10 font-sans font-light  text-center pb-9 ">TheGem Blocks is a free plugin, bundled with TheGem, which <br></br>includes a huge collection of pre-designed section templates <br></br>like hero, about, contact, WooCommerce, FAQ, services and <br></br>many more others for Elementor and WPBakery.</p>
      <div className="pb-72 text-center">
       <button className="py-6 px-10 bg-teal-400 text-stone-800 rounded-full font-bold text-2xl hover:bg-white transition duration-200">
PREVIEW BLOCKS
</button>
  </div>
   </div>
    </div>

<div className="-mb-40 origin-left -rotate-6 -mr-10 -ml-10 h-40 bg-yellow-300">
  </div>

  <div class="">
<div class=" overflow ">
 <div class=" relative w-auto h-auto bg-cover bg-auto bg-center bg-[url('/s3.jpg')]">
  <p className="container mx-auto pt-56 pl-24  px-96 text-8xl font-bold tracking-widest text-white ">MIX &</p>
   <p className="container mx-auto pl-36 pt-4 text-9xl font-bold tracking-wider text-white">MATCH</p>  
    <p className=" container mx-auto pt-10 pl-24 text-6xl font-bold tracking-wide text-teal-300">ON THE FLY</p>
     <p className="container mx-auto pb-96 pt-20 pl-36 leading-9 text-2xl  text-white font-sans font-light">Blocks can be combined in one <br></br>page to create unique look with <br></br> meaningful content.</p>
  </div>
 </div>
</div>
<div className="bg-slate-100 -z-20 relative container max-w-full ">
<div className=" container mx-auto flex justify-center pt-32 pr-28" >
  <div className="">
    <h1 className="work absolute text-9xl text-slate-900 font-semibold ">4</h1>
     <h1 className="pl-32 pt-10  text-8xl text-slate-900 font-semibold">STEPS</h1>
      <h1 className="pl-40  text-7xl text-slate-900 font-bold">WORKFLOW</h1>
</div>

<div className=" max-w-lg text-2xl  text-gray-500 font-sans font-light pl-20 pt-7 ml-10">
 <h1>Want to quickly make some cool page about your company? Just open TheGem Blocks, browse through “About”, “Services” and “Contact” blocks, select those you like most, insert it with one click, customize the look and replace dummy with your own content and that’s it! Moreover, you can re-use this customized blocks by adding them to your own template library.</h1>
 </div>
</div>

<div className="container mx-auto relative flex">
 <div className="yellow-square">
  <h1 className=" text-4xl text-slate-900 leading-loose pl-28 font-bold tracking-wider absolute z-30">
    INSERT
  </h1>
  <Image className=" ml-32 "
      src="/7.webp"
      alt="Picture of the author"
      width={500}
      height={500}
/>
</div>

<div className="yellow-square2 mt-52">
 <h1 className=" text-4xl text-slate-900 leading-loose pl-14  font-bold  tracking-wider">COMBINE</h1>
  <Image className="ml-20"
      src="/8.webp"
      alt="Picture of the author"
      width={500}
      height={500}
/>
 </div>
</div>

<div className="container mx-auto relative flex -translate-y-32">
 <div className="yellow-square3">
  <h1 className=" text-4xl text-slate-900 leading-loose ml-28 font-bold  tracking-wider">
    EDIT
  </h1>
  <Image className=" ml-32"
      src="/9.webp"
      alt="Picture of the author"
      width={500}
      height={500}
/>
</div>

<div className="yellow-square4 mt-52">
 <h1 className=" text-4xl text-slate-900 leading-loose ml-14  font-bold  tracking-wider">RE-USE</h1>
  <Image className="ml-20"
      src="/10-1.webp"
      alt="Picture of the author"
      width={500}
      height={500}
/>
     </div>
   </div>
 </div>

<div className="flex container mx-auto mt-40">
 <div className="why  " >
  <h1 className="pt-40 pl-8  text-9xl  font-bold tracking-wider">
        WHY 
<p className=" pt-14 text-5xl font-bold tracking-wider inline-block -translate-x-14">THEGEM</p>
 <p className=" text-8xl pl-40 tracking-wider">BLOCKS?</p>
  </h1>
   </div>

<div className="w1 font-bold pl-48 w-auto tracking-wider mr-16">
 <p className="mt-28 ">SPEED UP AND SIMPLIFY </p><p>YOUR WORK PROCESS</p>
 <p className="mt-16">CREATE UNIQUE LAYOUTS </p><p>TO STAND OUT</p>
 <p className="mt-16">QUICKLY MAKE EFFICIENT </p> <p> A/B TESTS</p>
 <p className="mt-16">BUILD PAGES, WHICH </p><p> CONVERT BETTER</p>

 </div>
</div>

<div className="w2 -z-20 relative ">
  <div className="text-center text-yellow-400 text-5xl tracking-wider pt-40 font-bold -mb-10"> WHAT IS INCLUDED?</div>
  <p className=" text-center pl-96 translate-y-20 tracking-widest text-white font-semibold">AND GROWING</p>
  <h1 className=" text-white text-center font-extrabold -mb-8">500+</h1>
<h2 className="text-center text-white text-6xl font-semibold">PRE-MADE BLOCKS</h2>



<div className=" mt-40 text-xl font-light justify-center text-gray-200 text-center flex">
  
  <div className=" px-14">
<p class="uppercase" >eye-catching</p>
 <p class="uppercase">free media</p>
  <p class="uppercase">content</p>
  </div>

  <div className=" px-14">
<p class="" >FAST AND EASY</p>
 <p class="">EDITING TO MEET</p>
  <p class="">YOUR CI</p>
  </div>

  <div className=" px-14">
<p class="" >SAVE AND RE-USE</p>
 <p class="">YOUR CUSTOMIZED</p>
  <p class="">BLOCKS</p>
  </div>
  
  <div className=" px-14">
<p class="" >REGULAR</p>
 <p class="">UPDATES AND</p>
  <p class="">NEW BLOCKS</p>
  </div>

</div>
<div className="text-center mt-20">
<button className="py-6 px-10 bg-teal-400 text-stone-800 rounded-full font-bold text-2xl hover:bg-white transition duration-200">
PREVIEW BLOCKS
</button>
</div>

</div>

<div className="bl -mt-20  -mb-40 -rotate-6 -mr-10 -ml-10 h-72 ">
</div>

<div className="bl1  max-w-full container   mt-20 ">
  <h1 className=" text-white text-8xl font-bold  tracking-widest text-center  ">MULTIPLE</h1>
  <div className="flex mt-10 justify-center ">
  <h1 className="text-6xl text-teal-300 font-bold tracking-wide px-7 py-2 -mr-3 border-8 border-white rounded-xl">COLOR</h1>
  <h2 className="wh  text-6xl font-semibold tracking-wide px-5 pt-3.5 -ml-2 bg-white rounded-xl">MODES</h2>

</div>
<div className="w-full  justify-center flex ">
<p className=" text-center text-2xl mt-16 font-sans font-light leading-9 text-white">All blocks are available both in multicolor & dark color modes to maximize the trendy look <br></br>of your website, create dark mode page versions and provide more A/B test options.</p>
</div>
<div className="wh1 justify-center flex pb-20 mb-20">
<Image className="pt-10  "
      src="/dark-mode.png"
      alt="Picture of the author"
      width={1150}
      height={500}
/>
</div>
  </div>

<div className="flex justify-between mt-60 container mx-auto pb-14">
  <div className="blue-square relative">
    <h1 className="text-3xl font-bold  pl-20">FOR</h1>
    <h1 className="text-5xl font-bold tracking-wider pl-20 mt-5">BEGINNERS</h1>
  </div>

  <div className="blue-square1 relative pr-28">
    <h1 className="text-3xl font-bold  pl-28">FOR</h1>
    <h1 className="text-5xl font-bold tracking-wider pl-28 pb-10 mt-5">PROFESSIONALS</h1>
  </div>
</div>
  
<div className="flex justify-between container mx-auto">
  <div className=" ml-10">
    <p className="text-xl text-zinc-600 font-light pb-1 leading-9">Perfect starting point to implement your own layout ideas</p>
    <p className="text-xl text-zinc-600 font-light pb-1 leading-9">Absolute simplicity in using and customizing</p>
    <p className="text-xl text-zinc-600 font-light leading-9">“Insert & replace text” approach for fastest results</p>
  </div>

  <div className=" mr-10">
    <p className="text-xl text-zinc-600 font-light pb-1 leading-9">Perfect starting point to implement your own layout ideas</p>
    <p className="text-xl text-zinc-600 font-light pb-1 leading-9">Absolute simplicity in using and customizing</p>
    <p className="text-xl text-zinc-600 font-light leading-9">“Insert & replace text” approach for fastest results</p>
  </div>
</div>

<div className="bg-[url('/14.jpg')] w-auto h-auto bg-cover bg-auto bg-center ">
<p className="last2 pt-80 text-center border ">
 
  <span className="text-3xl font-bold mr-1 " style={{color: '#ffffff'}}>ENJOY </span>
  <span className="text-xl font-bold " style={{color: '#ffffff'}}>THE </span> 
  <span className="text-6xl font-bold " style={{color: '#01ffed'}}>CONVENIENCE </span> 
  <span>OF </span> 
  <span>PRE-MADE </span> 
  </p>


 <p className="text-center">
   <span>DESIGNS </span> 
   <span>WITH </span> 
   <span>FLEXIBILITY </span> 
   <span>OF </span> 
   <span>SECTIONS </span>
  </p>

<p className="text-center  pb-96">
   <span>COMBINATION </span>
   <span> WITHIN</span> 
   <span>ONE </span>
   <span>PAGE!</span>
</p>
</div>
</>

    
  );
}
