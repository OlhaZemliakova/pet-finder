import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import FooterComponent from "../FooterComponent.vue";

describe("FooterComponent", () => {
  it("show correct date", () => {
    const wrapper = mount(FooterComponent);
    expect(wrapper.text()).toContain("2023 — Pet Finder");
  });
});
