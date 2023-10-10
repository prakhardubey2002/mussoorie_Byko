var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});
document.addEventListener('DOMContentLoaded', function () {
  const filterButtons = document.querySelectorAll('.filter-button');
  const filteredData = document.querySelectorAll('.filtered-data div');

  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      const category = this.getAttribute('data-filter');
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      filterData(category);
    });
  });

  function filterData(category) {
    filteredData.forEach(item => {
      const dataCategory = item.getAttribute('data-category');
      if (category === 'all' || category === dataCategory) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  }

  // Initially show the "Description" content
  filterData('option1');
});
var countDownDate = new Date("Oct 10, 2023 00:00:00").getTime();
// Update the count down every 1 second
var current = new Date().getTime();

if (current == countDownDate || current > countDownDate) {
  document.getElementById("counterbox").style.display = "none";
  console.log(`Date : ${countDownDate} and current : ${current}`)
} else {
  console.log("None")
  console.log(`Date : ${countDownDate} and current : ${current}`)
}
var x = setInterval(function () {

  // Get the current time
  var now = new Date().getTime();

  // Find the distance between current time and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the corresponding elements
  document.getElementById("days").innerHTML = days < 10 ? '0' + `${days}  : ` : `${days}  : `;
  document.getElementById("hours").innerHTML = hours < 10 ? '0' + `${hours} : ` : `${hours} : `;
  document.getElementById("minutes").innerHTML = minutes < 10 ? '0' + `${minutes} : ` : `${minutes} : `;
  document.getElementById("seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds;


  // If the count down is finished display Happy New Year text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("title").innerHTML = " <p>Discount Ended</p>";
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);



// const imageContainer = document.querySelector('.image-container');
// const popupImage = document.getElementById('popup-image');

// // Function to check if an element is in the viewport
// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//       );
//     }
    
//     // Function to handle the animation when the target section is in the viewport
//     function animateImage() {
//       if (isInViewport(imageContainer)) {
//         imageContainer.style.transform = 'scale(1)'; // Scale the image to 100%
//         popupImage.classList.add('animate__bounceIn');
//         debugger
//         window.removeEventListener('scroll', animateImage); // Remove the scroll event listener once animation is triggered
//     }
// }

// // Function to debounce the scroll event
// function debounce(func, wait) {
//     let timeout;
//     return function () {
//         const context = this;
//         const args = arguments;
//         clearTimeout(timeout);
//         timeout = setTimeout(() => {
//             func.apply(context, args);
//         }, wait);
//     };
// }

// // Attach a debounced scroll event listener to trigger the animation
// window.addEventListener('scroll', debounce(animateImage, 100));

