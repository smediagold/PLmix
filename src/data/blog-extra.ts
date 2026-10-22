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
    image: '/images/factory/warehouse.jpg',
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
];
