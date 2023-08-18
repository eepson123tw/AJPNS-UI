import { ref as _, openBlock as s, createElementBlock as o, createElementVNode as i, normalizeClass as S, useSlots as x, computed as h, Fragment as v, renderList as f, normalizeStyle as w, toDisplayString as k, renderSlot as g } from "vue";
const b = (a, e) => {
  const n = a.__vccOpts || a;
  for (const [u, r] of e)
    n[u] = r;
  return n;
}, V = {
  relative: "",
  "w-100px": "",
  "h-30px": ""
}, M = ["type", "value"], E = {
  __name: "MEmailInput",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: e }) {
    const n = a;
    _(null);
    const u = _(!1), r = _(!1), c = _(!1);
    _({ width: "100px" });
    const t = (p) => {
      e("update:modelValue", p);
    };
    return watch(
      () => n.modelValue,
      () => {
        r.value || (u.value = n.modelValue.length !== 0);
      }
    ), (p, l) => (s(), o("div", V, [
      i("input", {
        type: c.value.value ? "text" : "password",
        "h-full": "",
        "pl-10px": "",
        value: a.modelValue,
        border: "1px gray-4 solid",
        class: "password",
        onInput: t
      }, null, 40, M),
      i("div", {
        class: S(["show-pw", { "close-eye": c.value }]),
        onClick: l[0] || (l[0] = (d) => c.value.value = !c.value.value)
      }, null, 2)
    ]));
  }
}, A = /* @__PURE__ */ b(E, [["__scopeId", "data-v-aa53a3aa"]]);
const I = { class: "vue-pure-table" }, P = { id: "columns" }, T = {
  id: "rows",
  class: "flex-col"
}, $ = { key: 0 }, O = {
  __name: "MPureTable",
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    rows: {
      type: Array,
      default: () => []
    }
  },
  setup(a) {
    const e = a, n = x(), u = h(() => e.columns.map((t) => t.field)), r = h(() => e.rows.map((t) => {
      const p = [];
      return Object.keys(t).forEach((l, d) => {
        u.value[d] && p.push(t[u.value[d]]);
      }), p;
    })), c = (t) => Object.keys(n).includes(t);
    return (t, p) => (s(), o("div", I, [
      i("ul", P, [
        (s(!0), o(v, null, f(e.columns, (l) => (s(), o("li", {
          key: l.label,
          class: "table_columns",
          style: w(l.style)
        }, k(l.label), 5))), 128))
      ]),
      i("ul", T, [
        (s(!0), o(v, null, f(r.value, (l, d) => (s(), o("li", { key: d }, [
          i("ul", null, [
            (s(!0), o(v, null, f(l, (m, y) => (s(), o("li", {
              key: m.id,
              style: w(e.columns[y].style)
            }, [
              c(e.columns[y].field) ? g(t.$slots, e.columns[y].field, {
                key: 1,
                data: { rowData: m, rowTarget: r.value[d] }
              }, void 0, !0) : (s(), o("p", $, k(m), 1))
            ], 4))), 128))
          ])
        ]))), 128))
      ])
    ]));
  }
}, z = /* @__PURE__ */ b(O, [["__scopeId", "data-v-38a75e1e"]]);
export {
  A as MEmailInput,
  z as MPureTable
};
