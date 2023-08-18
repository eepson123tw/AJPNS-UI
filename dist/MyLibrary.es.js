import { openBlock as r, createElementBlock as d, Fragment as p, createElementVNode as e, pushScopeId as _, popScopeId as g, createTextVNode as u } from "vue";
const v = (t, l) => {
  const a = t.__vccOpts || t;
  for (const [o, c] of l)
    a[o] = c;
  return a;
}, s = (t) => (_("data-v-cf9a8be1"), t = t(), g(), t), m = /* @__PURE__ */ s(() => /* @__PURE__ */ e("h2", null, [
  /* @__PURE__ */ u(" Image Upload "),
  /* @__PURE__ */ e("small", null, "with preview")
], -1)), f = { class: "container" }, h = { class: "jpg-upload" }, w = { class: "jpg-file-upload" }, y = /* @__PURE__ */ s(() => /* @__PURE__ */ e("label", { for: "imageUpload" }, null, -1)), S = /* @__PURE__ */ s(() => /* @__PURE__ */ e("div", { class: "jpg-preview" }, [
  /* @__PURE__ */ e("div", {
    id: "imagePreview",
    style: { "background-image": "url(https://fakeimg.pl/250/)" }
  })
], -1)), b = {
  __name: "SvgPreview",
  setup(t) {
    function l(o) {
      a(o.target.files[0]);
    }
    function a(o) {
      if (o) {
        const c = document.querySelector("#imagePreview"), n = new FileReader();
        n.readAsDataURL(o), n.onload = (i) => {
          c.style.backgroundImage = `url(${i.target.result})`, console.log(i.target.result);
        };
      }
    }
    return (o, c) => (r(), d(p, null, [
      m,
      e("div", f, [
        e("div", h, [
          e("div", w, [
            e("input", {
              type: "file",
              id: "imageUpload",
              accept: ".png, .jpg, .jpeg",
              onChange: l
            }, null, 32),
            y
          ]),
          S
        ])
      ])
    ], 64));
  }
}, I = /* @__PURE__ */ v(b, [["__scopeId", "data-v-cf9a8be1"]]);
export {
  I as SvgPreview
};
