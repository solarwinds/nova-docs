var express = require('express');
var router = express.Router();
var fs = require("fs");
var path = require("path");
var _ = require("lodash");

/* GET project listing. */
router.get('/projects', function (req, res, next) {
    const hierarchy = [];
    const projects = fs.readdirSync("./projects");    
    projects.forEach((p)=> {
        const branches = fs.readdirSync(path.join("./projects", p));
        hierarchy.push({
            name: p,
            hasMaster: getBranchInfo(p, branches, ["master"]).length,
            hasDevelop: getBranchInfo(p, branches, ["develop"]).length,
            hasMain: getBranchInfo(p, branches, ["main"]).length,
            featureBranches: getBranchInfo(p, branches, ["feature", "UIF-"]),
            releaseBranches: getReleaseBranches(p, branches),
            latestRelease: getLatestRelease(p, branches),
            otherBranches: getBranchInfo(p, branches, [], ["master", "develop", "main", "feature", "UIF-", "release"]),
            branches: getBranchInfo(p, branches, [], ["master", "develop", "main"])
        });
    });

    function getBranchInfo(project, branches, branchTokens, exlusionTokens=[]) {
        return branches.filter(branch => {
            return (branchTokens.length === 0 || 
            _.find(branchTokens, (token) => branch.startsWith(token)) !== undefined) &&
            _.find(exlusionTokens, (exToken) => branch.startsWith(exToken)) === undefined;
        }).map(branch => { return {project: project, name: branch}; });
    };

    function getReleaseBranches(project, branches) {
        const releaseBranches = getBranchInfo(project, branches, ["release"]);
        return (releaseBranches === undefined || releaseBranches.length === 0) ? 
            [] : 
            releaseBranches.sort().reverse();
    };

    function getLatestRelease(project, branches) {
        const releaseBranches = getReleaseBranches(project, branches);
        return releaseBranches.length === 0 ? 
            undefined : 
            releaseBranches[0];
    };

    res.send(hierarchy);
});

module.exports = router;
