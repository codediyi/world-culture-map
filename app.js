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

const solarPlanets = [
  {
    id: "mercury",
    name: "水星",
    orbit: 96,
    radius: 7,
    speed: 0.00048,
    color: "#b8afa3",
    summary: "距离太阳最近的岩石行星，表面温差极大。",
    facts: [
      ["类型", "岩石行星"],
      ["特点", "最靠近太阳，几乎没有大气"],
      ["页面", "行星视图，不包含国家和大洲"],
    ],
  },
  {
    id: "venus",
    name: "金星",
    orbit: 142,
    radius: 12,
    speed: 0.00034,
    color: "#d8b36a",
    summary: "被浓厚云层覆盖的行星，常被称为地球的近邻。",
    facts: [
      ["类型", "岩石行星"],
      ["特点", "浓厚大气，温室效应强"],
      ["页面", "行星视图，不包含国家和大洲"],
    ],
  },
  {
    id: "earth",
    name: "地球",
    orbit: 194,
    radius: 14,
    speed: 0.00027,
    color: "#4ba6d8",
    summary: "点击地球进入当前的世界文化地图。",
    facts: [
      ["类型", "岩石行星"],
      ["特点", "海洋、陆地、大气与生命"],
      ["页面", "进入真实国家边界地球模型"],
    ],
  },
  {
    id: "mars",
    name: "火星",
    orbit: 250,
    radius: 11,
    speed: 0.00022,
    color: "#c46a4a",
    summary: "红色岩石行星，拥有峡谷、火山和极冠。",
    facts: [
      ["类型", "岩石行星"],
      ["特点", "红色地表、稀薄大气、极地冰盖"],
      ["页面", "行星视图，不包含国家和大洲"],
    ],
  },
  {
    id: "jupiter",
    name: "木星",
    orbit: 332,
    radius: 28,
    speed: 0.00012,
    color: "#d6b08a",
    summary: "太阳系最大的气态巨行星，拥有醒目的云带和大红斑。",
    facts: [
      ["类型", "气态巨行星"],
      ["特点", "体积最大，云带明显"],
      ["页面", "行星视图，不包含国家和大洲"],
    ],
  },
  {
    id: "saturn",
    name: "土星",
    orbit: 430,
    radius: 24,
    speed: 0.000095,
    color: "#d9c38f",
    summary: "以宽阔明亮的行星环闻名的气态巨行星。",
    facts: [
      ["类型", "气态巨行星"],
      ["特点", "行星环显著"],
      ["页面", "行星视图，不包含国家和大洲"],
    ],
  },
  {
    id: "uranus",
    name: "天王星",
    orbit: 522,
    radius: 19,
    speed: 0.000068,
    color: "#8ed5d3",
    summary: "浅蓝绿色的冰巨行星，自转轴倾斜非常明显。",
    facts: [
      ["类型", "冰巨行星"],
      ["特点", "自转轴倾斜，色调清冷"],
      ["页面", "行星视图，不包含国家和大洲"],
    ],
  },
  {
    id: "neptune",
    name: "海王星",
    orbit: 604,
    radius: 19,
    speed: 0.000054,
    color: "#4d74d8",
    summary: "深蓝色冰巨行星，拥有强风和遥远轨道。",
    facts: [
      ["类型", "冰巨行星"],
      ["特点", "深蓝色、强风、轨道遥远"],
      ["页面", "行星视图，不包含国家和大洲"],
    ],
  },
];

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
const solarCanvas = document.querySelector("#solarCanvas");
const solarCtx = solarCanvas.getContext("2d");
const planetCanvas = document.querySelector("#planetCanvas");
const planetCtx = planetCanvas.getContext("2d");
const spinToggle = document.querySelector("#spinToggle");
const searchInput = document.querySelector("#searchInput");
const contentGrid = document.querySelector("#contentGrid");
const globeTooltip = document.querySelector("#globeTooltip");
const solarHint = document.querySelector("#solarHint");
const planetArea = document.querySelector("#planetArea");
const backToSolar = document.querySelector("#backToSolar");
const enterEarth = document.querySelector("#enterEarth");
const filters = document.querySelectorAll(".filter");

let solarHits = [];
let stars = [];
let activePlanet = solarPlanets.find((planet) => planet.id === "mars");
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
let planetSpin = 0;

function resizeSceneCanvas(sceneCanvas) {
  const rect = sceneCanvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  sceneCanvas.width = Math.max(320, Math.round(rect.width * ratio));
  sceneCanvas.height = Math.max(320, Math.round(rect.height * ratio));
  const sceneCtx = sceneCanvas.getContext("2d");
  sceneCtx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function resizeSolarCanvas() {
  resizeSceneCanvas(solarCanvas);
  const rect = solarCanvas.getBoundingClientRect();
  stars = Array.from({ length: 150 }, (_, index) => {
    const seed = Math.sin(index * 124.67) * 10000;
    const seed2 = Math.sin(index * 48.31) * 10000;
    return {
      x: (seed - Math.floor(seed)) * rect.width,
      y: (seed2 - Math.floor(seed2)) * rect.height,
      r: 0.6 + ((index * 17) % 10) / 12,
      a: 0.25 + ((index * 23) % 10) / 18,
    };
  });
}

function resizePlanetCanvas() {
  resizeSceneCanvas(planetCanvas);
}

function drawSolarSystem(time) {
  const rect = solarCanvas.getBoundingClientRect();
  const width = rect.width;
  const height = rect.height;
  const sun = {
    x: Math.max(118, width * 0.18),
    y: height * 0.54,
  };
  const orbitScale = Math.min(width / 980, height / 760);

  solarCtx.clearRect(0, 0, width, height);
  solarCtx.fillStyle = "#050908";
  solarCtx.fillRect(0, 0, width, height);

  for (const star of stars) {
    solarCtx.beginPath();
    solarCtx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    solarCtx.fillStyle = `rgba(246,241,232,${star.a})`;
    solarCtx.fill();
  }

  const sunGlow = solarCtx.createRadialGradient(sun.x, sun.y, 12, sun.x, sun.y, 132 * orbitScale);
  sunGlow.addColorStop(0, "rgba(255,220,112,1)");
  sunGlow.addColorStop(0.32, "rgba(230,121,67,0.62)");
  sunGlow.addColorStop(1, "rgba(230,121,67,0)");
  solarCtx.beginPath();
  solarCtx.arc(sun.x, sun.y, 132 * orbitScale, 0, Math.PI * 2);
  solarCtx.fillStyle = sunGlow;
  solarCtx.fill();

  solarCtx.beginPath();
  solarCtx.arc(sun.x, sun.y, 42 * orbitScale, 0, Math.PI * 2);
  solarCtx.fillStyle = "#f0c85c";
  solarCtx.fill();

  solarHits = [];
  for (const planet of solarPlanets) {
    const orbit = planet.orbit * orbitScale;
    const radius = Math.max(planet.radius * orbitScale, planet.id === "earth" ? 11 : 6);
    const angle = time * planet.speed + planet.orbit * 0.017;
    const x = sun.x + Math.cos(angle) * orbit;
    const y = sun.y + Math.sin(angle) * orbit * 0.42;

    solarCtx.beginPath();
    solarCtx.ellipse(sun.x, sun.y, orbit, orbit * 0.42, 0, 0, Math.PI * 2);
    solarCtx.strokeStyle = "rgba(255,255,255,0.13)";
    solarCtx.lineWidth = 1;
    solarCtx.stroke();

    drawSolarPlanet(planet, x, y, radius);
    solarHits.push({ planet, x, y, radius: radius + 10 });
  }
}

function drawSolarPlanet(planet, x, y, radius) {
  const gradient = solarCtx.createRadialGradient(x - radius * 0.35, y - radius * 0.35, 2, x, y, radius);
  gradient.addColorStop(0, "#ffffff");
  gradient.addColorStop(0.22, planet.color);
  gradient.addColorStop(1, "rgba(0,0,0,0.82)");
  solarCtx.beginPath();
  solarCtx.arc(x, y, radius, 0, Math.PI * 2);
  solarCtx.fillStyle = gradient;
  solarCtx.fill();

  if (planet.id === "saturn") {
    solarCtx.beginPath();
    solarCtx.ellipse(x, y, radius * 1.9, radius * 0.52, -0.25, 0, Math.PI * 2);
    solarCtx.strokeStyle = "rgba(236,219,163,0.82)";
    solarCtx.lineWidth = 2;
    solarCtx.stroke();
  }

  if (planet.id === "earth") {
    solarCtx.beginPath();
    solarCtx.arc(x, y, radius + 7, 0, Math.PI * 2);
    solarCtx.strokeStyle = "rgba(95,214,162,0.75)";
    solarCtx.lineWidth = 2;
    solarCtx.stroke();
  }

  solarCtx.font = "700 14px Inter, sans-serif";
  solarCtx.fillStyle = "rgba(246,241,232,0.9)";
  solarCtx.fillText(planet.name, x + radius + 8, y + 5);
}

function showPlanet(planet) {
  activePlanet = planet;
  document.querySelector("#planetName").textContent = planet.name;
  document.querySelector("#planetSummary").textContent = planet.summary;
  document.querySelector("#planetFacts").innerHTML = planet.facts
    .map(
      ([label, value]) =>
        `<dt data-fact-label="${escapeHtml(label)}">${escapeHtml(label)}</dt><dd data-fact-value="${escapeHtml(label)}">${escapeHtml(value)}</dd>`,
    )
    .join("");
  planetArea.classList.remove("is-hidden");
  resizePlanetCanvas();
  planetArea.scrollIntoView({ behavior: "smooth", block: "start" });
}

function drawPlanetDetail() {
  const rect = planetCanvas.getBoundingClientRect();
  const size = rect.width;
  const center = size / 2;
  const radius = size * 0.33;
  const planet = activePlanet;
  planetCtx.clearRect(0, 0, size, size);

  const glow = planetCtx.createRadialGradient(center, center, radius * 0.4, center, center, radius * 1.55);
  glow.addColorStop(0, `${planet.color}66`);
  glow.addColorStop(1, "rgba(0,0,0,0)");
  planetCtx.beginPath();
  planetCtx.arc(center, center, radius * 1.55, 0, Math.PI * 2);
  planetCtx.fillStyle = glow;
  planetCtx.fill();

  const body = planetCtx.createRadialGradient(
    center - radius * 0.35,
    center - radius * 0.4,
    radius * 0.08,
    center,
    center,
    radius,
  );
  body.addColorStop(0, "#ffffff");
  body.addColorStop(0.24, planet.color);
  body.addColorStop(1, "rgba(0,0,0,0.82)");
  planetCtx.beginPath();
  planetCtx.arc(center, center, radius, 0, Math.PI * 2);
  planetCtx.fillStyle = body;
  planetCtx.fill();

  planetCtx.save();
  planetCtx.beginPath();
  planetCtx.arc(center, center, radius, 0, Math.PI * 2);
  planetCtx.clip();
  for (let i = -5; i <= 5; i += 1) {
    const y = center + i * radius * 0.18;
    const offset = Math.sin(planetSpin + i) * radius * 0.08;
    planetCtx.beginPath();
    planetCtx.ellipse(center + offset, y, radius * 0.95, radius * 0.055, 0, 0, Math.PI * 2);
    planetCtx.fillStyle = "rgba(255,255,255,0.11)";
    planetCtx.fill();
  }
  planetCtx.restore();

  if (planet.id === "saturn") {
    planetCtx.beginPath();
    planetCtx.ellipse(center, center, radius * 1.55, radius * 0.32, -0.22, 0, Math.PI * 2);
    planetCtx.strokeStyle = "rgba(236,219,163,0.8)";
    planetCtx.lineWidth = Math.max(3, radius * 0.035);
    planetCtx.stroke();
  }

  planetSpin += 0.018;
}

function enterEarthView() {
  planetArea.classList.add("is-hidden");
  document.querySelector(".globe-area").scrollIntoView({ behavior: "smooth", block: "start" });
  window.setTimeout(() => {
    resizeCanvas();
    drawGlobe();
  }, 260);
}

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

function solarPlanetAtPoint(clientX, clientY) {
  const rect = solarCanvas.getBoundingClientRect();
  const x = clientX - rect.left;
  const y = clientY - rect.top;
  return solarHits.find((hit) => Math.hypot(hit.x - x, hit.y - y) <= hit.radius)?.planet || null;
}

function animate() {
  const now = performance.now();
  drawSolarSystem(now);
  if (!planetArea.classList.contains("is-hidden")) {
    drawPlanetDetail();
  }
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

solarCanvas.addEventListener("pointermove", (event) => {
  const planet = solarPlanetAtPoint(event.clientX, event.clientY);
  solarCanvas.style.cursor = planet ? "pointer" : "default";
  solarHint.textContent = planet
    ? planet.id === "earth"
      ? "点击地球进入世界文化地图"
      : `点击${planet.name}进入行星页面`
    : "点击一颗行星";
});

solarCanvas.addEventListener("pointerleave", () => {
  solarCanvas.style.cursor = "default";
  solarHint.textContent = "点击一颗行星";
});

solarCanvas.addEventListener("click", (event) => {
  const planet = solarPlanetAtPoint(event.clientX, event.clientY);
  if (!planet) return;
  if (planet.id === "earth") {
    enterEarthView();
    return;
  }
  showPlanet(planet);
});

spinToggle.addEventListener("click", () => {
  setSpinning(!isSpinning);
});

backToSolar.addEventListener("click", () => {
  planetArea.classList.add("is-hidden");
  document.querySelector("#solarSystem").scrollIntoView({ behavior: "smooth", block: "start" });
});

enterEarth.addEventListener("click", enterEarthView);

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
  resizeSolarCanvas();
  if (!planetArea.classList.contains("is-hidden")) resizePlanetCanvas();
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

resizeSolarCanvas();
resizeCanvas();
selectContinent(continents[0]);
animate();
