console.log("JavaScript is connected!"); 
const toggleButton = document.getElementById('theme-toggle'); 

 

toggleButton.addEventListener('click', function() { 

    document.body.classList.toggle('dark-mode'); 

    if (document.body.classList.contains('dark-mode')) { 

        toggleButton.textContent = 'Light Mode'; 

    } else { 

        toggleButton.textContent = 'Dark Mode'; 

    } 

}); 

const texts = [ 

    "Hey there!", 

    "I'm Motheo a web developer", 

    "Crafting digital experiences", 

    "Let's build!" 

]; 

 

let textIndex = 0; 

let charIndex = 0; 

let isDeleting = false; 

const typingElement = document.getElementById('typing-headline'); 

 

function typeEffect() { 

    const currentText = texts[textIndex]; 

    if (isDeleting) { 

        typingElement.textContent = currentText.substring(0, charIndex - 1); 

        charIndex--; 

    } else { 

        typingElement.textContent = currentText.substring(0, charIndex + 1); 

        charIndex++; 

    } 

    if (!isDeleting && charIndex === currentText.length) { 

        isDeleting = true; 

        setTimeout(typeEffect, 2000); 

        return; 

    } 

    if (isDeleting && charIndex === 0) { 

        isDeleting = false; 

        textIndex = (textIndex + 1) % texts.length; 

    } 

    const speed = isDeleting ? 50 : 100; 

    setTimeout(typeEffect, speed); 

} 

 

typeEffect(); 