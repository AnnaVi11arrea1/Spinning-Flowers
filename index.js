let leaves = [];
let flowers = [];

document.addEventListener("DOMContentLoaded", () => {
    function placeFlower() {
        for (let i = 0; i < 3; i++) {
            const flower = makeFlower();
            flowers.push(flower);
        }

        for (let i = 0; i < flowers.length; i++) {
            const randomX = Math.random() * 50;
            const randomY = Math.random() * 50;
            flowers[i].style.transformOrigin = `${randomX}% ${randomY}%`;
        }
    }

    function makeFlower() {
        const flower = document.createElement("div");
        flower.setAttribute("class", "flower");
        document.getElementById('container').appendChild(flower);

        for (let i = 0; i < 20; i++) {
            const leafarea = document.createElement("div");
            leafarea.setAttribute("class", "leaf");
            flower.appendChild(leafarea);
            
            const innerleaf = document.createElement("div");
            innerleaf.setAttribute("class", "cut");
            
            const blackpart = document.createElement("div");
            blackpart.setAttribute("class", "leaflet");

            const otherpart = document.createElement("div");
            otherpart.setAttribute("class", "cut2");

            leafarea.appendChild(otherpart);
            innerleaf.appendChild(blackpart);
            leafarea.appendChild(innerleaf);
            flower.appendChild(leafarea);

            leaves.push(leafarea);

            const rotateLeaf = document.getElementsByClassName("leaf");
            for (let j = 0; j < leaves.length; j++) {
                rotateLeaf[j].style.transform = `rotate(${j * 22.5}deg)`;   
            }
            }
            
            return flower;
        }
        placeFlower();
    
console.log(flowers);
    
});
