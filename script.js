const mobiles = async(value) => {
    const url = `https://openapi.programming-hero.com/api/phones?search=${value}`;
   const res = await fetch(url);
   const data = await res.json();
   singelPhone(data.data)
}

const main = document.querySelector('.main');
const totalPhones = document.getElementById('totalPhones');

const singelPhone = phone => {
    totalPhones.innerText = phone.length;
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
             <button type="button" onclick="displayDetails('${phone.slug}')" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
                Launch demo modal
            </button>
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

const searchValue = document.getElementById('searchValue');
searchValue.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
        const searchEnterValue = document.getElementById('searchValue').value;
        mobiles(searchEnterValue)
    }
})


const displayDetails = async phone => {
    const url = `https://openapi.programming-hero.com/api/phone/${phone}`; 
    const res = await fetch(url);
    const data = await res.json();

    const exampleModalLongTitle = document.getElementById('exampleModalLongTitle');
    exampleModalLongTitle.innerText = data.data.name;
    console.log(data);
} 


mobiles('apple')


// For loop

const oddNumber = [1,3,5,7,9,11,13,15,17,19];

// make even Number by for loop

let newArray = []

for(number of oddNumber){
    number = number +1;
    newArray.push(number);
}
// console.log(newArray)

// make even Number by for Map

const mapOddNumber = oddNumber.map(num => num * 2)
// console.log(mapOddNumber)


const array = { hobbies: ["dancing", "singing", "acting"] };
// console.log(JSON.stringify(array));

const person = [
    {
      name: "rahim",
      age: 22,
      friends: ["rahim,karim,jabbar"],
    },
    {
      name: "rahim2",
      age: 22,
      friends: ["rahim,karim,jabbar"],
    },
    {
    name: "rahim3",
    age: 22,
    friends: ["rahim,karim,jabbar"],
  },
  ];

//   console.log(person.slice(1,2))

const dreamGirl = [
    {
      sokina: {
        name: "bbu",
        height: "5.4",
        family: [{ father: "rock", mother: "shila", sister: "chinki" }],
        age: undefined,
        contactInfo: [
          {
            facebook: {
              link: "https://www.facebook.com/",
              followers: "12545",
              status: "single",
              friendsList: [{ name: "rofik" }, undefined],
            },
          },
          { instagram: "https://www.instagram.com/" },
        ],
      },
    },
  ];

//   console.log(dreamGirl[0].sokina.contactInfo[1].instagram)
const phones = [
    { name: "sony", price: 500 },
    { name: "apple", price: 700 },
    { name: "sony", price: 700 },
  ];

//   consol.log(phones.find((phone) => phone.price === 500))