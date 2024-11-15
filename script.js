document.addEventListener("DOMContentLoaded", () => {
    const themeSelector = document.getElementById("theme-selector");
    const listStyleSelector = document.getElementById("list-style-selector");
    const itemList = document.getElementById("item-list");
    const saveBtn = document.getElementById("save-btn");
    const resetBtn = document.getElementById("reset-btn");

    // Populate the list with dynamic items
    const addItemsToList = () => {
        itemList.innerHTML = "";
        for (let i = 1; i <= 5; i++) {
            const listItem = document.createElement("li");
            listItem.textContent = `Item ${i}`;
            itemList.appendChild(listItem);
        }
    };

    // Load preferences from local storage
    const loadPreferences = () => {
        const theme = localStorage.getItem("theme") || "theme-light";
        const listStyle = localStorage.getItem("listStyle") || "disc";

        document.body.className = theme;
        themeSelector.value = theme;
        itemList.className = listStyle;
        listStyleSelector.value = listStyle;
    };

    // Save preferences to local storage
    const savePreferences = () => {
        localStorage.setItem("theme", themeSelector.value);
        localStorage.setItem("listStyle", listStyleSelector.value);
        alert("Preferences saved!");
    };

    // Reset preferences to default
    const resetPreferences = () => {
        localStorage.removeItem("theme");
        localStorage.removeItem("listStyle");
        loadPreferences();
    };

    // Event Listeners
    themeSelector.addEventListener("change", () => {
        document.body.className = themeSelector.value;
    });

    listStyleSelector.addEventListener("change", () => {
        itemList.className = listStyleSelector.value;
    });

    saveBtn.addEventListener("click", savePreferences);
    resetBtn.addEventListener("click", resetPreferences);

    // Initialize page
    addItemsToList();
    loadPreferences();
});
