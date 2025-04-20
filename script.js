let orderList = JSON.parse(localStorage.getItem("orderList")) || [];
let addedOrder = document.getElementById("addedOrder");

function loadMainDishes() {
  const menu = document.getElementById("menu");
  menu.innerHTML = "";

  fetch("https://6802e8440a99cb7408eaae87.mockapi.io/eltahrir/main-dishes")
    .then(response => response.json())
    .then(data => {
      data.forEach(dish => {
        const col = document.createElement("div");
        col.className = "col-lg-6 animated";
        col.setAttribute('data-id', dish.id); 

        col.innerHTML = `
          <div class="d-flex align-items-center flex-column flex-sm-row">
            <img src="${dish.img}" alt="" class="flex-shrink-0 img-fluid rounded" style="width: 250px; height: 250px;">
            <div class="w-100 d-flex flex-column text-start ps-4">
              <h5 class="d-flex justify-content-between align-items-center border-bottom pb-2">
                <span class="text-success">${dish.name}</span>
                <span class="text-warning">${dish.price} <span>LE</span></span>
              </h5>
              <small class="text-success mt-2">${dish.desc}</small>
              <button class="btn btn-success mt-3 w-50 addOrderBtn">Add To Order</button>
            </div>
          </div>
        `;

        menu.appendChild(col);

        const addButton = col.querySelector(".addOrderBtn");
        addButton.onclick = function () {

          const { id, ...dishWithoutId } = dish;
          const isAlreadyAdded = orderList.some(orderItem => orderItem.name === dish.name);

          if (!isAlreadyAdded) {
            orderList.push(dishWithoutId); 
            localStorage.setItem("orderList", JSON.stringify(orderList));
            console.log("Order List:", orderList); 
            addedOrder.style.display = "flex";
            setTimeout(() => {
              addedOrder.style.display = "none";
            }, 3000);
          } 
        };
      });
    })
    .catch(error => console.error("There was a problem with the fetch operation:", error));
}

function loadDrinks() {
  const menu = document.getElementById("menu");
  menu.innerHTML = "";

  fetch('https://6802e8440a99cb7408eaae87.mockapi.io/eltahrir/drinks')
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        const col = document.createElement("div");
        col.className = "col-lg-6 animated";
        col.setAttribute('data-id', item.id); 

        col.innerHTML = `
          <div class="d-flex align-items-center flex-column flex-sm-row">
            <img src="${item.img}" alt="" class="flex-shrink-0 img-fluid rounded" style="width: 150px; height: 150px;">
            <div class="w-100 d-flex flex-column text-start ps-4">
              <h5 class="d-flex justify-content-between align-items-center border-bottom pb-2">
                <span class="text-success">${item.name}</span>
                <span class="text-warning">${item.price} <span>LE</span></span>
              </h5>
              <button class="btn btn-success mt-3 w-50 addOrderBtn">Add To Order</button>
            </div>
          </div>
        `;

        menu.appendChild(col);

        const addButton = col.querySelector(".addOrderBtn");
        addButton.onclick = function () {

          const { id, ...itemWithoutId } = item;
          const isAlreadyAdded = orderList.some(orderItem => orderItem.name === item.name); 

          if (!isAlreadyAdded) {
            orderList.push(itemWithoutId); 
            localStorage.setItem("orderList", JSON.stringify(orderList));
            console.log("Order List:", orderList); 
            addedOrder.style.display = "flex";
            setTimeout(() => {
              addedOrder.style.display = "none";
            }, 3000);
          } 
        };
      });
    })
    .catch(error => console.error("There was a problem with the fetch operation:", error));
}

function loadAccompaniments() {
  const menu = document.getElementById('menu');
  menu.innerHTML = "";

  fetch("https://6802ef0b0a99cb7408eabbfd.mockapi.io/eltahrir/accompaniments")
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        const col = document.createElement('div');
        col.className = "col-lg-6 animated";
        col.setAttribute('data-id', item.id); 

        col.innerHTML = `
          <div class="d-flex align-items-center flex-column flex-sm-row">
            <img src="${item.img}" alt="" class="flex-shrink-0 img-fluid rounded" style="width: 200px; height: 200px;">
            <div class="w-100 d-flex flex-column text-start ps-4">
              <h5 class="d-flex justify-content-between align-items-center border-bottom pb-2 ">
                <span class="text-success">${item.name}</span>
                <span class="text-warning">${item.price} <span>LE</span></span>
              </h5>
              <button class="btn btn-success mt-3 w-50 addOrderBtn">Add To Order</button>
            </div>
          </div>
        `;

        menu.appendChild(col);

        const addButton = col.querySelector(".addOrderBtn");
        addButton.onclick = function () {

          const { id, ...itemWithoutId } = item;
          const isAlreadyAdded = orderList.some(orderItem => orderItem.name === item.name);

          if (!isAlreadyAdded) {
            orderList.push(itemWithoutId); 
            localStorage.setItem("orderList", JSON.stringify(orderList));
            console.log("Order List:", orderList); 
            addedOrder.style.display = "flex";
            setTimeout(() => {
              addedOrder.style.display = "none";
            }, 3000);
          } 
        };
      });
    })
    .catch(error => console.error("There was a problem with the fetch operation:", error));
}

function loadDesserts() {
  const menu = document.getElementById('menu');
  menu.innerHTML = "";

  fetch("https://6802ef0b0a99cb7408eabbfd.mockapi.io/eltahrir/dessert")
    .then(response => response.json())
    .then(data => {
      data.forEach(item => {
        const col = document.createElement('div');
        col.className = "col-lg-6 animated";
        col.setAttribute('data-id', item.id); 

        col.innerHTML = `
          <div class="d-flex align-items-center flex-column flex-sm-row">
            <img src="${item.img}" alt="" class="flex-shrink-0 img-fluid rounded" style="width: 250px; height: 250px;">
            <div class="w-100 d-flex flex-column text-start ps-4">
              <h5 class="d-flex justify-content-between align-items-center border-bottom pb-2">
                <span class="text-success">${item.name}</span>
                <span class="text-warning">${item.price} <span>LE</span></span>
              </h5>
              <button class="btn btn-success mt-3 w-50 addOrderBtn">Add To Order</button>
            </div>
          </div>
        `;

        menu.appendChild(col);

        const addButton = col.querySelector(".addOrderBtn");
        addButton.onclick = function () {

          const { id, ...itemWithoutId } = item;
          const isAlreadyAdded = orderList.some(orderItem => orderItem.name === item.name); 

          if (!isAlreadyAdded) {
            orderList.push(itemWithoutId); 
            localStorage.setItem("orderList", JSON.stringify(orderList));
            console.log("Order List:", orderList); 
            addedOrder.style.display = "flex";
            setTimeout(() => {
              addedOrder.style.display = "none";
            }, 3000);
          } 
        };
      });
    })
    .catch(error => console.error("There was a problem with the fetch operation:", error));
}


  window.addEventListener("DOMContentLoaded", () => {
    loadMainDishes();
  });
  

  document.getElementById("mainDishesBtn").addEventListener("click", function (e) {
    e.preventDefault();
    loadMainDishes();
  });
  
  document.getElementById("Drinks").addEventListener("click", function (e) {
    e.preventDefault();
    loadDrinks();
  });
  
  document.getElementById("Accompaniments").addEventListener("click",function(e){
    e.preventDefault();
    loadAccompaniments();
  })

  document.getElementById("Desserts").addEventListener("click", function(e){
    e.preventDefault();
    loadDesserts();
  })


  /******************************************************************** */
$('#videoModal').on('shown.bs.modal', function (e) {
    var videoSrc = $(e.relatedTarget).data('src'); 
    $('#video').attr('src', videoSrc); 
});


$('#videoModal').on('hidden.bs.modal', function () {
    $('#video').attr('src', ''); 
});



/************************************************************* */
const toggler = document.querySelector('.navbar-toggler');
const collapse = document.getElementById('navbarCollapse');

toggler.addEventListener('click', function () {
    collapse.classList.toggle('show');
});

/************************************************************* */
let navLinks = document.querySelectorAll('.nav-item.nav-link');

navLinks.forEach(function(link) {
  link.onclick = function() {
    navLinks.forEach(function(item) {
      item.classList.remove('active');
    });
    this.classList.add('active');
  };
});
/*********************************************************** */
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".navbar");
        if (window.scrollY > window.innerHeight / 4) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

/********************************************************* */
window.onload = function () {
  let navLinks = document.querySelectorAll(".nav-item a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault(); 

      navLinks.forEach(function (l) {
        l.classList.remove("active");
      });
      this.classList.add("active");
    });
  });
};

/***************************************************** */
let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

let messageSend = document.getElementById("messageSend");
let send = document.getElementById("send");

send.addEventListener("click", function (e) {
  e.preventDefault(); 
  
  if(name.value.trim().length > 1 && email.value.trim().length > 1 && message.value.trim().length > 1){
    name.value="";
    email.value="";
    message.value="";

    messageSend.innerHTML = "Thank you for your message"
    messageSend.style.visibility = "visible";
    messageSend.style.opacity = "1";
  
    setTimeout(() => {
      messageSend.style.opacity = "0";
      messageSend.style.visibility = "hidden";
    }, 3000);
  }else if(name.value.trim().length < 1  || email.value.trim().length < 1 || message.value.trim().length < 1){
    messageSend.innerHTML = "Please fill in all fields to send the message"
    messageSend.style.visibility = "visible";
    messageSend.style.opacity = "1";
    setTimeout(() => {
      messageSend.style.opacity = "0";
      messageSend.style.visibility = "hidden";
    }, 3000);
  }

});
/************************************************** */
document.getElementById('serviceItem').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'flex';
});

document.getElementById('closeBtn').addEventListener('click', function() {
  document.getElementById('popup').style.display = 'none';
});

document.getElementById('leaveMsg').addEventListener('click', function() {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  document.getElementById('popup').style.display = 'none';
});

/************************************************************* */
document.getElementById('branches').addEventListener('click', function() {
  document.getElementById('popupBranches').style.display = 'flex';
});

document.getElementById('closeBtnBranches').addEventListener('click', function() {
  document.getElementById('popupBranches').style.display = 'none';
});


    /***************************************************************** */
/***************************************************************** */
