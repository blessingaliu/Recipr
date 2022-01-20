test("Test description", () => {
    const t = () => {
      throw new TypeError("This page doesnt exist");
    };
    expect(t).toThrow(TypeError);
    expect(t).toThrow("This page doesnt exist");
});