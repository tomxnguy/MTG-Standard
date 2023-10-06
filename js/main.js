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

function networkRequest(endOfUrl) {
  const originalUrl = 'https://api.magicthegathering.io/v1/cards?';
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
  networkRequest('set=mom');
});

$oneSet.addEventListener('click', function () {
  cardView();
  $setHeader.textContent = 'Phyrexia: All Will Be One';
  networkRequest('set=one');
});

$broSet.addEventListener('click', function () {
  cardView();
  $setHeader.textContent = "The Brothers' War";
  networkRequest('set=bro');
});

$domSet.addEventListener('click', function () {
  cardView();
  $setHeader.textContent = 'Dominaria United';
  networkRequest('set=dom');
});

$sncSet.addEventListener('click', function () {
  cardView();
  $setHeader.textContent = 'Streets of New Capenna';
  networkRequest('set=snc');
});

$neoSet.addEventListener('click', function () {
  cardView();
  $setHeader.textContent = 'Kamigawa: Neon Dynasty';
  networkRequest('set=neo');
});

$vowSet.addEventListener('click', function () {
  cardView();
  $setHeader.textContent = 'Innistrad: Crimson Vow<';
  networkRequest('set=vow');
});

$midSet.addEventListener('click', function () {
  cardView();
  $setHeader.textContent = 'Innistrad: Midnight Hunt';
  networkRequest('set=mid');
});
