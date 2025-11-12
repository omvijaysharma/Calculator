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

function newWeb(url,n = "") {
    window.location.href = applyCipher(url,num) + n
}

function createButtons(container, list) {

    if (!container) {
        console.error("Container element not found!");
        return;
    }

    // ⭐ कंटेनर की क्लास चेक करें
    const isCartoonContainer = container.classList.contains('cartoon');

    list.forEach(data => {
        const button = document.createElement('div');
        
        // ⭐ शर्त के अनुसार क्लास जोड़ें
        if (isCartoonContainer) {
            button.classList.add('app-button'); // यदि कंटेनर में 'cartoon' क्लास है
        } else {
            button.classList.add('vid-button'); // अन्यथा, 'app-button' क्लास
        }
        
        // बाकी कोड समान रहेगा
        let src = applyCipher(data.imageSrc,num)
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
