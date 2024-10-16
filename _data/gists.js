import Fetch from "@11ty/eleventy-fetch";
import { Octokit } from "octokit";
const octokit = new Octokit();

const showLanguages = ["Lua", "Racket"];

export default async function () {
  let results = await Fetch("https://api.github.com/users/youssefsahli/gists", {
    duration: "15d",
    type: "json",
  });

  let loadedFiles = [];
  let ffiles = [];

  for (const res of results) {
    for (const file in res.files) {
      let fObj = res.files[file];
      ffiles.push(fObj.raw_url);
      if (showLanguages.includes(fObj.language)) {
        let data = await Fetch(fObj.raw_url);
        let u8data = new Uint8Array(data);
        loadedFiles.push({
          desc: res.description,
          lang: fObj.language,
          content: new TextDecoder().decode(u8data),
        });
      }
    }
  }

  return { loadedFiles };
}
