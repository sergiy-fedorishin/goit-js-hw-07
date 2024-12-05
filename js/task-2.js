const gallery = document.querySelector('.gallery');
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
    alt: 'Біло-чорний довгошерстий кіт',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
    alt: 'Помаранчевий та білий короп біля жовтого коропа',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
    alt: 'Група коней біжить',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    alt: 'Альпійські весняні луки',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    alt: 'Природний ландшафт',
  },
  {
    url: 'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    alt: 'Маяк, узбережжя, море',
  },
];

const imageElements = images.map(image => {
  const img = document.createElement('img');
  img.src = image.url;
  img.alt = image.alt;
  return img;
});

gallery.insertAdjacentHTML('beforeend', '<li></li>');
const galleryList = gallery.querySelector('li');
galleryList.append(...imageElements);
console.log(galleryList);
