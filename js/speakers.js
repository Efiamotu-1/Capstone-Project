// const seeMore = document.getElementById('see-more-speakers');
const speakers = document.getElementById('speakers');
const speakerData = [
  {
    name: 'Caleb McCornick',
    role: 'Enterpreneur',
    description: 'co-founder. Laundraumat Enterprise',
    image: '../images/profile.jpg',
  },

  {
    name: 'Billy Gilmour',
    role: 'Footballer',
    description: 'Chelsea Football Club',
    image: '../images/profile.jpg',
  },

  {
    name: 'James Ruppert',
    role: 'Enterpreneur',
    description: 'Founder. New Horizon',
    image: '../images/profile.jpg',
  },

  {
    name: 'Alex Runnarsson',
    role: 'Teacher',
    description: 'Berkley school of Music',
    image: '../images/profile.jpg',
  },
];

speakers.innerHTML = speakerData.map((speak) => (
  `
    <li class="single-speaker">
    <div class="photo">
        <div class="pattern">
            <img src="${speak.image}" width="100px" alt="">
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
