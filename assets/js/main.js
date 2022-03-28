let navlinks = document.querySelectorAll('nav ul li');
let uinfo = document.querySelectorAll('.user-info div');
let uin = document.querySelector('.user-info')
let content = document.querySelector('section')
let pages = document.querySelectorAll('#page')


for (let i = 0; i < navlinks.length; i++) {

    navlinks[i].addEventListener('click', () => {
        setTimeout(() => {
            for (let j = 0; j < navlinks.length; j++) {
                navlinks[j].classList.remove('cteal')
                uinfo[j].classList.remove('db')
                uinfo[j].classList.add('dn')

                pages[j].classList.remove('db')
                pages[j].classList.add('dn')
            }
            navlinks[i].classList.add('cteal');
            uinfo[i].classList.add('db');
            pages[i].classList.add('db');
        }, 700)


        uin.classList.add('sideanim')
        content.classList.add('contentanim')
        setTimeout(() => {
            uin.classList.remove('sideanim')
            content.classList.remove('contentanim')
        }, 2000)
        navlinks[i].removeEventListener('click')
    })
}

