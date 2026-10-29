import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Portfolio ErrorBoundary caught:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }
      return (
        <div className="p-8 text-center text-white/70 font-mono text-xs">
          <p className="text-amber-400 mb-2">3D scene temporarily unavailable in this browser environment.</p>
          <div className="w-32 h-32 mx-auto rounded-full border border-cyan-500/20 animate-pulse flex items-center justify-center">
            <span className="text-cyan-400">AI Core</span>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
