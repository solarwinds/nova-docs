const fs = require("fs");
const path = require("path");

function getVersionNumber(releaseBranch) {
    const name = releaseBranch?.name ?? "";
    const matches = /v([\d]+(?:[.]\d+)?)/.exec(name);
    return matches ? Number(matches[1]) : Infinity;
}

function compare(a, b) {
    if (a > b) {
        return -1;
    }
    if (a < b) {
        return 1;
    }
    return 0;
}

function compareVersions(a, b) {
    return compare(getVersionNumber(a), getVersionNumber(b));
}

function getBranchInfo(project, branches, branchTokens, exlusionTokens = []) {
    return (branches ?? [])
        .filter(
            (branch) =>
                (!branchTokens.length ||
                    branchTokens.some((token) => branch.startsWith(token))) &&
                !exlusionTokens.some((exToken) => branch.startsWith(exToken))
        )
        .map((branch) => ({
            project: project,
            name: branch,
        }));
}

function getReleaseBranches(project, branches) {
    const releaseBranches = getBranchInfo(project, branches, ["release"]);
    releaseBranches.sort(compareVersions);
    return releaseBranches;
}

const express = require("express");
const router = express.Router();

/* GET project listing. */
router.get("/projects", function (req, res) {
    const projects = fs.readdirSync("./projects");
    const hierarchy = projects.map((p) => {
        const branches = fs.readdirSync(path.join("./projects", p));
        return {
            name: p,
            branches: [
                ...getBranchInfo(p, branches, ["main"]),
                ...getReleaseBranches(p, branches),
            ],
        };
    });

    res.send(hierarchy);
});

module.exports = router;
