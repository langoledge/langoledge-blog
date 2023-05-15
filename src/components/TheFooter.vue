<script>
  export default {
    name: 'TheFooter',
  }
</script>
<template>
<footer class="
  footer 
  m-0
  p-0
  is-medium
  has-background-primary-light
  is-flex
  is-align-items-center
  is-justify-content-space-around">
    <section class="
    
    ">
      <div class="tags has-addons">
        <span class="tag is-success">
          <a
          href="https://docs.google.com/document/d/1M1y5f0JqC7pIS1iRrB5oo59tdxGad8NugKK1LaZCipI/edit?usp=drivesdk">&copy;</a>
        </span>
        <span class="tag is-info">Langoledge - 2023</span>
      </div>
      <div class="content">
        <span class="tag is-success">
          <a
          href="https://docs.google.com/document/d/1fPW-_h3En1ByeoVMN7-v_9vjpmZzW-lHTSf6xiAgEdU/edit?usp=drivesdk">
            Politicy and Privacity
          </a>
        </span>
      </div>
      <div class="tags has-addons">
        <span class="tag is-success">
          <a href="">
            Terms and Conditions
          </a>
        </span>
      </div>
    </section>
    <section class="">
      <div class="
      section
      is-small
      has-text-weight-bold
      is-size-5">
        <div class="
        section
        has-text-white">
          <p 
          class="has-text-info"
          text-baseText>
           Tell us your experience:
          </p>
          <ORate 
          class="
          button
          is-large
          is-info
          "
          v-model="val" color="teal" void-color="error" />
        </div>
      </div>
    </section>
</footer>
</template>
