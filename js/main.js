const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icons/nav-close.svg";
    } else {
        navBtnImg.src = './img/icons/nav-open.svg';
    }
}

AOS.init({
    }
);

const btn = document.getElementsByClassName('.go-compatibility')

function checkCompatibility() {
    const input = document.querySelector('.data-birthday');

    const randomPercentage = Math.floor(Math.random() * 101);

    const  selectDate = new Date(document.querySelector('.data-birthday').value);

    const dayOfBirth = selectDate.getDate();
    const monthOfBirth = selectDate.getMonth() + 1;
    const yearOfBirth = selectDate.getFullYear();

    const fullDateBirthday = dayOfBirth + '-' + monthOfBirth + '-' + yearOfBirth;




    const compatibilityNumber = document.getElementsByClassName('number-compatibility')[0];
    const compatibilityComments = document.getElementsByClassName('compatibility-comment')[0];


    if (isNaN(selectDate.getTime())) {
        const compatibilityComments = document.getElementsByClassName('compatibility-comment')[0];
        compatibilityComments.textContent = "Пожалуйста, выберите дату рождения.";
        input.classList.add('error');
        return;
    }else {
        input.classList.remove('error');
    }



    let compatibilityComment;
    if (fullDateBirthday === '27-7-2000'){
        compatibilityComment = "ЭхКузми ?!?!?!? \nВот это ничего себе...... как так то....\n Свадьбу будем делать в Перу с Ламами ?"
        compatibilityNumber.textContent ='120%';
    }
    else if (randomPercentage <= 20) {
        compatibilityNumber.textContent = randomPercentage + '%';
        compatibilityComment = "Результат показывает, что есть определенные различия. Это может стать хорошим поводом для обсуждения и понимания!";
    } else if (randomPercentage <= 40) {
        compatibilityNumber.textContent = randomPercentage + '%';
        compatibilityComment = "У нас есть некоторые несостыковки, но это нормально. Возможно, каждая из сторон может внести что-то новое в общение.";
    } else if (randomPercentage <= 60) {
        compatibilityNumber.textContent = randomPercentage + '%';
        compatibilityComment = "Результат средний, что говорит о том, что пока есть как сильные, так и слабые стороны. Важно продолжать открытый диалог.";
    } else if (randomPercentage <= 80) {
        compatibilityNumber.textContent = randomPercentage + '%';
        compatibilityComment = "Хороший результат! Это подразумевает здоровые отношения, есть потенциал для дальнейшего развития.";
    } else {
        compatibilityNumber.textContent = randomPercentage + '%';
        compatibilityComment = "Замечательный результат! У вас много общего, и это отличный знак для продолжения отношений.";
    }

    compatibilityComments.textContent = compatibilityComment;
}