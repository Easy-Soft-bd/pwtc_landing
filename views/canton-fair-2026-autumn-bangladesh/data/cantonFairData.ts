export const fairPhases = [
  {
    phase: "Phase 1",
    dates: "15–19 October 2026",
    venue: "China Import and Export Fair Complex, Pazhou, Guangzhou",
  },
  {
    phase: "Phase 2",
    dates: "23–27 October 2026",
    venue: "China Import and Export Fair Complex, Pazhou, Guangzhou",
  },
  {
    phase: "Phase 3",
    dates: "31 October–4 November 2026",
    venue: "China Import and Export Fair Complex, Pazhou, Guangzhou",
  },
] as const;

export const groupPackages = [
  {
    guests: "2",
    vehicle: "5-Seat Car",
    rooms: "1 Room",
    breakfast: "2 Per Room/Night",
    bestFor: "Two Executives / Owner-Buyers",
  },
  {
    guests: "4",
    vehicle: "7-Seat MPV",
    rooms: "2 Rooms",
    breakfast: "2 Per Room/Night",
    bestFor: "Small Company Delegation",
  },
  {
    guests: "6",
    vehicle: "9-Seat Van",
    rooms: "3 Rooms",
    breakfast: "2 Per Room/Night",
    bestFor: "Buyer / Management Team",
  },
  {
    guests: "10",
    vehicle: "18–22-Seat Minibus",
    rooms: "5 Rooms",
    breakfast: "2 Per Room/Night",
    bestFor: "Corporate or Agent-Organized Group",
  },
] as const;

export const standardItinerary = [
  {
    package: "3N4D",
    arrival: "Airport Pick-Up",
    middleDays: "2 Full Fair Days / 2 Vehicle Days",
    departure: "Airport Drop-Off",
  },
  {
    package: "4N5D",
    arrival: "Airport Pick-Up",
    middleDays: "3 Full Fair Days / 3 Vehicle Days",
    departure: "Airport Drop-Off",
  },
  {
    package: "5N6D",
    arrival: "Airport Pick-Up",
    middleDays: "4 Full Fair Days / 4 Vehicle Days",
    departure: "Airport Drop-Off",
  },
] as const;

export const startingHotels = [
  {
    category: "3-Diamond Business",
    hotel: "Paco Hotel (Jinan University / Zhujiang New Town)",
    basis: "Current Lowest Sampled Twin-Breakfast Rate",
  },
  {
    category: "4-Diamond Comfort",
    hotel: "The Mulian Hotel of Bio-Island Guangzhou (Pazhou Complex)",
    basis: "Current Lowest Sampled Twin-Breakfast Rate",
  },
  {
    category: "5-Star Executive",
    hotel: "China Hotel Guangzhou",
    basis: "Current Lowest Sampled Twin-Breakfast Rate",
  },
] as const;

export type PackageRateRow = {
  package: string;
  vehicleDays: string;
  guests2: string;
  guests4: string;
  guests6: string;
  guests10: string;
};

export type HotelRateCategory = {
  category: string;
  hotel: string;
  rates: PackageRateRow[];
};

export const basicPackageRates: HotelRateCategory[] = [
  {
    category: "3-Diamond Business",
    hotel: "Paco Hotel",
    rates: [
      {
        package: "3N4D",
        vehicleDays: "2 days",
        guests2: "57,300",
        guests4: "47,400",
        guests6: "43,800",
        guests10: "41,000",
      },
      {
        package: "4N5D",
        vehicleDays: "3 days",
        guests2: "76,400",
        guests4: "61,500",
        guests6: "57,300",
        guests10: "52,300",
      },
      {
        package: "5N6D",
        vehicleDays: "4 days",
        guests2: "94,200",
        guests4: "76,400",
        guests6: "70,000",
        guests10: "63,600",
      },
    ],
  },
  {
    category: "4-Diamond Comfort",
    hotel: "The Mulian Hotel of Bio-Island Guangzhou",
    rates: [
      {
        package: "3N4D",
        vehicleDays: "2 days",
        guests2: "65,000",
        guests4: "55,200",
        guests6: "52,300",
        guests10: "48,000",
      },
      {
        package: "4N5D",
        vehicleDays: "3 days",
        guests2: "85,600",
        guests4: "72,200",
        guests6: "67,200",
        guests10: "62,900",
      },
      {
        package: "5N6D",
        vehicleDays: "4 days",
        guests2: "1,07,600",
        guests4: "89,200",
        guests6: "82,800",
        guests10: "76,400",
      },
    ],
  },
  {
    category: "5-Star Executive",
    hotel: "China Hotel Guangzhou",
    rates: [
      {
        package: "3N4D",
        vehicleDays: "2 days",
        guests2: "85,600",
        guests4: "76,000",
        guests6: "72,200",
        guests10: "69,300",
      },
      {
        package: "4N5D",
        vehicleDays: "3 days",
        guests2: "1,12,600",
        guests4: "99,200",
        guests6: "94,900",
        guests10: "89,900",
      },
      {
        package: "5N6D",
        vehicleDays: "4 days",
        guests2: "1,42,700",
        guests4: "1,22,500",
        guests6: "1,16,900",
        guests10: "1,10,500",
      },
    ],
  },
];

export const hostedPackageRates: HotelRateCategory[] = [
  {
    category: "3-Diamond Business",
    hotel: "Paco Hotel",
    rates: [
      {
        package: "3N4D",
        vehicleDays: "2 days",
        guests2: "82,800",
        guests4: "59,400",
        guests6: "52,300",
        guests10: "45,900",
      },
      {
        package: "4N5D",
        vehicleDays: "3 days",
        guests2: "1,14,000",
        guests4: "80,700",
        guests6: "70,000",
        guests10: "60,000",
      },
      {
        package: "5N6D",
        vehicleDays: "4 days",
        guests2: "1,43,800",
        guests4: "1,01,300",
        guests6: "87,000",
        guests10: "73,600",
      },
    ],
  },
  {
    category: "4-Diamond Comfort",
    hotel: "The Mulian Hotel of Bio-Island Guangzhou",
    rates: [
      {
        package: "3N4D",
        vehicleDays: "2 days",
        guests2: "89,900",
        guests4: "67,900",
        guests6: "60,800",
        guests10: "53,000",
      },
      {
        package: "4N5D",
        vehicleDays: "3 days",
        guests2: "1,23,300",
        guests4: "90,600",
        guests6: "79,300",
        guests10: "70,000",
      },
      {
        package: "5N6D",
        vehicleDays: "4 days",
        guests2: "1,58,000",
        guests4: "1,14,000",
        guests6: "99,200",
        guests10: "86,400",
      },
    ],
  },
  {
    category: "5-Star Executive",
    hotel: "China Hotel Guangzhou",
    rates: [
      {
        package: "3N4D",
        vehicleDays: "2 days",
        guests2: "1,10,500",
        guests4: "87,800",
        guests6: "80,700",
        guests10: "74,300",
      },
      {
        package: "4N5D",
        vehicleDays: "3 days",
        guests2: "1,50,200",
        guests4: "1,18,300",
        guests6: "1,07,700",
        guests10: "97,700",
      },
      {
        package: "5N6D",
        vehicleDays: "4 days",
        guests2: "1,91,500",
        guests4: "1,47,400",
        guests6: "1,33,900",
        guests10: "1,19,200",
      },
    ],
  },
];

export const packageIncludes = [
  "Selected starting hotel category and stated twin-room allocation",
  "Two breakfasts per room per night",
  "One private Baiyun Airport pick-up and one drop-off",
  "Private hotel–fair vehicle on full middle days: 2 days for 3N4D, 3 days for 4N5D and 4 days for 5N6D",
  "Vehicle includes 10 hours, 150 km and driver meal per day",
  "Pre-arrival information, English/Chinese coordination and local emergency contact",
  "Insurance allowance, tax and standard service charges",
] as const;

export const packageExcludes = [
  "International airfare, China visa, Canton Fair badge or invitation service",
  "Lunch, dinner, drinks, hotel deposit and personal expenses",
  "Parking fees, payable at actual cost",
  "Vehicle overtime, excess kilometres, night / remote-area service, extra stops or intercity travel",
  "Full-time guide in the Basic Package and professional in-hall interpretation",
  "Technical/contract interpretation, official accompanying-person badge or consulting",
  "Additional costs caused by flight changes, traffic control, policy or force majeure",
] as const;

export const vehicleStandards = [
  {
    title: "Airport Transfers",
    description:
      "One airport, one hotel and one coordinated arrival/departure schedule. Night, remote-area, multi-hotel or split-flight service is extra.",
  },
  {
    title: "Fair-Day Vehicle",
    description:
      "Arrival day is airport pick-up only and departure day is airport drop-off only. The full middle fair days include 10 hours, 150 km and driver meal: 2, 3 or 4 days.",
  },
  {
    title: "Vehicle Overtime",
    description: "Beyond 10 hours: RMB 100 per hour.",
  },
  {
    title: "Parking & Tolls",
    description:
      "Parking is settled at actual cost. Excess kilometers and unlisted tolls require reconfirmation.",
  },
  {
    title: "Vehicle & Luggage",
    description:
      "Vehicle is allocated by group size. Large samples or excess luggage may require an upgrade or luggage van.",
  },
  {
    title: "Hotel Service Area",
    description:
      "Fleet service scope for the 4-Diamond Bio-Island hotel requires written confirmation; any regional surcharge is added at actual cost.",
  },
] as const;

export const termsConditions = [
  {
    title: "Starting-Rate Status",
    description:
      'Every package is shown as "From BDT xxx/person". "From" means the starting B2B net rate based on the current lowest sampled hotel in each category, the standard vehicle allocation, coordinated arrival and departure arrangements, and normal operating hours.',
  },
  {
    title: "Inventory and Rate Lock",
    description:
      "The Ctrip sample rates are not locked. Hotel, room type, vehicle and rate are not held before the complete passenger list and deposit are received.",
  },
  {
    title: "Written Confirmation",
    description:
      "The final confirmation must state hotel, room type, breakfast, vehicle, arrival pick-up, departure drop-off, number of full middle vehicle days, payment currency and any supplements.",
  },
  {
    title: "Deposit",
    description:
      "Within 48 hours after confirmation: RMB 1,500 per person or the higher non-refundable prepayment required by the hotel, whichever is higher.",
  },
  {
    title: "Balance",
    description:
      "The balance is normally due 25 days before arrival. Bookings confirmed within 25 days require full payment.",
  },
  {
    title: "Cancellation and Changes",
    description:
      "The written terms of the confirmed hotel, vehicle and service suppliers apply. Non-refundable charges are payable by the client.",
  },
  {
    title: "Currency and Settlement",
    description:
      "All promotional rates and final settlements are denominated in BDT. Unless otherwise agreed in writing, the booking confirmation, invoice and payment shall all be issued and settled in BDT.",
  },
  {
    title: "Visa and Fair Badge",
    description:
      "Guests are responsible for valid China visas, Canton Fair buyer badges and legal entry/participation qualifications. Approval is not guaranteed.",
  },
  {
    title: "Guide and Interpretation",
    description:
      "The Basic Package excludes a full-time guide. The Hosted Package includes one English-speaking host guide per group. Professional in-hall interpretation and official badge are extra.",
  },
  {
    title: "Promotion Rule",
    description:
      'Public or agent promotion must clearly state: "From BDT xxx/person, twin sharing; hotel and final rate subject to written confirmation."',
  },
] as const;

export const partnerContact = {
  name: "Md Masud Parvez",
  wechat: "+8801819061711",
} as const;
