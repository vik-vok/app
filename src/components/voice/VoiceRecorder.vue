<template>
  <div>
    <button
      class="open-modal trigger-modal-button"
      v-b-modal="'modal-' + voice.originalVoiceId"
    ></button>
    <b-modal
      :id="'modal-' + voice.originalVoiceId"
      :hide-footer="true"
      class="modal-class"
      title="Record Voice"
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

        <div v-if="recordedVoice" class="recorded-voice">
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
import { mapGetters } from "vuex";
import store from "@/store";

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
      data: null,
    };
  },
  computed: {
    ...mapGetters({ user: "user", fetched: "fetched" }),
  },
  methods: {
    removeRecord() {
      this.recordedVoice = null;
    },
    onStream(stream) {
      console.log("Got a stream object:", stream);
    },
    onResult(data) {
      this.data = data;
      this.recordedVoice = { src: window.URL.createObjectURL(data) };
    },
    submitData() {
      var fd = new FormData();
      var filename =
        this.voice.originalVoiceId + "--" + new Date().toISOString();

      fd.append("audio_data", this.data, filename);
      fd.append("parentId", this.voice.originalVoiceId);
      fd.append("userId", this.user.userId);

      store.dispatch("addRecordedVoice", { fd: fd, user: this.user });
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
  background-color: #f8bace;
  color: white;
  border-radius: 15px;
}

.custom-button-recorder:hover {
  background-color: #f8d5d7;
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

.vue-audio-recorder {
  background-color: #f8bace;
}

.vue-audio-recorder:hover {
  background-color: #f8d5d7;
}

.recorded-voice {
  margin: 40px 0 10px 0;
}
</style>
