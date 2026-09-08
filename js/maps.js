/* ==========================================================================
   Odontatria | maps.js — navegação mobile + mapa com facade (lazy)
   ========================================================================== */
(function () {
  'use strict';

  /* ---------- Fallback: usado apenas se a página não informar o mapa ---------- */
  var MAPA_PADRAO = {
    lat: -25.2912750,
    lng: -54.0941105,
    label: 'Odontátria - Clínica Odontológica, Medianeira - PR',
    embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d901.8461818838831' +
           '!2d-54.09411053040778!3d-25.291274998603157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768' +
           '!4f13.1!3m3!1m2!1s0x94f6ad0068725fe7%3A0x859679dc7940f03e' +
           '!2sOdont%C3%A1tria!5e0!3m2!1spt-BR!2sbr!4v1788819416975!5m2!1spt-BR!2sbr'
  };

  var PIN_SVG =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
    '<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 ' +
    '9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>';

  /* ==========================================================================
     1. Menu mobile
     ========================================================================== */
  function initNav() {
    var toggle = document.querySelector('.menu-toggle');
    var nav = document.querySelector('.main-nav');
    if (!toggle || !nav) return;

    function fechar() {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
    }

    function abrir() {
      nav.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      toggle.setAttribute('aria-label', 'Fechar menu');
    }

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      if (nav.classList.contains('is-open')) fechar();
      else abrir();
    });

    // Fecha ao clicar em um link do menu
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) fechar();
    });

    // Fecha ao clicar fora do header
    document.addEventListener('click', function (e) {
      if (!nav.classList.contains('is-open')) return;
      if (!e.target.closest('.site-header')) fechar();
    });

    // Fecha com ESC e devolve o foco ao botão
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        fechar();
        toggle.focus();
      }
    });

    // Reset ao voltar para desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) fechar();
    });

    fechar();
  }

  /* ==========================================================================
     2. Mapa
     ========================================================================== */
  function lerConfig(box) {
    // Prioridade: data-map-src > iframe já presente no HTML > fallback
    var src = box.getAttribute('data-map-src');
    var titulo = box.getAttribute('data-map-title');
    var iframeExistente = box.querySelector('iframe');

    if (!src && iframeExistente) {
      src = iframeExistente.getAttribute('src');
      if (!titulo) titulo = iframeExistente.getAttribute('title');
    }

    return {
      embed: src || MAPA_PADRAO.embed,
      titulo: titulo || ('Mapa da localização da ' + MAPA_PADRAO.label),
      lat: box.getAttribute('data-map-lat') || MAPA_PADRAO.lat,
      lng: box.getAttribute('data-map-lng') || MAPA_PADRAO.lng
    };
  }

  function montarFacade(box, cfg) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'map-facade';
    btn.setAttribute('aria-label', 'Carregar mapa interativo do Google Maps');
    btn.innerHTML =
      PIN_SVG +
      '<span class="map-facade-title">Onde estamos</span>' +
      '<span class="map-facade-text">O mapa do Google é carregado somente ao clicar, ' +
      'para preservar sua privacidade e a velocidade da página.</span>' +
      '<span class="map-facade-cta">Carregar mapa</span>';

    btn.addEventListener('click', function () {
      carregarMapa(box, btn, cfg);
    }, { once: true });

    box.appendChild(btn);
  }

  function carregarMapa(box, btn, cfg) {
    if (box.classList.contains('is-loaded')) return;

    var iframe = document.createElement('iframe');
    iframe.src = cfg.embed;
    iframe.title = cfg.titulo;
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.setAttribute('allowfullscreen', '');

    box.insertBefore(iframe, btn);
    box.classList.add('is-loaded');
    iframe.focus({ preventScroll: true });
  }

  function montarAcoes(box, cfg) {
    // Não duplica se o HTML já traz o bloco de rota
    if (document.querySelector('.map-actions')) return;

    var wrap = document.createElement('div');
    wrap.className = 'map-actions';

    var rota = document.createElement('a');
    rota.className = 'btn btn-outline';
    rota.href = 'https://www.google.com/maps/dir/?api=1&destination=' +
                cfg.lat + ',' + cfg.lng;
    rota.target = '_blank';
    rota.rel = 'noopener';
    rota.textContent = 'Traçar rota até a clínica';

    wrap.appendChild(rota);
    box.insertAdjacentElement('afterend', wrap);
  }

  function initMapa() {
    var box = document.getElementById('map-embed');
    if (!box) return;

    var cfg = lerConfig(box);

    box.innerHTML = '';
    montarFacade(box, cfg);
    montarAcoes(box, cfg);
  }

  /* ==========================================================================
     3. Boot
     ========================================================================== */
  function init() {
    initNav();
    initMapa();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
