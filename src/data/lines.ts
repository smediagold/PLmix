import { products, type Product, type Subcategory } from './products';

export type LineGroup = 'construction' | 'agriculture' | 'industrial' | 'engine';
type Bi = { en: string; vi: string };
type Fact = { label: Bi; value: Bi };

export type Tone = 'orange' | 'graphite' | 'field' | 'rust' | 'ink';

export interface ProductLine {
  slug: string;
  group: LineGroup;
  main: boolean;
  subcategories: Subcategory[];
  name: Bi;
  tagline: Bi;
  intro: Bi;
  facts: Fact[];
  cover: string;
  photos: { src: string; caption: Bi }[];
  video?: string;
  poster?: string;
  tone: Tone;
}

const f = (le: string, lv: string, ve: string, vv: string): Fact => ({
  label: { en: le, vi: lv },
  value: { en: ve, vi: vv },
});

export const lines: ProductLine[] = [
  {
    slug: 'concrete-mixers',
    group: 'construction',
    main: true,
    subcategories: ['concrete-mixer'],
    name: { en: 'Concrete Mixers', vi: 'Máy Trộn Bê Tông' },
    tagline: {
      en: 'Drum mixers from 250 to 500 litres, built to your colour, engine and logo.',
      vi: 'Máy trộn thùng quay 250–500 lít, làm theo màu, động cơ và logo của bạn.',
    },
    intro: {
      en: 'Our best-known machine and the one most of our partners start with. Every mixer is welded, painted and test-run in our factory, then shipped with the engine you choose: electric, gasoline or diesel.',
      vi: 'Dòng máy chủ lực và là sản phẩm đầu tiên hầu hết đối tác đặt hàng. Mỗi máy được hàn, sơn và chạy thử tại nhà máy, sau đó xuất xưởng với động cơ bạn chọn: điện, xăng hoặc diesel.',
    },
    facts: [
      f('Drum capacity', 'Dung tích thùng', '250 – 500 L', '250 – 500 L'),
      f('Engine', 'Động cơ', 'Electric, gasoline or diesel', 'Điện, xăng hoặc diesel'),
      f('Wheels', 'Số bánh', '2, 3 or 4, solid or pneumatic', '2, 3 hoặc 4, bánh đặc hoặc bánh hơi'),
      f('Drum steel', 'Thép thùng', '2 – 3 mm', '2 – 3 mm'),
    ],
    cover: '/images/lines/concrete-mixers.jpg',
    photos: [
      { src: '/images/factory/showroom.png', caption: { en: 'Showroom, mixers in four colours', vi: 'Phòng trưng bày, máy trộn bốn màu' } },
      { src: '/images/factory/factory-3.jpg', caption: { en: 'Assembly hall', vi: 'Xưởng lắp ráp' } },
      { src: '/images/factory/loading-fcl.jpg', caption: { en: 'Drums ready for an FCL load', vi: 'Thùng trộn chờ đóng container FCL' } },
      { src: '/images/orders/order-1.jpg', caption: { en: 'Container loaded for export', vi: 'Container đã đóng hàng xuất khẩu' } },
      { src: '/images/products/concrete-mixer/cm-385-2.jpg', caption: { en: '385 L mixer', vi: 'Máy trộn 385 L' } },
      { src: '/images/products/concrete-mixer/cm-500-3.jpg', caption: { en: '500 L mixer', vi: 'Máy trộn 500 L' } },
    ],
    video: '/videos/cm-350l.mp4',
    poster: '/images/products/concrete-mixer/cm-350-2w-p-2.png',
    tone: 'orange',
  },
  {
    slug: 'stirrup-bending-machines',
    group: 'construction',
    main: true,
    subcategories: ['stirrup-bending-machine'],
    name: { en: 'Stirrup Bending Machines', vi: 'Máy Uốn Đai Thép' },
    tagline: {
      en: 'Feed, bend and cut 6–10 mm rebar into finished stirrups from a touchscreen.',
      vi: 'Nạp, uốn và cắt thép 6–10 mm thành đai hoàn chỉnh, điều khiển màn hình cảm ứng.',
    },
    intro: {
      en: 'Two versions of one automatic machine. The normal-motor model turns out 14–15 stirrups a minute; the servo model with PLC control reaches stirrups up to 1,200 mm and stops itself when the steel runs out.',
      vi: 'Hai phiên bản của cùng một máy uốn tự động. Bản động cơ thường đạt 14–15 đai/phút; bản servo điều khiển PLC uốn đai tới 1.200 mm và tự dừng khi hết thép.',
    },
    facts: [
      f('Steel diameter', 'Đường kính thép', '6 – 10 mm, plain or deformed', '6 – 10 mm, thép trơn hoặc gai'),
      f('Output', 'Năng suất', '14 – 15 stirrups/min', '14 – 15 đai/phút'),
      f('Stirrup size', 'Kích thước đai', 'Up to 1,200 mm', 'Tới 1.200 mm'),
      f('Power', 'Nguồn điện', '220V single phase', '220V một pha'),
    ],
    cover: '/images/lines/stirrup-bending-machines.jpg',
    photos: [
      { src: '/images/products/stirrup-bending/sbm-detail-22.png', caption: { en: 'Feeding rollers', vi: 'Cụm con lăn nạp thép' } },
      { src: '/images/products/stirrup-bending/sbm-detail-23.png', caption: { en: 'Bending head', vi: 'Đầu uốn' } },
      { src: '/images/products/stirrup-bending/sbm-detail-24.png', caption: { en: 'Servo model, control panel', vi: 'Bản servo, bảng điều khiển' } },
      { src: '/images/products/stirrup-bending/sbm-detail-25.png', caption: { en: 'Servo model, side view', vi: 'Bản servo, nhìn ngang' } },
      { src: '/images/products/stirrup-bending/sbm-detail-26.png', caption: { en: 'Servo model, rear view', vi: 'Bản servo, nhìn sau' } },
    ],
    video: '/videos/sbm.mp4',
    poster: '/images/products/stirrup-bending/sbm-detail-21.png',
    tone: 'graphite',
  },
  {
    slug: 'rice-transplanters',
    group: 'agriculture',
    main: true,
    subcategories: ['rice-transplanter'],
    name: { en: 'Rice Transplanters', vi: 'Máy Cấy Lúa' },
    tagline: {
      en: 'Four to six rows at a time, up to 1,200 m² an hour, light enough for one person.',
      vi: 'Cấy 4 đến 6 hàng một lượt, tới 1.200 m² mỗi giờ, một người vận hành.',
    },
    intro: {
      en: 'Self-propelled models with an electric or gasoline drive, and a hand-pulled model with an electric-assisted claw for small and terraced fields. All weigh 65 kg or less and set rows at 20 or 24 cm.',
      vi: 'Các model tự hành chạy điện hoặc xăng, và model kéo tay có mấu cấy trợ lực điện cho ruộng nhỏ, ruộng bậc thang. Tất cả nặng không quá 65 kg, khoảng cách hàng 20 hoặc 24 cm.',
    },
    facts: [
      f('Rows', 'Số hàng', '4, 5 or 6', '4, 5 hoặc 6'),
      f('Output', 'Năng suất', '360 – 1,200 m²/h', '360 – 1.200 m²/giờ'),
      f('Row spacing', 'Khoảng cách hàng', '20 or 24 cm', '20 hoặc 24 cm'),
      f('Weight', 'Trọng lượng', '35 – 65 kg', '35 – 65 kg'),
    ],
    cover: '/images/lines/rice-transplanters.jpg',
    photos: [
      { src: '/images/products/transplanter/plsp-21.png', caption: { en: 'PLSP-06, six rows', vi: 'PLSP-06, sáu hàng' } },
      { src: '/images/products/transplanter/plsp-22.png', caption: { en: 'Seedling tray', vi: 'Khay mạ' } },
      { src: '/images/products/transplanter/plsp-23.png', caption: { en: 'PLSP-05, five rows', vi: 'PLSP-05, năm hàng' } },
      { src: '/images/products/transplanter/plsp-28.png', caption: { en: 'Planting claws', vi: 'Mấu cấy' } },
      { src: '/images/products/transplanter/plsp-31.png', caption: { en: 'PLSP-04, four rows', vi: 'PLSP-04, bốn hàng' } },
    ],
    tone: 'field',
  },
  {
    slug: 'paddy-threshers',
    group: 'agriculture',
    main: true,
    subcategories: ['paddy-thresher'],
    name: { en: 'Paddy Threshers', vi: 'Máy Tuốt Lúa' },
    tagline: {
      en: 'From 500 to 2,700 kg of paddy an hour, with at least 98% of the grain threshed.',
      vi: 'Tuốt 500 đến 2.700 kg lúa mỗi giờ, tỷ lệ tuốt sạch từ 98%.',
    },
    intro: {
      en: 'Three sizes on one drum design running at 900 RPM: the 75 kg PL800 for a single farm, the PL1200 for medium holdings and the PL2000 for co-operatives and harvest contractors.',
      vi: 'Ba cỡ máy trên cùng một thiết kế trống tuốt 900 vòng/phút: PL800 nặng 75 kg cho nông hộ, PL1200 cho quy mô vừa và PL2000 cho hợp tác xã, dịch vụ thu hoạch.',
    },
    facts: [
      f('Output', 'Năng suất', '500 – 2,700 kg/h', '500 – 2.700 kg/giờ'),
      f('Threshed rate', 'Tỷ lệ tuốt', '98% or more', 'Từ 98%'),
      f('Drum speed', 'Tốc độ trống', '900 RPM', '900 vòng/phút'),
      f('Weight', 'Trọng lượng', '75 – 490 kg', '75 – 490 kg'),
    ],
    cover: '/images/lines/paddy-threshers.jpg',
    photos: [
      { src: '/images/factory/warehouse.jpg', caption: { en: 'Threshers in our warehouse', vi: 'Máy tuốt trong kho nhà máy' } },
      { src: '/images/products/thresher/detail.jpg', caption: { en: 'Threshing drum', vi: 'Trống tuốt' } },
      { src: '/images/products/thresher/pl1200-1.jpg', caption: { en: 'PL1200', vi: 'PL1200' } },
      { src: '/images/products/thresher/pl800-1.png', caption: { en: 'PL800', vi: 'PL800' } },
    ],
    video: '/videos/thresher.mp4',
    poster: '/images/products/thresher/detail.jpg',
    tone: 'rust',
  },
  {
    slug: 'industrial-fans',
    group: 'industrial',
    main: true,
    subcategories: ['industrial-fan'],
    name: { en: 'Industrial Fans', vi: 'Quạt Công Nghiệp' },
    tagline: {
      en: 'Centrifugal, axial, portable and wall fans moving up to 90,000 m³ of air an hour.',
      vi: 'Quạt ly tâm, hướng trục, di động và thông gió vuông, lưu lượng tới 90.000 m³/giờ.',
    },
    intro: {
      en: 'Six fan families for ventilation, smoke extraction, forced draught and cooling. Housings are rolled and welded from SS400 steel or SUS 304 stainless, impellers are balanced in the factory, and every fan can be built for direct or belt drive.',
      vi: 'Sáu dòng quạt cho thông gió, hút khói, cấp gió lò và làm mát. Vỏ quạt cuốn và hàn từ thép SS400 hoặc inox SUS 304, cánh được cân bằng tại nhà máy, có thể chạy trực tiếp hoặc dây đai.',
    },
    facts: [
      f('Air flow', 'Lưu lượng', 'Up to 90,075 m³/h', 'Tới 90.075 m³/giờ'),
      f('Air pressure', 'Áp suất', 'Up to 15,034 Pa', 'Tới 15.034 Pa'),
      f('Power', 'Công suất', '180 W – 410 kW', '180 W – 410 kW'),
      f('Material', 'Vật liệu', 'SS400 steel or SUS 304', 'Thép SS400 hoặc inox SUS 304'),
    ],
    cover: '/images/lines/industrial-fans.jpg',
    photos: [
      { src: '/images/products/industrial-fan/plax-204-photo-1.jpg', caption: { en: 'Axial fan PLAX 204', vi: 'Quạt hướng trục PLAX 204' } },
      { src: '/images/products/industrial-fan/plcf-121-photo-2.jpg', caption: { en: 'PLCF 121 batch, ready to ship', vi: 'Lô PLCF 121 chờ xuất' } },
      { src: '/images/products/industrial-fan/plax-204-photo-4.jpg', caption: { en: 'Box-type axial fan', vi: 'Quạt hướng trục dạng hộp' } },
      { src: '/images/products/industrial-fan/plpf-photo-1.jpg', caption: { en: 'Portable fan PLPF', vi: 'Quạt di động PLPF' } },
      { src: '/images/products/industrial-fan/plcf-101-photo-1.jpg', caption: { en: 'PLCF 101 on pallets', vi: 'PLCF 101 trên pallet' } },
      { src: '/images/products/industrial-fan/plax-204-photo-6.jpg', caption: { en: 'Duct axial fans', vi: 'Quạt hướng trục ống tròn' } },
    ],
    video: '/videos/axial-fan-1.mp4',
    poster: '/images/products/industrial-fan/axial-fan-1-poster.jpg',
    tone: 'ink',
  },
  {
    slug: 'wheelbarrows',
    group: 'construction',
    main: false,
    subcategories: ['wheelbarrow'],
    name: { en: 'Wheelbarrows', vi: 'Xe Rùa' },
    tagline: {
      en: '70 to 120 litre trays in steel or PP plastic, on solid or pneumatic wheels.',
      vi: 'Thùng 70 đến 120 lít bằng thép hoặc nhựa PP, bánh đặc hoặc bánh hơi.',
    },
    intro: {
      en: 'Seven wheelbarrows for building sites, farms and hardware shops, from the economy 80 L to the 120 L big-tyre model. Galvanized or powder-coated frames, packed flat for container loading.',
      vi: 'Bảy mẫu xe rùa cho công trường, trang trại và cửa hàng vật liệu, từ mẫu 80 L giá rẻ tới mẫu 120 L bánh to. Khung mạ kẽm hoặc sơn tĩnh điện, đóng gói phẳng tối ưu container.',
    },
    facts: [
      f('Capacity', 'Dung tích', '70 – 120 L', '70 – 120 L'),
      f('Tray', 'Thùng', 'Steel or PP plastic', 'Thép hoặc nhựa PP'),
      f('Frame', 'Khung', 'Galvanized or powder-coated', 'Mạ kẽm hoặc sơn tĩnh điện'),
    ],
    cover: '/images/lines/wheelbarrows.jpg',
    photos: [
      { src: '/images/products/wheelbarrow/wb-80l-big.png', caption: { en: '80 L, big tyre', vi: '80 L, bánh to' } },
      { src: '/images/products/wheelbarrow/wb-90l-plastic.png', caption: { en: '90 L, PP tray', vi: '90 L, thùng nhựa PP' } },
      { src: '/images/products/wheelbarrow/wb-parts.png', caption: { en: 'Parts', vi: 'Linh kiện' } },
    ],
    video: '/videos/wb.mp4',
    tone: 'orange',
  },
  {
    slug: 'engines',
    group: 'engine',
    main: false,
    subcategories: ['electric-motor', 'gasoline-engine', 'diesel-engine'],
    name: { en: 'Engines & Motors', vi: 'Động Cơ' },
    tagline: {
      en: 'Electric motors, GP160/GP200 gasoline and CAOFONG diesel engines for our machines.',
      vi: 'Động cơ điện, động cơ xăng GP160/GP200 và diesel CAOFONG cho máy của chúng tôi.',
    },
    intro: {
      en: 'The same engines we fit to our mixers and farm machines, sold on their own as replacements or for your assembly line.',
      vi: 'Chính các động cơ chúng tôi lắp cho máy trộn và máy nông nghiệp, bán riêng để thay thế hoặc cho dây chuyền lắp ráp của bạn.',
    },
    facts: [
      f('Electric', 'Điện', '2.2 – 5.5 kW, 220V', '2,2 – 5,5 kW, 220V'),
      f('Gasoline', 'Xăng', 'GP160 / GP200, 5.5 – 6.5 Hp', 'GP160 / GP200, 5,5 – 6,5 Hp'),
      f('Diesel', 'Diesel', 'CAOFONG, 8 – 12 Hp', 'CAOFONG, 8 – 12 Hp'),
    ],
    cover: '/images/lines/engines.jpg',
    photos: [
      { src: '/images/products/engine/eng-gas-2.jpg', caption: { en: 'Gasoline engine', vi: 'Động cơ xăng' } },
      { src: '/images/products/engine/eng-elec-1.jpg', caption: { en: 'Electric motor', vi: 'Động cơ điện' } },
      { src: '/images/products/engine/eng-gas-3.jpg', caption: { en: 'GP200', vi: 'GP200' } },
    ],
    tone: 'graphite',
  },
  {
    slug: 'vikyno-diesel-engines',
    group: 'engine',
    main: false,
    subcategories: ['vikyno-diesel'],
    name: { en: 'Vikyno Diesel Engines', vi: 'Động Cơ Diesel Vikyno' },
    tagline: {
      en: 'Vietnamese-made Vikyno diesels from 7 to 36.5 Hp, air or water cooled.',
      vi: 'Động cơ diesel Vikyno sản xuất tại Việt Nam, 7 đến 36,5 Hp, làm mát gió hoặc nước.',
    },
    intro: {
      en: 'Single-cylinder RV engines for pumps, generators and farm machinery, the RV325NA and RV365NB for heavy equipment, and the EV series with electric start.',
      vi: 'Động cơ RV một xi lanh cho máy bơm, máy phát và máy nông nghiệp, RV325NA và RV365NB cho thiết bị nặng, và dòng EV khởi động điện.',
    },
    facts: [
      f('Power', 'Công suất', '7 – 36.5 Hp', '7 – 36,5 Hp'),
      f('Models', 'Model', 'RV70 to RV365NB, EV2400, EV2600', 'RV70 tới RV365NB, EV2400, EV2600'),
      f('Cooling', 'Làm mát', 'Air or water', 'Gió hoặc nước'),
    ],
    cover: '/images/lines/vikyno-diesel-engines.jpg',
    photos: [
      { src: '/images/products/vikyno-engine/rv165-2-1.png', caption: { en: 'RV165-2', vi: 'RV165-2' } },
      { src: '/images/products/vikyno-engine/rv325na-1.png', caption: { en: 'RV325NA', vi: 'RV325NA' } },
      { src: '/images/products/vikyno-engine/ev2400-1.png', caption: { en: 'EV2400', vi: 'EV2400' } },
    ],
    tone: 'rust',
  },
];

export const groups: { id: LineGroup; name: Bi }[] = [
  { id: 'construction', name: { en: 'Construction', vi: 'Xây dựng' } },
  { id: 'agriculture', name: { en: 'Agriculture', vi: 'Nông nghiệp' } },
  { id: 'industrial', name: { en: 'Industrial', vi: 'Công nghiệp' } },
  { id: 'engine', name: { en: 'Engines', vi: 'Động cơ' } },
];

export const mainLines = lines.filter((l) => l.main);
export const otherLines = lines.filter((l) => !l.main);

export const getLine = (slug: string) => lines.find((l) => l.slug === slug);

export const lineProducts = (line: ProductLine): Product[] =>
  products.filter((p) => line.subcategories.includes(p.subcategory));

export const lineOfProduct = (p: Product) => lines.find((l) => l.subcategories.includes(p.subcategory));

export const pick = (b: Bi, locale: string) => (locale === 'vi' ? b.vi : b.en);
