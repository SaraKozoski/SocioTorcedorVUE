// Equivalente a ClubConfig.kt / AppColors.kt do app Android.
// Para trocar de clube, edite SOMENTE este arquivo (e os assets em src/assets/images).
// Cada chave de `cores` vira uma CSS variable --kebab-case (ex.: brandDark → --brand-dark).
// Cores com transparência usam hex de 8 dígitos no formato CSS (#RRGGBBAA);
// no Kotlin o formato era 0xAARRGGBB.

import logo from '@/assets/images/logo_clube.png'
import logoBranco from '@/assets/images/logo_branco.png'
import estadioDefault from '@/assets/images/estadio/estadio_default.png'
import estadioRed from '@/assets/images/estadio/estadio_red.png'
import estadioGold from '@/assets/images/estadio/estadio_gold.png'
import estadioBlack from '@/assets/images/estadio/estadio_black.png'
import estadioMapa from '@/assets/images/estadio/estadio_mapa.jpg'

const primaryMain = '#BA0000' // vermelho vibrante (botões, destaques, chips ativos)
const primaryDark = '#8B0000' // vermelho escuro (cards de destaque, gradientes)
const primaryFaint = '#BA000080' // vermelho 50% (fundos sutis)

export const ClubConfig = {
  nomeClube: 'Soccer Club',
  siglaClube: 'CAP',
  timeIdApi: 134, // ID do time na API de partidas

  logo,
  logoBranco,
  estadio: {
    default: estadioDefault,
    red: estadioRed,
    gold: estadioGold,
    black: estadioBlack,
    mapa: estadioMapa,
  },

  cores: {
    // Superfícies
    background: '#282828',
    cardDark: '#1E1E1E',
    cardLight: '#F5F5F5',
    cardAccent: primaryDark,
    surfaceSubtle: '#0A0A0A',
    bottomBar: '#121212',

    // Marca / interação
    brand: primaryMain,
    brandDark: primaryDark,
    brandFaint: primaryFaint,

    // Texto
    textPrimary: '#FFFFFF',
    textSecondary: '#AAAAAA',
    textOnLight: '#0A0A0A',

    // Chips / filtros
    chipActive: '#FFFFFF',
    chipInactive: '#6B0000',

    // Login
    loginFieldBg: primaryDark,
    loginButton: primaryMain,

    // Tiers de planos
    // OBS: no Kotlin o valor era 0x33FFFFD700 (10 dígitos), que o Compose lê como #FFD700 opaco.
    // Mantido opaco para ficar igual ao app atual; para translúcido use '#FFD70033'.
    tierRed: primaryFaint,
    tierGold: '#FFD700',
    tierBlack: '#101010',
    card3Translucent: '#0A0A0A80',

    // Apostas
    apostasFundo: '#0D0D0D',
    apostasGradienteTopo: '#1A0A00',
    apostasSurfaceA: '#161616',
    apostasSurfaceB: '#1F1F1F',
    apostasBorder: '#2C2C2C',
    apostasGold: '#FFBF00',
    apostasGoldLight: '#FFF0A0',
    apostasTextPrimary: '#F2F2F2',
    apostasTextSecondary: '#888888',
    apostasGreen: '#00C97A',

    // Home - cards de resultado
    homeCardSecundario: '#482B2BCC',
    homeCardPrincipal: '#2A0A0A',

    // Ingressos / Meu Espaço
    cardDark2: '#1E1E1E',
    textSecondary2: '#AAAAAA',
    warning: '#FFC107',
    success: '#4CAF50',
    cardBorder: '#2A2A2A',

    // Planos / mapa do estádio
    zonaRed: primaryMain,
    zonaGold: '#FFD700',
    zonaBlack: '#111111',

    // Time (elenco, classificação, partidas)
    timeTableBg: '#2A1515',
    timeHeaderBg: '#3D1E1E',
    timeRowBg: '#221010',
    timeRowAltBg: '#1C0D0D',
    timeHighlightRow: '#7C1010',
    timeCardBorder: '#5A2A2A',
    timeDivider: '#3D2020',
    timeLiveBorder: '#A01414',
    timeButtonBg: '#9E1A1A',
  },
}

const kebab = (s) => s.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()

/** Injeta as cores do clube como CSS variables em :root. Chamar antes de montar o app. */
export function aplicarTema(root = document.documentElement) {
  for (const [nome, valor] of Object.entries(ClubConfig.cores)) {
    root.style.setProperty(`--${kebab(nome)}`, valor)
  }
}
