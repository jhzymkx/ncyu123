let i = 0;
let imgArr = new Array(); 

// 關鍵修正：網址前後必須加上引號
imgArr[0] = "https://i.pinimg.com/736x/99/38/2f/99382f77e068bb9066ad0f427746641c.jpg";
imgArr[1] = "https://i.pinimg.com/736x/c2/f1/86/c2f18600f8823055cddfa24e76323963.jpg";
imgArr[2] = "https://i.ebayimg.com/images/g/r1IAAOSw0~hlskuL/s-l1200.jpg";

function showImg() {
  // 確保 HTML 中有 <img id="ico"> 這個元素
  let target = document.getElementById('ico');
  if (target) {
    target.src = imgArr[i]; 
    i = (i + 1) % 3; 
  }
}

function show() {
  // 先執行一次，避免網頁剛載入時有 2 秒的空白
  showImg(); 
  setInterval(showImg, 2000); 
}