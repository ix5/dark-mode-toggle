function toggleDark() {
    let stylesheets = document.styleSheets;
    for (let sheet of stylesheets) {
        try {
            ruleList = sheet.cssRules;
            if (ruleList == undefined) {
              continue;
            }
        } catch (e) {
            // Catch CORS denials and skip stylesheet
            continue;
        }
        let dark = "(prefers-color-scheme: dark)"
        let light = "(prefers-color-scheme: light)"
        for (let rule of ruleList) {
            // type 4 == CSSMediaRule
            if (rule.type !== 4) {
                continue;
            }
            // conditionText not available to modify in chrome
            //let text = rule.conditionText;
            let text = rule.media.mediaText;
            if (text.slice(0, 22) == "(prefers-color-scheme:") {
                rule.media.mediaText == dark ?
                    rule.media.mediaText = light :
                    rule.media.mediaText = dark
            }
        }
    }
}

toggleDark();
