import { useState } from 'react'
import { Play, Check, Filter, Database, TrendingUp, Sparkles } from 'lucide-react'

export default function DataPipelineDemo() {
  const [cleaned, setCleaned] = useState(false)
  const [activeTab, setActiveTab] = useState<'missing' | 'outliers' | 'duplicates' | 'correlations'>('missing')
  const [processing, setProcessing] = useState(false)

  const handleClean = () => {
    setProcessing(true)
    setTimeout(() => {
      setCleaned(!cleaned)
      setProcessing(false)
    }, 700)
  }

  return (
    <div className="rounded-2xl border border-cyan-500/25 bg-[#090b16] p-5 font-mono text-xs">
      {/* Header Pipeline Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
        <div className="flex items-center gap-2 text-cyan-400 font-bold tracking-wide uppercase">
          <Database size={15} />
          <span>Automated Data Pipeline Engine</span>
        </div>

        <button
          onClick={handleClean}
          disabled={processing}
          className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-all text-xs font-semibold ${
            cleaned
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
              : 'bg-cyan-500 text-black hover:bg-cyan-400 shadow-glow-blue'
          }`}
        >
          {processing ? (
            <Sparkles size={13} className="animate-spin" />
          ) : cleaned ? (
            <Check size={13} />
          ) : (
            <Play size={13} fill="currentColor" />
          )}
          <span>{processing ? 'Processing...' : cleaned ? 'Pipeline Applied (Reset)' : 'Execute Clean Pipeline'}</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 my-4 overflow-x-auto pb-1">
        {[
          { id: 'missing', label: 'Missing Values (NaN)', count: cleaned ? '0 Imputed' : '342 Detected' },
          { id: 'outliers', label: 'Z-Score Outliers', count: cleaned ? 'Capped (IQR)' : '89 Flagged' },
          { id: 'duplicates', label: 'Duplicate Records', count: cleaned ? '0 Deduplicated' : '124 Rows' },
          { id: 'correlations', label: 'Pearson Matrix', count: 'Validated' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-3 py-2 rounded-xl border text-left transition-all ${
              activeTab === tab.id
                ? 'border-cyan-400 bg-cyan-500/10 text-cyan-300'
                : 'border-white/5 bg-white/[0.02] text-white/50 hover:border-white/15'
            }`}
          >
            <div className="font-semibold">{tab.label}</div>
            <div className="text-[10px] opacity-75">{tab.count}</div>
          </button>
        ))}
      </div>

      {/* Dynamic Content Display */}
      <div className="rounded-xl border border-white/10 bg-black/40 p-4 min-h-[140px] flex flex-col justify-between">
        {activeTab === 'missing' && (
          <div>
            <div className="flex justify-between text-white/60 mb-2">
              <span>Feature Incompleteness Ratio</span>
              <span className={cleaned ? 'text-emerald-400' : 'text-amber-400'}>
                {cleaned ? '0.00% Missing (Median Imputed)' : '14.8% Missing (Sensor Data)'}
              </span>
            </div>
            <div className="space-y-2">
              <div>
                <div className="flex justify-between text-[11px] text-white/40 mb-1">
                  <span>temperature_celsius</span>
                  <span>{cleaned ? '100% Valid' : '82% Valid (18% NaN)'}</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${cleaned ? 'bg-emerald-400 w-full' : 'bg-amber-400 w-[82%]'}`}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-[11px] text-white/40 mb-1">
                  <span>pressure_kpa</span>
                  <span>{cleaned ? '100% Valid' : '89% Valid (11% NaN)'}</span>
                </div>
                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-500 ${cleaned ? 'bg-emerald-400 w-full' : 'bg-cyan-400 w-[89%]'}`}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'outliers' && (
          <div>
            <div className="flex justify-between text-white/60 mb-2">
              <span>Z-Score Anomaly Filter (&gt; 3.0σ)</span>
              <span className={cleaned ? 'text-emerald-400' : 'text-rose-400'}>
                {cleaned ? 'Winsorized at 99th percentile' : '89 extreme anomalies found'}
              </span>
            </div>
            <div className="h-16 flex items-end gap-1.5 pt-2">
              {[25, 45, 60, 85, 30, cleaned ? 50 : 98, 40, cleaned ? 55 : 95, 35, 70, 50, 40].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className={`w-full rounded-t transition-all duration-500 ${
                      h > 90 ? 'bg-rose-500' : 'bg-cyan-400/80'
                    }`}
                    style={{ height: `${h}%` }}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'duplicates' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between text-white/70">
              <span className="flex items-center gap-1.5">
                <Filter size={13} className="text-cyan-400" /> Exact &amp; Fuzzy Match Ingestion
              </span>
              <span className={cleaned ? 'text-emerald-400' : 'text-purple-400'}>
                {cleaned ? 'Unique Indices Preserved (100%)' : '124 Duplicated Primary Keys'}
              </span>
            </div>
            <div className="p-2.5 rounded-lg bg-white/[0.03] border border-white/5 font-mono text-[11px] text-white/60">
              {cleaned
                ? '>> df.drop_duplicates(subset=["record_id", "timestamp"], keep="last", inplace=True) => (28,450 rows)'
                : '>> Identified 124 redundant transmissions across edge logger nodes.'}
            </div>
          </div>
        )}

        {activeTab === 'correlations' && (
          <div>
            <div className="flex justify-between text-white/70 mb-2">
              <span className="flex items-center gap-1.5">
                <TrendingUp size={13} className="text-cyan-400" /> Multicollinearity Matrix
              </span>
              <span className="text-cyan-400">Heatmap Ready</span>
            </div>
            <div className="grid grid-cols-4 gap-1 text-center text-[10px]">
              <div className="p-1 rounded bg-cyan-500/30 text-cyan-200">1.00</div>
              <div className="p-1 rounded bg-cyan-500/10 text-white/60">0.78</div>
              <div className="p-1 rounded bg-white/5 text-white/40">-0.12</div>
              <div className="p-1 rounded bg-purple-500/20 text-purple-300">0.84</div>
              <div className="p-1 rounded bg-cyan-500/10 text-white/60">0.78</div>
              <div className="p-1 rounded bg-cyan-500/30 text-cyan-200">1.00</div>
              <div className="p-1 rounded bg-white/5 text-white/40">0.05</div>
              <div className="p-1 rounded bg-purple-500/10 text-white/60">0.62</div>
            </div>
          </div>
        )}

        <div className="pt-3 mt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-white/40">
          <span>Backend: FastAPI + Pandas/NumPy</span>
          <span>Status: Clean validation passed</span>
        </div>
      </div>
    </div>
  )
}
