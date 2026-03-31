/* ============================================================
   lightbox.js — full-screen project process viewer
   Exposes a single global: Lightbox.open(piece)
   ============================================================ */

var Lightbox = (function () {

  var els = {};   // cached DOM refs, populated on first open

  function cacheEls() {
    if (els.overlay) return;   // already cached
    els.overlay = document.getElementById('lightbox');
    els.body    = document.getElementById('lb-body');
    els.title   = document.getElementById('lb-title');
    els.tag     = document.getElementById('lb-tag');
    els.close   = document.getElementById('lb-close');
    els.stages  = document.getElementById('lb-stages');

    els.close.addEventListener('click', close);
    els.overlay.addEventListener('click', function (e) {
      if (e.target === els.overlay) close();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') close();
    });
  }

  function stageCard(piece, stage, index) {
    var num  = (index + 1 < 10 ? '0' : '') + (index + 1);
    var card = document.createElement('div');
    card.className = 'lb-stage';
    card.style.animationDelay = (index * 0.08) + 's';
    card.innerHTML =
      '<div class="lb-stage-header">' +
        '<span class="lb-stage-num">'   + num                 + '</span>' +
        '<span class="lb-stage-label">' + (stage.label || '') + '</span>' +
      '</div>' +
      '<img class="lb-stage-img" src="' + stage.image + '" ' +
           'alt="' + piece.title + ' — ' + (stage.label || '') + '" loading="lazy">' +
      (stage.text ? '<p class="lb-stage-text">' + stage.text + '</p>' : '');
    return card;
  }

  function open(piece) {
    cacheEls();

    els.title.textContent = piece.title || '';
    els.tag.textContent   = piece.tag   || '';

    var stages = (piece.stages && piece.stages.length)
      ? piece.stages
      : [{ label: 'Final', image: 'assets/illustrations/' + piece.file + '.jpg', text: '' }];

    els.stages.innerHTML = '';
    stages.forEach(function (stage, i) {
      els.stages.appendChild(stageCard(piece, stage, i));
    });

    els.overlay.classList.add('is-open');
    document.body.classList.add('no-scroll');
    els.body.scrollTop = 0;
  }

  function close() {
    if (!els.overlay) return;
    els.overlay.classList.remove('is-open');
    document.body.classList.remove('no-scroll');
    // Clear DOM after transition finishes
    setTimeout(function () {
      if (!els.overlay.classList.contains('is-open')) els.stages.innerHTML = '';
    }, 450);
  }

  return { open: open, close: close };

}());
