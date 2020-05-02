// =================== NAVBAR MENU 
//select dom items     
const menuBtn = document.querySelector('.nav');
const navMenu = document.querySelector('.nav-btn')
const navUl = document.querySelector('ul');
const navLi = menuBtn.querySelectorAll('ul li');
const btnLines = document.querySelectorAll('.btn-line');
const bgItem = document.body;

// ============= Navbar menu ===================

navMenu.addEventListener('click', toggleMenu);

let showMenu = false;
function toggleMenu() {

    if (!showMenu) {
        menuBtn.classList.add('show')
        navUl.classList.add('show')
        bgItem.classList.add('bg-img')
        navLi.forEach(li => li.classList.add('text'));
        btnLines.forEach(line => line.classList.add('close'));
        showMenu = true;

    } else {
        menuBtn.classList.remove('close')
        navUl.classList.remove('show')
        navLi.forEach(li => li.classList.remove('text'));

        bgItem.classList.remove('bg-img')
        btnLines.forEach(line => line.classList.remove('close'));
        showMenu = false;
    }
}


//  ===============ON LOAD ANIMATION 
function init() {
    const imgSlide = document.querySelector('#img');
    const textAnim = document.querySelector('#text-anim');
    imgSlide.classList.add('slide')
    textAnim.classList.add('slide')



}

window.addEventListener('load', init)



//  =========================== Features click



const list = document.querySelectorAll('.list .li');
list.forEach(li => li.addEventListener('click', clickFeatures));


function clickFeatures() {
    const pages = document.querySelectorAll('.page');
    let panelTarget = document.querySelector(this.dataset.id);
    list.forEach(li => {
        li.classList.remove('active')
    })
    pages.forEach(page => {
        if (panelTarget == page) {
            page.classList.add('active');
            this.classList.add('active')


        } else {
            page.classList.remove('active')
        }
    })
}

// =========================================FAQ QUESTIONS 

const quest = document.querySelectorAll('.quest');
const lines = document.querySelectorAll('.x');
quest.forEach(qs => qs.addEventListener('click', clickQuest));

function clickQuest(e) {

    let answ = document.querySelector(this.dataset.qs);
    let answer = document.querySelectorAll('.answ');
    let arow = this.querySelector('.x');

    lines.forEach(line => {
        if (arow == line) {
            arow.classList.toggle('close')
        } else {
            line.classList.remove('close')
        }
    })

    answer.forEach(an => {
        if (answ == an) {
            answ.classList.toggle('show')
        } else {
            an.classList.remove('show')
        }
    });
}




/*
 ======================================= FORM VALIDATIONS
*/


const formBtn = document.forms[0].querySelector('#btn');
const inp = document.querySelector('.inp');
formBtn.addEventListener('click', validEmail);

function validEmail(e) {
    e.preventDefault()
    let inpVal = inp.querySelector('input[type="email"]').value.toLowerCase();
    console.log(inpVal)
    let span = inp.querySelector('.sp');
    let img = inp.querySelector('img');
    if (inpVal == '') {
        img.classList.add('error');
        span.classList.add('error');
        span.innerText = `Whoops, make sure it's an email!`;
        return;
    }
    if (!inpVal.includes('@')) {

        img.classList.add('error');
        span.classList.add('error');
        span.innerText = `Must include @!`;
        return;
    }
    if (!inpVal.includes('gmail')) {
        img.classList.add('error');
        span.classList.add('error');
        span.innerText = `only for gmail soory :/`;
        return;
    }
    inp.style.borderColor = 'green'
    img.classList.remove('error');
    span.classList.remove('error');
    span.innerHTML = 'email success!'
    span.classList.add('succ')

}

