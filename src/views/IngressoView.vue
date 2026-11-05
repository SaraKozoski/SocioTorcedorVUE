<script setup>
import PlaceholderView from '@/components/common/PlaceholderView.vue'
defineProps({ jogoIdSelecionado: { type: Number, default: -1 } })
</script>

<template>
  <PlaceholderView titulo="Comprar Ingressos" etapa="5" origem="ui/ingressos/ComprarIngressosScreen.kt" />
</template>
