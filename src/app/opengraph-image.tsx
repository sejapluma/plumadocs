import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'PlumaDocs - Documentos Psicológicos Profissionais'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#FDF8F9',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px',
          gap: '24px'
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px'
          }}
        >
          <div style={{ fontSize: '48px' }}>🧡</div>
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: '#000000',
            }}
          >
            PlumaDocs
          </h1>
        </div>
        <p
          style={{
            fontSize: '32px',
            color: '#C4A484',
            textAlign: 'center',
            maxWidth: '800px'
          }}
        >
          Documentos psicológicos profissionais em minutos
        </p>
        <p
          style={{
            fontSize: '24px',
            color: '#000000',
            opacity: 0.8,
            textAlign: 'center',
            maxWidth: '800px'
          }}
        >
          Modelos prontos e atualizados seguindo as normas do CFP
        </p>
      </div>
    ),
    {
      ...size,
    }
  )
} 