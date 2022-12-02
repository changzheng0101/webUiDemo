const nums = document.querySelectorAll('.counter span')
const counter =  document.querySelector('.counter')
const final = document.querySelector('.final')
const replay = document.querySelector('#replay')

runAnimation()

replay.addEventListener('click',()=>{
    resetEl()
    runAnimation()  
}) 

function runAnimation(){
    nums.forEach((num,index)=>{
        const totalIndex = nums.length -1;
        num.addEventListener('animationend',(e)=>{
            if (e.animationName === 'goIn' && index!= totalIndex) {
                num.classList.remove('in')
                num.classList.add('out')
            }else if(e.animationName === 'goOut' && num.nextElementSibling){
                num.nextElementSibling.classList.add('in') 
            }else{
            counter.classList.add('hide')
            final.classList.add('show')
            console.log(final);
            }
        }) 
    })
}

function resetEl(){
    final.classList.remove('show')
    counter.classList.remove('hide')
    nums.forEach((num)=>{
        num.classList.remove('in')
        num.classList.remove('out')
    })
    nums[0].classList.add('in')
}