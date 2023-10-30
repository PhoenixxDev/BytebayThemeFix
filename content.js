function rgbToHex(rgb) {
  const [r, g, b] = rgb.match(/\d+/g);
  return "#" + ((1 << 24) + (parseInt(r) << 16) + (parseInt(g) << 8) + parseInt(b)).toString(16).slice(1);
}

const style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = `
    a:hover {
        color: #008add !important;
    }
    a:hover:not([style*="color"]) {
        color: #008add !important;
    }
`;
document.getElementsByTagName('head')[0].appendChild(style);

function replaceColors() {
  const elements = document.getElementsByTagName('*');
  for (let i = 0; i < elements.length; i++) {
    const styles = window.getComputedStyle(elements[i]);
    const bgColor = rgbToHex(styles.backgroundColor);
    const textColor = rgbToHex(styles.color);

    if (
      (bgColor === '#2ecc71' || bgColor === '#27ae60' || bgColor === '#2cc670' || bgColor === '#27AE60') &&
      !elements[i].classList.contains('far') &&
      !elements[i].classList.contains('fa-gem')
    ) {
      elements[i].style.backgroundColor = '#008add';
    }

    if (
      (textColor === '#2ecc71' || textColor === '#27ae60' || textColor === '#2cc670' || textColor === '#27AE60') &&
      !elements[i].classList.contains('far') &&
      !elements[i].classList.contains('fa-gem')
    ) {
      elements[i].style.color = '#008add';
    }
  }

  const logo = document.querySelector("#logo");
  if (logo) {
    logo.style.filter = "hue-rotate(78deg)";
  }

  const style = document.createElement('style');
  style.innerHTML = `
    .thread_status:before {
      color: #008add !important;
    }

    .codeblock {
        background: #282828;
        border: 1px solid #008add;
        padding: 10px;
    }

    .codeblock .title {
        border-bottom: 1px solid #008add;
        font-weight: bold;
        padding-bottom: 3px;
        margin: 0 0 10px 0;
    }

    .pm_alert {
        background: #2b2b2b;
        text-align: center;
        padding: 12px 20px;
        margin-bottom: 15px;
        border-radius: 2px;
        font-size: 13px;
    }

    #container {
        background: #F6F6F6;
        color: rgb(165 165 165);
        text-align: left;
        line-height: 1.4;
        margin: 0;
        font-family: Roboto;
        font-size: 13px;
    }

    .trow_reputation_positive {
        background: #2b2b2b;
    }
  `;
  document.head.appendChild(style);
}

function replaceHeaderBlockBackground() {
  const headerBlock = document.querySelector("#header_block");
  if (headerBlock) {
    headerBlock.style.background = 'transparent url("https://cdn.discordapp.com/attachments/1156862916516130868/1168566816877051986/image.png?ex=65523ba8&is=653fc6a8&hm=618a4508e9629cf9087839c15cd528732f80f72ddf9f6d33582793eda6011862&") repeat fixed 0% 0%';
    headerBlock.style["border-bottom"] = '2px solid #008add';
  }

  const homeIcon = document.querySelector("#home_bit");
  if (homeIcon) {
    homeIcon.style.color = '#008add';
  }
}

function replaceFooterBorder() {
  const footerBlock = document.querySelector(".footer-distributed");
  if (footerBlock) {
    footerBlock.style.borderTop = '3px solid #008add';
  }
}

replaceColors();
replaceHeaderBlockBackground();
replaceFooterBorder();
