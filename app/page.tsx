"use client"
import Image from "next/image";
import MainBanner from "../components/HomeComponents/MainBanner";
import backgroundImageSpa from "@/public/images/homepage/spa-1.webp"
import backgroundImagePools from "@/public/images/homepage/acik-havuz.webp"
import backgroundImageAquapark from "@/public/images/homepage/aquapark-1.webp"
import backgroundImageShows from "@/public/images/homepage/aksam-sovlari.webp"
import ParticleLogo from "../components/generalComponents/ParticleLogo"
import TextBanner from "../components/generalComponents/TextBanner"
import RoomsSection from "../components/HomeComponents/RoomsSection";
import { rooms } from "@/data/roomsCard";
import GastronomySection from "../components/HomeComponents/GastronomySection";
import { gastronomyItems } from "@/data/gastronomy";
import backgroundImageKids from "@/public/images/kids/mini-kulup-1.webp"
import backgroundImageKids2 from "@/public/images/kids/mini-kulup-2.webp"
import backgroundImageKids3 from "@/public/images/kids/mini-kulup-4.webp"
import backgroundImageKids4 from "@/public/images/kids/mini-kulup-6.webp"

export default function Home() {
  const slides = [
    {
      src: "/images/homepage/rubby-lobi-bar-1.webp",
      alt: "SY Hotels - Hotel view",
    },
    {
      src: "/images/homepage/rubby-lobi-bar-3.webp",
      alt: "SY Hotels - Pool view",
    },
    {
      src: "/images/homepage/rubby-lobi-bar-7.webp",
      alt: "SY Hotels - Beach view",
    }
  ];

  return (
    <main className="flex flex-col items-center w-full bg-white justify-center gap-10 pb-20">
      <MainBanner slides={slides}/>
<ParticleLogo
  src="/logo/logo_favicon1.webp"
  width={140}
  height={140}
  particleGap={1}
  particleSize={0.85}
  mouseRadius={50}
  color="#877565"
/>

 <RoomsSection  
        rooms={rooms}
        title="KONAKLAMA"
        description="Geniş ve zarif tasarımlı odaları ile misafirlerine konforun ötesinde bir yaşam alanı sunuyor. Modern dekorasyonun sunduğu şıklıkla kendinizi evinizde hissedebilirsiniz. Tüm odalar, üstün teknoloji ile donatılmış olup, misafirlerin ihtiyaç duyabileceği her türlü detay düşünülerek tasarlanmıştır."
        discoverText="Keşfet"
      />

       <GastronomySection
        items={gastronomyItems}
        title="GASTRONOMİ"
        description="Dünya mutfaklarından seçkin lezzetler sunan restoranlarıyla öne çıkmaktadır. Misafirler, otelin ana restoranında açık büfe kahvaltıdan başlayarak günün her saatinde yerel ve uluslararası lezzetleri deneyimleyebilir."
      />

<TextBanner backgroundImage={backgroundImagePools} span="" header="HAVUZLAR" text="Yüzme keyfi ve eğlenceli anlar sunmak için birbirinden farklı havuz seçenekleriyle hizmet vermektedir. İster dinlenmek, ister serinlemek ya da çocuklarınızla eğlenmek için her ihtiyaca hitap eden havuzlarıyla unutulmaz bir tatil deneyimi yaşatıyor." buttonText="Keşfet" buttonLink="/pools"/>
<TextBanner backgroundImage={backgroundImageSpa} span="" header="SPA & WELLNESS" text="Kapsamlı bir spa & wellness merkezine sahiptir. Sunulan masaj terapileri ile stresinizi atabilir, Türk hamamı, sauna ve buhar odasında dinlenebilir, kapalı havuzda serinleyebilirsiniz. Modern fitness salonu, spor yapmayı sevenler için son teknoloji ekipmanlarla donatılmıştır." buttonText="Keşfet" buttonLink="/spa-wellness"/>
<TextBanner backgroundImage={backgroundImageShows} span="" header="AKTİVİTE & EĞLENCE" text="Gün boyu süren aktiviteler, heyecan verici spor etkinlikleri ve her akşam sahnelenen canlı gösterilerle SY Hotels Belek, tüm misafirlere unutulmaz bir deneyim yaşatmayı amaçlıyor. Hotelde hem dinlenmek hem de sınırsız eğlenceyi keşfetmek mümkün." buttonText="Keşfet" buttonLink="/shows"/>
<TextBanner backgroundImage={backgroundImageAquapark} span="Heyecan arayanlar için" header="Mega Splash Aquapark" text="16 Farklı kaydırak seçeneğiyle adrenalin tutkunları ve eğlence severler için vazgeçilmezdir. Hem çocuklar hem de yetişkinler için ayrı alanları bulunan aquaparkta, her yaştan misafir suyun heyecan verici dünyasına kendini bırakabilir." buttonText="Keşfet" buttonLink="/aquapark"/>
<TextBanner backgroundImage={backgroundImageKids} span="" header="ÇOCUKLAR İÇİN" text="4-12 yaş arasındaki çocuklar için özel olarak tasarlanmış bu kulüpte, deneyimli ve güler yüzlü animatörler eşliğinde gün boyu çeşitli oyunlar, el sanatları etkinlikleri ve grup oyunları düzenlenmektedir." buttonText="Keşfet" buttonLink="/aquapark"/>
    </main>
  );
}
