const { createApp } = Vue;

createApp({
  data() {
    return {
      dischi: [],
      disco: null,
    };
  },
  //   methods: {
  //     getHotelInfo(index) {
  //       axios
  //         .get("http://localhost:8888/php-hotel/api.php", {
  //           params: {
  //             index: index,
  //           },
  //         })
  //         .then((res) => {
  //           this.hotel = res.data;
  //         });
  //     },
  //   },
  created() {
    axios.get("http://localhost/php-dischi-json/api.php").then((res) => {
      this.dischi = res.data;
    });
  },
}).mount("#app");
