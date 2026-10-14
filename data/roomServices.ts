
export const roomServiceCatalog = {
  wifi: "flaticon-wifi-2",
  minibar: "flaticon-refrigerator",
  housekeeping: "flaticon-service",
  hairdryer: "flaticon-hair-dryer",
  bathroom: "flaticon-shower-2",
  balcony: "flaticon-balcony",
  amenities: "flaticon-shampoo",
  safe: "flaticon-safe-box",
  tv: "flaticon-television",
  coffee: "flaticon-coffee",
  airConditioner: "flaticon-air-conditioner",
  mirror: "flaticon-aromatherapy",
  floor: "flaticon-maximize",

  roomService: "flaticon-room-service",
  phone: "flaticon-customer-service",
  laundry: "flaticon-laundry-service",
} as const;

export type RoomServiceId =
  keyof typeof roomServiceCatalog;
