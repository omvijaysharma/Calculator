//=======================================================================
function applyCipher(text, num) { 
    const characterList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{};:'\",.<>/?`~";
    const listLength = characterList.length;
    
        if (isNaN(num)) {
            alert("Please enter a valid Shift Number (num).");
            return "";
        }
        const finalShift = num; 
        let result = "";
        const effectiveShift = (finalShift % listLength + listLength) % listLength;
        for (const char of text) {
            const charIndex = characterList.indexOf(char);
            if (charIndex === -1) {
                result += char;
            } else {
                const newIndex = (charIndex + effectiveShift) % listLength;
                result += characterList[newIndex];
            }
        }
        return result;
    }

function getkey() {
    const key = localStorage.getItem("KeY")
    
    if (key) {
        return parseInt(key)
    }else {
        return parseInt(prompt("enter"))
    }
}

const num = getkey()

//=======================================================================
function checkkeysave() {
    const keybtn = document.querySelector('.key-save')
    const keybtndiv = document.querySelector('.key-save div')
    const key = localStorage.getItem("KeY")
    
    if (key) {
        keybtn.style.alignItems = "flex-end"
        keybtndiv.style.backgroundColor = "#ff2bc7"
    }else {
        // remove
        keybtn.style.alignItems = "flex-start"
        keybtndiv.style.backgroundColor = "#fff"
    }
}
checkkeysave()

function keysave() {
    const key = localStorage.getItem("KeY")
    
    if (!key) {
        localStorage.setItem("KeY", num)
    }else {
        // remove
        localStorage.removeItem("KeY")
    }
    checkkeysave()
}
//=======================================================================
function hide(ele, action = "") {
    let el = document.querySelector(ele);
    if (!el) return;
    if (action === 'no') {
        el.style.display = 'flex';
    } else {
        el.style.display = 'none';
    }
}
//=======================================================================
let pdfList = [];
function pdf() { 
    const pdf = document.querySelector('.pdf')
    pdf.style.display = "flex"
    hide('.img-container'); 
    hide('.container');

    for (let i = 0; i < pdfList.length; i++) {
        if (pdf) {
            const img = document.createElement("img");
            img.src = pdfList[i];
            pdf.appendChild(img);
        }
    }
}
//=======================================================================
function addImagesToContainers(imageList) {
    pdfList = imageList
    function getContainerList() {
        if (window.innerWidth < window.innerHeight) {
            return [".img-container-1", ".img-container-2"];
        } else {
            return [".img-container-1", ".img-container-2", ".img-container-3", ".img-container-4"];
        }
    }

    hide('.img-container','no'); 
    hide('.container');
            
    const containers = getContainerList();

    for (let i = 0; i < imageList.length; i++) {
        const containerId = containers[i % containers.length];
        const container = document.querySelector(containerId);
        if (container) {
            const img = document.createElement("img");
            img.src = imageList[i];
            container.appendChild(img);
        }
    }
}
//=======================================================================
function fullscreen() {
    if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen(); 
  } else {
    document.exitFullscreen();
    }
}
//=======================================================================
function framevid(s) {
    document.querySelector("#frame").src = applyCipher(s, num)
}

function newWeb(url,n = "") {
    window.location.href = applyCipher(url,num) + n
}
//=======================================================================
function createButtons(container, list) {
    if (!container) {
        console.error("Container element not found!");
        return;
    }

    // List ko random order mein karo
    const shuffledList = [...list].sort(() => Math.random() - 0.5);

    const isCartoonContainer = container.classList.contains('cartoon');

    shuffledList.forEach(data => {
        const button = document.createElement('div');
        let src
        if (isCartoonContainer) {
            button.classList.add('app-button');
            src = data.imageSrc
        } else {
            button.classList.add('vid-button');
            src = applyCipher(data.imageSrc,num)
        }
        
        button.style.backgroundImage = `url('${src}')`;

        if (typeof data.click === 'function') {
            button.addEventListener('click', data.click);
        } else if (typeof data.click === 'string') {
             button.setAttribute('onclick', data.click);
        }

        const text = document.createElement('p');
        text.textContent = data.text;
        text.classList.add('button-text');

        button.appendChild(text);
        container.appendChild(button);
    });
}
//=======================================================================
function reloadOnShake() {
    if (!('DeviceMotionEvent' in window)) {
        console.log('Shaking not supported.');
        return;
    }

    const THRESHOLD = 15;
    let lastX = 0, lastY = 0, lastZ = 0;

    window.addEventListener('devicemotion', (event) => {
        const acc = event.accelerationIncludingGravity;

        if (lastX === 0 && lastY === 0 && lastZ === 0) {
            lastX = acc.x; lastY = acc.y; lastZ = acc.z;
            return;
        }

        const delta = Math.abs(acc.x - lastX) + Math.abs(acc.y - lastY) + Math.abs(acc.z - lastZ);

        if (delta > THRESHOLD) {
            console.log('Shaked! Reloading...');
            window.close(); 
        }

        lastX = acc.x; lastY = acc.y; lastZ = acc.z;
    });
}

reloadOnShake();
//=======================================================================
function closeTabOnLongPress() {
    const body = document.body;
    let pressTimer;

    body.addEventListener('touchstart', (e) => {
        pressTimer = setTimeout(() => {
            console.log('Long press detected! Trying to close tab...'); 
            window.location.reload(); 
        }, 1500); 
    });

    body.addEventListener('touchend', () => {
        clearTimeout(pressTimer);
    });
    body.addEventListener('touchmove', () => {
        clearTimeout(pressTimer);
    });
}
closeTabOnLongPress();
//=======================================================================
function getRandomImg(list) {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
}
