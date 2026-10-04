import { useState } from 'react'
import { hasText } from '../utils/portfolio'

export function Certificate({ file, image, position }) {
  const [failedImage, setFailedImage] = useState(null)
  const showImage = hasText(image) && failedImage !== image
  if (!hasText(file) && !showImage) return null

  return (
    <div className="certificate">
      {showImage && (
        <a href={hasText(file) ? file : image} target="_blank" rel="noreferrer">
          <img
            src={image}
            alt={`Certificado laboral${hasText(position) ? `: ${position}` : ''}`}
            loading="lazy"
            onError={() => setFailedImage(image)}
          />
        </a>
      )}
      {hasText(file) && (
        <a className="text-link" href={file} target="_blank" rel="noreferrer">
          Ver certificado laboral
        </a>
      )}
    </div>
  )
}
