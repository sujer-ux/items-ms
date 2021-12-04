const wrap = document.getElementById('wrap')
const addItemsBTN = document.getElementById('addItems');
const addBlock = document.getElementById('addBlock');
const cloase = document.getElementById('cloase');
const imageURL_DATA = document.getElementById('imageURL_DATA');
const H_DATA = document.getElementById('H_DATA');
const Description_DATA = document.getElementById('Description_DATA');
const BTN = document.getElementById('BTN_1');

addItemsBTN.onclick = showAddBlock;
cloase.onclick = hideAddBlock;
BTN.onclick = addNewItemsGUI;

function showAddBlock() {
    addBlock.style.display = 'block';
}



function hideAddBlock() {
    addBlock.style.display = 'none';
}
 


function addNewItemsGUI() {
    let imageURL = imageURL_DATA.value;
    let head = H_DATA.value;
    let description = Description_DATA.value;
    
    createNewItems(imageURL, head, description);
    
    addBlock.style.display = 'none';
    imageURL_DATA.value = ' ';
    H_DATA.value = ' ';
    Description_DATA.value = ' ';
    
    
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
    wrap.append(div);
}


