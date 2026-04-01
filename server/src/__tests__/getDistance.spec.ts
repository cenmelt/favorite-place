import { getDistance } from "../utils/getDistance";

describe("getDistance", () => {
  it("should return 0 for the same point", () => {
    const point = { lat: 48.8566, lng: 2.3522 };
    expect(getDistance(point, point)).toBe(0);
  });

  it("should return ~392 km between Paris and Lyon", () => {
    const paris = { lat: 48.8566, lng: 2.3522 };
    const lyon = { lat: 45.764, lng: 4.8357 };
    const distance = getDistance(paris, lyon);
    expect(distance).toBeGreaterThan(380);
    expect(distance).toBeLessThan(400);
  });

  it("should return the same distance regardless of order", () => {
    const paris = { lat: 48.8566, lng: 2.3522 };
    const lyon = { lat: 45.764, lng: 4.8357 };
    expect(getDistance(paris, lyon)).toBeCloseTo(getDistance(lyon, paris), 5);
  });
});
