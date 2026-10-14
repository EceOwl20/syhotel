
import { RoomService } from "@/components/rooms/RoomServices";
import {
  LuWifi,
  LuRefrigerator,
  LuSprayCan,
  LuBath,
  LuDoorOpen,
  LuBox,
  LuVault,
  LuTv,
  LuCoffee,
  LuAirVent,
  LuMaximize2,
  LuPhone,
  LuShirt,
  LuConciergeBell,
  LuWaves,
  LuFlower2,
} from "react-icons/lu";


export const freeServices: RoomService[] = [
  {
    id: "wifi",
    title: "Wifi & Internet",
    description: "Odalarda yüksek hızlı internet bağlantısı",
    icon: LuWifi,
  },
  {
    id: "minibar",
    title: "Mini Bar",
    description: "Soft içecekler, su ve bira günlük yenilenir",
    icon: LuRefrigerator,
  },
  {
    id: "housekeeping",
    title: "Housekeeping",
    description: "Günlük olarak temizlenir",
    icon: LuSprayCan,
  },
  {
    id: "hairdryer",
    title: "Saç Kurutma Makinesi",
    icon: LuWaves,
  },
  {
    id: "bathroom",
    title: "Banyo & Duş",
    icon: LuBath,
  },
  {
    id: "balcony",
    title: "Balkon",
    description: "Masa ve sandalye",
    icon: LuDoorOpen,
  },
  {
    id: "amenities",
    title: "Buklet Malzemeler",
    description: "Banyo ve kişisel bakım ürünleri",
    icon: LuBox,
  },
  {
    id: "safe",
    title: "Emanet Kasa",
    description: "Taşınabilir bilgisayar boyutlarında",
    icon: LuVault,
  },
  {
    id: "tv",
    title: "Lcd TV",
    description: "Yerli ve yabancı kanallar ve müzik yayını",
    icon: LuTv,
  },
  {
    id: "coffee",
    title: "Çay, Kahve Setup",
    description: "Çay ve kahve seçenekleri",
    icon: LuCoffee,
  },
  {
    id: "air-conditioner",
    title: "Klima",
    description: "Merkezi sistemi odadan kontrollü",
    icon: LuAirVent,
  },
  {
    id: "mirror",
    title: "Makyaj Aynası",
    icon: LuFlower2,
  },
  {
    id: "floor",
    title: "Seramik Zemin",
    description: "Ahşap görünümlü",
    icon: LuMaximize2,
  },
];

export const paidServices: RoomService[] = [
  {
    id: "room-service",
    title: "Oda Servisi",
    description: "24 Saat zengin menü seçenekleriyle",
    icon: LuConciergeBell,
  },
  {
    id: "phone",
    title: "Telefon",
    icon: LuPhone,
  },
  {
    id: "laundry",
    title: "Çamaşırhane Hizmetleri",
    description: "Yıkama, kuru temizleme ve ütü hizmeti",
    icon: LuShirt,
  },
];
