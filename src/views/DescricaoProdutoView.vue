<script setup>
import PlaceholderView from '@/components/common/PlaceholderView.vue'
defineProps({ produtoId: { type: String, default: '1' } })
</script>

<template>
  <PlaceholderView titulo="Descrição do Produto" etapa="6" origem="ui/alimentacao/DescricaoProdutoAlimentacaoScreen.kt" />
</template>
