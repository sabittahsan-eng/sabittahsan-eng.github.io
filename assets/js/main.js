/* ============================================================
   main.js — all interaction. You shouldn't need to edit this.
   Edit assets/js/data.js instead.
   ============================================================ */
(function () {
  "use strict";

  var $  = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var SIZES = (typeof IMG_SIZES !== "undefined") ? IMG_SIZES : {};

  // Escape for attributes AND text.
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  // Escape for text content only — leaves ' and " alone, because esc()
  // turns ' into &#39; and the digits in that entity would be mangled by
  // the number-bolding regex below.
  function escText(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  /* Org logo tile. Shows initials until the real file exists, then the
     image loads on top and the initials hide themselves. So it looks
     finished either way — never an empty box.                        */
  function orgLogo(file, short, name) {
    var mono = '<span class="logo__m">' + esc(short || "") + "</span>";
    if (!file) return '<span class="logo">' + mono + "</span>";
    return '<span class="logo">' +
      '<img src="assets/img/logos/' + encodeURIComponent(file) + '"' +
      ' alt="" loading="lazy" decoding="async"' +
      ' onload="this.classList.add(\'loaded\');if(this.naturalHeight&&this.naturalWidth/this.naturalHeight>2.2)this.parentNode.classList.add(\'logo--wide\')"' +
      ' onerror="this.remove()">' +
      mono + "</span>";
  }

  function ratio(key, fallback) {
    var s = SIZES[key];
    return (s && s[0] && s[1]) ? (s[0] + " / " + s[1]) : (fallback || "4 / 3");
  }

  /* Image with a graceful placeholder underneath. If the file is missing
     the <img> removes itself and the labelled placeholder stays put.    */
  function media(folder, file, alt, icon, fallbackRatio) {
    var key = folder + "/" + file;
    var ph =
      '<div class="ph">' +
        '<div class="ph__icon">' + (icon || "◼") + "</div>" +
        '<div class="ph__name">' + esc(file || "no file set") + "</div>" +
      "</div>";
    if (!file) return ph;
    return ph +
      '<img src="assets/img/' + esc(folder) + "/" + encodeURIComponent(file) + '"' +
      ' alt="' + esc(alt || "") + '" loading="lazy" decoding="async"' +
      ' style="aspect-ratio:' + ratio(key, fallbackRatio) + '"' +
      ' onload="this.classList.add(\'loaded\')" onerror="this.remove()">';
  }

  /* ============================================================
     PRELOADER
     ============================================================ */
  window.addEventListener("load", function () {
    setTimeout(function () {
      var p = $("#preload"); if (p) p.classList.add("done");
    }, reduced ? 0 : 800);
  });
  setTimeout(function () { var p = $("#preload"); if (p) p.classList.add("done"); }, 4000);

  /* ============================================================
     CUSTOM CURSOR
     ============================================================ */
  (function cursor() {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    var dot = $(".cursor-dot"), ring = $(".cursor-ring");
    if (!dot || !ring) return;
    var mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    document.addEventListener("mousemove", function (e) {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = "translate(" + mx + "px," + my + "px)";
    }, { passive: true });
    (function loop() {
      rx += (mx - rx) * 0.16; ry += (my - ry) * 0.16;
      ring.style.transform = "translate(" + rx + "px," + ry + "px)";
      requestAnimationFrame(loop);
    })();
    document.addEventListener("mouseover", function (e) {
      document.body.classList.toggle("cursor-active",
        !!e.target.closest("a,button,[data-cursor],.tile"));
    });
  })();

  /* ============================================================
     NAV / MENU / PROGRESS
     ============================================================ */
  (function nav() {
    var navEl = $("#nav"), bar = $("#progress"), burger = $("#burger");
    function onScroll() {
      var y = scrollY || document.documentElement.scrollTop;
      if (navEl) navEl.classList.toggle("scrolled", y > 24);
      var h = document.documentElement.scrollHeight - innerHeight;
      if (bar) bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
    }
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (burger) {
      burger.addEventListener("click", function () {
        var open = document.body.classList.toggle("menu-open");
        document.body.classList.toggle("is-locked", open);
        burger.setAttribute("aria-expanded", open ? "true" : "false");
        burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        $$("#menu a").forEach(function (a, i) {
          a.style.transitionDelay = open ? (0.06 * i + 0.1) + "s" : "0s";
        });
      });
    }
    $$("#menu a").forEach(function (a) {
      a.addEventListener("click", function () {
        document.body.classList.remove("menu-open", "is-locked");
        if (burger) burger.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && document.body.classList.contains("menu-open")) {
        document.body.classList.remove("menu-open", "is-locked");
        if (burger) burger.setAttribute("aria-expanded", "false");
      }
    });

    var links = $$("#navLinks a");
    var secs = links.map(function (a) { return $(a.getAttribute("href")); }).filter(Boolean);
    if (secs.length && "IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (en) {
          if (!en.isIntersecting) return;
          links.forEach(function (l) {
            l.classList.toggle("active", l.getAttribute("href") === "#" + en.target.id);
          });
        });
      }, { rootMargin: "-45% 0px -50% 0px" });
      secs.forEach(function (s) { io.observe(s); });
    }
  })();

  /* ============================================================
     REVEAL ON SCROLL
     ============================================================ */
  var revealIO = null;
  if ("IntersectionObserver" in window) {
    revealIO = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add("in");
        revealIO.unobserve(en.target);
        if (en.target.dataset.bar) {
          var i = en.target.querySelector("i");
          if (i) i.style.width = en.target.dataset.bar + "%";
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
  }
  function watch(n) {
    if (!n) return;
    if (revealIO) revealIO.observe(n);
    else {
      n.classList.add("in");
      if (n.dataset.bar) { var i = n.querySelector("i"); if (i) i.style.width = n.dataset.bar + "%"; }
    }
  }
  function watchAll(root) { $$(".rv", root || document).forEach(watch); }

  // bold the figures inside body copy
  function boldNumbers(s) {
    return escText(s).replace(
      /(\+?৳?\s?[\d][\d,\.]*\s?(?:%|K|BDT)?(?:\s?(?:registrations|participants|attendees|students|teams|responses|volunteers|designs|events|companies|speakers|stories|footfall|members|partners|entries|assets))?)/g,
      "<b>$1</b>"
    );
  }

  /* ============================================================
     HERO
     ============================================================ */
  (function hero() {
    var S = SITE;

    var roleEl = $("#heroRole");
    if (roleEl) {
      var words = S.taglines || [];
      var i = 0;
      function show() {
        roleEl.innerHTML = '<span class="hero__roleLine">' + esc(words[i % words.length] || "") + "</span>";
        i++;
      }
      show();
      if (!reduced && words.length > 1) setInterval(show, 2800);
    }

    var intro = $("#heroIntro");
    if (intro) intro.textContent = S.intro || "";

    // the background-removed portrait
    var fig = $("#heroFigure");
    if (fig && S.cutout) {
      fig.innerHTML =
        '<img src="assets/img/profile/' + encodeURIComponent(S.cutout) + '"' +
        ' alt="' + esc(S.name) + '" decoding="async"' +
        ' onload="this.classList.add(\'loaded\')" onerror="this.closest(\'.hero__figure\').remove()">';
    }

    var bg = $("#heroBg");
    if (bg && S.heroImage) {
      var im = new Image();
      im.onload = function () { bg.appendChild(im); bg.classList.add("ready"); };
      im.alt = "";
      im.src = "assets/img/profile/" + encodeURIComponent(S.heroImage);
    }

    var glow = $("#heroGlow");
    if (glow && !reduced) {
      var gx = innerWidth * 0.5, gy = innerHeight * 0.45, tx = gx, ty = gy;
      document.addEventListener("mousemove", function (e) {
        if (e.clientY < innerHeight * 1.3) { tx = e.clientX; ty = e.clientY; }
      }, { passive: true });
      (function g() {
        gx += (tx - gx) * 0.045; gy += (ty - gy) * 0.045;
        glow.style.left = gx + "px"; glow.style.top = gy + "px";
        requestAnimationFrame(g);
      })();
    } else if (glow) { glow.style.left = "50%"; glow.style.top = "45%"; }

    var clock = $("#clock");
    if (clock) {
      function tick() {
        try {
          clock.textContent = new Date().toLocaleTimeString("en-GB",
            { timeZone: "Asia/Dhaka", hour: "2-digit", minute: "2-digit" });
        } catch (e) { clock.textContent = ""; }
      }
      tick(); setInterval(tick, 20000);
    }
  })();

  /* ============================================================
     MARQUEE
     ============================================================ */
  (function rail() {
    var r = $("#rail");
    if (!r) return;
    var items = SITE.events || [];
    if (!items.length) return;

    var html = items.map(function (e) {
      return '<figure class="etab">' +
        media("events", e.img, e.name, "▣", "3 / 4") +
        '<figcaption class="etab__cap">' +
          '<span class="etab__n">' + escText(e.name) + "</span>" +
          (e.note ? '<span class="etab__r">' + escText(e.note) + "</span>" : "") +
        "</figcaption>" +
      "</figure>";
    }).join("");

    /* Printed twice so translateX(-50%) lands exactly on the seam. */
    r.innerHTML = html + html;

    /* One pass of the loop should take about the same time per tab
       however many there are, otherwise 7 tabs crawl and 20 sprint. */
    r.style.animationDuration = (items.length * 6.5) + "s";

    wireLightbox("#rail .etab", items.map(function (e) {
      return { src: "assets/img/events/" + e.img, title: e.name, sub: e.note || "" };
    }));
  })();

  /* ============================================================
     SHARED LIGHTBOX  (used by design + photography)
     ============================================================ */
  var LB = (function () {
    var lb = $("#lb"), img = $("#lbImg"), tEl = $("#lbTitle"),
        sEl = $("#lbSub"), cEl = $("#lbCount");
    var list = [], pos = 0, lastFocus = null;
    if (!lb) return { open: function () {} };

    img.addEventListener("load", function () { img.classList.add("loaded"); });

    function render() {
      var it = list[pos]; if (!it) return;
      img.classList.remove("loaded");
      img.alt = it.title;
      img.src = it.src;
      tEl.textContent = it.title;
      sEl.textContent = it.sub || "";
      cEl.textContent = String(pos + 1).padStart(2, "0") + " / " + String(list.length).padStart(2, "0");
    }
    function open(items, index) {
      list = items; pos = Math.max(0, index);
      lastFocus = document.activeElement;
      render();
      lb.classList.add("open");
      lb.setAttribute("aria-hidden", "false");
      document.body.classList.add("is-locked");
      $("#lbClose").focus();
    }
    function close() {
      lb.classList.remove("open");
      lb.setAttribute("aria-hidden", "true");
      document.body.classList.remove("is-locked");
      if (lastFocus) lastFocus.focus();
    }
    function step(d) {
      if (!list.length) return;
      pos = (pos + d + list.length) % list.length;
      render();
    }

    $("#lbClose").addEventListener("click", close);
    $("#lbPrev").addEventListener("click", function () { step(-1); });
    $("#lbNext").addEventListener("click", function () { step(1); });
    lb.addEventListener("click", function (e) {
      if (e.target === lb || e.target.classList.contains("lb__stage")) close();
    });
    document.addEventListener("keydown", function (e) {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });
    var sx = 0;
    lb.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
    lb.addEventListener("touchend", function (e) {
      var dx = e.changedTouches[0].clientX - sx;
      if (Math.abs(dx) > 50) step(dx > 0 ? -1 : 1);
    }, { passive: true });

    return { open: open };
  })();

  /* Makes a set of thumbnails open the shared lightbox. `items` is the
     list the viewer pages through; nodes may repeat (the rail prints
     its tabs twice to loop), hence the modulo. LB is referenced inside
     the handler, not here, because this runs before LB is assigned. */
  function wireLightbox(selector, items, starts) {
    if (!items.length) return;
    $$(selector).forEach(function (el, i) {
      var idx = starts ? starts[i % starts.length] : (i % items.length);
      el.classList.add("zoomable");
      el.setAttribute("role", "button");
      el.setAttribute("tabindex", "0");
      el.setAttribute("aria-label", "Enlarge: " + items[idx].title);
      el.addEventListener("click", function () { LB.open(items, idx); });
      el.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); LB.open(items, idx); }
      });
    });
  }

  /* Builds a filterable masonry gallery that starts collapsed to
     opts.limit tiles and expands on click. Shared by both walls.
     Two separate hiding classes so they don't fight each other:
       .filtered  — hidden because a filter excludes it
       .clipped   — hidden because we're collapsed                  */
  function buildGallery(opts) {
    var grid = $(opts.grid), filtersEl = $(opts.filters), moreWrap = $(opts.more);
    var items = opts.items || [];
    var limit = opts.limit || 12;
    var collapsed = true;
    if (!grid) return;

    grid.innerHTML = items.map(function (it, i) {
      var badge = it.badge
        ? '<span class="tile__badge">' + esc(it.badge) + "</span>" : "";
      return '<figure class="tile rv" data-i="' + i + '" data-f="' + esc(it.filter) + '"' +
          ' role="button" tabindex="0" aria-label="View: ' + esc(it.title) + '">' +
        badge +
        media(opts.folder, it.img, it.title, opts.icon) +
        '<figcaption class="tile__cap">' +
          '<span class="tile__t">' + esc(it.title) + "</span>" +
          '<span class="tile__s">' + esc(it.sub || "") + "</span>" +
        "</figcaption>" +
      "</figure>";
    }).join("");

    // Tiles the current filter allows — including ones hidden by the
    // collapse, so the viewer can page through the whole set.
    function inFilter() {
      return $$(".tile", grid).filter(function (t) { return !t.classList.contains("filtered"); });
    }
    function openAt(tile) {
      var pool = inFilter();
      var list = pool.map(function (t) {
        var it = items[parseInt(t.dataset.i, 10)];
        return { src: "assets/img/" + opts.folder + "/" + encodeURIComponent(it.img),
                 title: it.title, sub: it.sub || "" };
      });
      LB.open(list, pool.indexOf(tile));
    }

    function applyLimit() {
      var shown = 0, total = 0;
      $$(".tile", grid).forEach(function (t) {
        if (t.classList.contains("filtered")) { t.classList.add("clipped"); return; }
        total++;
        var over = collapsed && total > limit;
        t.classList.toggle("clipped", over);
        if (!over) shown++;
      });
      if (!moreWrap) return;
      if (total <= limit) { moreWrap.innerHTML = ""; return; }
      moreWrap.innerHTML =
        '<button class="showmore" type="button">' +
          (collapsed ? "Show all " + total + " ↓" : "Show less ↑") +
        "</button>" +
        '<span class="showmore__n">' + shown + " of " + total + "</span>";
    }

    if (moreWrap) {
      moreWrap.addEventListener("click", function (e) {
        if (!e.target.closest(".showmore")) return;
        collapsed = !collapsed;
        applyLimit();
        if (collapsed) {
          var top = grid.getBoundingClientRect().top + scrollY - 120;
          scrollTo({ top: top, behavior: reduced ? "auto" : "smooth" });
        }
      });
    }
    grid.addEventListener("click", function (e) {
      var t = e.target.closest(".tile"); if (t) openAt(t);
    });
    grid.addEventListener("keydown", function (e) {
      if (e.key !== "Enter" && e.key !== " ") return;
      var t = e.target.closest(".tile"); if (!t) return;
      e.preventDefault(); openAt(t);
    });

    if (filtersEl && opts.groups) {
      filtersEl.innerHTML =
        '<button class="filter on" data-f="All" type="button">All<sup>' + items.length + "</sup></button>" +
        opts.groups.map(function (g) {
          var n = items.filter(function (it) { return it.filter === g.id; }).length;
          return '<button class="filter" data-f="' + esc(g.id) + '" type="button">' +
            esc(g.name) + "<sup>" + n + "</sup></button>";
        }).join("");

      filtersEl.addEventListener("click", function (e) {
        var b = e.target.closest(".filter"); if (!b) return;
        $$(".filter", filtersEl).forEach(function (x) { x.classList.remove("on"); });
        b.classList.add("on");
        var f = b.dataset.f;
        $$(".tile", grid).forEach(function (t) {
          t.classList.toggle("filtered", f !== "All" && t.dataset.f !== f);
        });
        collapsed = true;          // re-collapse whenever the filter changes
        applyLimit();
        if (opts.onFilter) opts.onFilter(f);
      });
    }

    applyLimit();
  }

  /* ============================================================
     DESIGN WALL
     ============================================================ */
  (function design() {
    var groups = SITE.designGroups || [];
    var byId = {};
    groups.forEach(function (g) { byId[g.id] = g; });

    // Wall order follows the order of designGroups, so reordering the
    // groups in data.js reorders both the filter chips and the "All" view.
    var order = {};
    groups.forEach(function (g, i) { order[g.id] = i; });

    var items = (SITE.design || []).map(function (d, i) {
      var g = byId[d.group] || {};
      return { img: d.img, title: d.title, sub: g.name || "", filter: d.group,
               _g: (order[d.group] == null ? 999 : order[d.group]), _i: i };
    }).sort(function (a, b) { return (a._g - b._g) || (a._i - b._i); });

    var countEl = $("#designCount");
    if (countEl) {
      countEl.textContent = items.length + " pieces across " + groups.length +
        " projects. Click any one to open it full size.";
    }

    var note = $("#designNote");
    function showNote(f) {
      if (!note) return;
      var g = byId[f];
      if (!g) { note.hidden = true; note.innerHTML = ""; return; }
      note.hidden = false;
      note.innerHTML =
        '<div class="projnote__meta"><span>' + esc(g.client || "") + "</span><span>" +
          esc(g.year || "") + "</span></div>" +
        '<h3 class="projnote__title">' + esc(g.name) + "</h3>" +
        "<p>" + boldNumbers(g.blurb || "") + "</p>" +
        '<div class="chips">' + (g.metrics || []).map(function (m, i) {
          return '<span class="chip' + (i === 0 ? " gold" : "") + '">' + esc(m) + "</span>";
        }).join("") + "</div>";
    }

    buildGallery({
      grid: "#designGrid", filters: "#designFilters", more: "#designMore",
      folder: "design", icon: "✎", limit: 12,
      items: items, groups: groups, onFilter: showNote
    });
  })();

  /* ============================================================
     PHOTOGRAPHY WALL
     ============================================================ */
  (function photos() {
    var photos = SITE.photos || [];
    var cats = [];
    photos.forEach(function (p) { if (cats.indexOf(p.category) < 0) cats.push(p.category); });

    var items = photos.map(function (p) {
      // caption shows the location when there is one, else the category
      var sub = p.location ? p.location : p.category;
      if (p.award) sub = p.location ? (p.award + " · " + p.location) : p.award;
      return { img: p.img, title: p.title, sub: sub,
               filter: p.category, badge: p.award || "" };
    });

    var countEl = $("#photoCount");
    if (countEl) countEl.textContent = photos.length + " frames. Click to open the viewer — arrow keys to move.";

    buildGallery({
      grid: "#photoGrid", filters: "#photoFilters", more: "#photoMore",
      folder: "photo", icon: "◎", limit: 12, items: items,
      groups: cats.map(function (c) { return { id: c, name: c }; })
    });
  })();

  /* ============================================================
     TIMELINE + ROLES
     ============================================================ */
  (function work() {
    var tl = $("#timeline");
    if (tl) {
      tl.innerHTML = (SITE.experience || []).map(function (x) {
        var ladder = (x.ladder || []).map(function (l) {
          return '<span class="chip">' + esc(l) + "</span>";
        }).join("");
        var pts = (x.points || []).map(function (p) { return "<li>" + escText(p) + "</li>"; }).join("");
        var mList = x.metrics || [];
        var mets = mList.map(function (m) {
          return '<div class="met"><span class="met__v">' + esc(m.v) + "</span>" +
                 '<span class="met__l">' + esc(m.l) + "</span></div>";
        }).join("");
        // column count follows the number of metrics, so one metric fills
        // the row instead of leaving three empty cells beside it
        var cols = Math.min(mList.length, 4) || 1;
        return '<article class="tnode rv' + (x.current ? " now" : "") + '">' +
          '<span class="tnode__dot"></span>' +
          '<div class="tnode__period">' + esc(x.period) + "</div>" +
          '<h3 class="tnode__role">' + esc(x.role) + "</h3>" +
          '<div class="tnode__org">' +
            orgLogo(x.logo, x.short, x.org) +
            "<span>" + esc(x.org) + "</span>" +
          "</div>" +
          (ladder ? '<div class="tnode__ladder">' + ladder + "</div>" : "") +
          (mets ? '<div class="mets" style="grid-template-columns:repeat(' + cols +
                  ',minmax(0,1fr))">' + mets + "</div>" : "") +
          '<ul class="tnode__points">' + pts + "</ul>" +
        "</article>";
      }).join("");
    }

    var rolesEl = $("#roles");
    if (rolesEl) {
      rolesEl.innerHTML = (SITE.roles || []).map(function (r) {
        return '<div class="role">' +
          '<div class="role__top">' +
            orgLogo(r.logo, r.short, r.org) +
            '<span class="role__p">' + esc(r.period) + "</span>" +
          "</div>" +
          '<div class="role__t">' + esc(r.title) + "</div>" +
          '<div class="role__o">' + esc(r.org) + "</div>" +
          '<div class="role__n">' + escText(r.note || "") + "</div>" +
        "</div>";
      }).join("");
    }
  })();

  /* ============================================================
     FILM — the player only loads on click
     ============================================================ */
  (function films() {
    var w = $("#films");
    if (!w) return;
    w.innerHTML = (SITE.films || []).map(function (f) {
      return '<article class="film rv">' +
        '<div class="film__frame ' + (f.vertical ? "r916" : "r169") + '" data-yt="' + esc(f.youtubeId) + '">' +
          '<img class="film__poster" src="https://i.ytimg.com/vi/' + esc(f.youtubeId) +
            '/hqdefault.jpg" alt="" loading="lazy" decoding="async">' +
          '<button class="film__play" type="button" aria-label="Play ' + esc(f.title) + '"><span>▶</span></button>' +
        "</div>" +
        '<div class="film__body">' +
          '<div class="film__meta"><span>' + esc(f.year) + "</span><span>" + esc(f.role || "") + "</span></div>" +
          '<h3 class="film__title">' + esc(f.title) + "</h3>" +
          '<p class="film__sum">' + esc(f.summary || "") + "</p>" +
        "</div>" +
      "</article>";
    }).join("");

    // YouTube refuses to embed into a page opened straight off the disk
    // (file://) — it has no real origin to check, so the player returns
    // "Error 153". Live on https it is fine. When we're local, send the
    // viewer to YouTube instead of showing them a broken player.
    var isLocal = location.protocol === "file:";
    if (isLocal) {
      var note = document.createElement("p");
      note.className = "mono localnote";
      note.textContent =
        "Local preview: clicking play opens YouTube in a new tab. " +
        "Embedded playback works once the site is hosted.";
      w.parentNode.insertBefore(note, w);
    }

    w.addEventListener("click", function (e) {
      var btn = e.target.closest(".film__play"); if (!btn) return;
      var frame = btn.closest(".film__frame");
      var id = frame.dataset.yt;

      if (isLocal) {
        window.open("https://www.youtube.com/watch?v=" + encodeURIComponent(id), "_blank", "noopener");
        return;
      }
      frame.innerHTML =
        '<iframe src="https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) +
        '?autoplay=1&rel=0&modestbranding=1" title="Video player" allow="accelerometer; autoplay;' +
        ' clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"' +
        ' referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
    });
  })();

  /* ============================================================
     ABOUT / SKILLS / AWARDS / CONTACT
     ============================================================ */
  (function about() {
    var A = SITE.about || {};
    var h = $("#aboutHeading");
    if (h) h.innerHTML = esc(A.heading || "").replace(/camera/i, "<em>camera</em>");
    var b = $("#aboutBody");
    if (b) b.innerHTML = (A.body || []).map(function (p) { return "<p>" + boldNumbers(p) + "</p>"; }).join("");
    var f = $("#facts");
    if (f) f.innerHTML = (A.facts || []).map(function (x) {
      return '<div class="fact"><dt>' + esc(x.k) + "</dt><dd>" + esc(x.v) + "</dd></div>";
    }).join("");
    var p = $("#portrait");
    if (p) p.innerHTML = media("profile", SITE.portrait, SITE.name, "☺", "4 / 5") +
      '<span class="portrait__tag">' + esc(SITE.name) + " · Dhaka</span>";
  })();

  (function skills() {
    var el = $("#skills");
    if (!el) return;
    el.innerHTML = (SITE.skills || []).map(function (g, gi) {
      var rows = (g.items || []).map(function (s) {
        return '<li class="skill' + (s.core ? " core" : "") + '">' +
          '<span class="skill__n">' + esc(s.name) + "</span>" +
          (s.note ? '<span class="skill__note">' + esc(s.note) + "</span>" : "") +
        "</li>";
      }).join("");
      return '<div class="scard rv rv-d' + (gi % 4 + 1) + '">' +
        '<span class="scard__n">' + ("0" + (gi + 1)) + "</span>" +
        '<h3 class="scard__h">' + esc(g.group) + "</h3>" +
        '<ul class="skill-list">' + rows + "</ul>" +
      "</div>";
    }).join("");
  })();

  (function awards() {
    var el = $("#achievements");
    if (el) {
      /* Turns "Nov 2026" / "2018" / "" into something sortable, so the
         list orders itself and stays right when you add a row. Undated
         entries return -1 and sink to the bottom. */
      var MONTHS = { jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
                     jul: 7, aug: 8, sep: 9, oct: 10, nov: 11, dec: 12 };
      function dateKey(s) {
        if (!s) return -1;
        var y = s.match(/\d{4}/);
        if (!y) return -1;
        return Number(y[0]) * 12 + (MONTHS[s.slice(0, 3).toLowerCase()] || 0);
      }

      var rows = (SITE.achievements || []).slice().sort(function (a, b) {
        return dateKey(b.date) - dateKey(a.date);
      });

      el.innerHTML = rows.map(function (a) {
        /* The thumb slot is always emitted, even with no photo, so
           every title starts on the same vertical line. */
        var thumb = a.img
          ? '<figure class="achrow__ph">' + media(a.imgDir || "moments", a.img, a.title, "▣", "4 / 3") + "</figure>"
          : '<div class="achrow__ph is-empty" aria-hidden="true"></div>';

        return '<div class="achrow">' +
          thumb +
          '<div class="achrow__main">' +
            '<div class="achrow__t">' + escText(a.title) + "</div>" +
            '<div class="achrow__m">' + escText(a.meta) + "</div>" +
          "</div>" +
          (a.date ? '<div class="achrow__d">' + escText(a.date) + "</div>" : "") +
        "</div>";
      }).join("");

      /* One row can carry several shots (`more`), so the lightbox list is
         flat and `starts` says which entry each thumbnail opens on. Built
         from the same sorted `rows`, so the indices line up. */
      var flat = [], starts = [];
      rows.forEach(function (a) {
        if (!a.img) return;
        starts.push(flat.length);
        var dir = a.imgDir || "moments";
        [a.img].concat(a.more || []).forEach(function (f) {
          flat.push({ src: "assets/img/" + dir + "/" + f, title: a.title, sub: a.meta || "" });
        });
      });
      wireLightbox("#achievements .achrow__ph:not(.is-empty)", flat, starts);
    }
  })();

  (function contact() {
    var C = SITE.contact || {};
    var arrow = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor"' +
      ' stroke-width="1.6"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>';

    var cl = $("#clinks");
    if (cl) {
      cl.innerHTML = (C.links || []).map(function (l) {
        var ext = l.url.indexOf("mailto:") === 0 ? "" : ' target="_blank" rel="noopener"';
        return '<a class="clink" href="' + esc(l.url) + '"' + ext + ' data-cursor>' +
          '<span><span class="clink__l">' + esc(l.label) + "</span>" +
          '<span class="clink__h">' + esc(l.handle) + "</span></span>" + arrow + "</a>";
      }).join("") +
      '<a class="clink" href="tel:' + esc((C.phone || "").replace(/\s/g, "")) + '" data-cursor>' +
        '<span><span class="clink__l">Phone</span><span class="clink__h">' + esc(C.phone) +
        "</span></span>" + arrow + "</a>";
    }

    var cta = $("#ctaRow");
    if (cta) {
      var html = '<a class="btn gold" href="mailto:' + esc(C.email) + '" data-cursor>Email me →</a>';
      if (C.cvFile) {
        html += '<a class="btn" href="assets/docs/' + encodeURIComponent(C.cvFile) +
          '" target="_blank" rel="noopener" data-cursor>Download CV ↓</a>';
      }
      cta.innerHTML = html;
    }

    var refs = $("#refs");
    if (refs) {
      var show = SITE.showReferenceContacts === true;
      refs.innerHTML = (SITE.references || []).map(function (r) {
        var d = show
          ? '<a href="mailto:' + esc(r.email) + '">' + esc(r.email) + "</a><span>" + esc(r.phone) + "</span>"
          : "<span>Contact details on request</span>";
        return '<div class="ref"><div class="ref__n">' + esc(r.name) + "</div>" +
          '<div class="ref__t">' + esc(r.title) + "</div>" +
          '<div class="ref__c">' + d + "</div></div>";
      }).join("");
    }

    var mf = $("#menuFoot");
    if (mf) {
      mf.innerHTML = (C.links || []).map(function (l) {
        return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + "</a>";
      }).join("");
    }

    var y = $("#year");
    if (y) y.textContent = new Date().getFullYear();
  })();

  watchAll();
})();
