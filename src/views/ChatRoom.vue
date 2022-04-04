<template>
  <div class="container-fluid vh-100">
    <div class="row h-100">
      <div class="col-3 menu">
        <Menu />
      </div>
      <div class="col-3 d-flex flex-column" id="userOnline">
        <Spinner v-if="isLoading" />
        <div class="title menu-text w-100">上線使用者(1)</div>
        <div class="user-card" v-for="index in 5" :key="index">
          <!-- TODO:連結到使用者 -->
          <a>
            <img
              class="avatar"
              width="50px"
              src="https://img.yxwoo.com:4433/uploads/images/xiaz/2020/0407/1586223138482.jpg"
              alt=""
            />
          </a>
          <span class="text-name me-2">Apple</span>
          <span class="text-account">@Apple</span>
        </div>
      </div>
      <div class="col-5 d-flex flex-column" id="chatroom">
        <Spinner v-if="isLoading" />
        <div class="title menu-text">公開聊天室</div>
        <div
          class="dialogue d-flex flex-column justify-content-end flex-grow-1"
        >
          <div class="reminder d-flex justify-content-center">
            <span class="status">Apple 上線</span>
          </div>
          <div class="user remote d-flex m-3">
            <div class="d-flex align-items-end pb-3">
              <img
                class="avatar"
                width="50px"
                src="https://img.yxwoo.com:4433/uploads/images/xiaz/2020/0407/1586223138482.jpg"
                alt=""
              />
            </div>
            <div class="d-flex flex-column">
              <div class="txt mb-0">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </div>
              <div class="time">下午4:21</div>
            </div>
          </div>
          <div class="user local d-flex flex-column m-3 align-items-end">
            <div class="txt mb-0">
              How are you?How are you?How are you?How are you?How are you?How
              are you?How are you?How are you?How are you?How are you?How are
              you?
            </div>
            <div class="time">下午6:05</div>
          </div>
        </div>
        <div class="chat-input d-flex justify-content-center">
          <input
            type="text"
            class="form-control flex-grow-1"
            placeholder="輸入訊息..."
          />
          <button type="submit" class="ms-3">
            <img src="./../assets/send.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Menu from './../components/Menu.vue'
  import Spinner from './../components/Spinner.vue'

  export default {
    name: 'ChatRoom',
    components: {
      Menu,
      Spinner
    },
    data() {
      return {
        isLoading: false
      }
    }
  }
</script>

<style scoped>
  #userOnline {
    overflow-y: auto;
    max-height: 100vh;
    padding-left: 0;
    padding-right: 0;
    border-left: 1px solid #e6ecf0;
    border-right: 1px solid #e6ecf0;
    max-width: 600px;
    overflow: auto;
  }
  #userOnline::-webkit-scrollbar {
    display: none;
  }
  #chatroom {
    height: 100vh;
    padding-left: 0;
    padding-right: 0;
    border-right: 1px solid #e6ecf0;
  }
  .title {
    padding-left: 20px;
    height: 55px;
    line-height: 55px;
    border-bottom: 1px solid #e6ecf0;
  }
  .user-card {
    padding: 10px 15px;
    border-bottom: 1px solid #e6ecf0;
  }
  .user-card:hover {
    cursor: pointer;
    background: rgb(250, 250, 250);
  }
  .dialogue {
    padding: 0.5rem 0;
  }
  .reminder {
    margin: 20px;
  }
  .reminder .status {
    background: #e5e5e5;
    border-radius: 50px;
    padding: 7px 14px;
    color: #657786;
  }
  .txt {
    padding: 10px 15px;
    max-width: 400px;
  }
  .remote .txt {
    background: #e6ecf0;
    border-radius: 25px 25px 25px 0;
  }
  .local .txt {
    background: #ff6600;
    color: white;
    border-radius: 25px 25px 0 25px;
  }
  .time {
    color: #657786;
    font-size: 13px;
  }
  .chat-input {
    margin: 0;
    padding: 1rem;
    border-top: 1px solid #e6ecf0;
    height: 4rem;
  }
  .chat-input input {
    background-color: #e6ecf0;
    border-radius: 50px;
    height: 2rem;
  }
</style>
