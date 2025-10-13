// Contenido COMPLETO de script.js
document.addEventListener('DOMContentLoaded', () => {
    const toggleButtons = document.querySelectorAll('.toggle-btn');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                if (targetElement.style.display === 'block') {
                    targetElement.style.display = 'none';
                    button.textContent = button.textContent.replace(' (Ocultar)', '');
                } else {
                    targetElement.style.display = 'block';
                    if (window.MathJax) {
                        MathJax.typeset([targetElement]);
                    }
                    button.textContent += ' (Ocultar)';
                }
            }
        });
    });
});
