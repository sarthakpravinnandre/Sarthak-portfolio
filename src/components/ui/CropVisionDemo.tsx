import { useState } from 'react'
import { Scan, Eye, Zap, CheckCircle2 } from 'lucide-react'

export default function CropVisionDemo() {
  const [showBoxes, setShowBoxes] = useState(true)
  const [selectedCrop, setSelectedCrop] = useState<'potato' | 'tomato' | 'corn'>('potato')

  const cropData = {
    potato: {
      name: 'Solanum tuberosum (Potato)',
      diagnosis: 'Early Blight (Alternaria solani)',
      confidence: '98.6%',
      treatment: 'Apply copper-based fungicide; improve field aeration',
      boxes: [
        { x: '18%', y: '28%', w: '26%', h: '24%', label: 'Early Blight: 98.6%' },
        { x: '58%', y: '45%', w: '24%', h: '22%', label: 'Early Blight: 97.4%' },
      ],
      color: '#ef4444',
    },
    tomato: {
      name: 'Solanum lycopersicum (Tomato)',
      diagnosis: 'Bacterial Spot (Xanthomonas)',
      confidence: '98.1%',
      treatment: 'Crop rotation; remove infected lower leaves',
      boxes: [
        { x: '35%', y: '25%', w: '30%', h: '32%', label: 'Bacterial Spot: 98.1%' },
      ],
      color: '#f59e0b',
    },
    corn: {
      name: 'Zea mays (Corn / Maize)',
      diagnosis: 'Common Rust (Puccinia sorghi)',
      confidence: '99.1%',
      treatment: 'Fungicide spray at early pustule emergence',
      boxes: [
        { x: '22%', y: '35%', w: '48%', h: '28%', label: 'Common Rust: 99.1%' },
      ],
      color: '#06b6d4',
    },
  }

  const current = cropData[selectedCrop]

  return (
    <div className="rounded-2xl border border-cyan-500/20 bg-[#090b14] p-5 font-mono text-xs">
      {/* Header bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2 text-cyan-400 font-bold tracking-wide uppercase">
          <Scan size={15} />
          <span>YOLO Inference Vision Pipeline</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowBoxes(!showBoxes)}
            className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all text-xs ${
              showBoxes
                ? 'bg-cyan-500 text-black font-semibold'
                : 'bg-white/10 text-white/70 hover:bg-white/15'
            }`}
          >
            <Eye size={12} />
            <span>{showBoxes ? 'Bounding Boxes: ON' : 'Bounding Boxes: OFF'}</span>
          </button>
        </div>
      </div>

      {/* Select crop specimen */}
      <div className="flex gap-2 my-3">
        {(['potato', 'tomato', 'corn'] as const).map((crop) => (
          <button
            key={crop}
            onClick={() => setSelectedCrop(crop)}
            className={`px-3 py-1.5 rounded-lg border uppercase text-[11px] font-semibold transition-all ${
              selectedCrop === crop
                ? 'border-cyan-400 bg-cyan-500/10 text-cyan-300'
                : 'border-white/5 bg-white/[0.02] text-white/50 hover:border-white/15'
            }`}
          >
            {crop}
          </button>
        ))}
      </div>

      {/* Visual Canvas Simulator */}
      <div className="relative w-full h-52 rounded-xl overflow-hidden border border-white/10 bg-gradient-to-br from-emerald-950/40 via-zinc-950 to-slate-950 flex items-center justify-center">
        {/* Abstract Leaf Specimen Drawing */}
        <svg viewBox="0 0 300 160" className="w-full h-full opacity-60">
          <path
            d="M 50 80 Q 150 10 250 80 Q 150 150 50 80 Z"
            fill="#065f46"
            stroke="#10b981"
            strokeWidth="2"
          />
          <path d="M 50 80 Q 150 80 250 80" stroke="#34d399" strokeWidth="1.5" />
          <path d="M 100 80 L 130 50" stroke="#34d399" strokeWidth="1" />
          <path d="M 150 80 L 180 45" stroke="#34d399" strokeWidth="1" />
          <path d="M 120 80 L 150 110" stroke="#34d399" strokeWidth="1" />
          <path d="M 170 80 L 200 115" stroke="#34d399" strokeWidth="1" />

          {/* Lesions / Disease Spots */}
          <circle cx="95" cy="70" r="14" fill="#78350f" opacity="0.8" />
          <circle cx="195" cy="90" r="16" fill="#78350f" opacity="0.8" />
          <circle cx="150" cy="65" r="10" fill="#991b1b" opacity="0.7" />
        </svg>

        {/* Dynamic Bounding Boxes */}
        {showBoxes &&
          current.boxes.map((box, i) => (
            <div
              key={i}
              className="absolute border-2 border-dashed transition-all duration-300"
              style={{
                left: box.x,
                top: box.y,
                width: box.w,
                height: box.h,
                borderColor: current.color,
                boxShadow: `0 0 15px ${current.color}40`,
              }}
            >
              <span
                className="absolute -top-5 left-0 px-1.5 py-0.5 rounded text-[9px] font-bold text-black"
                style={{ backgroundColor: current.color }}
              >
                {box.label}
              </span>
            </div>
          ))}

        {/* Scanner line animation */}
        <div className="absolute inset-x-0 h-0.5 bg-cyan-400 opacity-60 shadow-[0_0_8px_#22d3ee] animate-pulse top-1/2" />
      </div>

      {/* Inference Metrics bar */}
      <div className="mt-3 grid sm:grid-cols-3 gap-2">
        <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
          <p className="text-[10px] text-white/40 uppercase">Detected Pathogen</p>
          <p className="font-semibold text-white/90 truncate">{current.diagnosis}</p>
        </div>
        <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
          <p className="text-[10px] text-white/40 uppercase">Model Confidence</p>
          <p className="font-bold text-cyan-400 flex items-center gap-1">
            <Zap size={12} /> {current.confidence}
          </p>
        </div>
        <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5">
          <p className="text-[10px] text-white/40 uppercase">Recommended Action</p>
          <p className="text-white/70 truncate text-[11px]">{current.treatment}</p>
        </div>
      </div>

      <div className="mt-2 text-[10px] text-white/40 flex items-center gap-1.5 font-sans">
        <CheckCircle2 size={11} className="text-cyan-400 flex-shrink-0" />
        <span>Reported 98%+ accuracy on test split (project-reported metric).</span>
      </div>
    </div>
  )
}
