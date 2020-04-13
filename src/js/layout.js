const mainLayout = `
<div id="0" class="col-7 col-md-5 col-lg-3 card mb-3">
<div class="card-item">
  <img src="assets/img/dance.jpg" alt="" class="card-img-top">
</div>
<div class="card-header">Action (level 1)</div>
</div>
<div id="1" class="col-7 col-md-5 col-lg-3 card mb-3">
<div class="card-item">
  <img src="assets/img/swim.jpg" alt="" class="card-img-top">
</div>
<div class="card-header">Action (level 2)</div>
</div>
<div id="2" class="col-7 col-md-5 col-lg-3 card mb-3">
<div class="card-item">
  <img src="assets/img/cat.jpg" alt="" class="card-img-top">
</div>
<div class="card-header">Animal (level 1)</div>
</div>
<div id="3" class="col-7 col-md-5 col-lg-3 card mb-3">
<div class="card-item">
  <img src="assets/img/bird.jpg" alt="" class="card-img-top"> 
</div>
<div class="card-header">Animal (level 2)</div>
</div>
<div id="4" class="col-7 col-md-5 col-lg-3 card mb-3">
<div class="card-item">
  <img src="assets/img/pants.jpg" alt="" class="card-img-top">
</div>
<div class="card-header">Clothes</div>
</div>
<div id="5" class="col-7 col-md-5 col-lg-3 card mb-3">
<div class="card-item">
  <img src="assets/img/smile.jpg" alt="" class="card-img-top">
</div>
<div class="card-header">Emotion</div>
</div>
`;

function creatorCategoriesLayout(cards, id) {
  const categoryLayout = `
<div id="0" class="col-7 col-md-5 col-lg-3 card mb-3">
    <div class="card-item">
      <img src="assets/${cards[id][0].image}" alt="" class="card-img-top">
    </div>
    <div class="card-header">${cards[id][0].word}<img class="rotate-button" src="./assets/img/rotate.svg" alt="rotate pic">
</div>
</div>
<div id="1" class="col-7 col-md-5 col-lg-3 card mb-3">
<div class="card-item">
  <img src="assets/${cards[id][1].image}" alt="" class="card-img-top">
</div>
<div class="card-header">${cards[id][1].word}<img class="rotate-button" src="./assets/img/rotate.svg" alt="rotate pic">
</div>
</div>
<div id="2" class="col-7 col-md-5 col-lg-3 card mb-3">
<div class="card-item">
  <img src="assets/${cards[id][2].image}" alt="" class="card-img-top">
</div>
<div class="card-header">${cards[id][2].word}<img class="rotate-button" src="./assets/img/rotate.svg" alt="rotate pic">
</div>
</div>
<div id="3" class="col-7 col-md-5 col-lg-3 card mb-3">
<div class="card-item">
  <img src="assets/${cards[id][3].image}" alt="" class="card-img-top"> 
</div>
<div class="card-header">${cards[id][3].word}<img class="rotate-button" src="./assets/img/rotate.svg" alt="rotate pic">
</div>
</div>
<div id="4" class="col-7 col-md-5 col-lg-3 card mb-3">
<div class="card-item">
  <img src="assets/${cards[id][4].image}" alt="" class="card-img-top">
</div>
<div class="card-header">${cards[id][4].word}<img class="rotate-button" src="./assets/img/rotate.svg" alt="rotate pic">
</div>
</div>
<div id="5" class="col-7 col-md-5 col-lg-3 card mb-3">
<div class="card-item">
  <img src="assets/${cards[id][5].image}" alt="" class="card-img-top">
</div>
<div class="card-header">${cards[id][5].word}<img class="rotate-button" src="./assets/img/rotate.svg" alt="rotate pic">
</div>
</div>
`;
  return categoryLayout;
}
export { mainLayout, creatorCategoriesLayout };
