import "../style.css"

const cardsData = [
  {
    num: '1',
    name: 'Большой шар с рисунком',
    imgUrl: require('./assets/toys/1.png'),
    count: '2',
    year: '1960',
    shape: 'шар',
    color: 'желтый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '2',
    name: 'Зелёный шар с цветами',
    imgUrl: require('./assets/toys/2.png'),
    count: '5',
    year: '2000',
    shape: 'шар',
    color: 'зелёный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '3',
    name: 'Красный матовый шар',
    imgUrl: require('./assets/toys/3.png'),
    count: '3',
    year: '1990',
    shape: 'шар',
    color: 'красный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '4',
    name: 'Сосулька красная',
    imgUrl: require('./assets/toys/4.png'),
    count: '2',
    year: '1980',
    shape: 'фигурка',
    color: 'красный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '5',
    name: 'Красный виноград',
    imgUrl: require('./assets/toys/5.png'),
    count: '4',
    year: '1980',
    shape: 'фигурка',
    color: 'красный',
    size: 'средний',
    favorite: true,
  },
  {
    num: '6',
    name: 'Красный шар с рисунком',
    imgUrl: require('./assets/toys/6.png'),
    count: '6',
    year: '2010',
    shape: 'шар',
    color: 'красный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '7',
    name: 'Молочно-белый шар',
    imgUrl: require('./assets/toys/7.png'),
    count: '12',
    year: '1960',
    shape: 'шар',
    color: 'белый',
    size: 'средний',
    favorite: true,
  },
  {
    num: '8',
    name: 'Красный шар',
    imgUrl: require('./assets/toys/8.png'),
    count: '10',
    year: '2010',
    shape: 'шар',
    color: 'красный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '9',
    name: 'Колокольчик старинный',
    imgUrl: require('./assets/toys/9.png'),
    count: '2',
    year: '1950',
    shape: 'колокольчик',
    color: 'белый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '10',
    name: 'Белый шар ретро',
    imgUrl: require('./assets/toys/10.png'),
    count: '7',
    year: '1960',
    shape: 'шар',
    color: 'белый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '11',
    name: 'Шишка еловая белая',
    imgUrl: require('./assets/toys/11.png'),
    count: '11',
    year: '1960',
    shape: 'шишка',
    color: 'белый',
    size: 'малый',
    favorite: false,
  },
  {
    num: '12',
    name: 'Белый шар с цветами',
    imgUrl: require('./assets/toys/12.png'),
    count: '5',
    year: '1980',
    shape: 'шар',
    color: 'белый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '13',
    name: 'Шар расписной Река',
    imgUrl: require('./assets/toys/13.png'),
    count: '3',
    year: '1970',
    shape: 'шар',
    color: 'синий',
    size: 'большой',
    favorite: true,
  },
  {
    num: '14',
    name: 'Шар расписной Деревня',
    imgUrl: require('./assets/toys/14.png'),
    count: '4',
    year: '1970',
    shape: 'шар',
    color: 'синий',
    size: 'большой',
    favorite: true,
  },
  {
    num: '15',
    name: 'Колокольчик расписной',
    imgUrl: require('./assets/toys/15.png'),
    count: '3',
    year: '1970',
    shape: 'колокольчик',
    color: 'синий',
    size: 'средний',
    favorite: false,
  },
  {
    num: '16',
    name: 'Шишка расписная Пейзаж',
    imgUrl: require('./assets/toys/16.png'),
    count: '3',
    year: '1970',
    shape: 'шишка',
    color: 'синий',
    size: 'средний',
    favorite: true,
  },
  {
    num: '17',
    name: 'Шишка расписная',
    imgUrl: require('./assets/toys/17.png'),
    count: '7',
    year: '1970',
    shape: 'шишка',
    color: 'красный',
    size: 'средний',
    favorite: false,
  },
  {
    num: '18',
    name: 'Желтый шар с бантом',
    imgUrl: require('./assets/toys/18.png'),
    count: '2',
    year: '2010',
    shape: 'шар',
    color: 'желтый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '19',
    name: 'Желтый шар с паетками',
    imgUrl: require('./assets/toys/19.png'),
    count: '12',
    year: '1980',
    shape: 'шар',
    color: 'желтый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '20',
    name: 'Красный шар с бантом',
    imgUrl: require('./assets/toys/20.png'),
    count: '8',
    year: '1950',
    shape: 'шар',
    color: 'красный',
    size: 'средний',
    favorite: true,
  },
  {
    num: '21',
    name: 'Красный шар с звёздами',
    imgUrl: require('./assets/toys/21.png'),
    count: '4',
    year: '1970',
    shape: 'шар',
    color: 'красный',
    size: 'большой',
    favorite: true,
  },
  {
    num: '22',
    name: 'Шишка еловая золотая',
    imgUrl: require('./assets/toys/22.png'),
    count: '11',
    year: '1990',
    shape: 'шишка',
    color: 'желтый',
    size: 'малый',
    favorite: false,
  },
  {
    num: '23',
    name: 'Колокольчик старинный',
    imgUrl: require('./assets/toys/23.png'),
    count: '9',
    year: '1950',
    shape: 'колокольчик',
    color: 'желтый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '24',
    name: 'Снежинка изящная',
    imgUrl: require('./assets/toys/24.png'),
    count: '1',
    year: '1940',
    shape: 'снежинка',
    color: 'белый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '25',
    name: 'Розовый шар с блёстками',
    imgUrl: require('./assets/toys/25.png'),
    count: '12',
    year: '2010',
    shape: 'шар',
    color: 'красный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '26',
    name: 'Рубиново-золотой шар',
    imgUrl: require('./assets/toys/26.png'),
    count: '8',
    year: '1960',
    shape: 'шар',
    color: 'желтый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '27',
    name: 'Красный шар с узором',
    imgUrl: require('./assets/toys/27.png'),
    count: '4',
    year: '2010',
    shape: 'шар',
    color: 'красный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '28',
    name: 'Бордовый шар с узором',
    imgUrl: require('./assets/toys/28.png'),
    count: '10',
    year: '2010',
    shape: 'шар',
    color: 'красный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '29',
    name: 'Старинный шар с цветами',
    imgUrl: require('./assets/toys/29.png'),
    count: '5',
    year: '1950',
    shape: 'шар',
    color: 'желтый',
    size: 'большой',
    favorite: true,
  },
  {
    num: '30',
    name: 'Старинный шар с узором',
    imgUrl: require('./assets/toys/30.png'),
    count: '8',
    year: '1950',
    shape: 'шар',
    color: 'желтый',
    size: 'большой',
    favorite: true,
  },
  {
    num: '31',
    name: 'Красный шар с блёстками',
    imgUrl: require('./assets/toys/31.png'),
    count: '8',
    year: '2010',
    shape: 'шар',
    color: 'красный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '32',
    name: 'Синий шар Вселенная',
    imgUrl: require('./assets/toys/32.png'),
    count: '11',
    year: '1970',
    shape: 'шар',
    color: 'синий',
    size: 'большой',
    favorite: false,
  },
  {
    num: '33',
    name: 'Синий шар со снежинкой',
    imgUrl: require('./assets/toys/33.png'),
    count: '6',
    year: '2010',
    shape: 'шар',
    color: 'синий',
    size: 'средний',
    favorite: false,
  },
  {
    num: '34',
    name: 'Зелёный  шар с узором',
    imgUrl: require('./assets/toys/34.png'),
    count: '8',
    year: '2010',
    shape: 'шар',
    color: 'зелёный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '35',
    name: 'Фигурка Лис в шарфе',
    imgUrl: require('./assets/toys/35.png'),
    count: '8',
    year: '1950',
    shape: 'фигурка',
    color: 'желтый',
    size: 'средний',
    favorite: true,
  },
  {
    num: '36',
    name: 'Сиреневый шар Метель',
    imgUrl: require('./assets/toys/36.png'),
    count: '1',
    year: '2000',
    shape: 'шар',
    color: 'синий',
    size: 'большой',
    favorite: false,
  },
  {
    num: '37',
    name: 'Зелёный  шар Метель',
    imgUrl: require('./assets/toys/37.png'),
    count: '6',
    year: '2000',
    shape: 'шар',
    color: 'зелёный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '38',
    name: 'Голубой  шар Метель',
    imgUrl: require('./assets/toys/38.png'),
    count: '6',
    year: '2000',
    shape: 'шар',
    color: 'синий',
    size: 'большой',
    favorite: false,
  },
  {
    num: '39',
    name: 'Красная снежинка',
    imgUrl: require('./assets/toys/39.png'),
    count: '6',
    year: '1990',
    shape: 'снежинка',
    color: 'красный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '40',
    name: 'Снежинка золотая',
    imgUrl: require('./assets/toys/40.png'),
    count: '12',
    year: '2020',
    shape: 'снежинка',
    color: 'желтый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '41',
    name: 'Снежинка арктическая',
    imgUrl: require('./assets/toys/41.png'),
    count: '11',
    year: '2020',
    shape: 'снежинка',
    color: 'белый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '42',
    name: 'Зелёный шар',
    imgUrl: require('./assets/toys/42.png'),
    count: '10',
    year: '1980',
    shape: 'шар',
    color: 'зелёный',
    size: 'средний',
    favorite: false,
  },
  {
    num: '43',
    name: 'Снежинка двухцветная',
    imgUrl: require('./assets/toys/43.png'),
    count: '6',
    year: '1960',
    shape: 'снежинка',
    color: 'красный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '44',
    name: 'Фигурка Ангела',
    imgUrl: require('./assets/toys/44.png'),
    count: '11',
    year: '1940',
    shape: 'фигурка',
    color: 'красный',
    size: 'средний',
    favorite: true,
  },
  {
    num: '45',
    name: 'Снежинка новогодняя',
    imgUrl: require('./assets/toys/45.png'),
    count: '1',
    year: '1980',
    shape: 'снежинка',
    color: 'белый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '46',
    name: 'Фигурка Мухомор',
    imgUrl: require('./assets/toys/46.png'),
    count: '10',
    year: '1950',
    shape: 'фигурка',
    color: 'красный',
    size: 'малый',
    favorite: false,
  },
  {
    num: '47',
    name: 'Фигурка Колодец',
    imgUrl: require('./assets/toys/47.png'),
    count: '6',
    year: '1950',
    shape: 'фигурка',
    color: 'красный',
    size: 'малый',
    favorite: false,
  },
  {
    num: '48',
    name: 'Желтый шар с бантом',
    imgUrl: require('./assets/toys/48.png'),
    count: '6',
    year: '1960',
    shape: 'шар',
    color: 'желтый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '49',
    name: 'Снежинка с бирюзой',
    imgUrl: require('./assets/toys/49.png'),
    count: '4',
    year: '1980',
    shape: 'снежинка',
    color: 'желтый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '50',
    name: 'Колокольчик большой',
    imgUrl: require('./assets/toys/50.png'),
    count: '3',
    year: '2020',
    shape: 'колокольчик',
    color: 'красный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '51',
    name: 'Шишка с изморозью',
    imgUrl: require('./assets/toys/51.png'),
    count: '12',
    year: '1970',
    shape: 'шишка',
    color: 'красный',
    size: 'малый',
    favorite: false,
  },
  {
    num: '52',
    name: 'Красный шар с надписью',
    imgUrl: require('./assets/toys/52.png'),
    count: '12',
    year: '1990',
    shape: 'шар',
    color: 'красный',
    size: 'большой',
    favorite: true,
  },
  {
    num: '53',
    name: 'Снежинка серебристая',
    imgUrl: require('./assets/toys/53.png'),
    count: '6',
    year: '2020',
    shape: 'снежинка',
    color: 'белый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '54',
    name: 'Зелёный шар с рисунком',
    imgUrl: require('./assets/toys/54.png'),
    count: '6',
    year: '2010',
    shape: 'шар',
    color: 'зелёный',
    size: 'большой',
    favorite: false,
  },
  {
    num: '55',
    name: 'Пряничный домик',
    imgUrl: require('./assets/toys/55.png'),
    count: '1',
    year: '1940',
    shape: 'фигурка',
    color: 'желтый',
    size: 'большой',
    favorite: false,
  },
  {
    num: '56',
    name: 'Пряничный теремок',
    imgUrl: require('./assets/toys/56.png'),
    count: '1',
    year: '1940',
    shape: 'фигурка',
    color: 'желтый',
    size: 'малый',
    favorite: false,
  },
  {
    num: '57',
    name: 'Пряничная избушка',
    imgUrl: require('./assets/toys/57.png'),
    count: '1',
    year: '1940',
    shape: 'фигурка',
    color: 'желтый',
    size: 'средний',
    favorite: false,
  },
  {
    num: '58',
    name: 'Фигурка белого медведя',
    imgUrl: require('./assets/toys/58.png'),
    count: '2',
    year: '1980',
    shape: 'фигурка',
    color: 'белый',
    size: 'средний',
    favorite: false,
  },
  {
    num: '59',
    name: 'Желтый шар с надписью',
    imgUrl: require('./assets/toys/59.png'),
    count: '10',
    year: '1990',
    shape: 'шар',
    color: 'желтый',
    size: 'средний',
    favorite: false,
  },
  {
    num: '60',
    name: 'Фигурка Голубь',
    imgUrl: require('./assets/toys/60.png'),
    count: '12',
    year: '1940',
    shape: 'фигурка',
    color: 'белый',
    size: 'средний',
    favorite: true,
  },
];


const makeElement = function (tagName: string, className: string, text: string = '') {
  let element = document.createElement(tagName);
  element.classList.add(className);
  element.textContent = text;

  return element;
};

const createCard = function (product: { num: string; name: string; count: string; year: string; shape: string; color: string; size: string; favorite: boolean; imgUrl: string}) {
  let listItem = makeElement('div', 'card');

  let num = makeElement('div', 'num');
  listItem.appendChild(num); 

  let title = makeElement('h3', 'name', product.name);
  listItem.appendChild(title);

  let picture  = makeElement('img', 'card_img') as HTMLImageElement;
  picture.src = product.imgUrl;
  picture.alt = product.name;
  listItem.appendChild(picture); 

  let count = makeElement('p', 'count', product.count);
  count.textContent = 'Количество: ' + product.count;
  listItem.appendChild(count);

  let year = makeElement('p', 'year', product.year);
  year.textContent = 'Год покупки: ' + product.year;
  listItem.appendChild(year);

  let shape = makeElement('p', 'shape', product.shape);
  shape.textContent = 'Форма: ' + product.shape;
  listItem.appendChild(shape);

  let color = makeElement('p', 'color', product.color);
  color.textContent = 'Цвет: ' + product.color;
  listItem.appendChild(color);

  let size = makeElement('p', 'size', product.size);
  size.textContent = 'Размер: ' + product.size;
  listItem.appendChild(size);

  let favorite = makeElement('p', 'favorite');
  if (product.favorite) {
    favorite.textContent = 'Любимая: да';
    /* favorite.classList.add('beloved'); */
  } else {
    favorite.textContent = 'Любимая: нет';
    /* favorite.classList.add('unloved'); */
  }
  
  listItem.appendChild(favorite);

  return listItem;
};

let cardList = document.querySelector('.cards');

if (cardList) {
for (let i = 0; i < cardsData.length; i++) {
  let cardItem = createCard(cardsData[i]);
  cardList.appendChild(cardItem);  
} 
}

let pageStart = document.querySelector('.page-start');  
let pageToys = document.querySelector('.page-toys_wrapper');
let pageTree = document.querySelector('.page-tree');
let pageStartSwitch = document.querySelector('.page-start_switch') as HTMLImageElement;    
let pageToysSwitch = document.querySelector('.page-toys_switch') as HTMLImageElement;
let pageTreeSwitsh = document.querySelector('.page-tree_switch') as HTMLImageElement;
    if (pageToysSwitch) {pageToysSwitch.onclick = function () {
      pageTree?.classList.add('hidden');
      pageStart?.classList.add('hidden');
      pageToys?.classList.remove('hidden');
    }
  } 
    if (pageTreeSwitsh) {pageTreeSwitsh.onclick = function () {
      pageToys?.classList.add('hidden');
      pageStart?.classList.add('hidden');
      pageTree?.classList.remove('hidden');
    }
  }
    if (pageStartSwitch) {pageStartSwitch.onclick = function () {
      pageToys?.classList.add('hidden');
      pageTree?.classList.add('hidden');
      pageStart?.classList.remove('hidden');
    }
    }

    const cards = document.querySelectorAll('.card') as any;
    for (let card of cards) {
      card.onclick = function () {
        card.classList.toggle('card_favourite');
      }
    }
    
    const checkbox_bell = document.querySelector('.custom-checkbox_bell') as HTMLInputElement;
    const bells = document.querySelectorAll('div.card .shape') as any;
      if (checkbox_bell.checked) {
        for (let bell of bells){
          let param = bell.textContent;
          if (param !== 'Форма: колокольчик') {
          bell.classList.add('hidden');
        }
        }
  }
  

    

  



