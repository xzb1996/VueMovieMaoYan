<template>
  <div>
    <Header :title="name">
      <template v-slot>
        <v-touch class="back" tag="div" @tap="handleBack">&lt; 返回</v-touch>
      </template>
    </Header>
    <div id="content">
      <div class="detail_body">
        <div class="detail_movie_bg" :style="{background:'url('+detailMovie.albumImg+')'}"></div>
        <div class="detail_movie_content">
          <div class="detail_movie_content_bg">
            <img :src="detailMovie.img|ToImg('128.180')" />
          </div>
          <div class="detail_movie_content_info">
            <h2>{{detailMovie.nm}}</h2>
            <p>{{detailMovie.enm}}</p>
            <p>{{detailMovie.pubDesc}}</p>
            <p>{{detailMovie.cat}}</p>
            <p>
              <span>{{detailMovie.src}}</span>
              <span>/{{detailMovie.dur}}分钟</span>
            </p>
            <p>主演:{{detailMovie.star}}</p>
          </div>
        </div>
      </div>
      <div class="detail_info">
        <p>{{detailMovie.dra}}</p>
      </div>
      <div class="detail_movie_performer">
        <xzb-BScroll>
          <ul>
            <li v-for="(item,index) in detailMovie.photos" :key="index" class="star_photo">
              <div>
                <img :src="item|ToImg('130.180')" />
              </div>
            </li>
          </ul>
        </xzb-BScroll>
      </div>
    </div>
  </div>
</template>

<script>
import { detail_api } from "api/index";
export default {
  name: "Detail",
  props: ["id", "name"],
  async created() {
    let data = await detail_api(this.id);
    console.log(data.data.detailMovie);
    this.detailMovie = data.data.detailMovie;
  },
  data() {
    return {
      detailMovie: {}
    };
  },
  methods: {
    handleBack() {
      this.$router.back();
    }
  }
};
</script>

<style>
.back {
  position: absolute;
  left: 0.3rem;
  font-size: .3rem;
}
/*content*/
#content {
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  overflow: hidden;
}

/*detail_body*/

.detail_body {
  position: relative;
  height: 4rem;
  width: 100%;
  overflow: hidden;
}
.detail_body .detail_movie_bg {
  width: 100%;
  height: 100%;
  background-size: cover;
  filter: blur(30px);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
}
.detail_body .detail_movie_content {
  position: absolute;
  width: 100%;
  z-index: 2;
  left: 0;
  top: 0;
  display: flex;

  align-items: center;
}
.detail_body .detail_movie_content .detail_movie_content_bg {
  width: 2rem;
  height: 3rem;
  margin: 0.4rem;
}
.detail_body .detail_movie_content .detail_movie_content_bg > img {
  width: 100%;
  height: 100%;
  border: 4px solid #ccc;
}
.detail_body .detail_movie_content .detail_movie_content_info {
  color: #fff;
}
.detail_body .detail_movie_content .detail_movie_content_info h2 {
  font-size: 0.4rem;
  font-style: normal;
  line-height: 0.8rem;
}
.detail_body .detail_movie_content .detail_movie_content_info p {
  font-size: 0.26rem;
  line-height: 0.46rem;
  color: #ccc;
}

#content .detail_info {
  padding: 0.1rem;
  font-size: 0.3rem;
}
#content .detail_movie_performer {
  position: relative;
  width: 100%;
  margin: 0.4rem;
}

#content .detail_movie_performer ul .star_photo {
  width: 1.3rem;
  height: 1.8rem;
  margin: 0.1rem;
}

#content .detail_movie_performer ul .star_photo img {
  width: 1.3rem;
  height: 1.8rem;
}
#content .detail_movie_performer ul {
  display: flex;
  width: max-content;
}
#content .detail_movie_performer > ul li {
  margin-right: 0.4rem;
  text-align: center;
  flex-shrink: 0;
}

#content .detail_movie_performer > ul li div {
  margin-bottom: 0.1rem;
}
#content .detail_movie_performer > ul li p {
  fonr-size: 0.2rem;
  line-height: 0.3rem;
}
</style>