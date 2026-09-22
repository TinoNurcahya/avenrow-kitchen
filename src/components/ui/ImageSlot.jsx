export default function ImageSlot({
  id, width, height, src, srcSet, sizes, alt,
  priority = false, className = '',
}) {
  return (
    <div className={`image-slot ${className}`} data-asset={id}
      style={{ '--asset-ratio': `${width} / ${height}` }}>
      <picture>
        <img src={src} srcSet={srcSet} sizes={sizes} width={width} height={height}
          alt={alt} loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'} decoding="async" />
      </picture>
    </div>
  )
}
