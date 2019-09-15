<template>
  <div class="movieWrapper">
    <xzb-BScroll>
    <div class="movie_body">
      <div class="movie_item" v-for="(item,index) in comingList" :key="index">
        <div class="movie_item_pic">
          <img :src="item.img | ToImg('128.180')" />
        </div>
        <div class="movie_item_info">
          <h2>{{item.nm}}</h2>
          <p>
            <span>{{item.wish}}</span>人想看
          </p>
          <p>
            主演：
            <span>{{item.star}}</span>
          </p>
          <p>
            <span>{{item.rt}}</span>上映
          </p>
        </div>
        <div
          :class="item.showst==4?'movie_item_btn ticket':'movie_item_btn wsee'"
        >{{item.showst==4?'预售':'想看'}}</div>
      </div>
    </div>
    </xzb-BScroll>
  </div>
</template>

<script>
import { movie_coming_api } from "api/index.js";
import { mapState } from "vuex";
export default {
  name: "MovieCinema",
  async created() {
    let data = await movie_coming_api();
    this.comingList = data.data.comingList;
    console.log(this.comingList);
  },
  data() {
    return {
      comingList: []
    };
  }
};
</script>


<style>
.movieWrapper {
  height: 100%;
  overflow: auto;
}
.wsee {
  background: #faaf00;
}
</style>