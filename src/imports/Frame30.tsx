import svgPaths from "./svg-7t4u52nuy4";
import imgLogoKabupatenBojonegoro1 from "figma:asset/8374f5cd12808cfb57757bbaacb19eb5b3e28a74.png";
import imgArtikel20220824110547Am1 from "figma:asset/5df6b576a4214e64967092c1b7ca04a8ba312f05.png";
import imgFoto20240522091537Am1 from "figma:asset/9d05292d93e04445d4521165529f3c372eb7ce6e.png";
import imgMotoPelayanan2 from "figma:asset/a0b9885c9a24ac4a43cc63f6e12ff8f6647528fe.png";
import imgScreenshot20251127At1812441 from "figma:asset/98fc6249fb506287f40ba50248824c3fb097035f.png";
import imgScreenshot20251127At1836021 from "figma:asset/4d5862594e49f5559e15e1b89d22e5dbefdfb83a.png";
import imgScreenshot20251127At1839571 from "figma:asset/d14de570bf8db4c5baaaa80f01573564e755d12f.png";
import imgFoto20150325153048Pm1 from "figma:asset/7ea007a60fef4c40e79a779c9ac91b65401ca7dc.png";
import imgArtikel20250527145238Pm1 from "figma:asset/3c4a2f3fa290e0e44147bdafc2f65a09a9340ce8.png";
import imgArtikel20251030124101Pm1 from "figma:asset/1ad59c5bc69183b0aff812e19fe0f5f0b2d234d6.png";
import imgFoto20240806112208Am1 from "figma:asset/83ce03259eb28add595729704ec261abee3d5f7b.png";
import imgScreenshot20251127At1855501 from "figma:asset/764867921b1e80fb6d39b71acc17baf8103609ac.png";
import imgScreenshot20251127At1854581 from "figma:asset/d0763163a2c65b16e6e8e2462fa2bb1da3b1afb3.png";
import { useState } from "react";
import { X } from "lucide-react";

// Image Modal Component
function ImageModal({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <div 
      className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4" 
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-[101]"
        aria-label="Close modal"
      >
        <X size={32} />
      </button>
      <img 
        src={src} 
        alt={alt} 
        className="max-w-full max-h-full object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start leading-[32px] relative shrink-0 text-[24px] text-black w-[545px]">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal relative shrink-0 w-full">Pemerintah Kabupaten Bojonegoro</p>
      <p className="font-['Montserrat:Bold',sans-serif] font-bold relative shrink-0 w-full">Dinas Pendidikan Kabupaten Bojonegoro</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0">
      <div className="h-[82px] relative shrink-0 w-[55px]" data-name="Logo_Kabupaten_Bojonegoro 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoKabupatenBojonegoro1} />
      </div>
      <Frame4 />
    </div>
  );
}

function Frame5() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="content-stretch flex font-['Montserrat:Regular',sans-serif] font-normal gap-[54px] items-center leading-[30px] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre">
      <p className="relative shrink-0 cursor-pointer transition-colors hover:text-[#336fab]" onClick={() => scrollToSection('home')}>Home</p>
      <p className="relative shrink-0 cursor-pointer transition-colors hover:text-[#336fab]" onClick={() => scrollToSection('tentang')}>Tentang</p>
      <p className="relative shrink-0 cursor-pointer transition-colors hover:text-[#336fab]" onClick={() => scrollToSection('layanan')}>Layanan</p>
      <p className="relative shrink-0 cursor-pointer transition-colors hover:text-[#336fab]" onClick={() => scrollToSection('berita')}>Berita</p>
      <p className="relative shrink-0 cursor-pointer transition-colors hover:text-[#336fab]" onClick={() => scrollToSection('galeri')}>Galeri</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[210px] items-center sticky top-0 bg-white z-50 py-4 px-8 shadow-md">
      <Frame6 />
      <Frame5 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="bg-[#336fab] box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[20px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#3f88d3] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">Portal Resmi Dinas Pendidikan Bojonegoro</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[90px] relative shrink-0 text-[72px] text-center text-nowrap text-white tracking-[-1.44px] whitespace-pre">
            {`Dinas Pendidikan `}
            <br aria-hidden="true" />
            Kabupaten Bojonegoro
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[24px] text-center text-white w-[747px]">Mewujudkan pendidikan berkualitas dan merata untuk mencerdaskan kehidupan bangsa</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-center relative shrink-0 w-full">
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full">
      <Frame8 />
      <Frame25 />
    </div>
  );
}

function StashArrowUpLight() {
  return (
    <div className="relative size-[24px]" data-name="stash:arrow-up-light">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="stash:arrow-up-light">
          <path d={svgPaths.p72e7700} fill="var(--fill-0, #336FAB)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame9() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div onClick={() => scrollToSection('layanan')} className="bg-white box-border content-stretch flex items-center pl-[20px] pr-[44px] py-[20px] relative rounded-[10px] shrink-0 cursor-pointer transition-transform hover:scale-105">
      <div aria-hidden="true" className="absolute border border-[#2c5e8f] border-solid inset-[-1px] pointer-events-none rounded-[11px] shadow-[0px_175px_49px_0px_rgba(0,0,0,0),0px_112px_45px_0px_rgba(0,0,0,0.01),0px_63px_38px_0px_rgba(0,0,0,0.05),0px_28px_28px_0px_rgba(0,0,0,0.09),0px_7px_15px_0px_rgba(0,0,0,0.1)]" />
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[30px] mr-[-24px] relative shrink-0 text-[#336fab] text-[20px] w-[210px]">Layanan Publik</p>
      <div className="flex items-center justify-center mr-[-24px] relative shrink-0 size-[24px]" style={{ "--transform-inner-width": "24", "--transform-inner-height": "24" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <StashArrowUpLight />
        </div>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Informasi</p>
    </div>
  );
}

function IonNewspaper() {
  return (
    <div className="relative shrink-0 w-full" data-name="ion:newspaper">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center p-px relative w-full">
          <div className="h-[20.125px] relative shrink-0 w-[17.969px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21">
              <path d={svgPaths.p14cefc00} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
          <div className="h-[15.094px] relative shrink-0 w-[2.875px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 16">
              <path d={svgPaths.pf4a7300} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative shrink-0 w-[42.844px]">
      <IonNewspaper />
    </div>
  );
}

function Frame12() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div onClick={() => scrollToSection('berita')} className="bg-[#3f88d3] box-border content-stretch flex gap-[17px] items-center p-[10px] relative rounded-[10px] shrink-0 cursor-pointer transition-transform hover:scale-105">
      <div aria-hidden="true" className="absolute border border-[#336fab] border-solid inset-[-1px] pointer-events-none rounded-[11px] shadow-[0px_130px_36px_0px_rgba(0,0,0,0),0px_83px_33px_0px_rgba(0,0,0,0.01),0px_47px_28px_0px_rgba(0,0,0,0.05),0px_21px_21px_0px_rgba(0,0,0,0.09),0px_5px_11px_0px_rgba(0,0,0,0.1)]" />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex gap-[78px] items-center relative shrink-0">
      <Frame9 />
      <Frame12 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[43px] items-center relative shrink-0 w-[813px]">
      <Frame26 />
      <Frame27 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative shrink-0 w-[740px]">
      <div className="aspect-[714/326] pointer-events-none relative rounded-[20px] shrink-0 w-full" data-name="ARTIKEL20220824110547am 1">
        <div className="absolute inset-0 overflow-hidden rounded-[20px]">
          <img alt="" className="absolute h-[219.16%] left-0 max-w-none top-[-81.99%] w-full" src={imgArtikel20220824110547Am1} />
        </div>
        <div aria-hidden="true" className="absolute border border-[#68aff6] border-solid inset-[-1px] rounded-[21px] shadow-[0px_491px_137px_0px_rgba(0,0,0,0),0px_314px_126px_0px_rgba(0,0,0,0.01),0px_177px_106px_0px_rgba(0,0,0,0.05),0px_79px_79px_0px_rgba(0,0,0,0.09),0px_20px_43px_0px_rgba(0,0,0,0.1)]" />
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative w-full">
          <div className="h-[329px] pointer-events-none relative rounded-[20px] shrink-0 w-full" data-name="FOTO20240522091537am 1">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[20px] size-full" src={imgFoto20240522091537Am1} />
            <div aria-hidden="true" className="absolute border border-[#68aff6] border-solid inset-0 rounded-[20px] shadow-[0px_238px_67px_0px_rgba(0,0,0,0),0px_152px_61px_0px_rgba(0,0,0,0.01),0px_86px_51px_0px_rgba(0,0,0,0.05),0px_38px_38px_0px_rgba(0,0,0,0.09),0px_10px_21px_0px_rgba(0,0,0,0.1)]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center left-0 p-[10px] top-0">
      <div className="bg-[#d7f821] relative rounded-br-[20px] rounded-tr-[20px] shrink-0 size-[102px]">
        <div aria-hidden="true" className="absolute border-[5px] border-solid border-white inset-[-5px] pointer-events-none rounded-br-[25px] rounded-tr-[25px]" />
      </div>
    </div>
  );
}

function TeenyiconsArrowSolid() {
  return (
    <div className="relative size-[54.431px]" data-name="teenyicons:arrow-solid">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 55">
        <g clipPath="url(#clip0_1_612)" id="teenyicons:arrow-solid">
          <path d={svgPaths.p10dda970} fill="var(--fill-0, black)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_612">
            <rect fill="white" height="54.4312" width="54.4312" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative shrink-0">
      <div className="flex items-center justify-center relative shrink-0 size-[54.883px]" style={{ "--transform-inner-width": "54.421875", "--transform-inner-height": "54.421875" } as React.CSSProperties}>
        <div className="flex-none rotate-[89.523deg]">
          <TeenyiconsArrowSolid />
        </div>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center p-[23px] relative shrink-0 size-[122px]">
      <Frame21 />
      <Frame20 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center left-[229px] p-[10px] top-[-5px]">
      <Frame22 />
    </div>
  );
}

function Frame24() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
      <Frame23 />
      <Frame29 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative shrink-0 w-[386px]">
      <Frame24 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame19 />
      <Frame30 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[1126px]">
      <Frame28 />
      <Frame31 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[939px] items-start px-[136px] py-[61px] relative shrink-0 w-[1440px]" style={{ backgroundImage: "linear-gradient(237.292deg, rgba(0, 0, 0, 0) 1.1496%, rgba(166, 244, 197, 0.5) 49.752%), linear-gradient(90deg, rgb(44, 94, 143) 0%, rgb(44, 94, 143) 100%)" }}>
      <Frame32 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[30px] text-nowrap text-white whitespace-pre">Tut Wuri Handayani</p>
    </div>
  );
}

function SiBookFill() {
  return (
    <div className="h-[41.792px] relative shrink-0 w-[39px]" data-name="si:book-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 42">
        <g id="si:book-fill">
          <path clipRule="evenodd" d={svgPaths.pc747500} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p1b93a700} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative shrink-0">
      <SiBookFill />
    </div>
  );
}

function Frame15() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[38px] relative shrink-0 text-[30px] text-nowrap text-white whitespace-pre">Tut Wuri Handayani</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#3f88d3] box-border content-stretch flex gap-[3px] h-[100px] items-center px-0 py-[20px] relative shrink-0 w-full">
      <Frame14 />
      <Frame13 />
      <Frame15 />
      <Frame13 />
      <Frame15 />
      <Frame13 />
      <Frame15 />
      <Frame13 />
    </div>
  );
}

function Frame34() {
  return (
    <div id="home" className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame33 />
      <Frame16 />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[321px]">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[44px] min-w-full relative shrink-0 text-[36px] text-black tracking-[-0.72px] w-[min-content]">TENTANG KAMI</p>
      <div className="bg-[#264968] h-[6px] rounded-[20px] shrink-0 w-[144px]" />
    </div>
  );
}

function Frame59() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[24px] text-black w-[583px]">Dinas Pendidikan Kabupaten Bojonegoro adalah lembaga pemerintah yang bertanggung jawab dalam penyelenggaraan urusan pemerintahan di bidang pendidikan. Kami berkomitmen untuk mewujudkan pendidikan berkualitas, merata, dan berkeadilan bagi seluruh masyarakat Bojonegoro.</p>
    </div>
  );
}

function Frame60() {
  return (
    <div className="bg-[#f2f4f7] box-border content-stretch flex flex-col gap-[6px] h-[480px] items-start px-[34px] py-[92px] relative rounded-[20px] shrink-0 w-[710px]">
      <div aria-hidden="true" className="absolute border border-[#d0d5dd] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Frame58 />
      <Frame59 />
    </div>
  );
}

function FluentPeople16Regular() {
  return (
    <div className="relative shrink-0 w-full" data-name="fluent:people-16-regular">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-px py-[4px] relative w-full">
          <div className="h-[24.438px] relative shrink-0 w-[31.875px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 25">
              <path d={svgPaths.p1d1a4f00} fill="var(--fill-0, white)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative shrink-0 w-[54px]">
      <FluentPeople16Regular />
    </div>
  );
}

function Frame36() {
  return (
    <div className="mb-[-20px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[38px] relative shrink-0 text-[30px] text-nowrap text-white whitespace-pre">44,980+</p>
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center mb-[-20px] p-[10px] relative shrink-0">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Siswa Aktif</p>
    </div>
  );
}

function Frame44() {
  return (
    <div className="box-border content-stretch flex flex-col items-center pb-[20px] pt-0 px-0 relative shrink-0 w-full">
      <Frame36 />
      <Frame37 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[142px]">
      <Frame35 />
      <Frame44 />
    </div>
  );
}

function Group() {
  return (
    <div className="h-[30.085px] relative shrink-0 w-[31.667px]" data-name="Group">
      <div className="absolute inset-[-3.32%_-3.16%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 34 33">
          <g id="Group">
            <path d={svgPaths.p31453300} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p186167c0} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.p2d6fea00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function LucideSchool() {
  return (
    <div className="relative shrink-0 w-full" data-name="lucide:school">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[3px] relative w-full">
          <Group />
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative shrink-0 w-[58px]">
      <LucideSchool />
    </div>
  );
}

function Frame39() {
  return (
    <div className="mb-[-21px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[38px] relative shrink-0 text-[30px] text-nowrap text-white whitespace-pre">44,980+</p>
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center mb-[-21px] p-[10px] relative shrink-0">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Sekolah</p>
    </div>
  );
}

function Frame45() {
  return (
    <div className="box-border content-stretch flex flex-col items-center pb-[21px] pt-0 px-0 relative shrink-0 w-full">
      <Frame39 />
      <Frame40 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-center relative shrink-0 w-[142px]">
      <Frame38 />
      <Frame45 />
    </div>
  );
}

function MdiUniversity() {
  return (
    <div className="h-[46.5px] relative shrink-0 w-[46px]" data-name="mdi:university">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 47">
        <g id="mdi:university">
          <path d={svgPaths.p154d7ec0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative shrink-0">
      <MdiUniversity />
    </div>
  );
}

function Frame42() {
  return (
    <div className="mb-[-20px] relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[38px] relative shrink-0 text-[30px] text-nowrap text-white whitespace-pre">44,980+</p>
        </div>
      </div>
    </div>
  );
}

function Frame43() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center mb-[-20px] p-[10px] relative shrink-0">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">Guru</p>
    </div>
  );
}

function Frame46() {
  return (
    <div className="box-border content-stretch flex flex-col items-center pb-[20px] pt-0 px-0 relative shrink-0 w-full">
      <Frame42 />
      <Frame43 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[142px]">
      <Frame41 />
      <Frame46 />
    </div>
  );
}

function Frame61() {
  return (
    <div className="bg-[#336fab] box-border content-stretch flex flex-col gap-[14px] h-[480px] items-start px-[152px] py-[14px] relative rounded-[20px] shrink-0 w-[466px]">
      <Frame47 />
      <Frame48 />
      <Frame49 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0">
      <Frame60 />
      <Frame61 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">Kepala Dinas</p>
    </div>
  );
}

function Frame51() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">Drs. Ec. M. ANWAR MUKHTADLO, M.Si</p>
        </div>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[475px]">
      <Frame50 />
      <Frame51 />
    </div>
  );
}

function Frame52() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[#98a2b3] text-[20px] w-[521px]">Memimpin dengan dedikasi tinggi untuk memajukan pendidikan di Kabupaten Bojonegoro</p>
        </div>
      </div>
    </div>
  );
}

function Frame54() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start p-[20px] relative rounded-[20px] shrink-0 w-[541px]">
      <div aria-hidden="true" className="absolute border border-gray-50 border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_372px_70px_0px_rgba(0,0,0,0),0px_238px_64px_0px_rgba(0,0,0,0.01),0px_15px_24px_0px_rgba(0,0,0,0.1)]" />
      <Frame53 />
      <Frame52 />
    </div>
  );
}

function Frame55() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">Program Unggulan</p>
    </div>
  );
}

function Frame56() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <ul className="[white-space-collapse:collapse] block font-['Montserrat:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[24px] text-black text-nowrap">
            <li className="mb-0 ms-[36px]">
              <span className="leading-[32px]">Beasiswa Scientist</span>
            </li>
            <li className="mb-0 ms-[36px]">
              <span className="leading-[32px]">Sepuluh Sarjana per Desa</span>
            </li>
            <li className="ms-[36px]">
              <span className="leading-[32px]">Bantuan Tugas Akhir</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start p-[20px] relative rounded-[20px] shadow-[0px_251px_70px_0px_rgba(0,0,0,0),0px_161px_64px_0px_rgba(0,0,0,0.01),0px_10px_22px_0px_rgba(0,0,0,0.1)] shrink-0 w-[365px]">
      <Frame55 />
      <Frame56 />
    </div>
  );
}

function Frame91() {
  return (
    <div className="bg-[#f2f4f7] h-[291px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex h-[291px] items-center justify-between px-[124px] py-[19px] relative w-full">
          <Frame54 />
          <Frame57 />
        </div>
      </div>
    </div>
  );
}

function Frame115() {
  return (
    <div id="tentang" className="content-stretch flex flex-col gap-[39px] items-center relative shrink-0 w-full">
      <Frame92 />
      <Frame91 />
    </div>
  );
}

function Frame116() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative shrink-0 w-[1460px]">
      <Frame115 />
    </div>
  );
}

function Frame117() {
  return (
    <div className="content-stretch flex flex-col gap-[104px] items-center relative shrink-0 w-full">
      <Frame34 />
      <Frame116 />
    </div>
  );
}

function Frame85() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[44px] relative shrink-0 text-[36px] text-black text-nowrap tracking-[-0.72px] whitespace-pre">{`Visi & Misi`}</p>
        </div>
      </div>
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[221px]">
      <Frame85 />
      <div className="bg-[#264968] h-[6px] rounded-[20px] shrink-0 w-[144px]" />
    </div>
  );
}

function Frame87() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <div className="font-['Montserrat:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#475467] text-[24px] text-nowrap whitespace-pre">
            <p className="mb-0">Komitmen kami dalam memajukan pendidikan Kabupaten Bojonegoro</p>
            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-[845px]">
      <Frame86 />
      <Frame87 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[21.88%_9.38%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 51 35">
        <g id="Group">
          <path clipRule="evenodd" d={svgPaths.p116c1a00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p5313440} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function BasilEyeOutline() {
  return (
    <div className="overflow-clip relative shrink-0 size-[62px]" data-name="basil:eye-outline">
      <Group1 />
    </div>
  );
}

function Frame72() {
  return (
    <div className="bg-[#3f88d3] box-border content-stretch flex gap-[10px] items-center p-[8px] relative rounded-[39.5px] shrink-0 size-[79px]">
      <BasilEyeOutline />
    </div>
  );
}

function Frame74() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-[30px] text-black text-nowrap whitespace-pre">Visi</p>
    </div>
  );
}

function Frame73() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[30px] relative shrink-0 text-[20px] text-black w-[631px]">Terwujudnya Bojonegoro Bahagia, Makmur, dan Membanggakan</p>
        </div>
      </div>
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame74 />
      <Frame73 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[646px]">
      <Frame72 />
      <Frame75 />
    </div>
  );
}

function Frame83() {
  return (
    <div className="bg-[rgba(49,112,212,0.4)] box-border content-stretch flex flex-col gap-[10px] h-[449px] items-start p-[20px] relative rounded-[20px] shrink-0 w-[668px]">
      <Frame76 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute inset-[8.33%]" data-name="Group">
      <div className="absolute inset-[-1.82%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 57 57">
          <g id="Group">
            <g id="Vector"></g>
            <g id="Vector_2"></g>
            <path d={svgPaths.p39922d00} id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="2" />
            <g id="Group_2">
              <path d={svgPaths.p1a343400} id="Vector_4" stroke="var(--stroke-0, white)" strokeWidth="2" />
              <path d={svgPaths.p2184a900} id="Vector_5" stroke="var(--stroke-0, white)" strokeWidth="2" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function TdesignDartBoard() {
  return (
    <div className="overflow-clip relative shrink-0 size-[66px]" data-name="tdesign:dart-board">
      <Group2 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="bg-[#f79009] box-border content-stretch flex gap-[10px] items-center p-[5px] relative rounded-[38.5px] shrink-0 size-[77px]">
      <TdesignDartBoard />
    </div>
  );
}

function Frame77() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-[30px] text-black text-nowrap whitespace-pre">Misi</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="bg-[#f79009] box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[13px] py-[6px] relative rounded-[18px] shrink-0 size-[36px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">1</p>
    </div>
  );
}

function Frame64() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-justify w-[553px]">Membangun sumber daya manusia Bojonegoro yang berkualitas, unggul, berbudaya, berakhlak dan bahagia</p>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0 w-full">
      <Frame62 />
      <Frame64 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Frame77 />
      <Frame68 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f79009] box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[11px] py-[6px] relative rounded-[18px] shrink-0 size-[36px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">2</p>
    </div>
  );
}

function Frame65() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-justify w-[550px]">Membangun perekonomian daerah yang produktif, berkelanjutan dan berkeadilan</p>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame1 />
      <Frame65 />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Frame78 />
      <Frame69 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f79009] box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[11px] py-[6px] relative rounded-[18px] shrink-0 size-[36px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">3</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-justify w-[554px]">Membangun lingkungan yang lestari dan mengembangkan transisi energi baru terbarukan</p>
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Frame2 />
      <Frame66 />
    </div>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame79 />
      <Frame70 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#f79009] box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[11px] py-[6px] relative rounded-[18px] shrink-0 size-[36px]">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">4</p>
    </div>
  );
}

function Frame67() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-justify w-[553px]">Meningkatkan tata pemerintahan daerah yang bersih, melayani, akuntabel, partisipatif, inklusif dan inovatif</p>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-px items-center relative shrink-0 w-full">
      <Frame3 />
      <Frame67 />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full">
      <Frame80 />
      <Frame71 />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[611px]">
      <Frame63 />
      <Frame81 />
    </div>
  );
}

function Frame84() {
  return (
    <div className="bg-[rgba(235,126,33,0.4)] box-border content-stretch flex flex-col gap-[10px] h-[449px] items-start p-[20px] relative rounded-[20px] shrink-0 w-[640px]">
      <Frame82 />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame83 />
      <Frame84 />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-center relative shrink-0 w-[1348px]">
      <Frame88 />
      <Frame89 />
    </div>
  );
}

function Frame118() {
  return (
    <div className="content-stretch flex flex-col gap-[61px] items-center relative shrink-0 w-full">
      <Frame117 />
      <Frame90 />
    </div>
  );
}

function Frame209() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full">
      <Frame7 />
      <Frame118 />
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[282px]">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[44px] min-w-full relative shrink-0 text-[36px] text-black tracking-[-0.72px] w-[min-content]">Layanan Kami</p>
      <div className="bg-[#264968] h-[6px] rounded-[20px] shrink-0 w-[144px]" />
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 w-[815px]">
      <Frame93 />
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[24px] text-black w-[858px]">Berbagai layanan pendidikan yang dapat Anda akses dengan mudah</p>
    </div>
  );
}

function Frame95() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative shrink-0">
      <div className="relative shrink-0 size-[750px]" data-name="Moto Pelayanan 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgMotoPelayanan2} />
      </div>
    </div>
  );
}

function GameIconsAchievement() {
  return (
    <div className="relative shrink-0 size-[53px]" data-name="game-icons:achievement">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 53">
        <g id="game-icons:achievement">
          <path d={svgPaths.p1f53f600} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame96() {
  return (
    <div className="bg-[#429bf4] box-border content-stretch flex gap-[10px] items-center p-[9px] relative rounded-[10px] shrink-0 size-[71px]">
      <GameIconsAchievement />
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-[375px]">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-[30px] text-black w-full">Sertifikasi Guru</p>
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black w-full">Informasi dan layanan terkait sertifikasi pendidik</p>
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-full whitespace-pre-wrap">{`Selengkapnya       >`}</p>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex gap-[36px] items-center relative shrink-0 w-full">
      <Frame96 />
      <Frame102 />
    </div>
  );
}

function EpSchool() {
  return (
    <div className="relative shrink-0 size-[59px]" data-name="ep:school">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 59 59">
        <g id="ep:school">
          <path d={svgPaths.p28a17780} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2abab700} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1864fd00} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function Frame97() {
  return (
    <div className="bg-[#429bf4] box-border content-stretch flex gap-[10px] items-center px-[6px] py-[4px] relative rounded-[10px] shrink-0 size-[71px]">
      <EpSchool />
    </div>
  );
}

function Frame103() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-[377px]">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-[30px] text-black w-full">Data Sekolah</p>
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black w-full">Informasi data dan statistik pendidikan di Bojonegoro</p>
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-full whitespace-pre-wrap">{`Selengkapnya       >`}</p>
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex gap-[34px] items-center relative shrink-0 w-full">
      <Frame97 />
      <Frame103 />
    </div>
  );
}

function FamiconsBook() {
  return (
    <div className="relative shrink-0 size-[43px]" data-name="famicons:book">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 43">
        <g id="famicons:book">
          <path d={svgPaths.p2f7bf570} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame98() {
  return (
    <div className="bg-[#429bf4] box-border content-stretch flex gap-[10px] items-center p-[14px] relative rounded-[10px] shrink-0 size-[71px]">
      <FamiconsBook />
    </div>
  );
}

function Frame104() {
  return (
    <div className="content-stretch flex flex-col gap-[7px] items-start relative shrink-0 w-[377px]">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-[30px] text-black w-full">Kurikulum</p>
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black w-full">Panduan implementasi kurikulum dan bahan ajar</p>
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-full whitespace-pre-wrap">{`Selengkapnya       >`}</p>
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex gap-[34px] items-center relative shrink-0 w-full">
      <Frame98 />
      <Frame104 />
    </div>
  );
}

function MdiBookEdit() {
  return (
    <div className="relative shrink-0 size-[53px]" data-name="mdi:book-edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 53 53">
        <g id="mdi:book-edit">
          <path d={svgPaths.p256ed080} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame99() {
  return (
    <div className="bg-[#429bf4] box-border content-stretch flex gap-[10px] items-center px-[9px] py-[7px] relative rounded-[10px] shrink-0 size-[71px]">
      <MdiBookEdit />
    </div>
  );
}

function Frame105() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[377px]">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-[30px] text-black w-full">Pendaftaran Sekolah</p>
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black w-full">Layanan informasi pendaftaran siswa baru untuk jenjang TK, SD, SMP, dan SMA</p>
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-full whitespace-pre-wrap">{`Selengkapnya       >`}</p>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex gap-[34px] items-center relative shrink-0 w-full">
      <Frame99 />
      <Frame105 />
    </div>
  );
}

function IcOutlinePeople() {
  return (
    <div className="relative shrink-0 size-[47px]" data-name="ic:outline-people">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 47 47">
        <g id="ic:outline-people">
          <path d={svgPaths.p33b8e80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame100() {
  return (
    <div className="bg-[#429bf4] box-border content-stretch flex gap-[10px] items-center px-[12px] py-[6px] relative rounded-[10px] shrink-0 size-[71px]">
      <IcOutlinePeople />
    </div>
  );
}

function Frame106() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[377px]">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-[30px] text-black w-full">Beasiswa</p>
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black w-full">Program beasiswa dan bantuan pendidikan untuk siswa atau masyarakat kurang mampu</p>
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-full whitespace-pre-wrap">{`Selengkapnya       >`}</p>
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex gap-[34px] items-center relative shrink-0 w-full">
      <Frame100 />
      <Frame106 />
    </div>
  );
}

function EpList() {
  return (
    <div className="relative shrink-0 size-[55px]" data-name="ep:list">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 55 55">
        <g id="ep:list">
          <path d={svgPaths.p16e55000} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame101() {
  return (
    <div className="bg-[#429bf4] box-border content-stretch flex gap-[10px] items-center px-[7px] py-[6px] relative rounded-[10px] shrink-0 size-[71px]">
      <EpList />
    </div>
  );
}

function Frame107() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[377px]">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-[30px] text-black w-full">{`Pengajuan Izin `}</p>
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[14px] text-black w-full">Pengajuan izin operasional sekolah dan lembaga pendidikan</p>
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#475467] text-[14px] w-full whitespace-pre-wrap">{`Selengkapnya       >`}</p>
    </div>
  );
}

function Frame113() {
  return (
    <div className="content-stretch flex gap-[34px] items-center relative shrink-0 w-full">
      <Frame101 />
      <Frame107 />
    </div>
  );
}

function Frame114() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[29px] items-start p-[10px] relative shrink-0 w-[482px]">
      <Frame108 />
      <Frame109 />
      <Frame110 />
      <Frame111 />
      <Frame112 />
      <Frame113 />
    </div>
  );
}

function Frame121() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center p-[10px] relative shrink-0">
      <Frame114 />
    </div>
  );
}

function Frame122() {
  return (
    <div className="content-stretch flex gap-[22px] items-center relative shrink-0 w-full">
      <Frame95 />
      <Frame121 />
    </div>
  );
}

function Frame123() {
  return (
    <div className="content-stretch flex flex-col gap-[49px] items-center relative shrink-0 w-[1294px]">
      <Frame94 />
      <Frame122 />
    </div>
  );
}

function Frame124() {
  return (
    <div id="layanan" className="box-border content-stretch flex flex-col gap-[10px] h-[1124px] items-start px-[66px] py-[59px] relative shrink-0 w-[1440px]" style={{ backgroundImage: "linear-gradient(232.026deg, rgba(0, 0, 0, 0) 0%, rgba(48, 123, 137, 0.5) 50%), linear-gradient(90deg, rgba(25, 101, 213, 0.5) 0%, rgba(25, 101, 213, 0.5) 100%)" }}>
      <Frame123 />
    </div>
  );
}

function Frame210() {
  return (
    <div className="content-stretch flex flex-col gap-[118px] items-center relative shrink-0 w-full">
      <Frame209 />
      <Frame124 />
    </div>
  );
}

function Frame119() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-[438px]">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[44px] min-w-full relative shrink-0 text-[36px] text-black tracking-[-0.72px] w-[min-content]">{`Berita & Pengumuman`}</p>
      <div className="bg-[#264968] h-[6px] rounded-[20px] shrink-0 w-[144px]" />
    </div>
  );
}

function Frame120() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[20px] items-center px-0 py-[30px] relative shrink-0 w-[738px]">
      <Frame119 />
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#667085] text-[24px] w-[792px]">Informasi terkini seputar pendidikan di Kabupaten Bojonegoro</p>
    </div>
  );
}

function Frame125() {
  return (
    <div className="bg-[#f2f4f7] box-border content-stretch flex gap-[10px] items-center justify-center px-[20px] py-[10px] relative rounded-[20px] shrink-0">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#264968] text-[14px] text-nowrap whitespace-pre">Prestasi</p>
    </div>
  );
}

function UitCalender() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="uit:calender">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="uit:calender">
          <path d={svgPaths.p25747a00} fill="var(--fill-0, #667085)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame126() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#667085] text-[14px] text-nowrap whitespace-pre">15 Mei 2025</p>
    </div>
  );
}

function Frame127() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <UitCalender />
      <Frame126 />
    </div>
  );
}

function Frame133() {
  return (
    <div className="box-border content-stretch flex gap-[77px] items-center px-[20px] py-0 relative shrink-0">
      <Frame125 />
      <Frame127 />
    </div>
  );
}

function Frame128() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[24px] text-black w-[553px]">Dinas Pendidikan Raih Juara Harapan II pada Bojonegoro Innovative Award (BIA) Tahun 2025</p>
        </div>
      </div>
    </div>
  );
}

function Frame129() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[20px] text-black w-[525px]">Prestasi membanggakan kembali diraih oleh Dinas Pendidikan Kabupaten Bojonegoro. Pada ajang...</p>
    </div>
  );
}

function Frame131() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame128 />
      <Frame129 />
    </div>
  );
}

function Frame130() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[20px] relative shrink-0">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#336fab] text-[14px] text-nowrap whitespace-pre">{`Selengkapnya       >`}</p>
    </div>
  );
}

function Frame132() {
  return (
    <div className="content-stretch flex flex-col gap-[31px] items-start relative shrink-0 w-full">
      <Frame131 />
      <Frame130 />
    </div>
  );
}

function Frame134() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-[573px]">
      <Frame133 />
      <Frame132 />
    </div>
  );
}

function Frame135() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <div className="bg-white box-border content-stretch flex flex-col gap-[19px] items-center relative rounded-[20px] shadow-[0px_496px_139px_0px_rgba(0,0,0,0),0px_318px_127px_0px_rgba(0,0,0,0.01),0px_179px_107px_0px_rgba(0,0,0,0.05),0px_79px_79px_0px_rgba(0,0,0,0.09),0px_20px_44px_0px_rgba(0,0,0,0.1)] shrink-0 w-[588px]">
        <div 
          className="h-[371px] relative rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full cursor-pointer overflow-hidden group" 
          data-name="Screenshot 2025-11-27 at 18.12.44 1"
          onClick={() => setModalImage({ src: imgScreenshot20251127At1812441, alt: "Prestasi Dinas Pendidikan" })}
        >
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-tl-[20px] rounded-tr-[20px] size-full transition-transform duration-300 group-hover:scale-110" src={imgScreenshot20251127At1812441} />
        </div>
        <Frame134 />
      </div>
      {modalImage && (
        <ImageModal 
          src={modalImage.src} 
          alt={modalImage.alt} 
          onClose={() => setModalImage(null)} 
        />
      )}
    </>
  );
}

function Frame136() {
  return (
    <div className="bg-[#f2f4f7] box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[20px] shrink-0">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#264968] text-[14px] text-nowrap whitespace-pre">Pengumuman</p>
    </div>
  );
}

function UitCalender1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="uit:calender">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="uit:calender">
          <path d={svgPaths.p25747a00} fill="var(--fill-0, #667085)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame137() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#667085] text-[14px] text-nowrap whitespace-pre">15 Mei 2025</p>
    </div>
  );
}

function Frame141() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <UitCalender1 />
      <Frame137 />
    </div>
  );
}

function Frame149() {
  return (
    <div className="box-border content-stretch flex gap-[77px] items-center px-[30px] py-0 relative shrink-0">
      <Frame136 />
      <Frame141 />
    </div>
  );
}

function Frame150() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[24px] text-black w-[553px]">Sistem Penerimaan Murid Baru (SPMB) Jenjang SMP Tahun Pelajaran 2025/2026</p>
        </div>
      </div>
    </div>
  );
}

function Frame151() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[20px] text-black w-[525px]">Petunjuk Teknis Sistem Penerimaan Murid Baru (SPMB) Jenjang SMP Tahun Pelajaran...</p>
    </div>
  );
}

function Frame152() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame150 />
      <Frame151 />
    </div>
  );
}

function Frame189() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[20px] relative shrink-0">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#336fab] text-[14px] text-nowrap whitespace-pre">{`Selengkapnya       >`}</p>
    </div>
  );
}

function Frame190() {
  return (
    <div className="content-stretch flex flex-col gap-[31px] items-start relative shrink-0 w-full">
      <Frame152 />
      <Frame189 />
    </div>
  );
}

function Frame216() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-full">
      <Frame149 />
      <Frame190 />
    </div>
  );
}

function Frame138() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <div className="bg-white box-border content-stretch flex flex-col gap-[19px] items-start relative rounded-bl-[20px] rounded-br-[20px] rounded-tl-[20px] shadow-[0px_476px_133px_0px_rgba(0,0,0,0),0px_304px_122px_0px_rgba(0,0,0,0.01),0px_171px_103px_0px_rgba(0,0,0,0.05),0px_76px_76px_0px_rgba(0,0,0,0.09),0px_19px_42px_0px_rgba(0,0,0,0.1)] shrink-0 w-[573.5px]">
        <div 
          className="h-[371px] relative rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full cursor-pointer group" 
          data-name="Screenshot 2025-11-27 at 18.36.02 1"
          onClick={() => setModalImage({ src: imgScreenshot20251127At1836021, alt: "Pengumuman Dinas Pendidikan" })}
        >
          <div className="absolute inset-0 overflow-hidden rounded-tl-[20px] rounded-tr-[20px]">
            <img alt="" className="absolute h-full left-[-2.91%] max-w-none top-0 w-[134.09%] transition-transform duration-300 group-hover:scale-110" src={imgScreenshot20251127At1836021} />
          </div>
        </div>
        <Frame216 />
      </div>
      {modalImage && (
        <ImageModal 
          src={modalImage.src} 
          alt={modalImage.alt} 
          onClose={() => setModalImage(null)} 
        />
      )}
    </>
  );
}

function Frame217() {
  return (
    <div className="bg-[#f2f4f7] box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[20px] shrink-0">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#264968] text-[14px] text-nowrap whitespace-pre">Kegiatan</p>
    </div>
  );
}

function UitCalender2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="uit:calender">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="uit:calender">
          <path d={svgPaths.p25747a00} fill="var(--fill-0, #667085)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame218() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[#667085] text-[14px] text-nowrap whitespace-pre">15 Mei 2025</p>
    </div>
  );
}

function Frame219() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <UitCalender2 />
      <Frame218 />
    </div>
  );
}

function Frame220() {
  return (
    <div className="box-border content-stretch flex gap-[77px] items-center px-[20px] py-0 relative shrink-0">
      <Frame217 />
      <Frame219 />
    </div>
  );
}

function Frame221() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Montserrat:SemiBold',sans-serif] font-semibold leading-[32px] relative shrink-0 text-[24px] text-black w-[553px]">Dinas Pendidikan Raih Juara Harapan II pada Bojonegoro Innovative Award (BIA) Tahun 2025</p>
        </div>
      </div>
    </div>
  );
}

function Frame222() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[20px] text-black w-[525px]">Prestasi membanggakan kembali diraih oleh Dinas Pendidikan Kabupaten Bojonegoro. Pada ajang...</p>
    </div>
  );
}

function Frame223() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame221 />
      <Frame222 />
    </div>
  );
}

function Frame224() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[10px] py-[20px] relative shrink-0">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#336fab] text-[14px] text-nowrap whitespace-pre">{`Selengkapnya       >`}</p>
    </div>
  );
}

function Frame225() {
  return (
    <div className="content-stretch flex flex-col gap-[31px] items-start relative shrink-0 w-full">
      <Frame223 />
      <Frame224 />
    </div>
  );
}

function Frame226() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 w-full">
      <Frame220 />
      <Frame225 />
    </div>
  );
}

function Frame139() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <div className="bg-white box-border content-stretch flex flex-col gap-[20px] items-end relative rounded-bl-[20px] rounded-br-[20px] shadow-[0px_504px_141px_0px_rgba(0,0,0,0),0px_323px_129px_0px_rgba(0,0,0,0.01),0px_182px_109px_0px_rgba(0,0,0,0.05),0px_81px_81px_0px_rgba(0,0,0,0.09),0px_20px_44px_0px_rgba(0,0,0,0.1)] shrink-0 w-[573.5px]">
        <div 
          className="aspect-[1458/970] relative rounded-tl-[20px] rounded-tr-[20px] shrink-0 w-full cursor-pointer overflow-hidden group" 
          data-name="Screenshot 2025-11-27 at 18.39.57 1"
          onClick={() => setModalImage({ src: imgScreenshot20251127At1839571, alt: "Kegiatan Dinas Pendidikan" })}
        >
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-tl-[20px] rounded-tr-[20px] size-full transition-transform duration-300 group-hover:scale-110" src={imgScreenshot20251127At1839571} />
        </div>
        <Frame226 />
      </div>
      {modalImage && (
        <ImageModal 
          src={modalImage.src} 
          alt={modalImage.alt} 
          onClose={() => setModalImage(null)} 
        />
      )}
    </>
  );
}

function Frame140() {
  return (
    <div className="content-start flex flex-wrap gap-[30px] items-start relative shrink-0 w-full">
      <Frame135 />
      <Frame138 />
      <Frame139 />
    </div>
  );
}

function Frame142() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div onClick={() => scrollToSection('berita')} className="bg-[#3f88d3] box-border content-stretch flex gap-[10px] items-center justify-center p-[20px] relative rounded-[10px] shadow-[0px_182px_51px_0px_rgba(0,0,0,0),0px_117px_47px_0px_rgba(0,0,0,0.01),0px_66px_39px_0px_rgba(0,0,0,0.05),0px_29px_29px_0px_rgba(0,0,0,0.09),0px_7px_16px_0px_rgba(0,0,0,0.1)] shrink-0 cursor-pointer transition-all hover:bg-[#336fab] hover:scale-105">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">Lihat Semua Berita</p>
    </div>
  );
}

function Frame146() {
  return (
    <div className="content-stretch flex flex-col gap-[67px] items-center relative shrink-0 w-full">
      <Frame140 />
      <Frame142 />
    </div>
  );
}

function Frame147() {
  return (
    <div className="content-stretch flex flex-col gap-[84px] items-center relative shrink-0 w-[1191.5px]">
      <Frame120 />
      <Frame146 />
    </div>
  );
}

function Frame148() {
  return (
    <div id="berita" className="bg-gray-50 box-border content-stretch flex gap-[10px] h-[2078px] items-center px-[80px] py-[85px] relative rounded-[20px] shrink-0 w-[1352px]">
      <Frame147 />
    </div>
  );
}

function Frame211() {
  return (
    <div className="content-stretch flex flex-col gap-[77px] items-center relative shrink-0 w-full">
      <Frame210 />
      <Frame148 />
    </div>
  );
}

function Frame143() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[44px] relative shrink-0 text-[36px] text-black text-nowrap tracking-[-0.72px] whitespace-pre">Galeri</p>
        </div>
      </div>
    </div>
  );
}

function Frame144() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[144px]">
      <Frame143 />
      <div className="bg-[#264968] h-[6px] rounded-[20px] shrink-0 w-full" />
    </div>
  );
}

function Frame188() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <div className="relative shrink-0 w-full">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[10px] items-start p-[10px] relative w-full">
            <div 
              className="h-[361px] relative shadow-[0px_395px_110px_0px_rgba(0,0,0,0),0px_253px_101px_0px_rgba(0,0,0,0.01),0px_142px_85px_0px_rgba(0,0,0,0.05),0px_63px_63px_0px_rgba(0,0,0,0.09),0px_16px_35px_0px_rgba(0,0,0,0.1)] shrink-0 w-full cursor-pointer group" 
              data-name="FOTO20150325153048pm 1"
              onClick={() => setModalImage({ src: imgFoto20150325153048Pm1, alt: "Gedung Dinas Pendidikan Kab. Bojonegoro" })}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img alt="" className="absolute h-[119.25%] left-[-0.24%] max-w-none top-[-0.59%] w-full transition-transform duration-300 group-hover:scale-110" src={imgFoto20150325153048Pm1} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {modalImage && (
        <ImageModal 
          src={modalImage.src} 
          alt={modalImage.alt} 
          onClose={() => setModalImage(null)} 
        />
      )}
    </>
  );
}

function Frame193() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[594px]">
      <Frame188 />
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[24px] text-black text-center w-full">Gedung Dinas Pendidikan Kab. Bojonegoro</p>
    </div>
  );
}

function Frame187() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[597px]">
        <div 
          className="h-[361px] relative shadow-[0px_410px_115px_0px_rgba(0,0,0,0),0px_263px_105px_0px_rgba(0,0,0,0.01),0px_148px_89px_0px_rgba(0,0,0,0.05),0px_66px_66px_0px_rgba(0,0,0,0.09),0px_16px_36px_0px_rgba(0,0,0,0.1)] shrink-0 w-full cursor-pointer overflow-hidden group" 
          data-name="ARTIKEL20250527145238pm 1"
          onClick={() => setModalImage({ src: imgArtikel20250527145238Pm1, alt: "Raih Juara Harapan II Pada BIA" })}
        >
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full transition-transform duration-300 group-hover:scale-110" src={imgArtikel20250527145238Pm1} />
        </div>
        <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[24px] text-black text-center w-full">Raih Juara Harapan II Pada BIA</p>
      </div>
      {modalImage && (
        <ImageModal 
          src={modalImage.src} 
          alt={modalImage.alt} 
          onClose={() => setModalImage(null)} 
        />
      )}
    </>
  );
}

function Frame195() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0 w-full">
      <Frame193 />
      <Frame187 />
    </div>
  );
}

function Frame191() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <div className="content-stretch flex flex-col gap-[9px] items-center relative shrink-0 w-[574px]">
        <div 
          className="h-[368px] relative shadow-[0px_395px_110px_0px_rgba(0,0,0,0),0px_253px_101px_0px_rgba(0,0,0,0.01),0px_142px_85px_0px_rgba(0,0,0,0.05),0px_63px_63px_0px_rgba(0,0,0,0.09),0px_16px_35px_0px_rgba(0,0,0,0.1)] shrink-0 w-full cursor-pointer overflow-hidden group" 
          data-name="ARTIKEL20251030124101pm 1"
          onClick={() => setModalImage({ src: imgArtikel20251030124101Pm1, alt: "Gebyar Paud" })}
        >
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full transition-transform duration-300 group-hover:scale-110" src={imgArtikel20251030124101Pm1} />
        </div>
        <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[24px] text-black text-center w-full">Gebyar Paud</p>
      </div>
      {modalImage && (
        <ImageModal 
          src={modalImage.src} 
          alt={modalImage.alt} 
          onClose={() => setModalImage(null)} 
        />
      )}
    </>
  );
}

function Frame192() {
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[597px]">
        <div 
          className="h-[368px] relative shadow-[0px_410px_115px_0px_rgba(0,0,0,0),0px_263px_105px_0px_rgba(0,0,0,0.01),0px_148px_89px_0px_rgba(0,0,0,0.05),0px_66px_66px_0px_rgba(0,0,0,0.09),0px_16px_36px_0px_rgba(0,0,0,0.1)] shrink-0 w-full cursor-pointer overflow-hidden group" 
          data-name="FOTO20240806112208am 1"
          onClick={() => setModalImage({ src: imgFoto20240806112208Am1, alt: "Pembelajaran Numerasi Metode Gasing" })}
        >
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover size-full transition-transform duration-300 group-hover:scale-110" src={imgFoto20240806112208Am1} />
        </div>
        <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[24px] text-black text-center w-full">Pembelajaran Numerasi Metode Gasing</p>
      </div>
      {modalImage && (
        <ImageModal 
          src={modalImage.src} 
          alt={modalImage.alt} 
          onClose={() => setModalImage(null)} 
        />
      )}
    </>
  );
}

function Frame194() {
  return (
    <div className="content-stretch flex gap-[28px] items-start relative shrink-0">
      <Frame191 />
      <Frame192 />
    </div>
  );
}

function Frame196() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-end relative shrink-0 w-full">
      <Frame195 />
      <Frame194 />
    </div>
  );
}

function Frame197() {
  return (
    <div id="galeri" className="content-stretch flex flex-col gap-[54px] items-center relative shrink-0 w-full">
      <Frame144 />
      <Frame196 />
    </div>
  );
}

function Frame145() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div onClick={scrollToTop} className="bg-[#3f88d3] box-border content-stretch flex gap-[10px] items-center justify-center p-[20px] relative rounded-[10px] shadow-[0px_182px_51px_0px_rgba(0,0,0,0),0px_116px_46px_0px_rgba(0,0,0,0.01),0px_65px_39px_0px_rgba(0,0,0,0.05),0px_29px_29px_0px_rgba(0,0,0,0.09),0px_7px_16px_0px_rgba(0,0,0,0.1)] shrink-0 cursor-pointer transition-all hover:bg-[#336fab] hover:scale-105">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">Lihat Semua Galeri</p>
    </div>
  );
}

function Frame198() {
  return (
    <div className="content-stretch flex flex-col gap-[50px] items-center relative shrink-0 w-[1209px]">
      <Frame197 />
      <Frame145 />
    </div>
  );
}

function Frame212() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-center relative shrink-0 w-full">
      <Frame211 />
      <Frame198 />
    </div>
  );
}

function Frame167() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0 w-[305px]">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[44px] min-w-full relative shrink-0 text-[36px] text-black tracking-[-0.72px] w-[min-content]">Hubungi Kami</p>
      <div className="bg-[#264968] h-[6px] rounded-[20px] shrink-0 w-[144px]" />
    </div>
  );
}

function Frame168() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[461px]">
      <Frame167 />
      <div className="font-['Montserrat:Medium',sans-serif] font-medium leading-[30px] min-w-full relative shrink-0 text-[20px] text-black w-[min-content]">
        <p className="mb-0">Kami siap melayani dan menjawab pertanyaan Anda</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function BiTelephone() {
  return (
    <div className="relative shrink-0 size-[31px]" data-name="bi:telephone">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31 31">
        <g clipPath="url(#clip0_1_549)" id="bi:telephone">
          <path d={svgPaths.p2df7de00} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_549">
            <rect fill="white" height="31" width="31" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame154() {
  return (
    <div className="bg-[#3f88d3] box-border content-stretch flex gap-[10px] items-center p-[12px] relative rounded-[10px] shrink-0 size-[56px]">
      <BiTelephone />
    </div>
  );
}

function Frame158() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre">(0353) 881580</p>
    </div>
  );
}

function Frame162() {
  return (
    <div className="content-stretch flex gap-[54px] items-center relative shrink-0">
      <Frame154 />
      <Frame158 />
    </div>
  );
}

function IcOutlineEmail() {
  return (
    <div className="relative shrink-0 size-[44px]" data-name="ic:outline-email">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
        <g id="ic:outline-email">
          <path d={svgPaths.p64d3a00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame155() {
  return (
    <div className="bg-[#3f88d3] box-border content-stretch flex gap-[10px] items-center p-[6px] relative rounded-[10px] shrink-0 size-[56px]">
      <IcOutlineEmail />
    </div>
  );
}

function Frame159() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre">diknasbjn@gmail.com</p>
    </div>
  );
}

function Frame163() {
  return (
    <div className="content-stretch flex gap-[54px] items-center relative shrink-0">
      <Frame155 />
      <Frame159 />
    </div>
  );
}

function UilClock() {
  return (
    <div className="relative shrink-0 size-[43px]" data-name="uil:clock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 43">
        <g id="uil:clock">
          <path d={svgPaths.p20224df0} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame156() {
  return (
    <div className="bg-[#3f88d3] box-border content-stretch flex gap-[10px] items-center p-[6px] relative rounded-[10px] shrink-0 size-[56px]">
      <UilClock />
    </div>
  );
}

function Frame160() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre">Senin - Jumat: 08:00 - 16:00 WIB</p>
    </div>
  );
}

function Frame164() {
  return (
    <div className="content-stretch flex gap-[54px] items-center relative shrink-0">
      <Frame156 />
      <Frame160 />
    </div>
  );
}

function MdiAddressMarkerOutline() {
  return (
    <div className="relative shrink-0 size-[39px]" data-name="mdi:address-marker-outline">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39 39">
        <g id="mdi:address-marker-outline">
          <path d={svgPaths.p32c14c70} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame157() {
  return (
    <div className="bg-[#3f88d3] box-border content-stretch flex gap-[10px] items-center p-[8px] relative rounded-[10px] shrink-0 size-[56px]">
      <MdiAddressMarkerOutline />
    </div>
  );
}

function Frame161() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[30px] relative shrink-0 text-[20px] text-black w-[342px]">Jl. Veteran No. 15, Bojonegoro, Jawa Timur 62111</p>
    </div>
  );
}

function Frame165() {
  return (
    <div className="content-stretch flex gap-[54px] items-center relative shrink-0 w-full">
      <Frame157 />
      <Frame161 />
    </div>
  );
}

function Frame166() {
  return (
    <div className="content-stretch flex flex-col gap-[39px] items-start relative shrink-0 w-full">
      <Frame162 />
      <Frame163 />
      <Frame164 />
      <Frame165 />
    </div>
  );
}

function Frame169() {
  return (
    <div className="content-stretch flex flex-col gap-[11px] items-start relative shrink-0 w-[474px]">
      <Frame168 />
      <Frame166 />
    </div>
  );
}

function Frame153() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[708px]">
      <div className="aspect-[2880/1092] relative shrink-0 w-full" data-name="Screenshot 2025-11-27 at 18.55.50 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20251127At1855501} />
      </div>
      <div className="aspect-[2880/1394] relative shrink-0 w-full" data-name="Screenshot 2025-11-27 at 18.54.58 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgScreenshot20251127At1854581} />
      </div>
    </div>
  );
}

function Frame170() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[14px] items-start p-[20px] relative rounded-[20px] shadow-[0px_822px_230px_0px_rgba(0,0,0,0),0px_526px_210px_0px_rgba(0,0,0,0.01),0px_296px_178px_0px_rgba(0,0,0,0.05),0px_132px_132px_0px_rgba(0,0,0,0.09),0px_33px_72px_0px_rgba(0,0,0,0.1)] shrink-0">
      <Frame169 />
      <Frame153 />
    </div>
  );
}

function Frame213() {
  return (
    <div className="content-stretch flex flex-col gap-[158px] items-center relative shrink-0 w-full">
      <Frame212 />
      <Frame170 />
    </div>
  );
}

function Frame200() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[38px] relative shrink-0 text-[30px] text-black text-nowrap whitespace-pre">Bagaimana Tanggapan Anda?</p>
    </div>
  );
}

function RiEmotionLaughFill() {
  return (
    <div className="relative shrink-0 size-[104px]" data-name="ri:emotion-laugh-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 104 104">
        <g id="ri:emotion-laugh-fill">
          <path d={svgPaths.p33169e80} fill="var(--fill-0, #05603A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame201() {
  return (
    <div className="content-stretch flex flex-col font-['Montserrat:Medium',sans-serif] font-medium gap-[5px] items-center leading-[32px] relative shrink-0 text-[#05603a] text-[24px] w-full">
      <p className="relative shrink-0 w-[168px]">Sangat Puas</p>
      <p className="min-w-full relative shrink-0 text-center w-[min-content]">55%</p>
    </div>
  );
}

function Frame202() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[150px]">
      <RiEmotionLaughFill />
      <Frame201 />
    </div>
  );
}

function RiEmotionHappyFill() {
  return (
    <div className="relative shrink-0 size-[106px]" data-name="ri:emotion-happy-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106 106">
        <g id="ri:emotion-happy-fill">
          <path d={svgPaths.p263cd872} fill="var(--fill-0, #28AA69)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame203() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0 w-[106px]">
      <RiEmotionHappyFill />
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#28aa69] text-[24px] text-center w-[118px]">Puas</p>
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[32px] min-w-full relative shrink-0 text-[#28aa69] text-[24px] text-center w-[min-content]">6%</p>
    </div>
  );
}

function RiEmotionNormalFill() {
  return (
    <div className="relative shrink-0 size-[106px]" data-name="ri:emotion-normal-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106 106">
        <g id="ri:emotion-normal-fill">
          <path d={svgPaths.p37da900} fill="var(--fill-0, #FDB022)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame204() {
  return (
    <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0 w-[143px]">
      <RiEmotionNormalFill />
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[32px] relative shrink-0 text-[#fdb022] text-[24px] w-[160px]">Cukup Puas</p>
      <p className="font-['Montserrat:Medium',sans-serif] font-medium leading-[32px] min-w-full relative shrink-0 text-[#fdb022] text-[24px] text-center w-[min-content]">4%</p>
    </div>
  );
}

function RiEmotionUnhappyFill() {
  return (
    <div className="relative shrink-0 size-[108px]" data-name="ri:emotion-unhappy-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108 108">
        <g id="ri:emotion-unhappy-fill">
          <path d={svgPaths.p384d1700} fill="var(--fill-0, #B42318)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame205() {
  return (
    <div className="content-stretch flex flex-col font-['Montserrat:Medium',sans-serif] font-medium gap-[5px] items-center leading-[32px] relative shrink-0 text-[#b42318] text-[24px] w-full">
      <p className="relative shrink-0 w-[148px]">Tidak Puas</p>
      <p className="min-w-full relative shrink-0 text-center w-[min-content]">36%</p>
    </div>
  );
}

function Frame206() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[132px]">
      <RiEmotionUnhappyFill />
      <Frame205 />
    </div>
  );
}

function Frame207() {
  return (
    <div className="content-stretch flex gap-[211px] items-start relative shrink-0 w-full">
      <Frame202 />
      <Frame203 />
      <Frame204 />
      <Frame206 />
    </div>
  );
}

function Frame208() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[37px] h-[334px] items-start p-[20px] relative rounded-[20px] shadow-[0px_850px_238px_0px_rgba(0,0,0,0),0px_544px_218px_0px_rgba(0,0,0,0.01),0px_306px_184px_0px_rgba(0,0,0,0.05),0px_136px_136px_0px_rgba(0,0,0,0.09),0px_34px_75px_0px_rgba(0,0,0,0.1)] shrink-0 w-[1236px]">
      <Frame200 />
      <Frame207 />
    </div>
  );
}

function Frame214() {
  return (
    <div className="content-stretch flex flex-col gap-[98px] items-center relative shrink-0 w-full">
      <Frame213 />
      <Frame208 />
    </div>
  );
}

function Frame171() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 text-white w-[223px]">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] w-full">{`Dinas Pendidikan `}</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[20px] w-full">Kab. Bojonegoro</p>
    </div>
  );
}

function Frame172() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0">
      <div className="h-[82px] relative shrink-0 w-[55px]" data-name="Logo_Kabupaten_Bojonegoro 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogoKabupatenBojonegoro1} />
      </div>
      <Frame171 />
    </div>
  );
}

function Frame173() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative w-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[20px] text-white w-[382px]">Mewujudkan pendidikan berkualitas dan merata untuk mencerdaskan kehidupan bangsa.</p>
        </div>
      </div>
    </div>
  );
}

function Frame174() {
  return (
    <div className="content-stretch flex flex-col gap-[23px] items-center relative shrink-0 w-[363px]">
      <Frame172 />
      <Frame173 />
    </div>
  );
}

function Frame175() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 text-white w-[102px]">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] w-full">Menu</p>
      <p onClick={() => scrollToSection('home')} className="font-['Montserrat:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[20px] w-full cursor-pointer transition-colors hover:text-[#3f88d3]">Beranda</p>
      <p onClick={() => scrollToSection('tentang')} className="font-['Montserrat:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[20px] w-full cursor-pointer transition-colors hover:text-[#3f88d3]">Profil</p>
      <p onClick={() => scrollToSection('layanan')} className="font-['Montserrat:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[20px] w-full cursor-pointer transition-colors hover:text-[#3f88d3]">Layanan</p>
      <p onClick={() => scrollToSection('berita')} className="font-['Montserrat:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[20px] w-full cursor-pointer transition-colors hover:text-[#3f88d3]">Berita</p>
    </div>
  );
}

function Frame176() {
  return (
    <div className="content-stretch flex flex-col gap-[27px] items-start relative shrink-0 text-white w-[199px]">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] w-full">Layanan</p>
      <a className="block font-['Montserrat:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[20px] w-full transition-colors hover:text-[#3f88d3]" href="https://id-preview--6fcbf88c-7c4f-4a86-9b5a-8e56f1cac74e.lovable.app/?__lovable_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiR0VwR3NrT3d4cFBoVWQ0dVlJMTlQSjJiRG1WMiIsInByb2plY3RfaWQiOiI2ZmNiZjg4Yy03YzRmLTRhODYtOWI1YS04ZTU2ZjFjYWM3NGUiLCJub25jZSI6ImY4YjMzYWQ5ODAxNmYyYzhiY2E3YzFmNDlmMmU4YzBkIiwiaXNzIjoibG92YWJsZS1hcGkiLCJzdWIiOiI2ZmNiZjg4Yy03YzRmLTRhODYtOWI1YS04ZTU2ZjFjYWM3NGUiLCJhdWQiOlsibG92YWJsZS1hcHAiXSwiZXhwIjoxNzY0NzM2MDM1LCJuYmYiOjE3NjQxMzEyMzUsImlhdCI6MTc2NDEzMTIzNX0.hbZRNdN2lHRoN4V8dgxXf7Ho_EJuQCCEScpk1Ixu-T0#">
        <p className="cursor-pointer leading-[30px]">Pendaftaran Sekolah</p>
      </a>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[20px] w-full cursor-pointer transition-colors hover:text-[#3f88d3]">Pengajuan Izin</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[20px] w-full cursor-pointer transition-colors hover:text-[#3f88d3]">Sertifikasi Guru</p>
      <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[20px] w-full cursor-pointer transition-colors hover:text-[#3f88d3]">Beasiswa</p>
    </div>
  );
}

function Frame177() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[442px]">
      <Frame175 />
      <Frame176 />
    </div>
  );
}

function Frame178() {
  return (
    <div className="content-stretch flex gap-[132px] items-center relative shrink-0">
      <Frame174 />
      <Frame177 />
    </div>
  );
}

function Frame179() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative shrink-0">
      <p className="font-['Montserrat:Bold',sans-serif] font-bold leading-[32px] relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">Sosial Media</p>
    </div>
  );
}

function SkillIconsInstagram() {
  return (
    <div className="overflow-clip relative shrink-0 size-[30px]" data-name="skill-icons:instagram">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
        <g id="Group">
          <path d={svgPaths.p3504d900} fill="url(#paint0_radial_1_529)" id="Vector" />
          <path d={svgPaths.p3504d900} fill="url(#paint1_radial_1_529)" id="Vector_2" />
          <path d={svgPaths.p205a9200} fill="var(--fill-0, white)" id="Vector_3" />
        </g>
        <defs>
          <radialGradient cx="0" cy="0" gradientTransform="translate(7.96875 32.3106) rotate(-90) scale(29.7322 27.6533)" gradientUnits="userSpaceOnUse" id="paint0_radial_1_529" r="1">
            <stop stopColor="#FFDD55" />
            <stop offset="0.1" stopColor="#FFDD55" />
            <stop offset="0.5" stopColor="#FF543E" />
            <stop offset="1" stopColor="#C837AB" />
          </radialGradient>
          <radialGradient cx="0" cy="0" gradientTransform="translate(-5.02512 2.16105) rotate(78.681) scale(13.2905 54.7837)" gradientUnits="userSpaceOnUse" id="paint1_radial_1_529" r="1">
            <stop stopColor="#3771C8" />
            <stop offset="0.128" stopColor="#3771C8" />
            <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame180() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center p-[11px] relative rounded-[26px] shrink-0 size-[52px] cursor-pointer transition-transform hover:scale-110">
      <SkillIconsInstagram />
    </div>
  );
}

function LogosFacebook() {
  return (
    <div className="relative shrink-0 size-[35px]" data-name="logos:facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 35">
        <g clipPath="url(#clip0_1_564)" id="logos:facebook">
          <path d={svgPaths.p36933af0} fill="var(--fill-0, #336FAB)" id="Vector" />
          <path d={svgPaths.p3ccf8680} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_564">
            <rect fill="white" height="35" width="35" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame181() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-center p-[8px] relative rounded-[26px] shrink-0 size-[52px] cursor-pointer transition-transform hover:scale-110">
      <LogosFacebook />
    </div>
  );
}

function LogosYoutubeIcon() {
  return (
    <div className="h-[25px] relative shrink-0 w-[35px]" data-name="logos:youtube-icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 35 25">
        <g clipPath="url(#clip0_1_552)" id="logos:youtube-icon">
          <path d={svgPaths.p24550900} fill="var(--fill-0, #B42318)" id="Vector" />
          <path d={svgPaths.p38ac8f00} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_1_552">
            <rect fill="white" height="25" width="35" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame182() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-[10px] items-start px-[8px] py-[13px] relative rounded-[26px] shrink-0 size-[52px] cursor-pointer transition-transform hover:scale-110">
      <LogosYoutubeIcon />
    </div>
  );
}

function Frame183() {
  return (
    <div className="content-end flex flex-wrap gap-[12px] items-end relative shrink-0 w-[180px]">
      <Frame179 />
      <Frame180 />
      <Frame181 />
      <Frame182 />
    </div>
  );
}

function Frame184() {
  return (
    <div className="content-stretch flex gap-[54px] items-start relative shrink-0">
      <Frame178 />
      <Frame183 />
    </div>
  );
}

function Frame186() {
  return (
    <div className="bg-[#3f88d3] h-[494px] relative shrink-0 w-full">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[494px] items-start px-[125px] py-[119px] relative w-full">
          <Frame184 />
        </div>
      </div>
    </div>
  );
}

function Frame185() {
  return (
    <div className="bg-[#3f88d3] h-[114px] relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#667085] border-[2px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[114px] items-center justify-center px-[340px] py-[41px] relative w-full">
          <p className="font-['Montserrat:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[20px] text-nowrap text-white whitespace-pre">© 2025 Dinas Pendidikan Kabupaten Bojonegoro. Seluruh Hak Dilindungi.</p>
        </div>
      </div>
    </div>
  );
}

function Frame199() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1440px]">
      <Frame186 />
      <Frame185 />
    </div>
  );
}

function Frame215() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[107px] h-[9308px] items-center left-[-10px] top-[43px] w-[1460px]">
      <Frame214 />
      <Frame199 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-white relative size-full">
      <Frame215 />
    </div>
  );
}