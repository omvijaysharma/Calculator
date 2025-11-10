const anime = document.querySelector(".anime");
const cartoon = document.querySelector(".cartoon");
const real = document.querySelector(".real");

const btn = [
    {
        imageSrc: "AMMILippxGmMAxAxGMtBmGxMpNIEHtwLpBFzp+)+=p);ptBbzxGxKtMxwbLIBwxKbzPxGbIHKGbvHFBvbxGzEBLAb)=mCIzmPxuI",
        text: 'Gwen',
        click: () => {
            hide('.img-container','no'); 
            hide('.container'); 
            addImagesToContainers(gwen);
        }
    },
    {
        imageSrc: "AMMILippK-=QRSmubvwGmGxMpIHLMLp=[{p=[{}{-p=[{}{-mLFtEEmCIz",
        text: 'Girl',
        click: () => {
            hide('.img-container','no'); 
            hide('.container');
        }
    }
];

function createButtons(container, list) {
    if (!container) {
        console.error("Container element not found!");
        return;
    }
    list.forEach(data => {
        const button = document.createElement('div');
        button.classList.add('app-button');
        let src = applyCipher(data.imageSrc,num)
        button.style.backgroundImage = `url('${src}')`;
        button.style.backgroundSize = 'cover';
        
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

document.addEventListener('DOMContentLoaded', () => {
    createButtons(anime, btn);
    createButtons(cartoon, btn);
    createButtons(real, btn);
});
