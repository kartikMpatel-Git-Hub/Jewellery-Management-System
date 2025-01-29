const existingProduct = document.getElementById("product");
const title = document.getElementById('titleOfPage');
existingProduct.remove();
function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
}
// Gold
function goldRing(){
    let ring = [
        {name: "Glorious 22 Karat Yellow Gold Floral Ring",    price: "₹43,976" , img : "GoldRing1"},
        {name: "Sculpted Perfection Gold Finger Ring for Men", price: "₹87,069" , img : "GoldRing2"},
        {name: "Pastel Charm Gold Finger Ring",                price: "₹11,678" , img : "GoldRing3"}
    ];
    const element = document.getElementById('product-card-id');

    for (let i = 0; i < ring.length; i++) {
        const newProduct = existingProduct.cloneNode(true);
        newProduct.querySelector(".product-name").textContent = ring[i].name;
        newProduct.querySelector(".product-price").textContent = ring[i].price;
        newProduct.querySelector(".product-image").src = `Assets/Image/Jewellery/Gold/${ring[i].img}.png`;
        newProduct.querySelector(".product-image").alt = ring[i].name;

        const uniqueButtonId = `GoldRingId-${i}`;
        const viewButton = newProduct.querySelector("#viewId");
        const cartButton = newProduct.querySelector("#cartId");
        if (cartButton) {
            cartButton.id = uniqueButtonId; 
            cartButton.addEventListener("click", function() {
                const user = JSON.parse(localStorage.getItem('user'));
                if(!user)
                    window.location.href = 'login.html';
                else{
                    ring[i].type = 'gold';
                    addToCart(ring[i]); 
                }
            });
        }
        if (viewButton) {
            viewButton.id = uniqueButtonId; 
            viewButton.addEventListener("click", function() {
                console.log("Clicked " , uniqueButtonId)
                window.location.href = `singleProduct.html?product=gold&name=${ring[i].name}&price=${ring[i].price}&img=${ring[i].img}&type=ring`;
            });
        }
        
        element.appendChild(newProduct);
    }
}
function goldBangles(){
    let bangles = [
        { name: "Twined Beauty Gold Bangles", price: "₹1,66,087"     ,img : "GoldBangles1"},
        { name: "Ornate Beauty Gold Bangles", price: "₹3,87,069"     ,img : "GoldBangles2"},
        { name: "Gleaming Grandeur Gold Bangles", price: "₹2,11,678" ,img : "GoldBangles3"}
    ];
    const element = document.getElementById('product-card-id');
    for (let i = 0; i < bangles.length; i++) {
        const newProduct = existingProduct.cloneNode(true);
        newProduct.querySelector(".product-name").textContent = bangles[i].name;
        newProduct.querySelector(".product-price").textContent = bangles[i].price;
        newProduct.querySelector(".product-image").src = `Assets/Image/Jewellery/Gold/${bangles[i].img}.png`;
        newProduct.querySelector(".product-image").alt = bangles[i].name;
        const uniqueButtonId = `GoldBangleId-${i}`;
        const viewButton = newProduct.querySelector("#viewId");
        const cartButton = newProduct.querySelector("#cartId");
        if (cartButton) {
            cartButton.id = uniqueButtonId; 
            cartButton.addEventListener("click", function() {
                const user = JSON.parse(localStorage.getItem('user'));
                if(!user)
                    window.location.href = 'login.html';
                else{
                    bangles[i].type = 'gold';
                    addToCart(bangles[i]); 
                }
            });
        }
        if (viewButton) {
            viewButton.id = uniqueButtonId;
            viewButton.addEventListener("click", function () {
                console.log("Clicked")
                window.location.href = `singleProduct.html?product=gold&name=${bangles[i].name}&price=${bangles[i].price}&img=${bangles[i].img}&type=bangle`;
            });
        }
        
        element.appendChild(newProduct);
    }
}
function goldEarRing()
{
    let earring = [
    {name : "Modish 22 Karat Yellow Gold Floral Drop Earrings",price :"₹29,331" , img : "GoldEarRing1"},
    {name : "Flashy Floral Stud Earrings",price : "₹33,393" , img : "GoldEarRing2"},
    {name : "Rustic Glam Hoop Earrings",price : "₹1,01,678", img : "GoldEarRing3"}
];
const element = document.getElementById('product-card-id');
for (let i = 0; i < earring.length; i++) {
    const newProduct = existingProduct.cloneNode(true);
    newProduct.querySelector(".product-name").textContent = earring[i].name;
    newProduct.querySelector(".product-price").textContent = earring[i].price;
    newProduct.querySelector(".product-image").src = `Assets/Image/Jewellery/Gold/${earring[i].img}.png`;
    newProduct.querySelector(".product-image").alt = earring[i].name;
    const uniqueButtonId = `GoldEarRingId-${i}`;
    const viewButton = newProduct.querySelector("#viewId");
    const cartButton = newProduct.querySelector("#cartId");
    if (cartButton) {
        cartButton.id = uniqueButtonId; 
        cartButton.addEventListener("click", function() {
            const user = JSON.parse(localStorage.getItem('user'));
            if(!user)
                window.location.href = 'login.html';
            else{
                earring[i].type = 'gold';
                addToCart(earring[i]); 
            }
        });
    }
    if (viewButton) {
        viewButton.id = uniqueButtonId;
        viewButton.addEventListener("click", function () {
            console.log("clicked " , uniqueButtonId);
            window.location.href =`singleProduct.html?product=gold&name=${earring[i].name}&price=${earring[i].price}&img=${earring[i].img}&type=earRings`;
        });
    }
    element.appendChild(newProduct);
}
}
function goldNecklace()
{
    let necklace = [
    {name : "Sculpted Leaf Necklace Set",price :  "₹1,31,692" , img : "GoldNecklace1"},
    {name : "Refined Enamel Gold Necklace Set",price : "₹2,38,275" , img : "GoldNecklace2"},
    {name : "Radiant Ripple Gold Necklace",price : "₹43,343" , img : "GoldNecklace3"}
];
const element = document.getElementById('product-card-id');
for (let i = 0; i < necklace.length; i++) {
    const newProduct = existingProduct.cloneNode(true);
    newProduct.querySelector(".product-name").textContent = necklace[i].name;
    newProduct.querySelector(".product-price").textContent = necklace[i].price;
    newProduct.querySelector(".product-image").src = `Assets/Image/Jewellery/Gold/${necklace[i].img}.png`;
    newProduct.querySelector(".product-image").alt = necklace[i].name;
        const uniqueButtonId = `GoldNecklaceId-${i}`;
        const viewButton = newProduct.querySelector("#viewId");
        const cartButton = newProduct.querySelector("#cartId");
        if (cartButton) {
            cartButton.id = uniqueButtonId; 
            cartButton.addEventListener("click", function() {
                const user = JSON.parse(localStorage.getItem('user'));
                if(!user)
                    window.location.href = 'login.html';
                else{
                    necklace[i].type = 'gold';
                    addToCart(necklace[i]); 
                }
            });
        }
        if (viewButton) {
            viewButton.id = uniqueButtonId;
            viewButton.addEventListener("click", function () {
                console.log("Clicked",uniqueButtonId);
                window.location.href = `singleProduct.html?product=gold&name=${necklace[i].name}&price=${necklace[i].price}&img=${necklace[i].img}&type=necklace`;
            });
        }
        element.appendChild(newProduct);
    }
}

// Platinum
function planinumEarRing()
{
    let EarRing = [
        {name : "Platinum Leaf Diamond Stud Earrings",price :  "₹139,692",img : "PlatinumEarRing1"},
        {name : "Dual-Tone Diamond Stud Earrings",price : "₹38,275",img : "PlatinumEarRing2"}
    ];
    const element = document.getElementById('product-card-id');
        for (let i = 0; i < EarRing.length; i++) {
            const newProduct = existingProduct.cloneNode(true);
            newProduct.querySelector(".product-name").textContent = EarRing[i].name;
            newProduct.querySelector(".product-price").textContent = EarRing[i].price;
            newProduct.querySelector(".product-image").src = `Assets/Image/Jewellery/Platinum/PlatinumEarRing${i+1}.png`;
            newProduct.querySelector(".product-image").alt = EarRing[i].name;
            const uniqueButtonId = `PlatinumEarRingId-${i}`;
            const viewButton = newProduct.querySelector("#viewId");
            const cartButton = newProduct.querySelector("#cartId");
            if (cartButton) {
                cartButton.id = uniqueButtonId; 
                cartButton.addEventListener("click", function() {
                    const user = JSON.parse(localStorage.getItem('user'));
                    if(!user)
                        window.location.href = 'login.html';
                    else{
                        EarRing[i].type = 'platinum';
                        addToCart(EarRing[i]); 
                    }
                });
            }
            if (viewButton) {
                viewButton.id = uniqueButtonId;
                viewButton.addEventListener("click", function () {
                    console.log("Clicked");
                    window.location.href = `singleProduct.html?product=platinum&name=${EarRing[i].name}&price=${EarRing[i].price}&img=PlatinumEarRing${i+1}&type=earRings`;
                });
            }
            element.appendChild(newProduct);
        }
    }
function planinumNecklesh()
{
    let neckLesh = [
        {name : "Versatile Platinum Necklesh",price :  "₹139,692",img : "PlatinumNecklesh1"},
        {name : "Sophisticated Platinum and Rose Gold Chain",price : "₹38,275",img : "PlatinumNecklesh2"}
    ];
    const element = document.getElementById('product-card-id');
    for (let i = 0; i < neckLesh.length; i++) {
        const newProduct = existingProduct.cloneNode(true);
        newProduct.querySelector(".product-name").textContent = neckLesh[i].name;
        newProduct.querySelector(".product-price").textContent = neckLesh[i].price;
        newProduct.querySelector(".product-image").src = `Assets/Image/Jewellery/Platinum/PlatinumNecklesh${i+1}.png`;
        newProduct.querySelector(".product-image").alt = neckLesh[i].name;
        const uniqueButtonId = `PlatinumNeckleshId-${i}`;
        const viewButton = newProduct.querySelector("#viewId");
        const cartButton = newProduct.querySelector("#cartId");
        if (cartButton) {
            cartButton.id = uniqueButtonId; 
            cartButton.addEventListener("click", function() {
                const user = JSON.parse(localStorage.getItem('user'));
                if(!user)
                    window.location.href = 'login.html';
                else{
                    neckLesh[i].type = 'platinum';
                    addToCart(neckLesh[i]); 
                }
            });
        }
        if (viewButton) {
            viewButton.id = uniqueButtonId;
            viewButton.addEventListener("click", function () {
                console.log("Clicked");
                window.location.href = `singleProduct.html?product=platinum&name=${neckLesh[i].name}&price=${neckLesh[i].price}&img=PlatinumNecklesh${i+1}&type=neckLesh`;
            });
        }
        element.appendChild(newProduct);
    }
}
function planinumRing()
{
    let ring = [
        {name : "Dainty Platinum and Diamond Ring",price :  "₹39,692",img : "PlatinumRing1"},
        {name : "Majestic Platinum Solitaire Finger Ring for Men",price : "₹38,275",img : "PlatinumRing2"},
        {name : "Ribbon Pattern Platinum and Diamond Ring",price : "₹48,275",img : "PlatinumRing3"}
    ];
    const element = document.getElementById('product-card-id');
    for (let i = 0; i < ring.length; i++) {
        const newProduct = existingProduct.cloneNode(true);
        newProduct.querySelector(".product-name").textContent = ring[i].name;
        newProduct.querySelector(".product-price").textContent = ring[i].price;
        newProduct.querySelector(".product-image").src = `Assets/Image/Jewellery/Platinum/PlatinumRing${i+1}.png`;
        newProduct.querySelector(".product-image").alt = ring[i].name;
        const uniqueButtonId = `PlatinumRingId-${i}`;
        const viewButton = newProduct.querySelector("#viewId");
        const cartButton = newProduct.querySelector("#cartId");
        if (cartButton) {
            cartButton.id = uniqueButtonId; 
            cartButton.addEventListener("click", function() {
                const user = JSON.parse(localStorage.getItem('user'));
                if(!user)
                    window.location.href = 'login.html';
                else{
                    ring[i].type = 'platinum';
                    addToCart(ring[i]); 
                }
            });
        }
        if (viewButton) {
            viewButton.id = uniqueButtonId;
            viewButton.addEventListener("click", function () {
                console.log("Clicked");
                window.location.href = `singleProduct.html?product=platinum&name=${ring[i].name}&price=${ring[i].price}&img=PlatinumRing${i+1}&type=ring`;
            });
        }
        element.appendChild(newProduct);
    }
}
function planinumOther()
{
    let other = [
        {name : "Platinum Brashlet",price :  "₹139,692",img : "PlatinumOther1"},
        {name : "Sophisticated Platinum Kada(For Men)",price : "₹38,275",img : "PlatinumOther2"}
    ];
    const element = document.getElementById('product-card-id');
    for (let i = 0; i < other.length; i++) {
        const newProduct = existingProduct.cloneNode(true);
        newProduct.querySelector(".product-name").textContent = other[i].name;
        newProduct.querySelector(".product-price").textContent = other[i].price;
        newProduct.querySelector(".product-image").src = `Assets/Image/Jewellery/Platinum/PlatinumOther${i+1}.png`;
        newProduct.querySelector(".product-image").alt = other[i].name;
        const uniqueButtonId = `PlatinumOtherId-${i}`;
        const viewButton = newProduct.querySelector("#viewId");
        const cartButton = newProduct.querySelector("#cartId");
        if (cartButton) {
            cartButton.id = uniqueButtonId; 
            cartButton.addEventListener("click", function() {
                const user = JSON.parse(localStorage.getItem('user'));
                if(!user)
                    window.location.href = 'login.html';
                else{
                    other[i].type = 'platinum';
                    addToCart(other[i]); 
                }
            });
        }
        if (viewButton) {
            viewButton.id = uniqueButtonId;
            viewButton.addEventListener("click", function () {
                console.log("Clicked");
                window.location.href = `singleProduct.html?product=platinum&name=${other[i].name}&price=${other[i].price}&img=PlatinumOther${i+1}&type=${other[i].name}`;
            });
        }
        element.appendChild(newProduct);
    }
}

// Diamond
function diamondBangle()
{
    let bangle = [
        {name : "Wave Diamond Bangle",price :  "₹189,692",img : "DiamondBangle1"},
        {name : "Luxe Curves Diamond Bangle",price : "₹138,275",img : "DiamondBangle2"}
    ];
    const element = document.getElementById('product-card-id');
    for (let i = 0; i < bangle.length; i++) {
        const newProduct = existingProduct.cloneNode(true);
        newProduct.querySelector(".product-name").textContent = bangle[i].name;
        newProduct.querySelector(".product-price").textContent = bangle[i].price;
        newProduct.querySelector(".product-image").src = `Assets/Image/Jewellery/Diamond/DiamondBangle${i+1}.png`;
        newProduct.querySelector(".product-image").alt = bangle[i].name;
        const uniqueButtonId = `diamondBangleId-${i}`;
        const viewButton = newProduct.querySelector("#viewId");
        const cartButton = newProduct.querySelector("#cartId");
        if (cartButton) {
            cartButton.id = uniqueButtonId; 
            cartButton.addEventListener("click", function() {
                const user = JSON.parse(localStorage.getItem('user'));
                if(!user)
                    window.location.href = 'login.html';
                else{
                    bangle[i].type = 'diamond';
                    addToCart(bangle[i]); 
                }
            });
        }
        if (viewButton) {
            viewButton.id = uniqueButtonId;
            viewButton.addEventListener("click", function () {
                console.log("Clicked");
                window.location.href = `singleProduct.html?product=diamond&name=${bangle[i].name}&price=${bangle[i].price}&img=DiamondBangle${i+1}&type=bangle`;
            });
        }
        element.appendChild(newProduct);
    }
}
function diamondEarRing()
{
    let earRing = [
        {name : "Glamorous Floral Diamond Stud Earrings with Rock Crystal",price :  "₹39,692",img : "DiamondEarRing1"},
        {name : "Regal Diamond Encrusted Square Gold Stud Earrings",price : "₹42,075",img : "DiamondEarRing2"}
    ];
    const element = document.getElementById('product-card-id');
    for (let i = 0; i < earRing.length; i++) {
        const newProduct = existingProduct.cloneNode(true);
        newProduct.querySelector(".product-name").textContent = earRing[i].name;
        newProduct.querySelector(".product-price").textContent = earRing[i].price;
        newProduct.querySelector(".product-image").src = `Assets/Image/Jewellery/Diamond/DiamondEarRing${i+1}.png`;
        newProduct.querySelector(".product-image").alt = earRing[i].name;
        const uniqueButtonId = `diamondEarRingId-${i}`;
        const viewButton = newProduct.querySelector("#viewId");
        const cartButton = newProduct.querySelector("#cartId");
        if (cartButton) {
            cartButton.id = uniqueButtonId; 
            cartButton.addEventListener("click", function() {
                const user = JSON.parse(localStorage.getItem('user'));
                if(!user)
                    window.location.href = 'login.html';
                else{
                    earRing[i].type = 'diamond';
                    addToCart(earRing[i]); 
                }
            });
        }
        if (viewButton) {
            viewButton.id = uniqueButtonId;
            viewButton.addEventListener("click", function () {
                console.log("Clicked");
                window.location.href = `singleProduct.html?product=diamond&name=${earRing[i].name}&price=${earRing[i].price}&img=DiamondEarRing${i+1}&type=earRings`;
            });
        }
        element.appendChild(newProduct);
    }
}
function diamondMangalsutra()
{
    let mangalsutra = [
        {name : "Infinity Floral Diamond Mangalsutra",price :  "₹66,692",img : "DiamondMangalsutra1"},
        {name : "Everlasting Harmony Solitaire Mangalsutra",price : "₹177,075",img : "DiamondMangalsutra2"},
        {name : "Dazzling Diamond Mangalsutra",price : "₹68,075",img : "DiamondMangalsutra3"},
        {name : "Elegant Floral Diamond Mangalsutra in Yellow",price : "₹127,075",img : "DiamondMangalsutra4"}
    ];
    const element = document.getElementById('product-card-id');
    for (let i = 0; i < mangalsutra.length; i++) {
        const newProduct = existingProduct.cloneNode(true);
        newProduct.querySelector(".product-name").textContent = mangalsutra[i].name;
        newProduct.querySelector(".product-price").textContent = mangalsutra[i].price;
        newProduct.querySelector(".product-image").src = `Assets/Image/Jewellery/Diamond/DiamondMangalsutra${i+1}.png`;
        newProduct.querySelector(".product-image").alt = mangalsutra[i].name;
        const uniqueButtonId = `DiamondMangalsutraId-${i}`;
        const viewButton = newProduct.querySelector("#viewId");
        const cartButton = newProduct.querySelector("#cartId");
        if (cartButton) {
            cartButton.id = uniqueButtonId; 
            cartButton.addEventListener("click", function() {
                const user = JSON.parse(localStorage.getItem('user'));
                if(!user)
                    window.location.href = 'login.html';
                else{
                    mangalsutra[i].type = 'diamond';
                    addToCart(mangalsutra[i]); 
                }
            });
        }
        if (viewButton) {
            viewButton.id = uniqueButtonId;
            viewButton.addEventListener("click", function () {
                console.log("Clicked");
                window.location.href = `singleProduct.html?product=diamond&name=${mangalsutra[i].name}&price=${mangalsutra[i].price}&img=DiamondMangalsutra${i+1}&type=Mangalsutra`;
            });
        }
        element.appendChild(newProduct);
    }
}
function diamondRing()
{
    let ring = [
        {name : "Dazzling Diamond Finger Ring",price :  "₹46,692",img : "DiamondRing1"},
        {name : "Celestial Gleam Diamond Finger Ring",price : "₹77,075",img : "DiamondRing2"},
    ];
    const element = document.getElementById('product-card-id');
    for (let i = 0; i < ring.length; i++) {
        const newProduct = existingProduct.cloneNode(true);
        newProduct.querySelector(".product-name").textContent = ring[i].name;
        newProduct.querySelector(".product-price").textContent = ring[i].price;
        newProduct.querySelector(".product-image").src = `Assets/Image/Jewellery/Diamond/DiamondRing${i+1}.png`;
        newProduct.querySelector(".product-image").alt = ring[i].name;
        const uniqueButtonId = `DiamondringId-${i}`;
        const viewButton = newProduct.querySelector("#viewId");
        const cartButton = newProduct.querySelector("#cartId");
        if (cartButton) {
            cartButton.id = uniqueButtonId; 
            cartButton.addEventListener("click", function() {
                const user = JSON.parse(localStorage.getItem('user'));
                if(!user)
                    window.location.href = 'login.html';
                else{
                    ring[i].type = 'diamond';
                    addToCart(ring[i]); 
                }
            });
        }
        if (viewButton) {
            viewButton.id = uniqueButtonId;
            viewButton.addEventListener("click", function () {
                console.log("Clicked");
                window.location.href = `singleProduct.html?product=diamond&name=${ring[i].name}&price=${ring[i].price}&img=DiamondRing${i+1}&type=ring`;
            });
        }
        element.appendChild(newProduct);
    }
}

// Funtion Calling 
function goldProduct(){
    title.innerHTML = "Gold Collection"
    goldBangles();
    goldEarRing();
    goldRing();
    goldNecklace();
}

function planinumProduct(){
    title.innerHTML = "Platinum Collection"
    planinumEarRing();
    planinumNecklesh();
    planinumRing();
    planinumOther();
}
function diamondProduct(){
    title.innerHTML = "Diamond Collection"
    diamondBangle();
    diamondEarRing();
    diamondMangalsutra();
    diamondRing();
}
function allRings(){
    title.innerHTML = "Rings Collection"
    goldRing();
    diamondRing();
    planinumRing();
}
function allEarRings(){
    title.innerHTML = "Earrings Collection"
    goldEarRing();
    planinumEarRing();
    diamondEarRing();
}
function allBangle(){
    title.innerHTML = "Bangle Collection"
    goldBangles();
    diamondBangle();
}
function goldOtherProduct(){
    title.innerHTML = "Gold Product Collection"
    goldNecklace();
}
function platinumOtherProduct(){
    title.innerHTML = "Platinum Product Collection"
    planinumNecklesh();
    planinumOther();
}
function diamondOtherProduct(){
    title.innerHTML = "Diamond Product Collection"
    diamondMangalsutra();
}
function allProductDisplay(){
    title.innerHTML = "Our Collection"
    goldRing();
    diamondRing();
    planinumRing();
    goldEarRing();
    diamondEarRing();
    planinumEarRing();
    goldBangles();
    diamondBangle();
    goldNecklace();
    planinumNecklesh();
    planinumOther();
    diamondMangalsutra();
}
//Parameter Check
function allProduct(){
    let paraMeter  = new URLSearchParams(window.location.search);
    let fun = paraMeter.get('page');
    switch(fun){
        case 'allProduct':
                allProductDisplay();
                break;
        case 'goldProduct':
                goldProduct();
                break;
        case 'platinumProduct':
                planinumProduct();
                break;
        case 'diamondProduct':
                diamondProduct();
                break;
        case 'bangle':
                allBangle();
                break;
        case 'ring':
                allRings();
                break;
        case 'earRings':
                allEarRings();
                break;
        case 'goldOther':
                goldOtherProduct();
                break;
        case 'platinumOther':
                platinumOtherProduct();
                break;
        case 'diamondOther':
                diamondOtherProduct();
                break;
    }
}

window.onload = allProduct()