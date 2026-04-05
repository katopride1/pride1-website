type SectionHeaderProps = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionHeaderProps) {
  const isCenter = align === 'center'

  return (
    <div className={isCenter ? 'text-center' : 'text-left'}>
      {eyebrow && (
        <p
          className="text-[11px] font-medium text-[#2B7FE0] uppercase tracking-[0.1em] mb-3"
        >
          {eyebrow}
        </p>
      )}
      <h2
        className="text-[28px] md:text-[36px] font-medium text-[#EEF4FF] leading-[1.3] mb-4"
      >
        {title}
      </h2>
      {description && (
        <p
          className={[
            'text-[15px] text-[#7AABCF] leading-[1.7] max-w-[560px]',
            isCenter ? 'mx-auto' : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {description}
        </p>
      )}
    </div>
  )
}
