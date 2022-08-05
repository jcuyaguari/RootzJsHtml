let attackPlayer = ''
let attackEnemy = ''

let lifePlayer = 3
let lifeEnemy = 3

let sectionSelectAttack = document.getElementById('select-attack')
let sectionSelectPet = document.getElementById('select-pet')
let sectionRestart = document.getElementById('restart')

function initGame(){
    sectionSelectAttack.style.display = 'none'

    sectionRestart.style.display = 'none'

    let buttonpetplayer = document.getElementById('button-pet')
    buttonpetplayer.addEventListener('click',choosePetPlayer)

    let buttonFire = document.getElementById('button-fire')
    buttonFire.addEventListener('click',attackFire)
 
    let buttonWatter = document.getElementById('button-watter')
    buttonWatter.addEventListener('click',attackWatter)
    
    let buttonAir = document.getElementById('button-air')
    buttonAir.addEventListener('click',attackAir)
    
    let buttonRestar = document.getElementById('button-restart')
    buttonRestar.addEventListener('click',restartGame)
}

function choosePetPlayer(){

    sectionSelectPet.style.display = 'none'

    sectionSelectAttack.style.display = 'flex'

    let petPlayer = document.getElementById('pet-player')

    if(document.getElementById('rowatter').checked){
        petPlayer.innerHTML = 'rowatter'
    }else if(document.getElementById('roearth').checked){
        petPlayer.innerHTML = 'roearth'
    }else if(document.getElementById('rofire').checked){
        petPlayer.innerHTML = 'rofire'
    }else{
        alert('Choose the pet 🐶')
    }

    choosePetPlayerRandEnemy()
}

function choosePetPlayerRandEnemy(){
    let randomPetAttack = aleatorio(1,3)
    console.log('==>',randomPetAttack)

    let petEnemy = document.getElementById('pet-enemy')

    if(randomPetAttack==1){
        petEnemy.innerHTML = 'rowatter'
    }else if(randomPetAttack==2){
        petEnemy.innerHTML = 'roearth'
    }else{
        petEnemy.innerHTML = 'rofire'
    }

}

function attackFire(){
    attackPlayer = 'Fire'
    // console.log('click,attackFire')
    attackEnemyRand()
}

function attackWatter(){
    attackPlayer = 'Watter'
    // console.log('click,attackWatte')
    attackEnemyRand()
}

function attackAir(){
    attackPlayer = 'Air'
    // console.log('click,attackAir')
    attackEnemyRand()
}

// Ataque del enemigo Aleatorio
function attackEnemyRand(){
    let attackAleatorioEnemy = aleatorio(1,3)

    if(attackAleatorioEnemy == 1){
        attackEnemy = 'Fire'
    }else if(attackAleatorioEnemy == 2){
        attackEnemy = 'Watter'
    }else{
        attackEnemy = 'Air'
    }
    fight()
}

function fight(){
    let spanlifePlayer = document.getElementById('lifes-player')
    let spanlifeEnemy =document.getElementById('lifes-enemy')

    if(attackEnemy == attackPlayer){
        createMessage('GAME TIED')
    }else if(attackPlayer == 'Fire' && attackEnemy == 'Air'){
        createMessage('WINNER')
        lifeEnemy--
        spanlifeEnemy.innerText = lifeEnemy
    }else if(attackPlayer == 'Watter' && attackEnemy == 'Fire'){
        createMessage('WINNER')
        lifeEnemy--
        spanlifeEnemy.innerText = lifeEnemy
    }else if(attackPlayer == 'Air' && attackEnemy == 'Watter'){
        createMessage('WINNER')
        lifeEnemy--
        spanlifeEnemy.innerText = lifeEnemy
    }else{
        createMessage('So Bad, Don\'t worry')
        lifePlayer--
        spanlifePlayer.innerText = lifePlayer
    }

    checkLifes()
}

checkLifes = () => {
    if(lifePlayer == 0){
        createMessageFinal('Lost | So Bad 😟')
    }else if(lifeEnemy == 0){
        createMessageFinal('Winner | 😊🙌')
    }
}

createMessage = (winnermsg) => {
    console.log('+++>'+winnermsg)
    let sectionMessage = document.getElementById('result')
    let sectionattackPlayer = document.getElementById('attackPlayer')
    let sectionattackEnemy = document.getElementById('attackEnemy')

    let newattackPlayer = document.createElement('p')
    let newattackEnemy = document.createElement('p')

    sectionMessage.innerHTML = winnermsg
    newattackPlayer.innerHTML = attackPlayer
    newattackEnemy.innerHTML = attackEnemy

    sectionattackPlayer.appendChild(newattackPlayer)
    sectionattackEnemy.appendChild(newattackEnemy)
    // let message = document.createElement('p')
    // message.innerHTML = 'Your pet attack with <b>'+ attackPlayer + ',</b> the Enemy pet attack with <b>' + attackEnemy + '</b> ' + winnermsg
    // console.log(message)
    // sectionMessage.appendChild(message)
}

function createMessageFinal(finalmsg){
    let sectionMessage = document.getElementById('result')

    sectionMessage.innerHTML = finalmsg
  
    disableButtons()
    
    //Oculta btn reiniciar hasta que termine el juego 
    sectionRestart.style.display = 'block'
}


let disableButtons = (parametro) => {

    let buttonFire = document.getElementById('button-fire')
    buttonFire.disabled = true
 
    let buttonWatter = document.getElementById('button-watter')
    buttonWatter.disabled = true
    
    let buttonAir = document.getElementById('button-air')
    buttonAir.disabled = true
    
}

function restartGame(){
    location.reload()
}

function aleatorio(min,max){
    //console.log('MathRnd',(Math.floor(Math.random() * (max - min + 1) + min)))
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load',initGame)



