var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require("path");
var _ = require("lodash");

/* GET project listing. */
router.get('/projects', function (req, res) {
    const hierarchy = [];
    const projects = fs.readdirSync("./projects");
    projects.forEach((p)=> {
        const branches = fs.readdirSync(path.join("./projects", p));
        hierarchy.push({
            name: p,
            branches: [...getReleaseBranches(p, branches),  ...getBranchInfo(p, branches, ["main"]) ]
        });
    });

    function getBranchInfo(project, branches, branchTokens, exlusionTokens=[]) {
        return branches.filter(branch => {
            return (branchTokens.length === 0 ||
            _.find(branchTokens, (token) => branch.startsWith(token)) !== undefined) &&
            _.find(exlusionTokens, (exToken) => branch.startsWith(exToken)) === undefined;
        }).map(branch => { return {project: project, name: branch}; });
    }

    function getReleaseVersion(releaseBranch) {
        return Math.floor(+releaseBranch.name.slice(releaseBranch.name.indexOf('v') + 1 , releaseBranch.name.indexOf('x') - 1));
    }

    function getReleaseBranches(project, branches) {
        const releaseBranches = getBranchInfo(project, branches, ["release"]);
        return (releaseBranches === undefined || releaseBranches.length === 0) ?
            [] :
            releaseBranches.reverse().sort(function (a, b) {
                const releaseVersionA = getReleaseVersion(a);
                const releaseVersionB = getReleaseVersion(b);

                if (releaseVersionA > releaseVersionB) {
                    return -1;
                }
                if (releaseVersionA < releaseVersionB) {
                    return 1;
                }
                return 0;
            });
    }

    res.send(hierarchy);
});

module.exports = router;
