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
          <div class="h-100">
            <div class="reminder d-flex justify-content-center">
              <span class="status">Apple 上線</span>
            </div>
            <div
              class="user"
              :class="{
                remote: message.user.id !== currentUser.id,
                local: message.user.id === currentUser.id
              }"
              v-for="(message, index) in messages"
              :key="index"
            >
              <div
                class="d-flex align-items-end pb-3"
                v-if="message.user.id !== currentUser.id"
              >
                <img
                  class="avatar"
                  width="50px"
                  :src="message.user.avatar"
                  alt=""
                />
              </div>
              <div class="d-flex flex-column content">
                <div class="txt mb-0">
                  {{ message.msg }}
                </div>
                <div class="time">{{ message.date | time }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="chat-input d-flex justify-content-center">
          <input
            type="text"
            class="form-control flex-grow-1"
            placeholder="輸入訊息..."
            v-model.trim="content"
          />
          <button type="button" class="ms-3" @click.prevent="chat">
            <img src="./../assets/send.svg" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Toast } from './../utils/helpers'
  import Menu from './../components/Menu.vue'
  import Spinner from './../components/Spinner.vue'
  import { io } from 'socket.io-client'
  import { mapState } from 'vuex'
  import { timeFilter } from './../utils/mixins'

  export default {
    name: 'ChatRoom',
    components: {
      Menu,
      Spinner
    },
    data() {
      return {
        isLoading: false,
        socket: null,
        content: '',
        messages: []
      }
    },
    mixins: [timeFilter],
    computed: {
      ...mapState(['currentUser'])
    },
    methods: {
      socketConnect() {
        const socket = io('https://project-simple-twitter.herokuapp.com/')
        this.socket = socket
        this.socket.on('connect', () => {
          console.log('已連線')
        })
      },
      socketDisconnect() {
        this.socket.on('disconnect', () => {
          console.log('斷線')
        })
      },
      scrollToEnd() {
        let ele = document.querySelector('.dialogue')
        ele.scrollTop = ele.scrollHeight
      },
      chat() {
        if (this.content.length === 0) {
          Toast.fire({
            icon: 'warning',
            title: '不可空白'
          })
          return
        } else if (this.content.length > 0) {
          const { id, account, avatar, name } = this.currentUser
          const user = { id, account, avatar, name }
          this.socket.emit('public message', {
            user,
            msg: this.content
          })
          this.content = ''
        }
      },
      getNewMessage() {
        this.socket.on('public message', (data) => {
          this.messages.push(data)
          this.scrollToEnd()
        })
      }
    },
    mounted() {
      this.socketConnect()
      this.getNewMessage()
      this.scrollToEnd()
    },
    destroyed() {
      this.socketDisconnect()
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
    overflow-y: auto;
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
  .remote {
    display: flex;
    margin: 1rem;
  }
  .remote .txt {
    background: #e6ecf0;
    border-radius: 25px 25px 25px 0;
  }
  .remote .content {
    align-items: flex-start;
  }
  .local {
    display: flex;
    margin: 1rem;
    justify-content: flex-end;
  }
  .local .txt {
    background: #ff6600;
    color: white;
    border-radius: 25px 25px 0 25px;
  }
  .local .content {
    align-items: flex-end;
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
    border: none;
  }
</style>
