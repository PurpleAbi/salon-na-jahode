
const burger = document.querySelector('.hamburger');
const navLists = document.querySelectorAll('.nav-list');
const navItems = $(".nav-a");
const title = $("title").html();

$("body").ready(()=>{
    highlightActiveNavItem();
    changeTitle()
});

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLists.forEach(navList => {
        navList.classList.toggle('visible');
    });
});


function highlightActiveNavItem(){
    for (const item of navItems){ 
        let itemsContent = item.innerHTML;
        if (itemsContent == title){
            return item.classList.add("active");
        }
    }
}
function changeTitle(){
    let changingTitle = $(".changing-title");
    changingTitle.text(title);
}