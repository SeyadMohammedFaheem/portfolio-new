import React, { useState, useRef, useEffect } from 'react';

export default function LicenseKeyMorph() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isActivated, setIsActivated] = useState(false);
  const [licenseKey, setLicenseKey] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    if (isExpanded && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isExpanded]);

  const handleCapsuleClick = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      setLicenseKey('');
    }
  };

  const handleActivate = (e) => {
    e.stopPropagation();
    if (!isActivated) {
      setIsActivated(true);
      if (!licenseKey) {
        setLicenseKey('PRO-8492-NX');
      }
    } else {
      setIsActivated(false);
    }
  };

  const handleCancel = (e) => {
    e.stopPropagation();
    setIsExpanded(false);
    setIsActivated(false);
    setLicenseKey('');
  };

  return (
    <div style={styles.container}>
      {/* The Morphing Capsule */}
      <div
        style={{
          ...styles.morphCapsule,
          width: isExpanded ? '364px' : '254px',
          cursor: isExpanded ? 'default' : 'pointer'
        }}
        onClick={handleCapsuleClick}
      >
        {/* Collapsed Label: "I have a License Key" */}
        <span
          style={{
            ...styles.collapsedLabel,
            opacity: isExpanded ? 0 : 1,
            transform: isExpanded ? 'scale(0.85)' : 'scale(1)',
            pointerEvents: isExpanded ? 'none' : 'auto'
          }}
        >
          I have a License Key
        </span>

        {/* Expanded Form */}
        <div
          style={{
            ...styles.expandedForm,
            opacity: isExpanded ? 1 : 0,
            pointerEvents: isExpanded ? 'auto' : 'none'
          }}
        >
          <div style={styles.inputWrapper}>
            <input
              ref={inputRef}
              type="text"
              value={licenseKey}
              onChange={(e) => setLicenseKey(e.target.value)}
              placeholder="License Key"
              autoComplete="off"
              spellCheck="false"
              style={styles.keyInput}
            />
          </div>

          <button
            onClick={handleActivate}
            style={{
              ...styles.activateBtn,
              background: isActivated ? '#00b86b' : '#000000',
              boxShadow: isActivated
                ? '0 6px 18px rgba(0, 184, 107, 0.35)'
                : '0 2px 6px rgba(0, 0, 0, 0.12)'
            }}
          >
            {isActivated ? 'Activated' : 'Activate'}
          </button>
        </div>
      </div>

      {/* Cancel button */}
      <button
        onClick={handleCancel}
        style={{
          ...styles.cancelBtn,
          opacity: isExpanded ? 1 : 0,
          transform: isExpanded ? 'translateY(0)' : 'translateY(-4px)',
          pointerEvents: isExpanded ? 'auto' : 'none'
        }}
      >
        Cancel
      </button>
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
    userSelect: 'none'
  },
  morphCapsule: {
    position: 'relative',
    height: '56px',
    borderRadius: '999px',
    background: '#f1f2f4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    transition: 'width 480ms cubic-bezier(0.16, 1.38, 0.3, 1), background-color 0.2s ease, box-shadow 0.3s ease',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.02)'
  },
  collapsedLabel: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '17px',
    fontWeight: '600',
    color: '#1a1a1c',
    letterSpacing: '-0.015em',
    whiteSpace: 'nowrap',
    textAlign: 'center',
    transition: 'opacity 0.2s ease, transform 480ms cubic-bezier(0.16, 1.38, 0.3, 1)'
  },
  expandedForm: {
    position: 'absolute',
    inset: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '6px 7px 6px 20px',
    width: '100%',
    height: '100%',
    transition: 'opacity 0.25s ease 0.08s, transform 480ms cubic-bezier(0.16, 1.38, 0.3, 1) 0.08s'
  },
  inputWrapper: {
    flex: 1,
    height: '100%',
    display: 'flex',
    alignItems: 'center'
  },
  keyInput: {
    width: '100%',
    height: '100%',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '16px',
    fontWeight: '600',
    color: '#1a1a1c',
    letterSpacing: '-0.01em'
  },
  activateBtn: {
    height: '44px',
    padding: '0 24px',
    borderRadius: '999px',
    color: '#ffffff',
    border: 'none',
    outline: 'none',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    letterSpacing: '-0.01em',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.25s ease',
    whiteSpace: 'nowrap'
  },
  cancelBtn: {
    marginTop: '16px',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    fontSize: '15px',
    fontWeight: '600',
    color: '#8c8d94',
    cursor: 'pointer',
    transition: 'opacity 0.2s ease, transform 0.2s ease, color 0.15s ease'
  }
};
