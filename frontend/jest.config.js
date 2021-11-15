module.exports = {
    preset: "./node_modules/ts-jest/tsconfig.base.json",
    verbose: true,
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.tsx?$": "ts-jest",
        //".+\\.(css|styl|less|sass|scss)$": "<rootDir>/node_modules/jest-css-modules-transform",
    },
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    //   noEmit: false
};
