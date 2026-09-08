/* Odontatria - Interações */
(function () {
  'use strict';

  function getPageName() {
    const meta = document.querySelector('meta[name="pagina-nome"]');
    if (meta && meta.content) return meta.content.trim();
    const h1 = document.querySelector('h1');
    return h1 ? h1.textContent.trim() : 'Página Inicial';
  }

  function getPage(pageName) {
    const pages = (pageContent && pageContent.pages) || {};
    return pages[pageName] || null;
  }

  /* ===== Unidade da página =====
     Usa pageContent.units[page.unit] quando existir. Sem esse bloco no
     content.js, cai para os dados de business/schema, que descrevem a
     unidade de Medianeira. */
  function getUnit(page) {
    const key = (page && page.unit) || 'medianeira';
    const units = pageContent.units || null;
    if (units && units[key]) {
      const u = units[key];
      return {
        key: key,
        name: u.name || pageContent.schema.name,
        street: u.streetAddress || u.street || '',
        city: u.city || '',
        state: u.state || '',
        postalCode: u.postalCode || '',
        latitude: u.latitude,
        longitude: u.longitude
      };
    }
    const b = pageContent.business;
    const s = pageContent.schema || {};
    return {
      key: 'medianeira',
      name: s.name || 'Odontatria',
      street: s.streetAddress || b.streetAddress || b.street || '',
      city: b.city || '',
      state: b.state || '',
      postalCode: b.postalCode || '',
      latitude: s.latitude || b.latitude,
      longitude: s.longitude || b.longitude
    };
  }

  function unitAddressLine(u) {
    const parts = [];
    if (u.street) parts.push(u.street);
    if (u.city) parts.push(u.city + (u.state ? ' - ' + u.state : ''));
    if (u.postalCode) parts.push(u.postalCode);
    return parts.join(', ');
  }

  /* Substitui placeholders de conteúdo dinâmico (convênios e dados legais). */
  function resolveTokens(str) {
    if (typeof str !== 'string') return str;
    const c = pageContent.convenios || {};
    const b = pageContent.business || {};
    return str
      .replace(/\[LISTA_CONVENIOS\]/g, c.lista || '')
      .replace(/\[RAZAO_SOCIAL\]/g, b.razaoSocial || '')
      .replace(/\[CNPJ\]/g, b.cnpj || '')
      .replace(/\[NOME_RESPONSAVEL\]/g, b.responsavelTecnico || '')
      .replace(/\[NUMERO_CRO\]/g, b.cro || '')
      .replace(/\[EMAIL_PRIVACIDADE\]/g, b.emailPrivacidade || '')
      .replace(/\[NOME_ENCARREGADO\]/g, b.encarregadoDados || '')
      .replace(/\[DATA_PUBLICACAO\]/g, b.dataAtualizacaoLegal || '');
  }

  function buildWhatsappUrl(pageName) {
    const num = pageContent.general.whatsappNumber;
    const msg = pageContent.general.whatsappMessage.replace('{PAGINA}', pageName);
    return 'https://wa.me/' + num + '?text=' + encodeURIComponent(msg);
  }

  /* Rota até a unidade da própria página. */
  function routeUrl(unit) {
    const coords = encodeURIComponent(unit.latitude + ',' + unit.longitude);
    return 'https://www.google.com/maps/dir/?api=1&destination=' + coords + '&travelmode=driving';
  }

  /* URL de local (não de rota) para hasMap e para o link do facade. */
  function placeMapUrl(lat, lng) {
    return 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(lat + ',' + lng);
  }

  /* Embed sem chave de API e sem conta Google. */
  function embedMapUrl(lat, lng) {
    return 'https://maps.google.com/maps?q=' + encodeURIComponent(lat + ',' + lng) +
           '&z=16&hl=pt-BR&output=embed';
  }

  const WA_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.9-.92 1.08-.15.18-.3.2-.6.05-.3-.15-1.13-.42-2.15-1.33-.8-.71-1.33-1.58-1.48-1.88-.15-.3-.02-.46.13-.61.15-.15.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.6-.92-2.19-.24-.57-.49-.5-.67-.5h-.57c-.2 0-.52.07-.79.37-.27.3-1.03 1-1.03 2.44 0 1.43 1.05 2.82 1.2 3.02.15.2 2.07 3.16 5.02 4.32 2.95 1.15 2.95.77 3.48.72.53-.05 1.72-.7 1.96-1.38.25-.68.25-1.26.18-1.38-.08-.13-.28-.2-.58-.35z"/><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.38c1.45.79 3.08 1.21 4.76 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm0 18.02c-1.5 0-2.97-.4-4.25-1.16l-.3-.18-3.13.82.84-3.06-.19-.31a8.1 8.1 0 01-1.24-4.32c0-4.47 3.64-8.11 8.11-8.11 4.47 0 8.11 3.64 8.11 8.11 0 4.47-3.64 8.11-8.11 8.11z"/></svg>';

  const PIN_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z"/></svg>';

  function injectWhatsapp(pageName) {
    const float = document.getElementById('whatsapp-float');
    if (!float) return;
    float.setAttribute('href', buildWhatsappUrl(pageName));
    float.setAttribute('target', '_blank');
    float.setAttribute('rel', 'noopener');
    float.setAttribute('aria-label', 'Falar pelo WhatsApp com a Odontatria');
    float.innerHTML = WA_SVG;
  }

  function setupCtas(pageName, unit) {
    const url = buildWhatsappUrl(pageName);
    document.querySelectorAll('[data-cta="whatsapp"]').forEach(function (el) {
      el.setAttribute('href', url);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener');
    });
    const rota = routeUrl(unit);
    document.querySelectorAll('[data-cta="rota"]').forEach(function (el) {
      el.setAttribute('href', rota);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener');
      if (!el.hasAttribute('aria-label')) {
        el.setAttribute('aria-label', 'Abrir rota até a Odontatria no aplicativo de mapas');
      }
    });
    document.querySelectorAll('[data-cta="telefone"]').forEach(function (el) {
      el.setAttribute('href', pageContent.business.phoneHref);
    });
  }

  /* ===== Mapa (facade) =====
     O iframe do Google Maps carrega cerca de 700 KB de terceiros. Aqui só
     o bloco estático é renderizado; o iframe entra no clique do usuário.
     O link "Abrir no Google Maps" funciona mesmo sem JS ativo. */
  function renderMap(page, unit) {
    const wrap = document.getElementById('map-embed');
    if (!wrap || wrap.children.length) return;
    if (!unit.latitude || !unit.longitude) return;

    const endereco = unitAddressLine(unit);
    const rotulo = unit.name || 'Odontatria';

    wrap.classList.add('map-wrap');

    const facade = document.createElement('div');
    facade.className = 'map-facade';

    const info = document.createElement('div');
    info.className = 'map-info';
    info.innerHTML = '<span class="map-pin">' + PIN_SVG + '</span>' +
      '<p class="map-unit">' + rotulo + '</p>' +
      '<p class="map-address">' + endereco + '</p>';

    const acoes = document.createElement('div');
    acoes.className = 'map-actions';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'btn btn-primary map-load';
    btn.textContent = 'Carregar mapa';
    btn.setAttribute('aria-label', 'Carregar o mapa interativo de ' + rotulo);

    const link = document.createElement('a');
    link.className = 'btn btn-outline';
    link.setAttribute('href', placeMapUrl(unit.latitude, unit.longitude));
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener');
    link.textContent = 'Abrir no Google Maps';

    acoes.appendChild(btn);
    acoes.appendChild(link);
    facade.appendChild(info);
    facade.appendChild(acoes);
    wrap.appendChild(facade);

    btn.addEventListener('click', function () {
      const frame = document.createElement('iframe');
      frame.setAttribute('src', embedMapUrl(unit.latitude, unit.longitude));
      frame.setAttribute('title', 'Mapa da localização — ' + rotulo);
      frame.setAttribute('loading', 'lazy');
      frame.setAttribute('referrerpolicy', 'no-referrer-when-downgrade');
      frame.setAttribute('allowfullscreen', '');
      wrap.replaceChild(frame, facade);
      wrap.classList.add('is-loaded');
      frame.focus();
    });
  }

  /* ===== Meta tags e título, a partir de pages ===== */
  function renderHead(page) {
    if (!page) return;
    if (page.metaTitle) document.title = page.metaTitle;

    if (page.metaDescription) {
      let d = document.querySelector('meta[name="description"]');
      if (!d) {
        d = document.createElement('meta');
        d.setAttribute('name', 'description');
        document.head.appendChild(d);
      }
      d.setAttribute('content', resolveTokens(page.metaDescription));
    }

    const fav = pageContent.general.favicon;
    if (fav && !document.querySelector('link[rel="icon"]')) {
      const l = document.createElement('link');
      l.setAttribute('rel', 'icon');
      l.setAttribute('href', fav);
      document.head.appendChild(l);
    }
  }

  /* ===== Hero: H1 e texto de abertura ===== */
  function renderHero(page) {
    if (!page) return;
    const h1 = document.getElementById('page-h1') || document.querySelector('h1');
    if (h1 && page.h1 && !h1.textContent.trim()) h1.textContent = page.h1;

    const intro = document.getElementById('page-intro');
    if (intro && !intro.textContent.trim() && page.intro) {
      intro.innerHTML = resolveTokens(page.intro);
    }
  }

  /* ===== Blocos de conteúdo (H2 + parágrafo) ===== */
  function renderBlocks(page) {
    const wrap = document.getElementById('page-blocks');
    if (!wrap || wrap.children.length) return;
    if (!page || !Array.isArray(page.blocks) || !page.blocks.length) return;

    page.blocks.forEach(function (block) {
      const sec = document.createElement('section');
      sec.className = 'content-block fade-in';
      const h2 = document.createElement('h2');
      h2.textContent = block.title;
      const p = document.createElement('p');
      p.innerHTML = resolveTokens(block.text);
      sec.appendChild(h2);
      sec.appendChild(p);
      wrap.appendChild(sec);
    });
  }

  /* ===== FAQ: coleta do DOM quando escrita direto no HTML ===== */
  function collectFaqFromDom() {
    const wrap = document.getElementById('faq-list');
    if (!wrap) return [];
    const out = [];
    wrap.querySelectorAll('details.faq-item').forEach(function (det) {
      const sum = det.querySelector('summary');
      const ans = det.querySelector('p');
      if (sum && ans) {
        out.push({
          q: sum.textContent.trim(),
          a: ans.textContent.trim()
        });
      }
    });
    return out;
  }

  /* ===== FAQ visível + schema FAQPage ===== */
  function renderFaq(page) {
    const wrap = document.getElementById('faq-list');
    const fromContent = (page && Array.isArray(page.faq)) ? page.faq : [];

    if (wrap && !wrap.children.length && fromContent.length) {
      const t = document.getElementById('faq-title');
      if (t && !t.textContent.trim()) t.textContent = 'Perguntas frequentes';

      fromContent.forEach(function (item) {
        const det = document.createElement('details');
        det.className = 'faq-item';
        const sum = document.createElement('summary');
        sum.textContent = item.q;
        const p = document.createElement('p');
        p.innerHTML = resolveTokens(item.a);
        det.appendChild(sum);
        det.appendChild(p);
        wrap.appendChild(det);
      });
    }

    /* O schema usa o FAQ do content.js quando existe; caso a página traga o
       FAQ escrito direto no HTML (páginas legais), coleta a partir do DOM
       para não perder o rich result. */
    let faqData = fromContent.length ? fromContent.map(function (item) {
      return { q: item.q, a: resolveTokens(item.a) };
    }) : collectFaqFromDom();

    if (!faqData.length) return;
    if (document.getElementById('ld-faq')) return;

    const data = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqData.map(function (item) {
        return {
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a }
        };
      })
    };
    const tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.id = 'ld-faq';
    tag.textContent = JSON.stringify(data);
    document.body.appendChild(tag);
  }

  /* ===== Links internos (rodapé e mapa do site) ===== */
  function renderSiteLinks(pageName) {
    const links = pageContent.siteLinks || [];
    if (!links.length) return;

    const nav = document.getElementById('footer-links');
    if (nav && !nav.children.length) {
      links.forEach(function (l) {
        if (l.label === pageName) return;
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', l.url);
        a.textContent = l.label;
        li.appendChild(a);
        nav.appendChild(li);
      });
    }

    const map = document.getElementById('sitemap-list');
    if (map && !map.children.length) {
      links.forEach(function (l) {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.setAttribute('href', l.url);
        a.textContent = l.label;
        li.appendChild(a);
        map.appendChild(li);
      });
    }
  }

  /* ===== Links legais do rodapé =====
     Popula .footer-legal em todas as páginas. Se a lista já vier escrita
     no HTML, o conteúdo existente é mantido. */
  function renderLegalLinks(page) {
    const links = pageContent.legalLinks || [];
    if (!links.length) return;
    const slug = (page && page.slug) || '';

    document.querySelectorAll('.footer-legal').forEach(function (ul) {
      if (ul.children.length) return;
      links.forEach(function (l) {
        const li = document.createElement('li');
        if (l.url === slug) {
          const span = document.createElement('span');
          span.setAttribute('aria-current', 'page');
          span.textContent = l.label;
          li.appendChild(span);
        } else {
          const a = document.createElement('a');
          a.setAttribute('href', l.url);
          a.textContent = l.label;
          li.appendChild(a);
        }
        ul.appendChild(li);
      });
    });
  }

  function renderAbout() {
    const t = document.getElementById('about-title');
    const d = document.getElementById('about-desc');
    if (t) t.textContent = pageContent.aboutUs.title;
    if (d && !d.children.length) d.innerHTML = '<p>' + pageContent.aboutUs.description + '</p>';
  }

  function renderFeatures(page) {
    const wrap = document.getElementById('features-list');
    if (!wrap || wrap.children.length) return;
    if (page && page.useGlobalFeatures === false) return;

    const t = document.getElementById('features-title');
    if (t) t.textContent = pageContent.features.title;
    pageContent.features.items.forEach(function (item) {
      const art = document.createElement('article');
      art.className = 'feature-card';
      const h3 = document.createElement('h3');
      h3.textContent = item.title;
      const p = document.createElement('p');
      p.textContent = item.description;
      art.appendChild(h3);
      art.appendChild(p);
      wrap.appendChild(art);
    });
  }

  /* ===== Convênios: aviso e lista, onde houver marcação ===== */
  function renderConvenios() {
    const c = pageContent.convenios;
    if (!c) return;
    document.querySelectorAll('[data-convenios="lista"]').forEach(function (el) {
      el.textContent = c.lista || '';
    });
    document.querySelectorAll('[data-convenios="observacao"]').forEach(function (el) {
      el.textContent = c.observacao || '';
    });
  }

  /* ===== Responsável técnico e CRO (exigência do CFO) =====
     data-info="responsavel"      -> com o rótulo "Responsável técnico:"
     data-info="responsavel-nome" -> apenas nome e CRO, para uso dentro de
                                     trechos que já trazem o rótulo no HTML */
  function renderResponsavel() {
    const b = pageContent.business;
    const bare = b.responsavelTecnico + ' — ' + b.cro;
    document.querySelectorAll('[data-info="responsavel"]').forEach(function (el) {
      el.textContent = 'Responsável técnico: ' + bare;
    });
    document.querySelectorAll('[data-info="responsavel-nome"]').forEach(function (el) {
      el.textContent = bare;
    });
  }

  /* ===== Dados institucionais e legais, onde houver marcação ===== */
  function renderBusinessInfo() {
    const b = pageContent.business;
    const map = {
      'razao-social': b.razaoSocial,
      'cnpj': b.cnpj,
      'cro-pj': b.croPessoaJuridica,
      'email-privacidade': b.emailPrivacidade,
      'encarregado': b.encarregadoDados,
      'data-legal': b.dataAtualizacaoLegal
    };
    Object.keys(map).forEach(function (key) {
      if (!map[key]) return;
      document.querySelectorAll('[data-info="' + key + '"]').forEach(function (el) {
        el.textContent = map[key];
      });
    });
  }

  function renderFooter() {
    const b = pageContent.business;
    const f = pageContent.footer;
    const map = {
      'footer-desc': f.description,
      'footer-schedule': f.schedule,
      'footer-address': f.address
    };
    Object.keys(map).forEach(function (id) {
      const el = document.getElementById(id);
      if (el) el.textContent = map[id];
    });
    const phone = document.getElementById('footer-phone');
    if (phone) {
      phone.textContent = f.phone;
      phone.setAttribute('href', b.phoneHref);
    }
    const copy = document.getElementById('footer-copyright');
    if (copy) copy.textContent = '© ' + new Date().getFullYear() + ' ' + f.copyright + '. Todos os direitos reservados.';
  }

  function setupMenu() {
    const btn = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', function () {
      const open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    nav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      if (a.classList.contains('skip-link')) return;
      a.addEventListener('click', function (e) {
        const id = a.getAttribute('href');
        if (id.length < 2) return;
        const target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
      });
    });
  }

  function setupFadeIn() {
    const items = document.querySelectorAll('.fade-in');
    if (!items.length || !('IntersectionObserver' in window)) return;
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-visible');
          obs.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (i) { obs.observe(i); });
  }

  function canonicalUrl() {
    const link = document.querySelector('link[rel="canonical"]');
    return (link && link.href) || location.href;
  }

  /* ===== Schema da clínica =====
     Não é injetado em páginas legais: LocalBusiness nessas URLs dilui o
     sinal de entidade e não gera resultado útil. */
  function injectSchema(page, unit) {
    if (document.getElementById('ld-clinica')) return;
    if (page && page.legal === true) return;

    const b = pageContent.business;
    const s = pageContent.schema;

    /* O complemento (Conjunto A, Sala Térreo) é obrigatório: o endereço
       é compartilhado com outra clínica no mesmo prédio. */
    const street = unit.street;
    const lat = unit.latitude;
    const lng = unit.longitude;

    const data = {
      '@context': 'https://schema.org',
      '@type': s.type,
      name: unit.name || s.name,
      description: s.description,
      url: canonicalUrl(),
      telephone: s.phone,
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        streetAddress: street,
        addressLocality: unit.city || b.city,
        addressRegion: unit.state || b.state,
        postalCode: unit.postalCode || b.postalCode,
        addressCountry: b.country
      },
      geo: { '@type': 'GeoCoordinates', latitude: lat, longitude: lng },
      hasMap: placeMapUrl(lat, lng),
      openingHours: s.openingHours,
      areaServed: [
        { '@type': 'City', name: 'Medianeira' },
        { '@type': 'City', name: 'Serranópolis do Iguaçu' },
        { '@type': 'City', name: 'Matelândia' },
        { '@type': 'City', name: 'São Miguel do Iguaçu' }
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: s.phone,
        contactType: 'reservations',
        availableLanguage: 'pt-BR'
      }
    };

    const tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.id = 'ld-clinica';
    tag.textContent = JSON.stringify(data);
    document.body.appendChild(tag);
  }

  /* ===== Breadcrumb: apenas em páginas internas ===== */
  function injectBreadcrumb(page, pageName) {
    if (document.getElementById('ld-breadcrumb')) return;
    if (!page || !page.slug || page.slug === 'index.html') return;

    const base = canonicalUrl().replace(/[^/]*$/, '');
    const data = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Página Inicial', item: base + 'index.html' },
        { '@type': 'ListItem', position: 2, name: pageName, item: base + page.slug }
      ]
    };

    const tag = document.createElement('script');
    tag.type = 'application/ld+json';
    tag.id = 'ld-breadcrumb';
    tag.textContent = JSON.stringify(data);
    document.body.appendChild(tag);
  }

  document.addEventListener('DOMContentLoaded', function () {
    const pageName = getPageName();
    const page = getPage(pageName);
    const unit = getUnit(page);

    renderHead(page);
    renderHero(page);
    renderBlocks(page);
    injectWhatsapp(pageName);
    setupCtas(pageName, unit);
    renderMap(page, unit);
    renderAbout();
    renderFeatures(page);
    renderConvenios();
    renderResponsavel();
    renderBusinessInfo();
    renderFaq(page);
    renderSiteLinks(pageName);
    renderLegalLinks(page);
    renderFooter();
    setupMenu();
    setupSmoothScroll();
    setupFadeIn();
    injectSchema(page, unit);
    injectBreadcrumb(page, pageName);
  });
})();
