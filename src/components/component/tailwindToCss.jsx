

const bg = {'bg-black': {'name': 'bg-black', 'value': 'rgb(0,0,0)'}, 'bg-white': {'name': 'bg-white', 'value': 'rgb(255,255,255)'}, 'bg-slate-50': {'name': 'bg-slate-50', 'value': 'rgb(248,250,252)'}, 'bg-slate-100': {'name': 'bg-slate-100', 'value': 'rgb(241,245,249)'}, 'bg-slate-200': {'name': 'bg-slate-200', 'value': 'rgb(226,232,240)'}, 'bg-slate-300': {'name': 'bg-slate-300', 'value': 'rgb(203,213,225)'}, 'bg-slate-400': {'name': 'bg-slate-400', 'value': 'rgb(148,163,184)'}, 'bg-slate-500': {'name': 'bg-slate-500', 'value': 'rgb(100,116,139)'}, 'bg-slate-600': {'name': 'bg-slate-600', 'value': 'rgb(71,85,105)'}, 'bg-slate-700': {'name': 'bg-slate-700', 'value': 'rgb(51,65,85)'}, 'bg-slate-800': {'name': 'bg-slate-800', 'value': 'rgb(30,41,59)'}, 'bg-slate-900': {'name': 'bg-slate-900', 'value': 'rgb(15,23,42)'}, 'bg-gray-50': {'name': 'bg-gray-50', 'value': 'rgb(249,250,251)'}, 'bg-gray-100': {'name': 'bg-gray-100', 'value': 'rgb(243,244,246)'}, 'bg-gray-200': {'name': 'bg-gray-200', 'value': 'rgb(229,231,235)'}, 'bg-gray-300': {'name': 'bg-gray-300', 'value': 'rgb(209,213,219)'}, 'bg-gray-400': {'name': 'bg-gray-400', 'value': 'rgb(156,163,175)'}, 'bg-gray-500': {'name': 'bg-gray-500', 'value': 'rgb(107,114,128)'}, 'bg-gray-600': {'name': 'bg-gray-600', 'value': 'rgb(75,85,99)'}, 'bg-gray-700': {'name': 'bg-gray-700', 'value': 'rgb(55,65,81)'}, 'bg-gray-800': {'name': 'bg-gray-800', 'value': 'rgb(31,41,55)'}, 'bg-gray-900': {'name': 'bg-gray-900', 'value': 'rgb(17,24,39)'}, 'bg-zinc-50': {'name': 'bg-zinc-50', 'value': 'rgb(250,250,250)'}, 'bg-zinc-100': {'name': 'bg-zinc-100', 'value': 'rgb(244,244,245)'}, 'bg-zinc-200': {'name': 'bg-zinc-200', 'value': 'rgb(228,228,231)'}, 'bg-zinc-300': {'name': 'bg-zinc-300', 'value': 'rgb(212,212,216)'}, 'bg-zinc-400': {'name': 'bg-zinc-400', 'value': 'rgb(161,161,170)'}, 'bg-zinc-500': {'name': 'bg-zinc-500', 'value': 'rgb(113,113,122)'}, 'bg-zinc-600': {'name': 'bg-zinc-600', 'value': 'rgb(82,82,91)'}, 'bg-zinc-700': {'name': 'bg-zinc-700', 'value': 'rgb(63,63,70)'}, 'bg-zinc-800': {'name': 'bg-zinc-800', 'value': 'rgb(39,39,42)'}, 'bg-zinc-900': {'name': 'bg-zinc-900', 'value': 'rgb(24,24,27)'}, 'bg-neutral-50': {'name': 'bg-neutral-50', 'value': 'rgb(250,250,250)'}, 'bg-neutral-100': {'name': 'bg-neutral-100', 'value': 'rgb(245,245,245)'}, 'bg-neutral-200': {'name': 'bg-neutral-200', 'value': 'rgb(229,229,229)'}, 'bg-neutral-300': {'name': 'bg-neutral-300', 'value': 'rgb(212,212,212)'}, 'bg-neutral-400': {'name': 'bg-neutral-400', 'value': 'rgb(163,163,163)'}, 'bg-neutral-500': {'name': 'bg-neutral-500', 'value': 'rgb(115,115,115)'}, 'bg-neutral-600': {'name': 'bg-neutral-600', 'value': 'rgb(82,82,82)'}, 'bg-neutral-700': {'name': 'bg-neutral-700', 'value': 'rgb(64,64,64)'}, 'bg-neutral-800': {'name': 'bg-neutral-800', 'value': 'rgb(38,38,38)'}, 'bg-neutral-900': {'name': 'bg-neutral-900', 'value': 'rgb(23,23,23)'}, 'bg-stone-50': {'name': 'bg-stone-50', 'value': 'rgb(250,250,249)'}, 'bg-stone-100': {'name': 'bg-stone-100', 'value': 'rgb(245,245,244)'}, 'bg-stone-200': {'name': 'bg-stone-200', 'value': 'rgb(231,229,228)'}, 'bg-stone-300': {'name': 'bg-stone-300', 'value': 'rgb(214,211,209)'}, 'bg-stone-400': {'name': 'bg-stone-400', 'value': 'rgb(168,162,158)'}, 'bg-stone-500': {'name': 'bg-stone-500', 'value': 'rgb(120,113,108)'}, 'bg-stone-600': {'name': 'bg-stone-600', 'value': 'rgb(87,83,78)'}, 'bg-stone-700': {'name': 'bg-stone-700', 'value': 'rgb(68,64,60)'}, 'bg-stone-800': {'name': 'bg-stone-800', 'value': 'rgb(41,37,36)'}, 'bg-stone-900': {'name': 'bg-stone-900', 'value': 'rgb(28,25,23)'}, 'bg-red-50': {'name': 'bg-red-50', 'value': 'rgb(254,242,242)'}, 'bg-red-100': {'name': 'bg-red-100', 'value': 'rgb(254,226,226)'}, 'bg-red-200': {'name': 'bg-red-200', 'value': 'rgb(254,202,202)'}, 'bg-red-300': {'name': 'bg-red-300', 'value': 'rgb(252,165,165)'}, 'bg-red-400': {'name': 'bg-red-400', 'value': 'rgb(248,113,113)'}, 'bg-red-500': {'name': 'bg-red-500', 'value': 'rgb(239,68,68)'}, 'bg-red-600': {'name': 'bg-red-600', 'value': 'rgb(220,38,38)'}, 'bg-red-700': {'name': 'bg-red-700', 'value': 'rgb(185,28,28)'}, 'bg-red-800': {'name': 'bg-red-800', 'value': 'rgb(153,27,27)'}, 'bg-red-900': {'name': 'bg-red-900', 'value': 'rgb(127,29,29)'}, 'bg-orange-50': {'name': 'bg-orange-50', 'value': 'rgb(255,247,237)'}, 'bg-orange-100': {'name': 'bg-orange-100', 'value': 'rgb(255,237,213)'}, 'bg-orange-200': {'name': 'bg-orange-200', 'value': 'rgb(254,215,170)'}, 'bg-orange-300': {'name': 'bg-orange-300', 'value': 'rgb(253,186,116)'}, 'bg-orange-400': {'name': 'bg-orange-400', 'value': 'rgb(251,146,60)'}, 'bg-orange-500': {'name': 'bg-orange-500', 'value': 'rgb(249,115,22)'}, 'bg-orange-600': {'name': 'bg-orange-600', 'value': 'rgb(234,88,12)'}, 'bg-orange-700': {'name': 'bg-orange-700', 'value': 'rgb(194,65,12)'}, 'bg-orange-800': {'name': 'bg-orange-800', 'value': 'rgb(154,52,18)'}, 'bg-orange-900': {'name': 'bg-orange-900', 'value': 'rgb(124,45,18)'}, 'bg-amber-50': {'name': 'bg-amber-50', 'value': 'rgb(255,251,235)'}, 'bg-amber-100': {'name': 'bg-amber-100', 'value': 'rgb(254,243,199)'}, 'bg-amber-200': {'name': 'bg-amber-200', 'value': 'rgb(253,230,138)'}, 'bg-amber-300': {'name': 'bg-amber-300', 'value': 'rgb(252,211,77)'}, 'bg-amber-400': {'name': 'bg-amber-400', 'value': 'rgb(251,191,36)'}, 'bg-amber-500': {'name': 'bg-amber-500', 'value': 'rgb(245,158,11)'}, 'bg-amber-600': {'name': 'bg-amber-600', 'value': 'rgb(217,119,6)'}, 'bg-amber-700': {'name': 'bg-amber-700', 'value': 'rgb(180,83,9)'}, 'bg-amber-800': {'name': 'bg-amber-800', 'value': 'rgb(146,64,14)'}, 'bg-amber-900': {'name': 'bg-amber-900', 'value': 'rgb(120,53,15)'}, 'bg-yellow-50': {'name': 'bg-yellow-50', 'value': 'rgb(254,252,232)'}, 'bg-yellow-100': {'name': 'bg-yellow-100', 'value': 'rgb(254,249,195)'}, 'bg-yellow-200': {'name': 'bg-yellow-200', 'value': 'rgb(254,240,138)'}, 'bg-yellow-300': {'name': 'bg-yellow-300', 'value': 'rgb(253,224,71)'}, 'bg-yellow-400': {'name': 'bg-yellow-400', 'value': 'rgb(250,204,21)'}, 'bg-yellow-500': {'name': 'bg-yellow-500', 'value': 'rgb(234,179,8)'}, 'bg-yellow-600': {'name': 'bg-yellow-600', 'value': 'rgb(202,138,4)'}, 'bg-yellow-700': {'name': 'bg-yellow-700', 'value': 'rgb(161,98,7)'}, 'bg-yellow-800': {'name': 'bg-yellow-800', 'value': 'rgb(133,77,14)'}, 'bg-yellow-900': {'name': 'bg-yellow-900', 'value': 'rgb(113,63,18)'}, 'bg-lime-50': {'name': 'bg-lime-50', 'value': 'rgb(247,254,231)'}, 'bg-lime-100': {'name': 'bg-lime-100', 'value': 'rgb(236,252,203)'}, 'bg-lime-200': {'name': 'bg-lime-200', 'value': 'rgb(217,249,157)'}, 'bg-lime-300': {'name': 'bg-lime-300', 'value': 'rgb(190,242,100)'}, 'bg-lime-400': {'name': 'bg-lime-400', 'value': 'rgb(163,230,53)'}, 'bg-lime-500': {'name': 'bg-lime-500', 'value': 'rgb(132,204,22)'}, 'bg-lime-600': {'name': 'bg-lime-600', 'value': 'rgb(101,163,13)'}, 'bg-lime-700': {'name': 'bg-lime-700', 'value': 'rgb(77,124,15)'}, 'bg-lime-800': {'name': 'bg-lime-800', 'value': 'rgb(63,98,18)'}, 'bg-lime-900': {'name': 'bg-lime-900', 'value': 'rgb(54,83,20)'}, 'bg-green-50': {'name': 'bg-green-50', 'value': 'rgb(240,253,244)'}, 'bg-green-100': {'name': 'bg-green-100', 'value': 'rgb(220,252,231)'}, 'bg-green-200': {'name': 'bg-green-200', 'value': 'rgb(187,247,208)'}, 'bg-green-300': {'name': 'bg-green-300', 'value': 'rgb(134,239,172)'}, 'bg-green-400': {'name': 'bg-green-400', 'value': 'rgb(74,222,128)'}, 'bg-green-500': {'name': 'bg-green-500', 'value': 'rgb(34,197,94)'}, 'bg-green-600': {'name': 'bg-green-600', 'value': 'rgb(22,163,74)'}, 'bg-green-700': {'name': 'bg-green-700', 'value': 'rgb(21,128,61)'}, 'bg-green-800': {'name': 'bg-green-800', 'value': 'rgb(22,101,52)'}, 'bg-green-900': {'name': 'bg-green-900', 'value': 'rgb(20,83,45)'}, 'bg-emerald-50': {'name': 'bg-emerald-50', 'value': 'rgb(236,253,245)'}, 'bg-emerald-100': {'name': 'bg-emerald-100', 'value': 'rgb(209,250,229)'}, 'bg-emerald-200': {'name': 'bg-emerald-200', 'value': 'rgb(167,243,208)'}, 'bg-emerald-300': {'name': 'bg-emerald-300', 'value': 'rgb(110,231,183)'}, 'bg-emerald-400': {'name': 'bg-emerald-400', 'value': 'rgb(52,211,153)'}, 'bg-emerald-500': {'name': 'bg-emerald-500', 'value': 'rgb(16,185,129)'}, 'bg-emerald-600': {'name': 'bg-emerald-600', 'value': 'rgb(5,150,105)'}, 'bg-emerald-700': {'name': 'bg-emerald-700', 'value': 'rgb(4,120,87)'}, 'bg-emerald-800': {'name': 'bg-emerald-800', 'value': 'rgb(6,95,70)'}, 'bg-emerald-900': {'name': 'bg-emerald-900', 'value': 'rgb(6,78,59)'}, 'bg-teal-50': {'name': 'bg-teal-50', 'value': 'rgb(240,253,250)'}, 'bg-teal-100': {'name': 'bg-teal-100', 'value': 'rgb(204,251,241)'}, 'bg-teal-200': {'name': 'bg-teal-200', 'value': 'rgb(153,246,228)'}, 'bg-teal-300': {'name': 'bg-teal-300', 'value': 'rgb(94,234,212)'}, 'bg-teal-400': {'name': 'bg-teal-400', 'value': 'rgb(45,212,191)'}, 'bg-teal-500': {'name': 'bg-teal-500', 'value': 'rgb(20,184,166)'}, 'bg-teal-600': {'name': 'bg-teal-600', 'value': 'rgb(13,148,136)'}, 'bg-teal-700': {'name': 'bg-teal-700', 'value': 'rgb(15,118,110)'}, 'bg-teal-800': {'name': 'bg-teal-800', 'value': 'rgb(17,94,89)'}, 'bg-teal-900': {'name': 'bg-teal-900', 'value': 'rgb(19,78,74)'}, 'bg-cyan-50': {'name': 'bg-cyan-50', 'value': 'rgb(236,254,255)'}, 'bg-cyan-100': {'name': 'bg-cyan-100', 'value': 'rgb(207,250,254)'}, 'bg-cyan-200': {'name': 'bg-cyan-200', 'value': 'rgb(165,243,252)'}, 'bg-cyan-300': {'name': 'bg-cyan-300', 'value': 'rgb(103,232,249)'}, 'bg-cyan-400': {'name': 'bg-cyan-400', 'value': 'rgb(34,211,238)'}, 'bg-cyan-500': {'name': 'bg-cyan-500', 'value': 'rgb(6,182,212)'}, 'bg-cyan-600': {'name': 'bg-cyan-600', 'value': 'rgb(8,145,178)'}, 'bg-cyan-700': {'name': 'bg-cyan-700', 'value': 'rgb(14,116,144)'}, 'bg-cyan-800': {'name': 'bg-cyan-800', 'value': 'rgb(21,94,117)'}, 'bg-cyan-900': {'name': 'bg-cyan-900', 'value': 'rgb(22,78,99)'}, 'bg-sky-50': {'name': 'bg-sky-50', 'value': 'rgb(240,249,255)'}, 'bg-sky-100': {'name': 'bg-sky-100', 'value': 'rgb(224,242,254)'}, 'bg-sky-200': {'name': 'bg-sky-200', 'value': 'rgb(186,230,253)'}, 'bg-sky-300': {'name': 'bg-sky-300', 'value': 'rgb(125,211,252)'}, 'bg-sky-400': {'name': 'bg-sky-400', 'value': 'rgb(56,189,248)'}, 'bg-sky-500': {'name': 'bg-sky-500', 'value': 'rgb(14,165,233)'}, 'bg-sky-600': {'name': 'bg-sky-600', 'value': 'rgb(2,132,199)'}, 'bg-sky-700': {'name': 'bg-sky-700', 'value': 'rgb(3,105,161)'}, 'bg-sky-800': {'name': 'bg-sky-800', 'value': 'rgb(7,89,133)'}, 'bg-sky-900': {'name': 'bg-sky-900', 'value': 'rgb(12,74,110)'}, 'bg-blue-50': {'name': 'bg-blue-50', 'value': 'rgb(239,246,255)'}, 'bg-blue-100': {'name': 'bg-blue-100', 'value': 'rgb(219,234,254)'}, 'bg-blue-200': {'name': 'bg-blue-200', 'value': 'rgb(191,219,254)'}, 'bg-blue-300': {'name': 'bg-blue-300', 'value': 'rgb(147,197,253)'}, 'bg-blue-400': {'name': 'bg-blue-400', 'value': 'rgb(96,165,250)'}, 'bg-blue-500': {'name': 'bg-blue-500', 'value': 'rgb(59,130,246)'}, 'bg-blue-600': {'name': 'bg-blue-600', 'value': 'rgb(37,99,235)'}, 'bg-blue-700': {'name': 'bg-blue-700', 'value': 'rgb(29,78,216)'}, 'bg-blue-800': {'name': 'bg-blue-800', 'value': 'rgb(30,64,175)'}, 'bg-blue-900': {'name': 'bg-blue-900', 'value': 'rgb(30,58,138)'}, 'bg-indigo-50': {'name': 'bg-indigo-50', 'value': 'rgb(238,242,255)'}, 'bg-indigo-100': {'name': 'bg-indigo-100', 'value': 'rgb(224,231,255)'}, 'bg-indigo-200': {'name': 'bg-indigo-200', 'value': 'rgb(199,210,254)'}, 'bg-indigo-300': {'name': 'bg-indigo-300', 'value': 'rgb(165,180,252)'}, 'bg-indigo-400': {'name': 'bg-indigo-400', 'value': 'rgb(129,140,248)'}, 'bg-indigo-500': {'name': 'bg-indigo-500', 'value': 'rgb(99,102,241)'}, 'bg-indigo-600': {'name': 'bg-indigo-600', 'value': 'rgb(79,70,229)'}, 'bg-indigo-700': {'name': 'bg-indigo-700', 'value': 'rgb(67,56,202)'}, 'bg-indigo-800': {'name': 'bg-indigo-800', 'value': 'rgb(55,48,163)'}, 'bg-indigo-900': {'name': 'bg-indigo-900', 'value': 'rgb(49,46,129)'}, 'bg-violet-50': {'name': 'bg-violet-50', 'value': 'rgb(245,243,255)'}, 'bg-violet-100': {'name': 'bg-violet-100', 'value': 'rgb(237,233,254)'}, 'bg-violet-200': {'name': 'bg-violet-200', 'value': 'rgb(221,214,254)'}, 'bg-violet-300': {'name': 'bg-violet-300', 'value': 'rgb(196,181,253)'}, 'bg-violet-400': {'name': 'bg-violet-400', 'value': 'rgb(167,139,250)'}, 'bg-violet-500': {'name': 'bg-violet-500', 'value': 'rgb(139,92,246)'}, 'bg-violet-600': {'name': 'bg-violet-600', 'value': 'rgb(124,58,237)'}, 'bg-violet-700': {'name': 'bg-violet-700', 'value': 'rgb(109,40,217)'}, 'bg-violet-800': {'name': 'bg-violet-800', 'value': 'rgb(91,33,182)'}, 'bg-violet-900': {'name': 'bg-violet-900', 'value': 'rgb(76,29,149)'}, 'bg-purple-50': {'name': 'bg-purple-50', 'value': 'rgb(250,245,255)'}, 'bg-purple-100': {'name': 'bg-purple-100', 'value': 'rgb(243,232,255)'}, 'bg-purple-200': {'name': 'bg-purple-200', 'value': 'rgb(233,213,255)'}, 'bg-purple-300': {'name': 'bg-purple-300', 'value': 'rgb(216,180,254)'}, 'bg-purple-400': {'name': 'bg-purple-400', 'value': 'rgb(192,132,252)'}, 'bg-purple-500': {'name': 'bg-purple-500', 'value': 'rgb(168,85,247)'}, 'bg-purple-600': {'name': 'bg-purple-600', 'value': 'rgb(147,51,234)'}, 'bg-purple-700': {'name': 'bg-purple-700', 'value': 'rgb(126,34,206)'}, 'bg-purple-800': {'name': 'bg-purple-800', 'value': 'rgb(107,33,168)'}, 'bg-purple-900': {'name': 'bg-purple-900', 'value': 'rgb(88,28,135)'}, 'bg-fuchsia-50': {'name': 'bg-fuchsia-50', 'value': 'rgb(253,244,255)'}, 'bg-fuchsia-100': {'name': 'bg-fuchsia-100', 'value': 'rgb(250,232,255)'}, 'bg-fuchsia-200': {'name': 'bg-fuchsia-200', 'value': 'rgb(245,208,254)'}, 'bg-fuchsia-300': {'name': 'bg-fuchsia-300', 'value': 'rgb(240,171,252)'}, 'bg-fuchsia-400': {'name': 'bg-fuchsia-400', 'value': 'rgb(232,121,249)'}, 'bg-fuchsia-500': {'name': 'bg-fuchsia-500', 'value': 'rgb(217,70,239)'}, 'bg-fuchsia-600': {'name': 'bg-fuchsia-600', 'value': 'rgb(192,38,211)'}, 'bg-fuchsia-700': {'name': 'bg-fuchsia-700', 'value': 'rgb(162,28,175)'}, 'bg-fuchsia-800': {'name': 'bg-fuchsia-800', 'value': 'rgb(134,25,143)'}, 'bg-fuchsia-900': {'name': 'bg-fuchsia-900', 'value': 'rgb(112,26,117)'}, 'bg-pink-50': {'name': 'bg-pink-50', 'value': 'rgb(253,242,248)'}, 'bg-pink-100': {'name': 'bg-pink-100', 'value': 'rgb(252,231,243)'}, 'bg-pink-200': {'name': 'bg-pink-200', 'value': 'rgb(251,207,232)'}, 'bg-pink-300': {'name': 'bg-pink-300', 'value': 'rgb(249,168,212)'}, 'bg-pink-400': {'name': 'bg-pink-400', 'value': 'rgb(244,114,182)'}, 'bg-pink-500': {'name': 'bg-pink-500', 'value': 'rgb(236,72,153)'}, 'bg-pink-600': {'name': 'bg-pink-600', 'value': 'rgb(219,39,119)'}, 'bg-pink-700': {'name': 'bg-pink-700', 'value': 'rgb(190,24,93)'}, 'bg-pink-800': {'name': 'bg-pink-800', 'value': 'rgb(157,23,77)'}, 'bg-pink-900': {'name': 'bg-pink-900', 'value': 'rgb(131,24,67)'}, 'bg-rose-50': {'name': 'bg-rose-50', 'value': 'rgb(255,241,242)'}, 'bg-rose-100': {'name': 'bg-rose-100', 'value': 'rgb(255,228,230)'}, 'bg-rose-200': {'name': 'bg-rose-200', 'value': 'rgb(254,205,211)'}, 'bg-rose-300': {'name': 'bg-rose-300', 'value': 'rgb(253,164,175)'}, 'bg-rose-400': {'name': 'bg-rose-400', 'value': 'rgb(251,113,133)'}, 'bg-rose-500': {'name': 'bg-rose-500', 'value': 'rgb(244,63,94)'}, 'bg-rose-600': {'name': 'bg-rose-600', 'value': 'rgb(225,29,72)'}, 'bg-rose-700': {'name': 'bg-rose-700', 'value': 'rgb(190,18,60)'}, 'bg-rose-800': {'name': 'bg-rose-800', 'value': 'rgb(159,18,57)'}, 'bg-rose-900': {'name': 'bg-rose-900', 'value': 'rgb(136,19,55)'}}





export function getColorValueFromBg(cl){
    try{
        return bg[cl].value
    }catch{
        return cl.split('[')[1].replace("]","")
    }
}

export function tailwindBgToCss(cl){
    try{
        return {backgroundColor:bg[cl].value}
    }catch{
        return {backgroundColor:cl.split('[')[1].replace("]","")}
    }
    
}

export function tailwindTextToCss(cl){
    cl = cl.replace("text", "bg")
    return {color:bg[cl].value}
}

export function tailwindRingToCss(cl){
    cl = cl.replace("ring", "bg")
    return {color:bg[cl].value}
}