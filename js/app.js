/**
 * AushviM Technologies - Main Application & Visual FX Engine
 * Theme: Pure Pitch Black & Nutanix Purple (#8347FF)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      if (navMenu.style.display === 'flex') {
        navMenu.style.display = 'none';
      } else {
        navMenu.style.display = 'flex';
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = 'var(--header-height)';
        navMenu.style.left = '0';
        navMenu.style.width = '100%';
        navMenu.style.background = '#000000';
        navMenu.style.padding = '2rem';
        navMenu.style.borderBottom = '1px solid var(--border-glow)';
      }
    });
  }

  // 3. Hero Terminal Simulation
  const terminalLines = [
    { text: '[INIT] Nutanix Cloud Manager v4.2 session initialized', type: 'terminal-info' },
    { text: '[AUTH] Verified credentials for Prism Central (Cluster: US-EAST-AHV)', type: 'terminal-success' },
    { text: '[EXEC] Compiling NCM Calm Blueprint "Enterprise_Core_Stack_v2"', type: '' },
    { text: '[PROV] 4 AHV VMs provisioned in 18.2s (VLAN 10 DMZ)', type: 'terminal-success' },
    { text: '[FLOW] Enforcing Microsegmentation security ruleset [STRICT]', type: 'terminal-info' },
    { text: '[FINOPS] Right-sizing policies applied. Reclaimed 14 vCPUs idle buffer', type: 'terminal-success' },
    { text: '[READY] Application live. RTO: 0s | Health Index: 99.98%', type: 'terminal-success' }
  ];

  const terminalBody = document.getElementById('hero-terminal-body');
  if (terminalBody) {
    let lineIdx = 0;
    setInterval(() => {
      const item = terminalLines[lineIdx % terminalLines.length];
      const div = document.createElement('div');
      div.className = 'terminal-line';
      div.innerHTML = `<span class="terminal-prompt">></span> <span class="${item.type}">${item.text}</span>`;
      
      terminalBody.appendChild(div);
      if (terminalBody.children.length > 5) {
        terminalBody.removeChild(terminalBody.firstChild);
      }
      lineIdx++;
    }, 2800);
  }

  // 4. Interactive Background Particle Canvas (Nutanix Purple on Pitch Black)
  initCanvas();
});

function initCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const nodeCount = Math.min(Math.floor(window.innerWidth / 32), 40);
  const nodes = [];

  const palette = ['#8347FF', '#A77BFF', '#DDD6FE', '#FFFFFF', '#64748B'];

  for (let i = 0; i < nodeCount; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 1.5 + 0.8,
      color: palette[Math.floor(Math.random() * palette.length)]
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting mesh lines
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 130) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(131, 71, 255, ${0.14 * (1 - dist / 130)})`;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        }
      }
    }

    // Draw nodes
    nodes.forEach(node => {
      node.x += node.vx;
      node.y += node.vy;

      if (node.x < 0 || node.x > width) node.vx *= -1;
      if (node.y < 0 || node.y > height) node.vy *= -1;

      ctx.beginPath();
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      ctx.fillStyle = node.color;
      ctx.shadowBlur = 6;
      ctx.shadowColor = node.color;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    requestAnimationFrame(render);
  }

  render();
}
