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
            addImagesToContainers(girl)
        }
    },
    {
        imageSrc: "AMMILippxGmMAxAxGMtBmGxMpNIEHtwLpBFzp+)+=p)}ptBbzxGxKtMxwbGBxKbtNMHFtMtbIHKGbvHFBvbxGzEBLAb)_mCIzmPxuI",
        text: 'white',
        click: () => {
            hide('.img-container','no'); 
            hide('.container');
            addImagesToContainers(white)
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
        imageSrc: "AMMILippvwG{{bIBvmQOBwxHLbvwGmvHFpOBwxHLpMANFuL_];IHLMxKp-upwtpt=p-uwtt=;v_wv{;x)];t{x=;x[ww);}];]p-uwtt=;v_wv{;x)];t{x=;x[ww);}];]m[mCIz",
        text: 'Neighbour',
        click: () => {
            hide('.frame-container','no'); 
            hide('.container'); 
            framevid("AMMILippPPPmQOO_wxHLmvHFpxFuxwyKtFxpNvDxFHw{-[_p")
        }
    }
];
const vid = [
    {
        imageSrc: "AMMILippAxGMtB+)mBHpPIbvHGMxGMpNIEHtwLp+)+=p)}pvHEExzxbzKtwxLbLDRKHvDxMBGzb_;-Q+{}mCIz",
        text: 'College Grades Skyrocketing',
        click: () => {
            hide('.img-container','no'); 
            hide('.container'); 
            newWeb("AMMILippAxGMtB+)mBHpFtGztpvHEExzxbzKtwxLbLDRKHvDxMBGzp")
        }
    },
    {
        imageSrc: "AMMILippK-=QRSmubvwGmGxMpIHLMLp=[{p=[{}{-p=[{}{-mLFtEEmCIz",
        text: 'Girl',
        click: () => {
            hide('.img-container','no'); 
            hide('.container');
            addImagesToContainers(girl)
        }
    }
];
document.addEventListener('DOMContentLoaded', () => {
    createButtons(anime, animation);
    createButtons(cartoon, pic);
    createButtons(real, vid);
});
