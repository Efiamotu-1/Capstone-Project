const speakers = document.getElementById('speakers');
const speakerData = [
  {
    name: 'Habeeb Efiamotu Musa',
    role: 'Fullstack web developer',
    description: 'Microverse',
    image: '../images/profile-img.jpg',
  },

  {
    name: 'Mark Zuckerberg',
    role: 'Enterpreneur',
    description: 'Co-founder of facebook and its parent company Meta Platforms',
    image: '../images/mark-zuck.jpeg',
  },

  {
    name: 'Billy Gilmour',
    role: 'Midfielder',
    description: 'Footballer for Chelsea Football Club, London, England',
    image: '../images/gilmour.jpeg',
  },

  {
    name: 'Ernie Williams',
    role: 'Enterpreneur',
    description: 'Founder. New Horizon',
    image: '../images/profile.jpg',
  },

];

speakers.innerHTML = speakerData.map((speak) => (
  `
    <li class="single-speaker">
    <div class="photo">
        <div class="pattern">
            <img src="${speak.image}" class="speakers-img" alt="">
        </div>
    </div>
    <div class="info">
        <h3>${speak.name}</h3>
        <h4>${speak.role}</h4>
        <hr>
        <p>${speak.description}</p>
    </div>
</li>
    `
)).join('');
