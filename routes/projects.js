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

    function getReleaseBranches(project, branches) {
        const releaseBranches = getBranchInfo(project, branches, ["release"]);
        return (releaseBranches === undefined || releaseBranches.length === 0) ?
            [] :
            releaseBranches.reverse().sort(function (a, b) {
                const releaseVersionA = Math.floor(+a.name.slice(a.name.indexOf('v') + 1 , a.name.indexOf('x') - 1));
                const releaseVersionB = Math.floor(+b.name.slice(b.name.indexOf('v') + 1 , b.name.indexOf('x') - 1));

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
