export const state = () => ({
  packages: [],
});

export const actions = {
  async getPackages({ commit }) {
    try {
      const response = await this.$axios.$get('/libraries');
      commit('setPackages', response);
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
};

export const mutations = {
  setPackages(state, packages) {
    state.packages = packages;
  },
};

export const getters = {
  packages: (s) => s.packages,
};
