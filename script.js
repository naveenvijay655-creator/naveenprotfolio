// Project Data
const projectsData = [
    {
        id: 1,
        title: 'Ozler',
        subtitle: 'Fashion',
        category: 'Brand Identity',
        description: 'A comprehensive branding identity for a Fashion marketing agency focusing on growth and transformation. The logo incorporates dynamic shapes to symbolize upward movement and progress.',
        images: ['./assets/ozlerimg1.jpg', './assets/ozlerimg2.jpg'],
        client: 'Brandeza Tech',
        year: '2023',
        thumbnail: './assets/ozler.jpg'
    },
    {
        id: 2,
        title: 'Panache',
        subtitle: 'Luxury Architecture',
        category: 'Logofolio',
        description: 'Visual identity for a high-end architectural firm. The branding exudes elegance and structural integrity, using a minimalist approach with bold typography.',
        images: ['./assets/panache_logos.jpg', './assets/logofolio_bg.jpg'],
        client: 'Panache Architects',
        year: '2023',
        thumbnail: './assets/panache_logos.jpg'
    }
];

// Work Categories
const categories = [
    {
        title: 'Logofolio',
        subtitle: 'Brand Marks',
        bg: 'url("./assets/logofolio.jpg")'
    },
    {
        title: 'Poster Works',
        subtitle: 'Creative Advertisement',
        bg: 'url("./assets/posters.jpg")'
    },
    {
        title: 'Social Media',
        subtitle: 'Digital Campaigns',
        bg: 'url("./assets/social.jpg")'
    },
    {
        title: 'Illustrator Works',
        subtitle: 'Vector Art',
        bg: 'url("./assets/illustrator.jpg")'
    }
];

// DOM Elements
const mobileToggle = document.querySelector('.mobile-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

// Mobile Menu Logic
if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });
}

if (closeMenu) {
    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
}

// Populate Home Page
function loadHomePage() {
    const projectsContainer = document.getElementById('projects-container');
    const categoriesContainer = document.getElementById('categories-container');

    if (projectsContainer) {
        projectsData.forEach(project => {
            const card = document.createElement('a');
            card.href = `project.html?id=${project.id}`;
            card.className = 'project-card';
            card.innerHTML = `
                <div class="project-image-box">
                    <img src="${project.thumbnail}" alt="${project.title}">
                </div>
                <div class="project-info">
                    <div class="project-header">
                        <h3>${project.title}</h3>
                        <span>↗</span>
                    </div>
                    <p>${project.category}</p>
                </div>
            `;
            projectsContainer.appendChild(card);
        });
    }

    if (categoriesContainer) {
        categories.forEach(cat => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.style.background = cat.bg;
            card.style.backgroundSize = 'cover';
            card.style.backgroundPosition = 'center';
            card.innerHTML = `
                <div class="category-overlay"></div>
                <div class="category-content">
                    <h4>${cat.title}</h4>
                    <p>${cat.subtitle}</p>
                </div>
            `;
            categoriesContainer.appendChild(card);
        });
    }
}

// Populate Project Page
function loadProjectPage() {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get('id'));
    const project = projectsData.find(p => p.id === id);

    if (!project) {
        document.body.innerHTML = '<h1 style="color:white; text-align:center; margin-top:5rem;">Project Not Found</h1><center><a href="index.html" style="color:gold;">Go Home</a></center>';
        return;
    }

    document.getElementById('project-title').textContent = project.title;
    document.getElementById('project-subtitle').textContent = project.subtitle;
    document.getElementById('project-desc').textContent = project.description;
    document.getElementById('project-client').textContent = project.client;
    document.getElementById('project-year').textContent = project.year;

    const gallery = document.getElementById('project-gallery');
    project.images.forEach(img => {
        const imageEl = document.createElement('img');
        imageEl.src = img;
        imageEl.alt = project.title;
        gallery.appendChild(imageEl);
    });
}

// Router Logic (Simple check)
if (window.location.pathname.includes('project.html')) {
    loadProjectPage();
} else {
    loadHomePage();
}

// Scroll Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in-up').forEach((el) => observer.observe(el));

function goToContact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}
