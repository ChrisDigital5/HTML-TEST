class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="bg-white shadow-md">
                <nav class="container mx-auto px-4 py-4">
                    <div class="flex justify-between items-center">
                        <a href="index.html" class="text-2xl font-bold text-blue-500">MUDLE JS</a>
                        <ul class="flex space-x-6" id="nav-list">
                            <li><a href="index.html" class="hover:text-blue-500">Home</a></li>
                            <li><a href="courses.html" class="hover:text-blue-500">Courses</a></li>
                            <li><a href="about.html" class="hover:text-blue-500">About</a></li>
                            <li><a href="contact.html" class="hover:text-blue-500">Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
        `;

        // Add progress dashboard link to navigation
        const navList = this.querySelector('#nav-list');
        const progressLink = document.createElement('li');
        progressLink.innerHTML = `
            <a href="#" id="progress-dashboard-link" class="block py-2 px-4 text-gray-800 hover:bg-gray-100 hover:text-blue-600">
                <svg class="inline-block w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
                </svg>
                Learning Progress
            </a>
        `;
        navList.appendChild(progressLink);

        // Add event listener for progress dashboard
        const progressDashboardLink = this.querySelector('#progress-dashboard-link');
        progressDashboardLink.addEventListener('click', (e) => {
            e.preventDefault();
            const courseManager = new CourseManager();
            courseManager.navigateToProgressDashboard();
        });
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-gray-800 text-white mt-12">
                <div class="container mx-auto px-4 py-8">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 class="text-xl font-bold mb-4">MUDLE JS</h3>
                            <p class="text-gray-400">Empowering developers through interactive JavaScript learning.</p>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-4">Quick Links</h3>
                            <ul class="space-y-2">
                                <li><a href="courses.html" class="text-gray-400 hover:text-white">Courses</a></li>
                                <li><a href="about.html" class="text-gray-400 hover:text-white">About</a></li>
                                <li><a href="contact.html" class="text-gray-400 hover:text-white">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold mb-4">Connect With Us</h3>
                            <ul class="space-y-2">
                                <li><a href="#" class="text-gray-400 hover:text-white">Twitter</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white">GitHub</a></li>
                                <li><a href="#" class="text-gray-400 hover:text-white">Discord</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 MUDLE JS. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        `;
    }
}

// Register custom elements
customElements.define('site-header', Header);
customElements.define('site-footer', Footer);
