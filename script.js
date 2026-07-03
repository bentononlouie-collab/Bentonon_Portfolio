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
