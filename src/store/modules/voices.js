import axios from 'axios';

const state = {
    voices: [],
    voice: null
}

const actions = {
    async fetchVoices({
        commit
    }) {
        const response = await axios.get("https://vikvok-anldg2io3q-ew.a.run.app/originalvoices");
        commit('setVoices', response.data)
    },
    async fetchOneVoice({
        commit , id
    }){
        const response = await axios.get("https://vikvok-anldg2io3q-ew.a.run.app/originalvoices/"+id);
        commit('setVoices', response.data)
    }
}

const mutations = {
    setVoices: (state, voices) => (state.voices = voices),
    setOneVoice: (state, voice) => (state.voice = voice)
}


const getters = {
    allVoices: (state) => state.voices,
    popularVoices: (state) => state.voices.slice(0, 3),
    voice: (state) => state.voice
}

export default {
    state,
    mutations,
    actions,
    getters,
};