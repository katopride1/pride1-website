import Link from 'next/link'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'md' | 'lg'

type BaseProps = {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
}

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined
  }

type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string
  }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<Variant, string> = {
  primary: [
    'bg-[#1865C8] text-[#EEF4FF]',
    'hover:bg-[#0D4A9E]',
  ].join(' '),
  secondary: [
    'bg-transparent text-[#2B7FE0]',
    'border border-[1.5px] border-[#1865C8]',
    'hover:bg-[#1865C820]',
  ].join(' '),
  ghost: [
    'bg-transparent text-[#7AABCF]',
    'hover:text-[#EEF4FF]',
  ].join(' '),
}

const sizeStyles: Record<Size, string> = {
  md: 'px-5 py-[10px] text-[14px]',
  lg: 'px-7 py-[13px] text-[15px]',
}

const base =
  'inline-flex items-center justify-center rounded-[4px] font-medium transition-colors duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1865C8]'

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  href,
  ...rest
}: ButtonProps) {
  const classes = [base, variantStyles[variant], sizeStyles[size], className]
    .filter(Boolean)
    .join(' ')

  if (href !== undefined) {
    return (
      <Link href={href} className={classes} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}

/*
使用例:

// primary ボタン（デフォルト）
<Button>お問い合わせ</Button>

// secondary ボタン・lg サイズ
<Button variant="secondary" size="lg">詳しく見る</Button>

// ghost ボタン
<Button variant="ghost">スキップ</Button>

// Link として使用（href を渡す）
<Button href="/contact">お問い合わせページへ</Button>
<Button href="/products" variant="secondary" size="lg">製品一覧を見る</Button>

// 追加クラスで幅を広げる
<Button className="w-full" size="lg">送信する</Button>

// disabled 状態（button のみ）
<Button disabled>送信中...</Button>
*/
