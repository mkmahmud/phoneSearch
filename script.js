const mobiles = async(value) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${value}`;
   const res = await fetch(url);
   const data = await res.json();
   singelPhone(data.data)
}

const main = document.querySelector('.main');

const singelPhone = phone => {
    main.textContent = '';
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
        // console.log(phone.phone_name)
    });
}


const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', function(){
    const searchValue = document.getElementById('searchValue').value;
    mobiles(searchValue)
})

