<template>
  <div>
    <button
      class="open-modal trigger-modal-button"
      v-b-modal="'modal-' + voice.id"
    ></button>
    <b-modal
      :id="'modal-' + voice.id"
      class="modal-class"
      title="Record Voice"
      hide-footer="true"
    >
      <div class="modal-wrapper">
        <h3 class="">Press the button to record</h3>
        <div class="record-settings">
          <vue-record-audio
            :mode="recordMode.video"
            @stream="onStream"
            @result="onResult"
          />
        </div>

        <div v-if="recordedVoice">
          <audio :src="recordedVoice.src" controls />
        </div>
        <div>
          <button
            type="button"
            class="custom-button-recorder btn"
            v-if="recordedVoice"
            @click="removeRecord()"
          >
            Delete
          </button>
          <button
            type="button"
            class="custom-button-recorder btn"
            v-if="recordedVoice"
            @click="submitData()"
          >
            Submit
          </button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "VoiceRecorder",
  props: {
    voice: Object,
  },
  data() {
    return {
      recordMode: {
        audio: "hold",
        video: "press",
      },
      recordedVoice: null,
    };
  },
  methods: {
    removeRecord() {
      this.recordedVoice = null;
    },
    onStream(stream) {
      console.log("Got a stream object:", stream);
    },
    onResult(data) {
      this.recordedVoice = { src: window.URL.createObjectURL(data) };
    },
    submitData() {
      var url = "https://vikvok-anldg2io3q-ew.a.run.app/save-voice-function";
      axios.post(url, this.recordedVoice);
    },
  },
};
</script>

<style scoped>
.modal-class {
  background-color: #e36c74;
}
.custom-button-recorder {
  margin: 10px;
  background-color: #f8d5d7;
  border-radius: 15px;
}

.trigger-modal-button {
  outline: none;
}

.modal-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.open-modal {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-size: cover;
  background-position: center center;
  background-image: url("../../assets/images/record.png");
}

.modal-open footer {
  display: none;
}
</style>
