"use client";

import { useEffect, useRef } from "react";

export default function Portal() {
  const secRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sec = secRef.current;
    if (!sec) return;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) { sec.classList.add("pt-in"); return; }
    if ("IntersectionObserver" in window) {
      const io = new IntersectionObserver((es) => {
        es.forEach((e) => { if (e.isIntersecting) { sec.classList.add("pt-in"); io.disconnect(); } });
      }, { threshold: 0.3 });
      io.observe(sec);
      return () => io.disconnect();
    } else {
      sec.classList.add("pt-in");
    }
  }, []);

  return (
    <>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700;1,8..60,600&display=swap');

.portal-sec{
  --pt-font-display:'Source Serif 4', Georgia, 'Times New Roman', serif;
  --pt-font-body:'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
  --pt-bg0:#081310;
  --pt-bg1:#0C1A15;
  --pt-panel:#13261E;
  --pt-panel2:#1C3A2C;
  --pt-line:#27463A;
  --pt-teal:#15A38C;
  --pt-emer:#1F7A63;
  --pt-glow:#5FE0CB;
  --pt-sea:#62D6C0;
  --pt-text:#EAF2EE;
  --pt-mute:#8AA79B;
  --pt-wa-head:#075E54;
  --pt-wa-out:#DCF8C6;
  --pt-wa-bg:#0b1c1e;
  --pt-radius:18px;
  position:relative;
  font-family:var(--pt-font-body);
  color:var(--pt-text);
  background:
    radial-gradient(120% 90% at 88% -10%, rgba(95,224,203,.10) 0%, rgba(95,224,203,0) 45%),
    radial-gradient(110% 120% at 50% 120%, #0a1813 0%, var(--pt-bg0) 70%),
    var(--pt-bg1);
  padding:48px 24px;
  overflow:hidden;
  isolation:isolate;
}
.portal-sec *{box-sizing:border-box}
.portal-sec ::selection{background:rgba(95,224,203,.28)}
.portal-sec .pt-wrap{max-width:1180px;margin:0 auto}
.portal-sec .pt-hero{display:grid;grid-template-columns:1.06fr .94fr;gap:64px;align-items:center;}
.portal-sec .pt-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:12px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:var(--pt-sea);margin-bottom:22px;}
.portal-sec .pt-eyebrow .pt-doormark{width:18px;height:18px;flex:0 0 auto}
.portal-sec h2.pt-head{font-family:var(--pt-font-display);font-weight:700;font-size:clamp(34px, 4.4vw, 52px);line-height:1.04;letter-spacing:-.01em;color:#fff;margin:0 0 20px;max-width:15ch;}
.portal-sec h2.pt-head em{font-style:italic;font-weight:600;color:var(--pt-glow);}
.portal-sec .pt-lead{font-size:clamp(16px,1.25vw,18px);line-height:1.6;color:var(--pt-mute);max-width:48ch;margin:0 0 26px;}
.portal-sec .pt-lead b{color:var(--pt-text);font-weight:600}
.portal-sec .pt-points{list-style:none;margin:0 0 32px;padding:0;display:grid;gap:13px}
.portal-sec .pt-points li{position:relative;padding-left:30px;font-size:14.5px;line-height:1.5;color:var(--pt-mute);}
.portal-sec .pt-points li b{color:var(--pt-text);font-weight:600}
.portal-sec .pt-points li::before{content:"";position:absolute;left:0;top:2px;width:18px;height:18px;background:no-repeat center/contain url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%235FE0CB' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M7 21V11a5 5 0 0 1 10 0v10'/%3E%3Cpath d='M5 21h14'/%3E%3C/svg%3E");}
.portal-sec .pt-cta{display:flex;flex-wrap:wrap;gap:14px;align-items:center}
.portal-sec .pt-btn{font-family:inherit;font-size:14.5px;font-weight:600;cursor:pointer;border-radius:999px;padding:14px 26px;text-decoration:none;display:inline-flex;align-items:center;gap:9px;transition:transform .18s ease, box-shadow .18s ease, background .18s ease, border-color .18s ease;}
.portal-sec .pt-btn-primary{color:#04140f;border:0;background:linear-gradient(180deg, var(--pt-glow), var(--pt-teal));box-shadow:0 10px 26px -8px rgba(95,224,203,.55);}
.portal-sec .pt-btn-primary:hover{transform:translateY(-2px);box-shadow:0 16px 34px -8px rgba(95,224,203,.65)}
.portal-sec .pt-btn-ghost{color:var(--pt-text);background:transparent;border:1px solid var(--pt-line);}
.portal-sec .pt-btn-ghost:hover{border-color:var(--pt-glow);color:var(--pt-glow)}
.portal-sec .pt-btn:focus-visible{outline:2px solid var(--pt-glow);outline-offset:3px}
.portal-sec .pt-btn .pt-arrow{transition:transform .18s ease}
.portal-sec .pt-btn-ghost:hover .pt-arrow{transform:translateX(3px)}
.portal-sec .pt-stage{position:relative;display:flex;justify-content:center}
.portal-sec .pt-stage::before{content:"";position:absolute;z-index:0;top:-6%;left:50%;transform:translateX(-50%);width:230px;height:112%;background:radial-gradient(60% 50% at 50% 30%, rgba(95,224,203,.22), rgba(95,224,203,0) 70%);filter:blur(6px);pointer-events:none;}
.portal-sec .pt-phone{position:relative;z-index:1;width:312px;background:#0b141a;border-radius:38px;padding:10px;border:2px solid #1c2a24;box-shadow:0 30px 70px -20px rgba(0,0,0,.7);}
.portal-sec .pt-phone::before{content:"";position:absolute;top:18px;left:50%;transform:translateX(-50%);width:92px;height:18px;background:#050a08;border-radius:10px;z-index:5;}
.portal-sec .pt-screen{border-radius:30px;overflow:hidden;display:flex;flex-direction:column;background:var(--pt-wa-bg)}
.portal-sec .pt-wahead{background:var(--pt-wa-head);display:flex;align-items:center;gap:10px;padding:40px 13px 11px}
.portal-sec .pt-av{width:38px;height:38px;border-radius:50%;flex:0 0 auto}
.portal-sec .pt-wameta{flex:1;min-width:0}
.portal-sec .pt-waname{color:#fff;font-size:14px;font-weight:600;line-height:1.1}
.portal-sec .pt-wastatus{color:#bfe3da;font-size:11px;display:flex;align-items:center;gap:5px}
.portal-sec .pt-dot{width:6px;height:6px;border-radius:50%;background:#7BE0A4;display:inline-block}
.portal-sec .pt-waicons{display:flex;gap:15px;color:#eafff7;opacity:.9}
.portal-sec .pt-wabody{flex:1;padding:16px 12px;display:flex;flex-direction:column;gap:7px;min-height:300px;background-color:var(--pt-wa-bg);background-image:radial-gradient(rgba(95,224,203,.05) 1px, transparent 1px),radial-gradient(rgba(95,224,203,.05) 1px, transparent 1px);background-size:22px 22px;background-position:0 0,11px 11px;}
.portal-sec .pt-day{align-self:center;background:rgba(20,40,33,.9);color:#9fc5b8;font-size:10.5px;font-weight:600;letter-spacing:.4px;padding:4px 12px;border-radius:9px;margin-bottom:4px;}
.portal-sec .pt-msg{display:flex;max-width:100%;opacity:0;transform:translateY(8px)}
.portal-sec .pt-msg.in{justify-content:flex-start}
.portal-sec .pt-msg.out{justify-content:flex-end}
.portal-sec .pt-bubble{position:relative;max-width:82%;padding:8px 11px 6px;border-radius:9px;font-size:12.8px;line-height:1.36;color:#0c1a15;box-shadow:0 1px 1px rgba(0,0,0,.2);}
.portal-sec .pt-msg.in .pt-bubble{background:#fff;border-top-left-radius:1px}
.portal-sec .pt-msg.out .pt-bubble{background:var(--pt-wa-out);border-top-right-radius:1px}
.portal-sec .pt-msg.in .pt-bubble::after{content:"";position:absolute;top:0;left:-7px;width:8px;height:13px;background:#fff;clip-path:polygon(100% 0,0 0,100% 100%)}
.portal-sec .pt-msg.out .pt-bubble::after{content:"";position:absolute;top:0;right:-7px;width:8px;height:13px;background:var(--pt-wa-out);clip-path:polygon(0 0,100% 0,0 100%)}
.portal-sec .pt-time{float:right;font-size:9.5px;color:#5a7066;margin:6px 0 -2px 10px;position:relative;top:3px}
.portal-sec .pt-tick{color:#53bdeb;font-weight:700;letter-spacing:-1px;margin-left:2px}
.portal-sec .pt-typing .pt-bubble{display:inline-flex;gap:4px;padding:11px 13px}
.portal-sec .pt-typing span{width:6px;height:6px;border-radius:50%;background:#9aa8a2;animation:pt-blink 1.2s infinite}
.portal-sec .pt-typing span:nth-child(2){animation-delay:.2s}
.portal-sec .pt-typing span:nth-child(3){animation-delay:.4s}
.portal-sec .pt-wainput{display:flex;align-items:center;gap:8px;padding:9px 11px}
.portal-sec .pt-field{flex:1;background:#10211b;border:1px solid #1c3a2c;border-radius:20px;height:38px;display:flex;align-items:center;padding:0 14px;color:#5f7a70;font-size:12.5px}
.portal-sec .pt-send{width:38px;height:38px;border-radius:50%;background:var(--pt-wa-head);display:flex;align-items:center;justify-content:center;flex:0 0 38px}
.portal-sec .pt-personas{margin-top:78px;border-top:1px solid var(--pt-line);padding-top:34px;display:flex;flex-wrap:wrap;align-items:center;gap:14px 22px;}
.portal-sec .pt-personas .pt-strip-label{font-family:var(--pt-font-display);font-style:italic;font-weight:600;font-size:18px;color:var(--pt-glow);margin-right:8px;white-space:nowrap;}
.portal-sec .pt-pills{display:flex;flex-wrap:wrap;gap:9px}
.portal-sec .pt-pill{font-size:13px;color:var(--pt-mute);border:1px solid var(--pt-line);border-radius:999px;padding:7px 15px;background:rgba(28,58,44,.35);transition:.2s;}
.portal-sec .pt-pill:hover{color:var(--pt-glow);border-color:var(--pt-emer)}
.portal-sec .pt-steps{margin-top:44px;display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.portal-sec .pt-step{background:var(--pt-panel);border:1px solid var(--pt-line);border-radius:var(--pt-radius);padding:22px 24px;position:relative;overflow:hidden;}
.portal-sec .pt-step::after{content:"";position:absolute;inset:0 auto 0 0;width:3px;background:linear-gradient(var(--pt-glow),var(--pt-teal));opacity:.65}
.portal-sec .pt-stepno{font-family:var(--pt-font-display);font-weight:700;font-size:14px;color:var(--pt-sea);letter-spacing:1px;margin-bottom:10px}
.portal-sec .pt-stept{font-family:var(--pt-font-display);font-weight:700;font-size:19px;color:#fff;margin-bottom:6px}
.portal-sec .pt-stepd{font-size:13.5px;line-height:1.5;color:var(--pt-mute)}
.portal-sec .pt-foot{margin-top:30px;font-size:12px;color:var(--pt-mute);opacity:.8;display:flex;gap:8px;align-items:center;flex-wrap:wrap;}
@keyframes pt-rise{to{opacity:1;transform:translateY(0)}}
@keyframes pt-blink{0%,60%,100%{opacity:.3;transform:translateY(0)}30%{opacity:1;transform:translateY(-2px)}}
.portal-sec.pt-in .pt-msg{animation:pt-rise .5s ease forwards}
.portal-sec.pt-in .pt-msg:nth-child(2){animation-delay:.15s}
.portal-sec.pt-in .pt-msg:nth-child(3){animation-delay:.7s}
.portal-sec.pt-in .pt-msg:nth-child(4){animation-delay:1.1s}
.portal-sec.pt-in .pt-msg:nth-child(5){animation-delay:1.7s}
.portal-sec.pt-in .pt-msg:nth-child(6){animation-delay:2.2s}
@media (min-width:921px){
  .portal-sec{padding:96px 24px}
}
@media (min-width:1024px){
  .portal-sec{padding:144px 24px}
}
@media (max-width:920px){
  .portal-sec{padding:48px 20px}
  .portal-sec .pt-hero{grid-template-columns:1fr;gap:48px}
  .portal-sec .pt-stage{order:-1}
  .portal-sec .pt-steps{grid-template-columns:1fr}
  .portal-sec h2.pt-head{max-width:none}
}
@media (max-width:420px){
  .portal-sec .pt-phone{width:100%;max-width:330px}
}
@media (prefers-reduced-motion:reduce){
  .portal-sec .pt-msg{opacity:1!important;transform:none!important;animation:none!important}
  .portal-sec .pt-typing{display:none}
  .portal-sec .pt-btn{transition:none}
}
      `}</style>

      <section id="portal" className="portal-sec" aria-labelledby="portal-heading" ref={secRef}>
        <div className="pt-wrap">

          <div className="pt-hero">
            <div className="pt-copy">
              <span className="pt-eyebrow">
                <svg className="pt-doormark" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 21V11a7 7 0 0 1 14 0v10"/><path d="M3.5 21h17"/><path d="M12 21v-6"/>
                </svg>
                Portal — by Ryyva
              </span>

              <h2 className="pt-head" id="portal-heading">Institutional service, <em>delivered on WhatsApp.</em></h2>

              <p className="pt-lead">Portal is <b>one agentic engine</b> that becomes whatever your institution needs it to be — a claims guide, an enrolment desk, a compliance check, a concierge — and meets your people in the app they already open every day. No app to download. No queue to join. Just a message.</p>

              <ul className="pt-points">
                <li><b>One engine, infinite personas.</b> Stand up new services without standing up new systems.</li>
                <li><b>Where your people already are.</b> WhatsApp, in their own language, on any phone — nothing to install.</li>
                <li><b>Always on, always current.</b> Portal answers, nudges and updates continuously, not once a year.</li>
              </ul>

              <div className="pt-cta">
                <a className="pt-btn pt-btn-primary" href="#contact">
                  Book a briefing
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
                </a>
                <a className="pt-btn pt-btn-ghost" href="#how-it-works">
                  See how it works
                  <svg className="pt-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>
                </a>
              </div>
            </div>

            <div className="pt-stage">
              <div className="pt-phone" role="img" aria-label="A WhatsApp conversation with Portal: a member renews their membership in chat and receives a receipt.">
                <div className="pt-screen">
                  <div className="pt-wahead">
                    <svg className="pt-av" viewBox="0 0 48 48" aria-hidden="true">
                      <defs><linearGradient id="ptAv" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#1ec9ad"/><stop offset="1" stopColor="#0c7a64"/>
                      </linearGradient></defs>
                      <rect width="48" height="48" rx="13" fill="url(#ptAv)"/>
                      <path d="M14 37V21a10 10 0 0 1 20 0v16" fill="none" stroke="#eafff7" strokeWidth="2.4" strokeLinecap="round"/>
                      <path d="M20 37V23a4 4 0 0 1 8 0v14" fill="none" stroke="#bff3e6" strokeWidth="2.1" strokeLinecap="round"/>
                      <path d="M11 37h26" stroke="#eafff7" strokeWidth="2.4" strokeLinecap="round"/>
                    </svg>
                    <div className="pt-wameta">
                      <div className="pt-waname">Portal</div>
                      <div className="pt-wastatus"><span className="pt-dot"></span> online</div>
                    </div>
                    <div className="pt-waicons" aria-hidden="true">
                      <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11l-4 4z"/></svg>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1l-2.2 2.2z"/></svg>
                    </div>
                  </div>

                  <div className="pt-wabody">
                    <div className="pt-day">TODAY</div>
                    <div className="pt-msg out"><div className="pt-bubble">Hi, I need to renew my membership but I keep missing office hours<span className="pt-time">09:14<span className="pt-tick">✓✓</span></span></div></div>
                    <div className="pt-msg in"><div className="pt-bubble">No problem — I can do it right here. Can you confirm your ID number?<span className="pt-time">09:14</span></div></div>
                    <div className="pt-msg out"><div className="pt-bubble">8503125…<span className="pt-time">09:15<span className="pt-tick">✓✓</span></span></div></div>
                    <div className="pt-msg in"><div className="pt-bubble">Found you ✅ Renewed through March 2027. I&apos;ve sent your receipt — anything else I can help with?<span className="pt-time">09:15</span></div></div>
                  </div>

                  <div className="pt-wainput">
                    <div className="pt-field">Message</div>
                    <span className="pt-send" aria-hidden="true">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff"><path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.9V22h2v-3.1A7 7 0 0 0 19 12h-2z"/></svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-personas">
            <span className="pt-strip-label">One engine. Infinite personas.</span>
            <div className="pt-pills">
              <span className="pt-pill">Claims</span>
              <span className="pt-pill">Enrolment</span>
              <span className="pt-pill">Renewals</span>
              <span className="pt-pill">Bookings</span>
              <span className="pt-pill">Compliance</span>
              <span className="pt-pill">Support</span>
              <span className="pt-pill">Onboarding</span>
              <span className="pt-pill">Concierge</span>
            </div>
          </div>

          <div className="pt-steps" id="how-it-works">
            <div className="pt-step">
              <div className="pt-stepno">01 · Connect</div>
              <div className="pt-stept">Plug Portal in</div>
              <div className="pt-stepd">Connect your knowledge, systems and rules. Portal learns what your institution does and how it does it.</div>
            </div>
            <div className="pt-step">
              <div className="pt-stepno">02 · Compose</div>
              <div className="pt-stept">Choose the personas</div>
              <div className="pt-stepd">Pick the jobs each persona handles — from claims to compliance — and the tone it speaks in.</div>
            </div>
            <div className="pt-step">
              <div className="pt-stepno">03 · Go live</div>
              <div className="pt-stept">Answer on WhatsApp</div>
              <div className="pt-stepd">Portal goes live in the channel your people already use — same day, in their language, at scale.</div>
            </div>
          </div>

          <div className="pt-foot">© 2026 Ryyva · Portal™ is a trademark of Ryyva · Built in Cape Town</div>

        </div>
      </section>
    </>
  );
}
