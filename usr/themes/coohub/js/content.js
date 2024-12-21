const shift = 3;
let arrays = [
    "守町兗毗",
    "世泫云伛贫DVPU皇罔竜"
]

let urls = [
    "https://zhainan18.me",
    "https://zhainan18.asia"
]

function encrypt(input, shift) {
    return input.split('').map(char => {
        const code = char.charCodeAt(0);
        // 处理英文字母
        if (char >= 'a' && char <= 'z') {
            return String.fromCharCode((code - 97 + shift) % 26 + 97);
        } else if (char >= 'A' && char <= 'Z') {
            return String.fromCharCode((code - 65 + shift) % 26 + 65);
        } else if (char >= '\u4e00' && char <= '\u9fff') { // 处理中文字符
            return String.fromCharCode((code - 0x4e00 + shift) % 20902 + 0x4e00);
        }
        // 非字母或中文字符保持不变
        return char;
    }).join('');
}

function decrypt(input, shift) {
    return encrypt(input, -shift); // 逆向位移
}

function updateContent() {
    let docTitle = document.getElementById("wb-title")
    docTitle.innerText = decrypt(arrays[0], shift)
    let docInfo = document.getElementById("wb-info")
    docInfo.innerText = decrypt(arrays[1], shift)
}

function addUrlToContainer() {
    const container = document.getElementById("url-container");
    if (container) {
        for (let i = 0; i < urls.length; i++) {
            const paragraph = document.createElement("p");
            paragraph.style.display = "block";
            paragraph.style.fontSize = "13px";
            paragraph.style.color = "#4c8d74";
            paragraph.style.margin = "8px 0";
            paragraph.textContent = "🌐 " + urls[i];
            container.appendChild(paragraph);
        }

    } else {
        console.error("Container with id 'url-container' not found.");
    }
}

updateContent()
addUrlToContainer()