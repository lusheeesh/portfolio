(() => {
  'use strict';

  const OKA_QUOTES = {
    general: [
      'Aduh sakit woi!',
      'Telape!',
      'Stop ko pantat!',
      'cuki!',
      'WOI!',
      'Puki!',
      'Woi pelan-pelan!',
      'Tolonggg!'
    ],
    slap: [
      'Aduh pipiku panas!',
      'aduhuhu!',
      'Pipi na mo arfah!'
    ],
    sharp: [
      'aduhi!',
      'Baju baruku robek!',
      'AAAAA!',
      'woiiiiiii!'
    ],
    gun: [
      'Mana perisai mu!',
      'Ampun bosku!',
      'Panas panas panas!',
      'Balala!'
    ],
    element: [
      'AAAAAAA!',
      'BERDIRIKA!',
      'Gravitasi macam apa ini?!',
      'hujancok!'
    ],
    heal: [
      'siapma mabar blockmango!',
      'kuraccako'
    ]
  };

  const SKINS = [
    {
      id: 'smp_default',
      name: 'SMP Topi Biru',
      skinColor: '#f1c29b',
      shirtColor: '#f8fafc',
      pantsColor: '#1e3a8a',
      shoeColor: '#111827',
      capMain: '#1d4ed8',
      capVisor: '#172554',
      tieColor: '#1e3a8a',
      stitch: false
    },
    {
      id: 'burlap_classic',
      name: 'Boneka Karung',
      skinColor: '#c99b68',
      shirtColor: '#b98956',
      pantsColor: '#29487d',
      shoeColor: '#5c3a21',
      capMain: '#1d4ed8',
      capVisor: '#172554',
      tieColor: null,
      stitch: true
    },
    {
      id: 'pramuka',
      name: 'Pramuka',
      skinColor: '#eab68c',
      shirtColor: '#c29b61',
      pantsColor: '#4a3219',
      shoeColor: '#18181b',
      capMain: '#1d4ed8',
      capVisor: '#172554',
      tieColor: '#dc2626',
      stitch: false
    },
    {
      id: 'batik_indo',
      name: 'Batik Sekolah',
      skinColor: '#f1c29b',
      shirtColor: '#7c2d12',
      pantsColor: '#0f172a',
      shoeColor: '#09090b',
      capMain: '#1d4ed8',
      capVisor: '#172554',
      tieColor: '#f59e0b',
      stitch: false
    },
    {
      id: 'olahraga',
      name: 'Baju Olahraga',
      skinColor: '#f1c29b',
      shirtColor: '#0284c7',
      pantsColor: '#1e293b',
      shoeColor: '#e11d48',
      capMain: '#1d4ed8',
      capVisor: '#172554',
      tieColor: null,
      stitch: false
    },
    {
      id: 'ninja_oka',
      name: 'Ninja Oka',
      skinColor: '#e2b48d',
      shirtColor: '#18181b',
      pantsColor: '#09090b',
      shoeColor: '#dc2626',
      capMain: '#1d4ed8',
      capVisor: '#172554',
      tieColor: '#dc2626',
      stitch: false
    }
  ];

  const MAPS = [
    {
      id: 'kelas',
      name: 'Kelas SMP',
      gravity: -24,
      bgTop: '#1e293b',
      bgBottom: '#0f172a',
      floorColor: '#78350f',
      wallColor: '#cbd5e1',
      accent: '#166534',
      specialWeapons: [
        { id: 'penghapus_papan', name: 'Penghapus Papan', cat: 'peta', dmg: 14, force: 16, mode: 'throw', color: '#334155', quoteType: 'slap' },
        { id: 'penggaris_besi', name: 'Penggaris Besi', cat: 'peta', dmg: 22, force: 22, mode: 'melee', color: '#94a3b8', quoteType: 'slap' },
        { id: 'busur_jangka', name: 'Jangka Tajam', cat: 'peta', dmg: 28, force: 18, mode: 'sharp_throw', color: '#38bdf8', quoteType: 'sharp' }
      ]
    },
    {
      id: 'losari',
      name: 'Pantai Losari',
      gravity: -23,
      bgTop: '#0369a1',
      bgBottom: '#f59e0b',
      floorColor: '#d97706',
      wallColor: '#0284c7',
      accent: '#fbbf24',
      specialWeapons: [
        { id: 'pisang_epe', name: 'Pisang Epe Panas', cat: 'peta', dmg: 18, force: 17, mode: 'throw', color: '#eab308', quoteType: 'general' },
        { id: 'kelapa_muda', name: 'Kelapa Muda', cat: 'peta', dmg: 30, force: 28, mode: 'throw', color: '#16a34a', quoteType: 'general' },
        { id: 'jangkar_phinisi', name: 'Jangkar Phinisi', cat: 'peta', dmg: 45, force: 36, mode: 'drop', color: '#475569', quoteType: 'element' }
      ]
    },
    {
      id: 'dojo',
      name: 'Dojo Samurai',
      gravity: -24,
      bgTop: '#450a0a',
      bgBottom: '#1c1917',
      floorColor: '#92400e',
      wallColor: '#fef3c7',
      accent: '#dc2626',
      specialWeapons: [
        { id: 'katana_naga', name: 'Katana Naga', cat: 'peta', dmg: 38, force: 25, mode: 'slash', color: '#ef4444', quoteType: 'sharp' },
        { id: 'kunai_ledak', name: 'Kunai Ledak', cat: 'peta', dmg: 34, force: 30, mode: 'explosive_throw', color: '#f97316', quoteType: 'sharp' },
        { id: 'lonceng_kuil', name: 'Lonceng Kuil', cat: 'peta', dmg: 48, force: 38, mode: 'drop', color: '#ca8a04', quoteType: 'element' }
      ]
    },
    {
      id: 'lab',
      name: 'Lab Plasma',
      gravity: -21,
      bgTop: '#042f2e',
      bgBottom: '#090d16',
      floorColor: '#1e293b',
      wallColor: '#0f172a',
      accent: '#10b981',
      specialWeapons: [
        { id: 'senapan_plasma', name: 'Senapan Plasma', cat: 'peta', dmg: 32, force: 26, mode: 'gun', color: '#10b981', quoteType: 'gun' },
        { id: 'tabung_asam', name: 'Tabung Asam', cat: 'peta', dmg: 36, force: 22, mode: 'explosive_throw', color: '#84cc16', quoteType: 'element' },
        { id: 'koil_tesla', name: 'Koil Tesla', cat: 'peta', dmg: 40, force: 28, mode: 'lightning', color: '#22d3ee', quoteType: 'element' }
      ]
    },
    {
      id: 'orbit',
      name: 'Stasiun Orbit',
      gravity: -9.5,
      bgTop: '#020617',
      bgBottom: '#1e1b4b',
      floorColor: '#334155',
      wallColor: '#1e293b',
      accent: '#818cf8',
      specialWeapons: [
        { id: 'blaster_ion', name: 'Blaster Ion', cat: 'peta', dmg: 30, force: 25, mode: 'gun', color: '#818cf8', quoteType: 'gun' },
        { id: 'pedang_laser', name: 'Pedang Laser', cat: 'peta', dmg: 42, force: 28, mode: 'slash', color: '#38bdf8', quoteType: 'sharp' },
        { id: 'satelit_jatuh', name: 'Satelit Jatuh', cat: 'peta', dmg: 55, force: 42, mode: 'drop', color: '#cbd5e1', quoteType: 'element' }
      ]
    }
  ];

  const BASE_WEAPONS = [
    // PUKUL
    { id: 'tangan', name: 'Tangan Kosong', cat: 'pukul', dmg: 8, force: 18, mode: 'grab', color: '#fbbf24', quoteType: 'general' },
    { id: 'tamparan', name: 'Tamparan Maut', cat: 'pukul', dmg: 14, force: 22, mode: 'melee', color: '#f472b6', quoteType: 'slap' },
    { id: 'sandal_jepit', name: 'Sandal Jepit', cat: 'pukul', dmg: 18, force: 24, mode: 'throw', color: '#38bdf8', quoteType: 'slap' },
    { id: 'tongkat_bisbol', name: 'Tongkat Bisbol', cat: 'pukul', dmg: 24, force: 30, mode: 'melee', color: '#d97706', quoteType: 'general' },
    { id: 'panci_baja', name: 'Panci Baja', cat: 'pukul', dmg: 26, force: 32, mode: 'melee', color: '#94a3b8', quoteType: 'slap' },
    { id: 'palu_godam', name: 'Palu', cat: 'pukul', dmg: 34, force: 40, mode: 'melee', color: '#ef4444', quoteType: 'general' },
    { id: 'tinju_roket', name: 'Tinju Roket', cat: 'pukul', dmg: 36, force: 44, mode: 'throw', color: '#f97316', quoteType: 'general' },
    { id: 'brankas', name: 'Brankas Besi', cat: 'pukul', dmg: 48, force: 45, mode: 'drop', color: '#475569', quoteType: 'general' },

    // TAJAM
    { id: 'pisau_lipat', name: 'Pisau Lipat', cat: 'tajam', dmg: 22, force: 16, mode: 'slash', color: '#cbd5e1', quoteType: 'sharp' },
    { id: 'bintang_ninja', name: 'Bintang Ninja', cat: 'tajam', dmg: 20, force: 18, mode: 'sharp_throw', color: '#e2e8f0', quoteType: 'sharp' },
    { id: 'pisau_lempar', name: 'Pisau Lempar', cat: 'tajam', dmg: 24, force: 20, mode: 'sharp_throw', color: '#94a3b8', quoteType: 'sharp' },
    { id: 'tombak_bambu', name: 'Tombak Bambu', cat: 'tajam', dmg: 28, force: 24, mode: 'sharp_throw', color: '#84cc16', quoteType: 'sharp' },
    { id: 'kapak_tempur', name: 'Kapak Tempur', cat: 'tajam', dmg: 34, force: 28, mode: 'slash', color: '#f87171', quoteType: 'sharp' },
    { id: 'gergaji_mesin', name: 'Gergaji Mesin', cat: 'tajam', dmg: 16, force: 14, mode: 'saw', color: '#facc15', quoteType: 'sharp' },
    { id: 'jebakan_duri', name: 'Jebakan Duri', cat: 'tajam', dmg: 22, force: 18, mode: 'trap', color: '#f43f5e', quoteType: 'sharp' },

    // SENJATA
    { id: 'pistol_9mm', name: 'Pistol 9mm', cat: 'senjata', dmg: 20, force: 22, mode: 'gun', color: '#94a3b8', quoteType: 'gun' },
    { id: 'revolver', name: 'Revolver Magnum', cat: 'senjata', dmg: 30, force: 30, mode: 'gun', color: '#cbd5e1', quoteType: 'gun' },
    { id: 'uzi', name: 'SMG Uzi', cat: 'senjata', dmg: 12, force: 14, mode: 'auto_gun', color: '#64748b', quoteType: 'gun' },
    { id: 'ak47', name: 'Senapan AK-47', cat: 'senjata', dmg: 18, force: 20, mode: 'auto_gun', color: '#b45309', quoteType: 'gun' },
    { id: 'shotgun', name: 'Shotgun Pompa', cat: 'senjata', dmg: 38, force: 38, mode: 'shotgun', color: '#475569', quoteType: 'gun' },
    { id: 'sniper', name: 'Sniper Berat', cat: 'senjata', dmg: 52, force: 44, mode: 'gun', color: '#10b981', quoteType: 'gun' },
    { id: 'minigun', name: 'Minigun Putar', cat: 'senjata', dmg: 14, force: 16, mode: 'auto_gun', color: '#38bdf8', quoteType: 'gun' },
    { id: 'laser_sinar', name: 'Laser Sinar', cat: 'senjata', dmg: 28, force: 20, mode: 'laser', color: '#ef4444', quoteType: 'gun' },

    // LEDAKAN
    { id: 'petasan_banting', name: 'Petasan Banting', cat: 'ledakan', dmg: 18, force: 24, mode: 'explosive_throw', color: '#f43f5e', quoteType: 'element' },
    { id: 'granat_nanas', name: 'Granat Nanas', cat: 'ledakan', dmg: 38, force: 42, mode: 'explosive_throw', color: '#22c55e', quoteType: 'element' },
    { id: 'dinamit', name: 'Dinamit TNT', cat: 'ledakan', dmg: 44, force: 46, mode: 'explosive_throw', color: '#ef4444', quoteType: 'element' },
    { id: 'bom_c4', name: 'Bom Tempel C4', cat: 'ledakan', dmg: 48, force: 48, mode: 'explosive_throw', color: '#eab308', quoteType: 'element' },
    { id: 'peluncur_roket', name: 'Peluncur Roket', cat: 'ledakan', dmg: 50, force: 50, mode: 'rocket', color: '#f97316', quoteType: 'element' },
    { id: 'nuklir_mini', name: 'Nuklir Mini', cat: 'ledakan', dmg: 75, force: 60, mode: 'drop_nuke', color: '#a3e635', quoteType: 'element' },

    // ELEMEN
    { id: 'penyembur_api', name: 'Penyembur Api', cat: 'elemen', dmg: 14, force: 12, mode: 'flame', color: '#f97316', quoteType: 'element' },
    { id: 'petir_zeus', name: 'Petir Zeus', cat: 'elemen', dmg: 36, force: 30, mode: 'lightning', color: '#38bdf8', quoteType: 'element' },
    { id: 'meriam_es', name: 'Meriam Es', cat: 'elemen', dmg: 22, force: 20, mode: 'freeze', color: '#7dd3fc', quoteType: 'element' },
    { id: 'lubang_hitam', name: 'Lubang Hitam', cat: 'elemen', dmg: 20, force: 35, mode: 'blackhole', color: '#a855f7', quoteType: 'element' },
    { id: 'hujan_meteor', name: 'Hujan Meteor', cat: 'elemen', dmg: 45, force: 44, mode: 'meteor', color: '#fb7185', quoteType: 'element' },
    { id: 'tornado', name: 'Angin Puting Beliung', cat: 'elemen', dmg: 18, force: 38, mode: 'tornado', color: '#cbd5e1', quoteType: 'element' }
  ];

  const CATEGORIES = [
    { id: 'pukul', label: 'Pukul' },
    { id: 'tajam', label: 'Tajam' },
    { id: 'senjata', label: 'Senjata' },
    { id: 'ledakan', label: 'Ledakan' },
    { id: 'elemen', label: 'Elemen' },
    { id: 'peta', label: 'Khusus Peta' }
  ];

  // State
  const state = {
    dim: '3D',
    mapIndex: 0,
    skinIndex: 0,
    cat: 'pukul',
    weaponId: 'tangan',
    hp: 100,
    combo: 0,
    comboTimer: 0,
    soundOn: true,
    pointerDown: false,
    pointerX: 0,
    pointerY: 0,
    worldX: 0,
    worldY: 2,
    prevWorldX: 0,
    prevWorldY: 2,
    grabbedNode: null,
    rapidTimer: 0,
    xrayTimer: 0,
    freezeTimer: 0,
    shakeTimer: 0,
    shakeIntensity: 0,
    damageMarks: [], // { part, u, v, type, size, angle }
    bloodDecals: [], // { x, y, z, r, wall }
    traps: [],       // { id, x, y, nx, ny, angle }
    stuckBlades: [], // { nodeIdx, ox, oy, angle, color, type }
    projectiles: [],
    particles: [],
    quoteCooldown: 0,
    lastQuoteEl: null,
    nametagEl: null
  };

  // Bounds in physics world units (X: -5.4..5.4, Y: 0..9.2)
  const BOUNDS = {
    minX: -5.2,
    maxX: 5.2,
    minY: 0.2,
    maxY: 9.0
  };

  // Web Audio API Synthesizer
  const AudioEngine = (() => {
    let ctx = null;
    function ensure() {
      if (!state.soundOn) return null;
      if (!ctx) {
        const AC = window.AudioContext || window.webkitAudioContext;
        if (AC) ctx = new AC();
      }
      if (ctx && ctx.state === 'suspended') ctx.resume();
      return ctx;
    }

    function tone(freq, endFreq, dur, type = 'sine', vol = 0.18) {
      const c = ensure();
      if (!c) return;
      const now = c.currentTime;
      const osc = c.createOscillator();
      const gain = c.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);
      if (endFreq) osc.frequency.exponentialRampToValueAtTime(Math.max(20, endFreq), now + dur);
      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + dur);
      osc.connect(gain);
      gain.connect(c.destination);
      osc.start(now);
      osc.stop(now + dur);
    }

    function noise(dur, filterFreq = 900, vol = 0.22) {
      const c = ensure();
      if (!c) return;
      const now = c.currentTime;
      const bufSize = Math.floor(c.sampleRate * dur);
      const buf = c.createBuffer(1, bufSize, c.sampleRate);
      const data = buf.getChannelData(0);
      for (let i = 0; i < bufSize; i++) data[i] = Math.random() * 2 - 1;
      const src = c.createBufferSource();
      src.buffer = buf;
      const filter = c.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(filterFreq, now);
      const gain = c.createGain();
      gain.gain.setValueAtTime(vol, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + dur);
      src.connect(filter);
      filter.connect(gain);
      gain.connect(c.destination);
      src.start(now);
    }

    return {
      play(kind) {
        if (!state.soundOn) return;
        if (kind === 'hit') {
          tone(190, 55, 0.14, 'triangle', 0.24);
          noise(0.07, 600, 0.14);
        } else if (kind === 'sharp') {
          tone(1350, 420, 0.12, 'sawtooth', 0.16);
          noise(0.08, 2600, 0.16);
        } else if (kind === 'gun') {
          noise(0.11, 1400, 0.28);
          tone(280, 48, 0.11, 'sawtooth', 0.22);
        } else if (kind === 'boom') {
          noise(0.45, 220, 0.36);
          tone(110, 26, 0.45, 'sine', 0.34);
        } else if (kind === 'zap') {
          tone(920, 140, 0.24, 'square', 0.18);
          noise(0.2, 3200, 0.18);
        } else if (kind === 'heal') {
          tone(440, 660, 0.16, 'sine', 0.16);
          setTimeout(() => tone(660, 880, 0.2, 'sine', 0.16), 90);
        } else if (kind === 'trap') {
          tone(520, 310, 0.09, 'square', 0.14);
        }
      }
    };
  })();

  // Articulated Verlet Ragdoll for Oka
  // Nodes:
  // 0: head, 1: neck/chest, 2: pelvis,
  // 3: lElbow, 4: lHand, 5: rElbow, 6: rHand,
  // 7: lKnee, 8: lFoot, 9: rKnee, 10: rFoot
  const ragdoll = {
    nodes: [],
    sticks: [],
    standBlend: 1,
    stunTimer: 0,
    blinkTimer: 2.5,
    isBlinking: false,
    painTimer: 0,
    breathTime: 0
  };

  function initRagdoll() {
    const cx = 0;
    const baseY = BOUNDS.minY;
    const pts = [
      { x: cx, y: baseY + 3.55, r: 0.56, part: 'head' },       // 0 head
      { x: cx, y: baseY + 2.75, r: 0.44, part: 'torso' },      // 1 chest
      { x: cx, y: baseY + 1.65, r: 0.42, part: 'pelvis' },     // 2 pelvis
      { x: cx - 0.72, y: baseY + 2.25, r: 0.18, part: 'arm' }, // 3 lElbow
      { x: cx - 0.85, y: baseY + 1.55, r: 0.19, part: 'hand' },// 4 lHand
      { x: cx + 0.72, y: baseY + 2.25, r: 0.18, part: 'arm' }, // 5 rElbow
      { x: cx + 0.85, y: baseY + 1.55, r: 0.19, part: 'hand' },// 6 rHand
      { x: cx - 0.30, y: baseY + 0.90, r: 0.21, part: 'leg' }, // 7 lKnee
      { x: cx - 0.34, y: baseY + 0.16, r: 0.22, part: 'foot' },// 8 lFoot
      { x: cx + 0.30, y: baseY + 0.90, r: 0.21, part: 'leg' }, // 9 rKnee
      { x: cx + 0.34, y: baseY + 0.16, r: 0.22, part: 'foot' } // 10 rFoot
    ];

    ragdoll.nodes = pts.map(p => ({
      x: p.x,
      y: p.y,
      oldX: p.x,
      oldY: p.y,
      r: p.r,
      part: p.part,
      homeX: p.x,
      homeY: p.y - baseY
    }));

    const pairs = [
      [0, 1, 0.80],
      [1, 2, 1.10],
      [1, 3, 0.78],
      [3, 4, 0.72],
      [1, 5, 0.78],
      [5, 6, 0.72],
      [2, 7, 0.80],
      [7, 8, 0.76],
      [2, 9, 0.80],
      [9, 10, 0.76],
      // Structural posture braces (soft)
      [0, 2, 1.90],
      [7, 9, 0.62]
    ];

    ragdoll.sticks = pairs.map(([a, b, len], idx) => ({
      a,
      b,
      len,
      stiff: idx < 10 ? 0.92 : 0.22
    }));
    ragdoll.stunTimer = 0;
    ragdoll.painTimer = 0;
  }

  function resetRagdollPose() {
    const cx = Math.max(-2.5, Math.min(2.5, ragdoll.nodes[2].x));
    const baseY = BOUNDS.minY;
    ragdoll.nodes.forEach(n => {
      n.x = cx + n.homeX;
      n.y = baseY + n.homeY;
      n.oldX = n.x;
      n.oldY = n.y;
    });
    ragdoll.stunTimer = 0;
  }

  // Helper: Get current map & active weapon list
  function currentMap() {
    return MAPS[state.mapIndex];
  }
  function currentSkin() {
    return SKINS[state.skinIndex];
  }
  function allWeapons() {
    return [...BASE_WEAPONS, ...currentMap().specialWeapons];
  }
  function currentWeapon() {
    return allWeapons().find(w => w.id === state.weaponId) || BASE_WEAPONS[0];
  }

  // Speech Bubble & Nametag
  const overlayLayer = document.getElementById('overlay-layer');

  function initFloatingLabels() {
    const tag = document.createElement('div');
    tag.className = 'fixed px-2.5 py-0.5 rounded-full bg-slate-950/85 border border-sky-400/60 text-white text-[11px] font-extrabold tracking-wide shadow-md pointer-events-none flex items-center gap-1';
    tag.style.transform = 'translate(-50%, -100%)';
    tag.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-sky-400"></span><span>Oka</span>';
    overlayLayer.appendChild(tag);
    state.nametagEl = tag;
  }

  function speakQuote(type = 'general', force = false) {
    if (state.quoteCooldown > 0 && !force) return;
    const pool = OKA_QUOTES[type] || OKA_QUOTES.general;
    const text = pool[Math.floor(Math.random() * pool.length)];
    state.quoteCooldown = 1.05;

    if (state.lastQuoteEl) {
      state.lastQuoteEl.remove();
      state.lastQuoteEl = null;
    }

    const head = ragdoll.nodes[0];
    const scr = worldToScreen(head.x, head.y + 1.05);
    const bubble = document.createElement('div');
    bubble.className = 'quote-bubble fixed px-3 py-1 rounded-2xl bg-white text-slate-950 font-extrabold text-xs shadow-xl border-2 border-slate-900 whitespace-nowrap z-20';
    bubble.style.left = `${Math.max(70, Math.min(window.innerWidth - 70, scr.x))}px`;
    bubble.style.top = `${Math.max(92, scr.y - 26)}px`;
    bubble.textContent = text;
    overlayLayer.appendChild(bubble);
    state.lastQuoteEl = bubble;
    setTimeout(() => {
      if (bubble.parentNode) bubble.remove();
      if (state.lastQuoteEl === bubble) state.lastQuoteEl = null;
    }, 2100);
  }

  // Damage, Blood & Body Marks
  function addBodyDamageMark(part, type) {
    const angle = Math.random() * Math.PI * 2;
    const u = (Math.random() - 0.5) * 0.65;
    const v = (Math.random() - 0.5) * 0.65;
    const size = type === 'tear' ? 0.16 + Math.random() * 0.1 : 0.12 + Math.random() * 0.12;
    state.damageMarks.push({ part, u, v, type, size, angle });
    if (state.damageMarks.length > 65) state.damageMarks.shift();
  }

  function spawnBloodBurst(wx, wy, count = 12, sharp = false) {
    for (let i = 0; i < count; i++) {
      const ang = Math.random() * Math.PI * 2;
      const spd = (sharp ? 4 : 2.2) + Math.random() * 6.5;
      state.particles.push({
        x: wx,
        y: wy,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd + 2.2,
        r: 0.05 + Math.random() * 0.07,
        color: Math.random() > 0.25 ? '#dc2626' : '#991b1b',
        life: 0.9 + Math.random() * 0.7,
        kind: 'blood'
      });
    }
    // Persistent floor/wall blood decal
    const onFloor = wy < BOUNDS.minY + 1.4;
    state.bloodDecals.push({
      x: Math.max(BOUNDS.minX + 0.3, Math.min(BOUNDS.maxX - 0.3, wx + (Math.random() - 0.5) * 0.6)),
      y: onFloor ? BOUNDS.minY + 0.02 : Math.max(BOUNDS.minY + 0.3, Math.min(BOUNDS.maxY - 0.3, wy)),
      r: 0.18 + Math.random() * 0.32,
      wall: !onFloor
    });
    if (state.bloodDecals.length > 55) state.bloodDecals.shift();
  }

  function spawnStuffingBurst(wx, wy, count = 7) {
    for (let i = 0; i < count; i++) {
      const ang = Math.random() * Math.PI * 2;
      const spd = 1.5 + Math.random() * 4.5;
      state.particles.push({
        x: wx,
        y: wy,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd + 1.8,
        r: 0.07 + Math.random() * 0.08,
        color: '#f8fafc',
        life: 0.8 + Math.random() * 0.6,
        kind: 'fluff'
      });
    }
  }

  function spawnSparkBurst(wx, wy, color = '#fbbf24', count = 14) {
    for (let i = 0; i < count; i++) {
      const ang = Math.random() * Math.PI * 2;
      const spd = 3 + Math.random() * 8;
      state.particles.push({
        x: wx,
        y: wy,
        vx: Math.cos(ang) * spd,
        vy: Math.sin(ang) * spd,
        r: 0.05 + Math.random() * 0.06,
        color,
        life: 0.45 + Math.random() * 0.35,
        kind: 'spark'
      });
    }
  }

  function damageOka(nodeIdx, dmg, impX, impY, opts = {}) {
    const node = ragdoll.nodes[nodeIdx] || ragdoll.nodes[1];
    node.oldX -= impX * 0.032;
    node.oldY -= impY * 0.032;
    ragdoll.stunTimer = Math.min(1.65, ragdoll.stunTimer + 0.55);
    ragdoll.painTimer = 0.65;

    state.hp = Math.max(0, state.hp - dmg);
    state.combo += 1;
    state.comboTimer = 2.3;
    updateHud();

    // Layered visible damage on Oka
    const markType = opts.sharp ? 'cut' : opts.burn ? 'scorch' : dmg >= 25 ? 'tear' : 'bruise';
    addBodyDamageMark(node.part, markType);
    if (dmg >= 18) addBodyDamageMark(node.part, 'bruise');

    if (opts.sharp || dmg >= 20) {
      spawnBloodBurst(node.x, node.y, Math.min(20, 6 + Math.floor(dmg * 0.45)), !!opts.sharp);
    }
    if (dmg >= 22 || opts.sharp) {
      spawnStuffingBurst(node.x, node.y, 6);
    }
    if (opts.xray) {
      state.xrayTimer = 0.55;
    }
    if (opts.freeze) {
      state.freezeTimer = 2.4;
    }

    state.shakeTimer = 0.16;
    state.shakeIntensity = Math.min(0.32, dmg * 0.006);

    speakQuote(opts.quoteType || 'general');
    AudioEngine.play(opts.sfx || 'hit');

    if (state.hp === 0) {
      // Dramatic knock-out burst then auto-recover HP after a moment
      spawnBloodBurst(ragdoll.nodes[1].x, ragdoll.nodes[1].y, 18, true);
      setTimeout(() => {
        if (state.hp === 0) {
          state.hp = 100;
          updateHud();
        }
      }, 1600);
    }
  }

  function findClosestNode(wx, wy, maxDist = 1.65) {
    let best = -1;
    let bestD = maxDist;
    ragdoll.nodes.forEach((n, i) => {
      const d = Math.hypot(n.x - wx, n.y - wy);
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    });
    return best;
  }

  // Auto-Orienting Duri Trap Placement
  function placeDuriTrap(wx, wy) {
    const snapDist = 1.15;
    const dFloor = Math.abs(wy - BOUNDS.minY);
    const dCeil = Math.abs(BOUNDS.maxY - wy);
    const dLeft = Math.abs(wx - BOUNDS.minX);
    const dRight = Math.abs(BOUNDS.maxX - wx);
    const minD = Math.min(dFloor, dCeil, dLeft, dRight);

    let x = Math.max(BOUNDS.minX + 0.35, Math.min(BOUNDS.maxX - 0.35, wx));
    let y = Math.max(BOUNDS.minY + 0.12, Math.min(BOUNDS.maxY - 0.12, wy));
    let nx = 0;
    let ny = 1;
    let angle = 0;

    if (minD <= snapDist) {
      if (minD === dFloor) {
        y = BOUNDS.minY + 0.06;
        nx = 0; ny = 1; angle = 0;
      } else if (minD === dLeft) {
        x = BOUNDS.minX + 0.06;
        nx = 1; ny = 0; angle = -Math.PI / 2;
      } else if (minD === dRight) {
        x = BOUNDS.maxX - 0.06;
        nx = -1; ny = 0; angle = Math.PI / 2;
      } else if (minD === dCeil) {
        y = BOUNDS.maxY - 0.06;
        nx = 0; ny = -1; angle = Math.PI;
      }
    }

    state.traps.push({
      id: Date.now() + Math.random(),
      x,
      y,
      nx,
      ny,
      angle
    });
    AudioEngine.play('trap');
    updateHud();
  }

  function clearAllTraps() {
    state.traps = [];
    updateHud();
    AudioEngine.play('trap');
  }

  function clearArenaDebris() {
    state.traps = [];
    state.bloodDecals = [];
    state.stuckBlades = [];
    state.projectiles = [];
    updateHud();
  }

  function healOka() {
    state.hp = 100;
    state.damageMarks = [];
    state.bloodDecals = [];
    state.stuckBlades = [];
    state.freezeTimer = 0;
    resetRagdollPose();
    updateHud();
    speakQuote('heal', true);
    AudioEngine.play('heal');
    spawnSparkBurst(ragdoll.nodes[1].x, ragdoll.nodes[1].y, '#34d399', 18);
  }

  // Weapon Execution
  function triggerWeaponAt(wx, wy, isDrag = false) {
    const w = currentWeapon();
    const hitIdx = findClosestNode(wx, wy, 1.55);

    if (w.mode === 'grab') {
      if (!isDrag && hitIdx !== -1) {
        state.grabbedNode = hitIdx;
        ragdoll.stunTimer = 0.6;
        speakQuote('general');
      }
      return;
    }

    if (w.mode === 'trap') {
      if (!isDrag) placeDuriTrap(wx, wy);
      return;
    }

    if (w.mode === 'melee') {
      if (hitIdx !== -1) {
        const dirX = (wx - ragdoll.nodes[hitIdx].x) * -w.force;
        const dirY = w.force * 0.65;
        damageOka(hitIdx, w.dmg, dirX || (Math.random() - 0.5) * w.force, dirY, {
          quoteType: w.quoteType,
          sfx: 'hit'
        });
        spawnSparkBurst(wx, wy, w.color, 10);
      }
      return;
    }

    if (w.mode === 'slash') {
      if (hitIdx !== -1) {
        const vx = (wx - state.prevWorldX) * 18;
        const vy = (wy - state.prevWorldY) * 18;
        damageOka(hitIdx, w.dmg, vx || (Math.random() - 0.5) * 20, Math.max(8, vy), {
          sharp: true,
          quoteType: w.quoteType,
          sfx: 'sharp'
        });
      }
      return;
    }

    if (w.mode === 'saw') {
      if (hitIdx !== -1) {
        damageOka(hitIdx, w.dmg * 0.45, (Math.random() - 0.5) * 16, 10, {
          sharp: true,
          quoteType: 'sharp',
          sfx: 'sharp'
        });
      }
      return;
    }

    if (w.mode === 'gun' || w.mode === 'auto_gun') {
      if (isDrag && w.mode === 'gun') return;
      AudioEngine.play('gun');
      spawnSparkBurst(wx, wy, '#fde047', 6);
      if (hitIdx !== -1) {
        const pushX = (ragdoll.nodes[hitIdx].x >= 0 ? 1 : -1) * w.force;
        damageOka(hitIdx, w.dmg, pushX, w.force * 0.45, {
          sharp: true,
          quoteType: w.quoteType,
          sfx: 'gun'
        });
      }
      return;
    }

    if (w.mode === 'shotgun') {
      if (isDrag) return;
      AudioEngine.play('gun');
      spawnSparkBurst(wx, wy, '#fb923c', 16);
      for (let p = 0; p < 4; p++) {
        const idx = findClosestNode(wx + (Math.random() - 0.5) * 1.4, wy + (Math.random() - 0.5) * 1.4, 1.75);
        if (idx !== -1) {
          damageOka(idx, Math.round(w.dmg / 3), (Math.random() - 0.5) * w.force, w.force * 0.55, {
            sharp: true,
            quoteType: 'gun',
            sfx: 'gun'
          });
        }
      }
      return;
    }

    if (w.mode === 'laser') {
      AudioEngine.play('zap');
      spawnSparkBurst(wx, wy, w.color, 8);
      if (hitIdx !== -1) {
        damageOka(hitIdx, w.dmg * 0.45, (Math.random() - 0.5) * 14, 12, {
          xray: true,
          burn: true,
          quoteType: w.quoteType,
          sfx: 'zap'
        });
      }
      return;
    }

    if (w.mode === 'flame') {
      spawnSparkBurst(wx, wy, '#f97316', 7);
      if (hitIdx !== -1) {
        damageOka(hitIdx, w.dmg * 0.35, (Math.random() - 0.5) * 10, 9, {
          burn: true,
          quoteType: 'element',
          sfx: 'hit'
        });
      }
      return;
    }

    if (w.mode === 'freeze') {
      spawnSparkBurst(wx, wy, '#7dd3fc', 9);
      if (hitIdx !== -1) {
        damageOka(hitIdx, w.dmg * 0.4, (Math.random() - 0.5) * 10, 8, {
          freeze: true,
          quoteType: 'element',
          sfx: 'zap'
        });
      }
      return;
    }

    if (w.mode === 'lightning') {
      if (isDrag) return;
      const target = ragdoll.nodes[1];
      spawnSparkBurst(target.x, target.y, '#38bdf8', 24);
      damageOka(1, w.dmg, (Math.random() - 0.5) * 26, 22, {
        xray: true,
        burn: true,
        quoteType: 'element',
        sfx: 'zap'
      });
      return;
    }

    if (w.mode === 'blackhole') {
      ragdoll.nodes.forEach(n => {
        const dx = wx - n.x;
        const dy = wy - n.y;
        const dist = Math.max(0.5, Math.hypot(dx, dy));
        n.oldX -= (dx / dist) * 0.45;
        n.oldY -= (dy / dist) * 0.45;
      });
      ragdoll.stunTimer = 0.8;
      spawnSparkBurst(wx, wy, '#a855f7', 5);
      if (hitIdx !== -1 && Math.random() < 0.25) {
        damageOka(hitIdx, 8, 0, 12, { quoteType: 'element', sfx: 'zap' });
      }
      return;
    }

    if (w.mode === 'tornado') {
      ragdoll.nodes.forEach(n => {
        n.oldX -= (Math.random() - 0.5) * 0.9;
        n.oldY -= 0.55;
      });
      ragdoll.stunTimer = 0.9;
      spawnSparkBurst(wx, wy, '#e2e8f0', 6);
      if (hitIdx !== -1 && Math.random() < 0.22) {
        damageOka(hitIdx, 7, 0, 15, { quoteType: 'element', sfx: 'hit' });
      }
      return;
    }

    // Projectile-based weapons (throw, sharp_throw, explosive_throw, rocket, drop, drop_nuke, meteor)
    if (isDrag) return;

    if (w.mode === 'meteor') {
      for (let m = 0; m < 3; m++) {
        state.projectiles.push({
          x: wx + (m - 1) * 1.4,
          y: BOUNDS.maxY + 1.5 + m * 1.1,
          vx: (Math.random() - 0.5) * 3,
          vy: -15 - m * 2,
          r: 0.34,
          weapon: w,
          spin: 0,
          explosive: true
        });
      }
      return;
    }

    if (w.mode === 'drop' || w.mode === 'drop_nuke') {
      state.projectiles.push({
        x: wx,
        y: BOUNDS.maxY + 0.8,
        vx: 0,
        vy: -13,
        r: w.mode === 'drop_nuke' ? 0.52 : 0.45,
        weapon: w,
        spin: 0,
        explosive: w.mode === 'drop_nuke'
      });
      return;
    }

    // Launch from left or right edge toward tap point
    const fromLeft = wx >= 0;
    const startX = fromLeft ? BOUNDS.minX - 0.4 : BOUNDS.maxX + 0.4;
    const startY = Math.max(1.5, Math.min(7.5, wy + 1.0));
    const dx = wx - startX;
    const dy = wy - startY;
    const len = Math.max(0.1, Math.hypot(dx, dy));
    const speed = w.mode === 'rocket' ? 18 : 15.5;

    state.projectiles.push({
      x: startX,
      y: startY,
      vx: (dx / len) * speed,
      vy: (dy / len) * speed + 2.4,
      r: 0.26,
      weapon: w,
      spin: 0,
      sharp: w.mode === 'sharp_throw',
      explosive: w.mode === 'explosive_throw' || w.mode === 'rocket'
    });
  }

  function explodeAt(wx, wy, weapon) {
    AudioEngine.play('boom');
    spawnSparkBurst(wx, wy, '#f97316', 24);
    spawnSparkBurst(wx, wy, '#fde047', 16);
    state.shakeTimer = 0.28;
    state.shakeIntensity = 0.42;

    ragdoll.nodes.forEach((n, idx) => {
      const dx = n.x - wx;
      const dy = n.y - wy;
      const dist = Math.max(0.5, Math.hypot(dx, dy));
      if (dist < 4.5) {
        const falloff = 1 - dist / 4.5;
        n.oldX -= (dx / dist) * weapon.force * 0.042 * falloff;
        n.oldY -= (dy / dist + 0.45) * weapon.force * 0.042 * falloff;
        if (idx === 1) {
          damageOka(1, Math.round(weapon.dmg * falloff), 0, 0, {
            burn: true,
            quoteType: 'element',
            sfx: 'boom'
          });
        }
      }
    });
  }

  // Physics Step
  function stepPhysics(dt) {
    const map = currentMap();
    const grav = map.gravity;

    if (state.quoteCooldown > 0) state.quoteCooldown -= dt;
    if (state.xrayTimer > 0) state.xrayTimer -= dt;
    if (state.freezeTimer > 0) state.freezeTimer -= dt;
    if (state.shakeTimer > 0) state.shakeTimer -= dt;
    if (ragdoll.painTimer > 0) ragdoll.painTimer -= dt;

    if (state.combo > 0) {
      state.comboTimer -= dt;
      if (state.comboTimer <= 0) {
        state.combo = 0;
        updateHud();
      }
    }

    // Blink animation
    ragdoll.blinkTimer -= dt;
    if (ragdoll.blinkTimer <= 0) {
      if (!ragdoll.isBlinking) {
        ragdoll.isBlinking = true;
        ragdoll.blinkTimer = 0.13;
      } else {
        ragdoll.isBlinking = false;
        ragdoll.blinkTimer = 2.2 + Math.random() * 2.4;
      }
    }
    ragdoll.breathTime += dt * 3.1;

    // Rapid continuous weapons while holding
    if (state.pointerDown) {
      const w = currentWeapon();
      if (['auto_gun', 'saw', 'laser', 'flame', 'freeze', 'blackhole', 'tornado'].includes(w.mode)) {
        state.rapidTimer -= dt;
        if (state.rapidTimer <= 0) {
          state.rapidTimer = w.mode === 'auto_gun' ? 0.09 : 0.11;
          triggerWeaponAt(state.worldX, state.worldY, true);
        }
      }
    }

    // Verlet integration
    const damp = state.freezeTimer > 0 ? 0.86 : 0.985;
    ragdoll.nodes.forEach((n, i) => {
      if (state.grabbedNode === i && state.pointerDown) {
        n.oldX = n.x;
        n.oldY = n.y;
        n.x += (state.worldX - n.x) * 0.45;
        n.y += (state.worldY - n.y) * 0.45;
        return;
      }
      const vx = (n.x - n.oldX) * damp;
      const vy = (n.y - n.oldY) * damp;
      n.oldX = n.x;
      n.oldY = n.y;
      n.x += vx;
      n.y += vy + grav * dt * dt;
    });

    // Natural Active Standing Controller (Kick the Buddy style)
    if (ragdoll.stunTimer > 0) {
      ragdoll.stunTimer -= dt;
    } else if (state.grabbedNode === null && state.freezeTimer <= 0) {
      const lFoot = ragdoll.nodes[8];
      const rFoot = ragdoll.nodes[10];
      const pelvis = ragdoll.nodes[2];
      const chest = ragdoll.nodes[1];
      const head = ragdoll.nodes[0];

      const anchorX = Math.max(-3.6, Math.min(3.6, (lFoot.x + rFoot.x) * 0.5));
      const baseY = BOUNDS.minY;
      const breathOffset = Math.sin(ragdoll.breathTime) * 0.045;
      const swayOffset = Math.cos(ragdoll.breathTime * 0.5) * 0.03;

      // Plant feet smoothly on floor
      lFoot.x += (anchorX - 0.34 - lFoot.x) * 0.16;
      lFoot.y += (baseY + 0.16 - lFoot.y) * 0.22;
      rFoot.x += (anchorX + 0.34 - rFoot.x) * 0.16;
      rFoot.y += (baseY + 0.16 - rFoot.y) * 0.22;

      // Lift pelvis, chest, and head into balanced upright stance
      pelvis.x += (anchorX + swayOffset * 0.5 - pelvis.x) * 0.12;
      pelvis.y += (baseY + 1.65 + breathOffset * 0.5 - pelvis.y) * 0.14;

      chest.x += (anchorX + swayOffset - chest.x) * 0.13;
      chest.y += (baseY + 2.75 + breathOffset - chest.y) * 0.15;

      head.x += (anchorX + swayOffset * 1.2 - head.x) * 0.14;
      head.y += (baseY + 3.55 + breathOffset * 1.2 - head.y) * 0.16;

      // Relaxed arms at sides
      ragdoll.nodes[3].x += (anchorX - 0.72 - ragdoll.nodes[3].x) * 0.1;
      ragdoll.nodes[4].x += (anchorX - 0.85 - ragdoll.nodes[4].x) * 0.1;
      ragdoll.nodes[5].x += (anchorX + 0.72 - ragdoll.nodes[5].x) * 0.1;
      ragdoll.nodes[6].x += (anchorX + 0.85 - ragdoll.nodes[6].x) * 0.1;
    }

    // Constraint relaxation & arena wall collisions
    for (let iter = 0; iter < 6; iter++) {
      ragdoll.sticks.forEach(s => {
        const a = ragdoll.nodes[s.a];
        const b = ragdoll.nodes[s.b];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dist = Math.max(0.0001, Math.hypot(dx, dy));
        const diff = ((s.len - dist) / dist) * s.stiff * 0.5;
        const ox = dx * diff;
        const oy = dy * diff;
        if (state.grabbedNode !== s.a) {
          a.x -= ox;
          a.y -= oy;
        }
        if (state.grabbedNode !== s.b) {
          b.x += ox;
          b.y += oy;
        }
      });

      ragdoll.nodes.forEach((n, idx) => {
        if (n.x - n.r < BOUNDS.minX) {
          n.x = BOUNDS.minX + n.r;
        } else if (n.x + n.r > BOUNDS.maxX) {
          n.x = BOUNDS.maxX - n.r;
        }
        if (n.y - n.r < BOUNDS.minY) {
          const impactVy = n.oldY - n.y;
          n.y = BOUNDS.minY + n.r;
          if (impactVy > 0.28 && idx <= 2) {
            damageOka(idx, Math.min(20, Math.round(impactVy * 22)), 0, 8, { quoteType: 'general', sfx: 'hit' });
          }
        } else if (n.y + n.r > BOUNDS.maxY) {
          n.y = BOUNDS.maxY - n.r;
        }

        // Check collision with placed Duri Traps
        state.traps.forEach(tr => {
          const d = Math.hypot(n.x - tr.x, n.y - tr.y);
          if (d < n.r + 0.36) {
            const pushX = (tr.nx || (n.x - tr.x)) * 18;
            const pushY = (tr.ny || 0.7) * 18;
            n.x += (tr.nx || 0) * 0.16;
            n.y += (tr.ny || 0.5) * 0.16;
            if (state.quoteCooldown <= 0.4) {
              damageOka(idx, 12, pushX, pushY, { sharp: true, quoteType: 'sharp', sfx: 'sharp' });
            }
          }
        });
      });
    }

    // Update projectiles
    for (let i = state.projectiles.length - 1; i >= 0; i--) {
      const p = state.projectiles[i];
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vy += grav * 0.45 * dt;
      p.spin += 12 * dt;

      const hitIdx = findClosestNode(p.x, p.y, 0.85);
      const hitWall = p.y <= BOUNDS.minY + 0.15 || p.x <= BOUNDS.minX + 0.1 || p.x >= BOUNDS.maxX - 0.1;

      if (hitIdx !== -1 || hitWall) {
        if (p.explosive) {
          explodeAt(p.x, p.y, p.weapon);
        } else if (hitIdx !== -1) {
          damageOka(hitIdx, p.weapon.dmg, p.vx * 1.1, Math.max(8, p.vy), {
            sharp: !!p.sharp,
            quoteType: p.weapon.quoteType,
            sfx: p.sharp ? 'sharp' : 'hit'
          });
          if (p.sharp) {
            const target = ragdoll.nodes[hitIdx];
            state.stuckBlades.push({
              nodeIdx: hitIdx,
              ox: (p.x - target.x) * 0.65,
              oy: (p.y - target.y) * 0.65,
              angle: Math.atan2(p.vy, p.vx),
              color: p.weapon.color
            });
            if (state.stuckBlades.length > 24) state.stuckBlades.shift();
          }
        }
        state.projectiles.splice(i, 1);
      } else if (p.y < -3 || Math.abs(p.x) > 10) {
        state.projectiles.splice(i, 1);
      }
    }

    // Update particles
    for (let i = state.particles.length - 1; i >= 0; i--) {
      const pt = state.particles[i];
      pt.x += pt.vx * dt;
      pt.y += pt.vy * dt;
      pt.vy += grav * 0.55 * dt;
      pt.life -= dt;
      if (pt.y < BOUNDS.minY) {
        pt.y = BOUNDS.minY;
        pt.vy *= -0.35;
        pt.vx *= 0.7;
      }
      if (pt.life <= 0) state.particles.splice(i, 1);
    }

    // Sync floating nametag above Oka's blue cap
    if (state.nametagEl) {
      const head = ragdoll.nodes[0];
      const pos = worldToScreen(head.x, head.y + 0.92);
      state.nametagEl.style.left = `${pos.x}px`;
      state.nametagEl.style.top = `${pos.y}px`;
    }
  }

  // Coordinate Projection
  const canvas3D = document.getElementById('canvas-3d');
  const canvas2D = document.getElementById('canvas-2d');
  const ctx2D = canvas2D.getContext('2d');

  function screenToWorld(sx, sy) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const nx = (sx / w) * 2 - 1;
    const ny = -(sy / h) * 2 + 1;
    const wx = nx * 5.6;
    const wy = ((ny + 1) * 0.5) * 9.6;
    return {
      x: Math.max(BOUNDS.minX, Math.min(BOUNDS.maxX, wx)),
      y: Math.max(BOUNDS.minY, Math.min(BOUNDS.maxY, wy))
    };
  }

  function worldToScreen(wx, wy) {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const nx = wx / 5.6;
    const ny = (wy / 9.6) * 2 - 1;
    return {
      x: (nx + 1) * 0.5 * w,
      y: (1 - (ny + 1) * 0.5) * h
    };
  }

  // ==========================================
  // 3D RENDERER (Three.js)
  // ==========================================
  const threeState = {
    scene: null,
    camera: null,
    renderer: null,
    roomGroup: null,
    okaGroup: null,
    meshes: {},
    trapMeshes: [],
    bloodMeshes: [],
    projMeshes: [],
    partMeshes: [],
    bladeMeshes: []
  };

  function init3D() {
    if (typeof THREE === 'undefined') {
      state.dim = '2D';
      return;
    }
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(44, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.set(0, 4.7, 13.6);
    camera.lookAt(0, 4.4, 0);

    const renderer = new THREE.WebGLRenderer({ canvas: canvas3D, antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    const hemi = new THREE.HemisphereLight('#ffffff', '#334155', 0.95);
    scene.add(hemi);

    const dir = new THREE.DirectionalLight('#ffffff', 0.95);
    dir.position.set(5, 11, 8);
    dir.castShadow = true;
    scene.add(dir);

    threeState.scene = scene;
    threeState.camera = camera;
    threeState.renderer = renderer;

    build3DRoom();
    build3DOka();
  }

  function build3DRoom() {
    if (!threeState.scene) return;
    if (threeState.roomGroup) threeState.scene.remove(threeState.roomGroup);

    const map = currentMap();
    const grp = new THREE.Group();
    threeState.scene.background = new THREE.Color(map.bgBottom);

    // Floor
    const floorMat = new THREE.MeshStandardMaterial({ color: map.floorColor, roughness: 0.78 });
    const floor = new THREE.Mesh(new THREE.BoxGeometry(12.2, 0.6, 5.5), floorMat);
    floor.position.set(0, -0.1, 0);
    floor.receiveShadow = true;
    grp.add(floor);

    // Back Wall
    const wallMat = new THREE.MeshStandardMaterial({ color: map.wallColor, roughness: 0.85 });
    const backWall = new THREE.Mesh(new THREE.BoxGeometry(12.2, 10.6, 0.5), wallMat);
    backWall.position.set(0, 4.8, -2.5);
    backWall.receiveShadow = true;
    grp.add(backWall);

    // Side Walls
    const leftWall = new THREE.Mesh(new THREE.BoxGeometry(0.5, 10.6, 5.5), wallMat);
    leftWall.position.set(-5.85, 4.8, 0);
    grp.add(leftWall);

    const rightWall = new THREE.Mesh(new THREE.BoxGeometry(0.5, 10.6, 5.5), wallMat);
    rightWall.position.set(5.85, 4.8, 0);
    grp.add(rightWall);

    // Map-Specific Multi-Prop Details
    const propMat = new THREE.MeshStandardMaterial({ color: map.accent, roughness: 0.5 });
    if (map.id === 'kelas') {
      // Chalkboard & Indonesian Flag Banner
      const board = new THREE.Mesh(new THREE.BoxGeometry(5.6, 2.5, 0.14), propMat);
      board.position.set(0, 5.5, -2.2);
      grp.add(board);

      const frame = new THREE.Mesh(new THREE.BoxGeometry(5.85, 2.72, 0.1), new THREE.MeshStandardMaterial({ color: '#78350f' }));
      frame.position.set(0, 5.5, -2.23);
      grp.add(frame);

      const flagRed = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.42, 0.08), new THREE.MeshStandardMaterial({ color: '#dc2626' }));
      flagRed.position.set(-3.9, 6.4, -2.2);
      grp.add(flagRed);
      const flagWhite = new THREE.Mesh(new THREE.BoxGeometry(1.3, 0.42, 0.08), new THREE.MeshStandardMaterial({ color: '#f8fafc' }));
      flagWhite.position.set(-3.9, 5.98, -2.2);
      grp.add(flagWhite);
    } else if (map.id === 'losari') {
      // Sunset Sun & Makassar Pier Pillars
      const sun = new THREE.Mesh(new THREE.CircleGeometry(1.6, 24), new THREE.MeshBasicMaterial({ color: '#fde047' }));
      sun.position.set(2.6, 6.4, -2.22);
      grp.add(sun);

      for (let x = -4; x <= 4; x += 2) {
        const post = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 2.2, 10), new THREE.MeshStandardMaterial({ color: '#78350f' }));
        post.position.set(x, 1.1, -2.0);
        grp.add(post);
      }
    } else if (map.id === 'dojo') {
      // Torii Gate Frame & Lanterns
      const beam = new THREE.Mesh(new THREE.BoxGeometry(6.4, 0.35, 0.3), propMat);
      beam.position.set(0, 7.1, -2.15);
      grp.add(beam);
      [-2.3, 2.3].forEach(px => {
        const col = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.24, 7.2, 12), propMat);
        col.position.set(px, 3.6, -2.15);
        grp.add(col);
      });
    } else if (map.id === 'lab') {
      // Glowing Neon Tubes
      [-3.5, 0, 3.5].forEach(px => {
        const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 6.2, 14), new THREE.MeshBasicMaterial({ color: '#10b981', transparent: true, opacity: 0.35 }));
        tube.position.set(px, 4.4, -2.1);
        grp.add(tube);
      });
    } else if (map.id === 'orbit') {
      // Space Viewport Window & Stars
      const win = new THREE.Mesh(new THREE.CircleGeometry(2.6, 28), new THREE.MeshBasicMaterial({ color: '#020617' }));
      win.position.set(0, 5.2, -2.22);
      grp.add(win);
      const ring = new THREE.Mesh(new THREE.RingGeometry(2.55, 2.8, 28), propMat);
      ring.position.set(0, 5.2, -2.2);
      grp.add(ring);
    }

    threeState.roomGroup = grp;
    threeState.scene.add(grp);
  }

  function build3DOka() {
    if (!threeState.scene) return;
    if (threeState.okaGroup) threeState.scene.remove(threeState.okaGroup);

    const sk = currentSkin();
    const grp = new THREE.Group();

    const skinMat = new THREE.MeshStandardMaterial({ color: sk.skinColor, roughness: 0.65 });
    const shirtMat = new THREE.MeshStandardMaterial({ color: sk.shirtColor, roughness: 0.7 });
    const pantsMat = new THREE.MeshStandardMaterial({ color: sk.pantsColor, roughness: 0.75 });
    const shoeMat = new THREE.MeshStandardMaterial({ color: sk.shoeColor, roughness: 0.6 });
    const capMat = new THREE.MeshStandardMaterial({ color: sk.capMain, roughness: 0.55 });
    const visorMat = new THREE.MeshStandardMaterial({ color: sk.capVisor, roughness: 0.5 });

    // Head Group
    const headGrp = new THREE.Group();
    const headMesh = new THREE.Mesh(new THREE.SphereGeometry(0.56, 24, 24), skinMat);
    headMesh.castShadow = true;
    headGrp.add(headMesh);

    // Indonesian School Blue Cap (Always worn on Oka's head!)
    const capDome = new THREE.Mesh(
      new THREE.SphereGeometry(0.59, 24, 16, 0, Math.PI * 2, 0, Math.PI * 0.52),
      capMat
    );
    capDome.position.set(0, 0.04, 0);
    headGrp.add(capDome);

    const capVisor = new THREE.Mesh(new THREE.CylinderGeometry(0.52, 0.56, 0.07, 18, 1, false, -Math.PI * 0.35, Math.PI * 0.7), visorMat);
    capVisor.position.set(0, 0.06, 0.25);
    capVisor.rotation.x = 0.14;
    headGrp.add(capVisor);

    // Tut Wuri Handayani white emblem dot on cap front
    const emblem = new THREE.Mesh(new THREE.CircleGeometry(0.11, 14), new THREE.MeshBasicMaterial({ color: '#f8fafc' }));
    emblem.position.set(0, 0.28, 0.55);
    emblem.rotation.x = -0.35;
    headGrp.add(emblem);

    // Eyes & Mouth
    const eyeGeo = new THREE.SphereGeometry(0.085, 12, 12);
    const eyeMat = new THREE.MeshBasicMaterial({ color: '#0f172a' });
    const lEye = new THREE.Mesh(eyeGeo, eyeMat);
    lEye.position.set(-0.2, 0.02, 0.51);
    const rEye = new THREE.Mesh(eyeGeo, eyeMat);
    rEye.position.set(0.2, 0.02, 0.51);
    headGrp.add(lEye, rEye);

    const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.06, 0.06), new THREE.MeshBasicMaterial({ color: '#7f1d1d' }));
    mouth.position.set(0, -0.22, 0.52);
    headGrp.add(mouth);

    grp.add(headGrp);

    // Torso (School Shirt)
    const torsoMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.45, 1.12, 18), shirtMat);
    torsoMesh.castShadow = true;
    grp.add(torsoMesh);

    // OSIS Pocket Badge & Tie
    const pocket = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.18, 0.05), new THREE.MeshBasicMaterial({ color: '#1d4ed8' }));
    pocket.position.set(-0.2, 0.22, 0.43);
    torsoMesh.add(pocket);

    if (sk.tieColor) {
      const tie = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.56, 0.06), new THREE.MeshBasicMaterial({ color: sk.tieColor }));
      tie.position.set(0, 0.12, 0.44);
      torsoMesh.add(tie);
    }

    // Pelvis (School Shorts/Pants)
    const pelvisMesh = new THREE.Mesh(new THREE.CylinderGeometry(0.44, 0.40, 0.55, 16), pantsMat);
    grp.add(pelvisMesh);

    // Limbs helper
    function makeLimb(radius, len, mat) {
      const m = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius * 0.9, len, 12), mat);
      m.castShadow = true;
      grp.add(m);
      return m;
    }

    const lUpperArm = makeLimb(0.13, 0.76, shirtMat);
    const lForeArm = makeLimb(0.12, 0.72, skinMat);
    const rUpperArm = makeLimb(0.13, 0.76, shirtMat);
    const rForeArm = makeLimb(0.12, 0.72, skinMat);

    const lThigh = makeLimb(0.16, 0.78, pantsMat);
    const lShin = makeLimb(0.14, 0.74, skinMat);
    const rThigh = makeLimb(0.16, 0.78, pantsMat);
    const rShin = makeLimb(0.14, 0.74, skinMat);

    const lShoe = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.2, 0.46), shoeMat);
    const rShoe = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.2, 0.46), shoeMat);
    grp.add(lShoe, rShoe);

    // Damage overlays on torso & head (bruises/blood/tears)
    const woundPool = [];
    for (let i = 0; i < 24; i++) {
      const wm = new THREE.Mesh(
        new THREE.CircleGeometry(0.14, 12),
        new THREE.MeshBasicMaterial({ color: '#991b1b', transparent: true, opacity: 0.85, side: THREE.DoubleSide })
      );
      wm.visible = false;
      grp.add(wm);
      woundPool.push(wm);
    }

    threeState.meshes = {
      headGrp,
      lEye,
      rEye,
      mouth,
      torsoMesh,
      pelvisMesh,
      lUpperArm,
      lForeArm,
      rUpperArm,
      rForeArm,
      lThigh,
      lShin,
      rThigh,
      rShin,
      lShoe,
      rShoe,
      woundPool,
      skinMat,
      shirtMat
    };

    threeState.okaGroup = grp;
    threeState.scene.add(grp);
  }

  function align3DLimb(mesh, a, b) {
    mesh.position.set((a.x + b.x) * 0.5, (a.y + b.y) * 0.5, 0);
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    mesh.rotation.z = Math.atan2(dy, dx) - Math.PI / 2;
  }

  function render3D() {
    if (!threeState.renderer || !threeState.scene) return;
    const n = ragdoll.nodes;
    const m = threeState.meshes;

    // Camera shake
    if (state.shakeTimer > 0) {
      threeState.camera.position.x = (Math.random() - 0.5) * state.shakeIntensity;
      threeState.camera.position.y = 4.7 + (Math.random() - 0.5) * state.shakeIntensity;
    } else {
      threeState.camera.position.x += (0 - threeState.camera.position.x) * 0.25;
      threeState.camera.position.y += (4.7 - threeState.camera.position.y) * 0.25;
    }

    // X-Ray & Freeze visual tints
    if (state.xrayTimer > 0) {
      m.skinMat.color.set('#38bdf8');
      m.shirtMat.color.set('#0284c7');
    } else if (state.freezeTimer > 0) {
      m.skinMat.color.set('#bae6fd');
      m.shirtMat.color.set('#7dd3fc');
    } else {
      const sk = currentSkin();
      m.skinMat.color.set(sk.skinColor);
      m.shirtMat.color.set(sk.shirtColor);
    }

    // Head & Facial Expression
    m.headGrp.position.set(n[0].x, n[0].y, 0.05);
    m.headGrp.rotation.z = Math.atan2(n[0].y - n[1].y, n[0].x - n[1].x) - Math.PI / 2;
    const eyeScaleY = ragdoll.isBlinking ? 0.12 : ragdoll.painTimer > 0 ? 0.45 : 1;
    m.lEye.scale.set(1, eyeScaleY, 1);
    m.rEye.scale.set(1, eyeScaleY, 1);
    m.mouth.scale.set(ragdoll.painTimer > 0 ? 1.35 : 1, ragdoll.painTimer > 0 ? 2.4 : 1, 1);

    // Body & Limbs
    align3DLimb(m.torsoMesh, n[2], n[1]);
    m.pelvisMesh.position.set(n[2].x, n[2].y, 0);
    m.pelvisMesh.rotation.z = m.torsoMesh.rotation.z;

    align3DLimb(m.lUpperArm, n[1], n[3]);
    align3DLimb(m.lForeArm, n[3], n[4]);
    align3DLimb(m.rUpperArm, n[1], n[5]);
    align3DLimb(m.rForeArm, n[5], n[6]);

    align3DLimb(m.lThigh, n[2], n[7]);
    align3DLimb(m.lShin, n[7], n[8]);
    align3DLimb(m.rThigh, n[2], n[9]);
    align3DLimb(m.rShin, n[9], n[10]);

    m.lShoe.position.set(n[8].x, n[8].y - 0.06, 0.08);
    m.rShoe.position.set(n[10].x, n[10].y - 0.06, 0.08);

    // Visible layered damage marks on Oka's body
    m.woundPool.forEach((wm, idx) => {
      const mk = state.damageMarks[state.damageMarks.length - 1 - idx];
      if (!mk) {
        wm.visible = false;
        return;
      }
      wm.visible = true;
      const anchor = mk.part === 'head' ? n[0] : mk.part === 'pelvis' ? n[2] : n[1];
      wm.position.set(anchor.x + mk.u * 0.55, anchor.y + mk.v * 0.65, 0.47);
      wm.scale.setScalar(mk.size * 6.5);
      wm.material.color.set(
        mk.type === 'cut' ? '#dc2626' : mk.type === 'scorch' ? '#18181b' : mk.type === 'tear' ? '#7f1d1d' : '#581c87'
      );
    });

    // Sync Duri Traps in 3D
    while (threeState.trapMeshes.length < state.traps.length) {
      const tg = new THREE.Group();
      const base = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.08, 0.45), new THREE.MeshStandardMaterial({ color: '#334155' }));
      tg.add(base);
      const spikeMat = new THREE.MeshStandardMaterial({ color: '#e2e8f0', metalness: 0.7, roughness: 0.25 });
      for (let s = -2; s <= 2; s++) {
        const cone = new THREE.Mesh(new THREE.ConeGeometry(0.075, 0.34, 8), spikeMat);
        cone.position.set(s * 0.22, 0.19, 0);
        tg.add(cone);
      }
      threeState.scene.add(tg);
      threeState.trapMeshes.push(tg);
    }
    threeState.trapMeshes.forEach((tg, i) => {
      const tr = state.traps[i];
      if (!tr) {
        tg.visible = false;
        return;
      }
      tg.visible = true;
      tg.position.set(tr.x, tr.y, 0);
      tg.rotation.z = tr.angle;
    });

    // Sync Blood Decals
    while (threeState.bloodMeshes.length < state.bloodDecals.length) {
      const bm = new THREE.Mesh(
        new THREE.CircleGeometry(0.35, 14),
        new THREE.MeshBasicMaterial({ color: '#991b1b', transparent: true, opacity: 0.85, side: THREE.DoubleSide })
      );
      threeState.scene.add(bm);
      threeState.bloodMeshes.push(bm);
    }
    threeState.bloodMeshes.forEach((bm, i) => {
      const bd = state.bloodDecals[i];
      if (!bd) {
        bm.visible = false;
        return;
      }
      bm.visible = true;
      if (bd.wall) {
        bm.position.set(bd.x, bd.y, -2.22);
        bm.rotation.x = 0;
      } else {
        bm.position.set(bd.x, BOUNDS.minY + 0.02, 0.2);
        bm.rotation.x = -Math.PI / 2;
      }
      bm.scale.setScalar(bd.r * 2.6);
    });

    // Sync Embedded Blades
    while (threeState.bladeMeshes.length < state.stuckBlades.length) {
      const sb = new THREE.Mesh(
        new THREE.ConeGeometry(0.08, 0.55, 6),
        new THREE.MeshStandardMaterial({ color: '#e2e8f0', metalness: 0.8, roughness: 0.2 })
      );
      threeState.scene.add(sb);
      threeState.bladeMeshes.push(sb);
    }
    threeState.bladeMeshes.forEach((sb, i) => {
      const b = state.stuckBlades[i];
      if (!b) {
        sb.visible = false;
        return;
      }
      sb.visible = true;
      const anchor = ragdoll.nodes[b.nodeIdx] || ragdoll.nodes[1];
      sb.position.set(anchor.x + b.ox, anchor.y + b.oy, 0.35);
      sb.rotation.z = b.angle - Math.PI / 2;
    });

    // Sync Projectiles
    while (threeState.projMeshes.length < state.projectiles.length) {
      const pm = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.28, 1),
        new THREE.MeshStandardMaterial({ color: '#f97316', roughness: 0.35 })
      );
      threeState.scene.add(pm);
      threeState.projMeshes.push(pm);
    }
    threeState.projMeshes.forEach((pm, i) => {
      const pr = state.projectiles[i];
      if (!pr) {
        pm.visible = false;
        return;
      }
      pm.visible = true;
      pm.position.set(pr.x, pr.y, 0.1);
      pm.rotation.z = pr.spin;
      pm.scale.setScalar(pr.r * 3.2);
      pm.material.color.set(pr.weapon.color);
    });

    // Sync Particles
    while (threeState.partMeshes.length < state.particles.length) {
      const ptM = new THREE.Mesh(
        new THREE.SphereGeometry(0.08, 8, 8),
        new THREE.MeshBasicMaterial({ color: '#dc2626' })
      );
      threeState.scene.add(ptM);
      threeState.partMeshes.push(ptM);
    }
    threeState.partMeshes.forEach((ptM, i) => {
      const pt = state.particles[i];
      if (!pt) {
        ptM.visible = false;
        return;
      }
      ptM.visible = true;
      ptM.position.set(pt.x, pt.y, 0.25);
      ptM.scale.setScalar(pt.r * 12);
      ptM.material.color.set(pt.color);
    });

    threeState.renderer.render(threeState.scene, threeState.camera);
  }

  // ==========================================
  // 2D CANVAS RENDERER
  // ==========================================
  function render2D() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    if (canvas2D.width !== w || canvas2D.height !== h) {
      canvas2D.width = w;
      canvas2D.height = h;
    }

    const map = currentMap();
    const sk = currentSkin();
    const ctx = ctx2D;
    ctx.save();

    if (state.shakeTimer > 0) {
      ctx.translate((Math.random() - 0.5) * 14, (Math.random() - 0.5) * 14);
    }

    // Background Gradient
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, map.bgTop);
    grad.addColorStop(1, map.bgBottom);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Floor
    const floorScr = worldToScreen(0, BOUNDS.minY);
    ctx.fillStyle = map.floorColor;
    ctx.fillRect(0, floorScr.y, w, h - floorScr.y);

    // Blood Decals
    state.bloodDecals.forEach(bd => {
      const p = worldToScreen(bd.x, bd.y);
      ctx.fillStyle = 'rgba(153, 27, 27, 0.85)';
      ctx.beginPath();
      ctx.ellipse(p.x, p.y, bd.r * 45, bd.wall ? bd.r * 45 : bd.r * 16, 0, 0, Math.PI * 2);
      ctx.fill();
    });

    // Duri Traps (Auto-oriented)
    state.traps.forEach(tr => {
      const p = worldToScreen(tr.x, tr.y);
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(-tr.angle);
      ctx.fillStyle = '#334155';
      ctx.fillRect(-34, -4, 68, 8);
      ctx.fillStyle = '#f1f5f9';
      for (let s = -26; s <= 26; s += 13) {
        ctx.beginPath();
        ctx.moveTo(s - 5, -4);
        ctx.lineTo(s, -22);
        ctx.lineTo(s + 5, -4);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    });

    // Ragdoll Oka 2D
    const n = ragdoll.nodes.map(nd => worldToScreen(nd.x, nd.y));
    function drawLimb2D(a, b, width, color) {
      ctx.strokeStyle = color;
      ctx.lineWidth = width;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }

    const shirtC = state.xrayTimer > 0 ? '#0284c7' : state.freezeTimer > 0 ? '#7dd3fc' : sk.shirtColor;
    const skinC = state.xrayTimer > 0 ? '#38bdf8' : state.freezeTimer > 0 ? '#bae6fd' : sk.skinColor;

    // Legs & Shoes
    drawLimb2D(n[2], n[7], 18, sk.pantsColor);
    drawLimb2D(n[7], n[8], 15, skinC);
    drawLimb2D(n[2], n[9], 18, sk.pantsColor);
    drawLimb2D(n[9], n[10], 15, skinC);

    ctx.fillStyle = sk.shoeColor;
    ctx.fillRect(n[8].x - 11, n[8].y - 4, 24, 11);
    ctx.fillRect(n[10].x - 11, n[10].y - 4, 24, 11);

    // Torso & Arms
    drawLimb2D(n[2], n[1], 44, shirtC);
    drawLimb2D(n[1], n[3], 14, shirtC);
    drawLimb2D(n[3], n[4], 12, skinC);
    drawLimb2D(n[1], n[5], 14, shirtC);
    drawLimb2D(n[5], n[6], 12, skinC);

    // OSIS pocket badge
    ctx.fillStyle = '#1d4ed8';
    ctx.fillRect(n[1].x - 12, n[1].y + 4, 9, 10);

    // Head + Blue Indonesian School Cap
    const headAngle = Math.atan2(n[0].y - n[1].y, n[0].x - n[1].x) + Math.PI / 2;
    ctx.save();
    ctx.translate(n[0].x, n[0].y);
    ctx.rotate(headAngle);

    ctx.fillStyle = skinC;
    ctx.beginPath();
    ctx.arc(0, 0, 28, 0, Math.PI * 2);
    ctx.fill();

    // Blue Cap Dome & Visor
    ctx.fillStyle = sk.capMain;
    ctx.beginPath();
    ctx.arc(0, -3, 29, Math.PI, 0);
    ctx.fill();
    ctx.fillStyle = sk.capVisor;
    ctx.fillRect(-16, -6, 38, 6);
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(0, -16, 4.5, 0, Math.PI * 2);
    ctx.fill();

    // Eyes & Mouth
    ctx.fillStyle = '#0f172a';
    const eyeH = ragdoll.isBlinking ? 1 : ragdoll.painTimer > 0 ? 2.5 : 4.5;
    ctx.fillRect(-12, 0, 5, eyeH);
    ctx.fillRect(7, 0, 5, eyeH);

    ctx.fillStyle = '#7f1d1d';
    ctx.fillRect(-7, 11, 14, ragdoll.painTimer > 0 ? 8 : 3);
    ctx.restore();

    // Visible Damage Marks on Oka
    state.damageMarks.forEach(mk => {
      const anchor = mk.part === 'head' ? n[0] : mk.part === 'pelvis' ? n[2] : n[1];
      ctx.fillStyle = mk.type === 'cut' ? '#dc2626' : mk.type === 'scorch' ? '#18181b' : 'rgba(88, 28, 135, 0.78)';
      ctx.beginPath();
      ctx.arc(anchor.x + mk.u * 26, anchor.y + mk.v * 34, mk.size * 34, 0, Math.PI * 2);
      ctx.fill();
    });

    // Projectiles & Particles
    state.projectiles.forEach(pr => {
      const p = worldToScreen(pr.x, pr.y);
      ctx.fillStyle = pr.weapon.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, pr.r * 38, 0, Math.PI * 2);
      ctx.fill();
    });

    state.particles.forEach(pt => {
      const p = worldToScreen(pt.x, pt.y);
      ctx.fillStyle = pt.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, pt.r * 45, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.restore();
  }

  // ==========================================
  // UI BINDINGS & RENDERING
  // ==========================================
  const hpBar = document.getElementById('hp-bar');
  const hpText = document.getElementById('hp-text');
  const comboBadge = document.getElementById('combo-badge');
  const trapCountEl = document.getElementById('trap-count');
  const activeWeaponPill = document.getElementById('active-weapon-pill');
  const mapBar = document.getElementById('map-bar');
  const skinDrawer = document.getElementById('skin-drawer');
  const skinList = document.getElementById('skin-list');
  const catTabs = document.getElementById('cat-tabs');
  const weaponList = document.getElementById('weapon-list');

  function updateHud() {
    hpBar.style.width = `${state.hp}%`;
    hpText.textContent = `${state.hp}%`;
    comboBadge.textContent = `x${state.combo}`;
    trapCountEl.textContent = `${state.traps.length}`;
    activeWeaponPill.textContent = currentWeapon().name;
  }

  function renderMaps() {
    mapBar.innerHTML = MAPS.map((m, i) => {
      const active = i === state.mapIndex;
      return `<button type="button" data-map="${i}" class="px-2.5 py-1 rounded-lg text-[11px] font-bold shrink-0 border transition ${
        active
          ? 'bg-sky-500 text-slate-950 border-sky-300 shadow'
          : 'bg-slate-900/85 text-slate-300 border-slate-700/80'
      }">${m.name}</button>`;
    }).join('');

    mapBar.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = Number(btn.dataset.map);
        if (idx === state.mapIndex) return;
        state.mapIndex = idx;
        clearArenaDebris(); // Clear duri traps & blood when switching maps
        build3DRoom();
        // If current weapon was special to previous map, switch to Tangan Kosong
        if (!allWeapons().some(w => w.id === state.weaponId)) {
          state.weaponId = 'tangan';
        }
        renderMaps();
        renderWeapons();
        updateHud();
      });
    });
  }

  function renderSkins() {
    skinList.innerHTML = SKINS.map((s, i) => {
      const active = i === state.skinIndex;
      return `<button type="button" data-skin="${i}" class="flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-left text-[11px] font-bold border ${
        active ? 'bg-sky-600/30 border-sky-400 text-white' : 'bg-slate-900 border-slate-800 text-slate-300'
      }">
        <span class="w-3 h-3 rounded-full shrink-0 border border-white/40" style="background:${s.shirtColor}"></span>
        <span class="truncate">${s.name}</span>
      </button>`;
    }).join('');

    skinList.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        state.skinIndex = Number(btn.dataset.skin);
        build3DOka();
        renderSkins();
      });
    });
  }

  function renderCategories() {
    catTabs.innerHTML = CATEGORIES.map(c => {
      const active = c.id === state.cat;
      return `<button type="button" data-cat="${c.id}" class="px-2 py-1 rounded-lg text-[11px] font-extrabold shrink-0 border ${
        active
          ? 'bg-amber-400 text-slate-950 border-amber-200'
          : 'bg-slate-900 text-slate-300 border-slate-800'
      }">${c.label}</button>`;
    }).join('');

    catTabs.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        state.cat = btn.dataset.cat;
        renderCategories();
        renderWeapons();
      });
    });
  }

  function renderWeapons() {
    const list = allWeapons().filter(w => w.cat === state.cat);
    weaponList.innerHTML = list.map(w => {
      const active = w.id === state.weaponId;
      return `<button type="button" data-wid="${w.id}" class="flex items-center gap-1.5 px-2.5 py-2 rounded-xl text-[11px] font-bold shrink-0 border transition active:scale-95 ${
        active
          ? 'bg-sky-500/25 border-sky-400 text-white shadow-inner'
          : 'bg-slate-900/95 border-slate-800 text-slate-300'
      }">
        <span class="w-2.5 h-2.5 rounded-full shrink-0" style="background:${w.color}"></span>
        <span>${w.name}</span>
      </button>`;
    }).join('');

    weaponList.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        state.weaponId = btn.dataset.wid;
        renderWeapons();
        updateHud();
      });
    });
  }

  // Top Bar Controls
  document.getElementById('btn-dim').addEventListener('click', e => {
    state.dim = state.dim === '3D' ? '2D' : '3D';
    e.currentTarget.textContent = state.dim;
    if (state.dim === '3D') {
      canvas3D.classList.remove('hidden');
      canvas2D.classList.add('hidden');
    } else {
      canvas3D.classList.add('hidden');
      canvas2D.classList.remove('hidden');
    }
  });

  document.getElementById('btn-clear-traps').addEventListener('click', clearAllTraps);
  document.getElementById('btn-heal').addEventListener('click', healOka);

  document.getElementById('btn-skin-toggle').addEventListener('click', () => {
    skinDrawer.classList.toggle('hidden');
  });
  document.getElementById('btn-skin-close').addEventListener('click', () => {
    skinDrawer.classList.add('hidden');
  });

  document.getElementById('btn-sound').addEventListener('click', () => {
    state.soundOn = !state.soundOn;
    document.getElementById('icon-sound-on').classList.toggle('hidden', !state.soundOn);
    document.getElementById('icon-sound-off').classList.toggle('hidden', state.soundOn);
  });

  // Arena Pointer Interaction (Touch + Mouse)
  const arenaWrap = document.getElementById('arena-wrap');

  arenaWrap.addEventListener('pointerdown', e => {
    state.pointerDown = true;
    state.pointerX = e.clientX;
    state.pointerY = e.clientY;
    const w = screenToWorld(e.clientX, e.clientY);
    state.worldX = w.x;
    state.worldY = w.y;
    state.prevWorldX = w.x;
    state.prevWorldY = w.y;
    triggerWeaponAt(w.x, w.y, false);
  });

  window.addEventListener('pointermove', e => {
    if (!state.pointerDown) return;
    state.prevWorldX = state.worldX;
    state.prevWorldY = state.worldY;
    const w = screenToWorld(e.clientX, e.clientY);
    state.worldX = w.x;
    state.worldY = w.y;
    triggerWeaponAt(w.x, w.y, true);
  });

  window.addEventListener('pointerup', () => {
    state.pointerDown = false;
    state.grabbedNode = null;
  });

  window.addEventListener('resize', () => {
    if (threeState.renderer && threeState.camera) {
      threeState.camera.aspect = window.innerWidth / window.innerHeight;
      threeState.camera.updateProjectionMatrix();
      threeState.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  });

  // Main Animation Loop
  let lastTime = performance.now();
  function loop(now) {
    const dt = Math.min(0.033, (now - lastTime) / 1000);
    lastTime = now;

    stepPhysics(dt);
    if (state.dim === '3D') {
      render3D();
    } else {
      render2D();
    }
    requestAnimationFrame(loop);
  }

  // Boot
  initRagdoll();
  initFloatingLabels();
  init3D();
  renderMaps();
  renderSkins();
  renderCategories();
  renderWeapons();
  updateHud();
  requestAnimationFrame(loop);
})();
