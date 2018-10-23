import Vue from "vue";
import App from "./components/App.js";

describe("Vue component tests", () => {
  it("An example test should pass.", () => {
    expect(2).toEqual(2);
  });
  it("The component should have a title property.", () => {
    const defaultData = App.data();
    expect(defaultData.title).not.toBe(undefined);
  });
  it("The component's title should be BT3103 Week 10", () => {
    const defaultData = App.data();
    expect(defaultData.title).toBe("BT3103 Week 10");
  });

  it("The component should have an add function", () => {
    expect(typeof App.methods.add).toBe("function");
  });

  it("The add function should add 2 numbers together", () => {
    expect(App.methods.add(5, 8)).toBe(13);
  });

  it("The component should have an updateCurrentChart function.", () => {
    expect(typeof App.methods.updateCurrentChart).toBe("function");
  });
  it("has a created hook", () => {
    expect(typeof App).toBe("object");
  });
  it("The component should have a data function.", () => {
    expect(typeof App.data).toBe("function");
    const defaultData = App.data();
    // And there should be localCharts.
    expect(typeof defaultData).toBe("object");
  });
  it("There should be local chart data.", () => {
    const defaultData = App.data();
    expect(defaultData.localLineData.length).toBe(3);
    expect(defaultData.localBarData.length).toBe(5);
  });
  it("Current chart should be localBarData.", () => {
    const defaultData = App.data();
    expect(defaultData.currentChart).toBe("localBarData");
  });
});
