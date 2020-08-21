import axios from 'axios';

const state = {
    voices: []
}

const actions = {
    async fetchVoices({
        commit
    }) {
        const response = await axios.get("https://vikvok-anldg2io3q-ew.a.run.app/originalvoices");
        commit('setVoices', response.data)
    }
}

const mutations = {
    setVoices: (state) => (state.voices = [{
        "path": "https://storage.googleapis.com/original-voices/levioza-origin.wav",
        "name": "levioza"
    }, {
        "path": "http://soundfxcenter.com/movies/terminator/8d82b5_Terminator_Hasta_la_Vista_Baby_Sound_Effect.mp3",
        "name": "Terminator - Hasta la Vista Baby"
    }, {
        "name": "Harry Potter - Expecto Patronum",
        "path": "http://soundfxcenter.com/movies/harry-potter/8d82b5_Harry_Potter_Expecto_Patronum_Sound_Effect.mp3"
    }, {
        "path": "http://soundfxcenter.com/movies/300/8d82b5_This_Is_Sparta_Sound_Effect.mp3",
        "name": "300 - This Is Sparta!"
    }, {
        "name": "Terminator - I'll Be Back",
        "path": "http://soundfxcenter.com/movies/terminator/8d82b5_Terminator_I_ll_Be_Back_Sound_Effect.mp3"
    }])
}


const getters = {
    allVoices: (state) => state.voices,
    popularVoices: (state) => state.voices.slice(0, 3)
}

export default {
    state,
    mutations,
    actions,
    getters,
};