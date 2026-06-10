// SEARCH

const searchBtn = document.querySelector(".search-btn");
const searchBox = document.querySelector(".search-box");

if(searchBtn){
  searchBtn.addEventListener("click", () => {
    searchBox.classList.toggle("active");
  });
}

// HERO SLIDER

const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

if(slides.length > 0 && nextBtn && prevBtn){

  let current = 0;

  function showSlide(index){
    slides.forEach(slide=>{ slide.classList.remove("active"); });
    slides[index].classList.add("active");
  }

  nextBtn.addEventListener("click",()=>{
    current++;
    if(current >= slides.length){ current = 0; }
    showSlide(current);
  });

  prevBtn.addEventListener("click",()=>{
    current--;
    if(current < 0){ current = slides.length - 1; }
    showSlide(current);
  });

  setInterval(()=>{
    current++;
    if(current >= slides.length){ current = 0; }
    showSlide(current);
  },5000);

}

// SEARCH FILTER

const searchInput = document.querySelector(".search-box input");

if(searchInput){
  searchInput.addEventListener("keyup", function(){
    let value = this.value.toLowerCase();
    let cards = document.querySelectorAll(".card, .product-card, .category-card");
    cards.forEach(card=>{
      let text = card.innerText.toLowerCase();
      card.style.display = (text.indexOf(value) > -1) ? "block" : "none";
    });
  });
}

// DROPDOWN CLOSE ON OUTSIDE CLICK

document.addEventListener("click",(e)=>{
  if(searchBox && !e.target.closest(".search-container")){
    searchBox.classList.remove("active");
  }
});
