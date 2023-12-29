import fs from "node:fs";
import path from "node:path";
import { getFloeConfig } from "./get-floe-config";

export const getRulesets = () => {
  const { rulesets } = getFloeConfig();

  const rulesetsWithRules = Object.entries(rulesets).map(([key, value]) => {
    return {
      name: key,
      ...value,
      rules: Object.entries(value.rules).map(([ruleKey, ruleValue]) => {
        let rule;

        try {
          rule = fs.readFileSync(
            path.join(process.cwd(), `.floe/rules/${ruleKey}.md`),
            "utf-8"
          );
        } catch (e) {
          console.log(
            `Invalid config. Rule "${ruleKey}" does not exist in "rules" directory.`
          );

          process.exit(1);
        }

        return {
          code: ruleKey,
          level: ruleValue,
          description: rule,
        };
      }),
    };
  });

  return rulesetsWithRules;
};