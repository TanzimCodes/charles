import * as core from "@actions/core"
import * as github from "@actions/github"

async function closeIssue() {
    // const token = core.getInput('token', { required: true })
    // const issue_number = github.context.issue.number
    // const { owner, repo } = github.context.repo

    // const octokit = github.getOctokit(token)
    
    // await octokit.rest.issues.createComment({
    //     owner, repo, issue_number, body: "Thanks, but this repository doesn't accept issues."
    // })

    // await octokit.rest.issues.update({
    //      owner, repo, issue_number, state: 'closed'
    // })
}

closeIssue();
// async function addlabel() {
//     try {
//         const token = core.getInput('token', { required: true })
//         const label = core.getInput('label', { required: true })

//         const issue_number = github.context.issue.number

//         const { owner, repo } = github.context.repo

//         const octokit = github.getOctokit(token)

//         await octokit.rest.issues.addLabels({
//             owner, repo, issue_number, labels: [label]
//         })

//         core.info(`Added labels  ${label}`)

//     } catch (error) {
//         if (error instanceof Error)
//             core.setFailed(error.message)
//         else
//             core.setFailed("Unknonw error")
//     }
// }

// addlabel()
// async function addComment() {
//     try {
//         const token = core.getInput('token', { required: true })
//         const comment = core.getInput('comment', { required: true })

//         const issue_number = github.context.issue.number

//         const { owner, repo } = github.context.repo

//         const octokit = github.getOctokit(token)

//         await octokit.rest.issues.createComment({
//             owner, repo, issue_number, body: comment
//         })

//         core.info(`Comment Added ${comment}`)

//     } catch (error) {
//         if (error instanceof Error)
//             core.setFailed(error.message)
//         else
//             core.setFailed("Unknonw error")
//     }
// }

// addComment()
// function checkUser() {
//     console.log(github.context.actor, core.getInput("allowed_user"))

//     if (github.context.actor == core.getInput('allowed_user').trim()) {
//         core.setOutput('is_authorized', true)
//         return;
//     }

//     core.setFailed('User is not authorized')
// }

// checkUser()



// if (github.context.eventName !== "push")
//     core.setFailed('Only works on push events')

// if (!github.context.ref.split('/')[2].startsWith('feature')) {
//     core.setFailed('Does not start with feature')
// }
// console.log("success")