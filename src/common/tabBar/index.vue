<template>
  <div id="footer">
        <ul>
            <router-link 
            v-for="(item,index) in navs"
            :key="index"
            :to="item.path"
            tag="li"
            >
            <i class="iconfont" v-html="item.icon"></i>
            <span>{{item.text}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
export default {
  name: "tabBar",
  data() {
    return {
      navs: [
        {
          icon: "&#xe717",
          text: "电影",
          path: "/movie"
        },
        {
          icon: "&#xe61d",
          text: "影院",
          path: "/cinema"
        },
        {
          icon: "&#xe605",
          text: "我的",
          path: "/mine"
        }
      ]
    };
  }
};
</script>

<style>
#footer {
  width: 100%;
  height: 1rem;
  position: fixed;
  left: 0;
  bottom: 0;
  background: #fff;
  border-top: 1px solid #ccc;
}

#footer ul,
#footer ul li {
  width: 100%;
  height: 100%;
}
#footer ul {
  display: flex;
}
#footer ul li {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.3rem;
}
#footer ul li i {
  font-size: 0.4rem;
}

#footer ul .router-link-active {
  color: #c33;
}
</style>