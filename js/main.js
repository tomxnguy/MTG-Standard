const $momSet = document.querySelector('#mom-set');
const $oneSet = document.querySelector('#one-set');
const $broSet = document.querySelector('#bro-set');
const $domSet = document.querySelector('#dom-set');
const $sncSet = document.querySelector('#snc-set');
const $neoSet = document.querySelector('#neo-set');
const $vowSet = document.querySelector('#vow-set');
const $midSet = document.querySelector('#mid-set');
const $setView = document.querySelector('.set-view');
const $cardView = document.querySelector('.card-view');
const $setsReturn = document.querySelector('.sets-return');
const $setHeader = document.querySelector('.set-header');
const $cardGridInner = document.querySelector('.card-grid-inner');

function cardView() {
  $setView.className = 'hidden';
  $cardView.className = 'card-view-container card-view row';
  $setsReturn.className = 'sets-return';
}

$setsReturn.addEventListener('click', setView);
function setView() {
  $cardGridInner.textContent = '';
  $setHeader.textContent = '';
  $setView.className = 'set-container set-view';
  $cardView.className = 'hidden';
  $setsReturn.className = 'hidden';
}

const originalUrl = 'https://api.magicthegathering.io/v1/cards?';

function networkRequest(endOfUrl) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', originalUrl + endOfUrl);
  xhr.responseType = 'json';
  xhr.addEventListener('load', function () {
    for (let i = 0; i < xhr.response.cards.length; i++) {
      if (xhr.response.cards[i].imageUrl) {
        const $cardItem = document.createElement('img');
        $cardItem.setAttribute('class', 'card-grid-item column-half column-third column-quarter');
        $cardItem.setAttribute('src', xhr.response.cards[i].imageUrl);
        $cardGridInner.append($cardItem);
      }
    }
  });
  xhr.send();
}

$momSet.addEventListener('click', function () {
  cardView();
  $setHeader.textContent = 'March of the Machine';
  const momUrl = 'set=mom';
  networkRequest(momUrl);
});

$oneSet.addEventListener('click', function () {
  cardView();
  $setHeader.textContent = 'Phyrexia: All Will Be One';
  const oneUrl = 'set=one';
  networkRequest(oneUrl);
});

$broSet.addEventListener('click', function () {
  cardView();
  $setHeader.textContent = "The Brothers' War";
  const brUrl = 'set=bro';
  networkRequest(brUrl);
});

$domSet.addEventListener('click', function () {
  cardView();
  $setHeader.textContent = 'Dominaria United';
  const domUrl = 'set=dom';
  networkRequest(domUrl);
});

$sncSet.addEventListener('click', function () {
  cardView();
  $setHeader.textContent = 'Streets of New Capenna';
  const sncUrl = 'set=snc';
  networkRequest(sncUrl);
});

$neoSet.addEventListener('click', function () {
  cardView();
  $setHeader.textContent = 'Kamigawa: Neon Dynasty';
  const neoUrl = 'set=neo';
  networkRequest(neoUrl);
});

$vowSet.addEventListener('click', function () {
  cardView();
  $setHeader.textContent = 'Innistrad: Crimson Vow';
  const midUrl = 'set=vow';
  networkRequest(midUrl);
});

$midSet.addEventListener('click', function () {
  cardView();
  $setHeader.textContent = 'Innistrad: Midnight Hunt';
  const url = 'set=mid';
  networkRequest(url);
});

const $whiteRadio = document.querySelector('.white');
const $blueRadio = document.querySelector('.blue');
const $blackRadio = document.querySelector('.black');
const $redRadio = document.querySelector('.red');
const $greenRadio = document.querySelector('.green');

const $colorForm = document.querySelectorAll('input[type=radio]');

$colorForm.addEventListener('change', changeColor);

function changeColor(url) {
  if ($whiteRadio.value === 'checked') {
    networkRequest(originalUrl + url + '&colors=w');
  } else if ($blueRadio.value === 'checked') {
    networkRequest(originalUrl + url + '&colors=u');
  } else if ($blackRadio.value === 'checked') {
    networkRequest(originalUrl + url + '&colors=b');
  } else if ($redRadio.value === 'checked') {
    networkRequest(originalUrl + url + '&colors=r');
  } else if ($greenRadio.value === 'checked') {
    networkRequest(originalUrl + url + '&colors=g');
  }
}
