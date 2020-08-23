import axios from 'axios';
import api from './APIconfig';

const state = {
    user: null
}

const actions = {
    async fetchUser({
        commit
    }, user) {
        // Change user value
        if (user) {
            const response = await axios.get(api.path + "/users/" + user.uid);
            commit("setUser", response.data);
        } else {
            commit("setUser", null);
        }
    },
    async registerUser({
        commit
    }, user) {        
        var data = {
            id: user.uid,
            username: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
            emailVerified: user.emailVerified,
        }
        await axios.post(api.path + "/users", data);
        commit;
    }
}

const mutations = {
    setUser: (state, user) => (state.user = user)
}


const getters = {
    user: (state) => state.user
}

export default {
    state,
    mutations,
    actions,
    getters,
};