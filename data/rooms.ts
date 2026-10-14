import type { GalleryImage } from "@/components/rooms/RoomGallery";
import type { RoomService } from "@/components/rooms/RoomServices";

export type RoomFeature = {
  id: string;
  label: string;
  icon: string;
};

export type RoomServiceData = {
  id: string;
  title: string;
  description?: string;
  icon: string;
};

export type RoomDetail = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  features: RoomFeature[];
  gallery: GalleryImage[];
  freeServices: RoomService[];
  paidServices: RoomService[];
};

export const rooms: RoomDetail[] = [
  {
    slug: "deluxe",
    title: "DELUXE ODALAR",
    subtitle: "YENİ BİR YAŞAM TARZI SİZLERİ BEKLİYOR",
    description:
      "Geniş ve zarif tasarımlı odaları ile misafirlerine konforun ötesinde bir yaşam alanı sunuyor.",

   features: [
  {
    id: "area",
    label: "23 m²",
    icon: "flaticon-area",
  },
  {
    id: "guests",
    label: "2+1+1 (Bebek)",
    icon: "flaticon-user-2",
  },
  {
    id: "bed",
    label: "1 Çift Kişilik",
    icon: "flaticon-bed-5",
  },
  {
    id: "sofa",
    label: "1 Daybed",
    icon: "flaticon-sofa",
  },
  {
    id: "bath",
    label: "Banyo, WC",
    icon: "flaticon-shower-2",
  },
],

    gallery: [
      {
        id: "deluxe-1",
        src: "/images/rooms/deluxe-rooms-1.webp",
        alt: "Deluxe oda görünümü",
      },
      {
        id: "deluxe-2",
        src: "/images/rooms/deluxe-rooms-2.webp",
        alt: "Deluxe oda yatak odası",
      },
      {
        id: "deluxe-3",
        src: "/images/rooms/deluxe-rooms-3.webp",
        alt: "Deluxe oda görünümü",
      },
      {
        id: "deluxe-4",
        src: "/images/rooms/deluxe-rooms-4.webp",
        alt: "Deluxe oda yatak odası",
      },
      {
        id: "deluxe-5",
        src: "/images/rooms/deluxe-rooms-5.webp",
        alt: "Deluxe oda görünümü",
      },
      {
        id: "deluxe-6",
        src: "/images/rooms/deluxe-rooms-6.webp",
        alt: "Deluxe oda yatak odası",
      },
    ],


freeServices: [
  {
    id: "wifi",
    title: "Wifi & Internet",
    description: "Odalarda yüksek hızlı internet bağlantısı",
    icon: "flaticon-wifi-2",
  },
  {
    id: "minibar",
    title: "Mini Bar",
    description: "Soft içecekler, su ve bira günlük yenilenir",
    icon: "flaticon-refrigerator",
  },
  {
    id: "housekeeping",
    title: "Housekeeping",
    description: "Günlük olarak temizlenir",
    icon: "flaticon-service",
  },
  {
    id: "hairdryer",
    title: "Saç Kurutma Makinesi",
    icon: "flaticon-hair-dryer",
  },
  {
    id: "bathroom",
    title: "Banyo & Duş",
    icon: "flaticon-shower-2",
  },
  {
    id: "balcony",
    title: "Balkon",
    description: "Masa ve sandalye",
    icon: "flaticon-balcony",
  },
  {
    id: "amenities",
    title: "Buklet Malzemeler",
    description: "Banyo ve kişisel bakım ürünleri",
    icon: "flaticon-shampoo",
  },
  {
    id: "safe",
    title: "Emanet Kasa",
    description: "Taşınabilir bilgisayar boyutlarında",
    icon: "flaticon-safe-box",
  },
  {
    id: "tv",
    title: "Lcd TV",
    description: "Yerli ve yabancı kanallar ve müzik yayını",
    icon: "flaticon-television",
  },
  {
    id: "coffee",
    title: "Çay, Kahve Setup",
    description: "Çay ve kahve seçenekleri",
    icon: "flaticon-coffee",
  },
  {
    id: "air-conditioner",
    title: "Klima",
    description: "Merkezi sistemi odadan kontrollü",
    icon: "flaticon-air-conditioner",
  },
  {
    id: "mirror",
    title: "Makyaj Aynası",
    icon: "flaticon-aromatherapy",
  },
  {
    id: "floor",
    title: "Seramik Zemin",
    description: "Ahşap görünümlü",
    icon: "flaticon-maximize",
  },
],


paidServices: [
  {
    id: "room-service",
    title: "Oda Servisi",
    description: "24 Saat zengin menü seçenekleriyle",
    icon: "flaticon-room-service",
  },
  {
    id: "phone",
    title: "Telefon",
    icon: "flaticon-customer-service",
  },
  {
    id: "laundry",
    title: "Çamaşırhane Hizmetleri",
    description: "Yıkama, kuru temizleme ve ütü hizmeti",
    icon: "flaticon-laundry-service",
  },
],
},







  {
    slug: "superior",
    title: "SUPERIOR ODALAR",
    subtitle: "KONFOR VE ZARAFET BİR ARADA",
    description: "Superior odalarımızda konforlu konaklamanın keyfini çıkarın.",

  features: [
  { id: "area", label: "23 m²", icon: "flaticon-area" },
  { id: "guests", label: "2+1+1 (Bebek)", icon: "flaticon-users" },
  { id: "bed", label: "1 Çift Kişilik", icon: "flaticon-bed" },
  { id: "sofa", label: "1 Daybed", icon: "flaticon-sofa" },
  { id: "bath", label: "Banyo, WC", icon: "flaticon-shower-2" },
],

    gallery: [
      {
        id: "superior-1",
        src: "/images/rooms/superior/1.webp",
        alt: "Superior oda",
      },
    ],

    freeServices: [
  {
    id: "wifi",
    title: "Wifi & Internet",
    description: "Odalarda yüksek hızlı internet bağlantısı",
    icon: "flaticon-wifi-2",
  },
  {
    id: "minibar",
    title: "Mini Bar",
    description: "Soft içecekler, su ve bira günlük yenilenir",
    icon: "flaticon-refrigerator",
  },
  {
    id: "housekeeping",
    title: "Housekeeping",
    description: "Günlük olarak temizlenir",
    icon: "flaticon-service",
  },
  {
    id: "hairdryer",
    title: "Saç Kurutma Makinesi",
    icon: "flaticon-hair-dryer",
  },
  {
    id: "bathroom",
    title: "Banyo & Duş",
    icon: "flaticon-shower-2",
  },
  {
    id: "balcony",
    title: "Balkon",
    description: "Masa ve sandalye",
    icon: "flaticon-balcony",
  },
  {
    id: "amenities",
    title: "Buklet Malzemeler",
    description: "Banyo ve kişisel bakım ürünleri",
    icon: "flaticon-shampoo",
  },
  {
    id: "safe",
    title: "Emanet Kasa",
    description: "Taşınabilir bilgisayar boyutlarında",
    icon: "flaticon-safe-box",
  },
  {
    id: "tv",
    title: "LCD TV",
    description: "Yerli ve yabancı kanallar ve müzik yayını",
    icon: "flaticon-television",
  },
  {
    id: "coffee",
    title: "Çay, Kahve Setup",
    description: "Çay ve kahve seçenekleri",
    icon: "flaticon-coffee",
  },
  {
    id: "air-conditioner",
    title: "Klima",
    description: "Merkezi sistemi odadan kontrollü",
    icon: "flaticon-air-conditioner",
  },
  {
    id: "floor",
    title: "Seramik Zemin",
    description: "Ahşap görünümlü",
    icon: "flaticon-area",
  },
],

paidServices: [
  {
    id: "room-service",
    title: "Oda Servisi",
    description: "24 Saat zengin menü seçenekleriyle",
    icon: "flaticon-room-service",
  },
  {
    id: "phone",
    title: "Telefon",
    icon: "flaticon-customer-service",
  },
  {
    id: "laundry",
    title: "Çamaşırhane Hizmetleri",
    description: "Yıkama, kuru temizleme ve ütü hizmeti",
    icon: "flaticon-laundry-service",
  },
],
  },
];