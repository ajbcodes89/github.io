//! HIDE-SHOW

bio = document.getElementById('bio')
mediaContent = document.getElementById('media-content')
mediaDesc = document.getElementById('media-wrap-desc')
dev = document.getElementById('dev-wrap')
devDesc = document.getElementById('dev-wrap-desc')
dev.style.display = 'none'

function showBio(e) {
    console.log(e)
    e.preventDefault()
    bio.style.display = 'block'
    hideMedia()
    hideDev()
}

function showMedia(e) {
    console.log(e)
    e.preventDefault()
    mediaContent.style.display = 'block'
    mediaDesc.style.display = 'flex'
    mediaDesc.style.justifyContent = 'center'
    // devBtn.style.textShadow = 'none'
    hideBio()
    hideDev()
}

function showDev(e) {
    console.log(e)
    e.preventDefault()
    dev.style.display = 'flex'
    devDesc.style.display = 'flex'
    devDesc.style.justifyContent = 'center'
    // devBtn.style.textShadow = '2px 2px 5px #F5EB8C;'
    hideBio()
    hideMedia()
}

function hideBio() {
    bio.style.display = 'none'
}

function hideMedia() {
    mediaContent.style.display = 'none'
    mediaDesc.style.display = 'none'
}

function hideDev() {
    dev.style.display = 'none'
    devDesc.style.display = 'none'
}


// ! BUTTON RESIZE
let body = document.querySelector('body')
let bioBtn = document.getElementById('nav-wrap')
let mediaBtn = document.getElementById('media-btn')
let devBtn = document.getElementById('dev-btn')
let btnWrap = document.getElementById('btn-wrap')
let socialFoot = document.getElementById('social-foot')
let cardWrap = document.querySelector('bs-card-wrap')
window.addEventListener('resize', changeButton)

function changeButton() {
    if (window.innerWidth < 992) {
        btnSmall()
    } else if(window.innerWidth > 992) {
        btnLarge()
    }
}

// if page loads small
if (window.innerWidth < 992) {
    btnSmall()
} else if(window.innerWidth > 992) {
    btnLarge()
}
//***/

function btnLarge() {
    bioBtn.style.justifyContent = 'flex-end'
    bioBtn.style.marginLeft = '2vw'
    bioBtn.style.marginRight = '0vw'

    mediaBtn.style.fontSize = '70px'
    mediaBtn.style.marginLeft = '12vw'
    mediaDesc.style.marginLeft = '11vw'

    devBtn.style.fontSize = '65px'
    devBtn.style.marginLeft = '8vw'
    devDesc.style.marginLeft = '10vw'

    btnWrap.style.flexDirection = 'column'
    btnWrap.style.marginLeft = '2vw'
    btnWrap.style.marginTop = '30px'

    socialFoot.style.display = 'flex'
    // dev.style.maxWidth = '545px'
    // dev.style.minWidth = '620px'
}

function btnSmall() {
    // body.style.display = 'flex'
    // body.style.justifyContent = 'cener'
    // bioBtn.style. = 'center'
    // bioBtn.style.marginLeft = '17vw'
    
    mediaBtn.style.fontSize = '24px'
    mediaBtn.style.marginLeft = '0vw'

    devBtn.style.marginLeft = '0vw'
    devBtn.style.fontSize = '24px'

    dev.style.minWidth = '0px'

    btnWrap.style.flexDirection = 'row'
    btnWrap.style.maxWidth = '620px'
    btnWrap.style.marginLeft = '0vw'
    btnWrap.style.marginTop = '0vw'
    btnWrap.style.marginBottom = '20px'

    socialFoot.style.display = 'none'

    devDesc.style.justifyContent = 'center'
    bioBtn.style.marginLeft= '5vw'
    bioBtn.style.marginRight= '5vw'
    // if (window.innerWidth < 713) {
    //     bioBtn.style.marginLeft= '5vw'
    // }
}