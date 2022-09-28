const speakers = document.getElementById('speakers');
const speakerData = [
  {
    name: 'Habeeb Efiamotu Musa',
    role: 'Student, University of Lagos, Nigeria',
    description: '400 Level Law student with keen interest in solving global issues around the world.',
    image: './images/profile-img.jpg',
  },

  {
    name: 'Mark Steinsein',
    role: 'Student, University of Benin republic, Cotonou',
    description: 'Final year Accounting student with interest in solving global issues around the world',
    image: './images/profile.jpg',
  },

  {
    name: 'Billy Gilmour',
    role: 'Student, University of Ghana, Legwon',
    description: 'Second year Mass Communication student with keen interest in solving global issues around the world',
    image: './images/speakers/ryan.jpg',
  },

  {
    name: 'Ernie Williams',
    role: 'Student, University of Pretoria, South Africa',
    description: 'First year Law student with keen interest in solving global issues around the world',
    image: './images/speakers/jordan.jpg',
  },

  {
    name: 'rauch',
    role: 'Student, University of California, Usa',
    description: 'Fourth year Law student with keen interest in solving global issues around the world',
    image: './images/speakers/rauch.png',
  },

  {
    name: 'Isaac',
    role: 'Student, University of columbia, Usa',
    description: 'First year medical student with keen interest in solving global issues around the world',
    image: './images/speakers/isaac.jpg',
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

if (speakerData.length >= 2) {
  const speakersList = document.querySelectorAll('.single-speaker');
  const speakersListArray = Array.from(speakersList);
  const slicedSpeakers = speakersListArray.splice(2);
  slicedSpeakers.forEach((speaker) => {
    speaker.classList.add('d-none-speaker');
  });
}

const show = document.querySelector('.show-more');
show.addEventListener('click', () => {
  const speakersList = document.querySelectorAll('.single-speaker');
  const speakersListArray = Array.from(speakersList);
  const slicedSpeakers = speakersListArray.splice(2);
  slicedSpeakers.forEach((speaker) => {
    speaker.classList.remove('d-none-speaker');
    show.style.display = 'none';
  });
});
