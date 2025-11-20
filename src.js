new kursor({
    type: 4,
 })


const typed = new Typed("#typed", {
      strings: [
        "Frontend Developer.",
        "Backend Developer.",
        "UI UX Designer.",
        "Python Developer"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true
    });
 



 const projects = [
    {
         id: 1, title: "Sundown Studio", description: "The project showcases smooth GSAP animations, responsive design, and attention to micro-interactions that bring the interface to life.", category: "frontend", image: "resourses\\projectsImg\\sundown1.jpeg", technologies: ["JavaScript", "Gsap", "LocoMotive"], status: "completed", demo:"https://waris24w.github.io/sundown/", github:"https://github.com/waris24w/sundown"
     },
     {
         id: 2,
         title: "Spotify Clone",
         description: "A full-featured music streaming application clone with playlist management, search functionality, and audio player controls.",
         category: "backend",
         // image: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=600&h=400&fit=crop",
         image: "resourses/projectsImg/spoti.png",
         technologies: ["Node.js", "Express", "MongoDB"],
         status: "completed",
         demo:"https://spotify-clone-wzc69.sevalla.app/",
         github:"https://github.com/waris24w/Spotify-Clone/"
     },
     {
         id: 3,
         title: "Technical Courses",
         description: "An online learning platform offering technical courses with video lessons, quizzes, and progress tracking for students.",
         category: "frontend",
         // image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
         image: "resourses/projectsImg/website.webp",
         technologies: ["Gsap", "CSS", "JavaScript"],
         status: "completed",
         github:"https://waris24w.github.io/Simsat-Site//",
         demo:"https://waris24w.github.io/Simsat-Site/"
     },
     {
         id: 4,
         title: "E-Commerce Website",
         description: "A modern shopping platform with cart functionality, payment integration, and product management system.",
         category: "fullstack",
         image: "resourses/projectsImg/coming.jpg",
         // image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
         technologies: ["React", "Node.js", "Stripe"],
         status: "coming soon",
         github:"#", 
         demo:"#"
     }
 ];

 // Filter function
 function filterProducts(category) {
     const filtered = projects.filter((p) => {  
         return p.category === category;
     });
     return filtered;
 }

 // Display function
 function displayProjects(projectsToShow) {  
     const container = document.querySelector('.demo-container');
     container.innerHTML = ''; 
     
     projectsToShow.forEach((p) => {
         // Create tech pills
         let techHTML = '';
         p.technologies.forEach((tech) => {
             techHTML += `<span class="tech-pill">${tech}</span>`;
         });
         
         // Determine status class
         const statusClass = p.status === "coming soon" ? "coming-soon" : "";

         
         container.innerHTML += `  
             <div class="project-card">
                 <div class="image-container">
                     <img src="${p.image}" 
                          alt="${p.title}" 
                          class="project-image">
                     <div class="image-overlay"></div>
                     <span class="category-tag">${p.category}</span>
                     <span class="status-badge ${statusClass}">${p.status}</span>
                 </div>
                 
                 <div class="card-content">
                     <h2 class="project-title">${p.title}</h2>
                     <p class="project-description">${p.description}</p>
                     
                     <div class="technologies">
                         ${techHTML}
                     </div>
                     
                     <div class="card-buttons">
                         <a target="_blank" href="${p.github}" class="btn btn-primary">Github</a>
                         <a target="_blank" href="${p.demo}" class="btn btn-secondary">Live Demo</a>
                     </div>
                 </div>
             </div>
         `;  
     });
 }

 // Main function
 function showProjects(category) {
     if (category === 'all') {
         displayProjects(projects);
     } else {
         const filtered = filterProducts(category);
         displayProjects(filtered); 
     }
 }

 // Show all on page load
 displayProjects(projects);


 function toggleMenu() {
     const navText = document.querySelector('.navText');
     const hamburger = document.querySelector('.hamburger');
     const overlay = document.querySelector('.overlay');
     
     navText.classList.toggle('active');
     hamburger.classList.toggle('active');
     overlay.classList.toggle('active');
 }

 function closeMenu() {
     const navText = document.querySelector('.navText');
     const hamburger = document.querySelector('.hamburger');
     const overlay = document.querySelector('.overlay');
     
     navText.classList.remove('active');
     hamburger.classList.remove('active');
     overlay.classList.remove('active');
 }