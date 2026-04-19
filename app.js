const continents = [
  {
    id: "Asia",
    name: "亚洲",
    type: "大洲",
    center: [95, 35],
    color: "#5fd6a2",
    image:
      "https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?auto=format&fit=crop&w=1200&q=80",
    summary: "从高原、群岛到季风海岸，亚洲的文化线索沿着河流、贸易和迁徙展开。",
    facts: [
      ["范围", "东亚、南亚、东南亚、中亚、西亚"],
      ["入口", "纪录片、古典诗词、民乐、城市电影"],
    ],
  },
  {
    id: "Europe",
    name: "欧洲",
    type: "大洲",
    center: [15, 52],
    color: "#e6c35c",
    image:
      "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80",
    summary: "欧洲的城市、海港和乡村留下了从史诗到交响乐的密集回声。",
    facts: [
      ["范围", "西欧、南欧、北欧、东欧"],
      ["入口", "艺术史、古典音乐、诗歌、现实主义电影"],
    ],
  },
  {
    id: "Africa",
    name: "非洲",
    type: "大洲",
    center: [20, 2],
    color: "#e86f61",
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80",
    summary: "非洲的沙漠、草原、雨林和海岸构成辽阔的叙事空间。",
    facts: [
      ["范围", "北非、西非、东非、中非、南部非洲"],
      ["入口", "自然纪录片、口述传统、鼓乐、当代电影"],
    ],
  },
  {
    id: "Americas",
    name: "美洲",
    type: "大洲",
    center: [-82, 18],
    color: "#7cc7d8",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    summary: "美洲把荒野、公路、移民、城市和音乐工业放在同一条长线上。",
    facts: [
      ["范围", "北美、中美、加勒比、南美"],
      ["入口", "生态纪录片、爵士、拉美诗歌、独立电影"],
    ],
  },
  {
    id: "Oceania",
    name: "大洋洲",
    type: "大洲",
    center: [135, -24],
    color: "#b98ee8",
    image:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&w=1200&q=80",
    summary: "大洋洲适合从海洋、岛屿生态和原住民叙事进入。",
    facts: [
      ["范围", "澳大利亚、新西兰、太平洋岛国"],
      ["入口", "海洋纪录片、民谣、自然电影"],
    ],
  },
  {
    id: "Antarctic",
    name: "南极洲",
    type: "大洲",
    center: [20, -82],
    color: "#c7d8df",
    image:
      "https://images.unsplash.com/photo-1518946222227-364f22132616?auto=format&fit=crop&w=1200&q=80",
    summary: "南极洲适合从极地科考、冰川、气候和野生动物纪录片进入。",
    facts: [
      ["范围", "南极大陆及周边岛屿"],
      ["入口", "极地纪录片、探险文学、环境电影"],
    ],
  },
];

const typeLabels = {
  documentary: "纪录片",
  poetry: "诗词",
  music: "音乐",
  film: "电影",
};

const countryContent = window.COUNTRY_CONTENT || [];
const countryById = new Map(countryContent.map((country) => [country.id, country]));
const linkedHighlightGroups = [new Set(["156", "158"])];
const timezoneOverrides = {
  156: 8,
  158: 8,
};
const countries = topojson
  .feature(window.WORLD_TOPOLOGY, window.WORLD_TOPOLOGY.objects.countries)
  .features.filter((feature) => countryById.has(String(feature.id).padStart(3, "0")));

const canvas = document.querySelector("#globe");
const ctx = canvas.getContext("2d");
const spinToggle = document.querySelector("#spinToggle");
const searchInput = document.querySelector("#searchInput");
const contentGrid = document.querySelector("#contentGrid");
const globeTooltip = document.querySelector("#globeTooltip");
const filters = document.querySelectorAll(".filter");

let selectedRegion = continents[0];
let selectedCountry = null;
let hoveredCountryId = null;
let activeFilter = "all";
let isSpinning = true;
let isDragging = false;
let previousPointer = null;
let rotation = [-104, -18, 0];
let projection = d3.geoOrthographic();
let path = d3.geoPath(projection, ctx);
let continentHits = [];
let countryScreenPoints = [];

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.max(640, Math.round(rect.width * ratio));
  canvas.height = canvas.width;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  projection = d3
    .geoOrthographic()
    .translate([rect.width / 2, rect.width / 2])
    .scale(rect.width * 0.42)
    .clipAngle(90)
    .precision(0.4);
  path = d3.geoPath(projection, ctx);
}

function drawGlobe() {
  const rect = canvas.getBoundingClientRect();
  const size = rect.width;
  const center = size / 2;
  projection.rotate(rotation);
  ctx.clearRect(0, 0, size, size);

  const ocean = ctx.createRadialGradient(center - size * 0.16, center - size * 0.22, 12, center, center, size * 0.44);
  ocean.addColorStop(0, "#357f8a");
  ocean.addColorStop(0.55, "#0f5f6b");
  ocean.addColorStop(1, "#052b33");

  ctx.beginPath();
  ctx.arc(center, center, size * 0.42, 0, Math.PI * 2);
  ctx.fillStyle = ocean;
  ctx.fill();

  drawGraticule();
  drawCountries();
  drawContinents();

  const shade = ctx.createRadialGradient(center - size * 0.14, center - size * 0.18, size * 0.05, center, center, size * 0.44);
  shade.addColorStop(0, "rgba(255,255,255,0.24)");
  shade.addColorStop(0.58, "rgba(255,255,255,0.03)");
  shade.addColorStop(1, "rgba(0,0,0,0.46)");
  ctx.beginPath();
  ctx.arc(center, center, size * 0.42, 0, Math.PI * 2);
  ctx.fillStyle = shade;
  ctx.fill();

  ctx.beginPath();
  ctx.arc(center, center, size * 0.42, 0, Math.PI * 2);
  ctx.lineWidth = 2;
  ctx.strokeStyle = "rgba(255,255,255,0.28)";
  ctx.stroke();
}

function drawGraticule() {
  ctx.beginPath();
  path(d3.geoGraticule10());
  ctx.lineWidth = 0.7;
  ctx.strokeStyle = "rgba(255,255,255,0.16)";
  ctx.stroke();
}

function drawCountries() {
  countryScreenPoints = [];
  for (const feature of countries) {
    const id = String(feature.id).padStart(3, "0");
    const content = countryById.get(id);
    const isSelected = isCountryHighlighted(id);
    const isHovered = hoveredCountryId === id;
    const centroid = d3.geoCentroid(feature);
    const point = projection(centroid);
    if (point && d3.geoDistance(centroid, [-rotation[0], -rotation[1]]) < Math.PI / 2) {
      countryScreenPoints.push({ feature, id, x: point[0], y: point[1] });
    }
    ctx.beginPath();
    path(feature);
    ctx.fillStyle = isSelected
      ? "rgba(230,195,92,0.9)"
      : isHovered
        ? "rgba(95,214,162,0.9)"
        : colorForRegion(content.region);
    ctx.fill();
    ctx.lineWidth = isSelected || isHovered ? 1.45 : 0.45;
    ctx.strokeStyle =
      isSelected || isHovered ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.24)";
    ctx.stroke();
  }
}

function isCountryHighlighted(id) {
  if (!selectedCountry) return false;
  if (selectedCountry.id === id) return true;
  return linkedHighlightGroups.some((group) => group.has(selectedCountry.id) && group.has(id));
}

function drawContinents() {
  continentHits = [];
  for (const continent of continents) {
    const point = projection(continent.center);
    if (!point) continue;
    const [x, y] = point;
    const visible = d3.geoDistance(continent.center, [-rotation[0], -rotation[1]]) < Math.PI / 2;
    if (!visible) continue;

    continentHits.push({ continent, x, y, radius: 18 });
    ctx.beginPath();
    ctx.arc(x, y, selectedRegion.id === continent.id && !selectedCountry ? 16 : 12, 0, Math.PI * 2);
    ctx.fillStyle = `${continent.color}42`;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x, y, 6, 0, Math.PI * 2);
    ctx.fillStyle = continent.color;
    ctx.fill();
    ctx.font = "700 16px Inter, sans-serif";
    ctx.fillStyle = "rgba(246,241,232,0.94)";
    ctx.fillText(continent.name, x + 12, y + 5);
  }
}

function colorForRegion(region) {
  const colors = {
    Africa: "rgba(112,158,92,0.78)",
    Americas: "rgba(82,156,174,0.78)",
    Asia: "rgba(95,166,118,0.8)",
    Europe: "rgba(184,159,88,0.82)",
    Oceania: "rgba(142,113,180,0.8)",
    Antarctic: "rgba(190,210,218,0.82)",
  };
  return colors[region] || "rgba(120,150,126,0.76)";
}

function selectContinent(continent) {
  selectedCountry = null;
  selectedRegion = continent;
  updatePanel({
    type: continent.type,
    name: continent.name,
    image: continent.image,
    summary: continent.summary,
    facts: continent.facts,
  });
  renderContent();
}

function selectCountry(feature) {
  const id = String(feature.id).padStart(3, "0");
  const country = countryById.get(id);
  if (!country) return;
  selectedCountry = country;
  selectedRegion = continents.find((continent) => continent.id === country.region) || selectedRegion;
  updatePanel({
    type: "国家 / 地区",
    name: displayName(country),
    image: country.flag || selectedRegion.image,
    summary: `${country.officialName} 位于 ${country.region}${country.subregion ? ` / ${country.subregion}` : ""}。这里已经预置纪录片、诗词、音乐和电影的本地链接入口。`,
    facts: [
      ["英文名", country.name],
      ["区域", country.subregion || country.region],
      ["当地时间", describeLocalTime(country)],
      ["链接", `${country.links.length} 个本地入口`],
    ],
  });
  renderContent();
}

function findCountryFeature(id) {
  return countries.find((feature) => String(feature.id).padStart(3, "0") === id);
}

function selectCountryById(id) {
  const feature = findCountryFeature(id);
  if (feature) selectCountry(feature);
}

function rotateToCountry(country) {
  const [lat, lon] = country.latlng || [0, 0];
  rotation = [-lon, Math.max(-75, Math.min(75, -lat)), 0];
  setSpinning(false);
  drawGlobe();
}

function setSpinning(value) {
  isSpinning = value;
  spinToggle.textContent = isSpinning ? "暂停旋转" : "继续旋转";
  spinToggle.setAttribute("aria-pressed", String(isSpinning));
}

function describeLocalTime(country) {
  const [, lon = 0] = country.latlng || [];
  const beijingNow = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Shanghai" }));
  const utcOffset = timezoneOverrides[country.id] ?? Math.max(-12, Math.min(14, Math.round(lon / 15)));
  const diffHours = utcOffset - 8;
  const localTime = new Date(beijingNow.getTime() + diffHours * 60 * 60 * 1000);
  const hour = localTime.getHours();
  const minute = String(localTime.getMinutes()).padStart(2, "0");
  const dayState = hour >= 6 && hour < 18 ? "白天" : "夜间";
  const sign = utcOffset >= 0 ? "+" : "";
  const label = timezoneOverrides[country.id] === undefined ? "约 " : "";
  return `${dayState} ${String(hour).padStart(2, "0")}:${minute}，${label}UTC${sign}${utcOffset}`;
}

function updatePanel(panel) {
  const image = document.querySelector("#regionImage");
  image.src = panel.image;
  image.alt = panel.name;
  image.classList.toggle("flag-image", panel.type !== "大洲");
  document.querySelector("#regionType").textContent = panel.type;
  document.querySelector("#regionName").textContent = panel.name;
  document.querySelector("#regionSummary").textContent = panel.summary;
  document.querySelector("#regionFacts").innerHTML = panel.facts
    .map(
      ([label, value]) =>
        `<dt data-fact-label="${escapeHtml(label)}">${escapeHtml(label)}</dt><dd data-fact-value="${escapeHtml(label)}">${escapeHtml(value)}</dd>`,
    )
    .join("");
}

function renderContent() {
  const term = searchInput.value.trim().toLowerCase();
  let rows = [];

  if (selectedCountry && !term) {
    rows = selectedCountry.links.map((link) => ({ ...link, country: selectedCountry }));
  } else {
    const pool = term
      ? countryContent
      : countryContent.filter((country) => {
          return !selectedRegion || country.region === selectedRegion.id;
        });

    rows = pool.flatMap((country) => country.links.map((link) => ({ ...link, country })));
  }

  rows = rows.filter((item) => {
    const typeMatch = activeFilter === "all" || item.type === activeFilter;
    const text = `${item.country.displayNameZh || ""} ${item.country.name} ${item.country.officialName} ${item.country.region} ${item.country.subregion} ${item.title} ${item.source} ${item.description}`.toLowerCase();
    return typeMatch && (!term || text.includes(term));
  });

  contentGrid.innerHTML =
    rows
      .slice(0, 96)
      .map((item) => renderLinkCard(item))
      .join("") ||
    `<div class="empty">没有找到匹配内容。换一个国家、大洲或关键词。</div>`;
}

function renderLinkCard(item) {
  const id = noteId(item);
  const note = localStorage.getItem(id) || "";
  return `
    <article class="item-card">
      <div class="item-body">
        <div class="item-meta">
          <span class="pill">${typeLabels[item.type]}</span>
          <span class="pill">${escapeHtml(displayName(item.country))}</span>
          <span class="pill">${escapeHtml(item.source)}</span>
        </div>
        <h3><a href="${item.url}" target="_blank" rel="noreferrer">${escapeHtml(item.title)}</a></h3>
        <p>${escapeHtml(item.description)}</p>
        ${
          item.type === "documentary"
            ? `<label class="note-area">
                <span>观后备注</span>
                <textarea data-note="${id}" placeholder="看完后写下地点、人物、镜头或想继续查的关键词">${escapeHtml(note)}</textarea>
              </label>`
            : ""
        }
      </div>
    </article>
  `;
}

function noteId(item) {
  return `world-map-note:${item.country.id}:${item.title}`;
}

function displayName(country) {
  if (country.id === "158") return country.name;
  if (country.displayNameZh) return country.displayNameZh;
  if (country.countryCode && typeof Intl !== "undefined" && Intl.DisplayNames) {
    try {
      return new Intl.DisplayNames(["zh-CN"], { type: "region" }).of(country.countryCode) || country.name;
    } catch {
      return country.name;
    }
  }
  return country.name;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" }[char];
  });
}

function countryAtPoint(clientX, clientY) {
  const rect = canvas.getBoundingClientRect();
  const point = [clientX - rect.left, clientY - rect.top];
  const center = rect.width / 2;
  const radius = rect.width * 0.42;
  if (Math.hypot(point[0] - center, point[1] - center) > radius) return null;

  const coords = projection.invert(point);
  if (!coords) return null;

  const marker = continentHits.find((hit) => Math.hypot(hit.x - point[0], hit.y - point[1]) <= hit.radius);
  if (marker) return { continent: marker.continent };

  for (let i = countries.length - 1; i >= 0; i -= 1) {
    if (d3.geoContains(countries[i], coords)) {
      return { feature: countries[i] };
    }
  }
  const nearest = nearestCountry(point);
  if (nearest) return { feature: nearest.feature };
  return null;
}

function nearestCountry(point) {
  let best = null;
  for (const item of countryScreenPoints) {
    const distance = Math.hypot(item.x - point[0], item.y - point[1]);
    if (!best || distance < best.distance) {
      best = { ...item, distance };
    }
  }
  return best && best.distance <= 20 ? best : null;
}

function updateTooltip(event) {
  if (isDragging) return;
  const hit = countryAtPoint(event.clientX, event.clientY);
  const feature = hit?.feature;
  hoveredCountryId = feature ? String(feature.id).padStart(3, "0") : null;
  if (!feature) {
    globeTooltip.classList.remove("visible");
    return;
  }

  const country = countryById.get(hoveredCountryId);
  const rect = canvas.getBoundingClientRect();
  globeTooltip.textContent = `${displayName(country)} · ${describeLocalTime(country)}`;
  globeTooltip.style.left = `${event.clientX - rect.left + 14}px`;
  globeTooltip.style.top = `${event.clientY - rect.top + 14}px`;
  globeTooltip.classList.add("visible");
}

function clearTooltip() {
  hoveredCountryId = null;
  globeTooltip.classList.remove("visible");
}

function animate() {
  if (isSpinning && !isDragging) {
    rotation[0] -= 0.08;
  }
  drawGlobe();
  requestAnimationFrame(animate);
}

canvas.addEventListener("pointerdown", (event) => {
  isDragging = true;
  previousPointer = { x: event.clientX, y: event.clientY };
  canvas.setPointerCapture(event.pointerId);
});

canvas.addEventListener("pointermove", (event) => {
  if (!isDragging || !previousPointer) {
    updateTooltip(event);
    return;
  }
  const dx = event.clientX - previousPointer.x;
  const dy = event.clientY - previousPointer.y;
  rotation[0] += dx * 0.32;
  rotation[1] = Math.max(-75, Math.min(75, rotation[1] - dy * 0.24));
  previousPointer = { x: event.clientX, y: event.clientY };
});

canvas.addEventListener("pointerup", (event) => {
  const hit = countryAtPoint(event.clientX, event.clientY);
  if (hit?.continent) selectContinent(hit.continent);
  if (hit?.feature) selectCountry(hit.feature);
  isDragging = false;
  previousPointer = null;
});

canvas.addEventListener("pointerleave", () => {
  isDragging = false;
  previousPointer = null;
  clearTooltip();
});

spinToggle.addEventListener("click", () => {
  setSpinning(!isSpinning);
});

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderContent();
  });
});

searchInput.addEventListener("input", () => {
  renderContent();
  focusCountryFromSearch();
});
window.addEventListener("resize", () => {
  resizeCanvas();
  drawGlobe();
});

window.setInterval(() => {
  if (!selectedCountry) return;
  const timeValue = document.querySelector('[data-fact-value="当地时间"]');
  if (timeValue) timeValue.textContent = describeLocalTime(selectedCountry);
}, 60 * 1000);

function focusCountryFromSearch() {
  const term = searchInput.value.trim().toLowerCase();
  if (!term) return;
  const indexed = countryContent.map((country) => {
    const names = [
      country.displayNameZh,
      country.name,
      country.officialName,
      country.mapName,
      country.countryCode,
    ]
      .filter(Boolean)
      .map((value) => String(value).toLowerCase());
    return { country, names };
  });

  const exactMatches = indexed.filter((item) => item.names.some((name) => name === term));
  const partialMatches = indexed.filter((item) =>
    item.names.some((name) => term.length >= 2 && name.includes(term)),
  );
  const matches = exactMatches.length ? exactMatches : partialMatches;
  if (matches.length !== 1) return;
  const country = matches[0].country;
  rotateToCountry(country);
  selectCountryById(country.id);
}

resizeCanvas();
selectContinent(continents[0]);
animate();
