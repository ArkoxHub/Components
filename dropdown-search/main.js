window.onload = () => {
    console.log("Hi friend");

    const searchInput = document.getElementById("searchInput");
    const countryContainer = document.getElementById("hidden-country-list");
    const itemList = document.querySelectorAll(".item-country-list");


    searchInput.addEventListener("focus", () => {
        countryContainer.classList.contains("hide-container") ? countryContainer.classList.remove("hide-container") : countryContainer.classList.add("hide-container")
    })

    searchInput.addEventListener("keyup", () => {
        // CHECK IF THE INPUT VALUE EQUALS TO THE ITEM LIST
        const inputText = searchInput.value
        let itemList = document.querySelectorAll(".item-country-list");
        console.log(inputText);

        itemList.forEach(item => {
            if (item) {
                if (!item.innerText.toLowerCase().includes(inputText.toLowerCase())) {
                    item.style.display = "none";
                } else {
                    item.style.display = "block";
                }
            }
        })
    })

    itemList.forEach(element => {
        console.log(element);
        element.addEventListener("click", () => {
            const text = element.innerHTML
            searchInput.value = text
            countryContainer.classList.contains("hide-container") ? countryContainer.classList.remove("hide-container") : countryContainer.classList.add("hide-container")
        })
    });




}