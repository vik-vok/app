// import axios from 'axios';

const state = {
    voices: [{
            id: 1,
            name: "voice1",
            path: "path1"
        },
        {
            id: 2,
            name: "voice2",
            path: "path2"

        },
        {
            id: 3,
            name: "voice3",
            path: "path3"
        }
    ]
}
const getters = {
    allVoices: (state) => state.voices
}

const actions = {}

const mutations = {}

export default {
    state,
    mutations,
    actions,
    getters,
};