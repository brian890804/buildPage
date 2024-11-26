import { Button, Carousel, Timeline } from "antd";
import pic from "./assets/pic.jpg";
import picB from "./assets/pic1.jpg";

import pic1 from "./assets/1.jpg";
import pic2 from "./assets/2.jpg";
import pic3 from "./assets/3.jpg";
import pic4 from "./assets/4.jpg";
import pic5 from "./assets/5.jpg";
import pic6 from "./assets/6.jpg";
import pic7 from "./assets/7.jpg";
import pic8 from "./assets/8.jpg";
import pic9 from "./assets/9.jpg";
import pic10 from "./assets/10.jpg";
import pic11 from "./assets/11.jpg";
import pic12 from "./assets/12.jpg";
import pic13 from "./assets/13.jpg";
import pic14 from "./assets/14.jpg";
import pic15 from "./assets/15.jpg";
import pic16 from "./assets/16.jpg";
import pic17 from "./assets/17.jpg";
import pic18 from "./assets/18.jpg";
import pic19 from "./assets/19.jpg";
import pic20 from "./assets/20.jpg";
import pic21 from "./assets/21.jpg";
import pic22 from "./assets/22.jpg";
import pic23 from "./assets/23.jpg";
import pic23_1 from "./assets/23-1.jpg";
import pic24 from "./assets/24.jpg";
import pic25 from "./assets/25.jpg";
import pic26 from "./assets/26.jpg";
import pic27 from "./assets/27.jpg";
import pic28 from "./assets/28.jpg";
import pic29 from "./assets/29.jpg";
import pic30 from "./assets/30.jpg";
import pic31 from "./assets/31.jpg";
import pic32 from "./assets/32.jpg";
import pic33 from "./assets/33.jpg";
import pic34 from "./assets/34.jpg";
import pic35 from "./assets/35.jpg";
import pic36 from "./assets/36.jpg";
import pic37 from "./assets/37.jpg";
import pic38 from "./assets/38.jpg";
import pic39 from "./assets/39.jpg";
import pic40 from "./assets/40.jpg";
import pic41 from "./assets/41.jpg";
import pic42 from "./assets/42.jpg";
import pic43 from "./assets/43.jpg";
import pic44 from "./assets/44.jpg";
import pic45 from "./assets/45.jpg";
import pic46 from "./assets/46.jpg";
import pic47 from "./assets/47.jpg";
import pic48 from "./assets/48.jpg";
import "./index.css";

const App = () => {
  const contentStyle = {
    margin: 0,
    color: "#fff",
    textAlign: "center",
    background: "#364d79",
    height: 600,
    justifyContent: "center",
    alignItems: "center",
  };
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const imgItems = [
    pic1,
    pic2,
    pic3,
    pic4,
    pic5,
    pic6,
    pic7,
    pic8,
    pic9,
    pic10,
    pic11,
    pic12,
    pic13,
    pic14,
    pic15,
    pic16,
    pic17,
    pic18,
    pic19,
    pic20,
    pic21,
    pic22,
    pic23,
    pic23_1,
    pic24,
    pic25,
    pic26,
    pic27,
    pic38,
    pic40,
    pic36,
    pic30,
    pic29,
    pic28,
    pic35,
    pic41,
    pic42,
    pic48,
    pic47,
    pic45,
    pic43,
    pic44,
    pic46,
    pic,
    picB,
  ];
  const handleClick = () => {
    imgItems.forEach((image, index) => {
      const link = document.createElement("a");
      link.href = image;
      link.download = `image${index + 1}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };
  return (
    <>
      <Timeline
        items={[
          {
            color: "green",
            children: (
              <p>
                <p
                  style={{
                    fontSize: "20px",
                    color: "red",
                    fontWeight: "bolder",
                  }}
                >
                  我與哥吉拉社團Mr.Kaiju社員[楊世聖先生]購買疑點?!
                </p>
                <h5>其中有些都是用電話 所以細節不清楚 會在努力補上</h5>
                <h5>最後更新時間2024/07/23 15:44</h5>
              </p>
            ),
          },
          {
            color: "green",
            children: (
              <p style={{ color: "red" }}>
                <p>
                  7/7詢問[-1哥](哥吉拉公仔)並獲得楊世聖同意寄送店到店貨到付款($3600)
                  要等他回家後寄出
                </p>
                <p style={{ color: "red" }}>
                  訂完一哥後我詢問另一隻感興趣公仔[斯特洛伊亞](哥吉拉公仔)
                  ，同時楊世聖說他有訂4隻可以給我一隻，我就和楊世聖訂購戴[斯特洛伊亞](哥吉拉公仔)金額4000含運費
                </p>
              </p>
            ),
          },

          {
            color: "green",
            children: (
              <>
                <p>
                  7/8楊世聖告知[-1哥](哥吉拉公仔)在別的社團先被下標買走，且他的老婆已寄出
                </p>
                <p>
                  <p style={{ color: "red" }}>
                    然後楊世聖說:"下周還有一組會到 我直接出給你"
                  </p>
                  <p>並降價3600含運</p>
                </p>
              </>
            ),
          },
          {
            color: "red",
            children: (
              <>
                <p>
                  7/9
                  楊世聖通知[-1哥](哥吉拉公仔)被棄單他太太超不爽，可以給我但是要先收訂金而尾款
                  則是物流到達時會收(但後來電話說因上個棄單的賣家或是物流把包裹弄壞了(弄濕)不能給我需要自行處理。)
                  而在7/8楊世聖所說的他教的另一隻公仔也不知所云
                </p>
                <p>
                  告知訂購[斯特洛伊亞](哥吉拉公仔)因前面一隻公仔[-1哥](哥吉拉公仔)一直反起反落，而[斯特洛伊亞](哥吉拉公仔)便宜給我由4000降為3600
                </p>
                <p>同日我轉帳3660給他</p>
              </>
            ),
          },
          {
            color: "purple",
            children: (
              <>
                <p>7/9 楊世聖通知[斯特洛伊亞](哥吉拉公仔)在海關清關於7/9會到</p>
                <p>楊世聖通知[-1哥](哥吉拉公仔)於7/10會退回她家那邊的小7</p>
                <p>同日與楊世聖約面交周六(7/12)在汐止火車站面交時間下午1:00</p>
              </>
            ),
          },
          {
            color: "purple",
            children: (
              <>
                <p>7/12 我通知楊世聖隔日7/13可以面交嗎</p>
                <p>楊世聖通知還沒到</p>
              </>
            ),
          },
          {
            color: "green",
            children: (
              <>
                <p>7/15 我主動詢問楊世聖清關(海關)完成了嗎</p>
                <p>楊世聖回復待轉運了 快的話週三可到(7/17)</p>
              </>
            ),
          },
          {
            color: "green",
            children: (
              <>
                <p>7/17 我主動詢問今天有到嗎~</p>
                <p>楊世聖回轉運了 快的話週五可到(7/19)</p>
              </>
            ),
          },
          {
            color: "green",
            children: (
              <>
                <p>7/19 我主動詢問商品到了嗎到了今天可以拿</p>
                <p>
                  楊世聖回電說新竹物流運送中等待配送，假日可能沒營業要等下周，
                </p>
                <p> 我跟他要物流單號她說會請海關提供 (沒給)</p>
              </>
            ),
          },
          {
            color: "green",
            children: (
              <>
                <p>7/22 我主動詢問物流單號</p>
                <p>
                  楊世聖回電說新竹物流不收進口貨物因為超過規範，他會親自去拿並於周三(週三有大機率颱風假)(7/24)與我面交
                </p>
                <p>我跟他要物流單號她說會請海關提供</p>
              </>
            ),
          },
          {
            color: "green",
            children: (
              <>
                <p>7/23 因等待時間過長我主動詢問EZWAY進口畫面</p>
                <p>
                  楊世聖傳了一張給我但是這張圖片日期的部分是被圈起來的
                  202X/06/28 (X的部分被圈起來 但是有沒圈好的地方 明明顯示是2)
                </p>
                <p>
                  後來我與他再次通話他不是很開心地回答，我收回EZWAY畫面是因為個資問題
                  那你帳號給我我這邊直接退款給你
                </p>
                <p>後來協議保持原樣面交</p>
              </>
            ),
          },
          {
            color: "red",
            children: (
              <p>
                ----------------------------------------------------------------------
              </p>
            ),
          },
          {
            color: "red",
            children: (
              <p>
                <p>疑點</p>
                <p>
                  1.楊世聖告知因體積問題新竹物流拒收，而後我問他運了甚麼，他說只運我的公仔
                  (大小大概40*30)怎麼可能新竹物流會不收
                </p>
                <p>
                  2.楊世聖傳給我的EZWAY清關畫面雖日期被圈塗起來
                  但是還是隱約看到的年份是(2022而非2024)
                </p>
                <p>
                  3.在網路上可以搜尋到多筆關於楊世聖的刑事紀錄、支付命令，而有多筆小額詐欺金額2000~6000不等
                  懷疑挖東牆補西牆
                </p>
                <p>
                  4.我發現EZWAY年份不符合(雖有稍微被遮擋但隱約看的出來)跟楊世聖說(他不是很高興的跟我說要退款)
                  這邊我就更篤定我的猜想
                  他是借東補西假借買賣名義實則填補小額財務漏洞，
                  同時詐騙多位受害人，並沒有出貨的打算。
                </p>
                <p>5.楊世聖說7/9清關完成 但是EZWAY上面寫202X/06/28</p>
                <p>
                  6.楊世聖於7/9說他有訂購4隻[斯特洛伊亞](哥吉拉公仔)
                  [斯特洛伊亞](哥吉拉公仔) 但於7/23跟我說只運送我的那隻而已?
                </p>
              </p>
            ),
          },
          {
            color: "red",
            children: (
              <p>
                ----------------------------------------------------------------------
              </p>
            ),
          },
          {
            color: "red",
            children: (
              <p>
                <p>結</p>
                <p>
                  感謝大家看，購買任何東西請確認對方個人資料內容是否充足，最好以面交為主，若有任何疑慮先去備案，不要幫對方任何行為合理化。
                </p>
              </p>
            ),
          },
          {
            color: "red",
            children: (
              <p>
                <p>佐證圖片</p>
                <p></p>
              </p>
            ),
          },
        ]}
      />
      <Carousel afterChange={onChange} arrows infinite={false}>
        {imgItems.map((item, index) => (
          <div key={index} >
            <img src={item} style={contentStyle} alt={`pic${index}`} />
          </div>
        ))}
      </Carousel>
      <Carousel arrows infinite={false}></Carousel>
      <Button onClick={handleClick}>下載圖檔</Button>
    </>
  );
};
export default App;
