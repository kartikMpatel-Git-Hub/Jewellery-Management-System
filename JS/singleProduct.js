let paraMeter  = new URLSearchParams(window.location.search);
let fun = paraMeter.get('product');
let name = paraMeter.get('name');
let price = paraMeter.get('price');
let img = paraMeter.get('img');
let type = paraMeter.get('type');

function toggleDetails(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('.fas.fa-chevron-down');
    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    } else {
        content.style.display = "none";
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    }
}
function gold(){
    document.getElementById('title').innerHTML = `${fun.toLocaleUpperCase()}EN ${type.toLocaleUpperCase()}`; 
    document.getElementById('title').innerHTML = `${name} [${fun.toLocaleUpperCase()}EN ${type.toLocaleUpperCase()}]`; 
    document.getElementById('productImg').src = `Assets/Image/Jewellery/Gold/${img}.png`; 
    document.getElementById('productPrice').innerHTML = price; 
    document.getElementById('productType').innerHTML = `Product Type: : ${type.toUpperCase()}`;
    switch(type){
        case 'ring':
            document.getElementById('productWeight').innerHTML = `Product Weight: 3gram`;
            document.getElementById('productDesc').innerHTML = `A gold ring is a timeless piece of jewelry crafted from gold, a precious and durable metal. It is often designed as a circular band, symbolizing eternity and unity. Gold rings come in various shades, including yellow gold, white gold, and rose gold, achieved by alloying gold with other metals like silver, nickel, or copper. These rings can range from simple, unadorned bands to intricate designs featuring gemstones, engravings, or artistic patterns. Their versatility makes them suitable for occasions like engagements, weddings, or everyday wear, reflecting elegance and personal style.`;
            document.getElementById('grossWeight').innerHTML = `Gross Weight: 3.473g`;
            document.getElementById('metalType').innerHTML = ` Metal: ${type.toLocaleUpperCase()}`;
            document.getElementById('productCode').innerHTML = `Product Code: ${type.toUpperCase()}${img}`;
            break;
        case 'bangle':
            document.getElementById('productWeight').innerHTML = `Product Weight: 5gram`;
            document.getElementById('productDesc').innerHTML = `Gold bangles are elegant, circular bracelets made from gold, often worn as a symbol of tradition, beauty, and status. They are popular in many cultures and are available in various styles, from simple, sleek designs to intricately crafted patterns featuring filigree work, embossing, or engraving. Gold bangles may also be adorned with gemstones, diamonds, or enamel work to enhance their appeal. They are typically worn in pairs or stacks and can range in size and thickness, catering to both minimalistic and extravagant preferences. Gold bangles are a timeless accessory, perfect for special occasions like weddings, festivals, or as a daily wear statement of elegance and grace.`;
            document.getElementById('grossWeight').innerHTML = `Gross Weight: 5.473g`;
            document.getElementById('metalType').innerHTML = ` Metal: ${type.toLocaleUpperCase()}`;
            document.getElementById('productCode').innerHTML = `Product Code: ${type.toUpperCase()}${img}`;
            break;
        case 'earRings':
            document.getElementById('productWeight').innerHTML = `Product Weight: 3gram`;
            document.getElementById('productDesc').innerHTML = `Gold earrings are exquisite jewelry pieces crafted from gold, designed to adorn the ears. They come in a wide array of styles, including studs, hoops, danglers, chandeliers, and drop earrings, catering to diverse tastes and occasions. Gold earrings can be made from yellow gold, white gold, or rose gold, often embellished with diamonds, pearls, gemstones, or intricate patterns for added elegance. Lightweight designs are perfect for daily wear, while elaborate, ornate styles are ideal for weddings, parties, or cultural celebrations. Gold earrings are not just an accessory but also a symbol of grace, tradition, and timeless beauty.`;
            document.getElementById('grossWeight').innerHTML = `Gross Weight: 5.473g`;
            document.getElementById('metalType').innerHTML = ` Metal: ${type.toLocaleUpperCase()}`;
            document.getElementById('productCode').innerHTML = `Product Code: ${type.toUpperCase()}${img}`;
            break;
        case 'necklace':
            document.getElementById('productWeight').innerHTML = `Product Weight: 10gram`;
            document.getElementById('productDesc').innerHTML = `A gold necklace is a luxurious and versatile piece of jewelry that adorns the neck, crafted from gold in various styles and designs. It can range from delicate chains to elaborate statement pieces, often embellished with gemstones, diamonds, pearls, or intricate patterns like filigree or enamel work. Gold necklaces come in different shades, including yellow gold, white gold, and rose gold, catering to various personal preferences and occasions. They may feature pendants, charms, or intricate motifs, making them ideal for everyday wear or special occasions like weddings, anniversaries, or cultural ceremonies. A gold necklace symbolizes elegance, wealth, and timeless sophistication.`;
            document.getElementById('grossWeight').innerHTML = `Gross Weight: 10.473g`;
            document.getElementById('metalType').innerHTML = ` Metal: ${type.toLocaleUpperCase()}`;
            document.getElementById('productCode').innerHTML = `Product Code: ${type}${img}`;
            type = 'goldOther';
            break;
    }
    document.getElementById('productColor').innerHTML = `Product Type: : Golden`;
    document.getElementById('metalColor').innerHTML = `Product Type: : white-Golden`;

}
function otherProduct(){
    window.location.href = `Product.html?page=${type}`;
}
function checkProduct(){
    switch(fun){
        case 'gold':
                gold();
                break; 
        case 'diamond':
                diamind();
                break;  
        default :
            // alert('No Found');
    }
}

window.onload = checkProduct()