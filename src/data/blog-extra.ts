import type { BlogPost } from './blog';

export const extraPosts: BlogPost[] = [
  {
    slug: 'stirrup-bending-machine-normal-vs-servo',
    title_en: 'Stirrup Bending Machine: Normal Motor vs Servo PLC',
    title_vi: 'Máy Uốn Đai Thép: Động Cơ Thường Hay Servo PLC?',
    excerpt_en: 'How automatic stirrup benders cut labour and steel waste on site, and when the normal-motor or the servo PLC model is the better fit.',
    excerpt_vi: 'Máy uốn đai tự động giúp giảm nhân công và hao hụt thép ra sao, và khi nào nên chọn bản động cơ thường hay bản servo PLC.',
    category: 'stirrup-bending',
    date: '2025-08-19',
    readTime: 6,
    image: '/images/heroes/stirrup-bending-machines.jpg',
    content_en: `Every reinforced concrete column and beam needs stirrups, often thousands of them on a single floor. On many sites they are still bent by hand, one at a time. An automatic stirrup bending machine feeds, straightens, bends and cuts the bar in one cycle, and it changes the economics of rebar work quickly.

## Why Manual Stirrup Bending Costs More Than It Looks

Hand bending looks cheap because the tools cost almost nothing. The real costs sit elsewhere:

- **Labour time** — each stirrup needs measuring, several bends and a cut. Output depends on the worker and falls as the day goes on.
- **Inconsistent dimensions** — a few millimetres of error per side adds up. Stirrups that are too big lose concrete cover; stirrups that are too small will not fit around the main bars.
- **Offcuts and rework** — mistakes are cut out and thrown away, and leftover bar ends pile up.
- **Fatigue and injury** — repetitive bending is hard on hands, wrists and backs.

## What an Automatic Machine Does Differently

The operator enters the shape and dimensions on a touchscreen. The machine pulls bar from the coil or straight length, straightens it through rollers, makes each bend at the programmed angle, and cuts the finished stirrup. Every piece comes out the same, which makes fixing on site faster and inspection easier.

Because the bar is measured by the machine rather than marked by hand, cutting lengths are consistent and offcuts are reduced. On a large project, small savings per stirrup add up to a meaningful amount of steel.

## Normal Motor Model

Our normal-motor stirrup bender is the workhorse version:

- Plain and deformed steel from **6 to 10 mm**
- Shapes: V, rectangle, triangle, hexagon, spiral or custom
- Stirrup size from **7 cm up to 110 cm**
- Three **1.5 kW** motors for feeding, cutting and bending
- **14–15 stirrups per minute** on a 14 × 14 cm stirrup
- 220 VAC single phase, with 3-phase as an option; 270 kg

It suits contractors and rebar yards producing large quantities of standard column and beam stirrups.

## Servo Motor Model with PLC

The servo version targets precision and size range:

- Same **6–10 mm** bar range, plain or deformed
- Shapes: square, rectangle, C-shape, triangle, spiral, round or custom
- Stirrup size from **55 mm up to 1,200 mm**
- **PLC programming with HMI touchscreen** for storing and recalling shapes
- **Auto stop** when the steel runs out
- Productivity of **2.5–5 tons per day**; 220 V single phase; 250 kg

Servo drives position each bend more accurately than a standard motor, which matters for large or unusual shapes and for projects with tight dimensional checks.

## How to Choose

- **High volume of standard stirrups** — the normal-motor model gives strong output at a lower price.
- **Large stirrups, many shapes, or strict tolerances** — the servo PLC model is the safer choice.
- **Weak or unstable power supply** — both run on 220 V single phase; ask us about the 3-phase option for the normal-motor model.
- **Rental fleets and rebar workshops** — the servo model's stored programs make job changeovers faster.

## Practical Tips for Site Use

- Keep feeding rollers clean and check them for wear; worn rollers cause slipping and length errors.
- Run a test piece and measure it each time you change bar size or shape.
- Train two operators per machine so production does not stop when one is absent.

Not sure which version fits your market? Send us your typical bar sizes and stirrup dimensions on WhatsApp at +84 946 964 669, or use our quote form, and we will recommend a configuration.`,
    content_vi: `Mỗi cột và dầm bê tông cốt thép đều cần đai, có khi hàng nghìn chiếc chỉ trong một sàn. Ở nhiều công trình, đai vẫn được uốn tay từng chiếc. Máy uốn đai tự động nạp, nắn, uốn và cắt thép trong một chu trình, và thay đổi bài toán chi phí gia công thép khá nhanh.

## Vì Sao Uốn Đai Thủ Công Tốn Hơn Bạn Nghĩ

Uốn tay trông có vẻ rẻ vì dụng cụ gần như không tốn tiền. Chi phí thật nằm ở chỗ khác:

- **Thời gian lao động** — mỗi chiếc đai cần đo, uốn nhiều lần và cắt. Năng suất phụ thuộc tay nghề và giảm dần về cuối ngày.
- **Kích thước không đồng đều** — sai vài milimét mỗi cạnh cộng dồn lại. Đai to quá làm mất lớp bê tông bảo vệ, đai nhỏ quá thì không lồng được thép chủ.
- **Đầu thừa và làm lại** — đai lỗi bị cắt bỏ, đầu thép vụn chất đống.
- **Mệt mỏi và chấn thương** — động tác lặp lại gây hại cho tay, cổ tay và lưng.

## Máy Tự Động Làm Khác Thế Nào

Người vận hành nhập hình dạng và kích thước trên màn hình cảm ứng. Máy kéo thép, nắn thẳng qua cụm con lăn, uốn từng góc theo chương trình rồi cắt thành đai hoàn chỉnh. Các chiếc đai giống hệt nhau, giúp lắp dựng nhanh hơn và nghiệm thu dễ hơn.

Do chiều dài thép được máy đo thay vì đánh dấu bằng tay, chiều dài cắt ổn định và đầu thừa giảm. Ở dự án lớn, phần tiết kiệm nhỏ trên mỗi chiếc đai cộng lại thành lượng thép đáng kể.

## Bản Động Cơ Thường

Máy uốn đai động cơ thường là phiên bản chủ lực:

- Thép trơn và thép gai từ **6 đến 10 mm**
- Hình dạng: chữ V, chữ nhật, tam giác, lục giác, xoắn ốc hoặc theo yêu cầu
- Kích thước đai từ **7 cm đến 110 cm**
- Ba động cơ **1,5 kW** cho nạp, cắt và uốn
- **14–15 đai/phút** với đai 14 × 14 cm
- Điện 220 VAC một pha, tùy chọn ba pha; nặng 270 kg

Phù hợp nhà thầu và xưởng gia công thép sản xuất số lượng lớn đai cột, đai dầm tiêu chuẩn.

## Bản Động Cơ Servo Điều Khiển PLC

Bản servo hướng tới độ chính xác và dải kích thước rộng:

- Cùng dải thép **6–10 mm**, trơn hoặc gai
- Hình dạng: vuông, chữ nhật, chữ C, tam giác, xoắn ốc, tròn hoặc theo yêu cầu
- Kích thước đai từ **55 mm đến 1.200 mm**
- **Lập trình PLC với màn hình HMI cảm ứng**, lưu và gọi lại các mẫu đai
- **Tự dừng** khi hết thép
- Năng suất **2,5–5 tấn/ngày**; điện 220 V một pha; nặng 250 kg

Động cơ servo định vị từng góc uốn chính xác hơn động cơ thường, rất quan trọng với đai cỡ lớn, hình dạng đặc biệt và công trình kiểm tra kích thước khắt khe.

## Cách Lựa Chọn

- **Sản lượng lớn đai tiêu chuẩn** — bản động cơ thường cho năng suất cao với giá thấp hơn.
- **Đai cỡ lớn, nhiều hình dạng hoặc dung sai chặt** — bản servo PLC là lựa chọn an toàn hơn.
- **Nguồn điện yếu hoặc không ổn định** — cả hai đều chạy 220 V một pha; hãy hỏi chúng tôi về tùy chọn ba pha cho bản động cơ thường.
- **Đội máy cho thuê và xưởng gia công thép** — chương trình lưu sẵn của bản servo giúp chuyển đổi công việc nhanh hơn.

## Lưu Ý Khi Sử Dụng Tại Công Trường

- Giữ cụm con lăn nạp thép sạch và kiểm tra độ mòn; con lăn mòn gây trượt và sai chiều dài.
- Chạy thử một chiếc và đo lại mỗi khi đổi cỡ thép hoặc hình dạng đai.
- Đào tạo hai người vận hành cho mỗi máy để sản xuất không bị gián đoạn.

Chưa chắc phiên bản nào hợp với thị trường của bạn? Gửi cho chúng tôi cỡ thép và kích thước đai thường dùng qua WhatsApp +84 946 964 669, hoặc điền form báo giá, chúng tôi sẽ đề xuất cấu hình phù hợp.`,
  },
  {
    slug: 'centrifugal-vs-axial-industrial-fans',
    title_en: 'Centrifugal vs Axial Fans: How to Choose the Right One',
    title_vi: 'Quạt Ly Tâm Hay Quạt Hướng Trục: Chọn Loại Nào?',
    excerpt_en: 'Airflow or pressure? A plain-language guide to choosing between centrifugal and axial industrial fans for ducts, extraction and ventilation.',
    excerpt_vi: 'Cần lưu lượng hay áp suất? Hướng dẫn dễ hiểu để chọn giữa quạt ly tâm và quạt hướng trục cho đường ống, hút khí và thông gió.',
    category: 'industrial-fan',
    date: '2025-10-07',
    readTime: 6,
    image: '/images/heroes/industrial-fans.jpg',
    content_en: `Buyers often ask for "a big fan" and give a single number: airflow. But the right fan depends just as much on the resistance the air has to push through. That one question usually decides between a centrifugal fan and an axial fan.

## Two Numbers That Matter: Airflow and Pressure

- **Airflow** (m³/h) is how much air the fan moves.
- **Pressure** (Pa) is how hard the fan can push that air against resistance — ducts, bends, filters, dampers, hoods and grilles.

A fan always runs at the point where its own curve meets the resistance of the system. A fan rated for a large airflow in open air can deliver far less once it is connected to a long duct with a filter. That is why both numbers must be checked together.

## How Axial Fans Work

In an axial fan, air passes straight through the blades, parallel to the shaft — like a propeller. Axial fans are good at moving a lot of air over a short path with little resistance. They are generally lighter, more compact and less expensive for the same airflow.

Typical uses:
- General ventilation of warehouses, workshops and construction sites
- Fresh-air supply and hot-air extraction through a wall or short duct
- Cooling and drying areas

Our **PLAX 204** axial fan covers **3,900–90,075 m³/h** at **80–877 Pa**, with motors from 0.25 to 22 kW, in round duct, stand-mounted and box housings.

## How Centrifugal Fans Work

A centrifugal fan draws air into the centre of an impeller, turns it 90 degrees and throws it outward into a scroll housing. This builds much higher pressure, so centrifugal fans keep delivering airflow through long ducts, filters and hoods. They also handle dusty, hot or contaminated air better and are easier to fit with silencers.

Our centrifugal range covers three designs:
- **PLCF 101, forward-curved blades** — 650–57,600 m³/h at 210–2,960 Pa. Quiet ventilation and odour extraction for hotels, restaurants, factories and public buildings.
- **PLCF 121, heavy-duty flat blades** — 400–80,000 m³/h at 120–3,187 Pa. Air recirculation and smoke ventilation; the bolted housing opens for maintenance.
- **PLCF 152, high pressure** — 292–63,305 m³/h at 1,308–15,034 Pa. Forced draught for furnaces, mining tunnels and pneumatic conveying of grain, slag or coal.

## A Simple Way to Decide

- **Short path, open air, mostly volume** — choose axial.
- **Ductwork, filters, kitchen hoods or dust collection** — choose centrifugal.
- **Conveying material or feeding air into a furnace** — choose high-pressure centrifugal.
- **Hot, dusty or corrosive air** — usually centrifugal, with a stainless SUS 304 option where corrosion is a concern.

## Other Points to Check

- **Power supply** — our PLCF and PLAX fans run on 380 V, 3-phase. Confirm your site supply before ordering.
- **Drive** — direct drive is compact with fewer parts; belt drive lets you adjust speed by changing pulleys and is common on larger units.
- **Material** — SS400 steel for general duty, SUS 304 stainless for humid, food or chemical environments.
- **Noise** — larger, slower fans are usually quieter than small fast ones at the same airflow.

## Give Us the System, Not Just the Number

The fastest way to get the right fan is to describe the job: what space or equipment you are ventilating, how long the duct is, whether there is a filter or hood, and the air temperature. With that, we can match a model to your operating point instead of guessing.

Send the details on WhatsApp at +84 946 964 669 or through our quote form, and we will come back with a recommended model and configuration.`,
    content_vi: `Khách hàng thường hỏi mua "một cái quạt thật to" và chỉ đưa ra một con số: lưu lượng gió. Nhưng chọn đúng quạt còn phụ thuộc vào lực cản mà dòng khí phải vượt qua. Câu hỏi này thường quyết định nên dùng quạt ly tâm hay quạt hướng trục.

## Hai Con Số Quan Trọng: Lưu Lượng Và Áp Suất

- **Lưu lượng** (m³/h) là lượng không khí quạt di chuyển được.
- **Áp suất** (Pa) là khả năng quạt đẩy dòng khí vượt qua lực cản — đường ống, co nối, bộ lọc, van gió, chụp hút và miệng gió.

Quạt luôn làm việc tại điểm mà đường đặc tính của quạt gặp đường đặc tính lực cản của hệ thống. Một chiếc quạt có lưu lượng lớn khi thổi tự do có thể chỉ còn một phần khi nối vào đường ống dài có bộ lọc. Vì vậy phải xem cả hai con số cùng lúc.

## Quạt Hướng Trục Hoạt Động Thế Nào

Ở quạt hướng trục, không khí đi thẳng qua cánh, song song với trục — giống như cánh quạt máy bay. Loại này mạnh về di chuyển khối lượng gió lớn trên quãng đường ngắn, ít lực cản. Quạt hướng trục thường nhẹ hơn, gọn hơn và rẻ hơn với cùng lưu lượng.

Ứng dụng điển hình:
- Thông gió chung cho kho, xưởng và công trường
- Cấp gió tươi và hút khí nóng qua tường hoặc ống ngắn
- Làm mát và sấy khô

Quạt hướng trục **PLAX 204** của chúng tôi có lưu lượng **3.900–90.075 m³/h**, áp suất **80–877 Pa**, động cơ 0,25–22 kW, với các kiểu ống tròn, chân đứng và hộp vuông.

## Quạt Ly Tâm Hoạt Động Thế Nào

Quạt ly tâm hút khí vào tâm bánh công tác, đổi hướng 90 độ và đẩy ra ngoài vào vỏ xoắn ốc. Cách này tạo áp suất cao hơn nhiều, nên quạt ly tâm vẫn giữ được lưu lượng qua đường ống dài, bộ lọc và chụp hút. Chúng cũng chịu được khí bụi, khí nóng hoặc khí bẩn tốt hơn và dễ lắp bộ tiêu âm.

Dòng quạt ly tâm của chúng tôi gồm ba thiết kế:
- **PLCF 101, cánh cong tiến** — 650–57.600 m³/h, 210–2.960 Pa. Thông gió êm và hút mùi cho khách sạn, nhà hàng, nhà xưởng, công trình công cộng.
- **PLCF 121, cánh phẳng hạng nặng** — 400–80.000 m³/h, 120–3.187 Pa. Tuần hoàn không khí và hút khói; vỏ lắp bulong dễ mở để bảo trì.
- **PLCF 152, cao áp** — 292–63.305 m³/h, 1.308–15.034 Pa. Cấp gió cưỡng bức cho lò đốt, hầm mỏ và vận chuyển vật liệu dạng hạt như lúa, xỉ, than.

## Cách Quyết Định Đơn Giản

- **Quãng ngắn, không gian mở, chủ yếu cần lưu lượng** — chọn quạt hướng trục.
- **Có đường ống, bộ lọc, chụp hút bếp hoặc hút bụi** — chọn quạt ly tâm.
- **Vận chuyển vật liệu hoặc cấp gió cho lò** — chọn quạt ly tâm cao áp.
- **Khí nóng, nhiều bụi hoặc ăn mòn** — thường là quạt ly tâm, có tùy chọn inox SUS 304 khi lo ngại ăn mòn.

## Những Điểm Khác Cần Kiểm Tra

- **Nguồn điện** — quạt PLCF và PLAX dùng điện 380 V ba pha. Hãy xác nhận nguồn điện tại công trình trước khi đặt hàng.
- **Kiểu truyền động** — truyền động trực tiếp gọn và ít chi tiết; truyền động dây đai cho phép đổi tốc độ bằng cách thay pu-li, phổ biến ở quạt lớn.
- **Vật liệu** — thép SS400 cho điều kiện thông thường, inox SUS 304 cho môi trường ẩm, thực phẩm hoặc hóa chất.
- **Độ ồn** — với cùng lưu lượng, quạt lớn quay chậm thường êm hơn quạt nhỏ quay nhanh.

## Hãy Mô Tả Hệ Thống, Không Chỉ Một Con Số

Cách nhanh nhất để có đúng quạt là mô tả công việc: thông gió cho không gian hay thiết bị nào, đường ống dài bao nhiêu, có bộ lọc hay chụp hút không, nhiệt độ khí là bao nhiêu. Khi có đủ thông tin, chúng tôi chọn model khớp với điểm làm việc thay vì phỏng đoán.

Gửi thông tin qua WhatsApp +84 946 964 669 hoặc form báo giá, chúng tôi sẽ phản hồi với model và cấu hình đề xuất.`,
  },
  {
    slug: 'warehouse-factory-ventilation-fan-sizing',
    title_en: 'Warehouse and Factory Ventilation: Fan Sizing Basics',
    title_vi: 'Thông Gió Nhà Kho, Nhà Xưởng: Cách Tính Chọn Quạt',
    excerpt_en: 'Air changes per hour, airflow in m³/h and where to place fans — a simple method for cooling and ventilating warehouses and factories.',
    excerpt_vi: 'Số lần trao đổi khí mỗi giờ, lưu lượng m³/h và vị trí đặt quạt — cách tính đơn giản để làm mát và thông gió kho, xưởng.',
    category: 'industrial-fan',
    date: '2026-01-13',
    readTime: 6,
    image: '/images/products/industrial-fan/plpf-photo-1.jpg',
    content_en: `Hot, stuffy buildings slow people down, damage stock and shorten the life of motors and electronics. Good ventilation does not have to be complicated. With a tape measure and a little arithmetic you can size a fan system that makes a real difference.

## Step 1: Work Out the Volume

Multiply length × width × average height. A warehouse 40 m long, 20 m wide and 8 m high holds:

- 40 × 20 × 8 = **6,400 m³** of air

## Step 2: Choose an Air Change Rate

An **air change per hour (ACH)** means replacing the whole volume of air in the building once an hour. The airflow you need is simply:

- **Required airflow (m³/h) = volume (m³) × ACH**

The right ACH depends on what is happening inside. A cool storage building with few people needs very little. A hot workshop with machines, welding or a metal roof in a tropical climate needs much more, because the fans are removing heat as well as stale air. Published rules of thumb vary widely and local building codes take priority, so treat any figure as a starting point and increase it where heat, fumes or dust are present.

For our example, at 15 air changes per hour:

- 6,400 × 15 = **96,000 m³/h**

## Step 3: Pick the Right Type of Fan

Different fans do different jobs. Most buildings need a combination.

**Square exhaust fans (PLQF)** — wall-mounted with shutters, sizes from 400 to 1,380 mm, **5,000–44,500 m³/h** per unit, 180–1,100 W. They pull hot air out and draw fresh air in through openings on the opposite wall. In the example above, three or four large units would cover the target, depending on the size chosen.

**Axial fans (PLAX 204)** — **3,900–90,075 m³/h**, in round duct, stand-mounted or box housings. Useful where you need more pressure than a wall fan, a short duct, or a high-volume fresh-air supply.

**Large portable fans (PLPF)** — 1,500–2,000 mm aluminium blades, **41,500–80,200 m³/h**, a throw of 5–20 m, only 450–550 W on 220 V single phase. These do not replace exhaust ventilation; they create air movement across people and work areas, which makes a hot space feel noticeably cooler. They are on castors, so they can follow the work.

## Step 4: Plan the Airflow Path

Where the air goes matters as much as how much you move:

- **Exhaust high, supply low** — hot air rises, so place exhaust fans high on the wall or near the roof and fresh-air openings lower down.
- **Cross the building** — put exhaust fans on one side and inlets on the opposite side so air sweeps through the whole space.
- **Avoid short-circuits** — inlets right next to exhaust fans let air loop back without ventilating the room.
- **Give the air a way in** — exhaust fans cannot remove air that cannot enter. Make sure doors, louvres or inlet openings are large enough.
- **Spot cooling** — add portable fans where people work in fixed positions, such as packing lines or loading docks.

## Step 5: Check Power and Running Cost

PLQF and PLAX fans run on 380 V, 3-phase; PLPF portable fans on 220 V single phase. Large, slow fans generally give more airflow per watt than small, fast ones, which keeps electricity bills down when fans run all day.

## Quick Checklist

- Building dimensions and roof type
- Main heat sources: machines, ovens, people, sun on the roof
- Any dust, fumes or odours to remove
- Available power supply
- Existing doors and openings

Send us these details on WhatsApp at +84 946 964 669 or through our quote form. We will suggest a fan mix and quantity for your building and quote it.`,
    content_vi: `Nhà kho, nhà xưởng nóng bức làm giảm năng suất, hư hại hàng hóa và rút ngắn tuổi thọ động cơ, thiết bị điện tử. Thông gió tốt không nhất thiết phức tạp. Chỉ với thước đo và vài phép tính, bạn có thể chọn được hệ thống quạt mang lại hiệu quả rõ rệt.

## Bước 1: Tính Thể Tích

Nhân dài × rộng × chiều cao trung bình. Một nhà kho dài 40 m, rộng 20 m, cao 8 m có:

- 40 × 20 × 8 = **6.400 m³** không khí

## Bước 2: Chọn Số Lần Trao Đổi Khí

**Một lần trao đổi khí mỗi giờ (ACH)** nghĩa là thay toàn bộ thể tích không khí trong nhà một lần trong một giờ. Lưu lượng cần thiết được tính đơn giản:

- **Lưu lượng cần (m³/h) = thể tích (m³) × ACH**

Số ACH phù hợp phụ thuộc vào hoạt động bên trong. Kho lưu trữ mát, ít người cần rất ít. Xưởng nóng có máy móc, hàn, hoặc mái tôn ở vùng nhiệt đới cần nhiều hơn hẳn, vì quạt phải thải cả nhiệt lẫn khí cũ. Các khuyến nghị kinh nghiệm khác nhau khá nhiều và quy chuẩn xây dựng địa phương luôn được ưu tiên, vì vậy hãy coi mọi con số là điểm xuất phát và tăng lên khi có nguồn nhiệt, khói hoặc bụi.

Với ví dụ trên, ở mức 15 lần trao đổi khí mỗi giờ:

- 6.400 × 15 = **96.000 m³/h**

## Bước 3: Chọn Đúng Loại Quạt

Mỗi loại quạt làm một việc khác nhau. Phần lớn công trình cần kết hợp vài loại.

**Quạt thông gió vuông (PLQF)** — gắn tường, có lá chớp, cỡ 400–1.380 mm, **5.000–44.500 m³/h** mỗi chiếc, công suất 180–1.100 W. Quạt hút khí nóng ra và kéo gió tươi vào qua các cửa ở tường đối diện. Trong ví dụ trên, ba đến bốn quạt cỡ lớn là đủ đạt mục tiêu, tùy kích thước chọn.

**Quạt hướng trục (PLAX 204)** — **3.900–90.075 m³/h**, kiểu ống tròn, chân đứng hoặc hộp vuông. Hữu ích khi cần áp suất cao hơn quạt gắn tường, có đoạn ống ngắn, hoặc cần cấp gió tươi lưu lượng lớn.

**Quạt di động cỡ lớn (PLPF)** — cánh hợp kim nhôm 1.500–2.000 mm, **41.500–80.200 m³/h**, tầm thổi 5–20 m, chỉ 450–550 W điện 220 V một pha. Loại này không thay thế quạt hút; nó tạo luồng gió thổi qua người và khu vực làm việc, giúp không gian nóng cảm thấy mát hơn rõ rệt. Có bánh xe nên dễ di chuyển theo vị trí làm việc.

## Bước 4: Bố Trí Đường Đi Của Gió

Gió đi đâu cũng quan trọng như lượng gió:

- **Hút cao, cấp thấp** — khí nóng bốc lên, nên đặt quạt hút cao trên tường hoặc gần mái, cửa lấy gió tươi ở thấp.
- **Thổi xuyên nhà** — đặt quạt hút một bên, cửa lấy gió phía đối diện để gió quét qua toàn bộ không gian.
- **Tránh "đoản mạch" gió** — cửa lấy gió đặt sát quạt hút khiến khí quẩn lại mà không thông gió được cho phòng.
- **Cho gió có đường vào** — quạt hút không thể hút khí khi không có khí đi vào. Hãy đảm bảo cửa, lá sách hoặc ô lấy gió đủ rộng.
- **Làm mát cục bộ** — bổ sung quạt di động ở vị trí người làm việc cố định như dây chuyền đóng gói hay khu bốc xếp.

## Bước 5: Kiểm Tra Nguồn Điện Và Chi Phí Vận Hành

Quạt PLQF và PLAX dùng điện 380 V ba pha; quạt di động PLPF dùng 220 V một pha. Quạt lớn quay chậm thường cho nhiều gió hơn trên mỗi watt so với quạt nhỏ quay nhanh, giúp giảm tiền điện khi chạy cả ngày.

## Danh Sách Thông Tin Cần Chuẩn Bị

- Kích thước công trình và loại mái
- Nguồn nhiệt chính: máy móc, lò, người, nắng chiếu lên mái
- Bụi, khói hoặc mùi cần loại bỏ
- Nguồn điện sẵn có
- Cửa và ô thoáng hiện có

Gửi các thông tin này qua WhatsApp +84 946 964 669 hoặc form báo giá. Chúng tôi sẽ đề xuất tổ hợp và số lượng quạt cho công trình của bạn kèm báo giá.`,
  },
  {
    slug: 'concrete-mixer-daily-maintenance-checklist',
    title_en: 'Concrete Mixer Maintenance: A Daily Care Checklist',
    title_vi: 'Bảo Dưỡng Máy Trộn Bê Tông: Checklist Hằng Ngày',
    excerpt_en: 'Drum cleaning, gear greasing, belt tension, tyres and engine oil — a practical daily and weekly checklist to keep a drum mixer working for years.',
    excerpt_vi: 'Vệ sinh thùng trộn, bôi mỡ bánh răng, căng dây đai, lốp và dầu máy — checklist hằng ngày và hằng tuần giúp máy trộn bền nhiều năm.',
    category: 'concrete-mixer',
    date: '2026-03-10',
    readTime: 5,
    image: '/images/banners/mixer-outdoor.jpg',
    content_en: `A drum concrete mixer is a simple machine, and that is exactly why it gets neglected. Most breakdowns we hear about come from the same few causes: hardened concrete in the drum, dry gears, a slipping belt or an engine run low on oil. Ten minutes a day prevents nearly all of them.

## Before You Start: The 2-Minute Check

- **Engine oil** — check the level on the dipstick with the mixer standing level. Top up with the grade in the engine manual. Never start a gasoline or diesel engine low on oil.
- **Fuel and air filter** — on dusty sites, the air filter clogs quickly. Tap it clean or replace it when it looks dark.
- **Electric motors** — inspect the cable, plug and switch for damage. Keep the motor dry and never run it with a cut or taped-over cable.
- **Guards** — make sure belt and gear guards are in place before starting.
- **Stand and wheels** — set the mixer on firm, level ground and chock the wheels.

## During Work

- **Load with the drum turning** — add water and part of the aggregate first, then cement, then the rest. This reduces sticking and strain on the drive.
- **Do not overload** — the usable batch is well below the nominal drum capacity. Overfilling spills material, strains the gears and shortens bearing life.
- **Listen** — knocking, grinding or a change in engine note is a signal to stop and look.

## After Work: Clean the Drum While It Is Wet

This is the single most important habit.

- Rinse the drum and blades immediately after the last batch, while the concrete is still soft.
- Add a few shovels of coarse gravel with water and let the drum turn for a few minutes. The gravel scours the inside. Then empty and rinse again.
- Wash concrete splashes off the gear ring, frame and engine.
- **Never hammer the drum** to knock off hardened concrete. Dents make the next batch stick even more and can crack the drum seams.
- Tip the drum mouth down after cleaning so water drains out and the drum does not rust.

Our drums use 2–3 mm steel depending on model, and keeping them clean is the best way to protect that thickness over the years.

## Weekly: Gears, Belt, Tyres and Bolts

**Gear ring and pinion** — the open gear that turns the drum is exposed to sand and cement. Wipe off old, gritty grease and apply fresh grease to the teeth. Grease mixed with sand acts like grinding paste, so clean first, then grease.

**Bearings and pivot points** — grease the drum bearing, the tilting mechanism and any grease nipples. A few pumps are enough; excess grease only collects dirt.

**Belt tension** — press the middle of the belt firmly with your thumb. It should give a little but not flap. A loose belt slips and loses drum speed; an over-tight belt wears bearings. Replace belts that are cracked, glazed or frayed.

**Tyres** — pneumatic tyres should be inflated to the pressure on the tyre sidewall; underinflated tyres make towing hard and wear quickly. Solid tyres need no air, but check them for cracks and chunks missing.

**Bolts and welds** — check that the engine mounting, drum frame and tilting handle bolts are tight. Look for cracks around welds, especially on the tow bar and axle.

## Engine Servicing

Follow the engine maker's schedule for oil changes, spark plug (gasoline) and fuel filter (diesel). Change oil more often in very hot or dusty conditions. Keep a simple logbook with hours and dates; it makes warranty and resale easier.

## Storage

For longer storage, clean the drum fully, coat bare steel with a light oil film, cover the machine, and drain or stabilise fuel according to the engine manual.

Need spare parts such as gear rings, pinions, belts or tyres for your mixers? Message us on WhatsApp at +84 946 964 669 with your model and photos, or use our quote form.`,
    content_vi: `Máy trộn bê tông dạng thùng quay là loại máy đơn giản, và chính vì vậy hay bị lơ là bảo dưỡng. Phần lớn hỏng hóc chúng tôi nhận được đến từ vài nguyên nhân quen thuộc: bê tông đóng cứng trong thùng, bánh răng khô mỡ, dây đai trượt hoặc động cơ chạy thiếu dầu. Mười phút mỗi ngày ngăn được gần như tất cả.

## Trước Khi Chạy: Kiểm Tra Trong 2 Phút

- **Dầu động cơ** — kiểm tra mức dầu bằng que thăm khi máy đứng thăng bằng. Bổ sung đúng loại dầu ghi trong sách hướng dẫn. Không bao giờ khởi động máy xăng hoặc diesel khi thiếu dầu.
- **Nhiên liệu và lọc gió** — ở công trường nhiều bụi, lọc gió tắc rất nhanh. Gõ sạch hoặc thay khi lọc chuyển màu sẫm.
- **Động cơ điện** — kiểm tra dây, phích cắm và công tắc. Giữ động cơ khô ráo, không chạy máy với dây bị đứt hoặc chỉ quấn băng dính.
- **Nắp che** — đảm bảo nắp che dây đai và bánh răng đã lắp đủ trước khi chạy.
- **Chân đế và bánh xe** — đặt máy trên nền chắc, phẳng và chèn bánh.

## Trong Khi Làm Việc

- **Nạp liệu khi thùng đang quay** — cho nước và một phần cốt liệu trước, sau đó xi măng, rồi phần còn lại. Cách này giảm bám dính và giảm tải cho bộ truyền động.
- **Không trộn quá tải** — mẻ trộn thực tế thấp hơn nhiều so với dung tích danh định. Nạp quá đầy gây tràn, quá tải bánh răng và giảm tuổi thọ vòng bi.
- **Lắng nghe máy** — tiếng gõ, tiếng rít hoặc tiếng máy thay đổi là dấu hiệu cần dừng lại kiểm tra.

## Sau Ca Làm: Rửa Thùng Khi Bê Tông Còn Ướt

Đây là thói quen quan trọng nhất.

- Xả rửa thùng và cánh trộn ngay sau mẻ cuối, khi bê tông còn mềm.
- Cho vài xẻng sỏi to cùng nước, để thùng quay vài phút. Sỏi sẽ cọ sạch thành thùng. Đổ ra và rửa lại.
- Rửa sạch vữa bắn lên vành răng, khung máy và động cơ.
- **Không dùng búa gõ thùng** để đánh bê tông đóng cứng. Vết móp khiến mẻ sau bám dính nhiều hơn và có thể làm nứt mối hàn.
- Úp miệng thùng xuống sau khi rửa để nước thoát hết, tránh gỉ.

Thùng trộn của chúng tôi dùng thép dày 2–3 mm tùy model, và giữ thùng sạch là cách tốt nhất để bảo vệ độ dày đó qua nhiều năm.

## Hằng Tuần: Bánh Răng, Dây Đai, Lốp Và Bulong

**Vành răng và bánh răng nhỏ** — cặp bánh răng hở quay thùng tiếp xúc trực tiếp với cát và xi măng. Lau sạch mỡ cũ lẫn cát rồi bôi mỡ mới lên răng. Mỡ lẫn cát hoạt động như bột mài, nên phải làm sạch trước rồi mới bôi mỡ.

**Vòng bi và các điểm xoay** — bơm mỡ cho ổ đỡ thùng, cơ cấu lật và các vú mỡ. Vài lần bơm là đủ; mỡ thừa chỉ bám thêm bụi bẩn.

**Độ căng dây đai** — ấn mạnh ngón tay vào giữa dây đai. Dây nên võng nhẹ nhưng không bị lắc lư. Dây lỏng gây trượt và giảm tốc độ thùng; dây quá căng làm mòn vòng bi. Thay dây khi bị nứt, chai bóng hoặc sờn.

**Lốp xe** — lốp hơi cần bơm đúng áp suất ghi trên thành lốp; lốp non hơi khiến kéo máy nặng và mòn nhanh. Lốp đặc không cần bơm, nhưng cần kiểm tra vết nứt và mẻ.

**Bulong và mối hàn** — kiểm tra độ chặt của bulong bệ động cơ, khung thùng và tay lật. Quan sát vết nứt quanh mối hàn, đặc biệt ở càng kéo và trục bánh.

## Bảo Dưỡng Động Cơ

Tuân theo lịch của nhà sản xuất động cơ về thay dầu, bugi (máy xăng) và lọc nhiên liệu (máy diesel). Thay dầu sớm hơn khi làm việc ở nơi rất nóng hoặc nhiều bụi. Ghi sổ theo dõi giờ chạy và ngày bảo dưỡng; điều này giúp bảo hành và bán lại dễ dàng hơn.

## Bảo Quản

Khi cất máy lâu ngày, rửa sạch thùng, phủ một lớp dầu mỏng lên phần thép trần, che máy và xử lý nhiên liệu theo hướng dẫn của động cơ.

Cần phụ tùng như vành răng, bánh răng, dây đai hoặc lốp cho máy trộn? Nhắn cho chúng tôi qua WhatsApp +84 946 964 669 kèm model và hình ảnh, hoặc điền form báo giá.`,
  },
  {
    slug: 'seedling-tray-preparation-rice-transplanter',
    title_en: 'Seedling Tray Preparation for Rice Transplanters',
    title_vi: 'Chuẩn Bị Mạ Khay Cho Máy Cấy Lúa: Hướng Dẫn Từng Bước',
    excerpt_en: 'Mud mix, seed rate, fertiliser and the right seedling height — a step-by-step guide to mat seedlings that transplant cleanly by machine.',
    excerpt_vi: 'Bùn gieo, lượng giống, bón phân và chiều cao mạ đúng chuẩn — hướng dẫn từng bước làm mạ khay để máy cấy đều và ít hỏng mạ.',
    category: 'rice-transplanter',
    date: '2026-05-05',
    readTime: 6,
    image: '/images/banners/transplanter-field.jpg',
    content_en: `A rice transplanter is only as good as the seedlings you feed it. Thin, uneven or short seedlings cause missed hills and broken plants, and farmers blame the machine. This guide follows the procedure we give to every customer who buys our PLSP and PLHP transplanters.

## Where to Raise the Seedlings

You can sow on the trays supplied with the machine, on a concrete floor, or on firm, levelled ground covered with a plastic sheet. Whichever you choose, pick a spot with plenty of sunlight. Seedlings raised in shade become weak and soft, are prone to fungal root disease and often die after transplanting.

## Step 1: Prepare the Mud

- Collect mud from a pond or river.
- Remove snails, stones and gravel. Hard objects can damage the transplanting claw.
- The mud should be thick, about the consistency of mortar, not watery.
- Mix **1 bucket of rice husk with 3 buckets of mud**. The husk keeps the mat light and helps roots knit together.

## Step 2: Prepare the Seed

Soak and incubate the seed as you normally would. Sow as soon as the sprouts are **1–2 mm** long. If roots and shoots grow longer, they tangle and break during sowing and the mat comes out uneven.

## Step 3: Sow Evenly

- Spread the mud mixture evenly and level it with a straight ruler along the edges of the seedling frame.
- Weigh the sprouted seed. The target density is **0.7–0.8 kg per m²** — for a 2 m² tray, that is **1.4–1.6 kg**.
- Scatter the seed evenly using a basket with holes. Hold a sheet of cardboard or metal at the edge as a shield so seed does not fall outside the tray.
- Sweep the surface lightly with a broom to even out the seed, then press every seed gently into the mud with a wet sponge or broom. **Do not skip this** — it is what gives even germination.
- Separate the edges with a thin knife, lift the frame and move on to the next tray. If you are not using our trays, cut the mat into sections with a cutting mould after 1–2 days.

## Step 4: Fertilise and Care

- **Never mix fertiliser into the mud.** Uneven mixing gives patchy growth, and some seedlings die from fertiliser burn.
- In the winter–spring season, dissolve about **15 g of NPK 16-16-8 in 7 litres of water** and spray once, when seedlings are **2–3 cm** tall.
- In the summer season, no fertiliser is needed; just keep the mat moist so seedlings do not wilt.
- Water to keep the mat moist and warm, but do not cover it so tightly that air cannot move.
- Use a protective net if birds or rats are a problem.

## Step 5: Know When They Are Ready

Seedlings are ready when they reach **12–14 cm**, and the best window for transplanting is **12–15 cm**. **Do not transplant seedlings shorter than 10 cm.** The claw can hit and crush small seedlings, and the press wheel finishes the damage.

Water the seedlings one day before moving them, and handle the mats gently in transport so they do not break.

## Step 6: Prepare the Field

- Plough and level the field **3–4 days** before transplanting.
- Keep **3–5 cm of water** in the field when the seedlings arrive.
- Do not let the field get too dry. Dry mud increases drag on the operator and pushes mud over the newly planted rows.

## Why It Matters

Mat seedlings at the right density and height let the machine pick a consistent number of plants for every hill. That is how a PLSP-06 can plant 950–1,200 m² per hour with an even stand, and how a PLHP-04 reaches 360–450 m² per hour for smallholders.

Distributors: we can supply seedling trays and transplanter spare parts — claws, sprockets, chains and covers — with your machine order. Ask us on WhatsApp at +84 946 964 669 or through our quote form.`,
    content_vi: `Máy cấy lúa chỉ tốt khi mạ đưa vào máy tốt. Mạ thưa, không đều hoặc quá thấp gây hụt khóm và gãy cây, và người nông dân thường đổ lỗi cho máy. Bài viết này tóm tắt quy trình chúng tôi hướng dẫn cho mọi khách hàng mua máy cấy PLSP và PLHP.

## Gieo Mạ Ở Đâu

Có thể gieo trên khay đi kèm máy, trên nền bê tông, hoặc trên nền đất cứng đã san phẳng và trải tấm nilon. Dù chọn cách nào, hãy chọn nơi đủ ánh nắng. Mạ gieo ở chỗ râm sẽ yếu, mềm, dễ bị nấm rễ và thường chết sau khi cấy.

## Bước 1: Chuẩn Bị Bùn

- Lấy bùn ao hoặc bùn sông.
- Loại bỏ ốc, đá, sỏi. Vật cứng có thể làm hỏng mấu cấy.
- Bùn phải sệt, như vữa xi măng, không được quá loãng.
- Trộn theo tỷ lệ **1 xô trấu với 3 xô bùn**. Trấu giúp tấm mạ nhẹ và rễ bện chặt hơn.

## Bước 2: Chuẩn Bị Giống

Ngâm ủ giống như bình thường. Gieo ngay khi mầm nhú khoảng **1–2 mm**. Nếu để rễ và mầm dài hơn, chúng sẽ rối, gãy khi gieo và tấm mạ không đều.

## Bước 3: Gieo Đều

- Rải hỗn hợp bùn đều, dùng thước thẳng gạt phẳng theo mép khung mạ.
- Cân lượng giống đã nảy mầm. Mật độ chuẩn là **0,7–0,8 kg/m²** — với khay 2 m², dùng **1,4–1,6 kg**.
- Dùng rổ có lỗ để rắc giống đều. Đặt tấm bìa cứng hoặc tấm kim loại ở mép làm tấm chắn để hạt không văng ra ngoài.
- Dùng chổi quét nhẹ cho hạt phân bố đều, sau đó dùng mút ướt hoặc chổi ấn nhẹ toàn bộ hạt xuống bùn. **Không được bỏ qua bước này** — đây là bước quyết định mạ mọc đều.
- Dùng dao mỏng tách mép, nhấc khung và chuyển sang khay tiếp theo. Nếu không dùng khay của chúng tôi, sau 1–2 ngày dùng khuôn cắt để chia tấm mạ.

## Bước 4: Bón Phân Và Chăm Sóc

- **Không trộn phân vào bùn.** Trộn không đều khiến mạ chỗ tốt chỗ xấu, có chỗ chết do cháy phân.
- Vụ đông xuân: hòa khoảng **15 g NPK 16-16-8 vào 7 lít nước**, phun một lần duy nhất khi mạ cao **2–3 cm**.
- Vụ hè: không cần bón phân, chỉ giữ ẩm để mạ không bị héo.
- Tưới giữ ẩm và giữ ấm, nhưng không che quá kín để không khí lưu thông.
- Dùng lưới bảo vệ nếu có chim hoặc chuột phá.

## Bước 5: Khi Nào Mạ Đủ Tiêu Chuẩn

Mạ đạt khi cao **12–14 cm**, thời điểm cấy tốt nhất là khi mạ cao **12–15 cm**. **Không cấy mạ thấp hơn 10 cm.** Mấu cấy có thể đập nát cây mạ nhỏ, và bánh nén sẽ làm hỏng thêm.

Tưới mạ một ngày trước khi chuyển ra ruộng, vận chuyển nhẹ tay để tấm mạ không bị gãy.

## Bước 6: Chuẩn Bị Ruộng

- Cày bừa và san phẳng ruộng **3–4 ngày** trước khi cấy.
- Giữ mực nước **3–5 cm** khi đưa mạ ra ruộng.
- Không để ruộng quá khô. Bùn khô làm tăng lực cản cho người vận hành và đẩy bùn tràn lên hàng vừa cấy.

## Vì Sao Điều Này Quan Trọng

Mạ khay đúng mật độ và chiều cao giúp máy bốc số cây ổn định cho mỗi khóm. Nhờ đó PLSP-06 cấy được 950–1.200 m² mỗi giờ với ruộng lúa đều, và PLHP-04 đạt 360–450 m² mỗi giờ cho nông hộ nhỏ.

Dành cho nhà phân phối: chúng tôi cung cấp khay mạ và phụ tùng máy cấy — mấu cấy, đĩa xích, xích, nắp che — cùng đơn hàng máy. Liên hệ WhatsApp +84 946 964 669 hoặc form báo giá.`,
  },
  {
    slug: 'choosing-paddy-thresher-capacity',
    title_en: 'Choosing Paddy Thresher Capacity for Your Farm',
    title_vi: 'Chọn Công Suất Máy Tuốt Lúa Phù Hợp Quy Mô Ruộng',
    excerpt_en: '500–600, 1,800–1,900 or 2,500–2,700 kg/h? How to match thresher capacity to farm size, harvest window and contract threshing work.',
    excerpt_vi: '500–600, 1.800–1.900 hay 2.500–2.700 kg/h? Cách chọn công suất máy tuốt theo diện tích, thời vụ và nhu cầu tuốt thuê.',
    category: 'paddy-thresher',
    date: '2026-07-14',
    readTime: 5,
    image: '/images/banners/threshing-field.jpg',
    content_en: `Buy a thresher that is too small and paddy waits in the field, exposed to rain, birds and shattering losses. Buy one that is too big and you pay for capacity you never use, plus a machine that is hard to move between small plots. Here is a practical way to choose.

## Start with Daily Tonnage

Capacity is quoted in kilograms of paddy per hour. To turn that into a daily figure, multiply by the hours you realistically run — feeding stops, moving the machine and breaks all count. Using an 8-hour working day as an example:

- **PL800: 500–600 kg/h** → roughly 4–4.8 tonnes per day
- **PL1200: 1,800–1,900 kg/h** → roughly 14–15 tonnes per day
- **PL2000: 2,500–2,700 kg/h** → roughly 20–21 tonnes per day

All three run at 900 RPM with a threshed rate of at least 98%. Real output depends on crop moisture, the straw-to-grain ratio of the variety and how steadily the crew feeds the machine, so plan with the lower end of each range.

## Then Work Out Your Harvest Load

Estimate how much paddy you need to thresh and how many days you have:

- **Total paddy** = area (ha) × typical yield (t/ha) in your area
- **Harvest window** = the days between the crop being ready and the risk of losses from rain or over-ripening

Divide total paddy by the number of working days and compare it with the daily figures above. Leave a margin for rain days and breakdowns.

## Matching Model to User

**PL800 — single farms and remote plots**

At 75 kg and 1,000 × 700 × 1,000 mm, the PL800 can be carried by two or three people and moved on a small cart. It suits family farms, hilly or terraced fields, and areas where larger machines cannot reach. It is also a sensible first machine for markets moving from manual threshing.

**PL1200 — medium farms and small service groups**

At 290 kg and 1,700 × 1,100 × 1,500 mm, the PL1200 gives more than three times the output of the PL800 while staying manageable on field roads. It suits larger family farms, farmer groups sharing a machine, and small operators threshing for neighbours.

**PL2000 — co-operatives and contract threshing**

At 490 kg and 2,700 × 1,100 × 1,650 mm, the PL2000 is built for volume. Contractors who move from farm to farm through the season, co-operatives serving many members and large estates get the most from it. In contract work, every extra tonne per day is extra income, so higher capacity often pays back fastest here.

## Other Factors to Consider

- **Access** — narrow bunds and soft fields favour lighter machines. Check how the machine will reach the field.
- **Power** — larger threshers need more engine power. Make sure your engine or tractor drive is matched to the model.
- **Labour** — a high-capacity thresher needs enough people to cut, carry and feed the crop. Without them, the machine waits and its capacity is wasted.
- **Transport** — for contractors, how quickly the machine can be moved and set up matters as much as its hourly rate.
- **Spare parts** — keep belts, bearings and screen panels in stock before the season starts.

## For Distributors

Many dealers stock two sizes: the PL800 for smallholders and either the PL1200 or PL2000 for co-operatives and contractors. All three models have an MOQ of 1, so a mixed first order is easy.

Tell us your market, typical farm sizes and harvest season on WhatsApp at +84 946 964 669, or use our quote form, and we will help you plan the right mix.`,
    content_vi: `Mua máy tuốt quá nhỏ thì lúa phải chờ ngoài đồng, chịu mưa, chim phá và rụng hạt. Mua máy quá lớn thì trả tiền cho công suất không dùng tới, lại khó di chuyển giữa các thửa ruộng nhỏ. Dưới đây là cách chọn thực tế.

## Bắt Đầu Từ Sản Lượng Mỗi Ngày

Công suất được tính bằng kg lúa mỗi giờ. Để quy ra mỗi ngày, nhân với số giờ chạy thực tế — thời gian dừng nạp lúa, di chuyển máy và nghỉ đều phải tính. Lấy ví dụ một ngày làm 8 giờ:

- **PL800: 500–600 kg/h** → khoảng 4–4,8 tấn/ngày
- **PL1200: 1.800–1.900 kg/h** → khoảng 14–15 tấn/ngày
- **PL2000: 2.500–2.700 kg/h** → khoảng 20–21 tấn/ngày

Cả ba model chạy ở 900 vòng/phút, tỷ lệ tuốt sạch từ 98% trở lên. Năng suất thực tế phụ thuộc độ ẩm lúa, tỷ lệ rơm/hạt của giống và việc nạp lúa có đều tay hay không, vì vậy nên tính theo mức thấp của mỗi khoảng.

## Tiếp Theo, Tính Khối Lượng Cần Tuốt

Ước tính lượng lúa cần tuốt và số ngày có thể làm:

- **Tổng lượng lúa** = diện tích (ha) × năng suất bình quân (tấn/ha) tại địa phương
- **Thời vụ thu hoạch** = số ngày từ khi lúa chín đến khi bắt đầu có nguy cơ hao hụt do mưa hoặc chín quá

Chia tổng lượng lúa cho số ngày làm việc rồi so sánh với các con số ở trên. Chừa khoảng dự phòng cho ngày mưa và sự cố máy.

## Chọn Model Theo Người Dùng

**PL800 — nông hộ và ruộng xa**

Nặng 75 kg, kích thước 1.000 × 700 × 1.000 mm, PL800 có thể do hai đến ba người khiêng hoặc chở bằng xe đẩy nhỏ. Phù hợp hộ gia đình, ruộng đồi, ruộng bậc thang và những nơi máy lớn không vào được. Đây cũng là lựa chọn hợp lý cho thị trường mới chuyển từ tuốt tay sang tuốt máy.

**PL1200 — trang trại vừa và nhóm dịch vụ nhỏ**

Nặng 290 kg, kích thước 1.700 × 1.100 × 1.500 mm, PL1200 cho năng suất gấp hơn ba lần PL800 mà vẫn dễ di chuyển trên đường nội đồng. Phù hợp hộ có diện tích lớn, nhóm nông dân dùng chung máy và người làm dịch vụ tuốt cho hàng xóm.

**PL2000 — hợp tác xã và dịch vụ tuốt thuê**

Nặng 490 kg, kích thước 2.700 × 1.100 × 1.650 mm, PL2000 được thiết kế cho sản lượng lớn. Các đội dịch vụ di chuyển từ ruộng này sang ruộng khác suốt mùa vụ, hợp tác xã phục vụ nhiều thành viên và trang trại lớn sẽ khai thác tốt nhất. Với dịch vụ tuốt thuê, mỗi tấn thêm mỗi ngày là thêm thu nhập, nên công suất cao thường hoàn vốn nhanh nhất.

## Các Yếu Tố Khác Cần Cân Nhắc

- **Đường vào ruộng** — bờ hẹp, ruộng lún phù hợp máy nhẹ. Hãy tính cách đưa máy ra ruộng.
- **Nguồn động lực** — máy tuốt lớn cần động cơ mạnh hơn. Đảm bảo động cơ hoặc đầu kéo phù hợp với model.
- **Nhân công** — máy công suất cao cần đủ người cắt, chuyển và nạp lúa. Thiếu người, máy phải chờ và công suất bị lãng phí.
- **Vận chuyển** — với đội dịch vụ, tốc độ di chuyển và lắp đặt máy quan trọng không kém năng suất mỗi giờ.
- **Phụ tùng** — chuẩn bị sẵn dây đai, vòng bi và tấm lưới sàng trước mùa vụ.

## Dành Cho Nhà Phân Phối

Nhiều đại lý nhập hai cỡ: PL800 cho nông hộ nhỏ và PL1200 hoặc PL2000 cho hợp tác xã và đội dịch vụ. Cả ba model có MOQ là 1, nên đơn hàng đầu tiên kết hợp nhiều model rất dễ dàng.

Cho chúng tôi biết thị trường, quy mô ruộng phổ biến và mùa thu hoạch qua WhatsApp +84 946 964 669 hoặc form báo giá, chúng tôi sẽ giúp bạn lên cơ cấu hàng phù hợp.`,
  },
  {
    slug: 'importing-machinery-from-vietnam-guide',
    title_en: 'Importing Machinery from Vietnam: FCL, LCL, FOB or CIF',
    title_vi: 'Nhập Khẩu Máy Móc Từ Việt Nam: FCL, LCL, FOB Hay CIF',
    excerpt_en: 'Full or shared container, mixing SKUs, OEM colour and logo, FOB versus CIF — a practical guide for first-time machinery importers.',
    excerpt_vi: 'Container nguyên hay hàng lẻ, ghép nhiều mã hàng, OEM màu và logo, FOB hay CIF — hướng dẫn thực tế cho nhà nhập khẩu máy móc.',
    category: 'general',
    date: '2026-09-22',
    readTime: 7,
    image: '/images/factory/loading-fcl.jpg',
    content_en: `Importing machinery for the first time raises the same questions every time: how much should I order, how will it ship, and who pays for what? This guide walks through the decisions we discuss with new partners before the first order.

## FCL or LCL?

**FCL (Full Container Load)** means you book a whole container — usually 20 ft, 40 ft or 40 ft high-cube — and only your goods go inside. The container is sealed at our factory and opened at your warehouse.

- Lower cost per unit once you have enough cargo
- Less handling, so less risk of damage
- Simpler customs clearance with one consignee

**LCL (Less than Container Load)** means your cargo shares a container with other shippers. It is consolidated at a warehouse, shipped, then separated at the destination.

- Good for trial orders, samples and spare parts
- You pay by volume or weight, not for a full box
- More handling and usually longer transit, as cargo waits for consolidation

For LCL, we pack machines on pallets and strap them so they survive extra handling. As a rule of thumb, once a shipment approaches half a container, it is worth asking your forwarder to compare an FCL quote.

## Mixing Products in One Container

You do not need to fill a container with one model. We regularly load mixed containers, for example concrete mixers with wheelbarrows, or threshers with rice transplanters and spare parts. Each product has its own MOQ — from 1 unit for threshers and stirrup bending machines, to 2–5 units for concrete mixers, and 20 units per wheelbarrow model — so a mixed FCL lets you test several products in your market in one shipment.

Tips for mixed loads:
- Share your target product list early; we plan the loading layout so heavy items go low and light items fill gaps.
- Nesting matters: wheelbarrow trays and mixer drums can be packed to save space.
- Add spare parts — belts, gears, claws, tyres — to the same container. It costs little extra and saves an urgent air shipment later.

## OEM: Your Colour and Your Logo

Many distributors sell under their own brand. On our concrete mixers, you can specify colour (yellow, orange, red, dark red, blue, green, grey or a custom colour), your logo and decals, wheel and tyre type, engine type and drum thickness. Send your logo file and colour reference before production so we can confirm samples and timing.

## FOB or CIF?

These are Incoterms rules published by the International Chamber of Commerce. They decide who arranges and pays for each part of the journey and where risk passes from seller to buyer.

**FOB (Free On Board)** — we deliver the goods loaded on board the vessel at the port of shipment. From there, you arrange and pay for ocean freight and insurance, and risk passes to you.
- Suits buyers who already have a forwarder or good freight rates
- Gives you control over the shipping line and schedule

**CIF (Cost, Insurance and Freight)** — we arrange and pay for freight and insurance to your destination port. Note that risk still passes to the buyer once the goods are on board at origin, and the minimum insurance required under CIF is limited cover. If you want wider cover, agree it in the contract.
- Suits first-time importers who prefer one price to their port
- Fewer parties to manage on your side

For container cargo, some buyers use FCA (Free Carrier) instead of FOB, so that risk passes when the container is handed to the carrier. Ask your forwarder which rule fits your situation.

Under either rule, you remain responsible for import duties, taxes, port charges at destination and customs clearance in your country. Check product standards, labelling and any import permits before you order.

## Before You Place the Order

- Confirm models, engines, colours and quantities in writing
- Agree the Incoterm and the named port
- Ask your customs broker for the HS codes and duty rates
- Plan spare parts for the first season

Ready to plan your first container? Send us your product list and destination port on WhatsApp at +84 946 964 669 or through our quote form, and we will prepare an FOB or CIF quotation.`,
    content_vi: `Lần đầu nhập khẩu máy móc, câu hỏi thường lặp lại: nên đặt bao nhiêu, vận chuyển thế nào, ai trả chi phí nào? Bài viết này tổng hợp các quyết định chúng tôi thường trao đổi với đối tác mới trước đơn hàng đầu tiên.

## FCL Hay LCL?

**FCL (hàng nguyên container)** nghĩa là bạn thuê nguyên một container — thường là 20 feet, 40 feet hoặc 40 feet cao — chỉ chứa hàng của bạn. Container được niêm phong tại nhà máy chúng tôi và mở tại kho của bạn.

- Chi phí trên mỗi sản phẩm thấp hơn khi đủ hàng
- Ít bốc xếp, giảm rủi ro hư hỏng
- Thông quan đơn giản hơn với một người nhận hàng

**LCL (hàng lẻ)** nghĩa là hàng của bạn đi chung container với hàng của chủ hàng khác. Hàng được gom tại kho, vận chuyển rồi tách ra tại cảng đích.

- Phù hợp đơn hàng thử, hàng mẫu và phụ tùng
- Trả tiền theo thể tích hoặc trọng lượng, không phải cả container
- Bốc xếp nhiều hơn và thường lâu hơn do chờ gom hàng

Với hàng LCL, chúng tôi đóng máy lên pallet và đai chặt để chịu được bốc xếp nhiều lần. Kinh nghiệm chung: khi lô hàng gần nửa container, nên nhờ đơn vị giao nhận so sánh thêm giá FCL.

## Ghép Nhiều Sản Phẩm Trong Một Container

Bạn không cần đóng kín container bằng một model. Chúng tôi thường xuyên đóng container ghép, ví dụ máy trộn với xe rùa, hoặc máy tuốt với máy cấy và phụ tùng. Mỗi sản phẩm có MOQ riêng — từ 1 chiếc với máy tuốt và máy uốn đai, 2–5 chiếc với máy trộn bê tông, và 20 chiếc cho mỗi model xe rùa — nên một container FCL ghép giúp bạn thử nhiều sản phẩm trên thị trường chỉ trong một chuyến.

Lưu ý khi ghép hàng:
- Gửi danh sách sản phẩm sớm; chúng tôi sẽ lên sơ đồ xếp hàng để hàng nặng ở dưới, hàng nhẹ chèn khe trống.
- Xếp lồng giúp tiết kiệm chỗ: thùng xe rùa và thùng máy trộn có thể đóng lồng vào nhau.
- Gửi kèm phụ tùng — dây đai, bánh răng, mấu cấy, lốp — trong cùng container. Chi phí thêm không đáng kể mà tránh được việc phải gửi hàng gấp bằng đường hàng không sau này.

## OEM: Màu Sắc Và Logo Của Bạn

Nhiều nhà phân phối bán hàng dưới thương hiệu riêng. Với máy trộn bê tông, bạn có thể chọn màu (vàng, cam, đỏ, đỏ đậm, xanh dương, xanh lá, xám hoặc màu theo yêu cầu), logo và tem nhãn riêng, loại bánh và lốp, loại động cơ và độ dày thùng. Hãy gửi file logo và mã màu trước khi sản xuất để chúng tôi xác nhận mẫu và tiến độ.

## FOB Hay CIF?

Đây là các điều kiện Incoterms do Phòng Thương mại Quốc tế (ICC) ban hành. Chúng quy định ai sắp xếp, ai chi trả từng chặng và rủi ro chuyển từ người bán sang người mua ở đâu.

**FOB (Giao hàng lên tàu)** — chúng tôi giao hàng đã xếp lên tàu tại cảng xuất. Từ đó, bạn thu xếp và trả cước biển, bảo hiểm, và rủi ro chuyển sang bạn.
- Phù hợp người mua đã có đơn vị giao nhận hoặc giá cước tốt
- Bạn chủ động chọn hãng tàu và lịch tàu

**CIF (Tiền hàng, bảo hiểm và cước phí)** — chúng tôi thu xếp và trả cước cùng bảo hiểm đến cảng đích. Lưu ý rủi ro vẫn chuyển sang người mua khi hàng đã lên tàu tại cảng xuất, và mức bảo hiểm tối thiểu theo CIF chỉ là mức bảo hiểm hạn chế. Nếu muốn phạm vi bảo hiểm rộng hơn, hãy thỏa thuận trong hợp đồng.
- Phù hợp nhà nhập khẩu lần đầu muốn một mức giá trọn gói đến cảng
- Bạn phải làm việc với ít bên hơn

Với hàng container, một số người mua dùng FCA (Giao cho người chuyên chở) thay vì FOB, để rủi ro chuyển giao khi container được bàn giao cho hãng vận chuyển. Hãy hỏi đơn vị giao nhận điều kiện nào phù hợp với bạn.

Dù chọn điều kiện nào, bạn vẫn chịu trách nhiệm thuế nhập khẩu, các loại phí tại cảng đích và thủ tục hải quan tại nước mình. Hãy kiểm tra tiêu chuẩn sản phẩm, quy định nhãn mác và giấy phép nhập khẩu (nếu có) trước khi đặt hàng.

## Trước Khi Đặt Hàng

- Xác nhận bằng văn bản model, động cơ, màu sắc và số lượng
- Thống nhất điều kiện Incoterm và cảng cụ thể
- Hỏi đại lý hải quan về mã HS và thuế suất
- Lên kế hoạch phụ tùng cho mùa vụ đầu tiên

Sẵn sàng lên kế hoạch container đầu tiên? Gửi danh sách sản phẩm và cảng đích qua WhatsApp +84 946 964 669 hoặc form báo giá, chúng tôi sẽ gửi báo giá FOB hoặc CIF.`,
  },
  {
    slug: 'drum-mixer-batch-size-mix-ratios',
    title_en: 'Drum Mixer Batch Size, Mix Ratios and Mixing Time',
    title_vi: 'Mẻ Trộn, Tỷ Lệ Cấp Phối Và Thời Gian Trộn Bê Tông',
    excerpt_en: 'How much concrete a drum mixer really makes per batch, common site mix ratios, the right loading order and how long to mix.',
    excerpt_vi: 'Một mẻ máy trộn thực tế được bao nhiêu bê tông, các tỷ lệ cấp phối phổ biến, thứ tự nạp liệu đúng và thời gian trộn hợp lý.',
    category: 'concrete-mixer',
    date: '2025-09-16',
    readTime: 6,
    image: '/images/mixer/feature.jpg',
    content_en: `A drum mixer's capacity is printed on the brochure, but the concrete that comes out of each batch is a different number. Understanding the gap — and loading the drum the right way — gives you stronger concrete, less waste and a machine that lasts longer.

## Drum Capacity Is Not Batch Size

The litre figure in a mixer's name, such as 350 L, describes the drum. A tilting drum mixer cannot be filled to the brim: the material needs room to fall and fold as the drum turns, and the mouth must not spill when tilted.

As a practical guide, the usable batch of mixed concrete is roughly **60–65% of the drum capacity**. For our range that means approximately:

- **250 L drum** → about 150–160 L per batch
- **350 L drum** → about 210–225 L per batch
- **450 L drum** → about 270–290 L per batch
- **500 L drum** → about 300–325 L per batch

Plan the day around this figure. One cubic metre is 1,000 L, so a 350 L mixer needs around five batches per cubic metre.

## Common Site Mix Ratios

Small sites often use nominal mixes measured by volume, written as **cement : sand : coarse aggregate**. Typical examples you will see in site practice:

- **1 : 1.5 : 3** — a richer mix, often used for structural members such as slabs, beams and columns
- **1 : 2 : 4** — a general-purpose mix for footings, floors and paths
- **1 : 3 : 6** — a lean mix for blinding layers and mass fill

These are general rules of thumb, not a design. For anything structural, follow the mix specified by your engineer or local standard, which also sets the water–cement ratio.

Measure with the same container every time — a bucket or a gauge box — rather than counting shovels. Shovel loads vary from person to person and from one end of the day to the other.

## Watch the Water

Extra water makes concrete easier to place but weaker and more prone to cracking and shrinkage. Add water gradually and stop when the mix reaches the workability you need. If the concrete is too stiff, add a little at a time; it is easy to add water and impossible to take it out.

Remember that wet sand already carries water. On a rainy day, you will need less water in the drum.

## The Right Loading Order

Load with the drum already turning. A sequence that works well with tilting drum mixers:

- Add **about half of the water** first, so the drum surface is wet and cement does not stick to the back.
- Add the **coarse aggregate**. It scours the drum and breaks up any lumps.
- Add the **sand**, then the **cement**.
- Add the **remaining water** slowly until the mix looks right.

Loading cement into an empty, dry drum causes it to cake on the blades and at the bottom of the drum, and the batch comes out uneven.

## How Long to Mix

Once the last material is in, mix until the colour and consistency are uniform — typically a few minutes for a small drum mixer. Too short and you get streaks of dry cement or pockets of sand; much longer is not better and can lead to segregation and loss of workability in hot weather. Keep the time consistent from batch to batch so every load is the same.

## Tips for a Better Day on Site

- Set the mixer level and close to the pour to reduce carrying time.
- Keep cement bags dry and off the ground.
- Discharge fully between batches; leftover concrete changes the next mix.
- Clean the drum at breaks and at the end of the day while it is still wet.

## Matching Mixer Size to the Job

If your crew regularly waits for the mixer, step up a size. If the mixer waits for wheelbarrows, a bigger drum will not help — add labour or shorten the carry. Our range runs from 250 L to 500 L, with electric, gasoline or diesel power.

Need help choosing a size for your typical pours? Send us your daily volume and site conditions on WhatsApp at +84 946 964 669 or through our quote form.`,
    content_vi: `Dung tích máy trộn được in trên catalogue, nhưng lượng bê tông thực tế ra mỗi mẻ lại là con số khác. Hiểu rõ khoảng chênh này — và nạp liệu đúng cách — giúp bê tông chắc hơn, ít hao hụt và máy bền hơn.

## Dung Tích Thùng Không Phải Là Mẻ Trộn

Con số lít trong tên máy, ví dụ 350 L, là dung tích thùng. Máy trộn thùng lật không thể đổ đầy tới miệng: vật liệu cần khoảng trống để rơi và đảo khi thùng quay, và miệng thùng không được tràn khi nghiêng.

Theo kinh nghiệm thực tế, mẻ bê tông dùng được vào khoảng **60–65% dung tích thùng**. Với dòng máy của chúng tôi, tương đương:

- **Thùng 250 L** → khoảng 150–160 L mỗi mẻ
- **Thùng 350 L** → khoảng 210–225 L mỗi mẻ
- **Thùng 450 L** → khoảng 270–290 L mỗi mẻ
- **Thùng 500 L** → khoảng 300–325 L mỗi mẻ

Hãy lên kế hoạch ngày làm việc theo con số này. Một khối bê tông là 1.000 L, nên máy 350 L cần khoảng năm mẻ cho mỗi khối.

## Các Tỷ Lệ Cấp Phối Phổ Biến Tại Công Trường

Công trình nhỏ thường dùng cấp phối định mức theo thể tích, ghi theo thứ tự **xi măng : cát : đá**. Các ví dụ thường gặp:

- **1 : 1,5 : 3** — cấp phối giàu xi măng hơn, thường dùng cho kết cấu như sàn, dầm, cột
- **1 : 2 : 4** — cấp phối thông dụng cho móng, nền và lối đi
- **1 : 3 : 6** — cấp phối nghèo cho lớp lót và bê tông khối

Đây chỉ là quy tắc kinh nghiệm, không phải thiết kế cấp phối. Với hạng mục kết cấu, hãy theo cấp phối do kỹ sư hoặc tiêu chuẩn địa phương quy định, bao gồm cả tỷ lệ nước/xi măng.

Đong bằng cùng một dụng cụ mỗi lần — xô hoặc thùng đong — thay vì đếm xẻng. Mỗi xẻng mỗi người xúc khác nhau, và khác nhau giữa đầu ca với cuối ca.

## Cẩn Thận Với Lượng Nước

Thừa nước giúp đổ bê tông dễ hơn nhưng làm bê tông yếu đi, dễ nứt và co ngót. Cho nước từ từ và dừng lại khi hỗn hợp đạt độ sệt cần thiết. Nếu bê tông quá khô, thêm từng ít một; thêm nước thì dễ, bớt nước thì không thể.

Lưu ý cát ướt đã chứa sẵn nước. Vào ngày mưa, lượng nước cho vào thùng sẽ ít hơn.

## Thứ Tự Nạp Liệu Đúng

Nạp liệu khi thùng đã quay. Trình tự phù hợp với máy trộn thùng lật:

- Cho **khoảng một nửa lượng nước** trước, để thành thùng ướt và xi măng không bám vào đáy.
- Cho **đá**. Đá cọ thành thùng và đánh tan vón cục.
- Cho **cát**, sau đó **xi măng**.
- Cho **phần nước còn lại** từ từ đến khi hỗn hợp đạt yêu cầu.

Cho xi măng vào thùng khô và rỗng sẽ khiến xi măng bám cứng vào cánh và đáy thùng, mẻ trộn ra không đều.

## Trộn Trong Bao Lâu

Sau khi cho vật liệu cuối cùng, trộn đến khi màu sắc và độ sệt đồng đều — với máy trộn nhỏ thường chỉ vài phút. Trộn quá ngắn sẽ còn vệt xi măng khô hoặc túi cát; trộn quá lâu không tốt hơn và có thể gây phân tầng, mất độ dẻo khi trời nóng. Giữ thời gian trộn ổn định giữa các mẻ để mẻ nào cũng như nhau.

## Mẹo Cho Một Ngày Làm Việc Hiệu Quả

- Đặt máy thăng bằng và gần vị trí đổ để giảm quãng vận chuyển.
- Giữ bao xi măng khô ráo, kê cao khỏi mặt đất.
- Xả hết bê tông giữa các mẻ; bê tông còn sót làm thay đổi mẻ sau.
- Rửa thùng khi nghỉ giữa ca và cuối ngày khi bê tông còn ướt.

## Chọn Cỡ Máy Theo Công Việc

Nếu đội thợ thường phải chờ máy trộn, hãy nâng lên một cỡ. Nếu máy trộn phải chờ xe rùa, thùng to hơn cũng không giúp được — hãy thêm người hoặc rút ngắn quãng chở. Dòng máy của chúng tôi từ 250 L đến 500 L, chạy điện, xăng hoặc diesel.

Cần tư vấn chọn cỡ máy theo khối lượng đổ thường ngày? Gửi khối lượng bê tông mỗi ngày và điều kiện công trình qua WhatsApp +84 946 964 669 hoặc form báo giá.`,
  },
  {
    slug: 'concrete-mixer-tyres-and-wheel-layouts',
    title_en: 'Concrete Mixer Tyres: Solid vs Pneumatic, 2 to 4 Wheels',
    title_vi: 'Lốp Máy Trộn Bê Tông: Lốp Đặc Hay Lốp Hơi, 2 Đến 4 Bánh',
    excerpt_en: 'Solid or pneumatic tyres, two, three or four wheels — how terrain, moving the mixer and local repair options should guide your choice.',
    excerpt_vi: 'Lốp đặc hay lốp hơi, hai, ba hay bốn bánh — địa hình, cách di chuyển máy và khả năng sửa chữa tại chỗ quyết định lựa chọn của bạn.',
    category: 'concrete-mixer',
    date: '2025-11-11',
    readTime: 5,
    image: '/images/heroes/concrete-mixers.jpg',
    content_en: `Wheels and tyres look like a minor detail on a concrete mixer. On site they decide how easily the machine moves, how stable it stands while mixing, and how often someone has to stop work to fix a flat. For importers, they also decide which markets a model will sell in.

## Solid Tyres

Solid tyres are made of rubber all the way through. On our mixers the standard solid size is **4.00-8**, fitted to models such as the CM-250-2W, CM-350-2W-S, CM-385, CM-420 and CM-450.

**Advantages:**
- Never go flat — no punctures from rebar offcuts, nails or sharp stone
- No pressure checks, no inner tubes, no repair kits
- Lower cost and simple to replace

**Limitations:**
- Less shock absorption, so the machine bounces more on rough ground
- Harder to push across soft soil, mud or sand
- More vibration is passed to the frame when moving

Solid tyres are a strong choice for markets where tyre repair is hard to find, for sites littered with sharp debris, and for mixers that stay mostly in one place.

## Pneumatic Tyres

Pneumatic tyres hold air, like a car or wheelbarrow tyre. Our mixers use **5.00-12** pneumatic tyres on models such as the CM-350-2W-P and CM-500, and **5.00-10** on the CM-350-4W-P.

**Advantages:**
- Better grip and flotation on soft, muddy or sandy ground
- Smoother ride, which protects the frame, engine mounts and drum bearings when the mixer is moved often
- The larger diameter rolls more easily over ruts and kerbs

**Limitations:**
- Can puncture on sites full of nails and steel offcuts
- Need regular pressure checks — keep them at the pressure marked on the sidewall
- Higher cost than solid tyres

Pneumatic tyres suit sites with rough or soft ground and contractors who move the mixer between work areas several times a day.

## Two, Three or Four Wheels

**Two wheels** — the classic layout. The mixer rests on two wheels and a stand or legs. It is lighter, cheaper and easy to tilt and turn by hand in tight spaces such as house plots and narrow streets.

**Three wheels** — adds a front wheel for easier steering and moving without lifting the front of the machine. Our CM-450 uses a three-wheel layout.

**Four wheels** — the most stable platform. The machine stands square on uneven or sloping ground and is easier to move a long distance across a site. Our CM-250-4W, CM-350-4W and CM-500 use four wheels.

Across the range, wheels can be specified as 2, 3 or 4, solid or pneumatic, so one model can be adapted to the conditions in your market.

## Moving the Mixer Safely

- Site mixers are designed to be moved around the site, not towed at road speed. Check your local rules before using any mixer on public roads, and transport it on a truck or trailer when in doubt.
- Always empty the drum before moving the machine; a loaded drum shifts the centre of gravity.
- Lock the drum and chock the wheels once in position.

## Questions to Ask Before You Order

- What ground do your customers work on — compacted, muddy, sandy or rocky?
- How often is the mixer moved during the day?
- Is tyre repair easy to find in your market?
- Do your customers prefer lighter machines they can push by hand, or stability on slopes?

## A Practical Starting Point

Many importers stock both: a solid-tyre two-wheel model as the low-maintenance, price-friendly option, and a pneumatic four-wheel model for contractors who need mobility and stability. Because tyres and wheel layout are configurable, you can test both in a mixed container.

Tell us about the sites your customers work on via WhatsApp at +84 946 964 669 or our quote form, and we will suggest the right wheel and tyre setup.`,
    content_vi: `Bánh và lốp trông như một chi tiết nhỏ trên máy trộn bê tông. Nhưng tại công trường, chúng quyết định máy di chuyển dễ hay khó, đứng vững ra sao khi trộn và bao lâu lại phải dừng việc để vá lốp. Với nhà nhập khẩu, chúng còn quyết định model nào bán được ở thị trường nào.

## Lốp Đặc

Lốp đặc làm hoàn toàn bằng cao su. Trên máy trộn của chúng tôi, cỡ lốp đặc tiêu chuẩn là **4.00-8**, lắp trên các model như CM-250-2W, CM-350-2W-S, CM-385, CM-420 và CM-450.

**Ưu điểm:**
- Không bao giờ xẹp — không lo đinh, đầu thép vụn hay đá sắc
- Không cần kiểm tra áp suất, không săm, không cần bộ vá
- Giá thấp hơn và thay thế đơn giản

**Hạn chế:**
- Giảm chấn kém hơn, máy xóc nhiều hơn trên nền gồ ghề
- Khó đẩy qua đất mềm, bùn hoặc cát
- Rung truyền lên khung nhiều hơn khi di chuyển

Lốp đặc là lựa chọn tốt cho thị trường khó tìm chỗ sửa lốp, công trường nhiều vật sắc nhọn, và máy chủ yếu đặt cố định một chỗ.

## Lốp Hơi

Lốp hơi chứa khí như lốp ô tô hay xe rùa. Máy trộn của chúng tôi dùng lốp hơi **5.00-12** trên các model như CM-350-2W-P và CM-500, và **5.00-10** trên CM-350-4W-P.

**Ưu điểm:**
- Bám đường và nổi tốt hơn trên nền mềm, bùn hoặc cát
- Êm hơn, bảo vệ khung, bệ động cơ và ổ đỡ thùng khi máy di chuyển nhiều
- Đường kính lớn lăn dễ qua rãnh và gờ

**Hạn chế:**
- Có thể thủng ở công trường nhiều đinh và đầu thép
- Cần kiểm tra áp suất thường xuyên — giữ đúng áp suất ghi trên thành lốp
- Giá cao hơn lốp đặc

Lốp hơi phù hợp công trường nền gồ ghề hoặc mềm, và nhà thầu cần di chuyển máy giữa các khu vực nhiều lần trong ngày.

## Hai, Ba Hay Bốn Bánh

**Hai bánh** — cấu hình truyền thống. Máy đứng trên hai bánh và chân chống. Nhẹ hơn, rẻ hơn, dễ nghiêng và xoay bằng tay ở chỗ hẹp như lô đất nhà ở hay hẻm nhỏ.

**Ba bánh** — thêm bánh trước giúp lái và di chuyển dễ mà không phải nhấc đầu máy. Model CM-450 của chúng tôi dùng cấu hình ba bánh.

**Bốn bánh** — ổn định nhất. Máy đứng vững trên nền không bằng phẳng hoặc dốc, dễ di chuyển quãng dài trong công trường. Các model CM-250-4W, CM-350-4W và CM-500 dùng bốn bánh.

Trên toàn dòng sản phẩm, số bánh có thể chọn 2, 3 hoặc 4, lốp đặc hoặc lốp hơi, nên một model có thể điều chỉnh theo điều kiện thị trường của bạn.

## Di Chuyển Máy An Toàn

- Máy trộn công trường được thiết kế để di chuyển trong công trường, không phải để kéo trên đường ở tốc độ cao. Hãy kiểm tra quy định địa phương trước khi đưa máy ra đường công cộng, và chở bằng xe tải hoặc rơ-moóc khi không chắc chắn.
- Luôn xả hết bê tông trước khi di chuyển máy; thùng đầy làm lệch trọng tâm.
- Khóa thùng và chèn bánh khi đã vào vị trí.

## Câu Hỏi Cần Trả Lời Trước Khi Đặt Hàng

- Khách hàng của bạn làm việc trên nền gì — đầm chặt, bùn, cát hay đá?
- Máy được di chuyển bao nhiêu lần trong ngày?
- Ở thị trường của bạn có dễ tìm chỗ sửa lốp không?
- Khách hàng ưu tiên máy nhẹ đẩy tay, hay sự ổn định trên dốc?

## Điểm Xuất Phát Thực Tế

Nhiều nhà nhập khẩu nhập cả hai: model hai bánh lốp đặc làm lựa chọn ít bảo dưỡng, giá dễ chịu, và model bốn bánh lốp hơi cho nhà thầu cần cơ động và ổn định. Vì bánh và lốp có thể tùy chỉnh, bạn có thể thử cả hai trong một container ghép.

Hãy cho chúng tôi biết điều kiện công trường của khách hàng qua WhatsApp +84 946 964 669 hoặc form báo giá, chúng tôi sẽ đề xuất cấu hình bánh và lốp phù hợp.`,
  },
  {
    slug: 'selling-concrete-mixers-dealer-guide',
    title_en: 'Selling Concrete Mixers: A Practical Guide for Dealers',
    title_vi: 'Kinh Doanh Máy Trộn Bê Tông: Hướng Dẫn Cho Đại Lý',
    excerpt_en: 'Building a mixer range, using OEM colour and logo, choosing spare parts to stock and planning mixed containers — a practical dealer guide.',
    excerpt_vi: 'Xây dựng dải sản phẩm, tận dụng OEM màu và logo, chọn phụ tùng dự trữ và lên kế hoạch container ghép — hướng dẫn thực tế cho đại lý.',
    category: 'concrete-mixer',
    date: '2025-12-09',
    readTime: 6,
    image: '/images/factory/showroom.jpg',
    content_en: `Concrete mixers are a steady product for construction equipment dealers: builders, small contractors and rental shops all need them, and they come back for parts and replacements. The dealers who do well with mixers usually get a few decisions right from the start.

## Start with a Focused Range

You do not need every model on day one. A focused range is easier to explain, stock and service. A common structure:

- **Entry model (250 L)** — for house builders, repairs and price-sensitive buyers
- **Core model (350 L)** — the all-rounder for small and medium contractors
- **Heavy model (420–500 L)** — for larger contractors and higher daily volumes

Across our range, drum capacity runs from 250 L to 500 L, with drum steel of 2–3 mm depending on the model. Within each size, you can offer the wheel and tyre setup your market prefers — solid tyres for low maintenance, pneumatic tyres for rough ground, and 2, 3 or 4 wheels.

## Choose the Engine Your Market Can Support

The best engine is the one your customers can fuel and repair locally.

- **Electric (2.2–5.5 kW, 220 V)** — for cities and sites with reliable mains power
- **Gasoline (GP160 / GP200)** — portable and widely serviceable
- **Diesel** — for heavier use and areas where diesel is the common fuel

Ask local mechanics which engines they already know. A machine that can be fixed in town sells better than one that cannot.

## Make It Your Brand with OEM

Selling under your own brand builds customer loyalty to you rather than to a factory name. On our mixers you can specify:

- **Colour** — yellow, orange, red, dark red, blue, green, grey, or a custom colour
- **Logo and decals** — your brand on the drum and frame
- **Engine, wheels and tyres** — matched to your market
- **Drum thickness** — for customers who want a heavier-duty drum

A consistent colour across your range makes your machines recognisable on every site in your area. Send your logo file and colour reference early so samples can be confirmed before production.

## Stock the Right Spare Parts

Fast parts support is often what separates a one-time sale from a long-term customer. Parts worth keeping on the shelf:

- **Gear ring and pinion** — they wear over time, especially when greasing is neglected
- **Mixing blades** — wear from abrasive aggregate
- **Bearings** — for the drum and pivot points
- **Drive belts** — consumable on belt-driven models
- **Tyres and wheels** — both solid and pneumatic if you sell both
- **Drums** — for customers whose drum is damaged by hammering or accidents
- **Engine service parts** — filters, spark plugs, starter cords

Order a starter parts kit with your first container. It costs little extra in freight and avoids urgent shipments later.

## Plan Mixed Containers

You can mix models, colours and engines in one container. MOQs on our mixers are 2–5 units per model depending on size, so a single container can carry your entire starter range plus spare parts. If you also sell wheelbarrows, adding them to the same container fills the space around the mixers.

## Support Your Customers After the Sale

- Give every buyer a simple daily care sheet: clean the drum while wet, grease the gear ring, check belt tension and engine oil.
- Train your shop staff to recognise common issues — slipping belts, worn pinions, low engine oil.
- Keep a record of what each customer bought so you can suggest parts and upgrades.

## Display and Demonstration

Mixers sell better when buyers can see them. Keep at least one machine assembled in your yard, show the drum thickness and gear, and run it so customers can hear the engine. A clean, branded display machine says more than a brochure.

Ready to build your range? Tell us your market, power supply and typical customers on WhatsApp at +84 946 964 669 or via our quote form, and we will suggest a starter mix of models and parts.`,
    content_vi: `Máy trộn bê tông là sản phẩm ổn định cho đại lý thiết bị xây dựng: thợ xây, nhà thầu nhỏ và cửa hàng cho thuê đều cần, và họ quay lại mua phụ tùng, thay máy mới. Những đại lý kinh doanh tốt mặt hàng này thường làm đúng vài quyết định ngay từ đầu.

## Bắt Đầu Với Dải Sản Phẩm Gọn

Bạn không cần đủ mọi model ngay ngày đầu. Dải sản phẩm gọn dễ tư vấn, dễ trữ hàng và dễ bảo hành. Một cơ cấu thường gặp:

- **Model phổ thông (250 L)** — cho thợ xây nhà, sửa chữa và khách nhạy cảm về giá
- **Model chủ lực (350 L)** — đa năng cho nhà thầu nhỏ và vừa
- **Model hạng nặng (420–500 L)** — cho nhà thầu lớn và khối lượng mỗi ngày cao

Dòng máy của chúng tôi có dung tích thùng từ 250 L đến 500 L, thép thùng dày 2–3 mm tùy model. Với mỗi cỡ, bạn có thể chọn cấu hình bánh và lốp mà thị trường ưa chuộng — lốp đặc ít bảo dưỡng, lốp hơi cho nền gồ ghề, và 2, 3 hoặc 4 bánh.

## Chọn Động Cơ Thị Trường Có Thể Phục Vụ

Động cơ tốt nhất là loại khách hàng có thể mua nhiên liệu và sửa chữa tại địa phương.

- **Điện (2,2–5,5 kW, 220 V)** — cho đô thị và công trường có điện lưới ổn định
- **Xăng (GP160 / GP200)** — cơ động, dễ sửa chữa ở nhiều nơi
- **Diesel** — cho công việc nặng và vùng dùng diesel phổ biến

Hãy hỏi thợ máy địa phương họ quen sửa loại động cơ nào. Máy sửa được ngay trong thị trấn sẽ bán chạy hơn máy không sửa được.

## Xây Dựng Thương Hiệu Riêng Với OEM

Bán dưới thương hiệu riêng giúp khách hàng trung thành với bạn thay vì với tên nhà máy. Với máy trộn của chúng tôi, bạn có thể chọn:

- **Màu sắc** — vàng, cam, đỏ, đỏ đậm, xanh dương, xanh lá, xám hoặc màu theo yêu cầu
- **Logo và tem nhãn** — thương hiệu của bạn trên thùng và khung
- **Động cơ, bánh và lốp** — phù hợp thị trường
- **Độ dày thùng** — cho khách hàng cần thùng chịu tải nặng hơn

Một màu thống nhất cho cả dải sản phẩm giúp máy của bạn dễ nhận ra ở mọi công trường trong khu vực. Hãy gửi file logo và mã màu sớm để xác nhận mẫu trước khi sản xuất.

## Dự Trữ Đúng Phụ Tùng

Hỗ trợ phụ tùng nhanh thường là điều biến một lần bán thành khách hàng lâu dài. Các phụ tùng nên có sẵn:

- **Vành răng và bánh răng nhỏ** — mòn theo thời gian, nhất là khi không bôi mỡ
- **Cánh trộn** — mòn do cốt liệu mài mòn
- **Vòng bi** — cho thùng và các điểm xoay
- **Dây đai** — vật tư tiêu hao ở model truyền động dây đai
- **Lốp và bánh xe** — cả lốp đặc và lốp hơi nếu bạn bán cả hai
- **Thùng trộn** — cho khách có thùng bị móp do gõ búa hoặc tai nạn
- **Phụ tùng bảo dưỡng động cơ** — lọc, bugi, dây giật

Hãy đặt một bộ phụ tùng khởi đầu cùng container đầu tiên. Cước phí thêm không đáng kể mà tránh được việc gửi hàng gấp về sau.

## Lên Kế Hoạch Container Ghép

Bạn có thể ghép nhiều model, màu sắc và động cơ trong một container. MOQ máy trộn của chúng tôi là 2–5 chiếc mỗi model tùy cỡ, nên một container có thể chở đủ dải sản phẩm khởi đầu cùng phụ tùng. Nếu bạn bán cả xe rùa, cho thêm vào cùng container sẽ lấp đầy khoảng trống quanh máy trộn.

## Hỗ Trợ Khách Hàng Sau Bán Hàng

- Gửi mỗi khách hàng một tờ hướng dẫn chăm sóc hằng ngày: rửa thùng khi còn ướt, bôi mỡ vành răng, kiểm tra độ căng dây đai và dầu động cơ.
- Đào tạo nhân viên cửa hàng nhận biết các lỗi thường gặp — dây đai trượt, bánh răng mòn, thiếu dầu máy.
- Ghi lại khách hàng đã mua gì để gợi ý phụ tùng và nâng cấp.

## Trưng Bày Và Chạy Thử

Máy trộn bán tốt hơn khi người mua được tận mắt xem. Hãy để ít nhất một máy lắp sẵn tại bãi, cho khách xem độ dày thùng và bánh răng, và chạy thử để khách nghe tiếng động cơ. Một chiếc máy trưng bày sạch sẽ, mang thương hiệu của bạn có sức thuyết phục hơn catalogue.

Sẵn sàng xây dựng dải sản phẩm? Cho chúng tôi biết thị trường, nguồn điện và khách hàng chính qua WhatsApp +84 946 964 669 hoặc form báo giá, chúng tôi sẽ đề xuất cơ cấu model và phụ tùng khởi đầu.`,
  },
  {
    slug: 'automatic-vs-manual-stirrup-bending-costs',
    title_en: 'Automatic vs Manual Stirrup Bending: Cost Calculator',
    title_vi: 'Uốn Đai Tự Động Và Thủ Công: Cách Tính Chi Phí',
    excerpt_en: 'A simple framework to compare labour and steel costs of manual and automatic stirrup bending, using your own wages, volumes and waste rates.',
    excerpt_vi: 'Cách tính đơn giản để so sánh chi phí nhân công và thép giữa uốn đai thủ công và tự động, dựa trên tiền công, sản lượng và hao hụt của bạn.',
    category: 'stirrup-bending',
    date: '2026-02-10',
    readTime: 6,
    image: '/images/products/stirrup-bending/sbm-detail-22.png',
    content_en: `"Will an automatic stirrup bender pay for itself?" The honest answer depends on your wages, your volumes and how much steel you lose today. Instead of quoting someone else's numbers, this guide gives you a simple calculation you can fill in with your own.

## Step 1: Count Your Stirrups

Start with the quantity. From your drawings or past projects, estimate:

- **N** = number of stirrups per month (or per project)
- **L** = average cut length of bar per stirrup, in metres (perimeter plus hooks)
- **d** = bar diameter, in mm

You can convert length to weight with the standard formula for steel bar: **weight per metre (kg/m) ≈ d² ÷ 162**. That gives roughly:

- **6 mm** → 0.222 kg/m
- **8 mm** → 0.395 kg/m
- **10 mm** → 0.617 kg/m

So steel used per stirrup = L × kg/m. For example, a stirrup with a 0.7 m cut length in 8 mm bar weighs about 0.7 × 0.395 = 0.28 kg.

## Step 2: Manual Labour Cost

Time your own crew. Measure how many finished stirrups one worker produces in a full day, including measuring, cutting, bending and stacking.

- **Pm** = stirrups per worker per day (manual)
- **W** = daily cost per worker (wage plus any meals, transport, insurance)

**Manual labour cost per month = (N ÷ Pm) × W**

Use a realistic figure for Pm, measured over a whole day rather than a fast half hour.

## Step 3: Machine Labour Cost

Our normal-motor machine is rated at **14–15 stirrups per minute** on a 14 × 14 cm stirrup; the servo model is rated at **2.5–5 tons per day**. Real output on your site will be lower than the rated speed once you include changing coils, setting programs and breaks, so estimate conservatively.

- **Pa** = stirrups per day you expect from the machine on your site
- **K** = number of people needed to run it (operator plus helper, if any)

**Machine labour cost per month = (N ÷ Pa) × K × W**

## Step 4: Steel Waste

Manual bending produces offcuts and rejected pieces; automatic machines cut to programmed length and reduce mistakes. Estimate:

- **Wm** = waste rate with manual bending (%)
- **Wa** = waste rate with the machine (%)
- **S** = steel price per kg

**Steel saving per month = N × L × kg/m × (Wm − Wa) × S**

Measure Wm from your own scrap pile if you can: weigh the offcuts from one week and compare them with the steel issued.

## Step 5: Running Costs

Do not forget what the machine costs to run:

- **Electricity** — the normal-motor model uses three 1.5 kW motors; your actual consumption depends on duty cycle
- **Maintenance and wear parts** — cutting blades, rollers, lubrication
- **Operator training** time at the start

**Monthly running cost = electricity + maintenance**

## Step 6: Put It Together

- **Monthly saving = (manual labour − machine labour) + steel saving − running cost**
- **Payback (months) = machine price landed on site ÷ monthly saving**

Run the numbers for your busiest month and for an average month. If payback is short even in an average month, the decision is easy.

## Benefits That Are Harder to Price

Some gains do not fit neatly into the formula but are real:

- **Consistent dimensions** — faster fixing of cages and fewer problems at inspection
- **Less dependence on skilled benders** — useful when experienced workers are scarce
- **Lower injury risk** from repetitive hand bending
- **Capacity to take on bigger jobs** without hiring a large bending crew

## Choosing the Version

If your work is mostly standard column and beam stirrups in large quantities, the normal-motor model usually gives the fastest payback. If you need stirrups up to 1,200 mm, many shapes or tight tolerances, the servo PLC model with stored programs is the better fit. Both handle 6–10 mm plain and deformed bar.

Send us your N, L, bar sizes and wage level on WhatsApp at +84 946 964 669 or through our quote form, and we will help you check the numbers and quote the right machine.`,
    content_vi: `"Máy uốn đai tự động có hoàn vốn được không?" Câu trả lời thật sự phụ thuộc vào tiền công, sản lượng và lượng thép bạn đang hao hụt. Thay vì đưa ra con số của người khác, bài viết này cung cấp một cách tính đơn giản để bạn tự điền số liệu của mình.

## Bước 1: Đếm Số Lượng Đai

Bắt đầu từ số lượng. Từ bản vẽ hoặc công trình trước, hãy ước tính:

- **N** = số đai mỗi tháng (hoặc mỗi công trình)
- **L** = chiều dài cắt trung bình của mỗi đai, tính bằng mét (chu vi cộng móc)
- **d** = đường kính thép, mm

Quy đổi chiều dài sang khối lượng bằng công thức chuẩn cho thép thanh: **khối lượng mỗi mét (kg/m) ≈ d² ÷ 162**. Ta có khoảng:

- **6 mm** → 0,222 kg/m
- **8 mm** → 0,395 kg/m
- **10 mm** → 0,617 kg/m

Thép dùng cho mỗi đai = L × kg/m. Ví dụ, đai có chiều dài cắt 0,7 m bằng thép 8 mm nặng khoảng 0,7 × 0,395 = 0,28 kg.

## Bước 2: Chi Phí Nhân Công Thủ Công

Hãy bấm giờ đội thợ của bạn. Đo số đai hoàn chỉnh một người làm được trong cả ngày, bao gồm đo, cắt, uốn và xếp.

- **Pm** = số đai mỗi người mỗi ngày (thủ công)
- **W** = chi phí mỗi người mỗi ngày (lương cộng ăn uống, đi lại, bảo hiểm)

**Chi phí nhân công thủ công mỗi tháng = (N ÷ Pm) × W**

Dùng con số Pm thực tế, đo trong cả ngày chứ không phải nửa giờ làm nhanh nhất.

## Bước 3: Chi Phí Nhân Công Khi Dùng Máy

Máy động cơ thường của chúng tôi đạt **14–15 đai/phút** với đai 14 × 14 cm; bản servo đạt **2,5–5 tấn/ngày**. Năng suất thực tế tại công trường sẽ thấp hơn tốc độ danh định khi tính cả thời gian thay cuộn thép, cài chương trình và nghỉ, nên hãy ước tính thận trọng.

- **Pa** = số đai mỗi ngày bạn kỳ vọng máy làm được tại công trường
- **K** = số người cần để vận hành (thợ đứng máy và phụ, nếu có)

**Chi phí nhân công khi dùng máy mỗi tháng = (N ÷ Pa) × K × W**

## Bước 4: Hao Hụt Thép

Uốn thủ công sinh ra đầu thừa và đai lỗi; máy tự động cắt theo chiều dài lập trình và giảm sai sót. Hãy ước tính:

- **Wm** = tỷ lệ hao hụt khi uốn thủ công (%)
- **Wa** = tỷ lệ hao hụt khi dùng máy (%)
- **S** = giá thép mỗi kg

**Tiết kiệm thép mỗi tháng = N × L × kg/m × (Wm − Wa) × S**

Nếu được, hãy đo Wm từ đống thép vụn của chính bạn: cân đầu thừa trong một tuần và so với lượng thép đã xuất kho.

## Bước 5: Chi Phí Vận Hành

Đừng quên chi phí chạy máy:

- **Điện** — bản động cơ thường dùng ba động cơ 1,5 kW; điện năng thực tế phụ thuộc thời gian chạy
- **Bảo dưỡng và phụ tùng hao mòn** — dao cắt, con lăn, dầu mỡ
- **Thời gian đào tạo** người vận hành ban đầu

**Chi phí vận hành mỗi tháng = điện + bảo dưỡng**

## Bước 6: Tổng Hợp

- **Tiết kiệm mỗi tháng = (nhân công thủ công − nhân công dùng máy) + tiết kiệm thép − chi phí vận hành**
- **Thời gian hoàn vốn (tháng) = giá máy về tới công trường ÷ tiết kiệm mỗi tháng**

Hãy tính cho tháng cao điểm và tháng trung bình. Nếu thời gian hoàn vốn ngắn ngay cả trong tháng trung bình, quyết định rất dễ dàng.

## Những Lợi Ích Khó Quy Ra Tiền

Một số lợi ích không nằm gọn trong công thức nhưng là có thật:

- **Kích thước đồng đều** — buộc lồng thép nhanh hơn, ít vướng khi nghiệm thu
- **Ít phụ thuộc thợ uốn lành nghề** — hữu ích khi khó tìm thợ giỏi
- **Giảm nguy cơ chấn thương** do động tác uốn tay lặp lại
- **Đủ năng lực nhận công trình lớn hơn** mà không cần thuê đội uốn thép đông người

## Chọn Phiên Bản

Nếu công việc chủ yếu là đai cột, đai dầm tiêu chuẩn số lượng lớn, bản động cơ thường thường hoàn vốn nhanh nhất. Nếu cần đai tới 1.200 mm, nhiều hình dạng hoặc dung sai chặt, bản servo PLC lưu được chương trình sẽ phù hợp hơn. Cả hai đều uốn thép trơn và thép gai 6–10 mm.

Gửi cho chúng tôi N, L, cỡ thép và mức tiền công qua WhatsApp +84 946 964 669 hoặc form báo giá, chúng tôi sẽ cùng bạn kiểm tra con số và báo giá máy phù hợp.`,
  },
  {
    slug: 'stirrup-bending-machine-operation-safety-maintenance',
    title_en: 'Stirrup Bender Operation, Safety and Maintenance Guide',
    title_vi: 'Vận Hành, An Toàn Và Bảo Dưỡng Máy Uốn Đai Thép',
    excerpt_en: 'Feeding rollers, cutting blade, bending head, lubrication and electrics — how to run an automatic stirrup bender safely and keep it accurate.',
    excerpt_vi: 'Con lăn nạp, dao cắt, đầu uốn, bôi trơn và điện — cách vận hành máy uốn đai tự động an toàn và giữ máy luôn chính xác.',
    category: 'stirrup-bending',
    date: '2026-04-14',
    readTime: 6,
    image: '/images/products/stirrup-bending/sbm-detail-23.png',
    content_en: `An automatic stirrup bender is a robust machine, but it works with steel under force: rollers grip the bar, a blade shears it and a bending head swings it around. Good habits keep operators safe and keep every stirrup on size. This guide covers the routines we recommend to customers.

## Know the Main Parts

- **Feeding and straightening rollers** — grip the bar, pull it from the coil or rack and straighten it
- **Cutting unit** — shears the finished stirrup from the bar
- **Bending head** — rotates to form each angle
- **Control panel** — touchscreen on the normal-motor model; PLC with HMI touchscreen on the servo model
- **Motors and electrical cabinet** — the normal-motor model uses three 1.5 kW motors for feeding, cutting and bending

## Safe Operation

**Before starting:**
- Place the machine on firm, level ground and keep the area around the feed and output clear.
- Check that guards and covers are fitted and the emergency stop works.
- Confirm the bar diameter is within the machine's range — **6 to 10 mm** for both our models. Never force a larger bar through.
- Wear gloves, eye protection and safety boots; avoid loose sleeves, scarves or anything that can be caught.

**While running:**
- Keep hands away from the rollers, cutting point and bending head. Never reach in while the machine is running.
- Stand clear of the bending arc — the bar end swings as the stirrup forms.
- Do not straighten or clear a jammed bar with the power on. Stop, isolate and then clear it.
- Only trained operators should change programs or run the machine.

**After work:**
- Switch off and isolate the power supply before cleaning or adjusting anything.

## Daily Checks

- **Clean** scale, rust flakes and dust from the rollers, bending head and cutting area. Steel scale is abrasive and speeds up wear.
- **Check the first piece**: after start-up, and every time you change bar size or shape, measure a test stirrup and adjust if needed.
- **Listen and look** for unusual noise, slipping bar or burrs on the cut end.
- **Check the auto-stop** on the servo model, which stops the machine when the steel runs out.

## Feeding and Straightening Rollers

Rollers that are worn or set with the wrong pressure let the bar slip, which shows up as stirrups that are too short or not square. Check roller grooves for wear and flat spots, set the pressure to match the bar size, and replace worn rollers in pairs so they grip evenly.

## Cutting Blade

A sharp blade gives a clean, square cut. A dull blade leaves burrs, needs more force and stresses the cutting motor. Inspect the cutting edge regularly, rotate or regrind it if the design allows, and replace it when chipped. Keep a spare blade on site so a worn one never stops production.

## Bending Head

Check the bending pin and mandrel for wear and looseness. Worn parts change the bend radius and angle, so stirrups drift out of shape even though the program has not changed. Tighten fixing bolts and replace worn pins.

## Lubrication

Lubricate moving parts — gear trains, bearings, slides and pivot points — according to the machine's manual. Wipe away old grease mixed with scale before applying fresh grease; dirty grease acts like grinding paste. Do not over-grease parts near the rollers, where grease can make the bar slip.

## Electrical Care

- Keep the electrical cabinet closed and dry, especially on outdoor sites.
- Inspect cables for cuts and crushed sections, particularly where they cross the ground.
- Make sure the machine is properly earthed.
- Check the supply voltage. Both our models run on 220 V single phase (the normal-motor model also has a 3-phase option); long extension cables and weak supplies cause voltage drop and motor overheating.
- Leave electrical repairs to a qualified electrician.

## A Simple Maintenance Schedule

- **Daily** — clean, test piece, visual check, guards in place
- **Weekly** — lubrication, roller and blade inspection, bolt check
- **Monthly** — inspect bending head wear, electrical connections and cables
- **As needed** — replace blade, rollers and pins when worn

## Spare Parts to Keep

Cutting blades, feed rollers, bending pins and a set of fuses or contactors cover most stoppages. Ordering them with your machine avoids waiting for an urgent shipment.

For spare parts, operator training questions or a quote on either model, contact us on WhatsApp at +84 946 964 669 or through our quote form.`,
    content_vi: `Máy uốn đai tự động là thiết bị bền chắc, nhưng làm việc với thép dưới lực lớn: con lăn kẹp thép, dao cắt thép và đầu uốn quay thép thành hình. Thói quen tốt giúp người vận hành an toàn và mọi chiếc đai đều đúng kích thước. Bài viết này tóm tắt các quy trình chúng tôi khuyến nghị cho khách hàng.

## Hiểu Các Bộ Phận Chính

- **Con lăn nạp và nắn thép** — kẹp thép, kéo từ cuộn hoặc giá và nắn thẳng
- **Cụm cắt** — cắt đai hoàn chỉnh khỏi thanh thép
- **Đầu uốn** — quay để tạo từng góc
- **Bảng điều khiển** — màn hình cảm ứng ở bản động cơ thường; PLC với màn hình HMI ở bản servo
- **Động cơ và tủ điện** — bản động cơ thường dùng ba động cơ 1,5 kW cho nạp, cắt và uốn

## Vận Hành An Toàn

**Trước khi chạy:**
- Đặt máy trên nền chắc, phẳng, giữ khu vực đầu nạp và đầu ra thông thoáng.
- Kiểm tra nắp che, tấm chắn đã lắp đủ và nút dừng khẩn cấp hoạt động.
- Xác nhận đường kính thép nằm trong khả năng của máy — **6 đến 10 mm** cho cả hai model. Không ép thép lớn hơn.
- Đeo găng tay, kính bảo hộ và giày bảo hộ; tránh tay áo rộng, khăn hoặc bất cứ thứ gì có thể bị cuốn vào.

**Khi máy đang chạy:**
- Giữ tay tránh xa con lăn, điểm cắt và đầu uốn. Không thò tay vào khi máy đang chạy.
- Đứng ngoài vòng quay của đầu thép — đầu thanh thép quét theo khi đai được uốn.
- Không gỡ thép kẹt khi máy còn điện. Dừng máy, ngắt nguồn rồi mới xử lý.
- Chỉ người đã được đào tạo mới được thay đổi chương trình hoặc vận hành máy.

**Sau ca làm:**
- Tắt máy và ngắt nguồn điện trước khi vệ sinh hoặc điều chỉnh bất cứ bộ phận nào.

## Kiểm Tra Hằng Ngày

- **Vệ sinh** vảy cán, gỉ và bụi trên con lăn, đầu uốn và khu vực cắt. Vảy thép có tính mài mòn, làm máy mòn nhanh.
- **Kiểm tra chiếc đầu tiên**: sau khi khởi động và mỗi khi đổi cỡ thép hoặc hình dạng, đo một chiếc đai thử và hiệu chỉnh nếu cần.
- **Quan sát và lắng nghe** tiếng động lạ, thép bị trượt hoặc ba via ở đầu cắt.
- **Kiểm tra chức năng tự dừng** ở bản servo, giúp máy dừng khi hết thép.

## Con Lăn Nạp Và Nắn Thép

Con lăn mòn hoặc chỉnh lực ép sai làm thép bị trượt, dẫn đến đai bị ngắn hoặc không vuông. Kiểm tra rãnh con lăn xem có mòn hay bị phẳng, chỉnh lực ép theo cỡ thép, và thay con lăn theo cặp để kẹp đều.

## Dao Cắt

Dao sắc cho vết cắt sạch, vuông. Dao cùn để lại ba via, cần lực lớn hơn và gây quá tải cho động cơ cắt. Kiểm tra lưỡi cắt định kỳ, xoay hoặc mài lại nếu thiết kế cho phép, và thay khi bị mẻ. Luôn có sẵn dao dự phòng tại công trường để dao mòn không làm dừng sản xuất.

## Đầu Uốn

Kiểm tra chốt uốn và trục tâm uốn xem có mòn hoặc lỏng. Chi tiết mòn làm thay đổi bán kính và góc uốn, khiến đai dần sai hình dù chương trình không đổi. Siết lại bulong cố định và thay chốt đã mòn.

## Bôi Trơn

Bôi trơn các bộ phận chuyển động — bánh răng, vòng bi, rãnh trượt và điểm xoay — theo sách hướng dẫn của máy. Lau sạch mỡ cũ lẫn vảy thép trước khi bôi mỡ mới; mỡ bẩn hoạt động như bột mài. Không bôi quá nhiều mỡ gần con lăn, vì mỡ có thể làm thép bị trượt.

## Chăm Sóc Hệ Thống Điện

- Giữ tủ điện đóng kín và khô ráo, nhất là ở công trường ngoài trời.
- Kiểm tra dây cáp xem có bị cắt hoặc dập, đặc biệt đoạn chạy trên mặt đất.
- Đảm bảo máy được nối đất đúng cách.
- Kiểm tra điện áp nguồn. Cả hai model chạy điện 220 V một pha (bản động cơ thường có thêm tùy chọn ba pha); dây nối dài và nguồn yếu gây sụt áp, làm động cơ quá nhiệt.
- Việc sửa chữa điện nên để thợ điện có chuyên môn thực hiện.

## Lịch Bảo Dưỡng Đơn Giản

- **Hằng ngày** — vệ sinh, chạy đai thử, kiểm tra bằng mắt, nắp che đầy đủ
- **Hằng tuần** — bôi trơn, kiểm tra con lăn và dao cắt, kiểm tra bulong
- **Hằng tháng** — kiểm tra độ mòn đầu uốn, các đầu nối điện và dây cáp
- **Khi cần** — thay dao, con lăn và chốt uốn khi đã mòn

## Phụ Tùng Nên Dự Trữ

Dao cắt, con lăn nạp, chốt uốn và một bộ cầu chì hoặc khởi động từ giải quyết được phần lớn sự cố dừng máy. Đặt kèm cùng máy giúp tránh phải chờ hàng gửi gấp.

Cần phụ tùng, hỏi về đào tạo vận hành hoặc báo giá cho hai model, hãy liên hệ WhatsApp +84 946 964 669 hoặc form báo giá.`,
  },
  {
    slug: 'industrial-fan-maintenance-guide',
    title_en: 'Industrial Fan Maintenance: Bearings, Belts and Balance',
    title_vi: 'Bảo Dưỡng Quạt Công Nghiệp: Vòng Bi, Dây Đai, Cân Bằng',
    excerpt_en: 'Bearings, belts and pulleys, impeller cleaning, vibration and motor checks — a practical maintenance schedule for industrial fans.',
    excerpt_vi: 'Vòng bi, dây đai và pu-li, vệ sinh cánh, độ rung và kiểm tra động cơ — lịch bảo dưỡng thực tế cho quạt công nghiệp.',
    category: 'industrial-fan',
    date: '2026-06-09',
    readTime: 6,
    image: '/images/products/industrial-fan/plcf-121-photo-1.jpg',
    content_en: `Industrial fans often run for thousands of hours a year, frequently out of sight on a roof or behind a wall. Because they keep working until something fails, maintenance is easy to forget. A simple routine prevents most breakdowns and keeps airflow and electricity costs where they should be.

## Safety First

Before any inspection inside the fan, switch off, isolate and lock out the power, and wait until the impeller has stopped completely. A fan can freewheel in a draught even when switched off, so secure the impeller before reaching in.

## Bearings

Bearings carry the full weight and force of the rotating impeller. Most fan failures start here.

- **Listen** for grinding, rumbling or squealing.
- **Feel or measure temperature** on the bearing housings during routine rounds. A bearing that runs noticeably hotter than usual needs attention.
- **Grease correctly** — use the grease type and interval given by the bearing or fan manual. More grease is not better: over-greasing causes heat and can push seals out.
- **Replace** bearings that show play, noise or heat that does not settle after lubrication.

## Belts and Pulleys

Belt-driven fans let you set speed by changing pulleys, and many of our fans — PLCF 101, PLCF 121, PLCF 152 and PLAX 204 — can be built for direct or belt drive. If yours is belt-driven:

- **Check tension**: a loose belt slips, squeals and reduces airflow; an over-tight belt overloads bearings.
- **Check alignment** with a straight edge across both pulley faces. Misalignment wears belts on one side and causes vibration.
- **Inspect belts** for cracks, glazing and fraying. On multi-belt drives, replace the whole set together so all belts share the load.
- **Check pulleys** for worn grooves and loose set screws or bushes.

## Impeller Cleaning and Balance

Dust, grease and fibre build up on impeller blades unevenly. Even a thin, uneven layer puts the impeller out of balance, raises vibration and shortens bearing life. Build-up also changes the blade shape and reduces airflow.

- Clean the impeller and housing on a schedule that matches the air being handled — far more often on dusty or greasy duties than on clean-air supply fans.
- Use scrapers, brushes or low-pressure washing. Avoid bending blades.
- After cleaning, check for cracks, erosion and corrosion, especially at blade roots and welds.
- If vibration remains high after cleaning, the impeller may need rebalancing by a specialist.

## Vibration

Vibration is the best early warning a fan gives you. Common causes:

- Dirt on the impeller or lost balance
- Worn bearings
- Belt or shaft misalignment
- Loose foundation bolts, mounts or anti-vibration pads

Record vibration readings at the same points each time if you have a meter; a rising trend matters more than a single number. Without a meter, put a hand on the bearing housing and compare it with how the fan felt when new.

## Motor Checks

- Keep motor cooling fins and fan covers clean so the motor can shed heat.
- Measure running current and compare it with the nameplate. High current points to a problem with the fan, belt or supply.
- Check terminal connections for tightness and signs of overheating.
- Have an electrician test insulation resistance periodically, especially on fans in humid or outdoor locations.
- Our PLCF and PLAX fans run on 380 V, 3-phase; make sure all three phases are balanced.

## Housing, Dampers and Structure

Check the housing for leaks, cracks and corrosion; tighten flange bolts; and make sure inlet guards are intact and free of debris. Dampers and shutters, such as those on PLQF wall fans, should open and close freely.

## A Practical Schedule

- **Weekly** — listen, look, feel for heat and vibration; check guards
- **Monthly** — belt tension and condition; clean motor surfaces; check bolts
- **Quarterly** — lubricate bearings as per manual; inspect and clean the impeller (more often for dusty or greasy air)
- **Yearly** — full inspection of impeller, bearings, housing and motor insulation

Need spare impellers, bearings or belts, or advice on a fan in service? Message us on WhatsApp at +84 946 964 669 or use our quote form.`,
    content_vi: `Quạt công nghiệp thường chạy hàng nghìn giờ mỗi năm, nhiều khi khuất trên mái hoặc sau tường. Vì quạt vẫn chạy cho đến khi hỏng, việc bảo dưỡng rất dễ bị quên. Một quy trình đơn giản ngăn được phần lớn sự cố và giữ lưu lượng gió, chi phí điện ở mức hợp lý.

## An Toàn Trước Tiên

Trước khi kiểm tra bên trong quạt, hãy tắt máy, ngắt và khóa nguồn điện, chờ đến khi cánh quạt dừng hẳn. Quạt có thể tự quay do gió lùa ngay cả khi đã tắt, vì vậy hãy cố định cánh trước khi đưa tay vào.

## Vòng Bi

Vòng bi chịu toàn bộ trọng lượng và lực của cánh quạt đang quay. Phần lớn hỏng hóc của quạt bắt đầu từ đây.

- **Lắng nghe** tiếng rít, tiếng ù hoặc tiếng kêu ken két.
- **Sờ hoặc đo nhiệt độ** gối đỡ vòng bi trong các lần kiểm tra định kỳ. Vòng bi nóng hơn bình thường rõ rệt cần được xử lý.
- **Bôi mỡ đúng cách** — dùng loại mỡ và chu kỳ theo hướng dẫn của vòng bi hoặc quạt. Nhiều mỡ không có nghĩa là tốt hơn: thừa mỡ gây nóng và có thể đẩy bung phớt.
- **Thay** vòng bi có độ rơ, tiếng ồn hoặc nóng không giảm sau khi bôi mỡ.

## Dây Đai Và Pu-li

Quạt truyền động dây đai cho phép đổi tốc độ bằng cách thay pu-li, và nhiều quạt của chúng tôi — PLCF 101, PLCF 121, PLCF 152 và PLAX 204 — có thể làm theo kiểu truyền động trực tiếp hoặc dây đai. Nếu quạt của bạn dùng dây đai:

- **Kiểm tra độ căng**: dây lỏng gây trượt, kêu rít và giảm lưu lượng; dây quá căng gây quá tải vòng bi.
- **Kiểm tra độ thẳng hàng** bằng thước thẳng đặt ngang mặt hai pu-li. Lệch tâm làm mòn một bên dây và gây rung.
- **Kiểm tra dây đai** xem có nứt, chai bóng hoặc sờn. Với bộ truyền nhiều dây, thay cả bộ cùng lúc để các dây chịu tải đều.
- **Kiểm tra pu-li** xem rãnh có mòn, vít hãm hoặc bạc côn có lỏng không.

## Vệ Sinh Và Cân Bằng Cánh Quạt

Bụi, dầu mỡ và sợi bám không đều lên cánh quạt. Chỉ một lớp mỏng không đều cũng làm mất cân bằng, tăng rung và giảm tuổi thọ vòng bi. Chất bám còn làm thay đổi biên dạng cánh và giảm lưu lượng.

- Vệ sinh cánh và vỏ quạt theo lịch phù hợp với loại khí: thường xuyên hơn nhiều khi hút bụi hoặc khí nhiều dầu mỡ so với quạt cấp khí sạch.
- Dùng dao cạo, bàn chải hoặc rửa áp lực thấp. Tránh làm cong cánh.
- Sau khi vệ sinh, kiểm tra vết nứt, mòn và gỉ, nhất là ở chân cánh và mối hàn.
- Nếu độ rung vẫn cao sau khi vệ sinh, cánh quạt có thể cần được cân bằng lại bởi đơn vị chuyên môn.

## Độ Rung

Độ rung là tín hiệu cảnh báo sớm tốt nhất của quạt. Nguyên nhân thường gặp:

- Cánh bám bẩn hoặc mất cân bằng
- Vòng bi mòn
- Lệch dây đai hoặc lệch trục
- Bulong móng, chân đế hoặc đệm chống rung bị lỏng

Nếu có máy đo, hãy ghi độ rung tại cùng các điểm mỗi lần; xu hướng tăng quan trọng hơn một con số đơn lẻ. Nếu không có máy đo, đặt tay lên gối đỡ vòng bi và so sánh với cảm giác khi quạt còn mới.

## Kiểm Tra Động Cơ

- Giữ sạch cánh tản nhiệt và nắp quạt làm mát của động cơ để động cơ tản nhiệt tốt.
- Đo dòng điện khi chạy và so với thông số trên nhãn. Dòng cao cho thấy có vấn đề ở quạt, dây đai hoặc nguồn điện.
- Kiểm tra độ chặt và dấu hiệu quá nhiệt ở các đầu cực.
- Nhờ thợ điện đo điện trở cách điện định kỳ, nhất là quạt đặt ở nơi ẩm hoặc ngoài trời.
- Quạt PLCF và PLAX của chúng tôi chạy điện 380 V ba pha; hãy đảm bảo ba pha cân bằng.

## Vỏ Quạt, Van Gió Và Kết Cấu

Kiểm tra vỏ quạt xem có rò, nứt hoặc gỉ; siết lại bulong mặt bích; đảm bảo lưới bảo vệ cửa hút còn nguyên và không bị rác chắn. Van gió và lá chớp, như trên quạt gắn tường PLQF, phải đóng mở trơn tru.

## Lịch Bảo Dưỡng Thực Tế

- **Hằng tuần** — nghe, nhìn, sờ kiểm tra nhiệt và rung; kiểm tra lưới bảo vệ
- **Hằng tháng** — độ căng và tình trạng dây đai; vệ sinh bề mặt động cơ; kiểm tra bulong
- **Hằng quý** — bôi mỡ vòng bi theo hướng dẫn; kiểm tra và vệ sinh cánh (thường xuyên hơn với khí nhiều bụi hoặc dầu mỡ)
- **Hằng năm** — kiểm tra toàn diện cánh, vòng bi, vỏ và cách điện động cơ

Cần cánh quạt, vòng bi hoặc dây đai thay thế, hay cần tư vấn cho quạt đang vận hành? Nhắn cho chúng tôi qua WhatsApp +84 946 964 669 hoặc dùng form báo giá.`,
  },
  {
    slug: 'kitchen-restaurant-exhaust-centrifugal-fans',
    title_en: 'Kitchen and Restaurant Exhaust with Centrifugal Fans',
    title_vi: 'Hút Khói Bếp Nhà Hàng Bằng Quạt Ly Tâm: Những Điều Cần Biết',
    excerpt_en: 'Why centrifugal fans suit kitchen exhaust, how hoods, ducts and filters affect fan choice, and how to keep grease, odour and noise under control.',
    excerpt_vi: 'Vì sao quạt ly tâm phù hợp hút khói bếp, chụp hút, ống gió và bộ lọc ảnh hưởng ra sao, và cách kiểm soát dầu mỡ, mùi và tiếng ồn.',
    category: 'industrial-fan',
    date: '2026-08-18',
    readTime: 6,
    image: '/images/products/industrial-fan/plcf-101-photo-1.jpg',
    content_en: `A commercial kitchen produces heat, steam, smoke, odour and grease-laden vapour all day. The exhaust fan has to pull all of that through a hood, filters and ductwork and push it outside — reliably, quietly and safely. That combination is why most kitchen exhaust systems use centrifugal fans.

## Why Centrifugal Fans for Kitchens

A kitchen exhaust system is a high-resistance system. Air must pass through grease filters in the hood, along a duct with bends, sometimes through odour-control equipment, and out of a discharge. Each element adds pressure loss.

Axial fans move large volumes in open air but lose performance quickly against resistance. Centrifugal fans build much higher pressure, so they keep pulling the design airflow through filters and long ducts. They also cope better with warm, moist and greasy air.

Our **PLCF 101** centrifugal fan with forward-curved blades is designed for this kind of duty: ventilation and odour extraction in hotels, restaurants, factories and public buildings. It covers **650–57,600 m³/h** at **210–2,960 Pa**, with motors from 0.25 to 55 kW, direct or belt drive, in SS400 steel or SUS 304 stainless.

## The System: Hood, Filters, Duct, Fan

**Hood** — captures smoke and vapour at the source. It should overhang the cooking line so plumes do not escape. Hood size and the type of cooking (frying, grilling, steaming) largely decide the airflow you need, and your local code or hood supplier will give the method.

**Grease filters** — baffle filters in the hood remove much of the grease before it reaches the duct. Clean them frequently; clogged filters cut airflow and become a fire risk.

**Duct** — should be as short and direct as possible, with few bends. Kitchen exhaust ducts are normally made of welded steel, sloped to drain grease, and fitted with access openings for cleaning. Every extra metre and every bend adds pressure the fan must overcome.

**Fan** — sized for the airflow at the total system pressure, including dirty filters and any odour-control equipment.

## Odour Control

In dense urban areas, neighbours may complain about cooking smells. Options include carbon filters, electrostatic precipitators or discharge at roof level well away from windows and air intakes. All of these add resistance — another reason to choose a centrifugal fan with pressure in reserve.

## Grease and Fire Safety

Grease build-up in hoods, ducts and fans is a serious fire hazard. Kitchen exhaust systems are covered by specific fire codes, such as NFPA 96 in many countries, and by local building and fire regulations. These set rules on duct construction, clearances, cleaning access, fire suppression and where the fan and motor may be installed.

Always design and install the system with a qualified contractor and get approval from your local authority. General good practice includes:

- Keeping the motor and wiring out of the grease-laden airstream where possible; belt-drive arrangements help here
- Providing access to clean the fan and duct
- Scheduling regular professional cleaning of hood, duct and fan
- Never installing equipment that traps grease without a way to clean it

## Keeping Noise Down

Restaurants need a quiet dining room, and neighbours expect quiet nights. To reduce noise:

- Choose a larger fan running at lower speed rather than a small fan at high speed; forward-curved centrifugal fans are known for relatively quiet running
- Mount the fan on anti-vibration mounts
- Keep duct velocities reasonable and avoid sharp bends near the fan
- Add a silencer on the discharge or locate the fan away from sensitive areas, where codes allow

## Make-Up Air

Every cubic metre of air you extract must be replaced. Without make-up air, doors become hard to open, the hood stops capturing well and gas burners may not work properly. Plan a supply of fresh air into the kitchen alongside the exhaust.

## Material Choice

Kitchens are warm and humid, and cleaning involves water and detergents. SS400 steel with a protective finish suits many installations; SUS 304 stainless steel gives better corrosion resistance where hygiene and long life matter.

To size a PLCF fan for your kitchen, send us the hood dimensions, duct length and number of bends, and the type of cooking on WhatsApp at +84 946 964 669 or through our quote form.`,
    content_vi: `Bếp nhà hàng tạo ra nhiệt, hơi nước, khói, mùi và hơi dầu mỡ suốt cả ngày. Quạt hút phải kéo tất cả qua chụp hút, bộ lọc và đường ống rồi đẩy ra ngoài — ổn định, êm và an toàn. Chính vì vậy phần lớn hệ thống hút khói bếp dùng quạt ly tâm.

## Vì Sao Bếp Nên Dùng Quạt Ly Tâm

Hệ thống hút khói bếp là hệ thống có lực cản lớn. Không khí phải đi qua bộ lọc mỡ trong chụp hút, qua đường ống có nhiều co, đôi khi qua thiết bị khử mùi, rồi mới ra miệng xả. Mỗi bộ phận đều gây tổn thất áp suất.

Quạt hướng trục di chuyển lượng gió lớn trong không gian mở nhưng giảm hiệu suất nhanh khi gặp lực cản. Quạt ly tâm tạo áp suất cao hơn nhiều, nên vẫn kéo đủ lưu lượng thiết kế qua bộ lọc và đường ống dài. Quạt ly tâm cũng chịu được khí ấm, ẩm và nhiều dầu mỡ tốt hơn.

Quạt ly tâm cánh cong tiến **PLCF 101** của chúng tôi được thiết kế cho loại công việc này: thông gió và hút mùi tại khách sạn, nhà hàng, nhà xưởng và công trình công cộng. Lưu lượng **650–57.600 m³/h**, áp suất **210–2.960 Pa**, động cơ 0,25–55 kW, truyền động trực tiếp hoặc dây đai, vật liệu thép SS400 hoặc inox SUS 304.

## Hệ Thống: Chụp Hút, Bộ Lọc, Ống Gió, Quạt

**Chụp hút** — thu khói và hơi ngay tại nguồn. Chụp nên trùm rộng hơn dãy bếp để khói không thoát ra ngoài. Kích thước chụp và kiểu nấu (chiên, nướng, hấp) phần lớn quyết định lưu lượng cần thiết, và quy chuẩn địa phương hoặc nhà cung cấp chụp hút sẽ có phương pháp tính.

**Bộ lọc mỡ** — lọc dạng tấm chắn trong chụp hút giữ lại phần lớn dầu mỡ trước khi vào ống. Cần vệ sinh thường xuyên; lọc bị tắc làm giảm lưu lượng và trở thành nguy cơ cháy.

**Ống gió** — nên ngắn và thẳng nhất có thể, ít co. Ống hút khói bếp thường làm bằng thép hàn kín, đặt dốc để thoát mỡ, và có cửa thăm để vệ sinh. Mỗi mét ống và mỗi co đều tăng áp suất mà quạt phải vượt qua.

**Quạt** — chọn theo lưu lượng tại tổng áp suất của hệ thống, tính cả khi bộ lọc bẩn và thiết bị khử mùi (nếu có).

## Kiểm Soát Mùi

Ở khu đô thị đông đúc, hàng xóm có thể phàn nàn về mùi nấu nướng. Các giải pháp gồm lọc than hoạt tính, lọc tĩnh điện, hoặc xả khí ở cao độ mái, xa cửa sổ và cửa lấy gió. Tất cả đều tăng lực cản — thêm một lý do để chọn quạt ly tâm có dư áp suất.

## Dầu Mỡ Và An Toàn Cháy Nổ

Dầu mỡ bám trong chụp hút, ống gió và quạt là nguy cơ cháy nghiêm trọng. Hệ thống hút khói bếp chịu sự điều chỉnh của các quy chuẩn phòng cháy riêng, như NFPA 96 ở nhiều quốc gia, cùng quy định xây dựng và PCCC địa phương. Các quy chuẩn này quy định cấu tạo ống, khoảng cách an toàn, cửa vệ sinh, hệ thống chữa cháy và vị trí lắp quạt, động cơ.

Luôn thiết kế và lắp đặt hệ thống cùng nhà thầu có chuyên môn và xin phê duyệt của cơ quan chức năng địa phương. Một số thực hành tốt chung:

- Đặt động cơ và dây điện ngoài dòng khí nhiễm dầu mỡ khi có thể; kiểu truyền động dây đai hỗ trợ việc này
- Bố trí cửa thăm để vệ sinh quạt và ống gió
- Lên lịch vệ sinh chuyên nghiệp định kỳ cho chụp hút, ống gió và quạt
- Không lắp thiết bị giữ mỡ mà không có cách vệ sinh

## Giảm Tiếng Ồn

Nhà hàng cần phòng ăn yên tĩnh, và hàng xóm cần những đêm yên tĩnh. Để giảm ồn:

- Chọn quạt lớn chạy tốc độ thấp thay vì quạt nhỏ chạy tốc độ cao; quạt ly tâm cánh cong tiến được biết đến với độ ồn tương đối thấp
- Lắp quạt trên đệm chống rung
- Giữ vận tốc gió trong ống hợp lý, tránh co gấp sát quạt
- Lắp bộ tiêu âm ở miệng xả hoặc đặt quạt xa khu vực nhạy cảm, nếu quy chuẩn cho phép

## Cấp Gió Bù

Mỗi mét khối khí hút ra phải được bù lại. Thiếu gió bù, cửa sẽ khó mở, chụp hút thu khói kém và bếp gas có thể cháy không ổn định. Hãy tính cấp gió tươi cho bếp song song với hệ thống hút.

## Lựa Chọn Vật Liệu

Bếp nóng và ẩm, việc vệ sinh dùng nhiều nước và chất tẩy. Thép SS400 có lớp bảo vệ phù hợp nhiều công trình; inox SUS 304 chống ăn mòn tốt hơn khi yêu cầu vệ sinh và tuổi thọ cao.

Để chọn quạt PLCF cho bếp của bạn, hãy gửi kích thước chụp hút, chiều dài ống và số co, cùng kiểu nấu qua WhatsApp +84 946 964 669 hoặc form báo giá.`,
  },
  {
    slug: 'ss400-steel-vs-sus304-stainless-fans',
    title_en: 'SS400 Steel vs SUS 304 Stainless Fans: Which to Choose',
    title_vi: 'Quạt Thép SS400 Hay Inox SUS 304: Nên Chọn Loại Nào?',
    excerpt_en: 'Humid, corrosive, food or chemical environments — how to choose between SS400 carbon steel and SUS 304 stainless for industrial fans.',
    excerpt_vi: 'Môi trường ẩm, ăn mòn, thực phẩm hay hóa chất — cách chọn giữa thép carbon SS400 và inox SUS 304 cho quạt công nghiệp.',
    category: 'industrial-fan',
    date: '2026-10-13',
    readTime: 5,
    image: '/images/products/industrial-fan/plax-204-photo-2.jpg',
    content_en: `Two fans can have identical airflow and pressure and still last very different lengths of time. The difference is often the material. Our centrifugal and axial fans — PLCF 101, PLCF 121, PLCF 152 and PLAX 204 — are available in SS400 steel or SUS 304 stainless steel. Here is how to decide.

## What Is SS400?

SS400 is a general structural carbon steel defined in the Japanese standard JIS G3101, widely used for frames, plates and machinery. It is strong, easy to cut, roll and weld, and cost-effective.

Its weakness is corrosion. Bare carbon steel rusts in the presence of moisture and oxygen, and faster still with salt, acids or other chemicals. That is why SS400 fans are protected with paint or other coatings.

**SS400 is a good choice for:**
- General ventilation in dry or moderately humid buildings
- Warehouses, workshops and construction sites
- Clean or mildly dusty air at normal temperatures
- Projects where budget is the main constraint

## What Is SUS 304?

SUS 304 is the Japanese designation for type 304 austenitic stainless steel, containing roughly 18% chromium and 8% nickel. The chromium forms a thin, self-repairing oxide layer on the surface that protects the steel from rust without any coating.

**SUS 304 is a good choice for:**
- Humid or wet environments, such as laundries, swimming pool halls and areas that are washed down
- Food processing, beverage plants and commercial kitchens, where hygiene matters and paint flakes are unacceptable
- Mildly corrosive fumes, including many found in drying, pharmaceutical and light chemical processes
- Installations where long service life and low maintenance justify a higher upfront price

## Know the Limits of 304

Stainless does not mean indestructible. Type 304 can suffer pitting and crevice corrosion in environments with chlorides — sea air, salt spray, swimming pool chemicals and some cleaning agents — particularly at higher temperatures. Strong acids and some chemical fumes can also attack it.

If your fan will handle highly corrosive gases or work in a coastal or chloride-rich environment, tell us exactly what is in the air. A higher-alloy grade, a special coating or a different material may be needed, and we will tell you honestly whether we can supply it.

## Coatings on Carbon Steel

A well-applied coating extends the life of an SS400 fan considerably. When comparing offers, ask:

- How is the surface prepared before painting?
- What type of paint system and how many coats?
- Are the inside of the housing and the impeller coated, not just the outside?

Remember that any coating can be damaged by impact, abrasion or cleaning, and rust starts at the damaged spot. Inspect coated fans regularly and touch up chips quickly.

## Cost Trade-Offs

SUS 304 costs more than SS400, both as a raw material and in fabrication. To compare fairly, look at the total cost over the fan's life:

- **Purchase price** — lower for SS400
- **Maintenance** — repainting and rust repair for SS400; little for SUS 304 in suitable conditions
- **Replacement** — a corroded impeller or housing means downtime and a new part
- **Risk** — contamination from rust or paint flakes can be costly in food and pharmaceutical plants

In a dry warehouse, SS400 is usually the sensible choice. In a wet, hygienic or mildly corrosive environment, SUS 304 often pays for itself.

## A Middle Path

In some applications, only the parts in contact with the airstream need stainless steel. Ask whether a stainless impeller and housing with a carbon steel base or frame suits your project.

## Questions We Will Ask

- What does the fan handle: clean air, steam, grease, dust or chemical fumes?
- What is the temperature and humidity?
- Is the fan indoors, outdoors or near the coast?
- Will it be washed down?

Send us those details on WhatsApp at +84 946 964 669 or through our quote form, and we will recommend the material and quote the fan.`,
    content_vi: `Hai chiếc quạt có thể cùng lưu lượng và áp suất nhưng tuổi thọ lại rất khác nhau. Sự khác biệt thường nằm ở vật liệu. Các dòng quạt ly tâm và hướng trục của chúng tôi — PLCF 101, PLCF 121, PLCF 152 và PLAX 204 — có hai lựa chọn vật liệu: thép SS400 hoặc inox SUS 304. Dưới đây là cách quyết định.

## SS400 Là Gì?

SS400 là thép carbon kết cấu thông dụng theo tiêu chuẩn Nhật Bản JIS G3101, dùng rộng rãi cho khung, tấm và máy móc. Thép bền, dễ cắt, cuốn, hàn và có giá hợp lý.

Điểm yếu của SS400 là ăn mòn. Thép carbon trần bị gỉ khi gặp hơi ẩm và oxy, còn nhanh hơn khi có muối, axit hoặc hóa chất. Vì vậy quạt thép SS400 được bảo vệ bằng sơn hoặc lớp phủ khác.

**SS400 phù hợp với:**
- Thông gió chung trong nhà xưởng khô hoặc ẩm vừa phải
- Kho bãi, xưởng sản xuất và công trường
- Khí sạch hoặc hơi bụi ở nhiệt độ thường
- Dự án mà ngân sách là yếu tố hàng đầu

## SUS 304 Là Gì?

SUS 304 là ký hiệu theo tiêu chuẩn Nhật Bản của inox austenit loại 304, chứa khoảng 18% crôm và 8% niken. Crôm tạo một lớp oxit mỏng, tự phục hồi trên bề mặt, bảo vệ thép khỏi gỉ mà không cần lớp phủ.

**SUS 304 phù hợp với:**
- Môi trường ẩm ướt như xưởng giặt là, khu bể bơi và khu vực rửa bằng nước thường xuyên
- Chế biến thực phẩm, nhà máy đồ uống và bếp công nghiệp, nơi đòi hỏi vệ sinh và không chấp nhận vảy sơn bong tróc
- Khí ăn mòn nhẹ, gồm nhiều loại trong quy trình sấy, dược phẩm và hóa chất nhẹ
- Công trình mà tuổi thọ dài và ít bảo trì xứng đáng với giá đầu tư cao hơn

## Giới Hạn Của Inox 304

Inox không có nghĩa là không thể hỏng. Inox 304 có thể bị ăn mòn rỗ và ăn mòn khe trong môi trường có clorua — không khí biển, hơi muối, hóa chất bể bơi và một số chất tẩy rửa — nhất là ở nhiệt độ cao. Axit mạnh và một số khí hóa chất cũng có thể ăn mòn inox 304.

Nếu quạt phải hút khí ăn mòn mạnh hoặc làm việc ở vùng ven biển, môi trường nhiều clorua, hãy cho chúng tôi biết chính xác thành phần khí. Có thể cần mác thép hợp kim cao hơn, lớp phủ đặc biệt hoặc vật liệu khác, và chúng tôi sẽ trả lời thẳng thắn liệu có cung cấp được hay không.

## Lớp Phủ Cho Thép Carbon

Lớp phủ thi công tốt kéo dài đáng kể tuổi thọ quạt thép SS400. Khi so sánh báo giá, hãy hỏi:

- Bề mặt được xử lý thế nào trước khi sơn?
- Dùng hệ sơn loại gì và bao nhiêu lớp?
- Mặt trong vỏ quạt và cánh quạt có được phủ không, hay chỉ mặt ngoài?

Lưu ý mọi lớp phủ đều có thể hư hại do va đập, mài mòn hoặc vệ sinh, và gỉ bắt đầu từ chỗ hư hại. Hãy kiểm tra quạt sơn định kỳ và sơn dặm ngay các vết tróc.

## Cân Nhắc Chi Phí

Inox SUS 304 đắt hơn SS400 cả về vật liệu lẫn gia công. Để so sánh công bằng, hãy xét tổng chi phí trong suốt vòng đời quạt:

- **Giá mua** — SS400 thấp hơn
- **Bảo trì** — SS400 cần sơn lại và xử lý gỉ; SUS 304 gần như không cần trong điều kiện phù hợp
- **Thay thế** — cánh hoặc vỏ quạt bị ăn mòn đồng nghĩa với dừng máy và thay chi tiết mới
- **Rủi ro** — nhiễm bẩn do gỉ hoặc vảy sơn có thể gây thiệt hại lớn trong nhà máy thực phẩm và dược phẩm

Trong nhà kho khô ráo, SS400 thường là lựa chọn hợp lý. Trong môi trường ẩm ướt, yêu cầu vệ sinh hoặc ăn mòn nhẹ, SUS 304 thường tự bù đắp được chi phí.

## Giải Pháp Trung Gian

Trong một số ứng dụng, chỉ các bộ phận tiếp xúc với dòng khí mới cần inox. Hãy hỏi chúng tôi xem phương án cánh và vỏ quạt bằng inox, chân đế hoặc khung bằng thép carbon có phù hợp với dự án của bạn không.

## Những Câu Hỏi Chúng Tôi Sẽ Hỏi

- Quạt hút loại khí gì: khí sạch, hơi nước, dầu mỡ, bụi hay khí hóa chất?
- Nhiệt độ và độ ẩm bao nhiêu?
- Quạt đặt trong nhà, ngoài trời hay gần biển?
- Quạt có được rửa bằng nước không?

Gửi các thông tin trên qua WhatsApp +84 946 964 669 hoặc form báo giá, chúng tôi sẽ đề xuất vật liệu và báo giá quạt.`,
  },
  {
    slug: '1-bag-concrete-mixer-guide',
    title_en: '1 Bag Concrete Mixer: What It Is and Which to Buy',
    title_vi: 'Máy Trộn Bê Tông 1 Bao: Là Gì Và Nên Chọn Loại Nào',
    excerpt_en: 'What a 1 bag concrete mixer is, how much concrete one bag of cement makes, and why 350 L drum mixers are the usual one-bag size.',
    excerpt_vi: 'Máy trộn bê tông 1 bao là gì, một bao xi măng cho ra bao nhiêu bê tông, và vì sao máy trộn thùng 350 L là cỡ 1 bao phổ biến.',
    category: 'concrete-mixer',
    date: '2026-10-22',
    readTime: 6,
    image: '/images/process/finished.jpg',
    content_en: `"1 bag concrete mixer" is how many builders, dealers and rental shops describe the size of a drum mixer: a machine that mixes one 50 kg bag of cement, with the sand, stone and water that go with it, in a single batch. It is the most common mixer size on small and medium building sites, and for good reason.

## What "1 bag" means in practice

Concrete is usually measured on site by volume ratios of **cement : sand : stone**. A common general-purpose mix is 1:2:4. As a rule of thumb, a cubic metre of 1:2:4 concrete needs roughly 6.2 to 6.5 bags of 50 kg cement, so **one bag makes about 0.15–0.16 m³ of concrete**.

A one-bag mixer therefore has to turn over roughly 150–170 litres of wet concrete per batch with room to spare, because a drum is never filled to its nominal volume. The usable batch of a drum mixer is about 60–65% of the drum capacity.

## Why 350 L is the classic one-bag size

A 350 L drum gives about 200–220 L of mixed concrete per batch, which covers a one-bag batch comfortably, including richer mixes that produce more volume per bag. That is why our **350 L and 385 L** concrete mixers are sold as one-bag mixers.

- **250 L** — less than one full bag per batch. Good for repairs, small houses and tight sites.
- **350 L / 385 L** — the one-bag workhorse for houses, small buildings, footings and slabs.
- **420–500 L** — more than one bag per batch for larger jobs and higher daily output.

The exact batch always depends on your mix design, so treat these figures as a guide, not a specification.

## Choosing a 1 bag mixer

**Wheels and tyres.** Two-wheel models with large pneumatic 5.00-12 tyres tow and move easily on rough ground. Four-wheel models stand more steadily on uneven sites. Solid 4.00-8 tyres never go flat, which matters where tyre repair is hard to find.

**Engine.** Choose by what is available on site:
- **Electric** (2.2–5.5 kW, 220 V) — quiet and cheap to run where there is reliable power.
- **Gasoline** (GP160 / GP200) — light and easy to start, the usual choice for mobile work.
- **Diesel** — for remote sites and long working days.

**Drum steel.** Our 350 L drums use 2 mm steel for the upper drum and 2.5 mm for the lower drum, and the 385 L uses 2.5 mm and 3 mm. Thicker steel can be specified for heavy daily use.

## Getting the most out of each batch

- Add about half of the water first, then the stone, the sand and the cement, then the rest of the water.
- Do not overload the drum: a one-bag mixer is sized for one bag, and overfilling spills material and strains the drive.
- Mix until the colour is even, and keep the mixing time the same for every batch.
- Wash the drum out at the end of every day before concrete sets on the blades.

## Buying 1 bag concrete mixers from Vietnam

Phu Long builds 350 L and 385 L one-bag concrete mixers, also called cement mixers, in our factory in Ninh Binh, Vietnam, along with 250 L and 420–500 L models. Every mixer can be built with the engine, tyres, colour and logo your market needs, and several models can share one container.

Tell us your market, quantity and destination port on WhatsApp at +84 946 964 669 or through our quote form, and we will recommend the right one-bag model and send an FOB or CIF quote.`,
    content_vi: `"Máy trộn 1 bao" là cách thợ xây, đại lý và cửa hàng cho thuê thường gọi cỡ của máy trộn thùng quay: loại máy trộn được một bao xi măng 50 kg cùng lượng cát, đá và nước tương ứng trong một mẻ. Đây là cỡ máy trộn phổ biến nhất ở các công trình nhỏ và vừa.

## "1 bao" nghĩa là gì trong thực tế

Ở công trường, bê tông thường được đong theo tỷ lệ thể tích **xi măng : cát : đá**. Cấp phối thông dụng là 1:2:4. Theo kinh nghiệm chung, mỗi mét khối bê tông 1:2:4 cần khoảng 6,2 đến 6,5 bao xi măng 50 kg, nên **một bao cho ra khoảng 0,15–0,16 m³ bê tông**.

Vì vậy máy trộn 1 bao cần trộn được khoảng 150–170 lít bê tông ướt mỗi mẻ và còn dư chỗ, vì thùng trộn không bao giờ được đổ đầy tới dung tích danh định. Lượng trộn thực tế mỗi mẻ khoảng 60–65% dung tích thùng.

## Vì sao 350 L là cỡ 1 bao điển hình

Thùng 350 L cho khoảng 200–220 L bê tông mỗi mẻ, đủ cho một mẻ 1 bao, kể cả cấp phối giàu cho nhiều thể tích hơn mỗi bao. Đó là lý do các model **350 L và 385 L** của chúng tôi được bán như máy trộn 1 bao.

- **250 L** — chưa tới một bao mỗi mẻ. Phù hợp sửa chữa, nhà nhỏ và công trường chật.
- **350 L / 385 L** — máy trộn 1 bao chủ lực cho nhà ở, công trình nhỏ, móng và sàn.
- **420–500 L** — hơn một bao mỗi mẻ, cho công trình lớn và sản lượng ngày cao.

Lượng thực tế mỗi mẻ luôn phụ thuộc cấp phối, nên hãy coi các con số trên là tham khảo, không phải thông số kỹ thuật.

## Chọn máy trộn 1 bao

**Bánh và lốp.** Model 2 bánh lốp hơi lớn 5.00-12 dễ kéo và di chuyển trên nền gồ ghề. Model 4 bánh đứng vững hơn trên công trường không bằng phẳng. Lốp đặc 4.00-8 không bao giờ xẹp, rất hữu ích ở nơi khó sửa lốp.

**Động cơ.** Chọn theo điều kiện công trường:
- **Điện** (2,2–5,5 kW, 220 V) — êm, chi phí vận hành thấp khi có điện ổn định.
- **Xăng** (GP160 / GP200) — nhẹ, dễ khởi động, thường dùng cho công trình di động.
- **Diesel** — cho công trường xa và ngày làm việc dài.

**Thép thùng.** Thùng 350 L của chúng tôi dùng thép 2 mm cho thùng trên và 2,5 mm cho thùng dưới, model 385 L dùng 2,5 mm và 3 mm. Có thể đặt thép dày hơn cho máy chạy nặng hằng ngày.

## Để mỗi mẻ trộn đạt hiệu quả

- Cho khoảng một nửa lượng nước trước, rồi đến đá, cát và xi măng, sau đó phần nước còn lại.
- Không đổ quá tải: máy 1 bao được thiết kế cho một bao, đổ quá đầy sẽ rơi vãi vật liệu và làm nặng bộ truyền động.
- Trộn tới khi màu đồng đều, và giữ thời gian trộn giống nhau cho mọi mẻ.
- Rửa sạch thùng cuối mỗi ngày trước khi bê tông đông cứng trên cánh trộn.

## Nhập máy trộn 1 bao từ Việt Nam

Phú Long sản xuất máy trộn bê tông 1 bao 350 L và 385 L, còn gọi là máy trộn xi măng, tại nhà máy ở Ninh Bình, Việt Nam, cùng các model 250 L và 420–500 L. Mỗi máy có thể làm theo động cơ, lốp, màu sắc và logo mà thị trường của bạn cần, và có thể ghép nhiều model trong một container.

Cho chúng tôi biết thị trường, số lượng và cảng đến qua WhatsApp +84 946 964 669 hoặc form báo giá, chúng tôi sẽ đề xuất model 1 bao phù hợp và gửi báo giá FOB hoặc CIF.`,
  },
];
