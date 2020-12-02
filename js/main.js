const app = new Vue ({

  el: "#root",

  data: {

    albums: []

  },

  mounted: function () {

    axios
      .get ("https://flynn.boolean.careers/exercises/api/array/music")
      .then (got => {
        this.albums = got.data.response
      });

  },

});
