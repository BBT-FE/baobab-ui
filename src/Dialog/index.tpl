<Modal v-model="visible" anim="fade" zIndex="zIndex" bgColor="rgba(0,0,0, .6)">
  <div class="baobab-dialog">
    <transition name="baobab-anim-scale" @after-leave="afterLeave">
      <div class="baobab-dialog--main" v-show="visible" :style="{'width': width}">
        <div class="baobab-dialog--bd">
          <h3 v-show="title" class="baobab-dialog--title">{{title}}</h3>
          <div class="baobab-dialog--content" v-show="content" :style="{paddingTop: title ? '28px' : 0}">
            <div class="baobab-dialog--text">{{content}}</div>
          </div>
          <div class="baobab-dialog--content" v-show="isPrompt" :style="{paddingTop: title ? '12px' : 0}">
            <input v-model="promptVal" class="baobab-dialog--prompt">
          </div>
        </div>
        <div class="baobab-dialog--buttons" :class="{'baobab-dialog--separator': buttons.length === 2}">
          <a
            v-for="btn in buttons"
            class="baobab-dialog--button"
            :style="{'width': buttons.length === 2 ? '48%' : '100%', 'backgroundColor': buttons.length === 1 ? '#2068D1': '', 'color': buttons.length === 1 ? '#fff' : ''}"
            href="javascript:;"
            @click="handleClick(btn)"
          >
            {{btn.title}}
          </a>
        </div>
      </div>
    </transition>
  </div>
</Modal>
