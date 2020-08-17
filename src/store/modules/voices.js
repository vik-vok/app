import axios from 'axios';

const state = {
    voices: []
}

const actions = {
    async fetchVoices({commit}) {
        const response = await axios.get("https://vikvok-anldg2io3q-ew.a.run.app/originalvoices");
        commit('setVoices', response.data)
    }
}

const mutations = {
    setVoices: (state, voices) => (state.voices = voices)
}


const getters = {
    allVoices: (state) => state.voices
}

export default {
    state,
    mutations,
    actions,
    getters,
};