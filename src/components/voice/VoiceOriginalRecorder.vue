<template>
  <div>
    <template>
      <div class="container">
        <div class="upload-voice-container large-12 medium-12 small-12 cell">
          <label class="custom-file-upload">
            Attach audio file
            <input type="file" id="file" ref="file" />
          </label>

          <input type="text" placeholder="Name" v-model="name" />
          <br />
          <input type="text" placeholder="Avatar" v-model="avatar" />
          <br />
          <button class="upload-btn" v-on:click="submitFile()">Upload</button>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "VoiceOriginalRecorder",
  data() {
    return {
      name: "",
      file: "",
      avatar: "",
    };
  },
  methods: {
    ...mapActions(["registerUser", "addVoice"]),

    submitFile() {
      this.file = this.$refs.file.files[0];

      var fd = new FormData();
      var filename = this.name + "--" + new Date().toISOString();

      fd.append("audio_data", this.file, filename);
      fd.append("avatar", this.avatar);
      fd.append("name", this.name);
      fd.append("userId", this.user.userId);

      this.addVoice(fd);
    },
  },
  computed: {
    ...mapGetters({ user: "user", fetched: "fetched" }),
  },
};
</script>

<style>
.upload-voice-container input {
  padding: 12px 20px 12px 50px;
  border: 1px solid #d2d8d8;
  width: 100%;
  margin: 0 0 15px 0;
  border-radius: 1.5em;
}

.upload-btn {
  margin: 10px;
  background-color: #f8bace;
  color: white;
  border-radius: 50px;
  border: 1px solid transparent;
  padding: 0.375rem 1.75rem;
  font-size: 1rem;
  line-height: 2.3;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  text-align: center;
}

input[type="file"] {
  display: none;
}

.custom-file-upload {
  margin-bottom: 15px;
  background-color: #f8bace;
  color: white;
  border-radius: 50px;
  border: 1px solid transparent;
  padding: 12px 20px 12px 20px;
  font-size: 1rem;
  line-height: 1.5;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  text-align: center;
}
.modal-header {
  padding: 1rem calc(1rem + 15px) !important;
}

.upload-voice-container {
  text-align: center;
}
</style>
