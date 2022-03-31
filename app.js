const image_first = document.querySelector(".img-first")
var img_first_sub = ["https://file.hstatic.net/200000261717/article/suit-baonhan-2_08b3e8b3b9874b9696459989ee30f5a0.jpg", 'https://images.unsplash.com/photo-1472417583565-62e7bdeda490?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTYzfHxjbG90aGVzJTIwZ2VudGxlJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60']
const text_main_first = document.querySelector(".text-main-first")
const image_first1 = document.querySelector(".img-first1")
const icon1 = document.querySelector(".icon1")
const icon2 = document.querySelector(".icon2")
var num = 0
// icon1.addEventListener("click", () => {
//     image_first.classList.toggle("animation_img")
//     text_main_first.classList.toggle("animation_title")
//     if (num % 2 == 0) {
//         image_first.src = img_first_sub[0]
//         text_main_first.innerHTML = " MONDA MEDIA 2018"
//         num++
//     } else {
//         image_first.src = img_first_sub[1]
//         text_main_first.innerHTML = " MONDA SPECIAL 2020"
//         num++
//     }
// })
// icon2.addEventListener("click", () => {
//     text_main_first.classList.toggle("animation_title")
//     image_first.classList.toggle("animation_img")
//     if (num % 2 != 0) {
//         image_first1.src = img_first_sub[1]
//         text_main_first.innerHTML = " MONDA SPECIAL 2020"
//         num++
//     } else {
//         image_first1.src = img_first_sub[0]
//         text_main_first.innerHTML = " MONDA MEDIA 2018"
//         num++
//     }
// })
setInterval(() => {
    text_main_first.classList.toggle("animation_title")
    image_first.classList.toggle("animation_img")
    if (num % 2 == 0) {
        image_first1.src = img_first_sub[0]
        text_main_first.innerHTML = " MONDA MEDIA 2018"
        num++
    } else {
        image_first1.src = img_first_sub[1]
        text_main_first.innerHTML = " MONDA SPECIAL 2020"
        num++
    }
}, 5000)

//product
const cart_title = document.querySelectorAll(".card-title")
const next_page = document.querySelectorAll("#next-page")
const product_name = document.querySelector("#product-name")
const product_price = document.querySelectorAll(".price")
const clothes_check = document.querySelectorAll(".clothes-check")
for (let i = 0; i < next_page.length; i++) {
    next_page[i].addEventListener("click", () => {
        sessionStorage.setItem("product-name", cart_title[i].id)
        sessionStorage.setItem("product-price", product_price[i].id)
        sessionStorage.setItem("product-img", clothes_check[i].src)
    })
}

// gender product
const man_clothes = document.querySelector("#man-clothes")
const girl_clothes = document.querySelector("#girl-clothes")
const card_clothes = document.querySelector(".carding-clothes")
const female_box = document.querySelector(".product-box2")
const male_box = document.querySelector(".product-box")
const carding = document.querySelector(".product-box3")
const carding_box = document.querySelector("#carding-clothes")

man_clothes.addEventListener("click", () => {
    male_box.classList.add("animation_img")
    girl_clothes.style.color = 'black'
    carding_box.style.color = 'black'
    man_clothes.style.color = 'red'
    male_box.style.display = "block"
    female_box.style.display = "none"
    carding.style.display = "none"
})
girl_clothes.addEventListener("click", () => {
    man_clothes.style.color = 'black'
    carding_box.style.color = 'black'
    girl_clothes.style.color = 'red'
    male_box.style.display = 'none'
    female_box.classList.add("animation_img")
    carding.style.display = "none"
    female_box.style.display = "flex"
})
carding_box.addEventListener("click", () => {
    man_clothes.style.color = 'black'
    girl_clothes.style.color = 'black'
    carding_box.style.color = 'red'
    male_box.style.display = 'none'
    carding.classList.add("animation_img")
    carding.style.display = "flex"
    female_box.style.display = "none"
})
$(window).scroll(() => {
    let height = $(window).scrollTop()
    if (height >= 20) {
        $(".products").fadeIn(1000)
    } else {
        $(".products").fadeOut()

    }
})




// $('.fuck-u').owlCarousel({
//     stagePadding: 50,
//     loop: true,
//     margin: 10,
//     nav: true,
//     navText: ["hello", "hi"],
//     responsive: {
//         0: {
//             items: 1
//         },
//         600: {
//             items: 3
//         },
//         1000: {
//             items: 5
//         }
//     }
// })

// alert(dataImg)
//add cart
const save = document.querySelectorAll(".addCart")
console.log(save)

for (let i = 0; i < save.length; i++) {
    save[i].addEventListener("click", () => {
        sessionStorage.setItem("product-name1", cart_title[i].id)
        sessionStorage.setItem("product-price1", product_price[i].id)
        sessionStorage.setItem("product-img1", clothes_check[i].src)
        let dataName = sessionStorage.getItem("product-name1")
        let dataPrice = sessionStorage.getItem("product-price1")
        let dataImg = sessionStorage.getItem("product-img1")
        var arrName
        var draftName = localStorage.getItem("cartProduct1")
        if (draftName) {
            arrName = JSON.parse(draftName)
        } else {
            arrName = []
        }
        arrName.push(dataName)
        var arrPrice
        var draftPrice = localStorage.getItem("cartPrice1")
        if (draftPrice) {
            arrPrice = JSON.parse(draftPrice)
        } else {
            arrPrice = []
        }
        arrPrice.push(dataPrice)
        var arrImg
        var draftImg = localStorage.getItem("cartImg1")
        if (draftImg) {
            arrImg = JSON.parse(draftImg)
        } else {
            arrImg = []
        }
        arrImg.push(dataImg)
        localStorage.setItem("cartProduct1", JSON.stringify(arrName))
        localStorage.setItem("cartPrice1", JSON.stringify(arrPrice))
        localStorage.setItem("cartImg1", JSON.stringify(arrImg))

    })
}



//price