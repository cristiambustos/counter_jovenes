const sum = (total) => total++;

$('.plus__button').on('click', (event)=>{
   let value = Number($(event.currentTarget).prev().prev().text()) + 1;
   $(event.currentTarget).prev().prev().text(value);
   //Update total
   let total = Number($('.men__value').text()) + Number($('.women__value').text()) + Number($('.friends__value').text()) + Number($('.teens__value').text()) + Number($('.kids__value').text())
   $('.total__value').text(total)
})

$('.menus__button').on('click', event => {
    let value = Number($(event.currentTarget).prev().text())
    value <= 0 ? value = 0 : value --
    $(event.currentTarget).prev().text(value);
    //Update total
    let total = Number($('.men__value').text()) + Number($('.women__value').text()) + Number($('.friends__value').text()) + Number($('.teens__value').text()) + Number($('.kids__value').text())
   $('.total__value').text(total)
})



$('.section__values').on('click', (event) => {
   if(Number($('.total__value').text()) > 0){
      document.getElementById('send__data').classList.remove("disabledbutton");
   }else{
      document.getElementById('send__data').classList.add("disabledbutton");
   }
})


const send_message = () => {
const number = 573164915872;
const message = `Hola Cristiam, el total de asistencia fue ${$('.total__value').text()} personas. De las cuales: ${$('.men__value').text()} -- > hombres, ${$('.women__value').text()} -- > Mujeres, ${$('.friends__value').text()} -- > Visitas, ${$('.teens__value').text()} -- > Adolescentes, ${$('.kids__value').text()} -- > Niños`;
console.log(message);

const url2 = "whatsapp://send?text="+encodeURIComponent(message)+"&phone="+encodeURIComponent(number);
const url = "https://api.whatsapp.com/send?phone="+encodeURIComponent(number)+"&text="+encodeURIComponent(message);
window.open(url);
}

document.getElementById('send__data').addEventListener('click', send_message);

