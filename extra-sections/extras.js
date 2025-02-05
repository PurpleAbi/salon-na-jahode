let navItems = $(".nav-a");
let title = $("title").html();

$("body").ready(()=>{
    highlightActiveNavItem();
});

function highlightActiveNavItem(){
    for (const item of navItems){ 
        let itemsContent = item.innerHTML;
        if (itemsContent == title){
            return item.classList.add("active");
        }
    }
}

