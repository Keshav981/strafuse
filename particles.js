/**
 * Signal Particles - Ambient Background Effect
 * An interactive, subtle particle field with connective pulses
 */

class SignalParticles {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.ctx = this.canvas.getContext('2d');
    
    // Check for reduced motion preference
    this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    // Settings
    this.particles = [];
    this.connections = [];
    this.pulses = [];
    
    this.maxParticles = window.innerWidth < 768 ? 40 : 100;
    this.connectionDistance = 150;
    this.mouseRepelRadius = 200;
    
    // Colors
    this.colorParticle = 'rgba(79, 70, 229, 0.15)'; // Indigo
    this.colorConnection = 'rgba(15, 23, 42, 0.04)'; // Slate
    this.colorPulse = 'rgba(79, 70, 229, 0.6)'; // Bright Indigo
    
    // State
    this.mouse = { x: -1000, y: -1000 };
    this.animationFrame = null;
    this.isVisible = true;
    
    this.init();
    this.bindEvents();
    this.animate();
  }

  init() {
    this.resize();
    this.particles = [];
    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push(this.createParticle());
    }
  }

  resize() {
    const parent = this.canvas.parentElement;
    if (parent) {
      this.canvas.width = parent.clientWidth;
      this.canvas.height = parent.clientHeight;
    }
    
    // Update particle count based on screen size
    const newMaxParticles = window.innerWidth < 768 ? 40 : 100;
    if (newMaxParticles !== this.maxParticles) {
      this.maxParticles = newMaxParticles;
      this.init();
    }
  }

  createParticle(x, y) {
    return {
      x: x || Math.random() * this.canvas.width,
      y: y || Math.random() * this.canvas.height,
      size: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      baseVx: (Math.random() - 0.5) * 0.5,
      baseVy: (Math.random() - 0.5) * 0.5,
    };
  }

  bindEvents() {
    window.addEventListener('resize', () => this.resize());
    
    const parent = this.canvas.parentElement;
    if (parent) {
      parent.addEventListener('mousemove', (e) => {
        const rect = parent.getBoundingClientRect();
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
      });
      
      parent.addEventListener('mouseleave', () => {
        this.mouse.x = -1000;
        this.mouse.y = -1000;
      });
    }

    // Pause animation when tab is inactive
    document.addEventListener('visibilitychange', () => {
      this.isVisible = document.visibilityState === 'visible';
      if (this.isVisible) {
        this.animate();
      }
    });
    
    // Randomly spawn pulses
    setInterval(() => {
      if (this.isVisible && !this.prefersReducedMotion && this.connections.length > 0) {
        this.spawnPulse();
      }
    }, 2000);
  }

  spawnPulse() {
    if (this.connections.length === 0) return;
    
    // Pick a random connection
    const conn = this.connections[Math.floor(Math.random() * this.connections.length)];
    
    this.pulses.push({
      p1: conn.p1,
      p2: conn.p2,
      progress: 0,
      speed: Math.random() * 0.02 + 0.01
    });
  }

  update() {
    if (this.prefersReducedMotion) return;

    this.connections = [];

    // Update particles
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      
      // Mouse repulsion
      const dx = this.mouse.x - p.x;
      const dy = this.mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < this.mouseRepelRadius) {
        const force = (this.mouseRepelRadius - dist) / this.mouseRepelRadius;
        p.vx -= (dx / dist) * force * 0.05;
        p.vy -= (dy / dist) * force * 0.05;
      } else {
        // Return to base velocity
        p.vx += (p.baseVx - p.vx) * 0.05;
        p.vy += (p.baseVy - p.vy) * 0.05;
      }
      
      // Apply velocity limitations
      const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
      if (speed > 2) {
        p.vx = (p.vx / speed) * 2;
        p.vy = (p.vy / speed) * 2;
      }

      // Move particle
      p.x += p.vx;
      p.y += p.vy;

      // Wrap around edges
      if (p.x < 0) p.x = this.canvas.width;
      if (p.x > this.canvas.width) p.x = 0;
      if (p.y < 0) p.y = this.canvas.height;
      if (p.y > this.canvas.height) p.y = 0;
      
      // Find connections
      for (let j = i + 1; j < this.particles.length; j++) {
        const p2 = this.particles[j];
        const dx2 = p.x - p2.x;
        const dy2 = p.y - p2.y;
        const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
        
        if (dist2 < this.connectionDistance) {
          this.connections.push({ p1: p, p2: p2, dist: dist2 });
        }
      }
    }
    
    // Update pulses
    for (let i = this.pulses.length - 1; i >= 0; i--) {
      const pulse = this.pulses[i];
      pulse.progress += pulse.speed;
      
      if (pulse.progress >= 1) {
        this.pulses.splice(i, 1);
      }
    }
  }

  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw connections
    for (let i = 0; i < this.connections.length; i++) {
      const conn = this.connections[i];
      const opacity = 1 - (conn.dist / this.connectionDistance);
      
      this.ctx.beginPath();
      this.ctx.moveTo(conn.p1.x, conn.p1.y);
      this.ctx.lineTo(conn.p2.x, conn.p2.y);
      this.ctx.strokeStyle = `rgba(15, 23, 42, ${opacity * 0.04})`;
      this.ctx.lineWidth = 1;
      this.ctx.stroke();
    }
    
    // Draw pulses
    for (let i = 0; i < this.pulses.length; i++) {
      const pulse = this.pulses[i];
      const x = pulse.p1.x + (pulse.p2.x - pulse.p1.x) * pulse.progress;
      const y = pulse.p1.y + (pulse.p2.y - pulse.p1.y) * pulse.progress;
      
      // Fade pulse in and out based on progress
      let pulseOpacity = 1;
      if (pulse.progress < 0.2) pulseOpacity = pulse.progress * 5;
      else if (pulse.progress > 0.8) pulseOpacity = (1 - pulse.progress) * 5;
      
      this.ctx.beginPath();
      this.ctx.arc(x, y, 2, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(79, 70, 229, ${pulseOpacity * 0.6})`;
      this.ctx.fill();
      
      // Pulse glow
      this.ctx.beginPath();
      this.ctx.arc(x, y, 6, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(79, 70, 229, ${pulseOpacity * 0.2})`;
      this.ctx.fill();
    }
    
    // Draw particles
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      this.ctx.fillStyle = this.colorParticle;
      this.ctx.fill();
    }
  }

  animate() {
    if (!this.isVisible) return;
    
    this.update();
    this.draw();
    
    this.animationFrame = requestAnimationFrame(() => this.animate());
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const heroSection = document.querySelector('.hero');
  
  if (heroSection) {
    // Create and insert canvas
    const canvas = document.createElement('canvas');
    canvas.className = 'hero-canvas';
    
    // Insert as first child to be behind everything else in the hero section
    heroSection.insertBefore(canvas, heroSection.firstChild);
    
    // Initialize particles
    new SignalParticles(canvas);
  }
});
