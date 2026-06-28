const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        navbar.classList.add("scrolled");
    }else{
        navbar.classList.remove("scrolled");
    }
});

const accordions = document.querySelectorAll(".accordion");

accordions.forEach(item=>{

    const btn = item.querySelector(".accordion-btn");

    btn.addEventListener("click",()=>{

        item.classList.toggle("active");

        const content = item.querySelector(".accordion-content");

        if(item.classList.contains("active")){

            content.style.maxHeight = content.scrollHeight + "px";

        }else{

            content.style.maxHeight = null;

        }

    });

});

function toggleGallery(button){

    const gallery = document.getElementById("gallery-more");

    gallery.classList.toggle("show");

    if(gallery.classList.contains("show")){

        button.textContent = "Tampilkan Lebih Sedikit";

    }else{

        button.textContent = "Lihat Lebih Banyak";

    }

}

function toggleBudaya(id,button){

    const detail = document.getElementById("detail-"+id);

    detail.classList.toggle("show");

    if(detail.classList.contains("show")){

        button.innerHTML =
        '<i class="fa-solid fa-angle-up"></i> Sembunyikan';

    }else{

        button.innerHTML = "Selengkapnya";

    }

}