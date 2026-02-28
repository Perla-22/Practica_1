//Logica modo obscuro
const toggleThemeBtn = document.getElementById('theme-toggle');

//Mantener tema al recargar página 
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    toggleThemeBtn.textContent = 'Modo Claro';
}

toggleThemeBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        toggleThemeBtn.textContent = 'Modo Oscuro';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleThemeBtn.textContent = 'Modo Claro';
    }
});


//Navegacion pestañas 
const cvButtons = document.querySelectorAll('.cv-btn');
const cvDocuments = document.querySelectorAll('.cv-document');

cvButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover clase 'active' de todos
        cvButtons.forEach(btn => btn.classList.remove('active'));
        cvDocuments.forEach(doc => doc.classList.remove('active'));

        // Agregar clase 'active' al seleccionado
        button.classList.add('active');
        const targetId = button.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');

        //Oculta el menú al seleccionar un cv, en cel 
        if (window.innerWidth <= 768) {
            document.getElementById('sidebar').classList.remove('open');
        }
    });
});


//Menú plegable
const menuToggleBtn = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggleBtn.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
        // Comportamiento en celulares (menú superpuesto)
        sidebar.classList.toggle('open');
    } else {
        // Comportamiento en escritorio (empuja el contenido)
        sidebar.classList.toggle('collapsed');
    }
});