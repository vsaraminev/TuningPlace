const express = require('express')
const authCheck = require('../middleware/auth-check');
const Project = require('../models/Project')
const Comment = require('../models/Comment')

const router = new express.Router()

function validateCommentForm(payload) {
    const errors = {}
    let isFormValid = true
    let message = ''


    if (!payload || typeof payload.content !== 'string' || payload.content.length < 3 || payload.content.length > 200) {
        isFormValid = false
        errors.content = 'Content must be at least 3 symbols and less than 200 symbols.'
    }

    if (!payload || !payload.creatorName || typeof payload.creatorName !== 'string') {
        isFormValid = false
        errors.creatorName = 'Invalid creatorName.'
    }

    if (!payload || !payload.creatorId || typeof payload.creatorId !== 'string') {
        isFormValid = false
        errors.creatorId = 'Invalid creatorId.'
    }

    if (!payload || !payload.projectId || typeof payload.projectId !== 'string') {
        isFormValid = false
        errors.projectId = 'Invalid projectId.'
    }


    if (!isFormValid) {
        message = 'Check the form for errors.'
    }

    return {
        success: isFormValid,
        message,
        errors
    }
}

router.post('/create', authCheck, async (req, res) => {
    const commentObj = req.body;
    commentObj.creatorId = req.user.id;
    if (req.user.roles.indexOf('User') > -1) {
        const validationResult = validateCommentForm(commentObj)
        var user = req.user;
        if (!user) {
            return res.status(200).json({
                success: false,
                message: "There is no user with these credentials"
            })
        }
        if (!validationResult.success) {
            return res.status(200).json({
                success: false,
                message: validationResult.message,
                errors: validationResult.errors
            })
        }

        const commentToCreate = commentObj;
        const projectCommented = await Project.findById(commentObj.projectId);
        commentToCreate.projectId = projectCommented._id;

        Comment
            .create(commentToCreate)
            .then(async (createdComment) => {
                res.status(200).json({
                    success: true,
                    message: 'Comment added successfully.',
                    data: createdComment
                })
                await projectCommented.comments.push(createdComment.id);
                await projectCommented.save();
            })
            .catch((err) => {
                console.log(err)
                let message = 'Something went wrong :( Check the form for errors.'
                if (err.code === 11000) {
                    message = 'Post with the given name already exists.'
                }
                return res.status(200).json({
                    success: false,
                    message: message
                })
            })
    } else {
        return res.status(200).json({
            success: false,
            message: 'Invalid credentials!'
        })
    }
})

router.get('/allByProject/:id', (req, res) => {
    const projectId = req.params.id
    Comment
        .find({ projectId: projectId })
        .then(comments => {
            res.status(200).json(comments)
        })
        .catch((err) => {
            console.log(err)
            const message = 'Something went wrong :('
            return res.status(200).json({
                success: false,
                message: message
            })
        })
})

router.delete('/delete/:id', authCheck, (req, res) => {
    const id = req.params.id
    const user = req.user._id
    Comment.findById(id)
        .then((comment) => {
            if (!comment) {
                return res.status(200).json({
                    success: false,
                    message: 'Comment does not exists!'
                })
            }

            if ((comment.creatorId.toString() != user && !req.user.roles.includes("Admin"))) {
                return res.status(401).json({
                    success: false,
                    message: 'Unauthorized!'
                })
            }

            Comment.findByIdAndDelete(id)
                .then(() => {
                    return res.status(200).json({
                        success: true,
                        message: 'Comment deleted successfully!'
                    })
                })
        })
})

module.exports = router