let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menuIcon.onclick=()=>{menuIcon.classList.toggle('bx-x');navbar.classList.toggle('active');};
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');
window.onscroll=()=>{sections.forEach(sec=>{let top=window.scrollY;let offset=sec.offsetTop-150;let height=sec.offsetHeight;let id=sec.getAttribute('id');if(top>=offset&&top<offset+height){navLinks.forEach(link=>{link.classList.remove('active');let activeLink=document.querySelector('header nav a[href*='+id+']');if(activeLink){activeLink.classList.add('active');}});}});let header=document.querySelector('header');header.classList.toggle('sticky',window.scrollY>100);menuIcon.classList.remove('bx-x');navbar.classList.remove('active');};
if(typeof ScrollReveal!=='undefined'){ScrollReveal({distance:'70px',duration:1500,delay:140});ScrollReveal().reveal('.home-content,.heading',{origin:'top'});ScrollReveal().reveal('.home-img,.services-container,.project-card,.contact form,.skills-grid,.timeline-item',{origin:'bottom'});ScrollReveal().reveal('.home-content h1,.about-img,.contact-info',{origin:'left'});ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});}
if(typeof Typed!=='undefined'){new Typed('.multiple-text',{strings:['Élève ingénieure en aéronautique','Data Analyst junior','Business Intelligence enthusiast','Simulation & Data Visualization'],typeSpeed:75,backSpeed:50,backDelay:1200,loop:true});}
