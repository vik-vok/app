import axios from 'axios';

const state = {
    voices: []
}

const actions = {
    async fetchVoices() {
        const response = await axios.get("https://vikvok-anldg2io3q-ew.a.run.app/Comments");

        console.log(response.data);
    }
}

const getters = {
    allVoices: (state) => state.voices
}


const mutations = {}

export default {
    state,
    mutations,
    actions,
    getters,
};