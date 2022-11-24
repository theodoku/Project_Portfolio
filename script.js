const nav = document.getElementById('nav');
const body = document.getElementById('body');
const pcard = document.getElementById('portfolio');
const modal = document.getElementById('modal');
const title = document.getElementById('text_modal');
const image = document.getElementById('modal-im');
const longDes = document.getElementById('des');
const live = document.getElementById('live');
const source = document.getElementById('source');
const form = document.getElementById('form');
const email = document.getElementById('email');
const error = document.getElementById('error');
const fname = document.getElementById('fname');
const message = document.getElementById('msg');

const cards = [
  {
    title: 'Tonic',
    image: 'images 1/cardImg1.png',
    longDes:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    live: 'https://www.loom.com/share/8376b614e101498fab1d5ee64023e977',
    shortDes:
      'A daily selection of privately personalized reads; no accounts or sign- ups required.',
    source: 'https://github.com/theodoku/Project_Portfolio',
    languages: ['html', 'javascript', 'css'],
    roles: ['Canopy', 'Back End Dev', 2015],
  },
  {
    title: 'Multi-Post Stories',
    image: 'images 1/cardImg2.png',
    longDes:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    live: 'https://www.loom.com/share/8376b614e101498fab1d5ee64023e977',
    shortDes:
      'A daily selection of privately personalized reads; no accounts or sign- ups required.',
    source: 'https://github.com/theodoku/Project_Portfolio',
    languages: ['html', 'javascript', 'css'],
    roles: ['Canopy', 'Back End Dev', 2015],
  },
  {
    title: 'Tonic',
    image: 'images 1/cardImg3.png',
    longDes:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    live: 'https://www.loom.com/share/8376b614e101498fab1d5ee64023e977',
    shortDes:
      'A daily selection of privately personalized reads; no accounts or sign- ups required.',
    source: 'https://github.com/theodoku/Project_Portfolio',
    languages: ['html', 'javascript', 'css'],
    roles: ['Canopy', 'Back End Dev', 2015],
  },
  {
    title: 'Multi-Post Stories',
    image: 'images 1/cardImg4.png',
    longDes:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent',
    live: 'https://www.loom.com/share/8376b614e101498fab1d5ee64023e977',
    shortDes:
      'A daily selection of privately personalized reads; no accounts or sign- ups required.',
    source: 'https://github.com/theodoku/Project_Portfolio',
    languages: ['html', 'javascript', 'css'],
    roles: ['Canopy', 'Back End Dev', 2015],
  },
];

function openMobileMenu() {
  nav.style.display = 'block';
}

function closeMobileMenu() {
  nav.style.display = 'none';
}

openMobileMenu();
closeMobileMenu();

function getFormData() {
  const formData = {
    fname: fname.value,
    message: message.value,
    email: email.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
}

function persistData() {
  const fetchData = localStorage.getItem('formData');
  if (!fetchData) {
    getFormData();
  } else {
    JSON.parse(fetchData);
    fname.setAttribute('value', fetchData.fname);
    email.setAttribute('value', fetchData.email);
    message.textContent = fetchData.message;
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (email.value !== email.value.toLowerCase()) {
    error.textContent = 'Please the content of the email field has to be in lower case.';
  } else {
    error.textContent = '';
    persistData();
    form.submit();
  }
});

fname.addEventListener('change', getFormData);
email.addEventListener('change', getFormData);
message.addEventListener('change', getFormData);

// eslint-disable-next-line no-return-assign
cards.map((card, index) => pcard.innerHTML += `<div class="container1"><div class="Card_rev">
            <div class="project-imag 1">
              <img
                src="${card.image}"
                class="Portfolio-pic1"
                alt="card picture with an image"
              />
            </div>
            <div class="card-title">
              <h2 id="project_name1">${card.title}</h2>
            </div>
            <div class="project-title1">
              <ul class="ul_description">
              ${card.roles.map((role, idx) => ` <li class="title_name">${role}</li>
                <li class="counter"><img src="images 1/Counter (1).png" id="dot-${idx}" /></li>`).join('')}
              </ul>
            </div>
            <p id="sign-up1">
              ${card.shortDes}
            </p>
            <ul class="Prog_languages">
              ${card.languages.map((lang) => `<li id="tag1">${lang}</li>`).join('')}
            </ul>
            <div class="View_project1">
              <a href="javascript:openModal(${index})" id="view1">See Project</a>
            </div>
          </div>
        </div>
        </div>
      `);

const openModal = (index) => {
  title.innerHTML = cards[index].title;
  image.src = cards[index].image;
  longDes.innerHTML = cards[index].longDes;
  live.href = cards[index].live;
  source.href = cards[index].source;
  modal.style.display = 'block';
  body.style.overflow = 'hidden';
};

const closeModal = () => {
  modal.style.display = 'none';
  body.style.overflow = 'auto';
};

openModal();
closeModal();