// const firstTabBtn = document.querySelector('.first-tab-link');
// const secondTabBtn = document.querySelector('.second-tab-link');
// const thirdTabBtn = document.querySelector('.third-tab-link');
// const fourthTabBtn = document.querySelector('.fourth-tab-link');
// const firstDisplay = document.querySelector('.first-tab-container');
// const secondDisplay = document.querySelector('.second-tab-container');
// const thirdDisplay = document.querySelector('.third-tab-container');
// const fourthDisplay = document.querySelector('.fourth-tab-container');




// firstTabBtn.addEventListener('click', function(){
//     firstDisplay.style.display = 'flex';
//     secondDisplay.style.display = 'none';
//     thirdDisplay.style.display = 'none';
//     fourthDisplay.style.display = 'none';

// });


// secondTabBtn.addEventListener('click', function(){
//     firstDisplay.style.display = 'none';
//     secondDisplay.style.display = 'flex';
//     thirdDisplay.style.display = 'none';
//     fourthDisplay.style.display = 'none';
// });


// thirdTabBtn.addEventListener('click', function(){
//     firstDisplay.style.display = 'none';
//     secondDisplay.style.display = 'none';
//     thirdDisplay.style.display = 'flex';
//     fourthDisplay.style.display = 'none';
// });


// fourthTabBtn.addEventListener('click', function(){
//     firstDisplay.style.display = 'none';
//     secondDisplay.style.display = 'none';
//     thirdDisplay.style.display = 'none';
//     fourthDisplay.style.display = 'flex';
// });



document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const displayedContents = document.querySelectorAll('.tab-container');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            tabButtons.forEach(tabBtn => tabBtn.classList.remove('.active'));
            this.classList.add('.active');

            displayedContents.forEach(content => content.style.display = 'none');

            const selectedTab = this.getAttribute('data-tab');
            document.getElementById(`content-${selectedTab}`).style.display = 'flex';
        });
    });
});































// function cookie(){

//     isAccepted = false;

//     let div = document.getElementById("close")


//     div.addEventListener("click",() => {
//         display = 'none'
//         if(!isAccepted){setTimeout(() => {
//             display = 'flex';
//         }, 30000);}
//     })


//}