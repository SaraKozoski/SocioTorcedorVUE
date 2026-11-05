// Equivalente a AtalhoManager.kt (SharedPreferences → localStorage)
import { Utensils, Goal, IdCard, Ticket, Wallet } from 'lucide-vue-next'

export const todasTelas = [
  { rota: 'lanchonete', label: 'Lanchonete', icone: Utensils },
  { rota: 'time', label: 'Time', icone: Goal },
  { rota: 'planos', label: 'Planos', icone: IdCard },
  { rota: 'ingresso', label: 'Ingressos', icone: Ticket },
  { rota: 'credito', label: 'Crédito', icone: Wallet },
]

const KEY = 'atalhos_historico_rotas'
const MAX = 20

function lerHistorico() {
  try {
    const raw = localStorage.getItem(KEY) ?? ''
    return raw.trim() ? raw.split(',') : []
  } catch {
    return []
  }
}

export function registrarAcesso(rota) {
  if (!todasTelas.some((t) => t.rota === rota)) return
  const historico = [rota, ...lerHistorico()].slice(0, MAX)
  try {
    localStorage.setItem(KEY, historico.join(','))
  } catch {
    /* storage indisponível: ignora */
  }
}

/** Atalhos ordenados do mais para o menos acessado (ordenação estável, como no Kotlin). */
export function getAtalhosOrdenados() {
  const contagem = {}
  for (const r of lerHistorico()) contagem[r] = (contagem[r] ?? 0) + 1
  return [...todasTelas].sort((a, b) => (contagem[b.rota] ?? 0) - (contagem[a.rota] ?? 0))
}
