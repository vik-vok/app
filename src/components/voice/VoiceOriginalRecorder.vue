<template>
  <div>
    <template>
      <div class="container">
        <div class="large-12 medium-12 small-12 cell">
          <label
            >File
            <input type="file" id="file" ref="file" />
          </label>
          <input type="text" />
          <button v-on:click="submitFile()">Submit</button>
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
      data: "",
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
