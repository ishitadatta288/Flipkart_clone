
import { imageSlider } from "./imageslider.js";




let input_search = document.getElementById("search_input")
let form_search = document.getElementById("search_form")
let recent_searchEl = document.querySelector(".recent_search")


let recentArray = ["mobile", "speakers"]
form_search.addEventListener("submit", (e) => {
    e.preventDefault()
    alert("hii")
    recentArray.unshift(input_search.value)
    console.log(recentArray)
    renderRecent()
})

function renderRecent() {
    let recent_search_html = ''
    recentArray.forEach(el => {
        recent_search_html += `
            <div class="recent_list">
                <i class="fa-solid fa-clock-rotate-left"></i>
                <p>${el}</p>
            </div>
        `
    })
    recent_searchEl.innerHTML = recent_search_html
}
renderRecent()


document.getElementById("login-btn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default anchor action
    var dropdown = document.getElementById("dropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
});

// Optional: Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.icon-btn')) {
        var dropdown = document.getElementById("dropdown");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }
};


const ElectronicProduct = [
    {
        imgurl: "./p1.webp",
        name: "Best Selling Speakers",
        price: 499,
        brand: "Amazon, Google, Sonos, Apple",
        link: "https://www.flipkart.com/audio-video/speakers/pr?sid=0pm%2C0o7&sort=popularity&param=8755&p%5B%5D=facets.fulfilled_by%255B%255D%3DF-Assured&p%5B%5D=facets.price_range.from%3D10000&p%5B%5D=facets.price_range.to%3DMax&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&param=7&hpid=Q4biExngFVa9TrFCwKJZcqp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJTaG9wIE5vdyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkFDQ0g0NVQ3Vkg5TVlDR00iLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJTcGVha2VycyAmIFNvdW5kYmFycyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D"
    },
    {
        imgurl: "./p2.webp",
        name: "Best Wireless Earbuds",
        price: 599,
        brand: "boAt",
        link: "https://www.flipkart.com/audio-video/headset/pr?sid=0pm%2Cfcn&p%5B%5D=facets.connectivity%255B%255D%3DBluetooth&sort=popularity&p%5B%5D=facets.rating%255B%255D%3D3%25E2%2598%2585%2B%2526%2Babove&p%5B%5D=facets.rating%255B%255D%3D4%25E2%2598%2585%2B%2526%2Babove&p%5B%5D=facets.price_range.from%3D599&p%5B%5D=facets.price_range.to%3DMax&p%5B%5D=facets.headphone_type%255B%255D%3DTrue%2BWireless&param=86&hpid=WqCPtE2MbDEYEbYbttXC1qp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJHcmFiIE5vdyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IkFDQ0dUUVk5S0ZCQVhYQlMiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJCZXN0IFRydWV3aXJlbGVzcyBIZWFkcGhvbmVzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D&fm=neo%2Fmerchandising&iid=M_241e6870-6a26-4814-b7b8-bc05ee8b96e7_1.KVOY5PS5484O&ppt=sp&ppn=sp&ssid=yy7k4wvuxc0000001729838460249&otracker=dynamic_omu_infinite_Best%2Bof%2BElectronics_1_1.dealCard.OMU_INFINITE_KVOY5PS5484O&cid=KVOY5PS5484O"
    },
    {
        imgurl: "./p3.webp",
        name: "Top Mirrorless Cameras",
        price: 4999,
        brand: "Philips, Canon, Sony",
        link: "https://www.flipkart.com/all/~cs-4784dfaa17b55af75432bd897e0886b8/pr?sid=jek,p31&marketplace=FLIPKART&restrictLocale=true"
    },
    {
        imgurl: "./p4.webp",
        name: "Fastrack SmartWatches",
        price: 799,
        brand: "boAt",
        link: "https://www.flipkart.com/ajy/~cs-fu0n3icybv/pr?sid=ajy&collection-tab-name=Samsung+Galaxy+Watch+6+LTE+&pageCriteria=default&sort=price_asc&param=8974&hpid=qdBRrkiUWIgyL2vLUy2IsKp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTE3LDQ5OSoiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJTTVdHUlY5WFNXQVpDVEdIIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiU2Ftc3VuZyBXYXRjaCA2IExURSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D"
    },
    {
        imgurl: "./p5.webp",
        name: "Best Printers",
        price: 2399,
        brand: "boAt",
        link: "https://www.flipkart.com/6bo/tia/ffn/t64/~cs-mknsg5yqbz/pr?sid=6bo%2Ctia%2Cffn%2Ct64&collection-tab-name=Bestselling+Printers&pageCriteria=default&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTIsOTk5Il0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiQmVzdCBEZWFscyBvbiBQcmludGVycyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IlBSTkc4N1FKWFk5SFBZVUoiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19"
    },
    {
        imgurl: "./p6.webp",
        name: "Top Monitors",
        price: 14999,
        brand: "Asus, Sony, Samsung",
        link: "https://www.flipkart.com/6bo/g0i/9no/~cs-1whqyo8wl1/pr?sid=6bo%2Cg0i%2C9no&collection-tab-name=Bestselling+Monitors&pageCriteria=default&param=47363535&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTUsNTM5KiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlRvcCBEZWFscyBvbiBNb25pdG9ycyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6Ik1PTkdXVkFVRUtUWFNOV0ciLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19"
    },
    {
        imgurl: "./p7.webp",
        name: "Top Projectors",
        price: 6990,
        brand: "Asus, Sony, Samsung",
        link: "https://www.flipkart.com/all/~cs-e5fc5b3ea471a86d59795fa27970f9bd/pr?sid=6bo,tia,1hx&marketplace=FLIPKART&restrictLocale=true"
    }
];

// Loop through the array and log each product
let renderProduct = " ";
let CardProductContainer = document.getElementById("card-product-container")


for (let i = 0; i < ElectronicProduct.length; i++) {
    console.log(ElectronicProduct[i].name);

    // Assuming you want to create a product rendering (like for HTML display)
    renderProduct += `
        <div class="card-product">
            <a href="${ElectronicProduct[i].link}">
                <img src="${ElectronicProduct[i].imgurl}">
                <h4 class="card-product-name">${ElectronicProduct[i].name}</h4>
                <p class="card-product-price">From ₹${ElectronicProduct[i].price}</p>
            </a>

                    
        </div>
    `;

    /*console.log(renderProduct);*/
}
CardProductContainer.innerHTML = renderProduct;

let cardBtnRightE1 = document.getElementById("card-btn-right")
let cardBtnLeftE1 = document.getElementById("card-btn-left")
cardBtnLeftE1.style.display = "none"

cardBtnRightE1.addEventListener("click", function () {
    /*console.log("click right")*/
    CardProductContainer.style.transform = "translateX(-39%)"
    cardBtnRightE1.style.display = "none"
    cardBtnLeftE1.style.display = "block"
})
cardBtnLeftE1.addEventListener("click", function () {
    /*console.log("click right")*/
    CardProductContainer.style.transform = "translateX(0%)"
    cardBtnLeftE1.style.display = "none"
    cardBtnRightE1.style.display = "block"
})

let imageSliderListEl = document.querySelector(".imageSliderList");
let imageSliderListHTML = " ";

for (let i = 0; i < imageSlider.length; i++) {
    imageSliderListHTML += `
    <div class="imageSliderItem">
        <a href="${imageSlider[i].link}"> 
            <img src="${imageSlider[i].img}">
        </a>
    </div>
    `;
}
imageSliderListEl.innerHTML = imageSliderListHTML;


let preve_imageBtnEl = document.getElementById("preve_imageBtn")
let next_imageBtn = document.getElementById("next_imageBtn")
let start = 0;
let end = -400;

preve_imageBtnEl.addEventListener("click", handlePreveImage)
next_imageBtn.addEventListener("click", handleNextImage)

function handlePreveImage() {
    let imageallList = document.querySelectorAll(".imageSliderItem") // Corrected the selector
    console.log(imageallList)
    if (start < 0)
        start += 100
    imageallList.forEach(el => {
        el.style.transform = `translateX(${start}%)`
    })
}

function handleNextImage() {
    let imageallList = document.querySelectorAll(".imageSliderItem") // Corrected the selector
    console.log(imageallList)
    if (start > end)
        start -= 100
    imageallList.forEach(el => {
        el.style.transform = `translateX(${start}%)`
    })
}

function renderimageSlider() {
    if (start > end) {
        handleNextImage()
    } else {
        start = 0 // Reset to the first image after reaching the end
    }
}

setInterval(renderimageSlider, 5000) // Keep this interval for automatic sliding

