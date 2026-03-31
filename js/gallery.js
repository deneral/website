/* ============================================================
   gallery.js — loads pieces.json, builds the gallery grid
   ============================================================ */

(function () {

  var IMG_PATH = 'assets/illustrations/';

  var PLACEHOLDER_SVG =
    '<svg viewBox="0 0 48 48" fill="none">' +
      '<path d="M6 38L14 22L22 30L30 14L42 38H6Z" stroke="currentColor" stroke-width="1"/>' +
      '<circle cx="36" cy="12" r="4" stroke="currentColor" stroke-width="1"/>' +
    '</svg>';

  function buildCard(piece, isEager) {
    var src = IMG_PATH + piece.file + '.jpg';
    var el  = document.createElement('div');
    el.className = 'gallery-item';

    el.innerHTML =
      '<img src="' + src + '" alt="' + piece.alt + '" loading="' + (isEager ? 'eager' : 'lazy') + '">' +
      '<div class="gallery-placeholder">' + PLACEHOLDER_SVG + '<span>' + piece.title + '</span></div>' +
      '<div class="gallery-overlay">' +
        '<span class="gallery-title">' + piece.title + '</span>' +
        '<span class="gallery-tag">'   + piece.tag   + '</span>' +
      '</div>';

    el.addEventListener('click', function () { Lightbox.open(piece); });

    // Reveal once the image is loaded
    var img = el.querySelector('img');
    function onLoad() { if (img.naturalWidth > 0) el.classList.add('loaded'); }
    img.addEventListener('load', onLoad);
    if (img.complete) onLoad();

    return el;
  }

  function init() {
    var grid = document.getElementById('gallery-grid');
    if (!grid) return;

    fetch('data/pieces.json')
      .then(function (r) { return r.json(); })
      .then(function (pieces) {
        pieces.forEach(function (piece, i) {
          grid.appendChild(buildCard(piece, i === 0));
        });
      })
      .catch(function (err) { console.error('Gallery: could not load pieces.json', err); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

}());
