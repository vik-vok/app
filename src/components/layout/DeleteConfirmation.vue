<template>
  <b-modal
    :id="'modal-' + id"
    :hide-footer="true"
    class="modal-class"
    title="Record Voice"
  >
    <div class="modal-wrapper">
      <!-- Modal HTML -->
      <div class="modal-dialog modal-confirm">
        <div class="modal-content">
          <div>
            <div class="icon-box">
              <i class="material-icons">&#xE5CD;</i>
            </div>
            <h4 class="modal-title w-100">Are you sure?</h4>
          </div>
          <div class="modal-body">
            <p>
              Do you really want to delete these comment? This process cannot be
              undone
            </p>
          </div>
          <div class="modal-footer justify-content-center">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              @click="$bvModal.hide('modal-' + id)"
            >
              Cancel
            </button>
            <button type="button" class="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  name: "DeleteConfirmation",
  props: {
    id: Number,
  },
};
</script>

<style scoped>
.modal-confirm {
  color: #636363;
  width: 400px;
}
.modal-confirm .modal-content {
  /* padding: 20px; */
  border-radius: 5px;
  border: none;
  text-align: center;
  font-size: 14px;
}
.modal-confirm h4 {
  text-align: center;
  font-size: 26px;
  margin: 10px 0 -10px;
}
.modal-confirm .close {
  position: absolute;
  top: -5px;
  right: -2px;
}
.modal-confirm .modal-body {
  color: #999;
}
.modal-confirm .modal-footer {
  border: none;
  text-align: center;
  border-radius: 5px;
  font-size: 13px;
}
.modal-confirm .modal-footer a {
  color: #999;
}
.modal-confirm .icon-box {
  width: 80px;
  height: 80px;
  margin: 0 auto;
  border-radius: 50%;
  z-index: 9;
  text-align: center;
  border: 3px solid #f15e5e;
}
.modal-confirm .icon-box i {
  color: #f15e5e;
  font-size: 46px;
  display: inline-block;
  margin-top: 13px;
}
.modal-confirm .btn,
.modal-confirm .btn:active {
  color: #fff;
  border-radius: 4px;
  background: #60c7c1;
  text-decoration: none;
  transition: all 0.4s;
  line-height: normal;
  min-width: 120px;
  border: none;
  min-height: 40px;
  border-radius: 3px;
  margin: 0 5px;
}
.modal-confirm .btn-secondary {
  background: #c1c1c1;
}
.modal-confirm .btn-secondary:hover,
.modal-confirm .btn-secondary:focus {
  background: #a8a8a8;
}
.modal-confirm .btn-danger {
  background: #f15e5e;
}
.modal-confirm .btn-danger:hover,
.modal-confirm .btn-danger:focus {
  background: #ee3535;
}

@media only screen and (max-width: 800px) {
  .modal-confirm {
    width: auto;
  }
}
</style>
