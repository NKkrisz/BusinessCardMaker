document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => {
        console.log(input.id, input.value, input.type);
        
        if(input.type == "text"){
            document.querySelector(`#${input.id}-card`).innerText = input.value;
        }

        const root = document.querySelector(':root');

        if(input.type == "color"){
            root.style.setProperty(`--${input.id}`, `${input.value}`);
        } else if(input.type == "range"){
            root.style.setProperty(`--${input.id}`, `${input.value}px`);
        }
    }
)});

