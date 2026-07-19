const card = document.querySelector(".ID");
card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
            card.style.setProperty("--x", x + "px");
            card.style.setProperty("--y", y + "px");
});

card.addEventListener("mouseleave", () => {
    card.style.setProperty("--x", "-100%");
    card.style.setProperty("--y", "-100%");
});

function toggleMenu(){
    document.querySelector(".NavLinks").classList.toggle("active");
}

    function filterProjects(category) {
        let projects = document.querySelectorAll('.moni, .atm');
        projects.forEach(project => {
            if (category === 'all') {
                project.style.display = 'block';
            } else if (project.classList.contains(category)) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".NavLinks a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if(window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        const text = link.querySelector("h1");
            text.classList.remove("active");
                if(link.getAttribute("href") === "#" + current){
                    text.classList.add("active");
                    console.log(text.className);
                }
            });
    });