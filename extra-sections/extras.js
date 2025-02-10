let navItems = $(".nav-a");
let title = $("title").html();

$("body").ready(()=>{
    highlightActiveNavItem();
    changeTitle()
});

function highlightActiveNavItem(){
    for (const item of navItems){ 
        let itemsContent = item.innerHTML;
        if (itemsContent == title){
            return item.classList.add("active");
        }
    }
}

const burger = document.querySelector('.hamburger');
const navLists = document.querySelectorAll('.nav-list');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLists.forEach(navList => {
        navList.classList.toggle('visible');
    });
});

function changeTitle(){
    let changingTitle = $(".changing-title");
    changingTitle.text(title);
}

