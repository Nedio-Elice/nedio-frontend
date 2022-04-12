module.exports ={
    preset: "ts-jest",
    roots: ["<rootDir>/src/__test__/"],
    testEnvironment: "jsdom",
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
        "<rootDir>/src/__mock__/fileMock.ts",
    },
    setupFilesAfterEnv: ["<rootDir>/src/__test__/setupTests.ts"],
}
  