import type { Bi } from './nav';

export type LineSeo = {
  title: Bi;
  description: Bi;
  aboutTitle: Bi;
  about: Bi[];
  faqTitle: Bi;
  faq: { q: Bi; a: Bi }[];
  guide?: { slug: string; label: Bi };
};

export const lineSeo: Record<string, LineSeo> = {
  'concrete-mixers': {
    title: {
      en: 'Concrete & Cement Mixer Manufacturer in Vietnam | Phu Long',
      vi: 'Máy Trộn Bê Tông Việt Nam – Nhà Sản Xuất | Phú Long',
    },
    description: {
      en: 'Concrete and cement mixers made in Vietnam: mini 250 L and 1 bag 350 L models up to 500 L, electric, gasoline or diesel, OEM colour and logo, FOB/CIF.',
      vi: 'Máy trộn bê tông sản xuất tại Việt Nam: máy trộn mini 250L, máy trộn 1 bao 350L tới 500L, động cơ điện, xăng, diesel, làm theo màu và logo, xuất khẩu.',
    },
    aboutTitle: {
      en: 'Concrete & cement mixers from Vietnam',
      vi: 'Máy trộn bê tông từ Việt Nam',
    },
    about: [
      {
        en: 'Phu Long is a concrete mixer manufacturer in Vietnam. We build drum concrete mixers, often called cement mixers, from 250 to 500 litres in our own factory in Giao Thuy, Ninh Binh, and ship them to importers, dealers and contractors in 20 countries.',
        vi: 'Phú Long là nhà sản xuất máy trộn bê tông tại Việt Nam. Chúng tôi làm máy trộn bê tông thùng quay, còn gọi là máy trộn xi măng, dung tích 250 đến 500 lít tại nhà máy riêng ở Giao Thủy, Ninh Bình, và xuất khẩu cho nhà nhập khẩu, đại lý và nhà thầu tại 20 quốc gia.',
      },
      {
        en: 'For tight sites and small repairs, our 250 L mini concrete mixer weighs 140–150 kg and moves easily by hand. For small and medium sites, our 350 L and 385 L models are the classic 1 bag concrete mixer: one 50 kg bag of cement with its sand, stone and water per batch. The 420–500 L models give more concrete per batch for larger jobs. Every mixer can be built with an electric, gasoline or diesel engine, in your colour and with your logo.',
        vi: 'Với công trường chật và sửa chữa nhỏ, máy trộn bê tông mini 250 L chỉ nặng 140–150 kg, dễ đẩy bằng tay. Với công trình nhỏ và vừa, các model 350 L và 385 L là máy trộn 1 bao xi măng điển hình: mỗi mẻ một bao xi măng 50 kg cùng cát, đá và nước. Các model 420–500 L cho nhiều bê tông hơn mỗi mẻ, phù hợp công trình lớn. Mọi máy đều có thể lắp động cơ điện, xăng hoặc diesel, sơn màu và in logo theo yêu cầu.',
      },
    ],
    faqTitle: { en: 'Concrete mixer FAQ', vi: 'Câu hỏi thường gặp về máy trộn bê tông' },
    guide: { slug: '1-bag-concrete-mixer-guide', label: { en: 'Read the 1 bag concrete mixer guide', vi: 'Đọc hướng dẫn chọn máy trộn 1 bao' } },
    faq: [
      {
        q: { en: 'What is a 1 bag concrete mixer?', vi: 'Máy trộn 1 bao xi măng là gì?' },
        a: {
          en: 'A drum mixer sized to mix one 50 kg bag of cement per batch, together with the sand, stone and water for that bag. On a typical 1:2:4 site mix this is roughly 0.15–0.2 m³ of concrete, which our 350 L and 385 L mixers handle in one batch. The exact batch depends on your mix design.',
          vi: 'Là máy trộn thùng quay có dung tích vừa đủ trộn một bao xi măng 50 kg mỗi mẻ, cùng lượng cát, đá và nước tương ứng. Với cấp phối phổ biến 1:2:4, mỗi mẻ khoảng 0,15–0,2 m³ bê tông, vừa với các model 350 L và 385 L của chúng tôi. Lượng thực tế mỗi mẻ phụ thuộc cấp phối của bạn.',
        },
      },
      {
        q: { en: 'Do you make a mini concrete mixer?', vi: 'Phú Long có máy trộn bê tông mini không?' },
        a: {
          en: 'Yes. Our 250 L mini concrete mixer comes on 2 or 4 solid 4.00-8 wheels, weighs 140–150 kg and measures 1700 × 860 × 1300 mm, small enough for narrow sites, repairs and rental fleets. It runs on an electric, gasoline or diesel engine, and a smaller drum from 200 L can be built on request.',
          vi: 'Có. Máy trộn bê tông mini 250 L của chúng tôi có loại 2 hoặc 4 bánh đặc 4.00-8, nặng 140–150 kg, kích thước 1700 × 860 × 1300 mm, đủ gọn cho công trường hẹp, sửa chữa và cho thuê. Máy chạy động cơ điện, xăng hoặc diesel, và có thể làm thùng nhỏ hơn từ 200 L theo yêu cầu.',
        },
      },
      {
        q: { en: 'Is a concrete mixer the same as a cement mixer?', vi: 'Máy trộn bê tông và máy trộn xi măng có khác nhau không?' },
        a: {
          en: 'Yes, in everyday use the two names mean the same machine: a rotating drum that mixes cement, sand, stone and water into concrete or mortar. "Cement mixer" is the more common name on site; "concrete mixer" is the usual trade name.',
          vi: 'Trong sử dụng hằng ngày, hai tên gọi này là cùng một loại máy: thùng quay trộn xi măng, cát, đá và nước thành bê tông hoặc vữa. "Máy trộn xi măng" là cách gọi phổ biến ở công trường, còn "máy trộn bê tông" là tên gọi thương mại.',
        },
      },
      {
        q: { en: 'Which concrete mixer sizes do you make?', vi: 'Phú Long sản xuất những cỡ máy trộn nào?' },
        a: {
          en: 'Ten models with drums from 250 L to 500 L, on 2, 3 or 4 wheels with solid 4.00-8 or pneumatic 5.00-12 tyres. Drum steel is 2–3 mm, thicker on request.',
          vi: 'Mười model với thùng trộn từ 250 L đến 500 L, loại 2, 3 hoặc 4 bánh, lốp đặc 4.00-8 hoặc lốp hơi 5.00-12. Thép thùng dày 2–3 mm, có thể làm dày hơn theo yêu cầu.',
        },
      },
      {
        q: { en: 'Which engines can the mixers use?', vi: 'Máy trộn dùng được những loại động cơ nào?' },
        a: {
          en: 'Electric motors from 2.2 to 5.5 kW at 220 V, GP160 / GP200 gasoline engines, or diesel engines. You choose the engine for each order and we fit and test it in the factory.',
          vi: 'Động cơ điện 2,2–5,5 kW điện áp 220 V, động cơ xăng GP160 / GP200 hoặc động cơ diesel. Bạn chọn động cơ cho từng đơn hàng, chúng tôi lắp và chạy thử tại nhà máy.',
        },
      },
      {
        q: { en: 'Can you build mixers in our colour with our logo?', vi: 'Có thể làm máy theo màu và logo của chúng tôi không?' },
        a: {
          en: 'Yes. Colour, logo and decals, drum thickness, engine and tyres can all be set per order (OEM). Several colours and models can share one container.',
          vi: 'Có. Màu sơn, logo và tem nhãn, độ dày thùng, động cơ và lốp đều có thể làm theo từng đơn hàng (OEM). Có thể ghép nhiều màu và nhiều model trong một container.',
        },
      },
      {
        q: { en: 'What is the minimum order and how do you ship?', vi: 'Số lượng đặt tối thiểu và cách giao hàng?' },
        a: {
          en: 'Minimum orders start at 2 to 5 units depending on the model. We ship from Vietnam FOB or CIF, in full (FCL) or shared (LCL) containers. Send us your port and quantity for a quote.',
          vi: 'Số lượng tối thiểu từ 2 đến 5 chiếc tùy model. Chúng tôi giao hàng từ Việt Nam theo điều kiện FOB hoặc CIF, bằng container nguyên (FCL) hoặc hàng ghép (LCL). Gửi cảng đến và số lượng để nhận báo giá.',
        },
      },
      {
        q: { en: 'Why buy concrete mixers from Vietnam?', vi: 'Vì sao nên nhập máy trộn bê tông từ Việt Nam?' },
        a: {
          en: 'You buy directly from the factory that cuts, welds, paints, assembles and test-runs each mixer, with more than 20 years of experience and buyers in 20 countries. Our concrete mixers have been tested by SGS Vietnam.',
          vi: 'Bạn mua trực tiếp từ nhà máy tự cắt, hàn, sơn, lắp ráp và chạy thử từng máy, với hơn 20 năm kinh nghiệm và khách hàng tại 20 quốc gia. Máy trộn bê tông của chúng tôi đã được SGS Việt Nam thử nghiệm.',
        },
      },
    ],
  },
};
