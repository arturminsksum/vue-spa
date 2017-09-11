<template lang="pug">
  transition(name='modal')
    .modal__mask(@click.stop='closeModal($event.currentTarget)')
      .modal__wrapper
        .modal__container
          .modal__header(v-if="!noHeader")
            slot(name='header')
              .modal__title
                span {{modalTitle}}
            .modal__close(@click="$emit('close')")
              os-svg(name="close", width="15px", height="15px")
          .modal__body
            slot(name='body')
              | default body
          .modal__footer
            slot(name='footer')


</template>

<script type="text/babel" src="./os-modal.js"></script>

<style lang="scss" src="./os-modal.scss"></style>

