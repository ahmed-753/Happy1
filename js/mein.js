let img = document.querySelectorAll('.features__Calendar')
let text = document.querySelectorAll('.features__text')

const task = () => {
    Array.from(text).forEach((item,index) => {
        item.style.color = 'blue'
    })
}
Array.from(img).forEach((item,index) => {
    item.addEventListener('click',task)
})