const mobiles = async(value) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${value}`;
   const res = await fetch(url);
   const data = await res.json();
   singelPhone(data.data)
}

const main = document.querySelector('.main');

const singelPhone = phone => {
    main.textContent = '';
    phone = phone.slice(0,10);
    // alert
        const noPhone = document.querySelector('.noPhone');
    if(phone.length === 0){
        noPhone.classList.remove('d-none')
    }else{
        noPhone.classList.add('d-none')
    }
    
    phone.forEach(phone => {
        const div = document.createElement('div');
        const addClass = div.classList.add('col');
        const phone_name = phone.phone_name;
        const brand = phone.brand;
        const image = phone.image;
        div.innerHTML = `
        <div class="card" style="width: 18rem;">
           <img src="${image}" class="card-img-top" alt="...">
           <div class="card-body">
             <h5 class="card-title">${phone_name}</h5>
             <b>${brand}</b>
             <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        `;
        main.appendChild(div);
        loadingSpinner(false)

        // console.log(phone.phone_name)
    });
}


const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', function(){
    loadingSpinner(true)
    const searchValue = document.getElementById('searchValue').value;
    mobiles(searchValue)
})

const loadingSpinner = spinner =>{
    const spinnerloder = document.getElementById('spinner');
    if(spinner){
        spinnerloder.classList.remove('d-none');
    }else{
        spinnerloder.classList.add('d-none');
    }
}