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

function hide(ele, action = "") {
    let el = document.querySelector(ele);
    if (!el) return; // safety check
    if (action === 'no') {
        el.style.display = 'flex';
    } else {
        el.style.display = 'none';
    }
}

function addImagesToContainers(imageList) {
    function getContainerList() {
        if (window.innerWidth < window.innerHeight) {
            return [".img-container-1", ".img-container-2"];
        } else {
            return [".img-container-1", ".img-container-2", ".img-container-3", ".img-container-4"];
        }
    }

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

function fullscreen() {
    if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen(); // Enter fullscreen
  } else {
    document.exitFullscreen(); // Exit fullscreen
    }
}

function framevid(s) {
    document.querySelector("#frame").src = applyCipher(s, num)
}




