import logo from './logo.svg';
import './App.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import {ScrollTrigger} from "gsap/all";
import { useEffect, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

gsap.registerPlugin(ScrollTrigger)

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const [rotate, setRotate] = useState(0)
  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;

      var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
      setRotate(angle);
    })
  })
  useGSAP(()=>{

    var tl = gsap.timeline()

    gsap.from(".hero-line-1",{
      y:200,
      duration:1
    })
    gsap.to(".videoo",{
      width:"140%",
      height:"110%",
      left:"51%",
      duration:5,
      scrollTrigger:{
        trigger:".page1",
        scrub:true,
        start:"top 0%",
        end:"top -190%",
        pin:true
      }
    })
    gsap.to(".marquee",{
      y:-50,
      scrollTrigger:{
        trigger:".marquee",
        scrub:true,
        start:"top 50%",
      }
    })
    gsap.to(".slide",{
      x:"-100%",
      repeat:-1,
      duration:10,
      ease:"linear",
  
    })
    gsap.to(".marquee2",{
      // y:-50,
      scrollTrigger:{
        trigger:".marquee",
        scrub:true,
        start:"top 50%",
      }
    })
    gsap.to(".slide2",{
      x:"-100%",
      repeat:-1,
      duration:10,
      ease:"linear",
  
    })
    
    
    
    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:".page2",
        scrub:true,
        pin:true,
        start:"top 0%",
        // markers:true,
        // end:"top -200%",
        end: "+=3000",
      }
    })

    tl.from(".upperimg",{
      y:2000,
      stagger:2,
      // ease:"none"
      // duration:10,
    })

    

    tl.from(".showimg1",{
      y:"50%",
      x:"210%",
    },"a")
    tl.from(".showimg2",{
      y:"-48%",
      x:"210%",
      // opacity:0
    },"a")
    tl.from(".showimg3",{
      y:"-160%",
      x:"210%",
    },"a")
    tl.from(".showimg4",{
      y:"39%",
      x:"110%",
    },"a")
    tl.from(".showimg5",{
     y:"-70%",
      x:"110%",
    },"a")
    tl.from(".showimg6",{
      y:"-159%",
      x:"110%",
    },"a")
    tl.from(".showimg7",{
      y:"52%",
      // x:"20vw",---
    },"a")
    tl.from(".showimg8",{
      y:"-35%",
      // x:"20vw",---
    },"a")
    tl.from(".showimg9",{
      y:"-160%"
      // x:"20vw",---
      
    },"a")
    tl.from(".showimg10",{
      y:"35%",
      x:"-100%",

    },"a")
    tl.from(".showimg11",{
      y:"-60%",
      x:"-100%",
    },"a")
    tl.from(".showimg12",{
      y:"-180%",
      x:"-100%",
    },"a")
    tl.from(".showimg13",{
      y:"45%",
      x:"-220%",
    },"a")
    tl.from(".showimg14",{
      y:"-50%",
      x:"-220%",
    },"a")
    tl.from(".showimg15",{
      y:"-160%",
      x:"-220%",
      scale:1.02
    },"a")
    // tl.to(".page2-text",{
    //   opacity:0
    // },"a")
    tl.to(".opacityy0",{
      opacity:0
    },"a")
    // tl.to(".showimg",{
    //   opacity:0.5,
    // },"a")

    gsap.from(".f-text",{
      y:200,
      opacity:0,
      stagger:0.5,
      scrollTrigger:{
        trigger:".footer",
        scrub:true,
        // markers:true,
        end:"top 10%",
        start:"top 35%",
      }
    })
    gsap.from(".page2-text",{
      y:"100%",
      opacity:0,
      duration:1,
      // stagger:0.5,
      scrollTrigger:{
        trigger:".page2",
        scrub:true,
        // markers:true,
        start:"top 50%",
        end:"top 20%",
      }
    })
    gsap.from(".logo-box",{
      scale:30,
      y:"50vh",
      duration:1,
      
    })
  })
  return (
    <>
    <div className="main -relative overflow-x-hidden bg-[#000] max-w-[1700px] w-[100%] m-auto">
   <div className="page1 h-[100vh] w-[100%] relative flex -overflow-x-hidden justify-center items-center">
      <video className=' -object-cover videoo hero-video absolute h-[10%] z-[999] w-[13%]  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] -h-[100%] -ml-[8px]  inline-block object-cover  w-[100%]' src="https://www.mccann.fr/wp-content/uploads/2024/01/Chivas_15s_3D_16x9_231002-1.mp4#t=0.1" loop muted autoPlay ></video>
    <nav className='flex justify-between absolute w-[100%] top-[0px] left-[0px] items-center h-[100px] px-[30px]'>
      <div className="left text-[white] flex gap-[30px] text-[10px] font-[800]">
        <p className='nav-none'>AGENCY</p>
        <p className='nav-none'>CREATIONS</p>
      </div>
      <div className="center z-[999] logo-box text-[white] -bg-[#000] text-center flex flex-col items-center gap-[5px]">
        <img className='h-[20px]' src="/assets/logo.svg" alt="" />
        <p className='text-[10px] font-[600]'>PARIS</p>
      </div>
      <div className="right text-[white] flex gap-[30px] text-[10px] font-[800]">
        <p className='nav-none'>TEAM</p>
        <p className='nav-none'>CONTACT</p>
        <span className='flex gap-[5px] text-[10px] font-[800]'>
          <p className=' nav-nonetext-[#ababa4]'>FR</p>
          <p className='nav-none'>EN</p>
        </span>
      </div>
    </nav>
    <div className="hero -bg-[blue]">
    <span>
    <span className=' hero-text  hero-text-leading leading-[80px] ml-[100px] ml-[300px] mt-[120px]'>
    <div className='overflow-hidden'>
      <h1 className=' text-nowrap hero-text hero-line-1 text-[80px] font-[900] text-[white]'>Say hello</h1>
      </div>
      <div className='-overflow-hidden'>
      <p className=' hero-translate-text hero-line-1 w-[100%] -flex justify-center text-[120px] font-[900] text-[white] translate-x-[-80px] flex'>
      <p className='text-nowrap hero-text  text-[80px]'>to ideas</p>
      <div className=' hero-texy-gap-div -h-[90px] w-[240px] '>
      </div>
      <p className='text-nowrap hero-text that ml-[15px] text-[80px]'>that</p>
      </p>
      </div>
      <div className='overflow-hidden'>
      <h1 className='text-nowrap hero-text hero-line-1  text-[120px] font-[900] text-[white] text-[80px]'>actually work</h1>
      </div>
      <div className='overflow-hidden'>
      <h1 className='text-nowrap hero-text hero-line-1  text-[120px] font-[900] text-[white] text-[80px]'>in people's lives.</h1>
      </div>
      </span>
      </span>
    </div>
    <div className=" absolute bottom-[0px] left-[0px] page-1-bottom px-[30px] h-[80px] w-[100%] -bg-[red] flex justify-between items-center text-[10px] font-[800] text-[white]">
    <p>N 48° 53' 34.915"</p>
    <p>2:34 PM</p>
    <p>E 02° 15' 52.038"</p>
    </div>
      <div className="marquee z-[9999] translate-y-[200px] text-nowrap  flex gap-[10px] absolute bottom-[0px] w-[100%] overflow-x-hidden">
      <div className=' slide flex'>
        <p className='text-[50px] font-[700] text-[white]'>LATEST WORK</p>
        <p className='text-[50px] font-[700] text-[white]'>LATEST WORK</p>
        <p className='text-[50px] font-[700] text-[white]'>LATEST WORK</p>
        <p className='text-[50px] font-[700] text-[white]'>LATEST WORK</p>
        </div>
      <div className=' slide flex'>
        <p className='text-[50px] font-[700] text-[white]'>LATEST WORK</p>
        <p className='text-[50px] font-[700] text-[white]'>LATEST WORK</p>
        <p className='text-[50px] font-[700] text-[white]'>LATEST WORK</p>
        <p className='text-[50px] font-[700] text-[white]'>LATEST WORK</p>
        </div>
      <div className=' slide flex'>
        <p className='text-[50px] font-[700] text-[white]'>LATEST WORK</p>
        <p className='text-[50px] font-[700] text-[white]'>LATEST WORK</p>
        <p className='text-[50px] font-[700] text-[white]'>LATEST WORK</p>
        <p className='text-[50px] font-[700] text-[white]'>LATEST WORK</p>
        </div> 
      </div>
    </div>
    <div className="page2 min-h-[100vh] relative w-[100%] bg-[#000] overflow-hidden -mt-[300px]">
    <div className='h-[100%] w-[100%] opacityy0 z-[2] bg-[#000] absolute top-[52.5%] z-[] left-[50.025%] translate-x-[-50%] translate-y-[-50%]'></div>
      <div className='  leading-[120px]  '>
      <div className='-bg-[red]  overflow-y-hidden h-[110px] z-[10] absolute top-[38%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h1 className=' page2-text opacityy0 text-nowrap	 text-[80px] text- -pt-[40px] font-[900] text-[white]'>How do you</h1>
        </div>
        <div className='-bg-[red] overflow-y-hidden h-[110px] z-[10] absolute top-[48%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h1 className=' page2-text opacityy0 text-nowrap	text-[80px] font-[900] text-[white]'>say "kiffer"</h1>
        </div>
        <div className='-bg-[red] overflow-y-hidden h-[110px] z-[20] absolute top-[58%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <h1 className=' page2-text opacityy0 text-nowrap text-[80px] font-[900] text-[white]'>in english</h1>
        </div>
      </div>
      <div className=' upperimg-container-cont absolute z-[10] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] mt-[30px]'>
      <div className='upperimg-container h-[410px] w-[324px] relative'>
        <img className=' upperimg opacityy0 absolute h-[100%] w-[100%] object-cover' src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className=' upperimg opacityy0 absolute h-[100%] w-[100%] object-cover' src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className=' upperimg opacityy0 absolute h-[100%] w-[100%] object-cover' src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      </div>
      <div className=' overflow-hidden flex justify-center'>
      <span className='flex gap-[20px]'>
        <div className="line1 min-w-[400px] h-[100vh] -bg-[yellow] flex flex-col gap-[20px] -overflow-hidden">
        <img className='showimg1 showimg h-[300px] object-cover' src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className='showimg2 showimg h-[400px] object-cover' src="https://plus.unsplash.com/premium_photo-1664882424805-26653ff6f005?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className='showimg3 showimg h-[400px] object-cover' src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="line1 min-w-[400px] h-[100vh] -bg-[yellow] flex flex-col gap-[20px] -overflow-hidden">
        <img className='showimg4 showimg h-[400px] object-cover' src="https://images.unsplash.com/photo-1587397845856-e6cf49176c70?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className='showimg5 showimg h-[400px] object-cover' src="https://images.unsplash.com/photo-1597071058713-6776461d7737?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className='showimg6 showimg h-[400px] object-cover' src="https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="line1 min-w-[400px] h-[100vh] -bg-[yellow] flex flex-col gap-[20px] -overflow-hidden">
        <img className='showimg7 showimg h-[250px] object-cover' src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className='showimg8 showimg h-[400px] object-cover' src="https://plus.unsplash.com/premium_photo-1664451177406-515a23272080?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className='showimg9 showimg h-[400px] object-cover' src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="line1 min-w-[400px] h-[100vh] -bg-[yellow] flex flex-col gap-[20px] -overflow-hidden">
        <img className='showimg10 showimg h-[400px] object-cover' src="https://plus.unsplash.com/premium_photo-1673734625879-2dd5410bc3e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className='showimg11 showimg h-[400px] object-cover' src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className='showimg12 showimg h-[400px] object-cover' src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="line1 min-w-[400px] h-[100vh] -bg-[yellow] flex flex-col gap-[20px] -overflow-hidden">
        <img className='showimg13 showimg h-[300px] object-cover' src="https://images.unsplash.com/photo-1543357530-d91dab30fa97?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className='showimg14 showimg h-[400px] object-cover' src="https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className='showimg15 showimg h-[410px] object-cover' src="https://images.unsplash.com/photo-1597071058713-6776461d7737?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        </span>
      </div>
    </div>
    <div className="page3 -h-[100vh] w-[100%] py-[100px] -bg-[blue]">
    <div className="marquee2 items-center -z-[9999] -bg-[red] -translate-y-[0px] text-nowrap  flex gap-[10px] w-[100%] overflow-x-hidden">
      <div className=' slide2 flex items-center gap-[15px]'>
        <p className='text-[120px] text-strok font-[700] -text-[white]'>LET BRANDS SHINE</p>
        <p className='text-[120px] text-strok font-[700] -text-[white]'>ø</p>
        <p className='text-[120px] text-strok font-[700] -text-[white]'>LET BRANDS SHINE</p>
        <p className='text-[120px] text-strok font-[700] -text-[white]'>ø</p>
        </div>
      <div className=' slide2 flex items-center gap-[15px]'>
      <p className='  text-[120px] text-strok font-[700] -text-[white]'>LET BRANDS SHINE</p>
        <p className='text-[120px] text-strok font-[700] -text-[white]'>ø</p>
        <p className='text-[120px] text-strok font-[700] -text-[white]'>LET BRANDS SHINE</p>
        <p className='text-[120px] text-strok font-[700] -text-[white]'>ø</p>
        </div>
      <div className=' slide2 flex items-center gap-[15px]'>
      <p className='  text-[120px] text-strok font-[700] -text-[white]'>LET BRANDS SHINE</p>
        <p className='text-[120px] text-strok font-[700] -text-[white]'>ø</p>
        <p className='text-[120px] text-strok font-[700] -text-[white]'>LET BRANDS SHINE</p>
        <p className='text-[120px] text-strok font-[700] -text-[white]'>ø</p>
        </div> 
      </div>
    
    </div>
    <div className="animation-container overflow-hidden flex justify-center mb-[0px] h-[400px] p-[30px] w-[100%]  bg-[white]">
    <span className='flex flex-col gap-[25px]'>
    <span className='flex gap-[20px]'>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      </span>
    <span className='flex gap-[20px]'>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      </span>
    <span className='flex gap-[20px]'>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      </span>
    <span className='flex gap-[20px]'>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      </span>
    <span className='flex gap-[20px]'>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      </span>
    <span className='flex gap-[20px]'>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      </span>
    <span className='flex gap-[20px]'>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      </span>
    <span className='flex gap-[20px]'>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      </span>
    <span className='flex gap-[20px]'>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      </span>
    <span className='flex gap-[20px]'>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      </span>
    <span className='flex gap-[20px]'>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      </span>
    <span className='flex gap-[20px]'>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      </span>
    <span className='flex gap-[20px]'>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      </span>
    <span className='flex gap-[20px]'>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform: `translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      </span>
    <span className='flex gap-[20px]'>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      <div style={{transform:` translate(-50%, -50%)rotate(${rotate}deg)`}} className=" origin-center h-[2px] w-[25px] relative bg-[black]"></div>
      </span>
      </span>
      </div>
    <div className="footer -pt-[200px] h-[90vh] bg-[white] flex items-end overflow-hidden">
    <div className='flex items-end'>
    <p className=' f-text text-[200px] font-[700] text-[black]'>M</p>
    <p className=' f-text text-[200px] font-[700] text-[black]'>c</p>
    <p className=' f-text text-[200px] font-[700] text-[black]'>C</p>
    <p className=' f-text text-[200px] font-[700] text-[black]'>a</p>
    <p className=' f-text text-[200px] font-[700] text-[black]'>n</p>
    <p className=' f-text text-[200px] font-[700] text-[black]'>n</p>
    <span className='mb-[80px]'>
      <p className='footer-none text-[18px] font-[700] text-[black]'>FACEBOOK</p>
      <p className='footer-none text-[18px] font-[700] text-[black]'>INSTAGRAM</p>
      <p className='footer-none text-[18px] font-[700] text-[black]'>X</p>
      <p className='footer-none text-[18px] font-[700] text-[black]'>YOUTUBE</p>
      <p className='footer-none text-[18px] font-[700] text-[black]'>LINKEDIN</p>
    </span>
    </div>
    </div>

    </div>
   </>
  );
}

export default App;
