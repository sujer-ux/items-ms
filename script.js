const wrap = document.getElementById('wrap');
const addItemsBTN = document.getElementById('addItems');
const addBlock = document.getElementById('addBlock');
const cloase = document.getElementById('cloase');
const imageURL_DATA = document.getElementById('imageURL_DATA');
const H_DATA = document.getElementById('H_DATA');
const Description_DATA = document.getElementById('Description_DATA');
const BTN = document.getElementById('BTN_1');




let testJSON = {
    str: [
        'sting1',
        'string2',
    ],
    num: [
        13,
        27,
    ],
};



let testJSONn = JSON.stringify(testJSON, function (string, value) {
    return value;
});

console.log(testJSONn);

let jsonFile = {
    imageURL_Base: [
        'http://placekitten.com/g/150',
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/61cb678c-b07f-4410-b300-38f27e6160f6/ddh8jqp-b2cc86e3-7591-4707-a91f-a60f795c3002.jpg/v1/fill/w_300,h_168,q_75,strp/amine_by_askalily_ddh8jqp-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY4IiwicGF0aCI6IlwvZlwvNjFjYjY3OGMtYjA3Zi00NDEwLWIzMDAtMzhmMjdlNjE2MGY2XC9kZGg4anFwLWIyY2M4NmUzLTc1OTEtNDcwNy1hOTFmLWE2MGY3OTVjMzAwMi5qcGciLCJ3aWR0aCI6Ijw9MzAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.8Ir7Pea8JMajflz5qGO_xUvglcxdKFPrRe9SZFLxV1E'
    ],
    head_Base: [
        'Котята',
        'Спит и не замечает',
    ],
    description_Base: [
        'Белые и один черный. Угнетение меньшинств на лицо!',
        'Какая лютая тварь к ней подкрадывается!',
    ],
};

//console.log(JSON.parse(s));
//console.log(sParse);




addItemsBTN.onclick = showAddBlock;
cloase.onclick = hideAddBlock;
window.onload = itemParse;
BTN.onclick = addNewItemsGUI;

function showAddBlock() {
    addBlock.style.display = 'block';
}



function hideAddBlock() {
    addBlock.style.display = 'none';
}

//console.log(JSON.parse(sParse).head_Base[0]);

let sParse;

function itemParse() {
    sParse = JSON.stringify(jsonFile, function (string, value) {
        return value;
    }, 2);
    for (let i = 0; i < JSON.parse(sParse).head_Base.length; i++) {
        let imageURL = JSON.parse(sParse).imageURL_Base[i];
        let head = JSON.parse(sParse).head_Base[i];
        let description = JSON.parse(sParse).description_Base[i];
        createNewItems(imageURL, head, description);
    }

}

function updateItems() {
    sParse = JSON.stringify(jsonFile, function (string, value) {
        return value;
    }, 2);
    let i = JSON.parse(sParse).head_Base.length - 1;
    let imageURL = JSON.parse(sParse).imageURL_Base[i];
    let head = JSON.parse(sParse).head_Base[i];
    let description = JSON.parse(sParse).description_Base[i];
    createNewItems(imageURL, head, description);
    console.log(sParse);
    console.log(imageURL + ' ' + head + ' ' + description);
    console.log(i);
}
 
function addNewItemsGUI() {
    if (imageURL_DATA.value == '' || H_DATA.value == '' || Description_DATA.valu == '') {
        alert('пшел нахуй');
    } else {
        let imageURL = imageURL_DATA.value;
        let head = H_DATA.value;
        let description = Description_DATA.value;
        let i = JSON.parse(sParse).head_Base.length;
        jsonFile.head_Base[i] = head;
        jsonFile.imageURL_Base[i] = imageURL;
        jsonFile.description_Base[i] = description;

        updateItems();
        addBlock.style.display = 'none';
        imageURL_DATA.value = '';
        H_DATA.value = '';
        Description_DATA.value = '';
        console.log(imageURL_DATA.value);
    }
}

function createNewItems(imageURL, head, description) {
    let div = document.createElement('div');
    div.className = 'item';
    function addImage(imageURL) {
        let image = document.createElement('div');
        image.style.backgroundImage = 'url(' + imageURL + ')';
        div.append(image);
    }
    addImage(imageURL);
    function addH(head) {
        let header = document.createElement('h3');
        header.innerHTML = head;
        div.append(header);
    }
    addH(head);
    function addP(description) {
        let parag = document.createElement('p');
        parag.innerHTML = description;
        div.append(parag);
    }
    addP(description)
    wrap.prepend(div);
}


