const stats = [
  { value: '1987',  label: '年創業' },
  { value: '38+',   label: '年の転倒データ' },
  { value: '全日本', label: 'ロードレース選手権 唯一供給' },
  { value: 'MFJ',   label: 'スタンダード公認取得' },
] as const

export default function TrustBar() {
  return (
    <div className="border-t border-[#0D2744] pt-7">
      {/* モバイル: 2×2 grid / md以上: 4列 flex */}
      <div className="grid grid-cols-2 md:grid md:grid-cols-4">
        {stats.map((stat, i) => {
          // モバイル: 左列（偶数インデックス）にborder-right、右列にはなし
          // md以上: 最初以外に border-left
          const borderClass = [
            // md以上: 2列目〜にborder-left
            i !== 0 ? 'md:border-l md:border-[#0D2744]' : '',
            // モバイル: 左列（i=0,2）にborder-right、右列（i=1,3）にはなし
            i % 2 === 0 ? 'border-r border-[#0D2744] md:border-r-0' : '',
            // モバイル: 下の行（i=2,3）にborder-top
            i >= 2 ? 'border-t border-[#0D2744] md:border-t-0' : '',
          ]
            .filter(Boolean)
            .join(' ')

          return (
            <div
              key={stat.value}
              className={`flex flex-col items-center text-center px-4 py-3 ${borderClass}`}
            >
              <span className="text-[18px] md:text-[22px] font-medium text-[#2B7FE0] leading-none">
                {stat.value}
              </span>
              <span className="text-[11px] text-[#4A7A9B] mt-1 leading-[1.4]">
                {stat.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
