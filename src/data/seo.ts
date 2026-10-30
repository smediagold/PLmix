import { OVERLAY_LOCALES, type Bi } from './nav';
import { overlays } from './i18n/overlays';

export type LineSeo = {
  title: Bi;
  description: Bi;
  aboutTitle: Bi;
  about: Bi[];
  faqTitle: Bi;
  faq: { q: Bi; a: Bi }[];
  guide?: { slug: string; label: Bi };
  related?: { slug: string; label: Bi };
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
    related: { slug: 'mini-concrete-mixers', label: { en: 'See our mini concrete mixers', vi: 'Xem máy trộn bê tông mini', es: 'Ver hormigoneras mini', fr: 'Voir les mini bétonnières' } },
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
  'stirrup-bending-machines': {
    title: {
      en: 'Automatic Stirrup Bending Machine Manufacturer | Phu Long',
      vi: 'Máy Uốn Đai, Máy Bẻ Đai Tự Động Việt Nam | Phú Long',
    },
    description: {
      en: 'Automatic stirrup bending machines made in Vietnam: feed, straighten, bend and cut 6–10 mm rebar. Normal-motor and servo PLC models, 220 V, export FOB/CIF.',
      vi: 'Máy uốn đai (máy bẻ đai) thép tự động sản xuất tại Việt Nam: nạp, nắn, uốn và cắt thép 6–10 mm. Bản động cơ thường và servo PLC, điện 220 V.',
    },
    aboutTitle: {
      en: 'Automatic stirrup benders from Vietnam',
      vi: 'Máy uốn đai thép tự động từ Việt Nam',
    },
    about: [
      {
        en: 'Phu Long builds automatic stirrup bending machines in our own factory in Vietnam. One machine feeds rebar from the coil, straightens it, bends every corner at the programmed angle and cuts the finished stirrup, so a single operator replaces a team of hand benders.',
        vi: 'Phú Long sản xuất máy uốn đai thép tự động tại nhà máy riêng ở Việt Nam. Một máy tự nạp thép từ cuộn, nắn thẳng, uốn từng góc theo chương trình và cắt thành đai hoàn chỉnh, một người vận hành thay được cả tổ uốn đai bằng tay.',
      },
      {
        en: 'Both models take plain and deformed bar from 6 to 10 mm and run on 220 V single-phase power. The normal-motor model makes 14–15 stirrups a minute (14 × 14 cm) for sizes up to 110 cm. The servo model with PLC and HMI touchscreen bends more precisely, reaches stirrups up to 1,200 mm, produces 2.5–5 tonnes a day and stops itself when the steel runs out.',
        vi: 'Cả hai model uốn được thép trơn và thép gân từ 6 đến 10 mm, chạy điện 220 V một pha. Bản động cơ thường làm 14–15 đai/phút (đai 14 × 14 cm), kích thước đai tới 110 cm. Bản servo có PLC và màn hình cảm ứng HMI uốn chính xác hơn, làm đai tới 1.200 mm, năng suất 2,5–5 tấn/ngày và tự dừng khi hết thép.',
      },
    ],
    faqTitle: { en: 'Stirrup bending machine FAQ', vi: 'Câu hỏi thường gặp về máy uốn đai' },
    guide: { slug: 'stirrup-bending-machine-normal-vs-servo', label: { en: 'Read: normal motor vs servo PLC', vi: 'Đọc: động cơ thường hay servo PLC' } },
    faq: [
      {
        q: { en: 'What does an automatic stirrup bending machine do?', vi: 'Máy uốn đai tự động làm được gì?' },
        a: {
          en: 'It feeds rebar, straightens it, bends it into the shape you set on the touchscreen and cuts it, in one continuous cycle. Square, rectangular, triangular, hexagonal, C-shape, spiral and custom stirrups are all possible.',
          vi: 'Máy nạp thép, nắn thẳng, uốn theo hình đã cài trên màn hình cảm ứng và cắt, trong một chu trình liên tục. Uốn được đai vuông, chữ nhật, tam giác, lục giác, chữ C, xoắn ốc và hình tùy chỉnh.',
        },
      },
      {
        q: { en: 'Which rebar sizes can it bend?', vi: 'Máy uốn được thép cỡ nào?' },
        a: {
          en: 'Plain and deformed bar from 6 mm to 10 mm on both models. The smallest stirrup is about 7 cm on the normal model and 55 mm on the servo model.',
          vi: 'Thép trơn và thép gân từ 6 mm đến 10 mm ở cả hai model. Đai nhỏ nhất khoảng 7 cm với bản thường và 55 mm với bản servo.',
        },
      },
      {
        q: { en: 'Normal motor or servo: which should I choose?', vi: 'Nên chọn động cơ thường hay servo?' },
        a: {
          en: 'Choose the normal-motor model for high output of standard stirrups up to 110 cm. Choose the servo PLC model when you need tighter tolerances, large stirrups up to 1,200 mm and automatic stop when the bar runs out.',
          vi: 'Chọn bản động cơ thường khi cần năng suất cao với đai tiêu chuẩn tới 110 cm. Chọn bản servo PLC khi cần độ chính xác cao hơn, đai lớn tới 1.200 mm và tự dừng khi hết thép.',
        },
      },
      {
        q: { en: 'What power supply does it need?', vi: 'Máy dùng nguồn điện gì?' },
        a: {
          en: '220 V single-phase as standard, so it runs on most site generators and workshop supplies. A three-phase version of the normal model is available on request.',
          vi: 'Tiêu chuẩn là điện 220 V một pha, chạy được với đa số máy phát công trường và điện xưởng. Bản động cơ thường có tùy chọn điện 3 pha theo yêu cầu.',
        },
      },
      {
        q: { en: 'How many operators does it need?', vi: 'Máy cần bao nhiêu người vận hành?' },
        a: {
          en: 'One. The operator loads the coil, picks the shape on the touchscreen and collects finished stirrups. Most buyers see the machine pay back through saved labour and less steel waste.',
          vi: 'Một người. Người vận hành lắp cuộn thép, chọn hình trên màn hình và gom đai thành phẩm. Đa số khách hàng hoàn vốn nhờ tiết kiệm nhân công và giảm hao hụt thép.',
        },
      },
      {
        q: { en: 'What is the minimum order and how is it shipped?', vi: 'Đặt tối thiểu bao nhiêu và giao hàng thế nào?' },
        a: {
          en: 'You can order a single machine. Each machine weighs 250–270 kg and measures 2200 × 950 × 1280 mm; we ship by LCL or FCL on FOB or CIF terms from Vietnam.',
          vi: 'Có thể đặt từ 1 máy. Mỗi máy nặng 250–270 kg, kích thước 2200 × 950 × 1280 mm; giao hàng LCL hoặc FCL theo điều kiện FOB hoặc CIF từ Việt Nam.',
        },
      },
    ],
  },
  'mini-concrete-mixers': {
    title: {
      en: 'Mini Concrete Mixer 250L – Made in Vietnam | Phu Long',
      vi: 'Máy Trộn Bê Tông Mini 250L – Sản Xuất Tại Việt Nam | Phú Long',
    },
    description: {
      en: 'Mini concrete mixer from a Vietnam factory: 250 L drum, 140–150 kg, 2 or 4 wheels, electric, gasoline or diesel engine. OEM colour and logo, export FOB/CIF.',
      vi: 'Máy trộn bê tông mini từ nhà máy Việt Nam: thùng 250 L, nặng 140–150 kg, 2 hoặc 4 bánh, động cơ điện, xăng hoặc diesel. Làm theo màu và logo, xuất khẩu.',
    },
    aboutTitle: { en: 'What is a mini concrete mixer?', vi: 'Máy trộn bê tông mini là gì?' },
    about: [
      {
        en: 'A mini concrete mixer is a compact, portable drum mixer that turns cement, sand, stone and water into concrete or mortar in small batches. It is the right size for house repairs, fence posts, footings, garden paths, brickwork, plastering and tiling, where a full-size mixer is too heavy to move and hand mixing is too slow.',
        vi: 'Máy trộn bê tông mini là máy trộn thùng quay nhỏ gọn, dễ di chuyển, trộn xi măng, cát, đá và nước thành bê tông hoặc vữa theo mẻ nhỏ. Máy vừa với sửa nhà, chôn cột hàng rào, đổ móng nhỏ, lối đi, xây gạch, trát và ốp lát, những việc mà máy lớn thì quá nặng để di chuyển còn trộn tay thì quá chậm.',
      },
      {
        en: 'Phu Long builds its mini concrete mixers in our own factory in Vietnam. Each 250 L mixer weighs 140–150 kg, measures 1700 × 860 × 1300 mm and runs on solid 4.00-8 tyres, with 2 wheels for easy pushing or 4 wheels for stability. Choose an electric motor for indoor and urban work, or a gasoline or diesel engine for sites without power, in your colour and with your logo.',
        vi: 'Phú Long sản xuất máy trộn bê tông mini tại nhà máy riêng ở Việt Nam. Mỗi máy 250 L nặng 140–150 kg, kích thước 1700 × 860 × 1300 mm, dùng lốp đặc 4.00-8, loại 2 bánh dễ đẩy hoặc 4 bánh vững chắc. Chọn động cơ điện cho công trình trong nhà và đô thị, hoặc động cơ xăng, diesel cho nơi không có điện, sơn màu và in logo theo yêu cầu.',
      },
    ],
    faqTitle: { en: 'Mini concrete mixer FAQ', vi: 'Câu hỏi thường gặp về máy trộn bê tông mini' },
    guide: { slug: 'how-to-choose-concrete-mixer', label: { en: 'Read: how to choose a concrete mixer', vi: 'Đọc: cách chọn máy trộn bê tông' } },
    faq: [
      {
        q: { en: 'What size is a mini concrete mixer?', vi: 'Máy trộn bê tông mini có kích thước bao nhiêu?' },
        a: {
          en: 'Our mini concrete mixer has a 250 L drum and measures 1700 × 860 × 1300 mm. It weighs 140 kg with 2 wheels or 150 kg with 4 wheels.',
          vi: 'Máy trộn bê tông mini của chúng tôi có thùng 250 L, kích thước 1700 × 860 × 1300 mm. Nặng 140 kg với bản 2 bánh hoặc 150 kg với bản 4 bánh.',
        },
      },
      {
        q: { en: 'What is a mini concrete mixer used for?', vi: 'Máy trộn bê tông mini dùng để làm gì?' },
        a: {
          en: 'Small batches of concrete or mortar for repairs, footings, fence posts, paths, brickwork, plastering and tiling, on sites where a large mixer cannot fit or would sit idle.',
          vi: 'Trộn bê tông hoặc vữa theo mẻ nhỏ để sửa chữa, đổ móng nhỏ, chôn cột, làm lối đi, xây gạch, trát và ốp lát, ở những nơi máy lớn không vào được hoặc không cần dùng hết công suất.',
        },
      },
      {
        q: { en: 'Electric, gasoline or diesel: which engine is best?', vi: 'Nên chọn động cơ điện, xăng hay diesel?' },
        a: {
          en: 'Electric (2.2–5.5 kW) is quiet and clean for indoor and city work. Gasoline (GP160/GP200) suits sites without power. Diesel is the choice for long daily runs and remote sites.',
          vi: 'Động cơ điện (2,2–5,5 kW) êm và sạch, hợp công trình trong nhà và đô thị. Động cơ xăng (GP160/GP200) hợp nơi không có điện. Diesel phù hợp khi chạy nhiều giờ mỗi ngày và ở công trường xa.',
        },
      },
      {
        q: { en: 'Mini mixer or 1 bag concrete mixer?', vi: 'Nên chọn máy trộn mini hay máy trộn 1 bao?' },
        a: {
          en: 'Choose the 250 L mini mixer when portability matters most. If you pour more concrete per day, our 350 L and 385 L models take a full 50 kg bag of cement per batch.',
          vi: 'Chọn máy mini 250 L khi cần gọn nhẹ, dễ di chuyển. Nếu đổ nhiều bê tông mỗi ngày, các model 350 L và 385 L trộn trọn một bao xi măng 50 kg mỗi mẻ.',
        },
      },
      {
        q: { en: 'Can I order mini mixers with my own brand?', vi: 'Có thể đặt máy trộn mini mang thương hiệu riêng không?' },
        a: {
          en: 'Yes. We paint the mixer in your colour and apply your logo and decals. The minimum order is 5 units per model, shipped LCL or FCL on FOB or CIF terms.',
          vi: 'Có. Chúng tôi sơn máy theo màu và dán logo, tem nhãn của bạn. Đặt tối thiểu 5 chiếc mỗi model, giao hàng LCL hoặc FCL theo điều kiện FOB hoặc CIF.',
        },
      },
    ],
  },
  'wheelbarrows': {
    title: {
      en: 'Wheelbarrow Manufacturer in Vietnam – 70 to 120 L | Phu Long',
      vi: 'Xe Rùa, Xe Cút Kít 70–120L – Nhà Sản Xuất Việt Nam | Phú Long',
    },
    description: {
      en: 'Wheelbarrows made in Vietnam: 70, 80, 90 and 120 L trays in steel or PP plastic, solid or pneumatic tyres, galvanized or powder-coated frames. OEM, MOQ 20.',
      vi: 'Xe rùa (xe cút kít) sản xuất tại Việt Nam: thùng 70, 80, 90 và 120 L bằng thép hoặc nhựa PP, bánh đặc hoặc bánh hơi, khung mạ kẽm hoặc sơn tĩnh điện.',
    },
    aboutTitle: { en: 'Wheelbarrows from a Vietnam factory', vi: 'Xe rùa từ nhà máy tại Việt Nam' },
    about: [
      {
        en: 'Phu Long is a wheelbarrow manufacturer in Vietnam. We make seven construction and garden wheelbarrows in our own factory, from the economy 80 L model to the 120 L heavy-duty model with a big pneumatic tyre, and supply them to importers, hardware distributors and contractors abroad.',
        vi: 'Phú Long là nhà sản xuất xe rùa (xe cút kít) tại Việt Nam. Chúng tôi làm bảy mẫu xe rùa cho công trường và làm vườn tại nhà máy riêng, từ mẫu 80 L giá rẻ tới mẫu 120 L bánh hơi to cho việc nặng, cung cấp cho nhà nhập khẩu, nhà phân phối vật liệu và nhà thầu ở nước ngoài.',
      },
      {
        en: 'Trays come in 70, 80 and 120 L steel or 90 L PP plastic. Frames are galvanized or powder-coated, and each model runs on a solid wheel or a pneumatic tyre. Every wheelbarrow is packed knocked-down so more units fit in a container, and can be made in your colour with your logo.',
        vi: 'Thùng có loại thép 70, 80, 120 L hoặc nhựa PP 90 L. Khung mạ kẽm hoặc sơn tĩnh điện, bánh đặc hoặc bánh hơi tùy mẫu. Mỗi xe được đóng gói tháo rời để xếp được nhiều hơn trong container, và có thể sơn màu, in logo theo yêu cầu.',
      },
    ],
    faqTitle: { en: 'Wheelbarrow FAQ', vi: 'Câu hỏi thường gặp về xe rùa' },
    guide: { slug: 'wheelbarrow-buying-guide', label: { en: 'Read the wheelbarrow buying guide', vi: 'Đọc hướng dẫn chọn xe rùa' } },
    faq: [
      {
        q: { en: 'Which wheelbarrow sizes do you make?', vi: 'Có những cỡ xe rùa nào?' },
        a: {
          en: '70 L, 80 L, 90 L and 120 L. The 80 L comes in three styles (economy, Chinese style and big tyre) and the 120 L with a big or small pneumatic tyre.',
          vi: '70 L, 80 L, 90 L và 120 L. Mẫu 80 L có ba kiểu (giá rẻ, kiểu Trung Quốc và bánh to), mẫu 120 L có bánh hơi to hoặc nhỏ.',
        },
      },
      {
        q: { en: 'Steel or plastic tray: which is better?', vi: 'Nên chọn thùng thép hay thùng nhựa?' },
        a: {
          en: 'A steel tray is the classic choice for concrete, gravel and rough site work. A PP plastic tray does not rust, is lighter and suits gardens, farms and wet or chemical materials.',
          vi: 'Thùng thép là lựa chọn quen thuộc cho bê tông, đá sỏi và công trường. Thùng nhựa PP không gỉ, nhẹ hơn, hợp làm vườn, trang trại và vật liệu ướt hoặc hóa chất.',
        },
      },
      {
        q: { en: 'Solid wheel or pneumatic tyre?', vi: 'Nên chọn bánh đặc hay bánh hơi?' },
        a: {
          en: 'A pneumatic tyre rolls more easily over soft and uneven ground and absorbs shocks. A solid wheel never punctures and needs no maintenance, which suits sites with rebar and debris.',
          vi: 'Bánh hơi lăn nhẹ hơn trên nền mềm, gồ ghề và giảm xóc tốt. Bánh đặc không bao giờ thủng, không cần bảo dưỡng, hợp công trường có nhiều sắt thép và phế liệu.',
        },
      },
      {
        q: { en: 'What is the minimum order?', vi: 'Đặt hàng tối thiểu bao nhiêu?' },
        a: {
          en: '20 units per model. You can mix models in one container, and we ship LCL or FCL on FOB or CIF terms from Vietnam.',
          vi: '20 chiếc mỗi mẫu. Có thể ghép nhiều mẫu trong một container, giao hàng LCL hoặc FCL theo điều kiện FOB hoặc CIF từ Việt Nam.',
        },
      },
      {
        q: { en: 'Can you make wheelbarrows with our brand?', vi: 'Có làm xe rùa mang thương hiệu riêng không?' },
        a: {
          en: 'Yes. We paint the tray and frame in your colours and apply your logo, so the wheelbarrows arrive ready for your shelves.',
          vi: 'Có. Chúng tôi sơn thùng và khung theo màu của bạn và in logo, xe đến tay bạn là sẵn sàng bày bán.',
        },
      },
    ],
  },
  'industrial-fans': {
    title: { en: "Industrial Fan Manufacturer in Vietnam | Phu Long", vi: "Quạt Công Nghiệp Ly Tâm, Hướng Trục | Phú Long" },
    description: { en: "Industrial fans made in Vietnam: centrifugal fans up to 15,034 Pa, axial fans up to 90,075 m³/h, portable and wall exhaust fans. SS400 steel or SUS 304.", vi: "Quạt công nghiệp sản xuất tại Việt Nam: quạt ly tâm áp tới 15.034 Pa, quạt hướng trục lưu lượng tới 90.075 m³/giờ, quạt di động, quạt hút vuông." },
    aboutTitle: { en: "Industrial fans from a Vietnam factory", vi: "Quạt công nghiệp từ nhà máy tại Việt Nam" },
    about: [
      { en: "Phu Long manufactures industrial fans in Vietnam for ventilation, smoke extraction, forced draught and cooling. The range covers centrifugal fans (forward-curved, heavy-duty flat-blade and high-pressure), axial fans, large portable fans and square wall exhaust fans.", vi: "Phú Long sản xuất quạt công nghiệp tại Việt Nam cho thông gió, hút khói, cấp gió cưỡng bức và làm mát. Dải sản phẩm gồm quạt ly tâm (cánh cong trước, cánh phẳng tải nặng và áp cao), quạt hướng trục, quạt di động cỡ lớn và quạt hút vuông gắn tường." },
      { en: "Housings are rolled and welded from SS400 steel or SUS 304 stainless steel, and every impeller is balanced in our factory before shipping. Centrifugal and axial fans run on 380 V three-phase power with direct or belt drive, from 180 W up to 410 kW, so each fan can be matched to the airflow and pressure of your duct system.", vi: "Vỏ quạt được cuốn và hàn từ thép SS400 hoặc inox SUS 304, cánh quạt được cân bằng tại nhà máy trước khi xuất. Quạt ly tâm và hướng trục chạy điện 380 V ba pha, truyền động trực tiếp hoặc dây đai, công suất từ 180 W tới 410 kW, chọn theo lưu lượng và áp suất của hệ thống ống gió." },
    ],
    faqTitle: { en: "Industrial fan FAQ", vi: "Câu hỏi thường gặp về quạt công nghiệp" },
    guide: { slug: 'centrifugal-vs-axial-industrial-fans', label: { en: "Read: centrifugal or axial fan?", vi: "Đọc: quạt ly tâm hay quạt hướng trục?" } },
    faq: [
      { q: { en: "Which industrial fans do you make?", vi: "Phú Long sản xuất những loại quạt nào?" }, a: { en: "Centrifugal fans PLCF 101, 121 and 152, axial fan PLAX 204, portable fan PLPF with 1.5–2 m blades and square wall exhaust fan PLQF.", vi: "Quạt ly tâm PLCF 101, 121 và 152, quạt hướng trục PLAX 204, quạt di động PLPF cánh 1,5–2 m và quạt hút vuông PLQF." } },
      { q: { en: "Centrifugal or axial fan: which do I need?", vi: "Nên chọn quạt ly tâm hay quạt hướng trục?" }, a: { en: "Choose an axial fan to move large volumes of air against low resistance, up to 90,075 m³/h at up to 877 Pa. Choose a centrifugal fan when the air must push through ducts, filters or hoods, with pressure up to 15,034 Pa on the PLCF 152.", vi: "Chọn quạt hướng trục khi cần lưu lượng lớn với trở lực thấp, tới 90.075 m³/giờ ở áp tới 877 Pa. Chọn quạt ly tâm khi gió phải đi qua ống, lọc hoặc chụp hút, áp tới 15.034 Pa với PLCF 152." } },
      { q: { en: "Steel or stainless steel housing?", vi: "Nên chọn vỏ thép hay inox?" }, a: { en: "SS400 steel suits general ventilation and dry air. SUS 304 stainless steel resists corrosion for kitchens, humid areas, chemical fumes and food processing.", vi: "Thép SS400 phù hợp thông gió thông thường, không khí khô. Inox SUS 304 chống ăn mòn cho bếp, nơi ẩm, khí hóa chất và chế biến thực phẩm." } },
      { q: { en: "What power supply do the fans use?", vi: "Quạt dùng nguồn điện gì?" }, a: { en: "Centrifugal, axial and wall fans run on 380 V three-phase. The portable PLPF fan runs on 220 V single phase at 450–550 W.", vi: "Quạt ly tâm, hướng trục và quạt hút tường dùng điện 380 V ba pha. Quạt di động PLPF dùng điện 220 V một pha, 450–550 W." } },
      { q: { en: "Can you build a fan to our specification?", vi: "Có làm quạt theo thông số riêng không?" }, a: { en: "Yes. Tell us the airflow, pressure, power supply and installation. We size the fan, choose direct or belt drive and quote FOB or CIF from Vietnam.", vi: "Có. Cho chúng tôi biết lưu lượng, áp suất, nguồn điện và cách lắp đặt. Chúng tôi chọn cỡ quạt, kiểu truyền động và báo giá." } },
    ],
  },
  'paddy-threshers': {
    title: { en: "Paddy Thresher Manufacturer in Vietnam | Phu Long", vi: "Máy Tuốt Lúa 500–2.700 kg/giờ | Phú Long" },
    description: { en: "Paddy threshers (rice threshing machines) made in Vietnam: PL800, PL1200 and PL2000, 500 to 2,700 kg/h, 98% or more threshed. Export FOB/CIF, MOQ 1.", vi: "Máy tuốt lúa sản xuất tại Việt Nam: PL800, PL1200 và PL2000, năng suất 500 đến 2.700 kg/giờ, tỷ lệ tuốt từ 98%. Bán lẻ từ 1 máy, xuất khẩu." },
    aboutTitle: { en: "Rice threshing machines from Vietnam", vi: "Máy tuốt lúa từ Việt Nam" },
    about: [
      { en: "Phu Long builds paddy threshers, also called rice threshers or rice threshing machines, in our own factory in Vietnam, a country with one of the largest rice harvests in the world. Each machine separates grain from the straw in one pass, with at least 98% of the paddy threshed.", vi: "Phú Long sản xuất máy tuốt lúa tại nhà máy riêng ở Việt Nam, một trong những nước có sản lượng lúa lớn nhất thế giới. Mỗi máy tách hạt khỏi rơm trong một lần chạy, tỷ lệ tuốt từ 98% trở lên." },
      { en: "Three sizes share one drum design running at 900 RPM: the 75 kg PL800 makes 500–600 kg/h for a single farm, the 290 kg PL1200 makes 1,800–1,900 kg/h for medium holdings, and the 490 kg PL2000 makes 2,500–2,700 kg/h for co-operatives and harvest contractors.", vi: "Ba cỡ máy dùng chung thiết kế trống quay 900 vòng/phút: PL800 nặng 75 kg, năng suất 500–600 kg/giờ cho hộ gia đình; PL1200 nặng 290 kg, 1.800–1.900 kg/giờ cho trang trại vừa; PL2000 nặng 490 kg, 2.500–2.700 kg/giờ cho hợp tác xã và dịch vụ tuốt thuê." },
    ],
    faqTitle: { en: "Paddy thresher FAQ", vi: "Câu hỏi thường gặp về máy tuốt lúa" },
    guide: { slug: 'choosing-paddy-thresher-capacity', label: { en: "Read: choosing thresher capacity", vi: "Đọc: chọn công suất máy tuốt" } },
    faq: [
      { q: { en: "Which paddy thresher should I choose?", vi: "Nên chọn máy tuốt lúa nào?" }, a: { en: "Match it to your harvest: the PL800 (500–600 kg/h) for small farms and remote fields, the PL1200 (1,800–1,900 kg/h) for medium farms, and the PL2000 (2,500–2,700 kg/h) for co-operatives and contract threshing.", vi: "Chọn theo sản lượng: PL800 (500–600 kg/giờ) cho ruộng nhỏ và nơi xa, PL1200 (1.800–1.900 kg/giờ) cho trang trại vừa, PL2000 (2.500–2.700 kg/giờ) cho hợp tác xã và dịch vụ tuốt thuê." } },
      { q: { en: "How much grain is threshed?", vi: "Tỷ lệ tuốt sạch bao nhiêu?" }, a: { en: "All three models thresh 98% or more of the paddy, with the drum running at 900 RPM.", vi: "Cả ba model tuốt sạch từ 98% trở lên, trống quay 900 vòng/phút." } },
      { q: { en: "How heavy and how big are the machines?", vi: "Máy nặng và kích thước bao nhiêu?" }, a: { en: "PL800: 75 kg, 1000 × 700 × 1000 mm. PL1200: 290 kg, 1700 × 1100 × 1500 mm. PL2000: 490 kg, 2700 × 1100 × 1650 mm.", vi: "PL800: 75 kg, 1000 × 700 × 1000 mm. PL1200: 290 kg, 1700 × 1100 × 1500 mm. PL2000: 490 kg, 2700 × 1100 × 1650 mm." } },
      { q: { en: "Can the thresher handle crops other than rice?", vi: "Máy có tuốt được cây trồng khác ngoài lúa không?" }, a: { en: "The threshers are designed and tested for paddy. Tell us your crop and we will advise whether a model suits it.", vi: "Máy được thiết kế và chạy thử cho lúa. Cho chúng tôi biết loại cây trồng, chúng tôi sẽ tư vấn model phù hợp." } },
      { q: { en: "What is the minimum order?", vi: "Đặt hàng tối thiểu bao nhiêu?" }, a: { en: "You can order a single machine. We ship by LCL or FCL on FOB or CIF terms from Vietnam.", vi: "Có thể đặt từ 1 máy. Giao hàng LCL hoặc FCL theo điều kiện FOB hoặc CIF từ Việt Nam." } },
    ],
  },
};

for (const loc of OVERLAY_LOCALES) {
  for (const [slug, s] of Object.entries(lineSeo)) {
    const o = overlays[loc].seo[slug];
    if (!o) continue;
    s.title[loc] = o.title;
    s.description[loc] = o.description;
    s.aboutTitle[loc] = o.aboutTitle;
    s.faqTitle[loc] = o.faqTitle;
    s.about.forEach((p, i) => {
      if (o.about[i]) p[loc] = o.about[i];
    });
    s.faq.forEach((f, i) => {
      if (o.faq[i]) {
        f.q[loc] = o.faq[i].q;
        f.a[loc] = o.faq[i].a;
      }
    });
    if (s.guide && o.guideLabel) s.guide.label[loc] = o.guideLabel;
  }
}
