// Equivalente a CarrinhoViewModel.kt
import { defineStore } from 'pinia'

export const LIMITE_POR_ITEM = 15

/**
 * @typedef {Object} ItemCarrinho
 * @property {string} id
 * @property {{id:string}} produto
 * @property {Array} ingredientesInclusos
 * @property {Array} adicionaisSelecionados
 * @property {string} observacao
 * @property {number} precoTotal
 */

export const useCarrinhoStore = defineStore('carrinho', {
  state: () => ({
    /** @type {ItemCarrinho[]} */
    itens: [],
  }),

  getters: {
    precoTotal: (s) => s.itens.reduce((soma, i) => soma + i.precoTotal, 0),
    quantidadeDoItem: (s) => (produtoId) =>
      s.itens.filter((i) => i.produto.id === produtoId).length,
  },

  actions: {
    /** @returns {boolean} false se atingiu o limite por item */
    adicionarItem(item) {
      if (this.quantidadeDoItem(item.produto.id) >= LIMITE_POR_ITEM) return false
      this.itens.push(item)
      return true
    },
    removerUm(produtoId) {
      const idx = this.itens.findLastIndex((i) => i.produto.id === produtoId)
      if (idx >= 0) this.itens.splice(idx, 1)
    },
    removerTodos(produtoId) {
      this.itens = this.itens.filter((i) => i.produto.id !== produtoId)
    },
    limparCarrinho() {
      this.itens = []
    },
  },
})
