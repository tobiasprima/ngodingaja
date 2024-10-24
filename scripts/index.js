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
    title: "JavaScript Essentials",
    instructor: "Alice Johnson",
    rating: 4.7,
    reviews: 4521,
    price: 120000,
    originalPrice: 180000,
    bestseller: true,
    image: "assets/javascriptcourse.jpeg",
  },
  {
    title: "Python for Data Science",
    instructor: "Mark Lee",
    rating: 4.8,
    reviews: 9123,
    price: 220000,
    originalPrice: 280000,
    bestseller: true,
    image: "assets/python-data-science.jpeg",
  },
  {
    title: "React Native Bootcamp",
    instructor: "Sarah Williams",
    rating: 4.6,
    reviews: 3218,
    price: 140000,
    originalPrice: 190000,
    bestseller: false,
    image: "assets/react-native-bootcamp.jpeg",
  },
  {
    title: "Complete Web Development",
    instructor: "John Doe",
    rating: 4.9,
    reviews: 15487,
    price: 250000,
    originalPrice: 350000,
    bestseller: true,
    image: "assets/web-development.png",
  },
  {
    title: "Machine Learning with TensorFlow",
    instructor: "David Brown",
    rating: 4.8,
    reviews: 6712,
    price: 300000,
    originalPrice: 400000,
    bestseller: false,
    image: "assets/ml-tensorflow.jpeg",
  },
  {
    title: "Advanced CSS and Sass",
    instructor: "Emily Green",
    rating: 4.5,
    reviews: 2893,
    price: 100000,
    originalPrice: 160000,
    bestseller: false,
    image: "assets/css-sass.jpeg",
  },
  {
    title: "AWS Cloud Practitioner",
    instructor: "Michael Smith",
    rating: 4.9,
    reviews: 5421,
    price: 210000,
    originalPrice: 270000,
    bestseller: true,
    image: "assets/aws-cloud-practitioner.png",
  },
  {
    title: "Docker for DevOps",
    instructor: "Chris Evans",
    rating: 4.7,
    reviews: 3671,
    price: 150000,
    originalPrice: 200000,
    bestseller: false,
    image: "assets/docker-devops.jpeg",
  },
  {
    title: "Flutter App Development",
    instructor: "Jane Watson",
    rating: 4.8,
    reviews: 2987,
    price: 180000,
    originalPrice: 240000,
    bestseller: false,
    image: "assets/flutter-app.jpeg",
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
    }" class="w-full h-28 object-cover rounded-lg">
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

const testimonials = [
  {
    quote:
      "Ngoding Aja provided me with the confidence to transition into tech. Their course on web development was structured perfectly, and now I'm building amazing web apps!",
    name: "Michael Brown",
    job: "Frontend Developer at Creative Tech",
    course: "Complete Web Development Bootcamp",
  },
  {
    quote:
      "The JavaScript course at Ngoding Aja helped me land my first freelancing job. The practical projects were exactly what I needed to build a solid portfolio.",
    name: "Emily Davis",
    job: "Freelance Web Developer",
    course: "JavaScript Mastery Course",
  },
  {
    quote:
      "I never imagined that I'd be a data scientist, but Ngoding Aja's Data Science Bootcamp made it possible. Now, I'm solving real-world problems using data!",
    name: "Daniel Green",
    job: "Data Scientist at DataWorks",
    course: "Data Science Bootcamp",
  },
  {
    quote:
      "The AWS Cloud course opened up new doors for me in cloud computing. I now work as a cloud engineer, thanks to the hands-on labs and real-world scenarios.",
    name: "Sophia Moore",
    job: "Cloud Engineer at CloudTech Solutions",
    course: "AWS Cloud Practitioner Course",
  },
  {
    quote:
      "Learning to build mobile apps through Ngoding Aja's Flutter course was a game changer for my career. I now develop apps that make a difference.",
    name: "Chris Evans",
    job: "Mobile Developer at Appify",
    course: "Flutter App Development",
  },
  {
    quote:
      "The React Native Bootcamp made mobile app development seem effortless. I use React Native at my current job to build cross-platform applications.",
    name: "Linda White",
    job: "Mobile Developer at CrossTech",
    course: "React Native Bootcamp",
  },
  {
    quote:
      "The courses offered by Ngoding Aja are thorough and practical. I learned Docker and DevOps skills that have been invaluable in my new role.",
    name: "Jason Turner",
    job: "DevOps Engineer at ScaleUp Systems",
    course: "Docker for DevOps",
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
                    <p class="text-gray-500 text-sm">${testimonial.job}</p>
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
