import Vue from 'vue';
import Vuex from 'vuex';
import user from '../models/user'
import { auth } from './auth.module';
import {cinemaChosen} from "@/store/cinemaChoose.module";
import createPersistedState from "vuex-persistedstate";
import {sessionChosen} from "@/store/session.module";


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        user,
        cinemaChosen,
        sessionChosen,
    },
    plugins: [createPersistedState()]
});