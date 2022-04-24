Vue.component('number-led', {
	props: ['a0','a1','a2','a3','a4','a5','a6','a7'],
	template: `
        <div class="num_led">
          <div class="horizontal" v-bind:class="{ selected : a0, unselected: !a0 }" @click="$emit('update:a0', !a0)"></div>
          <div class="verticalcontainer">
            <div class="vertical" v-bind:class="{ selected : a5, unselected: !a5 }" @click="$emit('update:a5', !a5)"></div>
            <div class="empty"></div>
            <div class="vertical" v-bind:class="{ selected : a1, unselected: !a1 }" @click="$emit('update:a1', !a1)"></div>
          </div>
          <div class="horizontal" v-bind:class="{ selected : a6, unselected: !a6 }" @click="$emit('update:a6', !a6)"></div>
          <div class="verticalcontainer">
            <div class="vertical" v-bind:class="{ selected : a4, unselected: !a4 }" @click="$emit('update:a4', !a4)"></div>
            <div class="empty"></div>
            <div class="vertical" v-bind:class="{ selected : a2, unselected: !a2 }" @click="$emit('update:a2', !a2)"></div>
          </div>
          <div class="horizontal" v-bind:class="{ selected : a3, unselected: !a3 }" @click="$emit('update:a3', !a3)"></div>
        </div>
	`
})
