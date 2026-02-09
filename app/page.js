'use client'

import { useState } from 'react'

// Icons as SVG components for better performance
const Icons = {
  Video: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="23 7 16 12 23 17 23 7"/>
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
    </svg>
  ),
  Camera: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  ),
  Scissors: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="3"/>
      <circle cx="6" cy="18" r="3"/>
      <line x1="20" y1="4" x2="8.12" y2="15.88"/>
      <line x1="14.47" y1="14.48" x2="20" y2="20"/>
      <line x1="8.12" y1="8.12" x2="12" y2="12"/>
    </svg>
  ),
  Film: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
      <line x1="7" y1="2" x2="7" y2="22"/>
      <line x1="17" y1="2" x2="17" y2="22"/>
      <line x1="2" y1="12" x2="22" y2="12"/>
      <line x1="2" y1="7" x2="7" y2="7"/>
      <line x1="2" y1="17" x2="7" y2="17"/>
      <line x1="17" y1="17" x2="22" y2="17"/>
      <line x1="17" y1="7" x2="22" y2="7"/>
    </svg>
  ),
  Mic: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
      <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
      <line x1="12" y1="19" x2="12" y2="23"/>
      <line x1="8" y1="23" x2="16" y2="23"/>
    </svg>
  ),
  Webcam: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="10" r="8"/>
      <circle cx="12" cy="10" r="3"/>
      <path d="M7 22h10"/>
      <path d="M12 18v4"/>
    </svg>
  ),
  Palette: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r="2"/>
      <circle cx="17.5" cy="10.5" r="2"/>
      <circle cx="8.5" cy="7.5" r="2"/>
      <circle cx="6.5" cy="12.5" r="2"/>
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z"/>
    </svg>
  ),
  ZoomIn: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"/>
      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      <line x1="11" y1="8" x2="11" y2="14"/>
      <line x1="8" y1="11" x2="14" y2="11"/>
    </svg>
  ),
  Keyboard: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" ry="2"/>
      <path d="M6 8h.001"/>
      <path d="M10 8h.001"/>
      <path d="M14 8h.001"/>
      <path d="M18 8h.001"/>
      <path d="M8 12h.001"/>
      <path d="M12 12h.001"/>
      <path d="M16 12h.001"/>
      <path d="M7 16h10"/>
    </svg>
  ),
  Timer: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  Pencil: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
    </svg>
  ),
  Layers: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 17 12 22 22 17"/>
      <polyline points="2 12 12 17 22 12"/>
    </svg>
  ),
  Download: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  ),
  Windows: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
    </svg>
  ),
  Check: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  ),
  Menu: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="12" x2="21" y2="12"/>
      <line x1="3" y1="6" x2="21" y2="6"/>
      <line x1="3" y1="18" x2="21" y2="18"/>
    </svg>
  ),
  X: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/>
      <line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  ),
  Github: () => (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  ),
  Cursor: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
      <path d="M13 13l6 6"/>
    </svg>
  ),
  Calendar: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  Zap: () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  )
}

// Feature data
const features = [
  {
    icon: Icons.Video,
    title: 'Screen Recording',
    description: 'Record your entire screen or specific windows in stunning 1080p at up to 60fps. Perfect for tutorials, gameplay, and presentations.'
  },
  {
    icon: Icons.Camera,
    title: 'Screenshots',
    description: 'Capture full-screen screenshots instantly with a single keyboard shortcut. High-quality PNG format.'
  },
  {
    icon: Icons.Scissors,
    title: 'Snipping Tool',
    description: 'Select and capture any region of your screen with precision. Just like Windows Snip & Sketch, but better.'
  },
  {
    icon: Icons.Film,
    title: 'GIF Recording',
    description: 'Create animated GIFs directly from your screen recordings. Perfect for sharing quick demos and reactions.'
  },
  {
    icon: Icons.Webcam,
    title: 'Webcam Overlay',
    description: 'Add a picture-in-picture webcam overlay to your recordings. Customizable shapes, sizes, and animated borders.'
  },
  {
    icon: Icons.Mic,
    title: 'Audio Capture',
    description: 'Record system audio, microphone, or both. Audio-only recording mode also available.'
  },
  {
    icon: Icons.ZoomIn,
    title: 'Live Zoom',
    description: 'Zoom into any part of your screen while recording. Hold Z + scroll to zoom in real-time.'
  },
  {
    icon: Icons.Pencil,
    title: 'Draw on Screen',
    description: 'Annotate your screen with drawings and highlights during recordings for better explanations.'
  },
  {
    icon: Icons.Keyboard,
    title: 'Keyboard Overlay',
    description: 'Display your keystrokes on screen. Perfect for tutorials showing keyboard shortcuts.'
  },
  {
    icon: Icons.Cursor,
    title: 'Cursor Effects',
    description: 'Highlight your cursor and show click effects to make your actions more visible.'
  },
  {
    icon: Icons.Palette,
    title: 'Color Picker',
    description: 'Pick any color from your screen and copy the hex code to clipboard instantly.'
  },
  {
    icon: Icons.Calendar,
    title: 'Scheduled Recording',
    description: 'Schedule recordings to start automatically at a specific time. Never miss an important capture.'
  }
]

// Quick profiles
const profiles = [
  { name: 'Gaming', desc: '1080p 60fps, System Audio', icon: '🎮' },
  { name: 'Tutorial', desc: '1080p 30fps, Mic + System', icon: '📚' },
  { name: 'Meeting', desc: '720p 30fps, Webcam + Mic', icon: '👥' },
  { name: 'Quick', desc: '720p 30fps, No Audio', icon: '⚡' }
]

// Keyboard shortcuts
const shortcuts = [
  { keys: 'Ctrl + Shift + R', action: 'Start/Stop Recording' },
  { keys: 'Ctrl + Shift + S', action: 'Take Screenshot' },
  { keys: 'Ctrl + Shift + A', action: 'Snipping Tool' },
  { keys: 'Z + Scroll', action: 'Live Zoom' }
]

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-gray-900">SnapRec</span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">How it Works</a>
              <a href="#shortcuts" className="text-gray-600 hover:text-gray-900 transition-colors">Shortcuts</a>
              <a href="/SnapRec-1.0.0.exe" download className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
                <Icons.Download />
                <span>Download</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <Icons.X /> : <Icons.Menu />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>Features</a>
                <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>How it Works</a>
                <a href="#shortcuts" className="text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setMobileMenuOpen(false)}>Shortcuts</a>
                <a href="/SnapRec-1.0.0.exe" download className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 w-full" onClick={() => setMobileMenuOpen(false)}>
                  <Icons.Download />
                  <span>Download</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-gradient pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Icons.Windows />
              <span>Free for Windows</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Screen Recording
              <br />
              <span className="gradient-text">Made Simple</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Capture your screen, take screenshots, create GIFs, and more.
              The all-in-one screen recording tool for creators, educators, and professionals.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a href="/SnapRec-1.0.0.exe" download className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all btn-glow flex items-center space-x-3">
                <Icons.Download />
                <span>Download for Windows</span>
              </a>
              <a href="#features" className="text-gray-700 hover:text-gray-900 px-8 py-4 font-semibold text-lg transition-colors flex items-center space-x-2">
                <span>See Features</span>
                <span>→</span>
              </a>
            </div>

            {/* App Preview */}
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-gray-900 rounded-2xl p-4 app-shadow float-animation">
                <div className="bg-gray-800 rounded-xl overflow-hidden">
                  {/* Fake app window */}
                  <div className="bg-[#181818] p-6">
                    {/* Top bar */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-md flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-white font-medium">SnapRec</span>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                        <div className="w-3 h-3 rounded-full bg-gray-600"></div>
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="grid grid-cols-4 gap-3 mb-6">
                      {['Record', 'Screenshot', 'Snip', 'GIF'].map((action, i) => (
                        <div key={action} className={`bg-gray-700/50 rounded-xl p-4 text-center ${i === 0 ? 'ring-2 ring-red-500' : ''}`}>
                          <div className={`w-8 h-8 mx-auto mb-2 rounded-lg ${i === 0 ? 'bg-red-500' : 'bg-gray-600'} flex items-center justify-center`}>
                            <div className={`w-3 h-3 ${i === 0 ? 'bg-white rounded-full' : 'bg-gray-400 rounded'}`}></div>
                          </div>
                          <span className="text-gray-300 text-sm">{action}</span>
                        </div>
                      ))}
                    </div>

                    {/* Preview area */}
                    <div className="bg-gray-700/30 rounded-xl p-4 flex items-center justify-center h-32">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-green-500/20 flex items-center justify-center">
                          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-400 text-sm">Ready to capture</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-red-100 rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Everything You Need to Capture</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Packed with powerful features to make screen recording effortless
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card bg-white rounded-2xl p-6 border border-gray-100"
              >
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center text-red-500 mb-4">
                  <feature.icon />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple as 1-2-3</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in seconds with our intuitive interface
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Choose Your Source', desc: 'Select a screen, window, or region to capture' },
              { step: '2', title: 'Configure Settings', desc: 'Set quality, audio, webcam overlay, and effects' },
              { step: '3', title: 'Record & Share', desc: 'Hit record and export to MP4, GIF, or screenshots' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-500 text-white rounded-2xl flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Profiles */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Profiles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              One-click presets for common recording scenarios
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {profiles.map((profile, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border border-gray-100 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{profile.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{profile.name}</h3>
                <p className="text-gray-500 text-sm">{profile.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Keyboard Shortcuts */}
      <section id="shortcuts" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Keyboard Shortcuts</h2>
              <p className="text-xl text-gray-600 mb-8">
                Control SnapRec from anywhere on your desktop with global keyboard shortcuts.
              </p>

              <div className="space-y-4">
                {shortcuts.map((shortcut, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
                    <span className="text-gray-700">{shortcut.action}</span>
                    <div className="flex items-center space-x-1">
                      {shortcut.keys.split(' + ').map((key, i) => (
                        <span key={i}>
                          {i > 0 && <span className="text-gray-400 mx-1">+</span>}
                          <span className="kbd">{key}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span className="text-red-500 font-mono text-sm">Recording 00:05:32</span>
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-gray-100 rounded-full w-full"></div>
                    <div className="h-2 bg-gray-100 rounded-full w-3/4"></div>
                    <div className="h-2 bg-gray-100 rounded-full w-1/2"></div>
                  </div>
                  <div className="mt-6 flex justify-center space-x-4">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded"></div>
                    </div>
                    <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                      <div className="w-4 h-1 bg-gray-400"></div>
                      <div className="w-4 h-1 bg-gray-400 ml-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-20 px-4 bg-gradient-to-br from-red-500 to-red-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Recording?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Download SnapRec now and start creating amazing screen recordings.
            Free, no ads, no watermarks.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="/SnapRec-1.0.0.exe"
              download
              className="bg-white text-red-500 hover:bg-red-50 px-8 py-4 rounded-xl font-semibold text-lg transition-all flex items-center space-x-3 shadow-lg hover:shadow-xl"
            >
              <Icons.Windows />
              <span>Download for Windows</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-red-100">
            <div className="flex items-center space-x-2">
              <Icons.Check />
              <span>Free Forever</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icons.Check />
              <span>No Watermarks</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icons.Check />
              <span>No Ads</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icons.Check />
              <span>Portable</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-xl font-bold text-white">SnapRec</span>
            </div>

            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors flex items-center space-x-2">
                <Icons.Github />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} SnapRec. All rights reserved. Made with ❤️ for creators.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
