// MODO OSCURO
const toggleThemeBtn = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
document.documentElement.setAttribute('data-theme','dark');
toggleThemeBtn.textContent = 'Modo Claro';
}

toggleThemeBtn.addEventListener('click', () => {

const currentTheme = document.documentElement.getAttribute('data-theme');

if (currentTheme === 'dark') {

document.documentElement.removeAttribute('data-theme');
localStorage.setItem('theme','light');
toggleThemeBtn.textContent='Modo Oscuro';

} else {

document.documentElement.setAttribute('data-theme','dark');
localStorage.setItem('theme','dark');
toggleThemeBtn.textContent='Modo Claro';

}

});


// CAMBIO ENTRE CV
const cvButtons = document.querySelectorAll('.cv-btn');
const cvDocuments = document.querySelectorAll('.cv-document');

cvButtons.forEach(button => {

button.addEventListener('click',()=>{

cvButtons.forEach(btn => btn.classList.remove('active'));
cvDocuments.forEach(doc => doc.classList.remove('active'));

button.classList.add('active');

const targetId = button.getAttribute('data-target');

document.getElementById(targetId).classList.add('active');

});

});


// MENU PRINCIPAL CV / PORTAFOLIO

const menuButtons = document.querySelectorAll('.menu-btn');
const mainSections = document.querySelectorAll('.main-section');

menuButtons.forEach(button => {

button.addEventListener('click', () => {

mainSections.forEach(section => {
section.style.display='none';
});

const target = button.getAttribute('data-target');

document.getElementById(target).style.display='block';

});

});


// MENU LATERAL

const menuToggleBtn = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggleBtn.addEventListener('click',()=>{

sidebar.classList.toggle('collapsed');
// MODO OSCURO
const toggleThemeBtn = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
document.documentElement.setAttribute('data-theme','dark');
toggleThemeBtn.textContent = 'Modo Claro';
}

toggleThemeBtn.addEventListener('click', () => {

const currentTheme = document.documentElement.getAttribute('data-theme');

if (currentTheme === 'dark') {

document.documentElement.removeAttribute('data-theme');
localStorage.setItem('theme','light');
toggleThemeBtn.textContent='Modo Oscuro';

} else {

document.documentElement.setAttribute('data-theme','dark');
localStorage.setItem('theme','dark');
toggleThemeBtn.textContent='Modo Claro';

}

});


// CAMBIO ENTRE CV
const cvButtons = document.querySelectorAll('.cv-btn');
const cvDocuments = document.querySelectorAll('.cv-document');

cvButtons.forEach(button => {

button.addEventListener('click',()=>{

cvButtons.forEach(btn => btn.classList.remove('active'));
cvDocuments.forEach(doc => doc.classList.remove('active'));

button.classList.add('active');

const targetId = button.getAttribute('data-target');

document.getElementById(targetId).classList.add('active');

});

});


// MENU PRINCIPAL CV / PORTAFOLIO

const menuButtons = document.querySelectorAll('.menu-btn');
const mainSections = document.querySelectorAll('.main-section');

menuButtons.forEach(button => {

button.addEventListener('click', () => {

mainSections.forEach(section => {
section.style.display='none';
});

const target = button.getAttribute('data-target');

document.getElementById(target).style.display='block';

});

});


// MENU LATERAL

const menuToggleBtn = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggleBtn.addEventListener('click',()=>{

sidebar.classList.toggle('collapsed');
// MODO OSCURO
const toggleThemeBtn = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
document.documentElement.setAttribute('data-theme','dark');
toggleThemeBtn.textContent = 'Modo Claro';
}

toggleThemeBtn.addEventListener('click', () => {

const currentTheme = document.documentElement.getAttribute('data-theme');

if (currentTheme === 'dark') {

document.documentElement.removeAttribute('data-theme');
localStorage.setItem('theme','light');
toggleThemeBtn.textContent='Modo Oscuro';

} else {

document.documentElement.setAttribute('data-theme','dark');
localStorage.setItem('theme','dark');
toggleThemeBtn.textContent='Modo Claro';

}

});


// CAMBIO ENTRE CV
const cvButtons = document.querySelectorAll('.cv-btn');
const cvDocuments = document.querySelectorAll('.cv-document');

cvButtons.forEach(button => {

button.addEventListener('click',()=>{

cvButtons.forEach(btn => btn.classList.remove('active'));
cvDocuments.forEach(doc => doc.classList.remove('active'));

button.classList.add('active');

const targetId = button.getAttribute('data-target');

document.getElementById(targetId).classList.add('active');

});

});


// MENU PRINCIPAL CV / PORTAFOLIO

const menuButtons = document.querySelectorAll('.menu-btn');
const mainSections = document.querySelectorAll('.main-section');

menuButtons.forEach(button => {

button.addEventListener('click', () => {

mainSections.forEach(section => {
section.style.display='none';
});

const target = button.getAttribute('data-target');

document.getElementById(target).style.display='block';

});

});


// MENU LATERAL

const menuToggleBtn = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggleBtn.addEventListener('click',()=>{

sidebar.classList.toggle('collapsed');

// MODO OSCURO
const toggleThemeBtn = document.getElementById('theme-toggle');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
document.documentElement.setAttribute('data-theme','dark');
toggleThemeBtn.textContent = 'Modo Claro';
}

toggleThemeBtn.addEventListener('click', () => {

const currentTheme = document.documentElement.getAttribute('data-theme');

if (currentTheme === 'dark') {

document.documentElement.removeAttribute('data-theme');
localStorage.setItem('theme','light');
toggleThemeBtn.textContent='Modo Oscuro';

} else {

document.documentElement.setAttribute('data-theme','dark');
localStorage.setItem('theme','dark');
toggleThemeBtn.textContent='Modo Claro';

}

});


// CAMBIO ENTRE CV
const cvButtons = document.querySelectorAll('.cv-btn');
const cvDocuments = document.querySelectorAll('.cv-document');

cvButtons.forEach(button => {

button.addEventListener('click',()=>{

cvButtons.forEach(btn => btn.classList.remove('active'));
cvDocuments.forEach(doc => doc.classList.remove('active'));

button.classList.add('active');

const targetId = button.getAttribute('data-target');

document.getElementById(targetId).classList.add('active');

});

});


// MENU PRINCIPAL CV / PORTAFOLIO

const menuButtons = document.querySelectorAll('.menu-btn');
const mainSections = document.querySelectorAll('.main-section');

menuButtons.forEach(button => {

button.addEventListener('click', () => {

mainSections.forEach(section => {
section.style.display='none';
});

const target = button.getAttribute('data-target');

document.getElementById(target).style.display='block';

});

});


// MENU LATERAL

const menuToggleBtn = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

menuToggleBtn.addEventListener('click',()=>{

sidebar.classList.toggle('collapsed');

});
