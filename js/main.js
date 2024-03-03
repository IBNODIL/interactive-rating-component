let rateTo = 0
let oneStar = document.getElementById('rating-btn-1')
let twoStar = document.getElementById('rating-btn-2')
let threeStar = document.getElementById('rating-btn-3')
let fourStar = document.getElementById('rating-btn-4')
let fiveStar = document.getElementById('rating-btn-5')
let ratingSection = document.getElementById('rating-section')
let thankYouSection = document.getElementById('thank-you-section')
let submitBtn = document.getElementById('submit')
let rateOf = document.getElementById('rate-of')

oneStar.addEventListener('click', () =>{
    rateTo = 1
})

twoStar.addEventListener('click', () =>{
    rateTo = 2
})

threeStar.addEventListener('click', () =>{
    rateTo = 3
})

fourStar.addEventListener('click', () =>{
    rateTo = 4
})

fiveStar.addEventListener('click', () =>{
    rateTo = 5
})

submitBtn.addEventListener('click', () => {
    rateOf.textContent = rateTo
    ratingSection.classList.add('hidden')
    thankYouSection.classList.remove('hidden')
})