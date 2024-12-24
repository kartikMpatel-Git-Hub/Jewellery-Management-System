const existingProduct = document.getElementById("product");
const title = document.getElementById('titleOfPage');
existingProduct.remove();

// function goldRing()
// {
//     let ring = [
//         {name : "Glorious 22 Karat Yellow Gold Floral Ring",price :  "₹43,976"},
//         {name : "Sculpted Perfection Gold Finger Ring for Men",price : "₹87,069"},
//         {name : "Pastel Charm Gold Finger Ring",price : "₹11,678"}
//     ]
//     const element = document.getElementById('product-card-id');
//     for(var i = 0; i < ring.length; i++){
//         const newProduct = existingProduct.cloneNode(true);
//         newProduct.querySelector(".product-name").textContent = ring[i].name;
//         newProduct.querySelector(".product-price").textContent = ring[i].price;
//         newProduct.querySelector(".product-image").src = `Assets/Image/Jewellery/Gold/GoldRing${i+1}.png`;
//         newProduct.querySelector(".product-image").alt = ring[i].name;
        
//         const uniqueButtonId = `viewId-${i}`;
//         Proname = ring[i].name 
//         console.log(Proname)
//         const viewButton = newProduct.querySelector("#viewId");
//         if (viewButton) {
//             viewButton.id = uniqueButtonId; // Set a unique ID
//             viewButton.addEventListener("click", function() {
//                 console.log("Clicked " , uniqueButtonId)
//                 window.open(`about_Us.html?name=${Proname}`, "_blank");
//                 // window.open(`product-details.html?product=${encodeURIComponent(ring[i].name)}`, "_blank");
//             });
//         }
//         element.appendChild(newProduct);
//     }
// }

// function goldBangles()
// {
//     let bangles = [
//         {name : "Twined Beauty Gold Bangles",price :  "₹1,66,087"},
//         {name : "Ornate Beauty Gold BanglesMen",price : "₹3,87,069"},
//         {name : "Gleaming Grandeur Gold Bangles",price : "₹2,11,678"}
//     ];
//     const element = document.getElementById('product-card-id');
//     for(var i = 0; i < bangles.length; i++){
//         const newProduct = existingProduct.cloneNode(true);
//         newProduct.querySelector(".product-name").textContent = bangles[i].name;
//         newProduct.querySelector(".product-price").textContent = bangles[i].price;
//         newProduct.querySelector(".product-image").src = `Assets/Image/Jewellery/Gold/GoldBangles${i+1}.png`;
//         newProduct.querySelector(".product-image").alt = bangles[i].name;

//         const uniqueButtonId = `goldBangleId-${i}`;
//         const viewButton = newProduct.querySelector("#viewId");
//         if (viewButton) {
    //             viewButton.id = uniqueButtonId; 
    //             viewButton.addEventListener("click", function() {
        //                 console.log("Clicked ")
        //                 window.open(`product-details.html?product=${encodeURIComponent(bangles[i].price)}`, "_blank");
        //             });
        //         }
        //         element.appendChild(newProduct);
        //     }
        // }
function goldRing(){
    let ring = [
        {name: "Glorious 22 Karat Yellow Gold Floral Ring", price: "₹43,976"},
        {name: "Sculpted Perfection Gold Finger Ring for Men", price: "₹87,069"},
        {name: "Pastel Charm Gold Finger Ring", price: "₹11,678"}
    ];
    const element = document.getElementById('product-card-id');

    for (let i = 0; i < ring.length; i++) {
        const newProduct = existingProduct.cloneNode(true);
        newProduct.querySelector(".product-name").textContent = ring[i].name;
        newProduct.querySelector(".product-price").textContent = ring[i].price;
        newProduct.querySelector(".product-image").src = `Assets/Image/Jewellery/Gold/GoldRing${i + 1}.png`;
        newProduct.querySelector(".product-image").alt = ring[i].name;

        const uniqueButtonId = `GoldRingId-${i}`;
        const viewButton = newProduct.querySelector("#viewId");
        if (viewButton) {
            viewButton.id = uniqueButtonId; 
            viewButton.addEventListener("click", function() {
                console.log("Clicked " , uniqueButtonId)
                window.location.href = `singleProduct.html?product=gold&name=${ring[i].name}&price=${ring[i].price}&img=GoldRing${i+1}&type=ring`;
            });
        }
        
        element.appendChild(newProduct);
    }
}

function goldBangles(){
    let bangles = [
        { name: "Twined Beauty Gold Bangles", price: "₹1,66,087" },
        { name: "Ornate Beauty Gold Bangles", price: "₹3,87,069" },
        { name: "Gleaming Grandeur Gold Bangles", price: "₹2,11,678" }
    ];
    const element = document.getElementById('product-card-id');
    for (let i = 0; i < bangles.length; i++) {
        const newProduct = existingProduct.cloneNode(true);
        newProduct.querySelector(".product-name").textContent = bangles[i].name;
        newProduct.querySelector(".product-price").textContent = bangles[i].price;
        newProduct.querySelector(".product-image").src = `Assets/Image/Jewellery/Gold/GoldBangles${i + 1}.png`;
        newProduct.querySelector(".product-image").alt = bangles[i].name;
        const uniqueButtonId = `GoldBangleId-${i}`;
        const viewButton = newProduct.querySelector("#viewId");
        if (viewButton) {
            viewButton.id = uniqueButtonId;
            viewButton.addEventListener("click", function () {
                console.log("Clicked")
                window.location.href = `singleProduct.html?product=gold&name=${bangles[i].name}&price=${bangles[i].price}&img=GoldBangles${i+1}&type=bangle`;
            });
        }
        
        element.appendChild(newProduct);
    }
}
function goldEarRing()
{
    // const element = document.getElementById('product-card-id');
    // for(var i = 0; i < earring.length; i++){
        //     const newProduct = existingProduct.cloneNode(true);
        //     newProduct.querySelector(".product-name").textContent = earring[i].name;
        //     newProduct.querySelector(".product-price").textContent = earring[i].price;
        //     newProduct.querySelector(".product-image").alt = earring[i].name;
        
        //     element.appendChild(newProduct);
    // }
    let earring = [
    {name : "Modish 22 Karat Yellow Gold Floral Drop Earrings",price :"₹29,331"},
    {name : "Flashy Floral Stud Earrings",price : "₹33,393"},
    {name : "Rustic Glam Hoop Earrings",price : "₹1,01,678"}
];
const element = document.getElementById('product-card-id');
for (let i = 0; i < earring.length; i++) {
    const newProduct = existingProduct.cloneNode(true);
    newProduct.querySelector(".product-name").textContent = earring[i].name;
    newProduct.querySelector(".product-price").textContent = earring[i].price;
    newProduct.querySelector(".product-image").src = `Assets/Image/Jewellery/Gold/GoldEarRing${i+1}.png`;
    newProduct.querySelector(".product-image").alt = earring[i].name;
    const uniqueButtonId = `GoldEarRingId-${i}`;
    const viewButton = newProduct.querySelector("#viewId");
    if (viewButton) {
        viewButton.id = uniqueButtonId;
        viewButton.addEventListener("click", function () {
            console.log("clicked " , uniqueButtonId);
            window.location.href =`singleProduct.html?product=gold&name=${earring[i].name}&price=${earring[i].price}&img=GoldEarRing${i+1}&type=earRings`;
        });
    }
    element.appendChild(newProduct);
}
}
function goldNecklace()
{
    // const element = document.getElementById('product-card-id');
    // for(var i = 0; i < necklace.length; i++){
    //     const newProduct = existingProduct.cloneNode(true);
    //     newProduct.querySelector(".product-name").textContent = necklace[i].name;
    //     newProduct.querySelector(".product-price").textContent = necklace[i].price;
    //     newProduct.querySelector(".product-image").alt = necklace[i].name;
    //     const viewButton = newProduct.querySelector("#viewId");
    //     if (viewButton) {
        //         viewButton.id = uniqueButtonId;
        //         viewButton.addEventListener("click", function () {
            //             console.log("clicked " , uniqueButtonId);
            //             window.open(`product-details.html?product=${encodeURIComponent(necklace[i].name)}`, "_blank");
            //         });
            //     }
            //     element.appendChild(newProduct);
            // }
            let necklace = [
                {name : "Sculpted Leaf Necklace Set",price :  "₹1,31,692"},
                {name : "Refined Enamel Gold Necklace Set",price : "₹2,38,275"},
    {name : "Radiant Ripple Gold Necklace",price : "₹43,343"}
];
const element = document.getElementById('product-card-id');
for (let i = 0; i < necklace.length; i++) {
    const newProduct = existingProduct.cloneNode(true);
    newProduct.querySelector(".product-name").textContent = necklace[i].name;
    newProduct.querySelector(".product-price").textContent = necklace[i].price;
    newProduct.querySelector(".product-image").src = `Assets/Image/Jewellery/Gold/GoldNecklace${i+1}.png`;
    newProduct.querySelector(".product-image").alt = necklace[i].name;
        const uniqueButtonId = `GoldNecklaceId-${i}`;
        const viewButton = newProduct.querySelector("#viewId");
        if (viewButton) {
            viewButton.id = uniqueButtonId;
            viewButton.addEventListener("click", function () {
                console.log("Clicked",uniqueButtonId);
                window.location.href = `singleProduct.html?product=gold&name=${necklace[i].name}&price=${necklace[i].price}&img=GoldNecklace${i+1}&type=necklace`;
            });
        }
        element.appendChild(newProduct);
    }
}
function planinumEarRing()
{
    let EarRing = [
        {name : "Platinum Leaf Diamond Stud Earrings",price :  "₹139,692"},
        {name : "Dual-Tone Diamond Stud Earrings",price : "₹38,275"}
    ];
    const element = document.getElementById('product-card-id');
    // for(var i = 0; i < EarRing.length; i++){
        //     const newProduct = existingProduct.cloneNode(true);
        //     newProduct.querySelector(".product-name").textContent = EarRing[i].name;
    //     newProduct.querySelector(".product-price").textContent = EarRing[i].price;
    //     newProduct.querySelector(".product-image").alt = EarRing[i].name;
    //     const uniqueButtonId = `platinumEarRingId-${i}`;
    //     const viewButton = newProduct.querySelector("#viewId");
    //     if (viewButton) {
        //         viewButton.id = uniqueButtonId;
        //         viewButton.addEventListener("click", function () {
            //             console.log("Clicked",uniqueButtonId);
            //             window.open(`product-details.html?product=${encodeURIComponent(EarRing[i].name)}`, "_blank");
            //         });
            //     }
            //     element.appendChild(newProduct);
            // }
        // const existingProduct = document.querySelector('.product-card');
        for (let i = 0; i < EarRing.length; i++) {
            const newProduct = existingProduct.cloneNode(true);
            newProduct.querySelector(".product-name").textContent = EarRing[i].name;
            newProduct.querySelector(".product-price").textContent = EarRing[i].price;
            newProduct.querySelector(".product-image").src = `Assets/Image/Jewellery/Platinum/PlatinumEarRing${i+1}.png`;
            newProduct.querySelector(".product-image").alt = EarRing[i].name;
            const uniqueButtonId = `PlatinumEarRingId-${i}`;
            const viewButton = newProduct.querySelector("#viewId");
            if (viewButton) {
                viewButton.id = uniqueButtonId;
                viewButton.addEventListener("click", function () {
                    console.log("Clicked");
                window.open(`product-details.html?product=${encodeURIComponent(EarRing[i].name)}`, "_blank");
                });
            }
            element.appendChild(newProduct);
        }
}
function planinumNecklesh()
{
    let neckLesh = [
        {name : "Versatile Platinum Necklesh",price :  "₹139,692"},
        {name : "Sophisticated Platinum and Rose Gold Chain",price : "₹38,275"}
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
        if (viewButton) {
            viewButton.id = uniqueButtonId;
            viewButton.addEventListener("click", function () {
                console.log("Clicked");
            window.open(`product-details.html?product=${encodeURIComponent(neckLesh[i].name)}`, "_blank");
            });
        }
        element.appendChild(newProduct);
    }
    // for(var i = 0; i < neckLesh.length; i++){
    //     const newProduct = existingProduct.cloneNode(true);
    //     newProduct.querySelector(".product-name").textContent = neckLesh[i].name;
    //     newProduct.querySelector(".product-price").textContent = neckLesh[i].price;
    //     newProduct.querySelector(".product-image").alt = neckLesh[i].name;
    //     element.appendChild(newProduct);
    // }
}
function planinumRing()
{
    let ring = [
        {name : "Dainty Platinum and Diamond Ring",price :  "₹39,692"},
        {name : "Majestic Platinum Solitaire Finger Ring for Men",price : "₹38,275"},
        {name : "Ribbon Pattern Platinum and Diamond Ring",price : "₹48,275"}
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
        if (viewButton) {
            viewButton.id = uniqueButtonId;
            viewButton.addEventListener("click", function () {
                console.log("Clicked");
            window.open(`product-details.html?product=${encodeURIComponent(ring[i].name)}`, "_blank");
            });
        }
        element.appendChild(newProduct);
    }
    // const element = document.getElementById('product-card-id');
    // for(var i = 0; i < ring.length; i++){
    //     const newProduct = existingProduct.cloneNode(true);
    //     newProduct.querySelector(".product-name").textContent = ring[i].name;
    //     newProduct.querySelector(".product-price").textContent = ring[i].price;
    //     newProduct.querySelector(".product-image").alt = ring[i].name;
    //     element.appendChild(newProduct);
    // }
}
function planinumOther()
{
    let other = [
        {name : "Platinum Brashlet",price :  "₹139,692"},
        {name : "Sophisticated Platinum Kada(For Men)",price : "₹38,275"}
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
        if (viewButton) {
            viewButton.id = uniqueButtonId;
            viewButton.addEventListener("click", function () {
                console.log("Clicked");
            window.open(`product-details.html?product=${encodeURIComponent(other[i].name)}`, "_blank");
            });
        }
        element.appendChild(newProduct);
    }
    // const element = document.getElementById('product-card-id');
    // for(var i = 0; i < neckLesh.length; i++){
    //     const newProduct = existingProduct.cloneNode(true);
    //     newProduct.querySelector(".product-name").textContent = neckLesh[i].name;
    //     newProduct.querySelector(".product-price").textContent = neckLesh[i].price;
    //     newProduct.querySelector(".product-image").alt = neckLesh[i].name;
    //     element.appendChild(newProduct);
    // }
}
function diamondBangle()
{
    let bangle = [
        {name : "Wave Diamond Bangle",price :  "₹189,692"},
        {name : "Luxe Curves Diamond Bangle",price : "₹138,275"}
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
        if (viewButton) {
            viewButton.id = uniqueButtonId;
            viewButton.addEventListener("click", function () {
                console.log("Clicked");
            window.open(`product-details.html?product=${encodeURIComponent(bangle[i].name)}`, "_blank");
            });
        }
        element.appendChild(newProduct);
    }
    // const element = document.getElementById('product-card-id');
    // for(var i = 0; i < bangle.length; i++){
    //     const newProduct = existingProduct.cloneNode(true);
    //     newProduct.querySelector(".product-name").textContent = bangle[i].name;
    //     newProduct.querySelector(".product-price").textContent = bangle[i].price;
    //     newProduct.querySelector(".product-image").alt = bangle[i].name;
    //     element.appendChild(newProduct);
    // }
}
function diamondEarRing()
{
    let earRing = [
        {name : "Glamorous Floral Diamond Stud Earrings with Rock Crystal",price :  "₹39,692"},
        {name : "Regal Diamond Encrusted Square Gold Stud Earrings",price : "₹42,075"}
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
        if (viewButton) {
            viewButton.id = uniqueButtonId;
            viewButton.addEventListener("click", function () {
                console.log("Clicked");
            window.open(`product-details.html?product=${encodeURIComponent(earRing[i].name)}`, "_blank");
            });
        }
        element.appendChild(newProduct);
    }
    // const element = document.getElementById('product-card-id');
    // for(var i = 0; i < earRing.length; i++){
    //     const newProduct = existingProduct.cloneNode(true);
    //     newProduct.querySelector(".product-name").textContent = earRing[i].name;
    //     newProduct.querySelector(".product-price").textContent = earRing[i].price;
    //     newProduct.querySelector(".product-image").alt = earRing[i].name;
    //     element.appendChild(newProduct);
    // }
}
function diamondMangalsutra()
{
    let mangalsutra = [
        {name : "Infinity Floral Diamond Mangalsutra",price :  "₹66,692"},
        {name : "Everlasting Harmony Solitaire Mangalsutra",price : "₹177,075"},
        {name : "Dazzling Diamond Mangalsutra",price : "₹68,075"},
        {name : "Elegant Floral Diamond Mangalsutra in Yellow",price : "₹127,075"}
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
        if (viewButton) {
            viewButton.id = uniqueButtonId;
            viewButton.addEventListener("click", function () {
                console.log("Clicked");
            window.open(`product-details.html?product=${encodeURIComponent(mangalsutra[i].name)}`, "_blank");
            });
        }
        element.appendChild(newProduct);
    }
    // const element = document.getElementById('product-card-id');
    // for(var i = 0; i < mangalsutra.length; i++){
    //     const newProduct = existingProduct.cloneNode(true);
    //     newProduct.querySelector(".product-name").textContent = mangalsutra[i].name;
    //     newProduct.querySelector(".product-price").textContent = mangalsutra[i].price;
    //     newProduct.querySelector(".product-image").alt = mangalsutra[i].name;
    //     element.appendChild(newProduct);
    // }
}
function diamondRing()
{
    let ring = [
        {name : "Dazzling Diamond Finger Ring",price :  "₹46,692"},
        {name : "Celestial Gleam Diamond Finger Ring",price : "₹77,075"},
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
        if (viewButton) {
            viewButton.id = uniqueButtonId;
            viewButton.addEventListener("click", function () {
                console.log("Clicked");
            window.open(`product-details.html?product=${encodeURIComponent(ring[i].name)}`, "_blank");
            });
        }
        element.appendChild(newProduct);
    }
    // const element = document.getElementById('product-card-id');
    // for(var i = 0; i < ring.length; i++){
    //     const newProduct = existingProduct.cloneNode(true);
    //     newProduct.querySelector(".product-name").textContent = ring[i].name;
    //     newProduct.querySelector(".product-price").textContent = ring[i].price;
    //     newProduct.querySelector(".product-image").alt = ring[i].name;
    //     element.appendChild(newProduct);
    // }
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