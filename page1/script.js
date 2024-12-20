const slider = document.querySelectorAll('.slider')
const btnPrev = document.getElementById('prev-button')
const btnNext = document.getElementById('next-button')
const images = document.querySelector('.box-images')
let currentSlide = 0


function hideSlider(){
    slider.forEach(item => item.classList.remove('on'))
}
function showSlider(){
    slider[currentSlide].classList.add('on')
}


function nextSlider(){
    hideSlider()

    if(currentSlide == slider.length - 1){
        currentSlide = 0
    }
    else{
        currentSlide++
    }
    showSlider()
}


function prevSlider(){
    hideSlider()

    if(currentSlide == 0){
        currentSlide = slider.length - 1
    }
    else{
        currentSlide--
    }
    showSlider()
}
btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)


let btns = [btnNext, btnPrev]
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        images.style.transform = 'scale(1.05)'
        setTimeout(() => {
            images.style.transform = 'scale(1)' 
        }, 300)
    })
})


//reserva
let reservaFeita = false;
let reservaInfo = '';
document.getElementById('reservar-btn').addEventListener('click', function () {
    if (!reservaFeita) {
        let nome = '';
        do {
            nome = prompt('Você gostaria de fazer uma reserva em qual nome?');
            if (!nome || /[^a-zA-ZÀ-ÿ\s]/.test(nome)) {
                alert('Por favor, insira um nome válido (apenas letras e espaços).');
                nome = '';
            }
        } while (!nome);

        let data = '';
        do {
            data = prompt(`Ótimo, ${nome}! Que dia você gostaria reservar? (DD/MM/YYYY)`);
            if (!data || !/^\d{2}\/\d{2}\/\d{4}$/.test(data)) {
                alert('Por favor, insira uma data válida no formato DD/MM/YYYY.');
                data = '';
            }
        } while (!data);

        let hora = '';
        do {
            hora = prompt(`Horário de Funcionamento: Segunda a Domingo, das 12h às 23h. Qual o melhor horário para sua reserva? (HH:MM)`);
            const horaValida = hora && /^\d{2}:\d{2}$/.test(hora);
            if (horaValida) {
                const [horas, minutos] = hora.split(':').map(Number);
                if (horas < 12 || horas >= 23 || minutos < 0 || minutos >= 60) {
                    alert('Por favor, insira um horário dentro do funcionamento (12:00 a 23:00).');
                    hora = '';
                }
            } else {
                alert('Por favor, insira um horário válido no formato HH:MM.');
                hora = '';
            }
        } while (!hora);

        let numeroPessoas = '';
        do {
            numeroPessoas = prompt('Gostaria de uma mesa para quantas pessoas?');
            if (!numeroPessoas || isNaN(numeroPessoas) || Number(numeroPessoas) <= 0) {
                alert('Por favor, insira um número válido de pessoas.');
                numeroPessoas = '';
            }
        } while (!numeroPessoas);

        reservaInfo = `Reserva confirmada!\nNome: ${nome}\nData: ${data}\nHora: ${hora}\nNúmero de pessoas: ${numeroPessoas}`;
        reservaFeita = true;
        alert(reservaInfo);
    } else {
        alert("Você já fez uma reserva:\n" + reservaInfo);
    }
});

//reunload
window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0)
})