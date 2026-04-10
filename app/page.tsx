export default function Home() {
  const bookingLink = process.env.GOOGLE_CALENDAR_BOOKING_LINK || '#book'
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative text-white py-24 px-6 text-center" style={{background: 'linear-gradient(135deg, #0066cc 0%, #004a99 60%, #002a6e 100%)'}}>
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3 opacity-80">Birmingham, AL</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Birmingham Emergency Plumbing</h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">Birmingham's trusted 24/7 emergency plumbing service — fast, reliable, always ready</p>
          <a href="#widget" className="inline-block px-8 py-4 rounded-full font-bold text-white text-lg transition-all hover:scale-105" style={{backgroundColor: 'var(--accent)'}}>
            Try AI Receptionist
          </a>
        </div>
      </section>

      {/* Widget */}
      <section id="widget" className="py-16 px-6 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">AI Receptionist — Live Demo</h2>
          <p className="text-gray-400">Click Start Conversation to speak with the AI receptionist for Birmingham Emergency Plumbing</p>
        </div>
        <div className="max-w-xl mx-auto">
          <iframe src="/widget.html" title="AI Voice Receptionist" width="100%" height="600" style={{border: 'none', borderRadius: '12px'}} />
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div key="24/7 Emergency Plumbing" className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-10 h-10 rounded-full mb-3 flex items-center justify-center" style={{backgroundColor: 'var(--primary)'}}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">24/7 Emergency Plumbing</h3>
            </div>
            <div key="Drain Cleaning" className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-10 h-10 rounded-full mb-3 flex items-center justify-center" style={{backgroundColor: 'var(--primary)'}}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Drain Cleaning</h3>
            </div>
            <div key="Water Heater Services" className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-10 h-10 rounded-full mb-3 flex items-center justify-center" style={{backgroundColor: 'var(--primary)'}}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Water Heater Services</h3>
            </div>
            <div key="Leak Detection" className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-10 h-10 rounded-full mb-3 flex items-center justify-center" style={{backgroundColor: 'var(--primary)'}}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Leak Detection</h3>
            </div>
            <div key="Sewer Line Services" className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-10 h-10 rounded-full mb-3 flex items-center justify-center" style={{backgroundColor: 'var(--primary)'}}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Sewer Line Services</h3>
            </div>
            <div key="Burst Pipe Repair" className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-10 h-10 rounded-full mb-3 flex items-center justify-center" style={{backgroundColor: 'var(--primary)'}}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Burst Pipe Repair</h3>
            </div>
            <div key="Gas Line Services" className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <div className="w-10 h-10 rounded-full mb-3 flex items-center justify-center" style={{backgroundColor: 'var(--primary)'}}>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-800">Gas Line Services</h3>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Why an AI Receptionist?</h2>
          <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">Modern customers expect instant responses. Never miss an emergency call again.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: 'var(--primary)'}}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">24/7 Availability</h3>
              <p className="text-gray-500 text-sm">Your AI receptionist answers at 3am just as professionally as 3pm.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: 'var(--primary)'}}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Instant Booking</h3>
              <p className="text-gray-500 text-sm">Collects job details, customer info, and preferred time automatically.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center" style={{backgroundColor: 'var(--primary)'}}>
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 9V8a2 2 0 012-2z" /></svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Never Miss a Call</h3>
              <p className="text-gray-500 text-sm">Every inbound call answered immediately — no voicemail, no lost business.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="book" className="py-20 px-6 text-white text-center" style={{background: 'var(--primary)'}}>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Stop Missing Calls?</h2>
          <p className="text-lg opacity-90 mb-8">Book a 15-minute demo call and see how an AI receptionist transforms your Birmingham, AL plumbing business.</p>
          <a href={bookingLink} className="inline-block px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105" style={{backgroundColor: 'var(--accent)', color: 'white'}}>
            Book a Demo Call
          </a>
          <p className="mt-6 opacity-70 text-sm">Questions? Call us: (659) 233-6566</p>
        </div>
      </section>
    </main>
  )
}
