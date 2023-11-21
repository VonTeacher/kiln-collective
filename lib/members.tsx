import fs from "fs";
import path from "path";
import matter from "gray-matter";

const membersDirectory = path.join(process.cwd(), "members");

export const getSortedMembersData = () => {
  const fileNames = fs.readdirSync(membersDirectory);
  const allMembersData = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(membersDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      slug,
      ...matterResult.data,
    };
  });

  return allMembersData.sort((a, b) => (a.slug > b.slug ? 1 : -1));
};
