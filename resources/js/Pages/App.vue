<template>
  <div>
   <!--  <InputText v-model="text" /> -->
    <Button label="Greet" icon="pi pi-user"></Button>
    <i icon="pi pi-align-right">BENTLEY BRASIL</i>
    <!-- <Toast /> -->
    <!-- {{ text }} -->
    <!--  <FloatLabel></FloatLabel> -->
    <float-label />
  </div>
</template>

<script>
/* import { defineComponent, ref } from "vue"; */
/* import { useToast } from "primevue/usetoast"; */
import FloatLabel from "../Components/floatlabel.vue";

/* export default defineComponent({
  setup() {
    const toast = useToast();
    const text = ref("");
    const greet = () => {
      toast.add({ severity: "info", summary: "Hello", detail: text });
    };

    return {
      text,
      greet,
    };
  },
}); */

/* export default {
  data() {
    return {
      text: null,
    };
  },
  methods: {
    greet() {
      this.$toast.add({ severity: "info", summary: "Hello", detail: this.text });
    },
  },
}; */

export default {
  components: {
    FloatLabel,
  },
};
</script>

<!-- <style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
