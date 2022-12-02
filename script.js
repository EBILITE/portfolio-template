//Navigation Buttons
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

const image = document.querySelector(".content-image"); //Profile Image
const fullName = document.querySelector(".name"); //Your Name
const nickname = document.querySelector(".nickname"); //Your Name
const description = document.querySelector(".description"); //Your description
const technologies = document.querySelector(".skills>ul"); //Your technologies

const profiles = [
  {
    name: "Christian Nwamba",
    nickname: "codebeast",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat. Aenean dignissim nunc sit amet interdum lacinia. Curabitur ultricies dolor nibh, eget pulvinar ex efficitur sed.",
    image: "./assets/codebeast.jpg",
    stacks: [
      "Android Dev",
      "Javascript",
      "Git",
      "Express Js",
      "Developr Relations",
    ],
  },
  {
    name: "Edozie Onyeanusi",
    nickname: "Yeagerist",
    description:
      "nunc sit amet interdum lacinia. Curabitur ultricies dolor nibh, eget pulvinar ex efficitur sed. Curabitur et luctus risus. Vestibulum tincidunt luctus arcu, ac congue. Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
    image: "./assets/edozie-onye.webp",
    stacks: ["Web Development", "UI/UX Design", "Community Management"],
  },
  {
    name: "Olga Anton",
    nickname: "Ace Scribe",
    description:
      "Nunc sit amet interdum lacinia. Curabitur et luctus risus. Vestibulum tincidunt luctus arcu, ac congue, curabitur et luctus risus. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    image: "./assets/olga-anton.jpeg",
    stacks: ["UX Writing", "Product Design", "Web Development"],
  },
  {
    name: "Ebilite Uche",
    nickname: "Uche",
    description:
      "Nunc sit amet interdum lacinia. Curabitur et luctus risus. Vestibulum tincidunt luctus arcu, ac congue, curabitur et luctus risus. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    image: "./assets/olga-anton.jpeg",
    stacks: ["Developer", "App Testing", "Magnamamoo"],
  },
  {
    name: "Uche Man",
    nickname: "Uche",
    description:
      "Nunc sit amet interdum lacinia. Curabitur et luctus risus. Vestibulum tincidunt luctus arcu, ac congue, curabitur et luctus risus. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
    image: "./assets/olga-anton.jpeg",
    stacks: ["Developer", "App Testing", "Magnamamoo"],
  },
];

let currentProfile = 0;

//General Function to display
const displayProfile = () => {
  image.src = profiles[currentProfile].image;
  fullName.textContent = profiles[currentProfile].name;
  nickname.textContent = profiles[currentProfile].nickname;
  description.textContent = profiles[currentProfile].description;

  let child = technologies.lastElementChild;
  while (child) {
    technologies.removeChild(child);
    child = technologies.lastElementChild;
  }

  profiles[currentProfile].stacks.forEach((stack) => {
    let technology = document.createElement("li");
    technologies.appendChild(technology);
    technology.textContent = stack;
  });
};

//Function that display profile on load
window.addEventListener("DOMContentLoaded", (e) => {
  displayProfile();

  e.preventDefault();
});

//Button for previous profile
prevButton.addEventListener("click", (e) => {
  currentProfile--;
  if (currentProfile < 0) {
    currentProfile = profiles.length - 1;
  }
  displayProfile(currentProfile);

  e.preventDefault();
});

//Button for next profile
nextButton.addEventListener("click", (e) => {
  currentProfile++;
  if (currentProfile > profiles.length - 1) {
    currentProfile = 0;
  }
  displayProfile(currentProfile);

  e.preventDefault();
});
