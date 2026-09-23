export default function ImageSlot({
  id, width, height, src, fallback, srcSet, sizes, alt,
  priority = false, className = '',
}) {
  return (
    <div className={`image-slot ${className}`} data-asset={id}
      style={{ '--asset-ratio': `${width} / ${height}` }}>
      <picture>
        <source type="image/webp" srcSet={srcSet} sizes={sizes} />
        <img src={fallback || src} width={width} height={height}
          alt={alt} loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'} decoding="async" />
      </picture>
    </div>
  )
}
