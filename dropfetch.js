
const expectedResult = [];

async function fetchData() {

    try{
        const response = await fetch('https://api.github.com/users');
        const data = await response.json();
        console.log(data);
        
        createArray(data);
    }
    catch(err)
    {
        console.log("error", err);
    }
}
fetchData();

function createArray(data){
    for(let i=0;i<data.length;i++)
        {
            expectedResult.push(data[i].login);
        }
    // console.log(expectedResult);
    drop();
}

const dropContainer = document.querySelector('.dropdown');

// const menuDiv =document.createElement('div');
// menuDiv.classList.add('menu');
// menuDiv.innerText = "Menu";
// dropContainer.appendChild(menuDiv);
// console.log(menuDiv);

const divContainer = document.createElement('div');
divContainer.classList.add('dropdown-content');
function drop(){
    expectedResult.forEach(iteration =>{
        const opt = document.createElement('a');
        opt.classList.add(iteration);
        opt.setAttribute('href', '');
        opt.textContent = iteration;
        divContainer.appendChild(opt);
        // console.log(opt);
    })
    addEventListenersToAnchors();
}
dropContainer.appendChild(divContainer);
// const menuDiv = document.querySelector('.menu');
// menuDiv.appendChild(divContainer);
// console.log(dropContainer);

const headWrapper = document.querySelector('.headwrapper');
function addEventListenersToAnchors(){
    const anchors = document.querySelectorAll('a');

    anchors.forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            // Remove existing paragraphs
            // const existingParas = headWrapper.querySelectorAll('p');
            // existingParas.forEach(para => para.remove());

            const newPara = document.createElement('p');
            newPara.innerText = anchor.innerText;
            headWrapper.appendChild(newPara);
            revertButton.classList.remove('dis');
            dropContainer.classList.add('dis');
            headWrapper.classList.add('center-content');
        })
    })
}

const revertButton = document.createElement('button');
revertButton.innerText = "Revert";
headWrapper.appendChild(revertButton);
revertButton.classList.add('dis');

revertButton.addEventListener('click', () => {
    // Remove existing paragraphs
    const existingParas = headWrapper.querySelectorAll('p');
    existingParas.forEach(para => para.remove());

    dropContainer.classList.remove('dis');
    revertButton.classList.add('dis');
    headWrapper.classList.remove('center-content');
})