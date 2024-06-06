const menu = document.querySelector('.menu');
const closeIcon = document.querySelector('.close');
const vertical = document.querySelector('.vertical-navigation');
const cancel = document.querySelector('.close');
const fruits = document.querySelector('.frutia');
const fruti = document.querySelector('.fruti');
const apples = document.querySelector('.apple');
const space = document.querySelector('.space');
const vegebat = document.querySelector('.vege-link');
const vege = document.querySelector('.vege');
const straw = document.querySelector('.straw');
const melon = document.querySelector('.melon');
const mango = document.querySelector('.mango');
const orange = document.querySelector('.orange');
const plums = document.querySelector('.plums');
const pine = document.querySelector('.pine');
const carrot = document.querySelector('.carrot');
const tomato = document.querySelector('.tomato');
const onion = document.querySelector('.onion');
const berry = document.querySelector('.berry');
const spinach = document.querySelector('.spinach');
const ginger = document.querySelector('.ginger');
const brocolli = document.querySelector('.brocolli');
const lettuce = document.querySelector('.lettuce');
const garlic = document.querySelector('.garlic');
const cucumber = document.querySelector('.cucumber');
const green = document.querySelector('.green');
const pumkin = document.querySelector('.pumkin');
const vegeinfo = document.querySelector('.vege-info');
const frutiinfo = document.querySelector('.fruti-info');
const pineinfo = document.querySelector('.pin');
const appleImage = document.querySelector('.apple-image');
const strawImage = document.querySelector('.straw-image');
const waterImage = document.querySelector('.water-image');
const mangoImage = document.querySelector('.mango-image');
const orangeImage = document.querySelector('.orange-image');
const berryImage = document.querySelector('.berry-image');
const plumImage = document.querySelector('.plum-image');
const spinachImage = document.querySelector('.spinach-image');
const lettuceImage = document.querySelector('.lettuce-image');
const brocolliImage = document.querySelector('.brocolli-image');
const cucumberImage = document.querySelector('.cucumber-image');
const pumkinImage = document.querySelector('.pumkin-image');
const tomatoImage = document.querySelector('.tomato-image');
const onionImage = document.querySelector('.onion-image');
const carrotImage = document.querySelector('.carrot-image');
const gingerImage = document.querySelector('.ginger-image');
const garlicImage = document.querySelector('.garlic-image');
const greenImage = document.querySelector('.green-image');
const honeyLink = document.querySelector('.honey-link');
const honey = document.querySelector('.honey');
const clover = document.querySelector('.clover');
const upButton = document.querySelector('.drop');
const downButton = document.querySelector('.pick');
const dandelion = document.querySelector('.dandelion');
const upButtonDa = document.querySelector('.dropda');
const see = document.querySelector('.see');
const seeda = document.querySelector('.seeda');
const card = document.querySelector('.card');
const cardBackside = document.querySelector('.backside');
const closeFlip = document.querySelector('.closeflip');
const confirmOrderButton = document.getElementById('confirm-order');
const orderForm = document.getElementById('confirmation-form');
const detailsForm = document.getElementById('details-form');
const orderSummary = document.getElementById('order-summary');
const copyOrderButton = document.getElementById('copy-order');
const confirmationForm = document.getElementById('confirmation-form');
const cardBacksideda = document.querySelector('.backsideda');




menu.addEventListener('click', () => {
    vertical.classList.add('active');
    menu.classList.add('active');
    closeIcon.classList.add('active');
    plumImage.classList.remove('disabled');
});

closeIcon.addEventListener('click', () => {
    vertical.classList.remove('active');
    cardBackside.classList.remove('pop');
    closeIcon.classList.remove('active');
    menu.classList.remove('active');
    clover.classList.remove('active');
    dandelion.classList.remove('active');
    honey.classList.remove('active');
    space.classList.remove('fruitdisplay');
    frutiinfo.classList.remove('active');
    vegeinfo.classList.remove('active');
    fruti.classList.remove('active');
    vege.classList.remove('active');
    pineinfo.classList.remove('active');
    strawImage.classList.remove('active');
    appleImage.classList.remove('active');
    waterImage.classList.remove('active');
    berryImage.classList.remove('active');
    orangeImage.classList.remove('active');
    plumImage.classList.remove('active', 'disabled');
    mangoImage.classList.remove('active');
    appleImage.classList.remove('active');
    tomatoImage.classList.remove('active');
    spinachImage.classList.remove('active');
    pumkinImage.classList.remove('active');
    lettuceImage.classList.remove('active');
    cucumberImage.classList.remove('active');
    brocolliImage.classList.remove('active');
    berryImage.classList.remove('active');
    onionImage.classList.remove('active');
    garlicImage.classList.remove('active');
    gingerImage.classList.remove('active');
    carrotImage.classList.remove('active');
    greenImage.classList.remove('active');
    space.classList.remove('appledisplay', 'berrydisplay', 'honeydisplay', 'pinedisplay', 'strawdisplay', 'melondisplay', 'mangodisplay', 'orangedisplay', 'plumdisplay', 'carrotdisplay', 'oniondisplay', 'cucumberdisplay', 'lettucedisplay', 'spinachdisplay', 'greendisplay', 'pumkindisplay', 'brocollidisplay', 'garlicdisplay', 'gingerdisplay', 'tomatodisplay');
});

apples.addEventListener('click', () => {
    space.classList.add('appledisplay');
    space.classList.remove('pinedisplay', 'honeydisplay', 'strawdisplay', 'melondisplay', 'mangodisplay', 'orangedisplay', 'plumdisplay', 'berrydisplay', 'carrotdisplay', 'oniondisplay', 'cucumberdisplay', 'lettucedisplay', 'spinachdisplay', 'greendisplay', 'pumkindisplay', 'brocollidisplay', 'garlicdisplay', 'gingerdisplay', 'tomatodisplay');
    frutiinfo.classList.remove('active');
    pineinfo.classList.remove('active');
    strawImage.classList.remove('active');
    waterImage.classList.remove('active');
    berryImage.classList.remove('active');
    orangeImage.classList.remove('active');
    plumImage.classList.remove('active', 'disabled');
    mangoImage.classList.remove('active');
    appleImage.classList.add('active');
});


fruits.addEventListener('click', () => {
    space.classList.add('fruitdisplay');
    space.classList.remove('appledisplay', 'honeydisplay', 'pinedisplay', 'strawdisplay', 'melondisplay', 'mangodisplay', 'orangedisplay', 'plumdisplay', 'berrydisplay', 'carrotdisplay', 'oniondisplay', 'cucumberdisplay', 'lettucedisplay', 'spinachdisplay', 'greendisplay', 'pumkindisplay', 'brocollidisplay', 'garlicdisplay', 'gingerdisplay', 'tomatodisplay');
    frutiinfo.classList.add('active');
    vegeinfo.classList.remove('active');
    honey.classList.remove('active');
    vege.classList.remove('active');
    fruti.classList.add('active');
    cardBackside.classList.remove('pop');
    pineinfo.classList.remove('active');
    strawImage.classList.remove('active');
    appleImage.classList.remove('active');
    waterImage.classList.remove('active');
    berryImage.classList.remove('active');
    orangeImage.classList.remove('active');
    plumImage.classList.remove('active', 'disabled');
    mangoImage.classList.remove('active');
    appleImage.classList.remove('active');
    tomatoImage.classList.remove('active');
    spinachImage.classList.remove('active');
    pumkinImage.classList.remove('active');
    lettuceImage.classList.remove('active');
    cucumberImage.classList.remove('active');
    brocolliImage.classList.remove('active');
    berryImage.classList.remove('active');
    onionImage.classList.remove('active');
    garlicImage.classList.remove('active');
    gingerImage.classList.remove('active');
    carrotImage.classList.remove('active');
    greenImage.classList.remove('active');
    clover.classList.remove('active');
    dandelion.classList.remove('active');
});

vegebat.addEventListener('click', () => {
    space.classList.add('fruitdisplay');
    space.classList.remove('appledisplay', 'honeydisplay', 'pinedisplay', 'strawdisplay', 'melondisplay', 'mangodisplay', 'orangedisplay', 'plumdisplay', 'berrydisplay', 'carrotdisplay', 'oniondisplay', 'cucumberdisplay', 'lettucedisplay', 'spinachdisplay', 'greendisplay', 'pumkindisplay', 'brocollidisplay', 'garlicdisplay', 'gingerdisplay', 'tomatodisplay');
    frutiinfo.classList.remove('active');
    vegeinfo.classList.add('active');
    honey.classList.remove('active');
    clover.classList.remove('active');
    dandelion.classList.remove('active');
    cardBackside.classList.remove('pop');
    pineinfo.classList.remove('active');
    strawImage.classList.remove('active');
    appleImage.classList.remove('active');
    waterImage.classList.remove('active');
    berryImage.classList.remove('active');
    orangeImage.classList.remove('active');
    plumImage.classList.remove('active', 'disabled');
    mangoImage.classList.remove('active');
    fruti.classList.remove('active');
    vege.classList.add('active');
    appleImage.classList.remove('active');
    tomatoImage.classList.remove('active');
    spinachImage.classList.remove('active');
    pumkinImage.classList.remove('active');
    lettuceImage.classList.remove('active');
    cucumberImage.classList.remove('active');
    brocolliImage.classList.remove('active');
    berryImage.classList.remove('active');
    onionImage.classList.remove('active');
    garlicImage.classList.remove('active');
    gingerImage.classList.remove('active');
    carrotImage.classList.remove('active');
    greenImage.classList.remove('active');
});


pine.addEventListener('click', () => {
    space.classList.add('pinedisplay');
    pineinfo.classList.add('active');
    space.classList.remove('fruti-info', 'honeydisplay', 'appledisplay', 'strawdisplay', 'melondisplay', 'mangodisplay', 'orangedisplay', 'plumdisplay', 'berrydisplay', 'carrotdisplay', 'oniondisplay', 'cucumberdisplay', 'lettucedisplay', 'spinachdisplay', 'greendisplay', 'pumkindisplay', 'brocollidisplay', 'garlicdisplay', 'gingerdisplay', 'tomatodisplay');
    frutiinfo.classList.remove('active');
    strawImage.classList.remove('active');
    appleImage.classList.remove('active');
    waterImage.classList.remove('active');
    berryImage.classList.remove('active');
    orangeImage.classList.remove('active');
    plumImage.classList.remove('active', 'disabled');
    mangoImage.classList.remove('active');
});


straw.addEventListener('click', () => {
    space.classList.add('strawdisplay');
    space.classList.remove('appledisplay', 'honeydisplay', 'pinedisplay', 'melondisplay', 'mangodisplay', 'orangedisplay', 'plumdisplay', 'berrydisplay', 'carrotdisplay', 'oniondisplay', 'cucumberdisplay', 'lettucedisplay', 'spinachdisplay', 'greendisplay', 'pumkindisplay', 'brocollidisplay', 'garlicdisplay', 'gingerdisplay', 'tomatodisplay');
    frutiinfo.classList.remove('active');
    pineinfo.classList.remove('active');
    appleImage.classList.remove('active');
    waterImage.classList.remove('active');
    berryImage.classList.remove('active');
    orangeImage.classList.remove('active');
    plumImage.classList.remove('active', 'disabled');
    mangoImage.classList.remove('active');
    strawImage.classList.add('active');
});



melon.addEventListener('click', () => {
    space.classList.add('melondisplay');
    frutiinfo.classList.remove('active');
    pineinfo.classList.remove('active');
    strawImage.classList.remove('active');
    appleImage.classList.remove('active');
    waterImage.classList.add('active');
    berryImage.classList.remove('active');
    orangeImage.classList.remove('active');
    plumImage.classList.remove('active', 'disabled');
    mangoImage.classList.remove('active');
    space.classList.remove('appledisplay', 'honeydisplay', 'pinedisplay', 'strawdisplay', 'mangodisplay', 'orangedisplay', 'plumdisplay', 'berrydisplay', 'carrotdisplay', 'oniondisplay', 'cucumberdisplay', 'lettucedisplay', 'spinachdisplay', 'greendisplay', 'pumkindisplay', 'brocollidisplay', 'garlicdisplay', 'gingerdisplay', 'tomatodisplay');
});



mango.addEventListener('click', () => {
    space.classList.add('mangodisplay');
    frutiinfo.classList.remove('active');
    pineinfo.classList.remove('active');
    strawImage.classList.remove('active');
    appleImage.classList.remove('active');
    waterImage.classList.remove('active');
    berryImage.classList.remove('active');
    orangeImage.classList.remove('active');
    plumImage.classList.remove('active', 'disabled');
    mangoImage.classList.add('active');
    mangoImage.classList.add('active');
    space.classList.remove('appledisplay', 'honeydisplay', 'pinedisplay', 'strawdisplay', 'melondisplay', 'orangedisplay', 'plumdisplay', 'berrydisplay', 'carrotdisplay', 'oniondisplay', 'cucumberdisplay', 'lettucedisplay', 'spinachdisplay', 'greendisplay', 'pumkindisplay', 'brocollidisplay', 'garlicdisplay', 'gingerdisplay', 'tomatodisplay');
});



orange.addEventListener('click', () => {
    space.classList.add('orangedisplay');
    frutiinfo.classList.remove('active');
    pineinfo.classList.remove('active');
    strawImage.classList.remove('active');
    appleImage.classList.remove('active');
    waterImage.classList.remove('active');
    berryImage.classList.remove('active');
    plumImage.classList.remove('active', 'disabled');
    mangoImage.classList.remove('active');
    orangeImage.classList.add('active');
    space.classList.remove('appledisplay', 'honeydisplay', 'pinedisplay', 'strawdisplay', 'melondisplay', 'mangodisplay', 'plumdisplay', 'berrydisplay', 'carrotdisplay', 'oniondisplay', 'cucumberdisplay', 'lettucedisplay', 'spinachdisplay', 'greendisplay', 'pumkindisplay', 'brocollidisplay', 'garlicdisplay', 'gingerdisplay', 'tomatodisplay');
});

plums.addEventListener('click', () => {
    space.classList.add('plumdisplay');
    frutiinfo.classList.remove('active');
    pineinfo.classList.remove('active');
    strawImage.classList.remove('active');
    appleImage.classList.remove('active');
    waterImage.classList.remove('active');
    berryImage.classList.remove('active');
    orangeImage.classList.remove('active');
    plumImage.classList.add('active', 'disabled');
    mangoImage.classList.remove('active');
    space.classList.remove('appledisplay', 'honeydisplay', 'pinedisplay', 'strawdisplay', 'melondisplay', 'mangodisplay', 'orangedisplay', 'berrydisplay', 'carrotdisplay', 'oniondisplay', 'cucumberdisplay', 'lettucedisplay', 'spinachdisplay', 'greendisplay', 'pumkindisplay', 'brocollidisplay', 'garlicdisplay', 'gingerdisplay', 'tomatodisplay');
});


berry.addEventListener('click', () => {
    space.classList.add('berrydisplay');
    frutiinfo.classList.remove('active');
    pineinfo.classList.remove('active');
    strawImage.classList.remove('active');
    appleImage.classList.remove('active');
    waterImage.classList.remove('active');
    berryImage.classList.add('active');
    orangeImage.classList.remove('active');
    plumImage.classList.remove('active', 'disabled');
    mangoImage.classList.remove('active');
    space.classList.remove('appledisplay', 'honeydisplay', 'pinedisplay', 'strawdisplay', 'melondisplay', 'mangodisplay', 'orangedisplay', 'carrotdisplay', 'oniondisplay', 'cucumberdisplay', 'lettucedisplay', 'spinachdisplay', 'greendisplay', 'pumkindisplay', 'brocollidisplay', 'garlicdisplay', 'gingerdisplay', 'tomatodisplay');
});



carrot.addEventListener('click', () => {
    space.classList.add('carrotdisplay');
    vegeinfo.classList.remove('active');
    carrotImage.classList.add('active');
    spinachImage.classList.remove('active');
    pumkinImage.classList.remove('active');
    lettuceImage.classList.remove('active');
    cucumberImage.classList.remove('active');
    brocolliImage.classList.remove('active');
    tomatoImage.classList.remove('active');
    berryImage.classList.remove('active');
    onionImage.classList.remove('active');
    garlicImage.classList.remove('active');
    gingerImage.classList.remove('active');
    greenImage.classList.remove('active');
    space.classList.remove('tomatodisplay', 'honeydisplay', 'oniondisplay', 'cucumberdisplay', 'lettucedisplay', 'spinachdisplay', 'greendisplay', 'pumkindisplay', 'brocollidisplay', 'garlicdisplay', 'gingerdisplay', 'oniondisplay', 'cucumberdisplay', 'lettucedisplay', 'spinachdisplay', 'greendisplay', 'pumkindisplay', 'brocollidisplay', 'garlicdisplay', 'gingerdisplay', 'tomatodisplay');
});



tomato.addEventListener('click', () => {
    space.classList.add('tomatodisplay');
    vegeinfo.classList.remove('active');
    tomatoImage.classList.add('active');
    spinachImage.classList.remove('active');
    pumkinImage.classList.remove('active');
    lettuceImage.classList.remove('active');
    cucumberImage.classList.remove('active');
    brocolliImage.classList.remove('active');
    berryImage.classList.remove('active');
    onionImage.classList.remove('active');
    garlicImage.classList.remove('active');
    gingerImage.classList.remove('active');
    carrotImage.classList.remove('active');
    greenImage.classList.remove('active');
    space.classList.remove('carrotdisplay', 'honeydisplay', 'oniondisplay', 'cucumberdisplay', 'lettucedisplay', 'spinachdisplay', 'greendisplay', 'pumkindisplay', 'brocollidisplay', 'garlicdisplay', 'gingerdisplay', 'appledisplay', 'pinedisplay', 'strawdisplay', 'melondisplay', 'mangodisplay', 'orangedisplay', 'plumdisplay', 'berryisplay');
});


onion.addEventListener('click', () => {
    space.classList.add('oniondisplay');
    vegeinfo.classList.remove('active');
    onionImage.classList.add('active');
    spinachImage.classList.remove('active');
    pumkinImage.classList.remove('active');
    lettuceImage.classList.remove('active');
    cucumberImage.classList.remove('active');
    brocolliImage.classList.remove('active');
    tomatoImage.classList.remove('active');
    berryImage.classList.remove('active');
    garlicImage.classList.remove('active');
    gingerImage.classList.remove('active');
    carrotImage.classList.remove('active');
    greenImage.classList.remove('active');
    space.classList.remove('tomatodisplay', 'honeydisplay', 'carrotdisplay', 'cucumberdisplay', 'lettucedisplay', 'spinachdisplay', 'greendisplay', 'pumkindisplay', 'brocollidisplay', 'garlicdisplay', 'gingerdisplay', 'appledisplay', 'pinedisplay', 'strawdisplay', 'melondisplay', 'mangodisplay', 'orangedisplay', 'plumdisplay', 'berrydisplay');
});


cucumber.addEventListener('click', () => {
    space.classList.add('cucumberdisplay');
    vegeinfo.classList.remove('active');
    cucumberImage.classList.add('active');
    spinachImage.classList.remove('active');
    pumkinImage.classList.remove('active');
    lettuceImage.classList.remove('active');
    brocolliImage.classList.remove('active');
    tomatoImage.classList.remove('active');
    berryImage.classList.remove('active');
    onionImage.classList.remove('active');
    garlicImage.classList.remove('active');
    gingerImage.classList.remove('active');
    carrotImage.classList.remove('active');
    greenImage.classList.remove('active');
    space.classList.remove('tomatodisplay', 'honeydisplay', 'oniondisplay', 'carrotdisplay', 'lettucedisplay', 'spinachdisplay', 'greendisplay', 'pumkindisplay', 'brocollidisplay', 'garlicdisplay', 'gingerdisplay', 'appledisplay', 'pinedisplay', 'strawdisplay', 'melondisplay', 'mangodisplay', 'orangedisplay', 'plumdisplay', 'berrydisplay');
});



lettuce.addEventListener('click', () => {
    space.classList.add('lettucedisplay');
    vegeinfo.classList.remove('active');
    lettuceImage.classList.add('active');
    spinachImage.classList.remove('active');
    pumkinImage.classList.remove('active');
    cucumberImage.classList.remove('active');
    brocolliImage.classList.remove('active');
    tomatoImage.classList.remove('active');
    berryImage.classList.remove('active');
    onionImage.classList.remove('active');
    garlicImage.classList.remove('active');
    gingerImage.classList.remove('active');
    carrotImage.classList.remove('active');
    greenImage.classList.remove('active');
    space.classList.remove('tomatodisplay', 'honeydisplay', 'carrotdisplay', 'oniondisplay', 'cucumberdisplay', 'carrotdisplay', 'spinachdisplay', 'greendisplay', 'pumkindisplay', 'brocollidisplay', 'garlicdisplay', 'gingerdisplay', 'appledisplay', 'pinedisplay', 'strawdisplay', 'melondisplay', 'mangodisplay', 'orangedisplay', 'plumdisplay', 'berrydisplay');
});


spinach.addEventListener('click', () => {
    space.classList.add('spinachdisplay');
    vegeinfo.classList.remove('active');
    spinachImage.classList.add('active');
    pumkinImage.classList.remove('active');
    lettuceImage.classList.remove('active');
    cucumberImage.classList.remove('active');
    brocolliImage.classList.remove('active');
    tomatoImage.classList.remove('active');
    berryImage.classList.remove('active');
    onionImage.classList.remove('active');
    garlicImage.classList.remove('active');
    gingerImage.classList.remove('active');
    carrotImage.classList.remove('active');
    greenImage.classList.remove('active');
    space.classList.remove('tomatodisplay', 'honeydisplay', 'carrotdisplay', 'cucumberdisplay', 'lettucedisplay', 'carrotdisplay', 'greendisplay', 'pumkindisplay', 'brocollidisplay', 'garlicdisplay', 'gingerdisplay', 'appledisplay', 'pinedisplay', 'strawdisplay', 'melondisplay', 'mangodisplay', 'orangedisplay', 'plumdisplay', 'berrydisplay');
});


green.addEventListener('click', () => {
    space.classList.add('greendisplay');
    vegeinfo.classList.remove('active');
    greenImage.classList.add('active');
    spinachImage.classList.remove('active');
    pumkinImage.classList.remove('active');
    lettuceImage.classList.remove('active');
    cucumberImage.classList.remove('active');
    brocolliImage.classList.remove('active');
    tomatoImage.classList.remove('active');
    berryImage.classList.remove('active');
    onionImage.classList.remove('active');
    garlicImage.classList.remove('active');
    gingerImage.classList.remove('active');
    carrotImage.classList.remove('active');
    space.classList.remove('tomatodisplay', 'honeydisplay', 'oniondisplay', 'cucumberdisplay', 'lettucedisplay', 'spinachdisplay', 'carrotdisplay', 'pumkindisplay', 'brocollidisplay', 'garlicdisplay', 'gingerdisplay', 'appledisplay', 'pinedisplay', 'strawdisplay', 'melondisplay', 'mangodisplay', 'orangedisplay', 'plumdisplay', 'berrydisplay');
});



pumkin.addEventListener('click', () => {
    space.classList.add('pumkindisplay');
    vegeinfo.classList.remove('active');
    pumkinImage.classList.add('active');
    spinachImage.classList.remove('active');
    lettuceImage.classList.remove('active');
    cucumberImage.classList.remove('active');
    brocolliImage.classList.remove('active');
    tomatoImage.classList.remove('active');
    berryImage.classList.remove('active');
    onionImage.classList.remove('active');
    garlicImage.classList.remove('active');
    gingerImage.classList.remove('active');
    carrotImage.classList.remove('active');
    greenImage.classList.remove('active');
    space.classList.remove('tomatodisplay', 'honeydisplay', 'carrotdisplay', 'oniondisplay', 'cucumberdisplay', 'lettucedisplay', 'spinachdisplay', 'greendisplay', 'carrotdisplay', 'brocollidisplay', 'garlicdisplay', 'gingerdisplay', 'appledisplay', 'pinedisplay', 'strawdisplay', 'melondisplay', 'mangodisplay', 'orangedisplay', 'plumdisplay', 'berrydisplay');
});


brocolli.addEventListener('click', () => {
    space.classList.add('brocollidisplay');
    vegeinfo.classList.remove('active');
    brocolliImage.classList.add('active');
    spinachImage.classList.remove('active');
    pumkinImage.classList.remove('active');
    lettuceImage.classList.remove('active');
    cucumberImage.classList.remove('active');
    tomatoImage.classList.remove('active');
    berryImage.classList.remove('active');
    onionImage.classList.remove('active');
    garlicImage.classList.remove('active');
    gingerImage.classList.remove('active');
    carrotImage.classList.remove('active');
    greenImage.classList.remove('active');
    space.classList.remove('tomatodisplay', 'honeydisplay', 'oniondisplay', 'cucumberdisplay', 'lettucedisplay', 'spinachdisplay', 'greendisplay', 'pumkindisplay', 'carrotdisplay', 'garlicdisplay', 'gingerdisplay', 'appledisplay', 'pinedisplay', 'strawdisplay', 'melondisplay', 'mangodisplay', 'orangedisplay', 'plumdisplay', 'berrydisplay');
});


garlic.addEventListener('click', () => {
    space.classList.add('garlicdisplay');
    vegeinfo.classList.remove('active');
    garlicImage.classList.add('active');
    spinachImage.classList.remove('active');
    pumkinImage.classList.remove('active');
    lettuceImage.classList.remove('active');
    cucumberImage.classList.remove('active');
    brocolliImage.classList.remove('active');
    tomatoImage.classList.remove('active');
    berryImage.classList.remove('active');
    onionImage.classList.remove('active');
    gingerImage.classList.remove('active');
    carrotImage.classList.remove('active');
    greenImage.classList.remove('active');
    space.classList.remove('tomatodisplay', 'honeydisplay', 'oniondisplay', 'cucumberdisplay', 'lettucedisplay', 'spinachdisplay', 'greendisplay', 'pumkindisplay', 'brocollidisplay', 'carrotdisplay', 'gingerdisplay', 'appledisplay', 'pinedisplay', 'strawdisplay', 'melondisplay', 'mangodisplay', 'orangedisplay', 'plumdisplay', 'berrydisplay');
});



ginger.addEventListener('click', () => {
    space.classList.add('gingerdisplay');
    vegeinfo.classList.remove('active');
    gingerImage.classList.add('active');
    spinachImage.classList.remove('active');
    pumkinImage.classList.remove('active');
    lettuceImage.classList.remove('active');
    cucumberImage.classList.remove('active');
    brocolliImage.classList.remove('active');
    tomatoImage.classList.remove('active');
    berryImage.classList.remove('active');
    onionImage.classList.remove('active');
    garlicImage.classList.remove('active');
    carrotImage.classList.remove('active');
    greenImage.classList.remove('active');
    space.classList.remove('honeydisplay', 'tomatodisplay', 'oniondisplay', 'cucumberdisplay', 'lettucedisplay', 'spinachdisplay', 'greendisplay', 'pumkindisplay', 'brocollidisplay', 'garlicdisplay', 'carrotdisplay', 'appledisplay', 'pinedisplay', 'strawdisplay', 'melondisplay', 'mangodisplay', 'orangedisplay', 'plumdisplay', 'berrydisplay');
});



honeyLink.addEventListener('click', () => {
    honey.classList.add('active');
    space.classList.replace('intro', 'honey')
    fruits.classList.remove('active');
    vege.classList.remove('active');
    fruti.classList.remove('active');
    vege.classList.remove('active');
    space.classList.add('honeydisplay')
    frutiinfo.classList.remove('active');
    vegeinfo.classList.remove('active');
    pineinfo.classList.remove('active');
    strawImage.classList.remove('active');
    appleImage.classList.remove('active');
    waterImage.classList.remove('active');
    berryImage.classList.remove('active');
    orangeImage.classList.remove('active');
    plumImage.classList.remove('active');
    mangoImage.classList.remove('active');
    appleImage.classList.remove('active');
    tomatoImage.classList.remove('active');
    spinachImage.classList.remove('active');
    pumkinImage.classList.remove('active');
    lettuceImage.classList.remove('active');
    cucumberImage.classList.remove('active');
    brocolliImage.classList.remove('active');
    berryImage.classList.remove('active');
    onionImage.classList.remove('active');
    garlicImage.classList.remove('active');
    gingerImage.classList.remove('active');
    carrotImage.classList.remove('active');
    greenImage.classList.remove('active');
    cardBackside.classList.remove('pop');
});


upButton.addEventListener('click', () => {
    clover.classList.add('active');
    dandelion.classList.remove('active');
});


downButton.addEventListener('click', () => {
    clover.classList.remove('active');
    dandelion.classList.remove('active');
});

see.addEventListener('click', () => {
    cardBackside.classList.add('pop');
});

seeda.addEventListener('click', () => {
    cardBacksideda.classList.add('pop');
});

upButtonDa.addEventListener('click', () => {
    clover.classList.remove('active');
    dandelion.classList.add('active');
    cardBackside.classList.remove('pop');
});




closeFlip.addEventListener('click', () => {
    cardBackside.classList.remove('pop');
});

document.addEventListener('DOMContentLoaded', function () {
    const addToOrderButtons = document.querySelectorAll('.add-to');
    const orderPopup = document.getElementById('order-popup');
    const orderList = document.getElementById('order-list');
    const closePopup = document.getElementById('close-popup');
    const confirmOrderButton = document.getElementById('confirm-order');
    const detailsForm = document.getElementById('details-form');
    const confirmationForm = document.getElementById('confirmation-form');
    const orderSummary = document.getElementById('order-summary');
    const totalPriceElement = document.createElement('p');
    totalPriceElement.id = 'total-price';
    orderPopup.appendChild(totalPriceElement);

    let orders = {};

    function updateTotalPrice() {
        let total = 0;
        for (let itemName in orders) {
            const item = orders[itemName];
            total += item.quantity * item.price;
        }
        totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
    }

    addToOrderButtons.forEach(button => {
        button.addEventListener('click', function () {
            const quantityInput = this.previousElementSibling;
            const quantity = parseInt(quantityInput.value);
            const itemName = this.closest('.pin, .apple-image, .straw-image, .water-image, .mango-image, .orange-image, .berry-image, .plum-image, .spinach-image, .pumkin-image, .lettuce-image, .pumkin-image, .cucumber-image, .brocolli-image, .tomato-image, .onion-image, .garlic-image, .ginger-image, .carrot-image, .green-image, .clover, .dandelion').querySelector('h1').textContent;
            const itemPrice = parseFloat(this.getAttribute('data-price'));

            if (quantity > 0) {
                if (orders[itemName]) {
                    orders[itemName].quantity += quantity;
                } else {
                    orders[itemName] = { quantity: quantity, price: itemPrice };
                }

                updateOrderList();
                updateTotalPrice();
                orderPopup.style.display = 'block';
                quantityInput.value = '';
            }
        });
    });

    function updateOrderList() {
        orderList.innerHTML = '';
        for (let itemName in orders) {
            const item = orders[itemName];
            const listItem = document.createElement('li');
            listItem.dataset.price = item.price;
            listItem.innerHTML = `
                <span>${itemName}</span>
                <span>${item.quantity}</span>
                <span>@ $${item.price.toFixed(2)} each</span>
                <button class="remove-item">&times;</button>
            `;
            orderList.appendChild(listItem);

            listItem.querySelector('.remove-item').addEventListener('click', function () {
                delete orders[itemName];
                updateOrderList();
                updateTotalPrice();
                if (Object.keys(orders).length === 0) {
                    orderPopup.style.display = 'none';
                }
            });
        }
    }

    closePopup.addEventListener('click', function () {
        orderPopup.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
        if (e.target === orderPopup) {
            orderPopup.style.display = 'none';
        }
    });

    confirmOrderButton.addEventListener('click', function () {
        confirmationForm.style.display = 'block';
        orderPopup.style.display = 'none';
    });

    detailsForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        confirmationForm.style.display = 'none';
        const formValues = {};
        formData.forEach((value, key) => {
            formValues[key] = value;
        });

        let summaryHtml = `
            <h2>Order Summary</h2>
            <p><strong>Name:</strong> ${formValues['first-name']} ${formValues['last-name']}</p>
            <p><strong>Phone:</strong> ${formValues['phone']}</p>
            <p><strong>Address:</strong> ${formValues['address']}</p>
            <p><strong>Gender:</strong> ${formValues['gender']}</p>
            <p><strong>Phone:</strong> ${formValues['message']}</p>
            <h3>Order Details</h3>
            <ul id="summary-order-details">
        `;

        for (let itemName in orders) {
            const item = orders[itemName];
            summaryHtml += `
                <li>
                    <span>${itemName}</span>
                    <span>${item.quantity}</span>
                    <span>@ $${item.price.toFixed(2)} each</span>
                </li>
            `;
        }

        summaryHtml += `
            </ul>
            <p>${totalPriceElement.textContent}</p>
            <button id="copy-order" class="copy-order">Copy Summary</button>
            <br><br><p>
                paste the summary and send to our facebook account. Thank you.
                </p>
        `;

        orderSummary.innerHTML = summaryHtml;
        orderSummary.style.display = 'block';

        const copyOrderButton = document.getElementById('copy-order');
        copyOrderButton.addEventListener('click', function () {
            const summaryText = orderSummary.innerText;
            orderSummary.style.display = 'none';
            navigator.clipboard.writeText(summaryText)
                .then(() => {
                    alert('Order summary copied to clipboard!');
                    window.location.href = 'about.html#pay';
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                });
        });
    });
    const circle = document.querySelector('.circle');
    if (circle) {
        circle.addEventListener('click', () => {
            window.location.href = 'fruits.html';
        });
    } else {
        console.error('Element with class "circle" not found.');
    }
    
});




































