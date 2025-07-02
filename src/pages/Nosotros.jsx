import React from 'react';

function Nosotros() {
  return (
    <>
      <div style={{ padding: '20px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>Nosotros</h1>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Fundadora */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'blue',
              }}
            ></div>
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0' }}>Fundadora</h2>
              <p style={{ margin: '0', color: '#555' }}>
                Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor
              </p>
            </div>
          </div>
          {/* Mentor */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: 'blue',
              }}
            ></div>
            <div>
              <h2 style={{ fontSize: '18px', fontWeight: 'bold', margin: '0' }}>Mentor</h2>
              <p style={{ margin: '0', color: '#555' }}>
                Lorem Ipsum dolor Lorem Ipsum dolor Lorem Ipsum dolor
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nosotros;