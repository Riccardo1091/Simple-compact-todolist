// linksSxCol
const sxCol = document.querySelector('.sx-col')
const sxColItemClasses = 'rounded-lg w-28 aspect-square flex justify-center items-center opacity-80 hover:opacity-95 hover:scale-95 glass'
const sxColIconClasses = 'fa-brands text-5xl text-white'
linksSxCol.forEach(item =>
    sxCol.insertAdjacentHTML('beforeend', `<a href="${item.url}" class="${sxColItemClasses} bg-[${item.bgColor}]"><i class="fa-${item.sito} ${sxColIconClasses}"></i></a>`)
)

// linksTabsCenter
const tabsCenter = document.querySelector('.tabs')
const tabsCenterItemClasses = 'text-white hover:opacity-80 uppercase p-4 tracking-wider shadow-text hover:scale-95 glass border-none rounded-lg'
linksTabsCenter.forEach(item =>
    tabsCenter.insertAdjacentHTML('beforeend', `<a href="${item.url}" class="${tabsCenterItemClasses}">${item.sito}</a>`)
)

// linksTabsCenterBottom
const tabsCenterBottom = document.querySelector('.tabsBottom')
const tabsCenterBottomItemClasses = 'rounded-lg w-56 aspect-square flex justify-center items-center opacity-80 hover:opacity-95 hover:scale-95 glass'
const tabsCenterBottomIconClasses = 'text-5xl text-white'
linksTabsCenterBottom.forEach(item =>
    tabsCenterBottom.insertAdjacentHTML('beforeend', `<a href="${item.url}" class="${tabsCenterBottomItemClasses} bg-[${item.bgColor}]"><i class="${item.iconType} fa-${item.sito} ${tabsCenterBottomIconClasses}"></i></a>`)
)

// linksDxCol
const dxCol = document.querySelector('.dx-col')
const dxColItemClasses = 'tracking-wider p-4 text-white rounded-lg w-full flex text-lg bg-[#ff761d] uppercase opacity-80 hover:opacity-95 hover:scale-95 glass justify-center items-center'
linksDxCol.forEach(item =>
    dxCol.insertAdjacentHTML('beforeend', `<a href="${item.url}" class="bg-[${item.bgColor}] ${dxColItemClasses}">${item.sito}</a>`)
)