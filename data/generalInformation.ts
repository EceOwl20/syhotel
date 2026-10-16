
export type GeneralServiceId =
  | "wifiRoom"
  | "minibar"
  | "housekeeping"
  | "hairdryer"
  | "bathroom"
  | "balcony"
  | "amenities"
  | "safe"
  | "tv"
  | "coffee"
  | "airConditioner"
  | "mirror"
  | "floor"
  | "roomService"
  | "laundry"
  | "telephone"
  | "wifiGeneral"
  | "fitness"
  | "animation"
  | "miniClub"
  | "beachPool"
  | "softDrinks"
  | "turkishBath"
  | "parking"
  | "sunbeds"
  | "importDrinks"
  | "spa"
  | "photography"
  | "transfer"
  | "hairdresser"
  | "market"
  | "doctor"
  | "carRental";

export type GeneralServiceGroupId =
  | "roomFree"
  | "roomPaid"
  | "generalFree"
  | "generalPaid";

export type GeneralInformationLine = {
  label?: string;
  text: string;
};

export type GeneralInformationBlock = {
  title?: string;
  lines: GeneralInformationLine[];
};

export const serviceIcons: Record<GeneralServiceId, string> = {
  wifiRoom: "flaticon-wifi",
  minibar: "flaticon-refrigerator",
  housekeeping: "flaticon-room-service-1",
  hairdryer: "flaticon-hair-dryer",
  bathroom: "flaticon-shower",
  balcony: "flaticon-balcony",
  amenities: "flaticon-shampoo",
  safe: "flaticon-safe-box",
  tv: "flaticon-television",
  coffee: "flaticon-coffee",
  airConditioner: "flaticon-air-conditioner",
  mirror: "flaticon-maximize",
  floor: "flaticon-area",

  roomService: "flaticon-room-service-2",
  laundry: "flaticon-laundry-service",
  telephone: "flaticon-customer-service",

  wifiGeneral: "flaticon-wifi",
  fitness: "flaticon-gym",
  animation: "flaticon-group",
  miniClub: "flaticon-friends",
  beachPool: "flaticon-towel-1",
  softDrinks: "flaticon-cocktail",
  turkishBath: "flaticon-spa",
  parking: "flaticon-parking",
  sunbeds: "flaticon-sun-bath",

  importDrinks: "flaticon-cocktail-1",
  spa: "flaticon-massage",
  photography: "flaticon-review",
  transfer: "flaticon-route",
  hairdresser: "flaticon-massage-1",
  market: "flaticon-trolley",
  doctor: "flaticon-first-aid-box",
  carRental: "flaticon-car",
};

export const serviceGroups: {
  id: GeneralServiceGroupId;
  columns: [GeneralServiceId[], GeneralServiceId[]];
}[] = [
  {
    id: "roomFree",
    columns: [
      [
        "wifiRoom",
        "minibar",
        "housekeeping",
        "hairdryer",
        "bathroom",
        "balcony",
        "amenities",
      ],
      [
        "safe",
        "tv",
        "coffee",
        "airConditioner",
        "mirror",
        "floor",
      ],
    ],
  },
  {
    id: "roomPaid",
    columns: [
      ["roomService", "telephone"],
      ["laundry"],
    ],
  },
  {
    id: "generalFree",
    columns: [
      [
        "wifiGeneral",
        "fitness",
        "animation",
        "miniClub",
        "beachPool",
      ],
      [
        "softDrinks",
        "turkishBath",
        "parking",
        "sunbeds",
      ],
    ],
  },
  {
    id: "generalPaid",
    columns: [
      [
        "importDrinks",
        "spa",
        "photography",
        "transfer",
        "telephone",
      ],
      [
        "hairdresser",
        "market",
        "doctor",
        "carRental",
      ],
    ],
  },
];
