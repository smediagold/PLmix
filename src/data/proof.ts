type Bi = { en: string; vi: string };

export const testimonials: { name: string; company: string; country: Bi; product: string; text: Bi }[] = [
  {
    name: 'James O.',
    company: 'BuildRight Ghana',
    country: { en: 'Ghana', vi: 'Ghana' },
    product: 'Concrete Mixer 350L',
    text: {
      en: 'We have imported 3 containers of the 350L concrete mixers so far. Build quality is excellent — the drum welds are clean, thickness is consistent, and the GP160 engines start on the first pull every time. Our customers on construction sites love them.',
      vi: 'Chúng tôi đã nhập 3 container máy trộn 350L. Chất lượng xây dựng tuyệt vời — đường hàn tang trống sạch sẽ, độ dày đồng đều, và động cơ GP160 khởi động ngay lần kéo đầu tiên. Khách hàng của chúng tôi trên công trường rất thích.',
    },
  },
  {
    name: 'Somsak P.',
    company: 'Agri Supplies Thailand',
    country: { en: 'Thailand', vi: 'Thái Lan' },
    product: 'Rice Transplanter PLSP-06',
    text: {
      // taste-skill-ignore: verbatim customer quote
      en: 'The PLSP-06 has been a game changer for our farmers. Two seasons in and zero mechanical failures. Row spacing is accurate, seedling pickup is smooth, and output matches the spec sheet exactly. Very reliable machine.',
      vi: 'PLSP-06 đã thay đổi hoàn toàn cho nông dân của chúng tôi. Hai vụ trôi qua mà không có sự cố cơ học nào. Khoảng cách hàng chính xác, lấy mạ mượt mà, và năng suất khớp chính xác với tờ thông số.',
    },
  },
  {
    name: 'Reza M.',
    company: 'Construction Tools Iraq',
    country: { en: 'Iraq', vi: 'Iraq' },
    product: 'Wheelbarrow 70L',
    text: {
      en: 'Ordered 500 units of the 70L galvanized wheelbarrow. Arrived on time, well-packed, and the finish is better than competitors we tried before. The galvanized frame holds up perfectly in the dusty conditions here. Reordering next month.',
      vi: 'Đặt 500 chiếc xe rùa 70L mạ kẽm. Đến đúng hạn, đóng gói tốt, và lớp hoàn thiện tốt hơn đối thủ cạnh tranh chúng tôi đã thử trước đây. Khung mạ kẽm hoạt động hoàn hảo trong điều kiện bụi bặm ở đây.',
    },
  },
  {
    name: 'Ahmad N.',
    company: 'Farm Equipment Bangladesh',
    country: { en: 'Bangladesh', vi: 'Bangladesh' },
    product: 'Paddy Thresher PL2000',
    text: {
      en: 'The PL2000 threshes at over 2500 kg/h consistently. Grain loss is minimal — our farmers noticed immediately the difference compared to older machines. Andy provided full technical support during setup. Phu Long is a partner we trust.',
      vi: 'PL2000 tuốt ổn định trên 2500 kg/h. Thất thoát hạt tối thiểu — nông dân của chúng tôi nhận ra ngay sự khác biệt so với máy cũ. Andy hỗ trợ kỹ thuật đầy đủ trong quá trình lắp đặt.',
    },
  },
  {
    name: 'Carlos V.',
    company: 'Obras El Salvador',
    country: { en: 'El Salvador', vi: 'El Salvador' },
    product: 'Multiple SKUs',
    text: {
      en: 'We have been working with Phu Long for 4 years. What sets them apart is not just the product quality — it is the service. Custom colors, OEM branding, flexible mix of SKUs per container. They respond fast and deliver what they promise. A genuine long-term partner.',
      vi: 'Chúng tôi đã hợp tác với Phú Long 4 năm. Điều làm họ nổi bật không chỉ là chất lượng sản phẩm — mà còn là dịch vụ. Màu sắc tùy chỉnh, thương hiệu OEM, hỗn hợp SKU linh hoạt mỗi container. Họ phản hồi nhanh và thực hiện đúng lời hứa.',
    },
  },
  {
    name: 'David K.',
    company: 'Nairobi Tools Ltd',
    country: { en: 'Kenya', vi: 'Kenya' },
    product: 'Concrete Mixer 250L',
    text: {
      en: 'The 250L solid-tyre mixers are perfect for the Kenyan market. Easy to move around sites, the electric motor works reliably on our local grid, and spare parts are simple enough to source locally. Our wholesale customers reorder every season.',
      vi: 'Máy trộn 250L lốp đặc hoàn hảo cho thị trường Kenya. Dễ di chuyển quanh công trường, động cơ điện hoạt động đáng tin cậy trên lưới điện địa phương, và phụ tùng đủ đơn giản để tìm kiếm tại địa phương.',
    },
  },
];

export const markets: { region: Bi; countries: { name: string; code: string }[] }[] = [
  { region: { en: 'Southeast Asia', vi: 'Đông Nam Á' }, countries: [{ name: 'Indonesia', code: 'id' }, { name: 'Philippines', code: 'ph' }, { name: 'Myanmar', code: 'mm' }, { name: 'Cambodia', code: 'kh' }, { name: 'Laos', code: 'la' }] },
  { region: { en: 'South Asia', vi: 'Nam Á' }, countries: [{ name: 'Bangladesh', code: 'bd' }, { name: 'India', code: 'in' }, { name: 'Pakistan', code: 'pk' }, { name: 'Sri Lanka', code: 'lk' }] },
  { region: { en: 'Africa', vi: 'Châu Phi' }, countries: [{ name: 'Ghana', code: 'gh' }, { name: 'Tanzania', code: 'tz' }, { name: 'Uganda', code: 'ug' }, { name: 'South Africa', code: 'za' }, { name: 'Nigeria', code: 'ng' }] },
  { region: { en: 'Middle East', vi: 'Trung Đông' }, countries: [{ name: 'UAE', code: 'ae' }, { name: 'Saudi Arabia', code: 'sa' }, { name: 'Iraq', code: 'iq' }, { name: 'Yemen', code: 'ye' }] },
  { region: { en: 'Pacific', vi: 'Thái Bình Dương' }, countries: [{ name: 'Papua New Guinea', code: 'pg' }, { name: 'Australia', code: 'au' }] },
  { region: { en: 'Americas', vi: 'Châu Mỹ' }, countries: [{ name: 'El Salvador', code: 'sv' }, { name: 'Guatemala', code: 'gt' }, { name: 'USA (Texas)', code: 'us' }] },
];

export const orders: { src: string; caption: Bi; load: Bi; w: number; h: number }[] = [
  { src: '/images/orders/order-1.jpg', caption: { en: 'Concrete mixers loaded for export', vi: 'Đóng container máy trộn bê tông' }, load: { en: 'Concrete mixers', vi: 'Máy trộn' }, w: 3, h: 4 },
  { src: '/images/orders/order-2.jpg', caption: { en: 'Mixed container, machinery and GP160 engines', vi: 'Container hỗn hợp máy móc và động cơ GP160' }, load: { en: 'Mixed load', vi: 'Hàng ghép' }, w: 3, h: 4 },
  { src: '/images/orders/order-3.jpg', caption: { en: 'Concrete mixers with GP160 engines', vi: 'Máy trộn kèm động cơ GP160' }, load: { en: 'Mixers + engines', vi: 'Máy trộn + động cơ' }, w: 3, h: 4 },
  { src: '/images/orders/order-4.jpg', caption: { en: 'Wheelbarrows and electric motors', vi: 'Xe rùa và động cơ điện' }, load: { en: 'Wheelbarrows', vi: 'Xe rùa' }, w: 3, h: 4 },
  { src: '/images/orders/order-5.jpg', caption: { en: 'Concrete mixers with diesel engines', vi: 'Máy trộn kèm động cơ diesel' }, load: { en: 'Mixers + diesel', vi: 'Máy trộn + diesel' }, w: 3, h: 4 },
  { src: '/images/orders/order-6.jpg', caption: { en: 'Blue concrete mixers, container IAAU 174407', vi: 'Máy trộn màu xanh, container IAAU 174407' }, load: { en: 'Custom colour', vi: 'Màu theo yêu cầu' }, w: 3, h: 4 },
];
