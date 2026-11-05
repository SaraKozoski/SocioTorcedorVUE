<script setup>
import PlaceholderView from '@/components/common/PlaceholderView.vue'
defineProps({ tipoPlano: { type: String, default: 'RED' } })
</script>

<template>
  <PlaceholderView titulo="Detalhe do Plano" etapa="5" origem="ui/planos/PlanosDetalheScreen.kt" />
</template>
