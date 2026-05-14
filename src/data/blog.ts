export interface BlogPost {
  slug: string;
  title_en: string;
  title_vi: string;
  excerpt_en: string;
  excerpt_vi: string;
  content_en: string;
  content_vi: string;
  category: 'concrete-mixer' | 'wheelbarrow' | 'rice-transplanter' | 'paddy-thresher' | 'general';
  date: string;
  readTime: number;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-choose-concrete-mixer',
    title_en: 'How to Choose the Right Concrete Mixer for Your Project',
    title_vi: 'Cách Chọn Máy Trộn Bê Tông Phù Hợp Cho Công Trình',
    excerpt_en: 'Drum capacity, engine type, wheel configuration — a practical guide for importers and site managers choosing the right concrete mixer model.',
    excerpt_vi: 'Dung tích tang trống, loại động cơ, cấu hình bánh xe — hướng dẫn thực tế cho nhà nhập khẩu và quản lý công trình khi chọn máy trộn bê tông.',
    category: 'concrete-mixer',
    date: '2025-03-15',
    readTime: 5,
    image: '/images/products/concrete-mixer/cm-350-2w-1.png',
    content_en: `Choosing the right concrete mixer depends on three main factors: project scale, terrain, and engine availability in your market.

## 1. Drum Capacity

The most visible spec is drum capacity. As a general rule:
- **250L** — residential and small repairs
- **350L** — medium construction and road works
- **450–500L** — large projects, high daily output demand

Keep in mind the actual mixing volume is roughly 60–65% of the drum capacity. A 350L drum yields about 200–220L of mixed concrete per batch.

## 2. Engine Type

The three engine types each suit different use cases:

| Engine | Best for |
|--------|----------|
| Electric (2.2–5.5 kW, 220V) | Permanent sites with grid power |
| Gasoline (GP160/GP200, 5.5–6.5 Hp) | Remote or semi-permanent sites |
| Diesel (CAOFONG, 8–12 Hp) | Heavy-duty, no power access |

Electric engines are cheapest to run but require 220V supply. Gasoline offers the best balance of portability and power. Diesel is for demanding environments with no electricity.

## 3. Wheel Configuration

- **2 wheels** — lighter, easier to maneuver in tight spaces
- **4 wheels** — more stable on uneven terrain, preferred for sloped sites

For pneumatic vs. solid tires: pneumatic tires (5.00-12) absorb shock better over rough ground. Solid tires (4.00-8) require zero maintenance and never go flat — popular in markets with limited tire repair access.

## 4. Drum Thickness

At Phu Long, we use 2mm upper / 2.5mm lower drum for 250–350L models, and 2.5mm / 3mm for 450–500L. Thicker drums mean longer service life but add weight. For export markets with heavy use, we recommend specifying the thicker option.

## Summary

Match the model to your market's power infrastructure and typical project size. Most of our export customers in Southeast Asia and Africa choose the 350L gasoline variant — it's the most versatile. For OEM orders with custom color and logo, any model can be configured to your specification.`,

    content_vi: `Chọn máy trộn bê tông phù hợp phụ thuộc vào ba yếu tố chính: quy mô công trình, địa hình và nguồn động lực sẵn có.

## 1. Dung Tích Tang Trống

- **250L** — nhà ở và sửa chữa nhỏ
- **350L** — xây dựng tầm vừa và công trình đường bộ
- **450–500L** — dự án lớn, yêu cầu năng suất cao

Lưu ý: thể tích trộn thực tế bằng khoảng 60–65% dung tích tang. Tang 350L cho khoảng 200–220L bê tông mỗi mẻ.

## 2. Loại Động Cơ

| Động cơ | Phù hợp nhất |
|---------|--------------|
| Điện (2.2–5.5 kW, 220V) | Công trình cố định có điện lưới |
| Xăng (GP160/GP200, 5.5–6.5 Hp) | Công trình di động hoặc bán cố định |
| Diesel (CAOFONG, 8–12 Hp) | Hạng nặng, không có điện |

## 3. Cấu Hình Bánh Xe

- **2 bánh** — nhẹ hơn, dễ di chuyển trong không gian hẹp
- **4 bánh** — ổn định hơn trên địa hình gồ ghề

Lốp hơi (5.00-12) giảm chấn tốt hơn. Lốp đặc (4.00-8) không cần bảo trì và không bao giờ xẹp — phổ biến ở các thị trường có ít dịch vụ sửa lốp.

## 4. Độ Dày Tang Trống

Tại Phú Long, chúng tôi dùng tang trên 2mm / tang dưới 2.5mm cho 250–350L, và 2.5mm / 3mm cho 450–500L. Tang dày hơn = tuổi thọ dài hơn.

## Tóm Lại

Khớp model với hạ tầng điện và quy mô công trình tại thị trường của bạn. Hầu hết khách hàng xuất khẩu của chúng tôi ở Đông Nam Á và châu Phi chọn 350L xăng — linh hoạt nhất.`,
  },
  {
    slug: 'rice-transplanter-vs-manual-planting',
    title_en: 'Rice Transplanter vs Manual Planting: A Cost Analysis',
    title_vi: 'Máy Cấy Lúa vs Cấy Tay: So Sánh Chi Phí Thực Tế',
    excerpt_en: 'Can a rice transplanter pay for itself in one season? We break down the numbers for farms of different sizes.',
    excerpt_vi: 'Máy cấy lúa có thể hoàn vốn trong một vụ không? Chúng tôi phân tích số liệu cho trang trại nhiều quy mô.',
    category: 'rice-transplanter',
    date: '2025-04-02',
    readTime: 6,
    image: '/images/products/transplanter/plsp-06-1.png',
    content_en: `Labor costs in rice farming continue to rise across Asia and Africa, making mechanization a sound investment for farms of 1 hectare and above.

## The Numbers

A skilled manual transplanting team plants roughly **0.1 hectare per person per day**. For a 5-hectare farm:
- Manual: 50 person-days × average wage = significant seasonal cost
- Machine: PLSP-06 (6-row) covers **0.095–0.12 ha/h** — a 5 ha farm finishes in under 2 days with one operator

## Coverage by Model

| Model | Rows | Output | Best for |
|-------|------|--------|----------|
| PLSP-06 | 6 | 950–1200 m²/h | 2–10 ha farms |
| PLSP-05 | 5 | 750–950 m²/h | 1–5 ha farms |
| PLSP-04 | 4 | 500–800 m²/h | Under 2 ha or test plots |
| PLHP-04 | 4 hand-pull | 360–450 m²/h | Smallholders, hilly terrain |

## Seedling Preparation

Mechanical transplanters require mat-type seedlings (raised in seedling trays). This is a slight upfront change in practice but delivers more uniform germination and healthier plants than pull-type seedlings.

Row spacing is adjustable between 20 cm and 24 cm to suit local variety requirements.

## ROI Estimate

For a 3-hectare farm with 2 planting seasons per year:
- Annual labor saving: significant versus manual team
- Machine amortized over 5–7 seasons: the math consistently favors mechanization above 2 ha

The PLHP-04 hand-pull model is the entry point for smallholders who want the consistency of mechanical planting without the cost of a fully self-propelled unit.`,

    content_vi: `Chi phí lao động trong trồng lúa ngày càng tăng, biến việc cơ giới hóa thành khoản đầu tư hợp lý cho trang trại từ 1 ha trở lên.

## Con Số Thực Tế

Một nhóm cấy tay lành nghề cấy khoảng **0.1 ha/người/ngày**. Với trang trại 5 ha:
- Cấy tay: 50 công × tiền công trung bình = chi phí đáng kể mỗi vụ
- Máy: PLSP-06 (6 hàng) phủ **0.095–0.12 ha/h** — trang trại 5 ha xong trong dưới 2 ngày với 1 người vận hành

## Năng Suất Theo Model

| Model | Hàng | Năng suất | Phù hợp |
|-------|------|-----------|---------|
| PLSP-06 | 6 | 950–1200 m²/h | Trang trại 2–10 ha |
| PLSP-05 | 5 | 750–950 m²/h | 1–5 ha |
| PLSP-04 | 4 | 500–800 m²/h | Dưới 2 ha |
| PLHP-04 | 4 kéo tay | 360–450 m²/h | Nông hộ nhỏ, ruộng dốc |

## Chuẩn Bị Mạ

Máy cấy cơ giới yêu cầu mạ khay (gieo trong khay mạ). Khoảng cách hàng điều chỉnh được 20 cm và 24 cm.

## Ước Tính Hoàn Vốn

Với trang trại 3 ha, 2 vụ/năm: tiết kiệm lao động hàng năm đáng kể. Khấu hao máy trong 5–7 vụ — con số luôn có lợi cho cơ giới hóa từ 2 ha trở lên.`,
  },
  {
    slug: 'paddy-thresher-maintenance-guide',
    title_en: 'Paddy Thresher Maintenance: 5 Tips for Long-Term Performance',
    title_vi: 'Bảo Dưỡng Máy Tuốt Lúa: 5 Mẹo Để Máy Bền Lâu',
    excerpt_en: 'Simple maintenance habits that keep threshing efficiency at ≥98% season after season — from drum cleaning to bearing checks.',
    excerpt_vi: 'Những thói quen bảo dưỡng đơn giản giúp duy trì hiệu suất tuốt ≥98% qua nhiều vụ — từ vệ sinh trống đến kiểm tra vòng bi.',
    category: 'paddy-thresher',
    date: '2025-05-10',
    readTime: 4,
    image: '/images/products/thresher/detail.jpg',
    content_en: `A paddy thresher running at 900 RPM handles enormous loads during harvest season. These five habits prevent the most common failures.

## 1. Clean the Threshing Drum After Each Session

Rice straw and chaff pack into the drum gaps. If left overnight, moisture causes rust and imbalance. Use compressed air or a stiff brush to clear all channels after each day's work.

## 2. Check Belt Tension Weekly

Loose belts cause slippage and reduce RPM below the optimal 900. A belt should deflect no more than 10–15mm under firm thumb pressure. Replace belts that show cracking or fraying — they are cheap insurance against downtime.

## 3. Lubricate Bearings Every 40 Operating Hours

The main shaft bearings take the highest load. Use a grease nipple gun with general-purpose bearing grease. Over-greasing is just as harmful as under-greasing — two pumps per bearing every 40 hours is sufficient for the PL1200 and PL2000.

## 4. Inspect the Concave Screen Before Harvest

The perforated concave screen is what separates grain from straw. Bent or clogged holes reduce the threshed rate below the ≥98% specification. Straighten bent sections with a flat punch or replace the screen panel — it is a standard spare part.

## 5. Store Off-Season with Drum Rotating Freely

Before long-term storage, clean thoroughly, coat exposed metal with a light oil film, and rotate the drum by hand to confirm it spins without resistance. Cover the machine to keep out moisture and rodents.

Following these steps, the PL800, PL1200, and PL2000 will maintain rated performance across many harvest seasons.`,

    content_vi: `Máy tuốt lúa chạy ở 900 RPM chịu tải rất lớn trong mùa thu hoạch. Năm thói quen này ngăn ngừa hỏng hóc phổ biến nhất.

## 1. Vệ Sinh Trống Tuốt Sau Mỗi Ca

Rơm và trấu nhét vào khe trống. Nếu để qua đêm, độ ẩm gây gỉ và mất cân bằng. Dùng khí nén hoặc bàn chải cứng để làm sạch tất cả các rãnh sau mỗi ngày làm việc.

## 2. Kiểm Tra Độ Căng Dây Đai Hàng Tuần

Dây đai lỏng gây trượt và giảm RPM xuống dưới 900 tối ưu. Một dây đai nên võng không quá 10–15mm khi ấn ngón tay. Thay dây đai có vết nứt hoặc sờn.

## 3. Bôi Mỡ Vòng Bi Mỗi 40 Giờ Vận Hành

Trục chính chịu tải cao nhất. Dùng súng mỡ với mỡ vòng bi đa năng. Hai bơm mỡ mỗi vòng bi mỗi 40 giờ là đủ cho PL1200 và PL2000.

## 4. Kiểm Tra Lưới Sàng Trước Vụ Thu Hoạch

Lưới sàng đục lỗ là bộ phận tách hạt khỏi rơm. Lỗ bị bẹp hoặc tắc làm giảm tỷ lệ tuốt xuống dưới ≥98%. Nắn thẳng phần bẹp hoặc thay tấm lưới.

## 5. Bảo Quản Giữa Vụ Với Trống Quay Tự Do

Trước khi bảo quản dài hạn: vệ sinh sạch, bôi một lớp dầu mỏng lên kim loại hở, quay trống bằng tay để xác nhận quay trơn. Che máy để tránh ẩm và chuột.`,
  },
  {
    slug: 'wheelbarrow-buying-guide',
    title_en: 'Wheelbarrow Buying Guide: Capacity, Materials & Use Cases',
    title_vi: 'Hướng Dẫn Mua Xe Rùa: Dung Tích, Vật Liệu & Ứng Dụng',
    excerpt_en: 'Not all wheelbarrows are equal. Steel vs plastic tray, galvanized vs painted frame — a clear guide for buyers and distributors.',
    excerpt_vi: 'Không phải xe rùa nào cũng như nhau. Thùng thép vs nhựa, khung mạ kẽm vs sơn — hướng dẫn rõ ràng cho người mua và nhà phân phối.',
    category: 'wheelbarrow',
    date: '2025-06-01',
    readTime: 4,
    image: '/images/products/wheelbarrow/wb-120l.png',
    content_en: `Wheelbarrows are one of the most price-sensitive product categories in construction supply. Getting the spec right for your market is the key to repeat orders.

## Capacity: Match to the Job

| Capacity | Best application |
|----------|-----------------|
| 50L | Light garden and small repair work |
| 70L | General construction, most popular export size |
| 80L | Medium construction sites |
| 90L | Bulk material with PP tray (cement resistant) |
| 120L | High-volume material handling |

The 70L steel tray is our highest-volume export SKU — it hits the sweet spot of capacity, weight, and price for most construction markets.

## Tray Material: Steel vs Plastic

**Steel tray:**
- Handles sharp rubble and heavy aggregate
- Can be repaired / reformed if dented
- Suitable for all materials including hot asphalt

**PP Plastic tray (90L model):**
- Does not rust — key advantage in high-humidity markets
- Lighter than steel tray of equal volume
- Resists chemical attack from cement, lime, and fertilizer
- Cannot handle sharp-edged rock loads

## Frame: Galvanized vs Powder-Coated

**Galvanized (Model 01):** The zinc coating provides excellent corrosion resistance. Preferred in coastal and tropical markets. Round-tube handles.

**Powder-coated (Model 02):** The black epoxy coating gives a clean, professional appearance. Flat handles offer better grip leverage for heavy loads. Slightly lower rust resistance than galvanized in wet environments.

## For Importers

We offer mixed-SKU container orders. A standard 20ft FCL typically carries 200–300 wheelbarrows depending on nesting configuration. MOQ is 20 units per SKU, but container orders can mix models.`,

    content_vi: `Xe rùa là một trong những danh mục sản phẩm nhạy cảm nhất về giá trong vật tư xây dựng. Chọn đúng thông số cho thị trường là chìa khóa để có đơn hàng lặp lại.

## Dung Tích: Khớp Với Công Việc

| Dung tích | Ứng dụng tốt nhất |
|-----------|------------------|
| 50L | Làm vườn nhẹ và sửa chữa nhỏ |
| 70L | Xây dựng chung, phổ biến nhất cho xuất khẩu |
| 80L | Công trường xây dựng tầm vừa |
| 90L | Vật liệu rời với thùng nhựa PP (chống xi măng) |
| 120L | Vận chuyển khối lượng lớn |

## Vật Liệu Thùng: Thép vs Nhựa

**Thùng thép:** Chịu vật liệu sắc nhọn và cốt liệu nặng. Có thể sửa chữa nếu bị móp.

**Thùng nhựa PP (model 90L):** Không gỉ — lợi thế quan trọng ở thị trường ẩm ướt. Nhẹ hơn thùng thép cùng dung tích. Chống ăn mòn hóa học từ xi măng, vôi.

## Khung: Mạ Kẽm vs Sơn Tĩnh Điện

**Mạ kẽm (Model 01):** Chống ăn mòn xuất sắc. Ưa chuộng ở thị trường ven biển và nhiệt đới. Tay cầm ống tròn.

**Sơn tĩnh điện (Model 02):** Màu đen sạch sẽ, chuyên nghiệp. Tay cầm dẹt cho lực đòn bẩy tốt hơn với tải nặng.

## Cho Nhà Nhập Khẩu

Chúng tôi hỗ trợ đơn hàng container hỗn hợp SKU. Container 20ft tiêu chuẩn chứa được 200–300 xe rùa tùy cấu hình xếp. MOQ 20 chiếc/SKU.`,
  },
  {
    slug: 'engine-options-for-construction-machinery',
    title_en: 'Understanding Engine Options for Construction Machinery',
    title_vi: 'Hiểu Rõ Các Lựa Chọn Động Cơ Cho Máy Xây Dựng',
    excerpt_en: 'Electric, gasoline, or diesel — how market infrastructure, use case, and total cost of ownership should drive your engine choice.',
    excerpt_vi: 'Điện, xăng hay diesel — cách hạ tầng thị trường, ứng dụng và tổng chi phí sở hữu nên dẫn dắt lựa chọn động cơ của bạn.',
    category: 'general',
    date: '2025-07-20',
    readTime: 5,
    image: '/images/factory/showroom.png',
    content_en: `When configuring a Phu Long concrete mixer for export, the engine is the single most market-specific choice. Here is a framework for making that decision.

## Electric Motors (ENG-ELEC)

**Specs:** 2.2–5.5 kW, 220V single-phase, 17–20 kg

**Best markets:** Urban construction, factories, permanent installations with reliable 220V grid access.

**Advantages:**
- Lowest operating cost per hour
- Zero emissions on site
- Minimal maintenance — no carburetor, no fuel filter
- Quiet operation

**Disadvantages:**
- Requires stable 220V supply — unreliable in rural markets with power cuts
- Cannot run during power outages

## Gasoline Engines (ENG-GAS: GP160 / GP200)

**Specs:** 5.5–6.5 Hp, 14.5 kg

**Best markets:** Most developing export markets — Southeast Asia, Africa, Middle East. The most widely exported configuration.

**Advantages:**
- Self-contained — no external power needed
- Widely available fuel in most markets
- Easy to service locally with standard tools
- GP160 (163cc) for 250–350L; GP200 (196cc) for 350–500L

**Disadvantages:**
- Higher operating cost than electric
- Requires regular oil changes and carburetor maintenance

## Diesel Engines (ENG-DIES: CAOFONG)

**Specs:** 8–12 Hp, ~70 kg

**Best markets:** Large construction fleets, remote infrastructure projects, areas with diesel fuel supply but no gasoline.

**Advantages:**
- Higher torque — handles continuous heavy mixing without throttle drop
- Diesel is more energy-dense than gasoline — longer run time per litre
- Preferred for 450–500L mixers under full load

**Disadvantages:**
- Heaviest option (~70 kg for the engine alone)
- Higher upfront cost
- Needs a competent mechanic for injection system service

## Decision Framework

1. **Urban market with stable power** → Electric
2. **General construction, developing markets** → Gasoline (GP160/GP200)
3. **Large-scale or remote projects** → Diesel (CAOFONG)

All Phu Long concrete mixers can be configured with any of these three engine types. Specify your engine preference at the time of order — we can also supply spare engines separately.`,

    content_vi: `Khi cấu hình máy trộn bê tông Phú Long cho xuất khẩu, động cơ là lựa chọn phụ thuộc nhiều nhất vào thị trường cụ thể.

## Động Cơ Điện (ENG-ELEC)

**Thông số:** 2.2–5.5 kW, 220V 1 pha, 17–20 kg

**Thị trường tốt nhất:** Xây dựng đô thị, nhà máy, công trình cố định có điện lưới 220V ổn định.

**Ưu điểm:** Chi phí vận hành thấp nhất. Không khí thải. Bảo trì tối thiểu. Vận hành êm.

**Nhược điểm:** Yêu cầu nguồn 220V ổn định.

## Động Cơ Xăng (ENG-GAS: GP160 / GP200)

**Thông số:** 5.5–6.5 Hp, 14.5 kg

**Thị trường tốt nhất:** Hầu hết thị trường xuất khẩu đang phát triển — Đông Nam Á, châu Phi, Trung Đông. Cấu hình xuất khẩu nhiều nhất.

**Ưu điểm:** Độc lập, không cần điện ngoài. Nhiên liệu phổ biến. Dễ bảo dưỡng tại địa phương.

**Nhược điểm:** Chi phí vận hành cao hơn điện. Cần thay dầu và bảo dưỡng bộ chế hòa khí định kỳ.

## Động Cơ Diesel (ENG-DIES: CAOFONG)

**Thông số:** 8–12 Hp, ~70 kg

**Thị trường tốt nhất:** Đội máy xây dựng lớn, dự án hạ tầng xa xôi.

**Ưu điểm:** Mô-men xoắn cao, phù hợp máy trộn 450–500L tải nặng liên tục.

**Nhược điểm:** Nặng nhất (~70 kg động cơ). Chi phí đầu vào cao hơn.

## Khung Quyết Định

1. **Thị trường đô thị có điện ổn định** → Điện
2. **Xây dựng chung, thị trường đang phát triển** → Xăng (GP160/GP200)
3. **Dự án quy mô lớn hoặc xa xôi** → Diesel (CAOFONG)`,
  },
];

export const getBlogPost = (slug: string) => blogPosts.find((p) => p.slug === slug);

export const getBlogPostsByCategory = (category: BlogPost['category']) =>
  blogPosts.filter((p) => p.category === category);
