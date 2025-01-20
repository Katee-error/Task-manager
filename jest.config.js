module.exports = {
  rootDir: "src",
  roots: ["<rootDir>"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tests/__mocks__/fileMock.ts",
    "\\.(css|less)$": "<rootDir>/tests/__mocks__/styleMock.ts",
  },
  setupFilesAfterEnv: ["<rootDir>/tests/setupJest.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
