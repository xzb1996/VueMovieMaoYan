<template>
  <div class="movieWrapper">
    <xzb-BScroll>
      <div class="movie_body">
        <v-touch
          class="movie_item"
          v-for="(item,index) in movieList"
          :key="index"
          @tap="handleToDetail(item.id,item.nm)"
        >
          <div class="movie_item_pic">
            <img :src="item.img | ToImg('128.120')" />
          </div>
          <div class="movie_item_info">
            <h2>{{item.nm}}</h2>
            <p>
              观众评分:
              <span class="grade">{{item.sc}}</span>
            </p>
            <p>
              主演：
              <span>{{item.star}}</span>
            </p>
            <p>
              <span>{{item.showInfo}}</span>
            </p>
          </div>
          <div
            :class="item.globalReleased?'movie_item_btn asale':'movie_item_btn ticket'"
          >{{item.globalReleased?'购票':'预售'}}</div>
        </v-touch>
      </div>
    </xzb-BScroll>
  </div>
</template>

<script>
import { movie_now_api } from "api/index";
import { mapState } from "vuex";
export default {
  name: "MovieNow",
  async created() {
    let data = await movie_now_api(this.cityId);
    this.movieList = data.data.movieList;
    console.log(this.movieList);
  },
  async activated() {
    if (this.pageId != this.cityId) {
      let data = await movie_now_api(this.cityId);
      this.movieList = data.data.movieList;
      this.pageId = this.cityId;
    }
  },
  data() {
    return {
      movieList: [],
      pageId: -1
    };
  },
  methods: {
    handleToDetail(id,name) {
      console.log(id,name);
      this.$router.push({name:"detail",params:{id,name}})
    }
  },
  computed: {
    ...mapState({
      cityId: state => state.city.cityId
    })
  }
};
</script>

<style>
.movieWrapper {
  height: 100%;
  overflow: auto;
}
</style>