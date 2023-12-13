document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => {
        console.log(input.id, input.value);
    }
)});