<script setup>
import { RouterLink } from 'vue-router'

</script>

<template>
  <section class="
  section
  p-0
  m-0">
    <figure class="
    image 
    is-3by1">
      <img 
      class=""
      src="https://res.cloudinary.com/dlwq8no9s/image/upload/v1683989448/photo-1680792563719-288027b2a090_wqysjb.jpg">
    </figure>
  </section>
  <h2 class="
  has-text-centered
  p-4
  title
  is-2
  has-text-success-light
  has-background-link">Main pubs</h2>
  <main>
    <section class="">
     <div class="
     box
     p-6 m-6
     has-background-info-light">
          <article class="media p-5">
            <div class="media-left">
              <figure class="image is-64x64">
                <img src="https://res.cloudinary.com/dlwq8no9s/image/upload/v1683988736/SpanishPic_n5lcbe.jpg" alt="Image">
                <!--128x128-->
              </figure>
              <section>
                <p class="
                is-size-6
                has-text-weight-bold
                has-text-info
                mt-2
                mb-1
                ">Spanish</p>
                <span class="
                has-text-info
                pt-2">
                  <date>14/05/23</date>
                </span>
              </section>
            </div>
            <div class="media-content">
              <div class="
              content 
              ">
                <h3 class="
                title is-4">
                The 6 most used verbs in Spanish
                </h3>
                <br />
                <p class="content">
                  Find out which are the most used verbs in Spanish,
                  specifically in Spain and Mexico.
                </p>
                <h4 
                  class="
                    title 
                    is-4
                    mt-6">
                    <RouterLink 
                    to="/spanish/001"
                    class="has-text-success">
                      Read it...
                    </RouterLink>
                  </h4>
              </div>
            </div>
          </article>
        </div>
    </section>
  </main>
</template>
