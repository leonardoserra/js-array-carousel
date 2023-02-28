const imagesArray = [1, 2, 3, 4, 5];
const imagesList = document.querySelector('.images-list');

let imagesListContent = "";

console.log(imagesArray);
for(let i = 0; i < imagesArray.length; i++){
    let imagesListFiller = `<div class="image-wrapper">
                                <img class="image" src="./img/0${imagesArray[i]}.webp" />
                            </div>`;
    imagesListContent += imagesListFiller;
}
imagesList.innerHTML = imagesListContent;

console.log(imagesListContent);