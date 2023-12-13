document.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => {
        console.log(input.id, input.value, input.type, input);
        
        if(input.type == "text"){
            document.querySelector(`#${input.id}-card`).innerText = input.value;
        }

        const root = document.querySelector(':root');

        if(input.type == "color"){
            root.style.setProperty(`--${input.id}`, `${input.value}`);
        } else if(input.type == "range"){
            if(input.id == "image-vertical" || input.id == "image-horizontal"){
                root.style.setProperty(`--${input.id}`, `${input.value}%`);
            } else {
                root.style.setProperty(`--${input.id}`, `${input.value}px`);
            }
        }

        if(input.type == "file"){
            if (input.files && input.files[0]) {
                const reader = new FileReader();
            
                reader.onload = function (e) {
                    document.querySelector("#photo-card").src = e.target.result;
                };
            
                reader.readAsDataURL(input.files[0]);
            }
        }
})});
