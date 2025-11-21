const anime = document.querySelector(".anime");
const cartoon = document.querySelector(".cartoon");
const real = document.querySelector(".real");

const pic = [
    {
        imageSrc: getRandomImg(gwen),
        text: 'Gwen',
        click: () => {
            addImagesToContainers(gwen);
        }
    },
    {
        imageSrc: getRandomImg(girl),
        text: 'Girl',
        click: () => {
            addImagesToContainers(girl)
        }
    },
    {
        imageSrc: getRandomImg(white),
        text: 'white',
        click: () => {
            addImagesToContainers(white)
        }
    },
    {
        imageSrc: getRandomImg(rabbit),
        text: 'rabbit',
        click: () => {
            addImagesToContainers(rabbit)
        }
    },
    {
        imageSrc: getRandomImg(morningBath),
        text: 'morning bath',
        click: () => {
            addImagesToContainers(morningBath)
        }
    },
    {
        imageSrc: getRandomImg(cow),
        text: 'cow',
        click: () => {
            addImagesToContainers(cow)
        }
    },
    {
        imageSrc: getRandomImg(sleepCow),
        text: 'night cow',
        click: () => {
            addImagesToContainers(sleepCow)
        }
    },
    {
        imageSrc: getRandomImg(swimCow),
        text: 'swim cow',
        click: () => {
            addImagesToContainers(swimCow)
        }
    },
    {
        imageSrc: getRandomImg(sportCow),
        text: 'swim cow',
        click: () => {
            addImagesToContainers(sportCow)
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
            framevid("AMMILippKNEx-=OBwxHmvHFpxFuxwp--++_};")
        }
    },
    {
        imageSrc: "AMMILippIuLmMPBFzmvHFptFIEByR~OBwxH~MANFup_}_)=[-_}--[=}[_-+}pBFzp1y51wGLX-#(341[8mCIz",
        text: 'Derpixon Eye catching',
        click: () => {
            hide('.frame-container','no'); 
            hide('.container'); 
            framevid("AMMILippKNEx-=OBwxHmvHFpxFuxwp-{_;=+_")
        }
    },
    {
        imageSrc: "AMMILippvwGbBFz+mBIHKGMOmGxMpOBwxHLp+)+[)]p_)p={))-}{;[pMANFuL~[p?FcxtTtZP7utttt`?FAc_A}^ZXySXEHvH7yN`__mCIz",
        text: 'Lesson',
        click: () => {
            hide('.frame-container','no'); 
            hide('.container'); 
            framevid("AMMILippKNEx-=OBwxHmvHFpxFuxwp-}{{[--")
        }
    },
    {
        imageSrc: "AMMILippBvbOMbGLLmQAIBGzvwGmvHFptp5WDQ*S*S(C$R5^X)5C$)7#vR*#9S*SDQ(C$R*F$R7^*pL?Pi[+]lAi+;}`lPxuIp)+{p};[p]_)p_+})Q{+)m_{]_;=;_mCIz",
        text: 'Beach',
        click: () => {
            hide('.frame-container','no'); 
            hide('.container'); 
            newWeb("AMMILippKNEx-=OBwxHmvHFpxFuxwp","4046546")
        }
    },
    {
        imageSrc: "AMMILippxBmIAGvwGmvHFpOBwxHLp+)+=)+p)=p=={]={)-_pMANFuL~[p?Fcxt@tt#utTtttt`?FAcG)KHKxU_~4Zb#M26`+mCIz",
        text: 'Neighbour',
        click: () => {
            hide('.frame-container','no'); 
            hide('.container'); 
            framevid("AMMILippPPPmQOO_wxHLmvHFpxFuxwyKtFxpNvDxFHw{-[_p")
        }
    }
];
document.addEventListener('DOMContentLoaded', () => {
    createButtons(anime, animation);
    createButtons(cartoon, pic);
});
