const fs = require("fs");
const path = require('path');

// Enable support for AndroidX & Jetifier
function androidXUpgrade (context) {
    console.log("Start after prepare hook!");
    const androidPlatformRoot = path.join(context.opts.projectRoot, 'platforms/android');
    const gradlePropertiesPath = path.join(androidPlatformRoot, 'gradle.properties');

    console.log("Read gradle properties");
    let gradlePropertiesStr = fs.readFileSync(gradlePropertiesPath, 'utf-8');
    if (gradlePropertiesStr) {
        console.log("Found gradle log!");
        const enableAndroidX = "android.useAndroidX=true";
        const enableJetifier = "android.enableJetifier=true";
        const isAndroidXEnabled = gradlePropertiesStr.includes(enableAndroidX);
        const isJetifierEnabled = gradlePropertiesStr.includes(enableJetifier);

        if (isAndroidXEnabled && isJetifierEnabled)
            return;

        if (isAndroidXEnabled === false)
            gradlePropertiesStr += "\n" + enableAndroidX;

        if (isJetifierEnabled === false)
            gradlePropertiesStr += "\n" + enableJetifier;
        console.log("Write gradle log");
        fs.writeFileSync(gradlePropertiesPath, gradlePropertiesStr, 'utf-8');
        console.log("End after prepare hook!");
    }
}

module.exports = function (context) {
    androidXUpgrade(context);
};
