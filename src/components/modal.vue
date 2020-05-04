<template>
  <div class="modal" v-show="showModal">
    <div class="mask"></div>
    <div class="modal-dialog">
      <div class="modal-header">
        <span>{{ title }}</span>
        <i class="fa fa-times-circle" v-on:click="$emit('closeModal')"></i>
      </div>
      <div class="modal-body">
        <slot name="modalBody"></slot>
      </div>
      <div class="modal-footer">
        <button class="define" v-on:click="$emit('submit')">
          {{ define }}
        </button>
        <button v-if="cancel" class="cancel" v-on:click="$emit('closeModal')">
          取消
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: {
    title: String,
    showModal: Boolean,
    define: String,
    cancel: Boolean,
  },
};
</script>

<style>
.slide {
    top:30%;
}
@keyframes slide {
    from {
        top: -100%;
    }
    to {
        top: 30%
    }
}
.mask {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 70;
}
.modal-dialog {
  width: 660px;
  height: auto;
  position: fixed;
  left: 50%;
  margin-left: -330px;
  z-index: 80;
  animation: slide 0.5s ease forwards;
}

.modal-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.modal-header span {
  color: #333;
  font-size: 16px;
}

.modal-header i {
  font-style: normal;
  font-size: 22px;
  color: #666;
  transition: all 0.5s;
  cursor: pointer;
}

.modal-header i:hover {
  transform: scale(1.1, 1.1);
}

.modal-body {
  background-color: #fff;
  padding: 30px;
}

.modal-header,
.modal-footer {
  background-color: #f5f5f5;
  padding: 20px;
}

.modal-footer {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.modal-footer button {
  cursor: pointer;
  border: none;
  color: #fff;
  padding: 8px 30px;
  outline: none;
}

.modal-footer .define {
  background-color: var(--shopcar_background);
  margin-right: 10px;
}

.modal-footer .cancel {
  background-color: #999;
}
</style>
