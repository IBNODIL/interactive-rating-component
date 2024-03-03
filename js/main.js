let rateTo = 0
let oneStar = document.getElementById('rating-btn-1')
let twoStar = document.getElementById('rating-btn-2')
let threeStar = document.getElementById('rating-btn-3')
let fourStar = document.getElementById('rating-btn-4')
let fiveStar = document.getElementById('rating-btn-5')
let submitBtn = document.getElementById('submit')
let rateOf = document.getElementById('rate-of')

oneStar.addEventListener('click', () =>{
    rateOf.textContent(rateTo)
    rateTo = 1
})

twoStar.addEventListener('click', () =>{
    rateOf.textContent(rateTo)
    rateTo = 2
})

threeStar.addEventListener('click', () =>{
    rateOf.textContent(rateTo)
    rateTo = 3
})

fourStar.addEventListener('click', () =>{
    rateOf.textContent(rateTo)
    rateTo = 4
})

fiveStar.addEventListener('click', () =>{
    rateOf.textContent(rateTo)
    rateTo = 5
})