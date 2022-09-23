const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
    const container = document.querySelector('.container')

    const btn = document.createElement('button')
    btn.classList.add('btn')
    btn.innerText = sound
    btn.addEventListener('click', () => {
        stopSounds()
        document.getElementById(sound).play()
    })

    container.appendChild(btn)
})

function stopSounds() {
    sounds.forEach(sound=>{
       const item =  document.getElementById(sound)
       item.pause()
       item.currentTime = 0
    })
}