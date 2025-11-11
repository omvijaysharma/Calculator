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
const anime = document.querySelector(".anime");
const cartoon = document.querySelector(".cartoon");
const real = document.querySelector(".real");

const pic = [
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

const animation = [
    {
        imageSrc: "AMMILippAxGMtB)wtRmvHFpzxM~yBExp)p;;y;x){u{;_+)w[);w+u-+-x)u_t{t_{p-))))p-)={{pLvKxxGLAHMLp=mCIzp",
        text: 'Work out',
        click: () => {
            hide('.frame-container','no'); 
            hide('.container'); 
            framevid("AMMILippPPPmQOO_wxHLmvHFpxFuxwyKtFxpNvOxMDF=[}_")
        }
    },
    {
        imageSrc: "AMMILippvwGbBFz+mBIHKGMOmGxMpOBwxHLp+)+[)]p_)p={))-}{;[pMANFuL~[p?FcxtTtZP7utttt`?FAc_A}^ZXySXEHvH7yN`__mCIz",
        text: 'Work out',
        click: () => {
            hide('.frame-container','no'); 
            hide('.container'); 
            framevid("AMMILippBIHKGMOmGxMpwHPGEHtwpOBwxHp]}={yvu+xxuvwpLIBwxKbzPxGLbyBKLMbExLLHGbBGbEHOx")
        }
    },
    {
        imageSrc: "AMMILippvwGbBFz+mBIHKGMOmGxMpOBwxHLp+)+[)]p_)p={))-}{;[pMANFuL~[p?FcxtTtZP7utttt`?FAc_A}^ZXySXEHvH7yN`__mCIz",
        text: 'Work out',
        click: () => {
            hide('.frame-container','no'); 
            hide('.container'); 
            framevid("AMMILippPPPmQOO_wxHLmvHFpxFuxwyKtFxpNvDxFHw{-[_p")
        }
    }
];
document.addEventListener('DOMContentLoaded', () => {
    createButtons(cartoon, animation);
    createButtons(anime, pic);
    createButtons(real, pic);
});
