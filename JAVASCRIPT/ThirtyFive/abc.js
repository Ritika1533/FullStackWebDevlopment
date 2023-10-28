//selecting element by getElementById

//const toc = document.getElementById("toc")//selecting element and storing in a variable
//console.dir(toc)//displaying
//const banner = document.getElementById("banner")
//console.dir(banner);
//example of exercise:const heading=document.getElementById("mainheading");
//const image=document.getElementById("unicorn");


//---------------------------------------------------------------------------------------------------------------------------


//selecting things by getElementByTagNames
//const allImage = document.getElementsByTagName('img')
//HTMLCollection(4) [img#banner, img.square, img.square, img.square, banner: img#banner]
//allImage[2] //will give third image but remember it is not an array
//const picture = document.getElementsByTagName('img')
//for (let img of picture) {
//  console.dir(img.src);
//


//--------------------------------------------------------------------------------------------------------------------------}
//const squareImage = document.getElementsByClassName('square');
//for (let img of squareImage) {
//   img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg"
//}

const rit = document.getElementById('mw-toc-heading');
console.log(rit);
const para = document.getElementsByTagName('p');
console.log(para);
const lis = document.getElementsByClassName('toctext');
console.log(lis);

//----------------------------------------------------------------------------------------------------------------------------------
//QUERYSELECRORALL OR QUERYSELECTOR

const links = document.querySelectorAll('p a');
for (let link of links) {
    console.log(link.href);
}

for (let link of links) {
    link.innerText = "i am a link";
}

//setting the style
for (let link of links) {
    link.style.color = 'orange';
    link.style.textDecorationColor = 'green';
    link.style.textDecorationStyle = 'dotted';
}
const h5 = document.querySelector('h5');
window.getComputedStyle(h5);
window.getComputedStyle(h5).color;
console.log(window.getComputedStyle(h5).margin);

const h2 = document.querySelector('h2');
//h2.setAttribute('class','purple');
//h2.setAttribute('class','border');
//h2.classList.add('purple')
//h2.classList.remove('purple')
//h2.classList.contains('purple') false
//h2.classList.toggle('purple') true
//h2.classList.toggle('purple') false
//h2.classList.toggle('purple') true
//h2.classList.toggle('purple') false

//--------------------------------------PARENTELEMENT ----------------------------------------------------------------------------------
const firstBold = document.querySelector('b');
firstBold.parentElement//p
firstBold.parentElement.parentElement//body
firstBold.parentElement.parentElement.parentElement//html
firstBold.parentElement.parentElement.parentElement.parentElement//null

//---------------------------------------CHILDREN---------------------------------------------------------------------------------------------
const firstParagraph = firstBold.parentElement;
firstParagraph//p
firstParagraph.children// [b, b, a, a, a, a, a, a]
firstParagraph.childElementCount//8
firstParagraph.children[0].parentElement//p

//=----------------------------------------SIBLING-------------------------------------------------------------------------------------------------
const secondElement = document.querySelector('.square');
secondElement//img
secondElement.parentElement//body
secondElement.children//null
secondElement.nextElementSibling//img 3
secondElement.previousElementSibling//p


//--------------------------------APPENDCHILD APPEND-------------------------------------------------------------------------------------------------

//imserting img at last of body
const newImg = document.createElement('img');
newImg.src = 'https://s3.amazonaws.com/static.organiclead.com/Site-9785b85e-760f-4344-9722-6b73ca956e10/inside/sidebar_1.jpg'
document.body.appendChild(newImg);
newImg.classList.add('square');

//insering new heding at last of body
const newHed = document.createElement('h2');//<h2></h2>
newHed.innerText = "I AM HEADING";//'I AM HEADING'
document.body.appendChild(newHed)//

//The appendChild() method of the Node interface adds a node to the end of the list of children of a specified parent node.
//The Element.append() method inserts a set of Node objects or string objects after the last child of the Element. String objects are inserted as equivalent Text nodes.

firstParagraph.append('hey i am chicken!!!!!!!!!!!!!!!', 'how are yu');
firstParagraph.prepend(' HEYY ');



//----------------------INSERT AT GIVEN POSN BT INSERTADJECENTELEMENT--------------------------------------------------------------------------------------
const newH2 = document.createElement('h2');
newH2.innerText = "iam silkie chicken";//newH2.append('iam silkie chicken')
const h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterend', newH2); 0


//--------------------------REMOVING THINGS---------------------------------------------------------------------------------------------
const firstLi = document.querySelector('li');
const ul = firstLi.parentElement;//ul
ul.removeChild(firstLi);
//const image=document.querySelector('img');
//image.remove();
