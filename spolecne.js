
    const btnMenu = document.querySelector("#menu-tlacitko")
    const elMenu = document.querySelector("#menu-polozky")

    btnMenu.addEventListener("click", () => {
        elMenu.classList.toggle("show")

        btnMenu.innerHTML = elMenu.classList.contains("show") ? '<i class="fas fa-xmark"></i>' : '<i class="fas fa-bars"></i>';
    })
