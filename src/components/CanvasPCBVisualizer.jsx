import React, { useRef, useEffect, useState } from 'react';
import { Layers, RotateCcw, Sparkles, Eye, ShieldCheck, Box } from 'lucide-react';

export default function CanvasPCBVisualizer({ solderMask = 'Green', onSelectComponent }) {
  const canvasRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 22, y: -28 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [activeLayer, setActiveLayer] = useState('all'); // 'all', 'copper', 'silkscreen', 'mask'
  const [hoveredComponent, setHoveredComponent] = useState(null);

  // Solder mask color definitions
  const MASK_COLORS = {
    'Green': { base: '#0f5132', trace: '#198754', gold: '#eab308' },
    'Matte Black': { base: '#18181b', trace: '#27272a', gold: '#fbbf24' },
    'Royal Blue': { base: '#1e3a8a', trace: '#1d4ed8', gold: '#facc15' },
    'Signal Red': { base: '#881337', trace: '#be123c', gold: '#fef08a' },
    'Crisp White': { base: '#f8fafc', trace: '#cbd5e1', gold: '#ca8a04' },
    'Aerospace Purple': { base: '#4c1d95', trace: '#6d28d9', gold: '#fde047' },
  };

  const currentColors = MASK_COLORS[solderMask] || MASK_COLORS['Green'];

  // Handle Dragging / Mouse Orbit
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    setRotation(prev => ({
      x: Math.max(-50, Math.min(60, prev.x + dy * 0.4)),
      y: prev.y + dx * 0.4
    }));
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Canvas drawing loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const width = canvas.width = 460;
    const height = canvas.height = 340;

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Auto slow spin if not dragging
      const currentRotY = isDragging ? rotation.y : rotation.y + Math.sin(time * 0.5) * 4;
      const currentRotX = isDragging ? rotation.x : rotation.x + Math.cos(time * 0.3) * 2;

      ctx.save();
      ctx.translate(width / 2, height / 2 + 10);

      // Isometric 3D Projection transform
      const radX = (currentRotX * Math.PI) / 180;
      const radY = (currentRotY * Math.PI) / 180;

      // Transform matrix
      ctx.transform(
        Math.cos(radY),
        Math.sin(radY) * Math.sin(radX),
        0,
        Math.cos(radX),
        0,
        0
      );

      // 1. Draw Substrate Thickness & Drop Shadow
      ctx.shadowColor = 'rgba(0, 102, 255, 0.25)';
      ctx.shadowBlur = 35;
      ctx.shadowOffsetY = 25;

      // PCB Base Edge Thickness (FR-4 Dielectric Core)
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(-140, -100, 280, 204);

      // 2. Main Solder Mask Board Surface
      ctx.shadowBlur = 0;
      ctx.shadowOffsetY = 0;
      ctx.fillStyle = currentColors.base;
      ctx.fillRect(-138, -98, 276, 196);

      // Chamfered corner mounting holes
      const drawMountingHole = (hx, hy) => {
        ctx.beginPath();
        ctx.arc(hx, hy, 7, 0, Math.PI * 2);
        ctx.fillStyle = currentColors.gold;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(hx, hy, 4, 0, Math.PI * 2);
        ctx.fillStyle = '#0f172a';
        ctx.fill();
      };
      drawMountingHole(-124, -84);
      drawMountingHole(124, -84);
      drawMountingHole(-124, 84);
      drawMountingHole(124, 84);

      // 3. Copper Routing Traces with Pulse Signal
      if (activeLayer === 'all' || activeLayer === 'copper') {
        ctx.strokeStyle = currentColors.trace;
        ctx.lineWidth = 2.5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        // Bus routes
        const tracePaths = [
          [[-110, -50], [-70, -50], [-40, -20], [-10, -20]],
          [[-110, -40], [-65, -40], [-35, -10], [-10, -10]],
          [[-110, -30], [-60, -30], [-30, 0], [-10, 0]],
          [[10, 0], [40, 0], [70, 30], [110, 30]],
          [[10, 10], [45, 10], [75, 40], [110, 40]],
          [[10, 20], [50, 20], [80, 50], [110, 50]],
          [[0, -70], [0, -35]],
          [[0, 35], [0, 70]],
        ];

        tracePaths.forEach(pts => {
          ctx.beginPath();
          ctx.moveTo(pts[0][0], pts[0][1]);
          for (let i = 1; i < pts.length; i++) {
            ctx.lineTo(pts[i][0], pts[i][1]);
          }
          ctx.stroke();
        });

        // Pulsing electron signal packet
        const pulseProgress = (time * 1.5) % 1;
        const pulseX = -110 + pulseProgress * 220;
        ctx.fillStyle = '#38bdf8';
        ctx.beginPath();
        ctx.arc(pulseX, -15, 3, 0, Math.PI * 2);
        ctx.fill();
      }

      // 4. Center High-Rel BGA / FPGA Silicon Package (AMD Xilinx / STM32)
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(-35, -35, 70, 70);
      ctx.strokeStyle = '#334155';
      ctx.lineWidth = 1;
      ctx.strokeRect(-35, -35, 70, 70);

      // Silicon Die Center Heat Spreader
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(-22, -22, 44, 44);

      // Gold Corner Pin 1 Marker & Etched Markings
      ctx.fillStyle = currentColors.gold;
      ctx.beginPath();
      ctx.arc(-28, -28, 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Silkscreen text on chip
      ctx.fillStyle = '#94a3b8';
      ctx.font = '7px monospace';
      ctx.textAlign = 'center';
      ctx.fillText('SRILIN-SYS', 0, -8);
      ctx.fillText('AS9100D', 0, 2);
      ctx.fillText('REV.04', 0, 12);

      // 5. Perimeter SMT Passives & ICs (0402 / QFN / SOIC)
      // Crystal Oscillator
      ctx.fillStyle = '#64748b';
      ctx.fillRect(-95, 20, 20, 12);
      ctx.fillStyle = currentColors.gold;
      ctx.fillRect(-97, 23, 2, 6);
      ctx.fillRect(-75, 23, 2, 6);

      // SOIC-8 Power Management IC
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(60, -60, 24, 16);
      ctx.fillStyle = currentColors.gold;
      for (let p = 0; p < 4; p++) {
        ctx.fillRect(63 + p * 5, -63, 3, 3);
        ctx.fillRect(63 + p * 5, -44, 3, 3);
      }

      // 0402 Decoupling Capacitors & Resistors Array
      for (let r = 0; r < 5; r++) {
        const rx = -20 + r * 10;
        ctx.fillStyle = '#78350f'; // Ceramic brown
        ctx.fillRect(rx, 45, 6, 3);
        ctx.fillStyle = '#cbd5e1'; // Silver termination
        ctx.fillRect(rx - 1, 45, 1.5, 3);
        ctx.fillRect(rx + 5.5, 45, 1.5, 3);
      }

      // 6. Gold Edge Fingers (PCIe / High-Rel Backplane)
      if (activeLayer === 'all' || activeLayer === 'copper') {
        const fingerWidth = 3;
        const fingerGap = 2;
        const startX = -80;
        for (let f = 0; f < 32; f++) {
          ctx.fillStyle = currentColors.gold;
          ctx.fillRect(startX + f * (fingerWidth + fingerGap), 84, fingerWidth, 12);
        }
      }

      // 7. Silkscreen Legend
      if (activeLayer === 'all' || activeLayer === 'silkscreen') {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
        ctx.font = '6px monospace';
        ctx.textAlign = 'left';
        ctx.fillText('SRILIN ELECTRONICS HYDERABAD', -130, -84);
        ctx.fillText('CLASS 3 HIGH-REL EMS', -130, -75);
        ctx.fillText('J1 EXPANSION', -100, 78);
        ctx.fillText('U1', -15, -40);
        ctx.fillText('U2 PMIC', 60, -66);
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, [rotation, isDragging, solderMask, activeLayer, currentColors]);

  return (
    <div className="relative bg-slate-950/95 border border-slate-800 rounded-2xl p-4 shadow-2xl overflow-hidden flex flex-col justify-between">
      
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between z-10 mb-2">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
          <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
            Live 3D Substrate Inspection
          </span>
        </div>

        <div className="flex items-center space-x-1.5 text-xs">
          <button
            onClick={() => setRotation({ x: 22, y: -28 })}
            className="p-1 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            title="Reset Angle"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Interactive Canvas */}
      <div 
        className="relative cursor-grab active:cursor-grabbing flex items-center justify-center my-1 select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <canvas 
          ref={canvasRef} 
          className="w-full h-[260px] max-w-[460px] object-contain drop-shadow-[0_20px_35px_rgba(0,102,255,0.25)]"
        />

        {/* Orbit Hint Badge */}
        <div className="absolute bottom-2 left-2 pointer-events-none bg-slate-900/80 backdrop-blur-xs text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded border border-slate-800">
          Click & Drag to Orbit 360°
        </div>

        {/* Solder Mask Badge */}
        <div className="absolute top-2 right-2 pointer-events-none bg-slate-900/80 backdrop-blur-xs text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">
          Finish: ENIG 3µ" / {solderMask}
        </div>
      </div>

      {/* Bottom Layer Peel Controls */}
      <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
        <span className="text-slate-400 text-[10px]">Layer Peel:</span>
        <div className="flex items-center space-x-1">
          {[
            { id: 'all', label: 'All Layers' },
            { id: 'copper', label: 'Copper' },
            { id: 'silkscreen', label: 'Silk' },
          ].map(l => (
            <button
              key={l.id}
              onClick={() => setActiveLayer(l.id)}
              className={`px-2 py-0.5 rounded text-[10px] font-bold transition-all cursor-pointer ${
                activeLayer === l.id
                  ? 'bg-[#0066ff] text-white'
                  : 'bg-slate-900 text-slate-400 hover:text-white'
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

    </div>
  );
}
