const sections = document.querySelectorAll('section')

sections.forEach(section => {
    const sliders = section.querySelectorAll('.slider')
    const btnPrev = section.querySelector('#prev-button')
    const btnNext = section.querySelector('#next-button')
    const btnNext_phone = section.querySelector('#next-btn-phone')
    const btnPrev_phone = section.querySelector('#prev-btn-phone')

    let currentSlideIndex = 0

    function hideAllSlides() {
        sliders.forEach(slider => {
            slider.classList.remove('on-display')
            slider.classList.add('of-display')
        })
    }

    function showCurrentSlide() {
        sliders[currentSlideIndex].classList.add('on-display')
        sliders[currentSlideIndex].classList.remove('of-display')
    }

    function nextSlide() {
        hideAllSlides()
        currentSlideIndex = (currentSlideIndex + 1) % sliders.length
        showCurrentSlide()
    }

    function prevSlide() {
        hideAllSlides()
        currentSlideIndex = (currentSlideIndex - 1 + sliders.length) % sliders.length
        showCurrentSlide()
    }

    btnNext.addEventListener('click', nextSlide)
    btnPrev.addEventListener('click', prevSlide)
    if (btnNext_phone) btnNext_phone.addEventListener('click', nextSlide)
    if (btnPrev_phone) btnPrev_phone.addEventListener('click', prevSlide)

    showCurrentSlide()
})

window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0)
})