import React, { useState } from 'react';
import { motion } from 'motion/react';

export const Pricing: React.FC = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <section className="c3-pricing-section border-t border-white/10 relative z-10" id="pricing">
      {/* SVG noise filter for pricing section watermark */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <filter id="c3-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.5" numOctaves="2" stitchTiles="stitch" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.075" />
          </feComponentTransfer>
          <feComposite in2="SourceGraphic" operator="in" result="noise" />
          <feBlend in="SourceGraphic" in2="noise" mode="overlay" />
        </filter>
      </svg>

      {/* Watermark Background */}
      <div className="c3-watermark-container select-none pointer-events-none">
        <div className="c3-watermark-main">
          <span className="c3-watermark-line-1">Your email.</span>
          <span className="c3-watermark-line-2">Revitalized</span>
        </div>
      </div>

      {/* Pricing Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="c3-grid"
      >
        {/* Free Plan */}
        <div className="c3-card">
          <div className="c3-tier-small">Free</div>
          <div className="c3-tier-large">Free</div>
          <div className="c3-desc">
            For creators taking their first steps with Forma.
          </div>
          <ul className="c3-list">
            <li>
              <span className="c3-check">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>Up to 3 projects in the cloud</span>
            </li>
            <li>
              <span className="c3-check">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>Image export up to 1080p</span>
            </li>
            <li>
              <span className="c3-check">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>Basic editing tools</span>
            </li>
            <li>
              <span className="c3-check">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>Free templates and icons</span>
            </li>
            <li>
              <span className="c3-check">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>Access via web and mobile app</span>
            </li>
          </ul>
          <button className="c3-btn">Choose Plan</button>
        </div>

        {/* Standard Plan */}
        <div className="c3-card">
          <div className="c3-tier-small">Standard</div>
          <div className="c3-tier-large">{yearly ? '$99,99/y' : '$9,99/m'}</div>
          <div className="c3-desc">
            For freelancers and small teams who need more freedom and flexibility.
          </div>
          <ul className="c3-list">
            <li>
              <span className="c3-check">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>Up to 50 projects in the cloud</span>
            </li>
            <li>
              <span className="c3-check">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>Export up to 4K</span>
            </li>
            <li>
              <span className="c3-check">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>Advanced editing toolkit</span>
            </li>
            <li>
              <span className="c3-check">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>Team collaboration (up to 5 members)</span>
            </li>
            <li>
              <span className="c3-check">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>Access to premium template library</span>
            </li>
          </ul>
          <button className="c3-btn">Choose Plan</button>
        </div>

        {/* Pro Plan */}
        <div className="c3-card c3-card-pro">
          <div className="c3-tier-small">Pro</div>
          <div className="c3-tier-large">{yearly ? '$199,99/y' : '$19,99/m'}</div>
          <div className="c3-desc">
            For studios, agencies, and professional creators working with brands.
          </div>
          <ul className="c3-list">
            <li>
              <span className="c3-check">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>Unlimited projects</span>
            </li>
            <li>
              <span className="c3-check">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>Export up to 8K + animations</span>
            </li>
            <li>
              <span className="c3-check">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>AI-powered content generation tools</span>
            </li>
            <li>
              <span className="c3-check">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>Unlimited team members</span>
            </li>
            <li>
              <span className="c3-check">
                <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>Brand customization</span>
            </li>
          </ul>
          <button className="c3-btn">Choose Plan</button>
        </div>
      </motion.div>

      {/* Yearly Toggle */}
      <div className="c3-toggle-wrap">
        <span className="text-xs text-white/70 font-medium">Yearly</span>
        <button
          onClick={() => setYearly(!yearly)}
          className={`c3-toggle ${yearly ? 'active' : ''}`}
          aria-label="Toggle yearly pricing"
        >
          <div className="c3-toggle-knob" />
        </button>
      </div>
    </section>
  );
};
