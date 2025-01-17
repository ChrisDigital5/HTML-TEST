// Course Management Module
class CourseManager {
    constructor() {
        this.courses = [
            {
                id: 'javascript-fundamentals',
                title: 'JavaScript Fundamentals',
                level: 'Beginner',
                duration: '4 Hours',
                lessons: 10,
                color: 'blue',
                image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&h=400&fit=crop',
                learningObjectives: [
                    'Write basic JavaScript programs',
                    'Understand core programming concepts',
                    'Manipulate web page elements',
                    'Handle user interactions'
                ],
                nextCourse: 'advanced-javascript'
            },
            {
                id: 'advanced-javascript',
                title: 'Advanced JavaScript Techniques',
                level: 'Intermediate',
                duration: '6 Hours',
                lessons: 15,
                color: 'purple',
                image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600&h=400&fit=crop',
                learningObjectives: [
                    'Write complex, efficient JavaScript code',
                    'Implement advanced programming patterns',
                    'Use modern ES6+ features effectively',
                    'Handle asynchronous programming'
                ],
                nextCourse: 'javascript-projects'
            },
            {
                id: 'javascript-projects',
                title: 'Real-World JavaScript Projects',
                level: 'Advanced',
                duration: '10 Hours',
                lessons: 20,
                color: 'red',
                image: 'https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=600&h=400&fit=crop',
                learningObjectives: [
                    'Build multiple professional applications',
                    'Develop a comprehensive portfolio',
                    'Master industry-standard practices',
                    'Prepare for professional development roles'
                ],
                nextCourse: null
            }
        ];
    }

    // Render course details on individual course pages
    renderCoursePage(courseId) {
        const course = this.courses.find(c => c.id === courseId);
        if (!course) return;

        // Update page title
        document.title = `${course.title} - MUDLE JS`;

        // Update course header
        const headerElements = {
            title: document.querySelector('h1'),
            description: document.querySelector('main p'),
            image: document.querySelector('img[alt*="JavaScript"]')
        };

        if (headerElements.title) headerElements.title.textContent = course.title;
        if (headerElements.description) headerElements.description.textContent = this.generateCourseDescription(course);
        if (headerElements.image) headerElements.image.src = course.image;

        // Update course details section
        this.updateCourseDetailsSection(course);

        // Update learning progression section
        this.updateLearningProgressionSection(course);

        // Add event listener to enrollment button
        this.setupEnrollmentButton(course);
    }

    generateCourseDescription(course) {
        return `A ${course.level}-level course designed to help you ${course.learningObjectives[0].toLowerCase()} and master JavaScript development.`;
    }

    updateCourseDetailsSection(course) {
        const detailsSection = document.querySelector('.bg-white.rounded-lg.shadow-md.p-6.mb-6');
        if (detailsSection) {
            const detailsHTML = `
                <h2 class="text-2xl font-semibold mb-4">Course Details</h2>
                <ul class="space-y-3">
                    <li class="flex items-center">
                        <svg class="w-6 h-6 text-${course.color}-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                        <span>${course.lessons} Interactive Lessons</span>
                    </li>
                    <li class="flex items-center">
                        <svg class="w-6 h-6 text-${course.color}-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>${course.duration} Total Duration</span>
                    </li>
                    <li class="flex items-center">
                        <svg class="w-6 h-6 text-${course.color}-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>${course.level} Level</span>
                    </li>
                </ul>
            `;
            detailsSection.innerHTML = detailsHTML;
        }
    }

    updateLearningProgressionSection(course) {
        const progressionSection = document.querySelector('.mt-12.bg-white.rounded-lg.shadow-md.p-8');
        if (progressionSection) {
            const progressionHTML = `
                <h2 class="text-3xl font-bold mb-6 text-center">Your Learning Progression</h2>
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="text-2xl font-semibold mb-4 text-${course.color}-600">After This Course</h3>
                        <p class="text-gray-700 mb-4">
                            Upon completing the ${course.title}, you'll be able to:
                        </p>
                        <ul class="space-y-3 text-gray-600">
                            ${course.learningObjectives.map(obj => `<li>✓ ${obj}</li>`).join('')}
                        </ul>
                    </div>
                    <div>
                        <h3 class="text-2xl font-semibold mb-4 text-${course.color}-600">Next Learning Path</h3>
                        <div class="bg-${course.color}-50 p-4 rounded-lg">
                            ${course.nextCourse ? `
                                <h4 class="font-bold text-${course.color}-700 mb-2">${this.getCourseTitle(course.nextCourse)}</h4>
                                <p class="text-gray-700 mb-4">
                                    Continue your learning journey with our next advanced course.
                                </p>
                                <a href="${course.nextCourse}.html" class="inline-block bg-${course.color}-500 text-white px-4 py-2 rounded hover:bg-${course.color}-600">
                                    View Next Course
                                </a>
                            ` : `
                                <h4 class="font-bold text-${course.color}-700 mb-2">Career Pathways</h4>
                                <p class="text-gray-700 mb-4">
                                    You've completed our advanced course. Explore specialized areas in web development.
                                </p>
                                <a href="learning-path.html" class="inline-block bg-${course.color}-500 text-white px-4 py-2 rounded hover:bg-${course.color}-600">
                                    Explore Career Paths
                                </a>
                            `}
                        </div>
                    </div>
                </div>
            `;
            progressionSection.innerHTML = progressionHTML;
        }
    }

    setupEnrollmentButton(course) {
        const enrollButton = document.querySelector(`#start-${course.id}-course`);
        if (enrollButton) {
            enrollButton.addEventListener('click', () => {
                Swal.fire({
                    title: `Enroll in ${course.title}`,
                    html: `
                        <div class="text-left">
                            <h3 class="text-xl font-bold mb-4">Course Details</h3>
                            <p><strong>Level:</strong> ${course.level}</p>
                            <p><strong>Duration:</strong> ${course.duration}</p>
                            <p><strong>Lessons:</strong> ${course.lessons}</p>
                            
                            <h4 class="text-lg font-semibold mt-4 mb-2">Learning Objectives</h4>
                            <ul class="list-disc list-inside text-left">
                                ${course.learningObjectives.map(obj => `<li>${obj}</li>`).join('')}
                            </ul>
                            
                            <div class="mt-4">
                                <label for="enrollment-name" class="block mb-2">Your Name</label>
                                <input type="text" id="enrollment-name" class="swal2-input" placeholder="Enter your full name">
                                
                                <label for="enrollment-email" class="block mb-2 mt-3">Email Address</label>
                                <input type="email" id="enrollment-email" class="swal2-input" placeholder="Enter your email">
                                
                                <div class="mt-3">
                                    <label class="inline-flex items-center">
                                        <input type="checkbox" id="terms-agreement" class="form-checkbox">
                                        <span class="ml-2">I agree to the terms and conditions</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    `,
                    showCancelButton: true,
                    confirmButtonText: 'Start Course',
                    preConfirm: () => {
                        const name = document.getElementById('enrollment-name').value;
                        const email = document.getElementById('enrollment-email').value;
                        const termsAgreed = document.getElementById('terms-agreement').checked;
                        
                        if (!name) {
                            Swal.showValidationMessage('Please enter your name');
                            return false;
                        }
                        
                        if (!email) {
                            Swal.showValidationMessage('Please enter your email');
                            return false;
                        }
                        
                        if (!termsAgreed) {
                            Swal.showValidationMessage('Please agree to the terms and conditions');
                            return false;
                        }
                        
                        return { name, email };
                    }
                }).then((result) => {
                    if (result.isConfirmed) {
                        const { name, email } = result.value;
                        
                        // Create a course enrollment record
                        const enrollment = {
                            courseId: course.id,
                            courseName: course.title,
                            studentName: name,
                            studentEmail: email,
                            enrollmentDate: new Date().toISOString(),
                            progress: {
                                currentLesson: 1,
                                totalLessons: course.lessons,
                                completedLessons: 0,
                                progressPercentage: 0
                            }
                        };
                        
                        // Store enrollment in localStorage (for demonstration)
                        const enrollments = JSON.parse(localStorage.getItem('courseEnrollments') || '[]');
                        enrollments.push(enrollment);
                        localStorage.setItem('courseEnrollments', JSON.stringify(enrollments));
                        
                        Swal.fire({
                            title: 'Enrollment Successful!',
                            html: `
                                <div>
                                    <p>Welcome, ${name}!</p>
                                    <p>You've enrolled in ${course.title}.</p>
                                    <p>We'll send course details to ${email}.</p>
                                </div>
                            `,
                            icon: 'success',
                            confirmButtonText: 'Start Learning'
                        }).then(() => {
                            // Redirect to course content or first lesson
                            window.location.href = `${course.id}-lessons.html`;
                        });
                    }
                });
            });
        }
    }

    getCourseTitle(courseId) {
        const course = this.courses.find(c => c.id === courseId);
        return course ? course.title : 'Next Course';
    }

    // Render courses on the courses overview page
    renderCoursesOverview() {
        const coursesContainer = document.querySelector('.grid.grid-cols-1.md\\:grid-cols-3.gap-6');
        if (coursesContainer) {
            coursesContainer.innerHTML = this.courses.map(course => `
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="${course.image}" alt="${course.title}" class="w-full h-48 object-cover">
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 text-${course.color}-600">${course.title}</h3>
                        <p class="text-gray-600 mb-4">${this.generateCourseDescription(course)}</p>
                        <div class="flex justify-between items-center mb-4">
                            <span class="text-sm text-gray-500">
                                <span class="font-semibold">${course.lessons}</span> Lessons
                            </span>
                            <span class="text-sm text-gray-500">
                                <span class="font-semibold">${course.duration}</span>
                            </span>
                        </div>
                        <a href="${course.id}.html" class="w-full bg-${course.color}-500 text-white px-4 py-2 rounded hover:bg-${course.color}-600">
                            Start Learning
                        </a>
                    </div>
                </div>
            `).join('');
        }
    }

    // New method to retrieve user's current enrollments
    getUserEnrollments() {
        return JSON.parse(localStorage.getItem('courseEnrollments') || '[]');
    }

    // New method to track course progress
    updateCourseProgress(courseId, lessonCompleted) {
        const enrollments = this.getUserEnrollments();
        const enrollmentIndex = enrollments.findIndex(e => e.courseId === courseId);
        
        if (enrollmentIndex !== -1) {
            const enrollment = enrollments[enrollmentIndex];
            enrollment.progress.completedLessons++;
            enrollment.progress.currentLesson = lessonCompleted + 1;
            enrollment.progress.progressPercentage = 
                Math.round((enrollment.progress.completedLessons / enrollment.progress.totalLessons) * 100);
            
            enrollments[enrollmentIndex] = enrollment;
            localStorage.setItem('courseEnrollments', JSON.stringify(enrollments));
        }
    }

    // Method to navigate to progress dashboard
    navigateToProgressDashboard() {
        const enrollments = this.getUserEnrollments();
        
        if (enrollments.length > 0) {
            window.location.href = 'progress-dashboard.html';
        } else {
            Swal.fire({
                title: 'No Courses Enrolled',
                text: 'Please enroll in a course first to view your progress.',
                icon: 'info',
                confirmButtonText: 'Explore Courses',
                cancelButtonText: 'Cancel',
                showCancelButton: true
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'courses.html';
                }
            });
        }
    }

    // Initialize course-related functionality
    init() {
        const path = window.location.pathname;
        
        // Course-specific pages
        if (path.includes('javascript-fundamentals.html')) {
            this.renderCoursePage('javascript-fundamentals');
        } else if (path.includes('advanced-javascript.html')) {
            this.renderCoursePage('advanced-javascript');
        } else if (path.includes('javascript-projects.html')) {
            this.renderCoursePage('javascript-projects');
        }
        
        // Courses overview page
        if (path.includes('courses.html')) {
            this.renderCoursesOverview();
        }
    }
}

// Initialize CourseManager when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const courseManager = new CourseManager();
    courseManager.init();
});
