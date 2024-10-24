document.addEventListener("DOMContentLoaded", () => {
  loadCategory("Web Development");
  loadCourses("Most Popular");
});

function closeAd() {
  const adBar = document.getElementById("ad-bar");
  adBar.classList.add("hidden");
}
const courseData = {
  "Web Development": [
    {
      title: "JavaScript Basics",
      instructor: "John Doe",
      rating: 4.8,
      reviews: 200,
      price: 160000,
      originalPrice: 200000,
      image: "webdev-course1.jpg",
      isPopular: true,
      isNew: false,
      isTrending: true,
    },
    {
      title: "React Mastery",
      instructor: "Jane Smith",
      rating: 4.7,
      reviews: 300,
      price: 180000,
      originalPrice: 250000,
      image: "webdev-course2.jpg",
      isPopular: true,
      isNew: true,
      isTrending: false,
    },
    {
      title: "HTML & CSS Fundamentals",
      instructor: "Alice Brown",
      rating: 4.9,
      reviews: 450,
      price: 170000,
      originalPrice: 220000,
      image: "webdev-course3.jpg",
      isPopular: true,
      isNew: false,
      isTrending: true,
    },
    {
      title: "Node.js for Beginners",
      instructor: "David White",
      rating: 4.8,
      reviews: 350,
      price: 190000,
      originalPrice: 270000,
      image: "webdev-course4.jpg",
      isPopular: true,
      isNew: true,
      isTrending: true,
    },
    {
      title: "Advanced CSS Techniques",
      instructor: "Karen Black",
      rating: 4.6,
      reviews: 320,
      price: 150000,
      originalPrice: 210000,
      image: "webdev-course5.jpg",
      isPopular: true,
      isNew: false,
      isTrending: false,
    },
  ],
  "Data Science": [
    {
      title: "Python for Data Science",
      instructor: "Alice Johnson",
      rating: 4.9,
      reviews: 500,
      price: 200000,
      originalPrice: 280000,
      image: "datasci-course1.jpg",
      isPopular: true,
      isNew: false,
      isTrending: true,
    },
    {
      title: "Machine Learning 101",
      instructor: "Mark Lee",
      rating: 4.8,
      reviews: 350,
      price: 210000,
      originalPrice: 290000,
      image: "datasci-course2.jpg",
      isPopular: true,
      isNew: true,
      isTrending: true,
    },
    {
      title: "Deep Learning with TensorFlow",
      instructor: "Sara Clark",
      rating: 4.9,
      reviews: 450,
      price: 220000,
      originalPrice: 300000,
      image: "datasci-course3.jpg",
      isPopular: true,
      isNew: true,
      isTrending: false,
    },
    {
      title: "Data Visualization with Python",
      instructor: "Robert Green",
      rating: 4.7,
      reviews: 300,
      price: 190000,
      originalPrice: 250000,
      image: "datasci-course4.jpg",
      isPopular: true,
      isNew: false,
      isTrending: true,
    },
    {
      title: "Statistics for Data Science",
      instructor: "Emily White",
      rating: 4.6,
      reviews: 280,
      price: 180000,
      originalPrice: 240000,
      image: "datasci-course5.jpg",
      isPopular: true,
      isNew: false,
      isTrending: false,
    },
  ],
  "Mobile Development": [
    {
      title: "Flutter for Beginners",
      instructor: "Susan Lee",
      rating: 4.7,
      reviews: 250,
      price: 150000,
      originalPrice: 220000,
      image: "mobiledev-course1.jpg",
      isPopular: true,
      isNew: true,
      isTrending: false,
    },
    {
      title: "Kotlin Masterclass",
      instructor: "David Kim",
      rating: 4.6,
      reviews: 400,
      price: 170000,
      originalPrice: 240000,
      image: "mobiledev-course2.jpg",
      isPopular: true,
      isNew: false,
      isTrending: true,
    },
    {
      title: "Swift for iOS Development",
      instructor: "Michael Johnson",
      rating: 4.8,
      reviews: 350,
      price: 180000,
      originalPrice: 250000,
      image: "mobiledev-course3.jpg",
      isPopular: true,
      isNew: true,
      isTrending: true,
    },
    {
      title: "React Native Basics",
      instructor: "Linda Brown",
      rating: 4.7,
      reviews: 270,
      price: 160000,
      originalPrice: 220000,
      image: "mobiledev-course4.jpg",
      isPopular: true,
      isNew: false,
      isTrending: true,
    },
    {
      title: "Advanced Android Development",
      instructor: "Chris Green",
      rating: 4.9,
      reviews: 500,
      price: 210000,
      originalPrice: 290000,
      image: "mobiledev-course5.jpg",
      isPopular: true,
      isNew: false,
      isTrending: true,
    },
  ],
  DevOps: [
    {
      title: "DevOps Essentials",
      instructor: "James White",
      rating: 4.9,
      reviews: 600,
      price: 220000,
      originalPrice: 300000,
      image: "devops-course1.jpg",
      isPopular: true,
      isNew: false,
      isTrending: true,
    },
    {
      title: "AWS for DevOps",
      instructor: "Chris Brown",
      rating: 4.7,
      reviews: 450,
      price: 210000,
      originalPrice: 280000,
      image: "devops-course2.jpg",
      isPopular: true,
      isNew: true,
      isTrending: false,
    },
    {
      title: "Kubernetes Mastery",
      instructor: "Patricia Moore",
      rating: 4.8,
      reviews: 400,
      price: 230000,
      originalPrice: 320000,
      image: "devops-course3.jpg",
      isPopular: true,
      isNew: false,
      isTrending: true,
    },
    {
      title: "Docker for DevOps",
      instructor: "Steven Black",
      rating: 4.6,
      reviews: 350,
      price: 200000,
      originalPrice: 270000,
      image: "devops-course4.jpg",
      isPopular: true,
      isNew: true,
      isTrending: false,
    },
    {
      title: "CI/CD Pipeline with Jenkins",
      instructor: "Kelly Green",
      rating: 4.7,
      reviews: 500,
      price: 240000,
      originalPrice: 320000,
      image: "devops-course5.jpg",
      isPopular: true,
      isNew: true,
      isTrending: true,
    },
  ],
};

let activeCategory = "Web Development";
let activeFilter = "Most Popular";
function loadCategory(category) {
  activeCategory = category;
  document.getElementById("category-title").textContent = `${category} Courses`;
  loadCourses("Most Popular");

  const primaryTabs = document.querySelectorAll(".tab");
  primaryTabs.forEach((tab) => {
    tab.classList.remove("tab-active");
    tab.classList.add("tab-inactive");
  });

  const activePrimaryTab = document.querySelector(
    `button[onclick="loadCategory('${category}')"]`
  );
  activePrimaryTab.classList.add("tab-active");
}

function loadCourses(filter) {
  activeFilter = filter;
  const container = document.getElementById("courses-section");
  container.innerHTML = "";

  const selectedCourses = courseData[activeCategory] || [];

  const filteredCourses = selectedCourses.filter((course) => {
    if (filter === "Most Popular") {
      return course.isPopular;
    } else if (filter === "New") {
      return course.isNew;
    } else if (filter === "Trending") {
      return course.isTrending;
    }
    return true;
  });

  filteredCourses.forEach((course) => {
    const courseCard = `
             <div class="course-card bg-white p-4 rounded-lg shadow-lg relative">
    <img src="cart-icon.png" alt="Add to Cart" onclick="addToCart('${
      course.title
    }', ${course.price}, '${course.image}', '${course.instructor}', ${
      course.rating
    }, ${course.reviews}, ${
      course.originalPrice
    }, this)" class="add-to-cart-icon absolute top-2 right-2">
    <div>
      <img src="${course.image}" alt="${
      course.title
    }" class="w-full h-40 object-cover rounded-lg">
      <h4 class="text-lg font-bold mt-2">${course.title}</h4>
    </div>
    <div class="mt-4">
      <p class="text-sm text-gray-500">${course.instructor}</p>
      <div class="flex items-center mt-2">
        <span class="text-yellow-500 font-bold text-sm">${course.rating}</span>
        <span class="ml-2 text-xs text-yellow-500">⭐⭐⭐⭐⭐</span>
        <span class="ml-2 text-xs text-gray-500">(${course.reviews})</span>
      </div>
      <div class="flex items-center justify-between mt-2">
        <h5 class="text-base font-bold">Rp ${course.price.toLocaleString()}</h5>
        <span class="line-through text-sm text-gray-500">Rp ${course.originalPrice.toLocaleString()}</span>
      </div>
    </div>
  </div>
        `;
    container.innerHTML += courseCard;
  });

  const secondaryTabs = document.querySelectorAll(".secondary-tab");
  secondaryTabs.forEach((tab) => {
    tab.classList.remove("secondary-tab-active");
    tab.classList.add("secondary-tab-inactive");
  });

  const activeSecondaryTab = document.querySelector(
    `button[onclick="loadCourses('${filter}')"]`
  );
  activeSecondaryTab.classList.add("secondary-tab-active");
}

function addToCart(
  title,
  price,
  image,
  instructor,
  rating,
  reviews,
  originalPrice,
  element
) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingCourse = cart.find((course) => course.title === title);

  if (existingCourse) {
    alert(`${title} is already in your cart!`);
  } else {
    const newCourse = {
      title,
      price,
      image,
      instructor,
      rating,
      reviews,
      originalPrice,
    };
    cart.push(newCourse);
    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${title} has been added to your cart!`);

    element.style.display = "none";
  }
}
