<script setup>
import { ref } from "vue";
// import { computed, ref, watch } from "vue";

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  options: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(["update:modelValue"]);

const inputRef = ref(null);

const isShowSolid = ref(false);

const isSelect = ref(false);

const isShowPw = ref(false);

const styles = ref({ width: "100px" });

// const mailSuffix = computed(() => {
//   if (!props.options.suffix) return [];
//   return props.options.suffix.map((suffix) => {
//     const emailName = props.modelValue.split("@")[0];
//     return emailName + suffix;
//   });
// });

const updateValue = (value) => {
  emit("update:modelValue", value);
};

watch(
  () => props.modelValue,
  () => {
    if (isSelect.value) return;
    isShowSolid.value = props.modelValue.length !== 0;
  }
);
</script>

<template>
  <div relative w-100px h-30px>
    <input
      :type="isShowPw.value ? 'text' : 'password'"
      h-full
      pl-10px
      :value="modelValue"
      border="1px gray-4 solid"
      class="password"
      @input="updateValue"
    />
    <div
      class="show-pw"
      :class="{ 'close-eye': isShowPw }"
      @click="isShowPw.value = !isShowPw.value"
    />
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

.close-eye {
  border: 1px solid grey;
}

.close-eye::after {
  background-color: red;
}

close-eye::before {
  content: "";
  top: 5px;
  right: -3px;
  position: absolute;
  width: 20px;
  height: 2px;
  background-color: red;
}
</style>
