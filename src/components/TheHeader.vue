<script scoped>

  export default {
    methods: {
    openMenu() {
      this.$refs.dropMenuRef
        .classList
        .toggle('is-active')
    }
    },
    name: 'TheHeader',
  }
</script>

<template>
  <header
    class="
    is-small
    is-flex 
    is-align-items-center 
    is-justify-content-space-around
    section
    has-background-primary
    is-medium">
      <figure class="
      image 
      is-128x128
      is-2by5">
        <img 
        style="transform: scale(1.3)"
        class=""
        src="https://res.cloudinary.com/dlwq8no9s/image/upload/v1683654497/mainLogo_n5rgkl.png">
      </figure>
        <div 
        style="transform: scale(1.3); z-index: 3000;"
        class="
        dropdown 
        is-right
        has-text-weight-bold
        "
        ref="dropMenuRef">
          <div class="dropdown-trigger">
            <button 
            class="
            button
            is-text
            m-4
            is-clickable
            is-large
            is-primary"
            >
              <span 
              @click="openMenu()"
              class="
              ">
                <o-switch 
                v-model="lightMv" 
                light
                size="lg" 
                o="success" />
              </span>
            </button>
          </div>
          <div 
          class="dropdown-menu"
          id="dropdown-menu" >
            <div
            class="
            dropdown-content
            has-background-primary">
              <RouterLink to="/" class="
              dropdown-item
              has-text-info
              p-4">
                Home
              </RouterLink>
              <hr class="dropdown-divider">
              <RouterLink to="/about" class="
              dropdown-item
              has-text-info
              p-4">
                About
              </RouterLink>
              <hr class="dropdown-divider">
              <details class="
              p-4
              ">
              <summary
              class="
              has-text-white">
                Languages
              </summary>
              <RouterLink to="/spanish" class="
              dropdown-item
              has-text-info
              mt-4
              p-2
              ">
                Spanish
              </RouterLink>
              <hr />
              <RouterLink to="/" class="
              dropdown-item
              has-text-info
              mt-4
              p-2
              ">
                ...
              </RouterLink>
              <hr />
            </details>
          </div>
        </div>
      </div>
  </header>
</template>