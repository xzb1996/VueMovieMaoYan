<template>
  <div class="page">
    <Header />
    <div id="content">
      <div class="movie_menu">
        <router-link to="/cityList" class="movie_menu_city" tag="div">
          <span>{{$store.state.city.cityName}}</span>
          <i class="iconfont">&#xe627;</i>
        </router-link>
        <ul class="movie_menu_switch">
          <router-link  tag="li" to="/movie/movienow">正在热映</router-link>
          <router-link tag="li" to="/movie/moviecoming">即将上映</router-link>
        </ul>
        <router-link tag="div" to="/search" class="movie_meun_search">
          <i class="iconfont">&#xe613;</i>
        </router-link>
      </div>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>




<script>
export default {
  name: "Movie"
};
</script>

<style>
.page {
  height: 100%;
}
/*content*/
#content {
  position: absolute;
  width: 100%;
  height: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
/*movie_menu*/
#content .movie_menu {
  width: 100%;
  height: 0.9rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.4rem;
  border: 1px solid #e6e6e6;
}
#content .movie_menu .movie_menu_city span {
  font-size: 0.3rem;
}

#content .movie_menu .movie_menu_city i {
  font-size: 0.3rem;
}
#content .movie_menu .movie_meun_search i {
  font-size: 0.4rem;
  font-weight: 900;
  color: #e54847;
}
#content .movie_menu .movie_menu_switch {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
#content .movie_menu .movie_menu_switch li {
  height: 100%;
  line-height: 0.9rem;
  padding: 0 0.2rem;
  font-size: 0.3rem;
}

#content .movie_menu .movie_menu_switch .router-link-active {
  color: #ef4238;
  border-bottom: 2px #ef4238 solid;
}

/*movie_body*/
#content .movie_body {
  padding-bottom: 1rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  overflow-x: hidden;
}
#content .movie_body .movie_item {
  padding: 0.2rem 0;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #ccc;
}
#content .movie_body .movie_item .movie_item_pic {
  width: 1.28rem;
  height: 1.8rem;
}
#content .movie_body .movie_item .movie_item_pic img {
  width: 100%;
  height: 100%;
}
#content .movie_body .movie_item .movie_item_info {
  margin-left: 0.2rem;
  flex: 1;
  height: 100%;
}
#content .movie_body .movie_item .movie_item_info h2 {
  font-size: 0.34rem;
  line-height: 0.5rem;
  width: 3rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#content .movie_body .movie_item .movie_item_info p {
  font-size: 0.26rem;
  line-height: 0.45rem;
  color: #666;
  width: 4rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
#content .movie_body .movie_item .movie_item_info p .grade {
  font-weight: 700;
  color: #faaf00;
  font-size: 0.3rem;
}

#content .movie_body .movie_item .movie_item_btn {
  width: 1rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #fff;
  border-radius: 4px;
  font-size: 0.26rem;
  cursor: pointer;
}
#content .movie_body .movie_item .asale {
  background-color: #f03d37;
}
#content .movie_body .movie_item .ticket {
  background-color: #3c9fe6;
}
</style>