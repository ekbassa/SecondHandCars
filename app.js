const secondHandCars = [];
let addCar = document.getElementById('btn-add');
addCar.addEventListener('click',(e)=>{
    let car = {
        model : document.getElementById('model').value,
        year  : document.getElementById('year').value,
        price : document.getElementById('price').value
       /*  discount : ()=>{
            let carOld = new Date().getFullYear() - year;
            let disc =(0.1 * carOld) * price;
            return disc;
        } */
    }
    addNewCar(car);
    showData();
    clearFields();
    buildElement(car.model,car.year,car.price);
    
})

    const list = document.querySelector('#car-list');
    list.addEventListener('click',(e)=>{
        if(e.target.className =='delete'){
            //find the parent of the element that was clicked
            let li = e.target.parentElement;
            list.removeChild(li);
        }
    })


const addNewCar = (item)=>{
    secondHandCars.push(item);
}
const showData = ()=>{
    console.log(secondHandCars);
}
const clearFields = ()=>{
   const fields = document.querySelectorAll('input');
   fields.forEach(function(field){
        field.value = '';
   })  
   fields[0].focus(); // get focus on field model
}
const buildElement = (model,year,price)=>{
    const carList = document.querySelector('.car-list');
    //create element
    const li = document.createElement('li');
    const spanModel = document.createElement('span');
    const spanYear = document.createElement('span');
    const spanPrice = document.createElement('span');
    const spanDelete = document.createElement('span');
    //add classes to span tag
    spanModel.classList.add('model');
    spanYear.classList.add('year');
    spanPrice.classList.add('price');
    spanDelete.classList.add('delete');
    //apend test content
    spanModel.textContent = model;
    spanYear.textContent = year;
    spanPrice.textContent = price;
    spanDelete.textContent = 'Delete';
    //append the element to DOM
    li.appendChild(spanModel);
    li.appendChild(spanYear);
    li.appendChild(spanPrice);
    li.appendChild(spanDelete);
    carList.appendChild(li);
}