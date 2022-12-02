//Navigation Buttons
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

const image = document.querySelector('.content-image'); //Profile Image
const fullName = document.querySelector('.name'); //Your Name
const nickname = document.querySelector('.nickname'); //Your Name
const description = document.querySelector('.description'); //Your description
const technologies = document.querySelector('.skills>ul'); //Your technologies


const profiles = [
    {
        name: "Christian Nwamba", 
        nickname: "codebeast", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim nunc sit amet interdum lacinia. Curabitur ultricies dolor nibh, eget pulvinar ex efficitur sed.", 
        image: "./assets/codebeast.jpg", 
        technologies: ['Android Dev', 'Java', 'Git', 'Express Js']
    },
    {
        name: "Edozie Onyeanusi", 
        nickname: "Edozie", 
        description: "nunc sit amet interdum lacinia. Curabitur ultricies dolor nibh, eget pulvinar ex efficitur sed. Curabitur et luctus risus. Vestibulum tincidunt luctus arcu, ac congue", 
        image: "./assets/screenshot.png", 
        technologies: ['Web Dev', 'UI/UX Designs', 'Community Management']},
    {
        name: "Tochi Agbo", 
        nickname: "To-Baby", 
        description: "nunc sit amet interdum lacinia. Curabitur et luctus risus. Vestibulum tincidunt luctus arcu, ac congue", 
        image: "./assets/screenshot.png", 
        technologies: ['UX Writing', 'Web Dev', ]},
    {
        name: "Antony Elanga", 
        nickname: "Anton", 
        description: "nunc sit amet interdum lacinia. Curabitur ultricies dolor nibh, eget pulvinar ex efficitur sed.", 
        image: "./assets/screenshot.png", 
        technologies: ['Android Dev', 'Java', 'Git', 'Express Js', 'Jiu Jitsu']
    }
]

let currentProfile = 0;

//General Function to display
const displayProfile = () => {
    image.src = profiles[currentProfile].image;
    fullName.textContent = profiles[currentProfile].name;
    nickname.textContent = profiles[currentProfile].nickname;
    description.textContent = profiles[currentProfile].description;

    profiles[currentProfile].technologies.forEach((stack) => {
        let technology = document.createElement('li');
        technologies.appendChild(technology);
        technology.innerHTML = stack;
        
    })
}

//Function that display profile on load
window.addEventListener('DOMContentLoaded', (e) => {
    displayProfile();

    e.preventDefault();
})


prevButton.addEventListener('click', (e) => {
    currentProfile--
    if(currentProfile < 0){
        currentProfile = profiles.length - 1
    }
    displayProfile(currentProfile)

    e.preventDefault();
})

nextButton.addEventListener('click', (e) => {
    currentProfile++;
    if(currentProfile > profiles.length - 1){
        currentProfile = 0
    }
    displayProfile(currentProfile)

    e.preventDefault();
})