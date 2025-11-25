// Transición de páginas
const startBtn = document.getElementById("start-btn");
const backBtn = document.getElementById("back-btn");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");

startBtn.addEventListener("click", () => {
  page1.style.display = "none";
  page2.style.display = "block";
});

backBtn.addEventListener("click", () => {
  page2.style.display = "none";
  page1.style.display = "flex";
});

// Arrays con links directos de Imgur
const recuadro1 = [
  "https://i.imgur.com/RJal2NW.jpg","https://i.imgur.com/0ZvjYHD.jpg","https://i.imgur.com/yXhQGFe.jpg",
  "https://i.imgur.com/nspc6Mg.jpg","https://i.imgur.com/yyWWji3.jpg","https://i.imgur.com/7GHrwja.jpg",
  "https://i.imgur.com/5UPKDGU.jpg","https://i.imgur.com/PyteipN.jpg","https://i.imgur.com/Lk0plaw.jpg",
  "https://i.imgur.com/JEce09K.jpg","https://i.imgur.com/hXTvQ6b.jpg","https://i.imgur.com/ijus8y5.jpg",
  "https://i.imgur.com/PRMcIfw.jpg","https://i.imgur.com/5mdVfNG.jpg","https://i.imgur.com/5y7BZdR.jpg",
  "https://i.imgur.com/fPQbOBL.jpg","https://i.imgur.com/QuZNXHD.jpg","https://i.imgur.com/P4vDWRw.jpg",
  "https://i.imgur.com/KzJbyJc.jpg","https://i.imgur.com/t0V3ct1.jpg"
];

const recuadro2 = [
  "https://i.imgur.com/WrLMfMv.jpg","https://i.imgur.com/4KCECOp.jpg","https://i.imgur.com/FikauIu.jpg",
  "https://i.imgur.com/gTB5jDY.jpg","https://i.imgur.com/tPeZ1M2.jpg","https://i.imgur.com/iBPAGA8.jpg",
  "https://i.imgur.com/wZtZhcT.jpg","https://i.imgur.com/GhVXbbd.jpg","https://i.imgur.com/xulnnkw.jpg",
  "https://i.imgur.com/eSjb6CC.jpg","https://i.imgur.com/5vpmG6p.jpg","https://i.imgur.com/i8iWddj.jpg",
  "https://i.imgur.com/sNSWPPD.jpg","https://i.imgur.com/PbruqVG.jpg","https://i.imgur.com/Tf4LAyR.jpg",
  "https://i.imgur.com/NX0d156.jpg","https://i.imgur.com/KlrodE6.jpg","https://i.imgur.com/vWQdYrI.jpg",
  "https://i.imgur.com/9CcxNdD.jpg","https://i.imgur.com/T6LiBEH.jpg"
];

const recuadro3 = [
  "https://i.imgur.com/3z6h3Mk.jpg","https://i.imgur.com/A7MwK78.jpg","https://i.imgur.com/457WW2O.jpg",
  "https://i.imgur.com/ehRpJKV.jpg","https://i.imgur.com/uQv6QcO.jpg","https://i.imgur.com/43vVR02.jpg",
  "https://i.imgur.com/bi3ezk6.jpg","https://i.imgur.com/3nywT9j.jpg","https://i.imgur.com/xU4rmuO.jpg",
  "https://i.imgur.com/mXfRnLA.jpg","https://i.imgur.com/z7suckB.jpg","https://i.imgur.com/QMV8TtK.jpg",
  "https://i.imgur.com/fBtApRx.jpg","https://i.imgur.com/wDiOYG3.jpg","https://i.imgur.com/tuGiQXi.jpg",
  "https://i.imgur.com/4y2U8Rg.jpg","https://i.imgur.com/hEcvfn7.jpg","https://i.imgur.com/TVECNI9.jpg",
  "https://i.imgur.com/amGqtZb.jpg","https://i.imgur.com/OyYxI19.jpg"
];

// Función para actualizar la imagen según el número ingresado
function updateImage(imgId, inputId, array) {
  const img = document.getElementById(imgId);
  const input = document.getElementById(inputId);

  input.addEventListener('input', () => {
    const num = parseInt(input.value);
    if(num >= 1 && num <= 20) {
      img.src = array[num - 1];
    }
  });
}

updateImage('img1', 'input1', recuadro1);
updateImage('img2', 'input2', recuadro2);
updateImage('img3', 'input3', recuadro3);