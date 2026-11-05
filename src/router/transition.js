// Controla a animação entre telas (equivalente às enter/exit transitions do NavHost).
// Padrão: fade de 220ms. Tela "plano_detalhe": entra deslizando de baixo para cima (320ms)
// e sai deslizando para baixo (300ms).
import { ref } from 'vue'

export const transitionName = ref('fade')

export function definirTransicao(to, from) {
  if (to.name === 'plano_detalhe') transitionName.value = 'slide-up-in'
  else if (from?.name === 'plano_detalhe') transitionName.value = 'slide-down-out'
  else transitionName.value = 'fade'
}
