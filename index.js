let Homechoose = document.getElementById("Home_choose")
let choose = document.querySelectorAll("#choose li")
function ModeOne() {
    Homechoose.innerHTML = `
        <div class="home relative flex flex-row-reverse items-center justify-center gap-[2rem] px-[5rem] m-auto py-[5rem]">
            <div class="card flex flex-row-reverse items-center justify-center w-full gap-[2rem] px-[8rem]">
              <div class="text flex flex-col items-start gap-3 w-[55%]">
                <h1 class="title text-[3rem] font-extrabold w-[100%] text-left">Bookmark in one click</h1>
                <p class="description text-base w-[70%] text-left">Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                <div class="buttons flex flex-row items-center gap-4 pt-4">
                  <button class="get-started">More Info</button>
                </div>
              </div>
              <div class="image w-[45%]">
                <img src="images/illustration-features-tab-1.svg" class="w-[100%]" alt="">
              </div>
            </div>
            <div class="bg"></div>
        </div>
    
    `
}
function ModeTwo() {
    Homechoose.innerHTML = `
    
    
        <div class="home relative flex flex-row-reverse items-center justify-center gap-[2rem] px-[5rem] m-auto py-[5rem]">
            <div class="card flex flex-row-reverse items-center justify-center w-full gap-[2rem] px-[8rem]">
              <div class="text flex flex-col items-start gap-3 w-[55%]">
                <h1 class="title text-[3rem] font-extrabold w-[100%] text-left">Intelligent search</h1>
                <p class="description text-base w-[70%] text-left">Our powerful search feature will help you find saved sites in no time at all. o need to trawl through all of your bookmarks.</p>
                <div class="buttons flex flex-row items-center gap-4 pt-4">
                  <button class="get-started">More Info</button>
                </div>
              </div>
              <div class="image w-[45%]">
                <img src="images/illustration-features-tab-2.svg" class="w-[100%]" alt="">
              </div>
            </div>
            <div class="bg"></div>
        </div>
    
    `
}
function ModeThree() {
    Homechoose.innerHTML = `
        <div class="home relative flex flex-row-reverse items-center justify-center gap-[2rem] px-[5rem] m-auto py-[5rem]">
            <div class="card flex flex-row-reverse items-center justify-center w-full gap-[2rem] px-[8rem]">
              <div class="text flex flex-col items-start gap-3 w-[55%]">
                <h1 class="title text-[3rem] font-extrabold w-[100%] text-left">Share your bookmarks</h1>
                <p class="description text-base w-[70%] text-left">Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>
                <div class="buttons flex flex-row items-center gap-4 pt-4">
                  <button class="get-started">More Info</button>
                </div>
              </div>
              <div class="image w-[46%]">
                <img src="images/illustration-features-tab-3.svg" class="w-[100%]" alt="">
              </div>
            </div>
            <div class="bg"></div>
        </div>
    
    `
}
        
choose.forEach((ele) => {
    ele.addEventListener("click", (e) => {
        choose.forEach((ele) => {
            ele.classList.remove("active")
        })
        e.currentTarget.classList.add("active")
        if (e.currentTarget.textContent == "Simple Bookmarking") {
            ModeOne()
        }
        else if (e.currentTarget.textContent == "Speedy Searching") {
            ModeTwo()
        }
        else if (e.currentTarget.textContent == "Easy Sharing") {
            ModeThree()
        }
    })
})

let quastions = document.querySelectorAll("#quastions .quastion")

quastions.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    console.log(e.currentTarget.children[0].children[1])
    e.currentTarget.children[1].classList.toggle("none")
    if (!e.currentTarget.children[1].classList.contains("none")) {
      e.currentTarget.children[0].children[1].style.transform = "rotate(180deg)"
    }
    else {
      e.currentTarget.children[0].children[1].style.transform = "rotate(0deg)"
    }
  })
})
let inputEmail = document.getElementById("inputEmail")
let buttonValid = document.getElementById("buttonValid")

buttonValid.addEventListener("click", (e) => {
  e.preventDefault()
  if (inputEmail.value == "") {
    inputEmail.style.borderColor = "red"
  }
})