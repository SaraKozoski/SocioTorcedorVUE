// Equivalente a UserViewModel.kt
import { defineStore } from 'pinia'

/** @typedef {{id:string,nome:string,cpf:string,email:string,plano:string,numeroCadastro:string,fotoUrl:string|null}} Socio */

/** Formata como no app: "R$12,50" */
export function formatarSaldo(valor) {
  const centavosTotais = Math.round(valor * 100)
  const inteiro = Math.trunc(centavosTotais / 100)
  const centavos = String(centavosTotais % 100).padStart(2, '0')
  return `R$${inteiro},${centavos}`
}

export const useUserStore = defineStore('user', {
  state: () => ({
    /** @type {Socio|null} */
    usuario: null,
    pontos: 0,
    saldoNumerico: 0,
    senhaSalva: '',
  }),

  getters: {
    estaLogado: (s) => s.usuario !== null,
    temPlano: (s) => !!s.usuario?.plano?.trim(),
    saldo: (s) => formatarSaldo(s.saldoNumerico),
  },

  actions: {
    login(socio, senha) {
      this.usuario = socio
      this.senhaSalva = senha
    },
    verificarSenha(senha) {
      return senha === this.senhaSalva
    },
    logout() {
      this.usuario = null
      this.senhaSalva = ''
      this.pontos = 0
    },
    adicionarPontos(reais) {
      this.pontos += Math.trunc(reais)
    },
    resgatarPontos(quantidade) {
      this.pontos = Math.max(this.pontos - quantidade, 0)
    },
    adicionarSaldo(valor) {
      this.saldoNumerico += valor
    },
    debitarSaldo(valor) {
      this.saldoNumerico = Math.max(this.saldoNumerico - valor, 0)
    },
  },
})
