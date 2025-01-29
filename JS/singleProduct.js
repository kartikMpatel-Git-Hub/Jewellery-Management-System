let paraMeter  = new URLSearchParams(window.location.search);
let product = paraMeter.get('product');
let productname = paraMeter.get('name');
let productprice = paraMeter.get('price');
let productimg = paraMeter.get('img');
let producttype = paraMeter.get('type');
const obj = {
    name : productname,
    price : productprice,
    img : productimg,
    type : product
}
function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
}
function addcart(){
    addToCart(obj);
}
document.getElementById('OtherProductbtn').innerHTML = `View More ${producttype.toLocaleUpperCase()}`;
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
let images = []
let currentIndex = 0;
function changeImage(index) {
    const imageElement = document.querySelector('.slider-image');
    imageElement.style.opacity = 0;
    setTimeout(() => {
        imageElement.src = images[index];
        imageElement.style.opacity = 1;
    }, 500);
}
document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    changeImage(currentIndex);
});
document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    changeImage(currentIndex);
});
document.querySelectorAll('.accordion button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        button.classList.toggle('active');
        if (button.classList.contains('active')) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    });
});
function gold(){
    document.getElementById('title').innerHTML = `${product.toLocaleUpperCase()}EN ${producttype.toLocaleUpperCase()}`; 
    document.getElementById('title').innerHTML = `${productname} [${product.toLocaleUpperCase()}EN ${producttype.toLocaleUpperCase()}]`; 
    document.getElementById('productImg').src = `Assets/Image/Jewellery/Gold/${productimg}.png`; 
    document.getElementById('productPrice').innerHTML = productprice; 
    document.getElementById('productType').innerHTML = `Product Type: : ${producttype.toUpperCase()}`;
    images = [
        `Assets/Image/Jewellery/Gold/${productimg}.png`,
        `Assets/Image/Jewellery/Gold/${productimg}1.png`
    ];
    switch(producttype){
        case 'ring':

            document.getElementById('productWeight').innerHTML = `Product Weight: 3gram`;
            document.getElementById('productDesc').innerHTML = `A gold ring is a timeless piece of jewelry crafted from gold, a precious and durable metal. It is often designed as a circular band, symbolizing eternity and unity. Gold rings come in various shades, including yellow gold, white gold, and rose gold, achieved by alloying gold with other metals like silver, nickel, or copper. These rings can range from simple, unadorned bands to intricate designs featuring gemstones, engravings, or artistic patterns. Their versatility makes them suitable for occasions like engagements, weddings, or everyday wear, reflecting elegance and personal style.`;
            document.getElementById('grossWeight').innerHTML = `Gross Weight: 3.473g`;
            document.getElementById('metalType').innerHTML = ` Metal: ${producttype.toLocaleUpperCase()}`;
            document.getElementById('productCode').innerHTML = `Product Code: ${producttype.toUpperCase()}${productimg}`;
            break;
        case 'bangle':
            document.getElementById('productWeight').innerHTML = `Product Weight: 5gram`;
            document.getElementById('productDesc').innerHTML = `Gold bangles are elegant, circular bracelets made from gold, often worn as a symbol of tradition, beauty, and status. They are popular in many cultures and are available in various styles, from simple, sleek designs to intricately crafted patterns featuring filigree work, embossing, or engraving. Gold bangles may also be adorned with gemstones, diamonds, or enamel work to enhance their appeal. They are typically worn in pairs or stacks and can range in size and thickness, catering to both minimalistic and extravagant preferences. Gold bangles are a timeless accessory, perfect for special occasions like weddings, festivals, or as a daily wear statement of elegance and grace.`;
            document.getElementById('grossWeight').innerHTML = `Gross Weight: 5.473g`;
            document.getElementById('metalType').innerHTML = ` Metal: ${producttype.toLocaleUpperCase()}`;
            document.getElementById('productCode').innerHTML = `Product Code: ${producttype.toUpperCase()}${productimg}`;
            break;
        case 'earRings':
            document.getElementById('productWeight').innerHTML = `Product Weight: 3gram`;
            document.getElementById('productDesc').innerHTML = `Gold earrings are exquisite jewelry pieces crafted from gold, designed to adorn the ears. They come in a wide array of styles, including studs, hoops, danglers, chandeliers, and drop earrings, catering to diverse tastes and occasions. Gold earrings can be made from yellow gold, white gold, or rose gold, often embellished with diamonds, pearls, gemstones, or intricate patterns for added elegance. Lightweight designs are perfect for daily wear, while elaborate, ornate styles are ideal for weddings, parties, or cultural celebrations. Gold earrings are not just an accessory but also a symbol of grace, tradition, and timeless beauty.`;
            document.getElementById('grossWeight').innerHTML = `Gross Weight: 5.473g`;
            document.getElementById('metalType').innerHTML = ` Metal: ${producttype.toLocaleUpperCase()}`;
            document.getElementById('productCode').innerHTML = `Product Code: ${producttype.toUpperCase()}${productimg}`;
            break;
        case 'necklace':
            document.getElementById('productWeight').innerHTML = `Product Weight: 10gram`;
            document.getElementById('productDesc').innerHTML = `A gold necklace is a luxurious and versatile piece of jewelry that adorns the neck, crafted from gold in various styles and designs. It can range from delicate chains to elaborate statement pieces, often embellished with gemstones, diamonds, pearls, or intricate patterns like filigree or enamel work. Gold necklaces come in different shades, including yellow gold, white gold, and rose gold, catering to various personal preferences and occasions. They may feature pendants, charms, or intricate motifs, making them ideal for everyday wear or special occasions like weddings, anniversaries, or cultural ceremonies. A gold necklace symbolizes elegance, wealth, and timeless sophistication.`;
            document.getElementById('grossWeight').innerHTML = `Gross Weight: 10.473g`;
            document.getElementById('metalType').innerHTML = ` Metal: ${producttype.toLocaleUpperCase()}`;
            document.getElementById('productCode').innerHTML = `Product Code: ${producttype}${productimg}`;
            images.push(`Assets/Image/Jewellery/Gold/${productimg}2.png`)
            producttype = 'goldOther';
            break;
    }
    document.getElementById('productColor').innerHTML = `Product Type: : Golden`;
    document.getElementById('metalColor').innerHTML = `Product Type: : white-Golden`;

}
function diamond(){
    // document.getElementById('title').innerHTML = `${product.toLocaleUpperCase()} ${type.toLocaleUpperCase()}`; 
    document.getElementById('title').innerHTML = `${productname} [${product.toLocaleUpperCase()}]`; 
    document.getElementById('productImg').src = `Assets/Image/Jewellery/Diamond/${productimg}.png`; 
    document.getElementById('productPrice').innerHTML = productprice; 
    document.getElementById('productType').innerHTML = `Product Type: : ${producttype.toUpperCase()}`;
    images = [
        `Assets/Image/Jewellery/Diamond/${productimg}.png`,
        `Assets/Image/Jewellery/Diamond/${productimg}1.png`
    ];
    switch(producttype){
        case 'ring':
            document.getElementById('productWeight').innerHTML = `Product Weight: 3gram`;
            document.getElementById('productDesc').innerHTML = `A diamond ring is a timeless piece of jewelry crafted from diamond, a precious and durable metal. It is often designed as a circular band, symbolizing eternity and unity. Diamond rings come in various shades, including yellow diamond, white diamond, and rose diamond, achieved by alloying diamond with other metals like silver, nickel, or copper. These rings can range from simple, unadorned bands to intricate designs featuring gemstones, engravings, or artistic patterns. Their versatility makes them suitable for occasions like engagements, weddings, or everyday wear, reflecting elegance and personal style.`;
            document.getElementById('grossWeight').innerHTML = `Gross Weight: 3.473g`;
            document.getElementById('metalType').innerHTML = ` Metal: ${producttype.toLocaleUpperCase()}`;
            document.getElementById('productCode').innerHTML = `Product Code: ${producttype.toUpperCase()}${productimg}`;
            break;
            case 'bangle':
                document.getElementById('productWeight').innerHTML = `Product Weight: 5gram`;
                document.getElementById('productDesc').innerHTML = `Diamond bangles are elegant, circular bracelets made from diamond, often worn as a symbol of tradition, beauty, and status. They are popular in many cultures and are available in various styles, from simple, sleek designs to intricately crafted patterns featuring filigree work, embossing, or engraving. Diamond bangles may also be adorned with gemstones, diamonds, or enamel work to enhance their appeal. They are typically worn in pairs or stacks and can range in size and thickness, catering to both minimalistic and extravagant preferences. Diamond bangles are a timeless accessory, perfect for special occasions like weddings, festivals, or as a daily wear statement of elegance and grace.`;
                document.getElementById('grossWeight').innerHTML = `Gross Weight: 5.473g`;
                document.getElementById('metalType').innerHTML = ` Metal: ${producttype.toLocaleUpperCase()}`;
                document.getElementById('productCode').innerHTML = `Product Code: ${producttype.toUpperCase()}${productimg}`;
                break;
                case 'earRings':
                    document.getElementById('productWeight').innerHTML = `Product Weight: 3gram`;
                    document.getElementById('productDesc').innerHTML = `Diamond earrings are exquisite jewelry pieces crafted from diamond, designed to adorn the ears. They come in a wide array of styles, including studs, hoops, danglers, chandeliers, and drop earrings, catering to diverse tastes and occasions. Diamond earrings can be made from yellow diamond, white diamond, or rose diamond, often embellished with diamonds, pearls, gemstones, or intricate patterns for added elegance. Lightweight designs are perfect for daily wear, while elaborate, ornate styles are ideal for weddings, parties, or cultural celebrations. Diamond earrings are not just an accessory but also a symbol of grace, tradition, and timeless beauty.`;
                    document.getElementById('grossWeight').innerHTML = `Gross Weight: 5.473g`;
                    document.getElementById('metalType').innerHTML = ` Metal: ${producttype.toLocaleUpperCase()}`;
                    document.getElementById('productCode').innerHTML = `Product Code: ${producttype.toUpperCase()}${productimg}`;
                    break;
                    default:
                        document.getElementById('productWeight').innerHTML = `Product Weight: 10gram`;
            document.getElementById('productDesc').innerHTML = `A diamond necklace is a luxurious and versatile piece of jewelry that adorns the neck, crafted from diamond in various styles and designs. It can range from delicate chains to elaborate statement pieces, often embellished with gemstones, diamonds, pearls, or intricate patterns like filigree or enamel work. Diamond necklaces come in different shades, including yellow diamond, white diamond, and rose diamond, catering to various personal preferences and occasions. They may feature pendants, charms, or intricate motifs, making them ideal for everyday wear or special occasions like weddings, anniversaries, or cultural ceremonies. A diamond necklace symbolizes elegance, wealth, and timeless sophistication.`;
            document.getElementById('grossWeight').innerHTML = `Gross Weight: 10.473g`;
            document.getElementById('metalType').innerHTML = ` Metal: ${producttype.toLocaleUpperCase()}`;
            document.getElementById('productCode').innerHTML = `Product Code: ${producttype}${productimg}`;
            images.push(`Assets/Image/Jewellery/Diamond/${productimg}2.png`)
            producttype = 'diamondOther';
            break;
        }
        document.getElementById('productColor').innerHTML = `Product Type: : Golden`;
        document.getElementById('metalColor').innerHTML = `Product Type: : white-Golden`;
        
    }
    
    function platinum(){
        // document.getElementById('title').innerHTML = `${product.toLocaleUpperCase()} ${type.toLocaleUpperCase()}`; 
    document.getElementById('title').innerHTML = `${productname} [${product.toLocaleUpperCase()}]`; 
    document.getElementById('productImg').src = `Assets/Image/Jewellery/Platinum/${productimg}.png`; 
    document.getElementById('productPrice').innerHTML = productprice; 
    document.getElementById('productType').innerHTML = `Product Type: : ${producttype.toUpperCase()}`;
    images = [
        `Assets/Image/Jewellery/Platinum/${productimg}.png`,
        `Assets/Image/Jewellery/Platinum/${productimg}1.png`
    ];
    switch(producttype){
        case 'ring':
            document.getElementById('productWeight').innerHTML = `Product Weight: 3gram`;
            document.getElementById('productDesc').innerHTML = `A Platinum ring is a timeless piece of jewelry crafted from platinum, a precious and durable metal. It is often designed as a circular band, symbolizing eternity and unity. Platinum rings come in various shades, including yellow platinum, white platinum, and rose platinum, achieved by alloying platinum with other metals like silver, nickel, or copper. These rings can range from simple, unadorned bands to intricate designs featuring gemstones, engravings, or artistic patterns. Their versatility makes them suitable for occasions like engagements, weddings, or everyday wear, reflecting elegance and personal style.`;
            document.getElementById('grossWeight').innerHTML = `Gross Weight: 3.473g`;
            document.getElementById('metalType').innerHTML = ` Metal: ${producttype.toLocaleUpperCase()}`;
            document.getElementById('productCode').innerHTML = `Product Code: ${producttype.toUpperCase()}${productimg}`;
            break;
        case 'bangle':
            document.getElementById('productWeight').innerHTML = `Product Weight: 5gram`;
            document.getElementById('productDesc').innerHTML = `Platinum bangles are elegant, circular bracelets made from platinum, often worn as a symbol of tradition, beauty, and status. They are popular in many cultures and are available in various styles, from simple, sleek designs to intricately crafted patterns featuring filigree work, embossing, or engraving. Platinum bangles may also be adorned with gemstones, diamonds, or enamel work to enhance their appeal. They are typically worn in pairs or stacks and can range in size and thickness, catering to both minimalistic and extravagant preferences. Platinum bangles are a timeless accessory, perfect for special occasions like weddings, festivals, or as a daily wear statement of elegance and grace.`;
            document.getElementById('grossWeight').innerHTML = `Gross Weight: 5.473g`;
            document.getElementById('metalType').innerHTML = ` Metal: ${producttype.toLocaleUpperCase()}`;
            document.getElementById('productCode').innerHTML = `Product Code: ${producttype.toUpperCase()}${productimg}`;
            break;
        case 'earRings':
            document.getElementById('productWeight').innerHTML = `Product Weight: 3gram`;
            document.getElementById('productDesc').innerHTML = `Platinum earrings are exquisite jewelry pieces crafted from platinum, designed to adorn the ears. They come in a wide array of styles, including studs, hoops, danglers, chandeliers, and drop earrings, catering to diverse tastes and occasions. Platinum earrings can be made from yellow platinum, white platinum, or rose platinum, often embellished with diamonds, pearls, gemstones, or intricate patterns for added elegance. Lightweight designs are perfect for daily wear, while elaborate, ornate styles are ideal for weddings, parties, or cultural celebrations. Platinum earrings are not just an accessory but also a symbol of grace, tradition, and timeless beauty.`;
            document.getElementById('grossWeight').innerHTML = `Gross Weight: 5.473g`;
            document.getElementById('metalType').innerHTML = ` Metal: ${producttype.toLocaleUpperCase()}`;
            document.getElementById('productCode').innerHTML = `Product Code: ${producttype.toUpperCase()}${productimg}`;
            break;
        default :
            document.getElementById('productWeight').innerHTML = `Product Weight: 10gram`;
            document.getElementById('productDesc').innerHTML = `A platinum necklace is a luxurious and versatile piece of jewelry that adorns the neck, crafted from platinum in various styles and designs. It can range from delicate chains to elaborate statement pieces, often embellished with gemstones, diamonds, pearls, or intricate patterns like filigree or enamel work. Platinum necklaces come in different shades, including yellow platinum, white platinum, and rose platinum, catering to various personal preferences and occasions. They may feature pendants, charms, or intricate motifs, making them ideal for everyday wear or special occasions like weddings, anniversaries, or cultural ceremonies. A platinum necklace symbolizes elegance, wealth, and timeless sophistication.`;
            document.getElementById('grossWeight').innerHTML = `Gross Weight: 10.473g`;
            document.getElementById('metalType').innerHTML = ` Metal: ${producttype.toLocaleUpperCase()}`;
            document.getElementById('productCode').innerHTML = `Product Code: ${producttype}${productimg}`;
            producttype = 'platinumOther';

            break;
    }
    document.getElementById('productColor').innerHTML = `Product Type: : Platinum`;
    document.getElementById('metalColor').innerHTML = `Product Type: : white-Platinum`;

}
function otherProduct(){
    window.location.href = `Product.html?page=${producttype}`;
}
function checkProduct(){
    switch(product){
        case 'gold':
                gold();
                break; 
        case 'diamond':
                diamond();
                break;  
        case 'platinum':
                platinum();
                break;  
        default :
            // alert('No Found');
    }
}
window.onload = checkProduct()