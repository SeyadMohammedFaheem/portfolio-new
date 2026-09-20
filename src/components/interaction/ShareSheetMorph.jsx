import React, { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(CustomEase);
  try {
    CustomEase.create('morphSpring', 'M0,0 C0.16,1.38 0.3,1 1,1');
    CustomEase.create('smoothGlide', 'M0,0 C0.4,0 0.2,1 1,1');
  } catch (e) {}
}

const CONTACTS = [
  { id: 'ashish', name: 'Ashish Kashyap', avatar: '/avatar_ashish.jpg' },
  { id: 'nitish', name: 'Nitish Khagwal', avatar: '/avatar_nitish.jpg' },
  { id: 'rahul', name: 'Rahul Bhadoriya', avatar: '/avatar_rahul.jpg' },
  { id: 'sakshi', name: 'Sakshi', avatar: '/avatar_sakshi.jpg' },
  { id: 'vikas', name: 'Vikas Raj', avatar: '/avatar_vikas.jpg' }
];

export default function ShareSheetMorph() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);
  const [statusState, setStatusState] = useState('idle'); // 'idle' | 'expanded' | 'sending' | 'sent'

  const cardRef = useRef(null);
  const hoverPillRef = useRef(null);
  const contactRefs = useRef({});
  const progressRingRef = useRef(null);
  const checkIconRef = useRef(null);

  // Animate card expansion / collapse morphing
  useLayoutEffect(() => {
    const cardEl = cardRef.current;
    if (!cardEl) return;

    if (statusState === 'expanded') {
      gsap.to(cardEl, {
        width: 280,
        height: 318,
        borderRadius: 28,
        background: '#f1f1f5',
        boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0,0,0,0.04)',
        border: '1px solid rgba(0, 0, 0, 0.06)',
        duration: 0.45,
        ease: 'morphSpring',
        overwrite: 'auto'
      });
    } else {
      gsap.to(cardEl, {
        width: 56,
        height: 56,
        borderRadius: 18,
        background: 'linear-gradient(180deg, #2d2d38 0%, #15151c 100%)',
        boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.25), 0 12px 28px -4px rgba(0, 0, 0, 0.45)',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        duration: 0.42,
        ease: 'morphSpring',
        overwrite: 'auto'
      });
    }
  }, [statusState]);

  // Smooth sliding hover pill background across contacts
  useLayoutEffect(() => {
    if (statusState !== 'expanded' || hoveredIdx === null) return;
    const activeRow = contactRefs.current[hoveredIdx];
    const hoverPill = hoverPillRef.current;
    if (!activeRow || !hoverPill) return;

    const targetTop = activeRow.offsetTop;
    gsap.to(hoverPill, {
      top: targetTop,
      opacity: 1,
      duration: 0.25,
      ease: 'smoothGlide',
      overwrite: 'auto'
    });
  }, [hoveredIdx, statusState]);

  // Trigger Send Progress animation & checkmark completion
  const handleSelectContact = (contact) => {
    setSelectedContact(contact);
    setStatusState('sending');
    setHoveredIdx(null);

    // Timeline for progress ring fill -> Checkmark -> Reset to idle
    const tl = gsap.timeline();

    // 1. Progress Ring Loading (0 to 100%)
    tl.to({}, {
      duration: 1.1,
      onStart: () => {
        if (progressRingRef.current) {
          gsap.fromTo(progressRingRef.current, 
            { strokeDashoffset: 110 }, 
            { strokeDashoffset: 0, duration: 1.1, ease: 'power2.inOut' }
          );
        }
      }
    })
    // 2. Sent Success Checkmark State
    .add(() => {
      setStatusState('sent');
      if (checkIconRef.current) {
        gsap.fromTo(checkIconRef.current,
          { scale: 0.3, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.35, ease: 'back.out(2.2)' }
        );
      }
    })
    // 3. Reset back to Idle Share Icon
    .to({}, { duration: 1.3 })
    .add(() => {
      setStatusState('idle');
      setSelectedContact(null);
    });
  };

  const handleToggleOpen = () => {
    if (statusState === 'idle') {
      setStatusState('expanded');
    } else if (statusState === 'expanded') {
      setStatusState('idle');
      setHoveredIdx(null);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.centerWrapper}>
        {/* Main Morphing Card / Squircle Button */}
        <div
          ref={cardRef}
          style={styles.card}
          onClick={statusState === 'idle' ? handleToggleOpen : undefined}
        >
          {/* STATE 1: IDLE SHARE ICON */}
          {statusState === 'idle' && (
            <button
              style={styles.shareBtn}
              onClick={handleToggleOpen}
              title="Open Share Sheet"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                <polyline points="16 6 12 2 8 6"></polyline>
                <line x1="12" y1="2" x2="12" y2="15"></line>
              </svg>
            </button>
          )}

          {/* STATE 2: EXPANDED SHARE SHEET CONTACT LIST */}
          {statusState === 'expanded' && (
            <div style={styles.contactList}>
              {/* Sliding White Background Highlight Pill for Hovered Row */}
              <div
                ref={hoverPillRef}
                style={{
                  ...styles.hoverPill,
                  opacity: hoveredIdx !== null ? 1 : 0
                }}
              />

              {CONTACTS.map((contact, idx) => {
                const isHovered = hoveredIdx === idx;

                return (
                  <div
                    key={contact.id}
                    ref={(el) => (contactRefs.current[idx] = el)}
                    style={styles.contactRow}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    onClick={() => handleSelectContact(contact)}
                  >
                    <div style={styles.avatarWrapper}>
                      <img
                        src={contact.avatar}
                        alt={contact.name}
                        style={{
                          ...styles.avatarImg,
                          borderRadius: isHovered ? '14px' : '50%',
                          transform: isHovered ? 'scale(1.05)' : 'scale(1)'
                        }}
                      />
                    </div>
                    <span
                      style={{
                        ...styles.contactName,
                        fontWeight: isHovered ? '700' : '600',
                        color: '#1e293b'
                      }}
                    >
                      {contact.name}
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {/* STATE 3: SENDING PROGRESS LOADER WITH SELECTED AVATAR */}
          {statusState === 'sending' && selectedContact && (
            <div style={styles.sendingContainer}>
              {/* Outer Circular Progress Ring */}
              <svg width="48" height="48" viewBox="0 0 48 48" style={styles.progressSvg}>
                <circle
                  cx="24"
                  cy="24"
                  r="18"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.15)"
                  strokeWidth="3"
                />
                <circle
                  ref={progressRingRef}
                  cx="24"
                  cy="24"
                  r="18"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="113"
                  strokeDashoffset="113"
                  style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                />
              </svg>

              {/* Center Contact Avatar */}
              <img
                src={selectedContact.avatar}
                alt={selectedContact.name}
                style={styles.sendingAvatar}
              />
            </div>
          )}

          {/* STATE 4: SENT SUCCESS CHECKMARK BADGE */}
          {statusState === 'sent' && (
            <div style={styles.sentContainer} ref={checkIconRef}>
              <div style={styles.checkBadge}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 'auto',
    background: '#ffffff',
    fontFamily: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif",
    userSelect: 'none',
    padding: '12px'
  },
  centerWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  card: {
    position: 'relative',
    width: '56px',
    height: '56px',
    borderRadius: '18px',
    background: 'linear-gradient(180deg, #2d2d38 0%, #15151c 100%)',
    boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.25), 0 12px 28px -4px rgba(0, 0, 0, 0.45)',
    border: '1px solid rgba(255, 255, 255, 0.12)',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    boxSizing: 'border-box'
  },
  shareBtn: {
    width: '100%',
    height: '100%',
    background: 'transparent',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    outline: 'none',
    padding: 0,
    margin: 0
  },
  contactList: {
    position: 'relative',
    width: '100%',
    height: '100%',
    padding: '12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    boxSizing: 'border-box'
  },
  hoverPill: {
    position: 'absolute',
    left: '12px',
    width: 'calc(100% - 24px)',
    height: '52px',
    borderRadius: '16px',
    background: '#ffffff',
    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.03)',
    pointerEvents: 'none',
    zIndex: 1,
    transition: 'opacity 0.2s ease'
  },
  contactRow: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    padding: '6px 10px',
    height: '52px',
    borderRadius: '16px',
    cursor: 'pointer',
    boxSizing: 'border-box'
  },
  avatarWrapper: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarImg: {
    width: '40px',
    height: '40px',
    objectFit: 'cover',
    borderRadius: '50%',
    transition: 'all 0.25s cubic-bezier(0.16, 1.38, 0.3, 1)'
  },
  contactName: {
    fontSize: '15px',
    letterSpacing: '-0.01em',
    lineHeight: 1
  },
  sendingContainer: {
    position: 'relative',
    width: '56px',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  progressSvg: {
    position: 'absolute',
    top: '4px',
    left: '4px',
    zIndex: 2
  },
  sendingAvatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    objectFit: 'cover',
    zIndex: 1
  },
  sentContainer: {
    width: '56px',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkBadge: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    background: '#10b981',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)'
  }
};
