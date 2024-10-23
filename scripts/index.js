function closeAd() {
  const adBar = document.getElementById("ad-bar");
  adBar.classList.add("hidden");
}
function changeTab(tab) {
  const titles = {
    Golang: "Expand your career opportunities with Golang",
    "Web Development": "Build websites and applications with Web Development",
    JavaScript: "Enhance your coding skills with JavaScript",
    "Data Science": "Unlock the power of data with Data Science",
    AWS: "Master cloud technologies with Amazon AWS",
  };

  const descriptions = {
    Golang:
      "Master backend development with Golang and become a full-stack developer.",
    "Web Development":
      "Learn to build responsive websites using HTML, CSS, JavaScript, and popular frameworks.",
    JavaScript:
      "Learn the most widely used programming language in web development.",
    "Data Science":
      "Learn Python, machine learning, data visualization, and statistical analysis.",
    AWS: "Become a cloud expert by mastering Amazon AWS and its services.",
  };

  document.getElementById("tab-title").textContent = titles[tab];
  document.getElementById("tab-description").textContent = descriptions[tab];

  const exploreButton = document.querySelector("button.p-2");
  exploreButton.textContent = `Explore ${tab}`;

  const tabs = ["golang-tab", "webdev-tab", "js-tab", "datasci-tab", "aws-tab"];
  tabs.forEach(function (t) {
    document.getElementById(t).classList.remove("text-black", "tab-active");
    document.getElementById(t).classList.add("text-gray-500", "tab-inactive");
  });

  let activeTabId;
  if (tab === "Golang") {
    activeTabId = "golang-tab";
  } else if (tab === "Web Development") {
    activeTabId = "webdev-tab";
  } else if (tab === "JavaScript") {
    activeTabId = "js-tab";
  } else if (tab === "Data Science") {
    activeTabId = "datasci-tab";
  } else if (tab === "AWS") {
    activeTabId = "aws-tab";
  }

  document
    .getElementById(activeTabId)
    .classList.add("text-black", "tab-active");
}

const courses = [
  {
    title: "Course 1",
    instructor: "Instructor 1",
    rating: 4.9,
    reviews: 300000,
    price: 160000,
    originalPrice: 500000,
    bestseller: true,
    image: "course1.jpg",
  },
  {
    title: "Course 2",
    instructor: "Instructor 2",
    rating: 4.8,
    reviews: 250000,
    price: 150000,
    originalPrice: 480000,
    bestseller: false,
    image: "course2.jpg",
  },
  {
    title: "Course 2",
    instructor: "Instructor 2",
    rating: 4.8,
    reviews: 250000,
    price: 150000,
    originalPrice: 480000,
    bestseller: false,
    image: "course2.jpg",
  },
  {
    title: "Course 2",
    instructor: "Instructor 2",
    rating: 4.8,
    reviews: 250000,
    price: 150000,
    originalPrice: 480000,
    bestseller: false,
    image: "course2.jpg",
  },
  {
    title: "Course 2",
    instructor: "Instructor 2",
    rating: 4.8,
    reviews: 250000,
    price: 150000,
    originalPrice: 480000,
    bestseller: false,
    image: "course2.jpg",
  },
  {
    title: "Course 2",
    instructor: "Instructor 2",
    rating: 4.8,
    reviews: 250000,
    price: 150000,
    originalPrice: 480000,
    bestseller: false,
    image: "course2.jpg",
  },
  {
    title: "Course 2",
    instructor: "Instructor 2",
    rating: 4.8,
    reviews: 250000,
    price: 150000,
    originalPrice: 480000,
    bestseller: false,
    image: "course2.jpg",
  },
  {
    title: "Course 2",
    instructor: "Instructor 2",
    rating: 4.8,
    reviews: 250000,
    price: 150000,
    originalPrice: 480000,
    bestseller: false,
    image: "course2.jpg",
  },
  {
    title: "Course 2",
    instructor: "Instructor 2",
    rating: 4.8,
    reviews: 250000,
    price: 150000,
    originalPrice: 480000,
    bestseller: false,
    image: "course2.jpg",
  },
];

function renderCourses() {
  const container = document.getElementById("courses-container");
  container.innerHTML = "";
  courses.forEach((course) => {
    const courseCard = `
            <div class="w-64 flex-shrink-0 p-4">
                <img src="${course.image}" alt="${
      course.title
    }" class="w-full h-20 object-cover rounded-lg">
                <h4 class="text-lg font-bold mt-2">${course.title}</h4>
                <p class="text-sm text-gray-500">${course.instructor}</p>
                <div class="flex items-center mt-2">
                    <span class="text-yellow-500 font-bold text-sm">${
                      course.rating
                    }</span>
                    <span class="ml-2 text-xs text-yellow-500">⭐⭐⭐⭐⭐</span>
                    <span class="ml-2 text-xs text-gray-500">(${course.reviews.toLocaleString()})</span>
                </div>
                <div class="flex items-center justify-between mt-2">
                    <h5 class="text-base font-bold">Rp ${course.price.toLocaleString()}</h5>
                    <span class="line-through text-sm text-gray-500">Rp ${course.originalPrice.toLocaleString()}</span>
                </div>
                ${
                  course.bestseller
                    ? '<h5 class="text-green-500">Bestseller</h5>'
                    : ""
                }
            </div>
        `;
    container.innerHTML += courseCard;
  });
}

renderCourses();

// Data for testimonials
const testimonials = [
  {
    quote:
      "Ngoding Aja helped me transition into a new career in tech. The courses were comprehensive, and now I am a full-stack developer!",
    name: "John Doe",
    job: "Full-Stack Developer at XYZ Inc.",
    course: "Full-Stack Web Development Course",
  },
  {
    quote:
      "Learning with Ngoding Aja gave me the confidence to start freelancing. I now work remotely for clients worldwide.",
    name: "Jane Smith",
    job: "Freelance Web Developer",
    course: "JavaScript Mastery Course",
  },
  {
    quote:
      "The data science course was eye-opening. It helped me land a job in one of the top tech companies.",
    name: "Alex Johnson",
    job: "Data Scientist at TechCorp",
    course: "Data Science Bootcamp",
  },
  {
    quote:
      "The data science course was eye-opening. It helped me land a job in one of the top tech companies.",
    name: "Alex Johnson",
    job: "Data Scientist at TechCorp",
    course: "Data Science Bootcamp",
  },
  {
    quote:
      "The data science course was eye-opening. It helped me land a job in one of the top tech companies.",
    name: "Alex Johnson",
    job: "Data Scientist at TechCorp",
    course: "Data Science Bootcamp",
  },
  {
    quote:
      "The data science course was eye-opening. It helped me land a job in one of the top tech companies.",
    name: "Alex Johnson",
    job: "Data Scientist at TechCorp",
    course: "Data Science Bootcamp",
  },
  {
    quote:
      "The data science course was eye-opening. It helped me land a job in one of the top tech companies.",
    name: "Alex Johnson",
    job: "Data Scientist at TechCorp",
    course: "Data Science Bootcamp",
  },
];

function renderTestimonials() {
  const container = document.getElementById("testimonials-container");
  container.innerHTML = "";
  testimonials.forEach((testimonial) => {
    const testimonialCard = `
            <div class="bg-white p-6 rounded-lg shadow-lg w-80 flex-shrink-0">
                <p class="text-md italic h-24 overflow-hidden">"${testimonial.quote}"</p>
                <div class="mt-4 h-16">
                    <h4 class="font-bold">${testimonial.name}</h4>
                    <p class="text-gray-500">${testimonial.job}</p>
                </div>
                <hr>
                <div class="flex items-center text-blue-500 cursor-pointer h-12">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 9.293a1 1 0 011.414 0L10 13.586l4.293-4.293a1 1 0 111.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                    <span>${testimonial.course}</span>
                </div>
            </div>
        `;
    container.innerHTML += testimonialCard;
  });
}

renderTestimonials();
